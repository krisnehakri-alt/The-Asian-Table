import React from 'react';
import { NavLink } from 'react-router-dom';
import { Phone, Clock, CalendarCheck, MapPin, Mail, Sparkles } from 'lucide-react';
import { images, branchData } from '../data/restaurantData';
import BranchCard from '../components/BranchCard';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  return (
    <div style={{ overflowX: 'hidden', backgroundColor: 'var(--bg-cream)' }}>
      {/* 1. HERO BANNER */}
      <section
        className="page-banner"
        style={{ backgroundImage: `url(${images.heroBg})` }}
      >
        <div className="page-banner-overlay" />
        <div className="container page-banner-content">
          <span className="section-tag">
            RESERVATIONS & INQUIRIES
          </span>
          <h1 className="page-banner-title">Contact Us</h1>
          <div className="breadcrumbs">
            <NavLink to="/">Home</NavLink>
            <span>/</span>
            <span>Contact</span>
          </div>
        </div>
      </section>

      {/* 2. RESERVATION INFORMATION BANNER */}
      <section style={{ backgroundColor: 'var(--primary)', color: '#FFFFFF', padding: '3.5rem 0', borderBottom: '1px solid rgba(0, 210, 180, 0.25)' }}>
        <div className="container">
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              marginBottom: '2.5rem'
            }}
          >
            <span
              style={{
                fontSize: '0.85rem',
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--accent-gold)',
                marginBottom: '0.5rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <Sparkles size={16} /> Direct Reservation Lines
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: '#FFFFFF', marginBottom: '0.5rem' }}>
              Call us to reserve your table.
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '620px' }}>
              For immediate table bookings, private dining suites, or event arrangements, please call your preferred branch directly:
            </p>
          </div>

          {/* 3 Reservation Numbers Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {branchData.map((branch) => (
              <div
                key={branch.id}
                style={{
                  backgroundColor: 'var(--secondary)',
                  borderRadius: '8px',
                  padding: '1.5rem',
                  border: '1px solid var(--border-light)',
                  textAlign: 'center',
                  boxShadow: 'var(--shadow-md)'
                }}
              >
                <span style={{ fontSize: '0.78rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600 }}>
                  {branch.name}
                </span>
                <div style={{ margin: '0.75rem 0', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                  <Phone size={20} color="var(--accent)" />
                  <a
                    href={`tel:${branch.reservationPhone}`}
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.35rem',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      textDecoration: 'none'
                    }}
                  >
                    {branch.reservationPhone}
                  </a>
                </div>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  Direct Reservation Line
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CONTACT FORM SECTION */}
      <section className="section-padding bg-secondary">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3.5rem',
              alignItems: 'start'
            }}
          >
            {/* Left Info Column */}
            <div>
              <span className="section-tag">Hospitality Concierge</span>
              <h2 className="section-title">We Look Forward To Welcoming You</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                Have inquiries regarding dietary requirements, private celebrations, corporate banquets, or general feedback? Reach out to our concierge team.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ padding: '0.75rem', borderRadius: '50%', backgroundColor: 'rgba(0, 210, 180, 0.15)', border: '1px solid var(--accent)' }}>
                    <Mail size={22} color="var(--accent)" />
                  </div>
                  <div>
                    <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: '#FFFFFF' }}>Email Inquiries</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>concierge@theasiantable.com</p>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>events@theasiantable.com</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ padding: '0.75rem', borderRadius: '50%', backgroundColor: 'rgba(0, 210, 180, 0.15)', border: '1px solid var(--accent)' }}>
                    <Phone size={22} color="var(--accent)" />
                  </div>
                  <div>
                    <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: '#FFFFFF' }}>Toll Free Line</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>+1 (800) 555-0199</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ padding: '0.75rem', borderRadius: '50%', backgroundColor: 'rgba(0, 210, 180, 0.15)', border: '1px solid var(--accent)' }}>
                    <Clock size={22} color="var(--accent)" />
                  </div>
                  <div>
                    <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: '#FFFFFF' }}>Concierge Desk Hours</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>Daily: 9:00 AM - 10:00 PM EST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Form UI */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* 4. RESTAURANT BRANCH CARDS */}
      <section className="section-padding bg-dark" style={{ borderTop: '1px solid rgba(0, 210, 180, 0.15)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-tag">Locations & Timings</span>
            <h2 className="section-title">Restaurant Branch Locations</h2>
            <p className="section-subtitle">
              Explore our three luxury branch locations along with their detailed addresses and reservation timings.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem'
            }}
          >
            {branchData.map((branch) => (
              <BranchCard key={branch.id} branch={branch} showReservationTiming={true} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
