import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { DataProvider, useData } from './context/DataContext';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';
import ReservationModal from './components/ReservationModal';

// Public Lazy Loaded Pages
const HomePage = lazy(() => import('./pages/HomePage'));
const MenuPage = lazy(() => import('./pages/MenuPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));

// Admin Lazy Loaded Components & Pages
const AdminLayout = lazy(() => import('./pages/admin/AdminLayout'));
const AdminLoginPage = lazy(() => import('./pages/admin/AdminLoginPage'));
const DashboardOverview = lazy(() => import('./pages/admin/DashboardOverview'));
const MenuManagement = lazy(() => import('./pages/admin/MenuManagement'));
const GalleryManagement = lazy(() => import('./pages/admin/GalleryManagement'));
const BranchManagement = lazy(() => import('./pages/admin/BranchManagement'));
const ReviewManagement = lazy(() => import('./pages/admin/ReviewManagement'));
const ContactInbox = lazy(() => import('./pages/admin/ContactInbox'));
const WebsiteSettings = lazy(() => import('./pages/admin/WebsiteSettings'));

// Scroll to top helper on route navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Protected Admin Route Guard
const ProtectedAdminRoute = () => {
  const { isAdminAuthenticated } = useData();
  return isAdminAuthenticated ? <AdminLayout /> : <AdminLoginPage />;
};

// Loading fallback component
const PageLoader = () => (
  <div style={{
    minHeight: '60vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#07090C',
    color: '#d4af37',
    fontFamily: 'Cinzel, serif'
  }}>
    <div style={{ textAlign: 'center' }}>
      <div style={{
        width: '40px',
        height: '40px',
        border: '3px solid rgba(212, 175, 55, 0.2)',
        borderTopColor: '#d4af37',
        borderRadius: '50%',
        animation: 'spin 0.8s linear infinite',
        margin: '0 auto 16px auto'
      }} />
      <span style={{ fontSize: '14px', letterSpacing: '1px' }}>LOADING THE ASIAN TABLE...</span>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  </div>
);

// Public Layout Container
const PublicLayout = ({ onBookTableClick }) => (
  <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <Navbar onBookTableClick={onBookTableClick} />
    <main style={{ flexGrow: 1 }}>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
      </Suspense>
    </main>
    <Footer />
  </div>
);

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  return (
    <DataProvider>
      <Router>
        <ScrollToTop />
        {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
        <ReservationModal isOpen={isReservationOpen} onClose={() => setIsReservationOpen(false)} />
        
        <Routes>
          {/* Admin Nested Routes */}
          <Route path="/admin/*" element={
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route element={<ProtectedAdminRoute />}>
                  <Route index element={<DashboardOverview />} />
                  <Route path="menu" element={<MenuManagement />} />
                  <Route path="gallery" element={<GalleryManagement />} />
                  <Route path="branches" element={<BranchManagement />} />
                  <Route path="reviews" element={<ReviewManagement />} />
                  <Route path="messages" element={<ContactInbox />} />
                  <Route path="settings" element={<WebsiteSettings />} />
                  <Route path="*" element={<Navigate to="/admin" replace />} />
                </Route>
              </Routes>
            </Suspense>
          } />

          {/* Public Routes */}
          <Route path="/*" element={<PublicLayout onBookTableClick={() => setIsReservationOpen(true)} />} />
        </Routes>
      </Router>
    </DataProvider>
  );
}

export default App;
