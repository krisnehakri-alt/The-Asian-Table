import React, { useState, useMemo, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Sparkles,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2
} from 'lucide-react';
import {
  galleryCategoriesData,
  galleryImagesData
} from '../data/galleryData';
import { images } from '../data/restaurantData';

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Filter gallery images based on active category
  const filteredGallery = useMemo(() => {
    if (activeCategory === 'all') return galleryImagesData;
    return galleryImagesData.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  // Lightbox Keyboard Navigation (Escape, ArrowLeft, ArrowRight)
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
    <div style={{ overflowX: 'hidden', backgroundColor: 'var(--bg-dark)' }}>
      {/* 1. HERO SECTION */}
      <section
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(10, 13, 16, 0.65) 0%, rgba(10, 13, 16, 0.95) 100%), url(${images.restaurantWelcome})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '8rem 1.5rem 4rem 1.5rem',
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
              marginBottom: '1.25rem'
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
              Visual Showcase
            </span>
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
              color: '#FFFFFF',
              marginBottom: '1rem',
              letterSpacing: '-0.02em',
              lineHeight: 1.15
            }}
          >
            Atmosphere & <span style={{ color: 'var(--accent)' }}>Culinary Art</span>
          </h1>

          <p
            style={{
              color: 'var(--text-muted)',
              fontSize: '1.05rem',
              lineHeight: 1.7,
              maxWidth: '620px',
              margin: '0 auto 1.5rem auto'
            }}
          >
            Experience the refined elegance, handcrafted high-flame delicacies, and tranquil dining spaces of The Asian Table.
          </p>

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
            <span style={{ color: 'var(--accent)' }}>Gallery</span>
          </div>
        </div>
      </section>

      {/* 2. GALLERY GRID SECTION WITH CATEGORY FILTERS */}
      <section style={{ padding: '4rem 0 6rem 0', backgroundColor: 'var(--bg-dark)' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          
          {/* Category Filter Chips */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              flexWrap: 'wrap',
              marginBottom: '3.5rem'
            }}
          >
            {galleryCategoriesData.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setLightboxIndex(null);
                  }}
                  style={{
                    padding: '0.65rem 1.6rem',
                    borderRadius: '50px',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    border: isActive ? '1px solid var(--accent)' : '1px solid rgba(255, 255, 255, 0.1)',
                    backgroundColor: isActive ? 'var(--accent)' : 'rgba(20, 28, 36, 0.6)',
                    color: isActive ? '#0A0D10' : '#E0ECEE',
                    boxShadow: isActive ? '0 0 20px rgba(0, 210, 180, 0.3)' : 'none'
                  }}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

          {/* Responsive Image Grid (3 desktop, 2 tablet, 1 mobile) */}
          <div className="clean-gallery-grid">
            {filteredGallery.map((item, idx) => (
              <div
                key={item.id}
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
                  {/* Subtle Hover Overlay */}
                  <div className="gallery-card-overlay">
                    <div className="gallery-card-icon">
                      <Maximize2 size={18} color="var(--accent)" />
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
              setLightboxIndex((prev) => (prev > 0 ? prev - 1 : filteredGallery.length - 1));
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
                  {lightboxIndex + 1} of {filteredGallery.length}
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
              setLightboxIndex((prev) => (prev < filteredGallery.length - 1 ? prev + 1 : 0));
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

      {/* Embedded Clean Grid CSS */}
      <style>{`
        .clean-gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
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
          box-shadow: 0 12px 30px rgba(0, 210, 180, 0.15);
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
          transform: scale(1.05);
        }

        .gallery-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(10, 13, 16, 0) 30%, rgba(10, 13, 16, 0.88) 100%);
          opacity: 0;
          transition: opacity 0.35s ease;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .gallery-card-wrapper:hover .gallery-card-overlay {
          opacity: 1;
        }

        .gallery-card-icon {
          align-self: flex-end;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: rgba(10, 13, 16, 0.75);
          border: 1px solid var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .gallery-card-cat {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: var(--accent);
          display: block;
          margin-bottom: 4px;
        }

        .gallery-card-title {
          font-family: var(--font-serif);
          font-size: 1.15rem;
          color: #FFFFFF;
          margin: 0;
        }

        @media (max-width: 992px) {
          .clean-gallery-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
        }

        @media (max-width: 576px) {
          .clean-gallery-grid {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }
        }
      `}</style>
    </div>
  );
};

export default GalleryPage;
