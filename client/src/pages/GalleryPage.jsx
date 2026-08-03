import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Sparkles,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  CheckCircle2,
  UtensilsCrossed,
  Award,
  Leaf,
  HeartHandshake
} from 'lucide-react';
import { galleryImagesData as defaultGallery } from '../data/galleryData';
import { images } from '../data/restaurantData';
import { useData } from '../context/DataContext';

const GalleryPage = () => {
  const { galleryImages } = useData();
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Use galleryImages if available, fallback to default 6 curated images
  const displayGallery = galleryImages && galleryImages.length > 0 ? galleryImages.slice(0, 6) : defaultGallery;

  // Lightbox Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev > 0 ? prev - 1 : displayGallery.length - 1));
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev < displayGallery.length - 1 ? prev + 1 : 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, displayGallery.length]);

  const activeLightboxImage = lightboxIndex !== null ? displayGallery[lightboxIndex] : null;

  const highlights = [
    { title: 'Authentic Asian fine dining', desc: 'Preserving centuries-old culinary heritage recipes', icon: UtensilsCrossed },
    { title: 'Premium ambience', desc: 'Sophisticated dark mahogany and warm glowing lanterns', icon: Award },
    { title: 'Fresh ingredients', desc: 'Organic herbs and sushi-grade seafood sourced daily', icon: Leaf },
    { title: 'Exceptional customer experience', desc: 'Attentive luxury hospitality tailored for every guest', icon: HeartHandshake }
  ];

  return (
    <div style={{ overflowX: 'hidden', backgroundColor: 'var(--bg-dark)' }}>
      {/* 1. HERO BANNER */}
      <section
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(10, 13, 16, 0.65) 0%, rgba(10, 13, 16, 0.95) 100%), url(${images.restaurantWelcome})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '7rem 1.5rem 3.5rem 1.5rem',
          textAlign: 'center',
          borderBottom: '1px solid var(--border-light)'
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'rgba(0, 210, 180, 0.1)',
              border: '1px solid var(--accent)',
              padding: '0.4rem 1.25rem',
              borderRadius: '50px',
              marginBottom: '1rem'
            }}
          >
            <Sparkles size={15} color="var(--accent)" />
            <span
              style={{
                fontSize: '0.75rem',
                color: 'var(--accent)',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase'
              }}
            >
              OUR RESTAURANT AMBIENCE
            </span>
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
              color: '#FFFFFF',
              marginBottom: '0.75rem',
              letterSpacing: '-0.02em',
              lineHeight: 1.15
            }}
          >
            Photo <span style={{ color: 'var(--accent)' }}>Gallery</span>
          </h1>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              fontSize: '0.85rem',
              color: 'var(--text-muted)'
            }}
          >
            <NavLink to="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</NavLink>
            <span>/</span>
            <span style={{ color: 'var(--accent)' }}>Photo Gallery</span>
          </div>
        </div>
      </section>

      {/* 2. SPLIT GALLERY SECTION (LEFT CONTENT, RIGHT 6-PHOTO GRID) */}
      <section style={{ padding: '5rem 0 6rem 0', backgroundColor: 'var(--bg-dark)' }}>
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 1.5rem' }}>
          
          <div className="gallery-split-layout">
            
            {/* LEFT CONTENT SECTION */}
            <div className="gallery-left-content">
              <span className="section-tag" style={{ justifyContent: 'flex-start', marginBottom: '0.75rem' }}>
                LUXURY FINE DINING SANCTUARY
              </span>
              
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2rem, 3.5vw, 2.6rem)',
                  color: '#FFFFFF',
                  lineHeight: 1.25,
                  marginBottom: '1.25rem'
                }}
              >
                Immerse Yourself In The Asian Table Experience
              </h2>

              <p
                style={{
                  color: 'var(--text-muted)',
                  fontSize: '1.02rem',
                  lineHeight: 1.8,
                  marginBottom: '2rem'
                }}
              >
                Stepping into The Asian Table is an invitation to indulge your senses. From warm mahogany architectural lattice work to private dining alcoves bathed in amber light, every detail is crafted to offer a tranquil escape and unforgettable dining moments.
              </p>

              {/* HIGHLIGHTS BULLETS */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
                {highlights.map((item, index) => {
                  const IconComp = item.icon;
                  return (
                    <div
                      key={index}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '1rem',
                        backgroundColor: '#0F151C',
                        padding: '1rem 1.25rem',
                        borderRadius: '10px',
                        border: '1px solid var(--border-light)'
                      }}
                    >
                      <div
                        style={{
                          padding: '0.6rem',
                          borderRadius: '50%',
                          backgroundColor: 'rgba(0, 210, 180, 0.15)',
                          border: '1px solid var(--accent)',
                          color: 'var(--accent)',
                          flexShrink: 0
                        }}
                      >
                        <IconComp size={18} />
                      </div>
                      <div>
                        <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: '#FFFFFF', margin: '0 0 2px 0' }}>
                          {item.title}
                        </h4>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', margin: 0, lineHeight: 1.5 }}>
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <NavLink to="/contact" className="btn btn-teal" style={{ padding: '0.95rem 2rem', display: 'inline-flex' }}>
                <span>Reserve Your Table</span>
              </NavLink>
            </div>

            {/* RIGHT 6-PHOTO GRID SECTION */}
            <div className="gallery-right-grid">
              {displayGallery.map((item, idx) => (
                <div
                  key={item.id || idx}
                  onClick={() => setLightboxIndex(idx)}
                  className="gallery-card-wrapper"
                >
                  <div className="gallery-card-inner">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="gallery-card-img"
                      loading="lazy"
                    />
                    <div className="gallery-card-overlay">
                      <div className="gallery-card-icon">
                        <Maximize2 size={16} color="var(--accent)" />
                      </div>
                      <div>
                        <span className="gallery-card-cat">{item.category}</span>
                        <h3 className="gallery-card-title">{item.title}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 3. LIGHTBOX MODAL */}
      {lightboxIndex !== null && activeLightboxImage && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 2000,
            backgroundColor: 'rgba(5, 7, 9, 0.95)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem 1.5rem'
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
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
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
              transition: 'all 0.25s ease'
            }}
            title="Close Lightbox"
          >
            <X size={22} color="var(--accent)" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev > 0 ? prev - 1 : displayGallery.length - 1));
            }}
            style={{
              position: 'absolute',
              left: '1.5rem',
              backgroundColor: 'rgba(20, 28, 36, 0.8)',
              border: '1px solid var(--border-light)',
              color: 'var(--accent)',
              borderRadius: '50%',
              width: '48px',
              height: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 2010
            }}
            title="Previous"
          >
            <ChevronLeft size={26} />
          </button>

          {/* Main Lightbox Content */}
          <div
            style={{
              maxWidth: '960px',
              width: '100%',
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
                maxHeight: '70vh',
                objectFit: 'contain',
                borderRadius: '10px',
                border: '1px solid var(--border-light)',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)'
              }}
            />

            <div
              style={{
                marginTop: '1.5rem',
                textAlign: 'center',
                backgroundColor: 'rgba(20, 28, 36, 0.9)',
                border: '1px solid var(--border-light)',
                borderRadius: '10px',
                padding: '1rem 2rem',
                maxWidth: '640px',
                width: '100%'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '6px' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--accent)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                  {activeLightboxImage.category}
                </span>
                <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>•</span>
                <span style={{ fontSize: '0.78rem', color: 'var(--accent-gold)' }}>
                  {lightboxIndex + 1} of {displayGallery.length}
                </span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: '#FFFFFF', margin: 0 }}>
                {activeLightboxImage.title}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '6px', lineHeight: 1.5 }}>
                {activeLightboxImage.description}
              </p>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev < displayGallery.length - 1 ? prev + 1 : 0));
            }}
            style={{
              position: 'absolute',
              right: '1.5rem',
              backgroundColor: 'rgba(20, 28, 36, 0.8)',
              border: '1px solid var(--border-light)',
              color: 'var(--accent)',
              borderRadius: '50%',
              width: '48px',
              height: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 2010
            }}
            title="Next"
          >
            <ChevronRight size={26} />
          </button>
        </div>
      )}

      {/* Embedded CSS for Split Layout */}
      <style>{`
        .gallery-split-layout {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 3.5rem;
          align-items: center;
        }

        .gallery-right-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        .gallery-card-wrapper {
          border-radius: 12px;
          overflow: hidden;
          background-color: var(--bg-white);
          border: 1px solid var(--border-light);
          cursor: pointer;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }

        .gallery-card-wrapper:hover {
          box-shadow: 0 12px 30px rgba(0, 210, 180, 0.18);
          transform: translateY(-4px);
        }

        .gallery-card-inner {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
        }

        .gallery-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }

        .gallery-card-wrapper:hover .gallery-card-img {
          transform: scale(1.06);
        }

        .gallery-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(10, 13, 16, 0) 25%, rgba(10, 13, 16, 0.9) 100%);
          opacity: 0;
          transition: opacity 0.35s ease;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          justifyContent: space-between;
        }

        .gallery-card-wrapper:hover .gallery-card-overlay {
          opacity: 1;
        }

        .gallery-card-icon {
          align-self: flex-end;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background-color: rgba(10, 13, 16, 0.8);
          border: 1px solid var(--accent);
          display: flex;
          align-items: center;
          justifyContent: center;
        }

        .gallery-card-cat {
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: var(--accent);
          display: block;
          margin-bottom: 2px;
        }

        .gallery-card-title {
          font-family: var(--font-serif);
          font-size: 1.05rem;
          color: #FFFFFF;
          margin: 0;
        }

        @media (max-width: 992px) {
          .gallery-split-layout {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }

        @media (max-width: 576px) {
          .gallery-right-grid {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }
        }
      `}</style>
    </div>
  );
};

export default GalleryPage;
