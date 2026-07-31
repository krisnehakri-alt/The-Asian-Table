import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ShieldCheck, Target, Eye, Sparkles, Utensils, Award, PhoneCall } from 'lucide-react';
import {
  images,
  branchData,
  chefData,
  storyData
} from '../data/restaurantData';
import BranchCard from '../components/BranchCard';

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ overflowX: 'hidden', backgroundColor: 'var(--bg-cream)' }}>
      {/* 1. HERO BANNER */}
      <section
        className="page-banner"
        style={{ backgroundImage: `url(${images.restaurantWelcome})` }}
      >
        <div className="page-banner-overlay" />
        <div className="container page-banner-content">
          <span className="section-tag">
            OUR HERITAGE & PASSION
          </span>
          <h1 className="page-banner-title">About THE ASIAN TABLE</h1>
          <div className="breadcrumbs">
            <NavLink to="/">Home</NavLink>
            <span>/</span>
            <span>About Us</span>
          </div>
        </div>
      </section>

      {/* 2. RESTAURANT STORY */}
      <section className="section-padding bg-dark" style={{ borderBottom: '1px solid rgba(0, 210, 180, 0.15)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '4rem',
              alignItems: 'center'
            }}
          >
            <div>
              <span className="section-tag">Our History</span>
              <h2 className="section-title">Crafting Unforgettable Flavours Since 2001</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                {storyData.story}
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                We bridge regional culinary secrets—from the Cantonese dim sum houses of Hong Kong to the wooden izakayas of Kyoto and the fragrant spice markets of South Asia—bringing authentic Asian gastronomy into a single refined destination.
              </p>

              <div
                style={{
                  backgroundColor: '#0A0D10',
                  borderLeft: '4px solid var(--accent)',
                  padding: '1.25rem 1.5rem',
                  borderRadius: '0 8px 8px 0',
                  border: '1px solid var(--border-light)',
                  borderLeftWidth: '4px'
                }}
              >
                <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.1rem', color: '#FFFFFF', lineHeight: 1.6 }}>
                  "Food is not just sustenance; it is a sacred bridge connecting culture, memory, and human warmth."
                </p>
                <span style={{ fontSize: '0.85rem', color: 'var(--accent-gold)', fontWeight: 600, marginTop: '0.5rem', display: 'block' }}>
                  — Chef Kenjiro Takahashi
                </span>
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <div
                style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-lg)',
                  border: '1px solid var(--border-light)'
                }}
              >
                <img
                  src={images.heroBg}
                  alt="Restaurant interior"
                  style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MISSION, VISION & VALUES */}
      <section className="section-padding bg-secondary">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-tag">Our Pillars</span>
            <h2 className="section-title">Mission, Vision & Core Values</h2>
            <p className="section-subtitle">
              The guiding principles that steer our culinary craftsmanship and service philosophy every single day.
            </p>
          </div>

          {/* Grid for Mission & Vision */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              marginBottom: '3rem'
            }}
          >
            <div
              style={{
                backgroundColor: 'var(--bg-white)',
                padding: '2.5rem',
                borderRadius: '10px',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-md)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                <div style={{ padding: '0.75rem', borderRadius: '50%', backgroundColor: 'rgba(0, 210, 180, 0.15)', border: '1px solid var(--accent)' }}>
                  <Target size={26} color="var(--accent)" />
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: '#FFFFFF' }}>
                  Our Mission
                </h3>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7 }}>
                {storyData.mission}
              </p>
            </div>

            <div
              style={{
                backgroundColor: 'var(--bg-white)',
                padding: '2.5rem',
                borderRadius: '10px',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-md)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                <div style={{ padding: '0.75rem', borderRadius: '50%', backgroundColor: 'rgba(0, 210, 180, 0.15)', border: '1px solid var(--accent)' }}>
                  <Eye size={26} color="var(--accent)" />
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: '#FFFFFF' }}>
                  Our Vision
                </h3>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7 }}>
                {storyData.vision}
              </p>
            </div>
          </div>

          {/* 4 Values Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {storyData.values.map((val, idx) => (
              <div
                key={idx}
                className="hover-lift"
                style={{
                  backgroundColor: 'var(--bg-white)',
                  padding: '1.75rem',
                  borderRadius: '8px',
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>
                  <span style={{ color: 'var(--accent)', marginRight: '0.5rem' }}>0{idx + 1}.</span>
                  {val.title}
                </h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  {val.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BRANCHES SECTION */}
      <section className="section-padding bg-dark" style={{ borderTop: '1px solid rgba(0, 210, 180, 0.15)', borderBottom: '1px solid rgba(0, 210, 180, 0.15)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-tag">Sanctuaries Of Dining</span>
            <h2 className="section-title">Our Flagship Branches</h2>
            <p className="section-subtitle">
              Each branch offers a distinct architectural ambiance while delivering the identical gold standard of Asian cuisine.
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
              <BranchCard key={branch.id} branch={branch} showReservationTiming={false} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. MEET OUR CHEF SECTION */}
      <section className="section-padding bg-secondary">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '4rem',
              alignItems: 'center'
            }}
          >
            {/* Chef Image */}
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-lg)',
                  border: '2px solid var(--accent)'
                }}
              >
                <img
                  src={chefData.image}
                  alt={chefData.name}
                  style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                />
              </div>
              <div
                style={{
                  position: 'absolute',
                  bottom: '1.5rem',
                  right: '1.5rem',
                  backgroundColor: '#0A0D10',
                  color: '#FFFFFF',
                  padding: '1rem 1.5rem',
                  borderRadius: '6px',
                  border: '1px solid var(--accent)',
                  boxShadow: 'var(--shadow-teal)'
                }}
              >
                <Award size={24} color="var(--accent-gold)" style={{ marginBottom: '0.25rem' }} />
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '0.95rem', display: 'block', color: '#FFFFFF' }}>Master Chef</span>
                <span style={{ fontSize: '0.78rem', color: 'var(--accent)', fontWeight: 600 }}>25+ Years Experience</span>
              </div>
            </div>

            {/* Chef Details */}
            <div>
              <span className="section-tag">Master Of The Kitchen</span>
              <h2 className="section-title">{chefData.name}</h2>
              <span style={{ fontSize: '1.05rem', color: 'var(--accent)', fontWeight: 600, display: 'block', marginBottom: '1.25rem' }}>
                {chefData.title}
              </span>
              <p style={{ color: '#FFFFFF', fontWeight: 500, fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                "{chefData.shortIntro}"
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                {chefData.bio}
              </p>

              <button onClick={() => navigate('/contact')} className="btn btn-teal">
                <PhoneCall size={16} />
                <span>Reserve A Chef's Table</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
