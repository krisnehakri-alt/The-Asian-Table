import React, { useState, useMemo, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  Sparkles,
  Instagram,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Heart,
  MessageCircle,
  Camera,
  PhoneCall,
  Calendar
} from 'lucide-react';
import {
  galleryCategoriesData,
  galleryImagesData,
  instagramPostsData
} from '../data/galleryData';
import { images } from '../data/restaurantData';
import ReservationModal from '../components/ReservationModal';

const GalleryPage = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null); // null if closed, or integer index
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  // Filter gallery images based on category tab
  const filteredGallery = useMemo(() => {
    if (activeCategory === 'all') return galleryImagesData;
    return galleryImagesData.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  // Lightbox Keyboard Navigation (Arrow Left, Arrow Right, Escape)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev > 0 ? prev - 1 : filteredGallery.length - 1));
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev < filteredGallery.length - 1 ? prev + 1 : 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredGallery.length]);

  const activeLightboxImage = lightboxIndex !== null ? filteredGallery[lightboxIndex] : null;

  return (
    <div style={{ overflowX: 'hidden', backgroundColor: 'var(--bg-cream)' }}>
      {/* Reservation Modal Handler */}
      <ReservationModal isOpen={isReservationOpen} onClose={() => setIsReservationOpen(false)} />

      {/* 1. HERO BANNER */}
      <section
        className="page-banner"
        style={{ backgroundImage: `url(${images.restaurantWelcome})` }}
      >
        <div className="page-banner-overlay" />
        <div className="container page-banner-content">
          <span className="section-tag">VISUAL ATMOSPHERE</span>
          <h1 className="page-banner-title">Gallery</h1>
          <p className="section-subtitle light" style={{ marginBottom: '1.5rem', maxWidth: '640px', margin: '0 auto 1.5rem auto' }}>
            Take a look inside The Asian Table and experience our atmosphere before you visit.
          </p>
          <div className="breadcrumbs">
            <NavLink to="/">Home</NavLink>
            <span>/</span>
            <span>Gallery</span>
          </div>
        </div>
      </section>

      {/* 2. GALLERY CATEGORY FILTER TABS */}
      <section className="section-padding bg-dark" style={{ paddingBottom: '2rem' }}>
        <div className="container">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              flexWrap: 'wrap'
            }}
          >
            {galleryCategoriesData.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setLightboxIndex(null);
                }}
                style={{
                  padding: '0.7rem 1.6rem',
                  borderRadius: '50px',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  border: activeCategory === cat.id ? '1px solid var(--accent)' : '1px solid rgba(255, 255, 255, 0.12)',
                  backgroundColor: activeCategory === cat.id ? 'var(--accent)' : 'rgba(20, 28, 36, 0.7)',
                  color: activeCategory === cat.id ? '#0A0D10' : '#E0ECEE',
                  boxShadow: activeCategory === cat.id ? '0 0 20px rgba(0, 210, 180, 0.35)' : 'none'
                }}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MASONRY GRID IMAGE GALLERY (24-30 IMAGES) */}
      <section className="section-padding bg-secondary" style={{ paddingTop: '2rem' }}>
        <div className="container">
          {/* CSS Columns Grid for Masonry Layout */}
          <div
            style={{
              columnCount: '3',
              columnGap: '1.5rem'
            }}
            className="gallery-masonry-container"
          >
            {filteredGallery.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(idx)}
                className="hover-lift"
                style={{
                  breakInside: 'avoid',
                  marginBottom: '1.5rem',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  position: 'relative',
                  cursor: 'pointer',
                  border: '1px solid var(--border-light)',
                  backgroundColor: 'var(--bg-white)',
                  boxShadow: 'var(--shadow-md)'
                }}
              >
                <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      transition: 'transform 0.5s ease'
                    }}
                  />
                  {/* Overlay Gradient on Hover */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(10,13,16,0.92) 100%)',
                      opacity: 0,
                      transition: 'opacity 0.35s ease',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      padding: '1.25rem'
                    }}
                    className="gallery-item-overlay"
                  >
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <span
                        style={{
                          backgroundColor: 'rgba(0, 210, 180, 0.85)',
                          color: '#0A0D10',
                          padding: '0.4rem',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <Maximize2 size={16} />
                      </span>
                    </div>

                    <div>
                      <span
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.12em',
                          color: 'var(--accent)',
                          display: 'block',
                          marginBottom: '4px'
                        }}
                      >
                        {item.category}
                      </span>
                      <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: '#FFFFFF', margin: 0 }}>
                        {item.title}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. LIGHTBOX MODAL WITH NEXT / PREVIOUS NAVIGATION */}
      {lightboxIndex !== null && activeLightboxImage && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 2000,
            backgroundColor: 'rgba(5, 7, 9, 0.96)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem 1rem'
          }}
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setLightboxIndex(null)}
            style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid var(--accent)',
              color: '#FFFFFF',
              borderRadius: '50%',
              width: '46px',
              height: '46px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 2010,
              transition: 'all 0.2s ease'
            }}
            title="Close Lightbox"
          >
            <X size={24} color="var(--accent)" />
          </button>

          {/* Previous Image Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev > 0 ? prev - 1 : filteredGallery.length - 1));
            }}
            style={{
              position: 'absolute',
              left: '1.5rem',
              backgroundColor: 'rgba(20, 28, 36, 0.8)',
              border: '1px solid var(--accent)',
              color: 'var(--accent)',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 2010
            }}
            title="Previous Image"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Main Image Container */}
          <div
            style={{
              maxWidth: '1000px',
              maxHeight: '85vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeLightboxImage.image}
              alt={activeLightboxImage.title}
              style={{
                maxWidth: '100%',
                maxHeight: '72vh',
                objectFit: 'contain',
                borderRadius: '10px',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-lg)'
              }}
            />

            {/* Lightbox Caption & Details Bar */}
            <div
              style={{
                marginTop: '1.25rem',
                textAlign: 'center',
                backgroundColor: 'rgba(20, 28, 36, 0.9)',
                border: '1px solid var(--border-light)',
                borderRadius: '8px',
                padding: '0.85rem 1.75rem',
                maxWidth: '600px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '4px' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--accent)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                  {activeLightboxImage.category}
                </span>
                <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
                <span style={{ fontSize: '0.78rem', color: 'var(--accent-gold)' }}>
                  {lightboxIndex + 1} of {filteredGallery.length}
                </span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: '#FFFFFF', margin: 0 }}>
                {activeLightboxImage.title}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginTop: '4px' }}>
                {activeLightboxImage.description}
              </p>
            </div>
          </div>

          {/* Next Image Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev < filteredGallery.length - 1 ? prev + 1 : 0));
            }}
            style={{
              position: 'absolute',
              right: '1.5rem',
              backgroundColor: 'rgba(20, 28, 36, 0.8)',
              border: '1px solid var(--accent)',
              color: 'var(--accent)',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 2010
            }}
            title="Next Image"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}

      {/* 5. INSTAGRAM FOOD JOURNEY SECTION */}
      <section className="section-padding bg-dark" style={{ borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'var(--accent)',
                marginBottom: '0.75rem'
              }}
            >
              <Instagram size={20} />
              <span style={{ fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                @TheAsianTable
              </span>
            </div>
            <h2 className="section-title">Follow Our Food Journey</h2>
            <p className="section-subtitle">
              Tag <strong style={{ color: '#FFFFFF' }}>#TheAsianTable</strong> on Instagram to be featured in our official guest gallery.
            </p>
          </div>

          {/* Instagram Grid Layout */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '1.25rem'
            }}
          >
            {instagramPostsData.map((post) => (
              <a
                key={post.id}
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-lift"
                style={{
                  display: 'block',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  position: 'relative',
                  height: '200px',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <img
                  src={post.image}
                  alt="Instagram post"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                {/* Hover Overlay with Likes & Comments */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'rgba(10, 13, 16, 0.85)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    padding: '1rem',
                    textAlign: 'center'
                  }}
                  className="gallery-item-overlay"
                >
                  <Instagram size={26} color="var(--accent)" />
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#FFFFFF', fontSize: '0.85rem', fontWeight: 600 }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <Heart size={14} fill="var(--accent)" color="var(--accent)" /> {post.likes}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <MessageCircle size={14} color="#FFFFFF" /> {post.comments}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CTA SECTION */}
      <section className="section-padding bg-secondary" style={{ textAlign: 'center', borderTop: '1px solid var(--border-light)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <span className="section-tag">Experience It In Person</span>
          <h2 className="section-title">Join Us At The Asian Table</h2>
          <p className="section-subtitle" style={{ marginBottom: '2.5rem' }}>
            Book your sanctuary table today to enjoy high-flame Asian delicacies in an setting of gold luxury.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <button onClick={() => setIsReservationOpen(true)} className="btn btn-teal" style={{ padding: '1.05rem 2.2rem' }}>
              <Calendar size={18} />
              <span>Reserve Table</span>
            </button>

            <button onClick={() => navigate('/menu')} className="btn btn-outline-light" style={{ padding: '1.05rem 2.2rem' }}>
              <span>Explore Signature Menu</span>
            </button>
          </div>
        </div>
      </section>

      {/* Embedded CSS for Masonry and Overlay Hover Effects */}
      <style>{`
        .gallery-item-overlay {
          opacity: 0;
        }
        .hover-lift:hover .gallery-item-overlay {
          opacity: 1 !important;
        }
        .hover-lift:hover img {
          transform: scale(1.06);
        }
        @media (max-width: 900px) {
          .gallery-masonry-container {
            column-count: 2 !important;
          }
        }
        @media (max-width: 550px) {
          .gallery-masonry-container {
            column-count: 1 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default GalleryPage;
