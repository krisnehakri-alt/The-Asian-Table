import React, { useEffect } from 'react';
import { X, Star, Flame, Sparkles, Utensils } from 'lucide-react';

const FoodDetailsModal = ({ isOpen, onClose, food, onOrderDish }) => {
  // Handle escape key listener & body scroll locking
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !food) return null;

  const dishName = food.name || food.title || 'Asian Gourmet Dish';
  const dishPrice = food.price || '$20.00';
  const dishImage = food.image || 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=800';
  const dishDescription = food.description || food.story || 'A delicate specialty prepared with high-wok flame, authentic secret Asian spices, and fresh organic ingredients.';
  const rating = food.rating || 4.8;
  const ratingCount = food.ratingCount || 128;
  const category = food.category || 'Specialty';

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        backgroundColor: 'rgba(5, 7, 10, 0.88)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        animation: 'fadeIn 0.25s ease-out'
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: '#0F151C',
          borderRadius: '16px',
          border: '1px solid var(--accent)',
          boxShadow: '0 25px 60px rgba(0, 210, 180, 0.25)',
          maxWidth: '540px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative',
          color: '#FFFFFF',
          animation: 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        {/* Close (X) Button */}
        <button
          onClick={onClose}
          aria-label="Close food details"
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            zIndex: 10,
            background: 'rgba(10, 13, 16, 0.75)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: '#FFFFFF',
            borderRadius: '50%',
            width: '38px',
            height: '38px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            backdropFilter: 'blur(8px)',
            transition: 'all 0.2s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--accent)';
            e.currentTarget.style.color = '#0A0D10';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(10, 13, 16, 0.75)';
            e.currentTarget.style.color = '#FFFFFF';
          }}
        >
          <X size={20} />
        </button>

        {/* 1. Food Image Banner */}
        <div style={{ position: 'relative', height: '240px', width: '100%', overflow: 'hidden', borderTopLeftRadius: '16px', borderTopRightRadius: '16px' }}>
          <img
            src={dishImage}
            alt={dishName}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(15, 21, 28, 0.1) 0%, rgba(15, 21, 28, 0.95) 100%)'
            }}
          />

          {/* Badges */}
          <div style={{ position: 'absolute', top: '1rem', left: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {typeof food.isVeg === 'boolean' && (
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  backgroundColor: food.isVeg ? 'rgba(46, 125, 50, 0.9)' : 'rgba(198, 40, 40, 0.9)',
                  padding: '0.3rem 0.7rem',
                  borderRadius: '4px',
                  backdropFilter: 'blur(6px)'
                }}
              >
                <span
                  style={{
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    backgroundColor: food.isVeg ? '#81C784' : '#FF8A80',
                    display: 'inline-block'
                  }}
                />
                {food.isVeg ? 'VEG' : 'NON-VEG'}
              </span>
            )}

            {food.isPopular && (
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: '#0A0D10',
                  backgroundColor: 'var(--accent)',
                  padding: '0.3rem 0.7rem',
                  borderRadius: '4px'
                }}
              >
                <Flame size={13} />
                POPULAR
              </span>
            )}

            {food.isChefRecommended && (
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: '#0A0D10',
                  backgroundColor: 'var(--accent-gold)',
                  padding: '0.3rem 0.7rem',
                  borderRadius: '4px'
                }}
              >
                <Sparkles size={13} />
                CHEF'S PICK
              </span>
            )}
          </div>
        </div>

        {/* 2. Modal Body */}
        <div style={{ padding: '1.75rem 2rem 2rem 2rem' }}>
          {/* Category Tag & Rating */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <span
              style={{
                fontSize: '0.75rem',
                color: 'var(--accent)',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.12em'
              }}
            >
              {category}
            </span>

            {/* Customer Rating */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', backgroundColor: 'rgba(229, 193, 88, 0.12)', padding: '0.25rem 0.65rem', borderRadius: '50px', border: '1px solid rgba(229, 193, 88, 0.3)' }}>
              <Star size={14} fill="var(--accent-gold)" color="var(--accent-gold)" />
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-gold)' }}>{rating}</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>({ratingCount})</span>
            </div>
          </div>

          {/* Food Title */}
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.75rem',
              color: '#FFFFFF',
              marginBottom: '0.5rem',
              lineHeight: 1.2
            }}
          >
            {dishName}
          </h2>

          {/* Price */}
          <div style={{ marginBottom: '1.25rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.6rem',
                fontWeight: 700,
                color: 'var(--accent-gold)'
              }}
            >
              {dishPrice}
            </span>
          </div>

          {/* Description */}
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '8px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              padding: '1rem 1.25rem',
              marginBottom: '1.75rem'
            }}
          >
            <p
              style={{
                color: '#D1DCDD',
                fontSize: '0.95rem',
                lineHeight: 1.65,
                margin: 0
              }}
            >
              {dishDescription}
            </p>
          </div>

          {/* Tags if available */}
          {food.tags && Array.isArray(food.tags) && food.tags.length > 0 && (
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.75rem' }}>
              {food.tags.map((tag, idx) => (
                <span
                  key={idx}
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '4px',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            {onOrderDish && (
              <button
                onClick={() => {
                  onClose();
                  onOrderDish(food);
                }}
                className="btn btn-teal"
                style={{
                  flex: 1,
                  padding: '0.85rem 1.5rem',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}
              >
                <Utensils size={18} />
                <span>Order Dish</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="btn btn-outline-light"
              style={{
                padding: '0.85rem 1.5rem',
                fontSize: '0.95rem',
                fontWeight: 600
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetailsModal;
