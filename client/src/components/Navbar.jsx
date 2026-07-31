import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, PhoneCall } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = ({ onBookTableClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleBookTable = () => {
    if (onBookTableClick) {
      onBookTableClick();
    } else {
      navigate('/contact');
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.35s ease',
        padding: isScrolled ? '0.8rem 0' : '1.2rem 0',
        backgroundColor: isScrolled ? 'rgba(10, 13, 16, 0.95)' : 'rgba(10, 13, 16, 0.82)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: isScrolled ? '1px solid rgba(0, 210, 180, 0.3)' : '1px solid rgba(0, 210, 180, 0.12)'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <NavLink
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.9rem',
            textDecoration: 'none'
          }}
        >
          <img
            src={logo}
            alt="THE ASIAN TABLE Logo"
            style={{
              height: '48px',
              width: '48px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '1.5px solid var(--accent)',
              boxShadow: '0 0 14px rgba(0, 210, 180, 0.35)',
              transition: 'transform 0.3s ease'
            }}
          />
          <div>
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.35rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                color: '#FFFFFF',
                display: 'block',
                lineHeight: 1
              }}
            >
              THE ASIAN <span style={{ color: 'var(--accent)' }}>TABLE</span>
            </span>
            <span
              style={{
                fontSize: '0.62rem',
                letterSpacing: '0.22em',
                color: 'var(--accent-gold)',
                textTransform: 'uppercase',
                display: 'block',
                marginTop: '4px',
                fontWeight: 600
              }}
            >
              GOOD FOOD • GREAT EXPERIENCE
            </span>
          </div>
        </NavLink>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '2.5rem'
          }}
          className="desktop-nav"
        >
          <NavLink
            to="/"
            style={({ isActive }) => ({
              textDecoration: 'none',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.95rem',
              fontWeight: 500,
              letterSpacing: '0.05em',
              color: isActive ? 'var(--accent)' : '#E0ECEE',
              transition: 'color 0.25s ease'
            })}
          >
            Home
          </NavLink>

          <NavLink
            to="/menu"
            style={({ isActive }) => ({
              textDecoration: 'none',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.95rem',
              fontWeight: 500,
              letterSpacing: '0.05em',
              color: isActive ? 'var(--accent)' : '#E0ECEE',
              transition: 'color 0.25s ease'
            })}
          >
            Menu
          </NavLink>

          <NavLink
            to="/gallery"
            style={({ isActive }) => ({
              textDecoration: 'none',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.95rem',
              fontWeight: 500,
              letterSpacing: '0.05em',
              color: isActive ? 'var(--accent)' : '#E0ECEE',
              transition: 'color 0.25s ease'
            })}
          >
            Gallery
          </NavLink>

          <NavLink
            to="/about"
            style={({ isActive }) => ({
              textDecoration: 'none',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.95rem',
              fontWeight: 500,
              letterSpacing: '0.05em',
              color: isActive ? 'var(--accent)' : '#E0ECEE',
              transition: 'color 0.25s ease'
            })}
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            style={({ isActive }) => ({
              textDecoration: 'none',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.95rem',
              fontWeight: 500,
              letterSpacing: '0.05em',
              color: isActive ? 'var(--accent)' : '#E0ECEE',
              transition: 'color 0.25s ease'
            })}
          >
            Contact
          </NavLink>

          <button onClick={handleBookTable} className="btn btn-teal" style={{ padding: '0.7rem 1.4rem' }}>
            <PhoneCall size={16} />
            <span>Book Table</span>
          </button>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          style={{
            background: 'transparent',
            border: 'none',
            color: '#FFFFFF',
            cursor: 'pointer',
            padding: '0.5rem',
            display: 'flex',
            alignItems: 'center'
          }}
          className="mobile-toggle"
        >
          {mobileMenuOpen ? <X size={26} color="var(--accent)" /> : <Menu size={26} color="#FFFFFF" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: '#0A0D10',
            borderBottom: '1px solid var(--accent)',
            padding: '2rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            boxShadow: '0 20px 30px rgba(0, 0, 0, 0.7)'
          }}
        >
          <NavLink
            to="/"
            style={({ isActive }) => ({
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: 500,
              color: isActive ? 'var(--accent)' : '#FFFFFF'
            })}
          >
            Home
          </NavLink>

          <NavLink
            to="/menu"
            style={({ isActive }) => ({
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: 500,
              color: isActive ? 'var(--accent)' : '#FFFFFF'
            })}
          >
            Menu
          </NavLink>

          <NavLink
            to="/gallery"
            style={({ isActive }) => ({
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: 500,
              color: isActive ? 'var(--accent)' : '#FFFFFF'
            })}
          >
            Gallery
          </NavLink>

          <NavLink
            to="/about"
            style={({ isActive }) => ({
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: 500,
              color: isActive ? 'var(--accent)' : '#FFFFFF'
            })}
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            style={({ isActive }) => ({
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: 500,
              color: isActive ? 'var(--accent)' : '#FFFFFF'
            })}
          >
            Contact
          </NavLink>

          <button onClick={handleBookTable} className="btn btn-teal" style={{ width: '100%', marginTop: '0.5rem' }}>
            <PhoneCall size={16} />
            <span>Book Table</span>
          </button>
        </div>
      )}

      {/* Embedded CSS for desktop display media query */}
      <style>{`
        @media (min-width: 769px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
