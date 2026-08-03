import React from 'react';
import { MapPin, Phone, Clock, CalendarCheck } from 'lucide-react';

const BranchCard = ({ branch, showReservationTiming = false }) => {
  return (
    <div
      className="hover-lift"
      style={{
        backgroundColor: 'var(--bg-white)',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-md)',
        border: '1px solid var(--border-light)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
        <img
          src={branch.image}
          alt={branch.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease'
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(10,13,16,0.92) 100%)'
          }}
        />
        <div style={{ position: 'absolute', bottom: '1rem', left: '1.25rem', right: '1.25rem' }}>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: '#FFFFFF', lineHeight: 1.2 }}>
            {branch.name}
          </h3>
        </div>
      </div>

      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1, gap: '1rem' }}>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
          {branch.description}
        </p>

        <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--text-main)' }}>
            <MapPin size={18} color="var(--accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
            <span>{branch.address}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--text-main)' }}>
            <Phone size={18} color="var(--accent)" style={{ flexShrink: 0 }} />
            <span><strong style={{ color: '#FFFFFF' }}>Phone:</strong> {branch.phone}</span>
          </div>

          {branch.openingHours && (
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--text-main)' }}>
              <Clock size={18} color="var(--accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span><strong style={{ color: '#FFFFFF' }}>Hours:</strong> {branch.openingHours}</span>
            </div>
          )}

          {showReservationTiming && branch.reservationTiming && (
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--text-main)', backgroundColor: '#0A0D10', padding: '0.75rem', borderRadius: '6px', borderLeft: '3px solid var(--accent)' }}>
              <CalendarCheck size={18} color="var(--accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--accent)' }}>Reservation Timing:</strong>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{branch.reservationTiming}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BranchCard;
