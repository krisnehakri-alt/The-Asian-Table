import React from 'react';
import { NavLink } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Award, Sparkles, Clock } from 'lucide-react';
import { useData } from '../context/DataContext';
import logo from '../assets/logo.png';

const Footer = () => {
  const { settings } = useData();

  return (
    <footer style={{ backgroundColor: '#07090C', color: '#E0ECEE', borderTop: '1px solid rgba(0, 210, 180, 0.25)' }}>
      <div className="container" style={{ padding: '5rem 1.5rem 3rem 1.5rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem'
          }}
        >
          {/* Column 1: Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.25rem' }}>
              <img
                src={logo}
                alt="THE ASIAN TABLE Logo"
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '1.5px solid var(--accent)',
                  boxShadow: '0 0 12px rgba(0, 210, 180, 0.3)'
                }}
              />
              <div>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', fontWeight: 700, color: '#FFFFFF', display: 'block', lineHeight: 1 }}>
                  THE ASIAN <span style={{ color: 'var(--accent)' }}>TABLE</span>
                </span>
                <span style={{ fontSize: '0.6rem', color: 'var(--accent-gold)', letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: '3px', display: 'block', fontWeight: 600 }}>
                  GOOD FOOD • GREAT EXPERIENCE
                </span>
              </div>
            </div>
            <p style={{ color: '#94A8B3', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              An authentic Asian cuisine restaurant dedicated to honoring heritage flavours, master craftsmanship, and unforgettable fine dining.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
                style={{
                  color: 'var(--accent)',
                  padding: '0.55rem',
                  background: 'rgba(0, 210, 180, 0.08)',
                  border: '1px solid rgba(0, 210, 180, 0.2)',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'var(--accent)';
                  e.currentTarget.style.color = '#0A0D10';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 210, 180, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 210, 180, 0.08)';
                  e.currentTarget.style.color = 'var(--accent)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                title="Facebook"
                style={{
                  color: 'var(--accent)',
                  padding: '0.55rem',
                  background: 'rgba(0, 210, 180, 0.08)',
                  border: '1px solid rgba(0, 210, 180, 0.2)',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'var(--accent)';
                  e.currentTarget.style.color = '#0A0D10';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 210, 180, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 210, 180, 0.08)';
                  e.currentTarget.style.color = 'var(--accent)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                title="Twitter / X"
                style={{
                  color: 'var(--accent)',
                  padding: '0.55rem',
                  background: 'rgba(0, 210, 180, 0.08)',
                  border: '1px solid rgba(0, 210, 180, 0.2)',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'var(--accent)';
                  e.currentTarget.style.color = '#0A0D10';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 210, 180, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 210, 180, 0.08)';
                  e.currentTarget.style.color = 'var(--accent)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://www.tripadvisor.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Awards & Reviews"
                title="Awards & Reviews on TripAdvisor"
                style={{
                  color: 'var(--accent)',
                  padding: '0.55rem',
                  background: 'rgba(0, 210, 180, 0.08)',
                  border: '1px solid rgba(0, 210, 180, 0.2)',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'var(--accent)';
                  e.currentTarget.style.color = '#0A0D10';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 210, 180, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 210, 180, 0.08)';
                  e.currentTarget.style.color = 'var(--accent)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <Award size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.15rem',
                color: '#FFFFFF',
                marginBottom: '1.5rem',
                borderBottom: '2px solid var(--accent)',
                paddingBottom: '0.5rem',
                display: 'inline-block'
              }}
            >
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li>
                <NavLink to="/" style={{ color: '#94A8B3', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseOver={(e) => e.target.style.color = 'var(--accent)'} onMouseOut={(e) => e.target.style.color = '#94A8B3'}>
                  Home Page
                </NavLink>
              </li>
              <li>
                <NavLink to="/menu" style={{ color: '#94A8B3', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseOver={(e) => e.target.style.color = 'var(--accent)'} onMouseOut={(e) => e.target.style.color = '#94A8B3'}>
                  Our Signature Menu
                </NavLink>
              </li>
              <li>
                <NavLink to="/gallery" style={{ color: '#94A8B3', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseOver={(e) => e.target.style.color = 'var(--accent)'} onMouseOut={(e) => e.target.style.color = '#94A8B3'}>
                  Photo Gallery
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" style={{ color: '#94A8B3', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseOver={(e) => e.target.style.color = 'var(--accent)'} onMouseOut={(e) => e.target.style.color = '#94A8B3'}>
                  About Our Restaurant
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" style={{ color: '#94A8B3', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseOver={(e) => e.target.style.color = 'var(--accent)'} onMouseOut={(e) => e.target.style.color = '#94A8B3'}>
                  Contact & Reservations
                </NavLink>
              </li>
              <li>
                <NavLink to="/privacy" style={{ color: '#94A8B3', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseOver={(e) => e.target.style.color = 'var(--accent)'} onMouseOut={(e) => e.target.style.color = '#94A8B3'}>
                  Privacy Policy
                </NavLink>
              </li>
              <li>
                <NavLink to="/terms" style={{ color: '#94A8B3', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseOver={(e) => e.target.style.color = 'var(--accent)'} onMouseOut={(e) => e.target.style.color = '#94A8B3'}>
                  Terms of Service
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Column 3: Opening Hours */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.15rem',
                color: '#FFFFFF',
                marginBottom: '1.5rem',
                borderBottom: '2px solid var(--accent)',
                paddingBottom: '0.5rem',
                display: 'inline-block'
              }}
            >
              Opening Hours
            </h4>
            <div style={{ fontSize: '0.92rem', color: '#94A8B3', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              <div>
                <strong style={{ color: '#FFFFFF', display: 'block' }}>Monday - Friday:</strong>
                11:30 AM - 11:00 PM
              </div>
              <div>
                <strong style={{ color: '#FFFFFF', display: 'block' }}>Saturday - Sunday:</strong>
                12:00 PM - 11:30 PM
              </div>
              <div style={{ color: 'var(--accent-gold)', fontSize: '0.85rem', marginTop: '0.2rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Sparkles size={14} />
                <span>Kitchen closes 45 mins prior to closing.</span>
              </div>
            </div>
          </div>

          {/* Column 4: Contact Information */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.15rem',
                color: '#FFFFFF',
                marginBottom: '1.5rem',
                borderBottom: '2px solid var(--accent)',
                paddingBottom: '0.5rem',
                display: 'inline-block'
              }}
            >
              Contact Information
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.92rem', color: '#94A8B3' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <MapPin size={18} color="var(--accent)" style={{ flexShrink: 0 }} />
                <span>88 Gold Coast Boulevard, Financial District</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Phone size={18} color="var(--accent)" style={{ flexShrink: 0 }} />
                <span>+1 (800) 555-0199</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Mail size={18} color="var(--accent)" style={{ flexShrink: 0 }} />
                <span>concierge@theasiantable.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div
          style={{
            borderTop: '1px solid rgba(0, 210, 180, 0.15)',
            paddingTop: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.88rem',
            color: '#718590'
          }}
        >
          <p>© 2026 THE ASIAN TABLE. All Rights Reserved.</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <NavLink
              to="/privacy"
              style={{ color: '#94A8B3', textDecoration: 'none', transition: 'color 0.2s ease' }}
              onMouseOver={(e) => e.target.style.color = 'var(--accent)'}
              onMouseOut={(e) => e.target.style.color = '#94A8B3'}
            >
              Privacy Policy
            </NavLink>
            <span style={{ color: 'rgba(0, 210, 180, 0.3)' }}>•</span>
            <NavLink
              to="/terms"
              style={{ color: '#94A8B3', textDecoration: 'none', transition: 'color 0.2s ease' }}
              onMouseOver={(e) => e.target.style.color = 'var(--accent)'}
              onMouseOut={(e) => e.target.style.color = '#94A8B3'}
            >
              Terms of Service
            </NavLink>
          </div>
          <p style={{ color: 'var(--accent-gold)', fontWeight: 500 }}>Good Food • Great Experience</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
