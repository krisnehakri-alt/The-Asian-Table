import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useData } from '../../context/DataContext';
import {
  LayoutDashboard,
  UtensilsCrossed,
  Image,
  MapPin,
  Star,
  Mail,
  Settings,
  LogOut,
  Menu as MenuIcon,
  X,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';

const AdminLayout = () => {
  const { logoutAdmin, settings } = useData();
  const navigate = useNavigate();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navItems = [
    { label: 'Overview', path: '/admin', icon: LayoutDashboard, end: true },
    { label: 'Menu Management', path: '/admin/menu', icon: UtensilsCrossed },
    { label: 'Gallery Management', path: '/admin/gallery', icon: Image },
    { label: 'Branch Management', path: '/admin/branches', icon: MapPin },
    { label: 'Customer Reviews', path: '/admin/reviews', icon: Star },
    { label: 'Contact Messages', path: '/admin/messages', icon: Mail },
    { label: 'Website Settings', path: '/admin/settings', icon: Settings },
  ];

  const handleLogout = () => {
    logoutAdmin();
    navigate('/');
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#0e0c0a', color: '#f3e8d8', fontFamily: 'Inter, sans-serif' }}>
      
      {/* Sidebar for Desktop */}
      <aside style={{
        width: '260px',
        background: '#14110e',
        borderRight: '1px solid rgba(212, 175, 55, 0.15)',
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        zIndex: 100,
        transition: 'transform 0.3s ease',
        transform: isMobileOpen ? 'translateX(0)' : 'none'
      }} className="admin-sidebar">
        
        {/* Sidebar Header */}
        <div style={{ padding: '24px 20px', borderBottom: '1px solid rgba(212, 175, 55, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#d4af37' }}>
              <ShieldCheck size={22} />
              <span style={{ fontFamily: 'Cinzel, serif', fontWeight: '700', fontSize: '16px', letterSpacing: '1px' }}>
                ADMIN PORTAL
              </span>
            </div>
            <span style={{ fontSize: '11px', color: '#a09585', display: 'block', marginTop: '4px' }}>
              {settings.restaurantName}
            </span>
          </div>

          <button
            onClick={() => setIsMobileOpen(false)}
            style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', display: 'none' }}
            className="mobile-close-btn"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation Items */}
        <nav style={{ flex: 1, padding: '20px 12px', display: 'flex', flexDirection: 'column', gap: '6px', overflowY: 'auto' }}>
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.end}
                onClick={() => setIsMobileOpen(false)}
                style={({ isActive }) => ({
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  color: isActive ? '#d4af37' : '#a09585',
                  background: isActive ? 'rgba(212, 175, 55, 0.12)' : 'transparent',
                  borderLeft: isActive ? '3px solid #d4af37' : '3px solid transparent',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: isActive ? '600' : '400',
                  transition: 'all 0.2s ease'
                })}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>

        {/* Sidebar Footer */}
        <div style={{ padding: '16px', borderTop: '1px solid rgba(212, 175, 55, 0.15)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '10px',
              borderRadius: '6px',
              background: 'rgba(255, 255, 255, 0.05)',
              color: '#d4af37',
              textDecoration: 'none',
              fontSize: '13px'
            }}
          >
            <ExternalLink size={14} /> View Live Website
          </a>

          <button
            onClick={handleLogout}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '10px',
              borderRadius: '6px',
              background: 'rgba(220, 38, 38, 0.15)',
              border: '1px solid rgba(220, 38, 38, 0.3)',
              color: '#f87171',
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: '500'
            }}
          >
            <LogOut size={14} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div style={{ flex: 1, marginLeft: '260px', minWidth: 0, display: 'flex', flexDirection: 'column' }} className="admin-main-area">
        
        {/* Top Navbar */}
        <header style={{
          height: '64px',
          background: 'rgba(20, 17, 14, 0.8)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(212, 175, 55, 0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 28px',
          position: 'sticky',
          top: 0,
          zIndex: 90
        }}>
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            style={{ background: 'none', border: 'none', color: '#d4af37', cursor: 'pointer', display: 'none' }}
            className="mobile-menu-btn"
          >
            <MenuIcon size={24} />
          </button>

          <h1 style={{ fontFamily: 'Cinzel, serif', fontSize: '18px', color: '#d4af37', margin: 0, fontWeight: '600' }}>
            Dashboard Control Center
          </h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '13px', color: '#a09585' }}>Logged in as <strong style={{ color: '#fff' }}>Administrator</strong></span>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'linear-gradient(135deg, #d4af37, #aa820a)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontWeight: 'bold', fontSize: '14px' }}>
              A
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main style={{ padding: '32px 28px', flex: 1 }}>
          <Outlet />
        </main>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .admin-sidebar {
            transform: translateX(-100%) !important;
          }
          .admin-sidebar.mobile-open {
            transform: translateX(0) !important;
          }
          .admin-main-area {
            margin-left: 0 !important;
          }
          .mobile-menu-btn, .mobile-close-btn {
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
};

export default AdminLayout;
