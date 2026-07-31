import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialCard = ({ review }) => {
  return (
    <div
      className="hover-lift"
      style={{
        backgroundColor: 'var(--bg-white)',
        borderRadius: '8px',
        padding: '2rem',
        boxShadow: 'var(--shadow-md)',
        border: '1px solid var(--border-light)',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%'
      }}
    >
      <Quote
        size={44}
        color="var(--accent)"
        style={{
          position: 'absolute',
          top: '1.5rem',
          right: '1.5rem',
          opacity: 0.2
        }}
      />

      <div>
        {/* Star Rating */}
        <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.25rem' }}>
          {[...Array(review.rating)].map((_, i) => (
            <Star key={i} size={18} fill="var(--accent-gold)" color="var(--accent-gold)" />
          ))}
        </div>

        {/* Review Text */}
        <p
          style={{
            fontStyle: 'italic',
            color: 'var(--text-light)',
            fontSize: '0.98rem',
            lineHeight: 1.7,
            marginBottom: '2rem'
          }}
        >
          "{review.review}"
        </p>
      </div>

      {/* Customer Info */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem' }}>
        <img
          src={review.avatar}
          alt={review.name}
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '2px solid var(--accent)',
            boxShadow: '0 0 10px rgba(0, 210, 180, 0.3)'
          }}
        />
        <div>
          <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', color: '#FFFFFF', fontWeight: 600 }}>
            {review.name}
          </h4>
          <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            {review.role}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
