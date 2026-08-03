import React, { useEffect, useRef } from 'react';
import { Navigation, Compass, ExternalLink, MapPin, Phone } from 'lucide-react';
import { useData } from '../context/DataContext';

const OpenStreetMapSection = () => {
  const { branches, settings } = useData();
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);

  const activeBranch = branches[0] || {
    name: settings.restaurantName || 'The Asian Table',
    address: '88 Gold Coast Boulevard, Manhattan, New York, NY 10001, United States',
    phone: settings.phone || '+1 (800) 555-0199'
  };

  // OpenStreetMap coordinates (Manhattan, New York, NY 10001)
  const lat = 40.7484;
  const lon = -73.9857;

  const directionsUrl = `https://www.openstreetmap.org/directions?engine=fossgis_osrm_car&route=%3B${lat}%2C${lon}#map=15/${lat}/${lon}`;

  useEffect(() => {
    // Load Leaflet CSS dynamically if not present
    if (!document.getElementById('leaflet-css')) {
      const link = document.createElement('link');
      link.id = 'leaflet-css';
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      document.head.appendChild(link);
    }

    // Function to initialize Leaflet Map once Leaflet JS is ready
    const initLeafletMap = () => {
      if (!window.L || !mapContainerRef.current) return;
      if (mapInstanceRef.current) return; // Map already created

      const map = window.L.map(mapContainerRef.current, {
        center: [lat, lon],
        zoom: 15,
        scrollWheelZoom: false
      });

      mapInstanceRef.current = map;

      // Add OpenStreetMap tiles
      window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      // Create Custom Leaflet Marker with Popup
      const popupContent = `
        <div style="font-family: inherit; color: #0A0D10; padding: 4px;">
          <h4 style="margin: 0 0 4px 0; font-family: 'Cinzel', serif; font-size: 1.1rem; color: #008D79;">${activeBranch.name}</h4>
          <p style="margin: 0 0 6px 0; font-size: 0.85rem; color: #4A5568;">88 Gold Coast Boulevard<br/>Manhattan, New York, NY 10001</p>
          <span style="font-size: 0.82rem; font-weight: 600; color: #D4AF37;">${activeBranch.phone}</span>
        </div>
      `;

      const marker = window.L.marker([lat, lon]).addTo(map);
      marker.bindPopup(popupContent).openPopup();
    };

    // Load Leaflet JS script dynamically
    if (window.L) {
      initLeafletMap();
    } else {
      let script = document.getElementById('leaflet-js');
      if (!script) {
        script = document.createElement('script');
        script.id = 'leaflet-js';
        script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
        script.onload = initLeafletMap;
        document.body.appendChild(script);
      } else {
        script.addEventListener('load', initLeafletMap);
      }
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <section style={{ backgroundColor: 'var(--primary)', padding: '4rem 0', borderTop: '1px solid rgba(0, 210, 180, 0.15)' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span className="section-tag">OPENSOURCE INTERACTIVE MAP</span>
          <h2 className="section-title">Find Our Luxury Venue</h2>
          <p className="section-subtitle">
            Locate our signature restaurant venue with direct directions and free interactive map controls.
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

          {/* Embedded Native Leaflet Map Container */}
          <div style={{ position: 'relative', width: '100%', height: '450px', backgroundColor: '#1a1a1a' }}>
            <div
              ref={mapContainerRef}
              style={{ width: '100%', height: '100%', zIndex: 1 }}
            />

            {/* Custom Location Popup Overlay Card */}
            <div style={{
              position: 'absolute',
              bottom: '20px',
              left: '20px',
              backgroundColor: 'rgba(10, 13, 16, 0.92)',
              backdropFilter: 'blur(12px)',
              border: '1px solid var(--accent)',
              borderRadius: '10px',
              padding: '14px 18px',
              maxWidth: '320px',
              color: '#FFFFFF',
              boxShadow: '0 10px 30px rgba(0,0,0,0.8)',
              zIndex: 1000,
              pointerEvents: 'none'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <MapPin size={18} color="var(--accent)" />
                <strong style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', color: '#FFFFFF' }}>
                  {activeBranch.name}
                </strong>
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: '0 0 8px 0', lineHeight: 1.4 }}>
                {activeBranch.address}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', color: 'var(--accent-gold)' }}>
                <Phone size={14} />
                <span>{activeBranch.phone}</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default OpenStreetMapSection;

