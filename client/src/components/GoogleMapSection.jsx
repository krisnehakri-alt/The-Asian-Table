import React, { useState } from 'react';
import { MapPin, Navigation, ZoomIn, ZoomOut, Compass, ExternalLink } from 'lucide-react';
import { useData } from '../context/DataContext';

const GoogleMapSection = () => {
  const { branches } = useData();
  const [selectedBranchId, setSelectedBranchId] = useState(branches[0]?.id || 'downtown');
  const [zoomLevel, setZoomLevel] = useState(15);

  const activeBranch = branches.find((b) => b.id === selectedBranchId) || branches[0] || {
    name: 'Central Downtown Flagship',
    address: '88 Gold Coast Boulevard, Suite 400, Financial District',
    phone: '+1 (800) 555-0199'
  };

  // Maps query generator
  const mapQuery = encodeURIComponent(`${activeBranch.name}, ${activeBranch.address}`);
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;
  const embedUrl = `https://maps.google.com/maps?q=${mapQuery}&t=&z=${zoomLevel}&ie=UTF8&iwloc=&output=embed`;

  return (
    <section style={{ backgroundColor: 'var(--primary)', padding: '4rem 0', borderTop: '1px solid rgba(0, 210, 180, 0.15)' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span className="section-tag">INTERACTIVE GOOGLE MAPS</span>
          <h2 className="section-title">Find Our Luxury Venues</h2>
          <p className="section-subtitle">
            Locate our signature restaurant branches with direct directions and interactive map controls.
          </p>
        </div>



        {/* Map Display Container */}
        <div style={{
          backgroundColor: 'var(--secondary)',
          borderRadius: '16px',
          overflow: 'hidden',
          border: '1px solid var(--border-light)',
          boxShadow: 'var(--shadow-xl)',
          position: 'relative'
        }}>
          
          {/* Map Top Control Bar */}
          <div style={{
            padding: '1rem 1.5rem',
            backgroundColor: 'rgba(10, 13, 16, 0.95)',
            borderBottom: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            zIndex: 10
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ padding: '0.5rem', borderRadius: '50%', backgroundColor: 'rgba(0, 210, 180, 0.15)', color: 'var(--accent)' }}>
                <Compass size={20} />
              </div>
              <div>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: '#FFFFFF', margin: 0 }}>
                  {activeBranch.name}
                </h4>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  {activeBranch.address}
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              {/* Zoom Controls */}
              <div style={{ display: 'flex', backgroundColor: '#14181f', borderRadius: '6px', overflow: 'hidden', border: '1px solid var(--border-subtle)' }}>
                <button
                  onClick={() => setZoomLevel((z) => Math.min(z + 1, 19))}
                  title="Zoom In"
                  style={{ padding: '0.5rem 0.75rem', background: 'none', border: 'none', color: '#FFF', cursor: 'pointer', borderRight: '1px solid var(--border-subtle)' }}
                >
                  <ZoomIn size={16} />
                </button>
                <button
                  onClick={() => setZoomLevel((z) => Math.max(z - 1, 11))}
                  title="Zoom Out"
                  style={{ padding: '0.5rem 0.75rem', background: 'none', border: 'none', color: '#FFF', cursor: 'pointer' }}
                >
                  <ZoomOut size={16} />
                </button>
              </div>

              {/* Get Directions Button */}
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-teal"
                style={{ padding: '0.55rem 1.2rem', fontSize: '0.85rem' }}
              >
                <Navigation size={16} />
                <span>Get Directions</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Embedded Google Map Iframe */}
          <div style={{ position: 'relative', width: '100%', height: '450px', backgroundColor: '#1a1a1a' }}>
            <iframe
              title={`Google Map - ${activeBranch.name}`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={embedUrl}
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default GoogleMapSection;
