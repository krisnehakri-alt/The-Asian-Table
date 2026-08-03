import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Sparkles,
  Award,
  HeartHandshake,
  ArrowRight,
  Utensils,
  Star,
  ChevronRight,
  Clock,
  MapPin,
  PhoneCall,
  Calendar,
  Users,
  CheckCircle2,
  Flame,
  ShieldCheck
} from 'lucide-react';
import {
  images,
  whyChooseUsData,
  featuredHighlightsData,
  signatureDishesData,
  accoladesData,
  chefData
} from '../data/restaurantData';
import { useData } from '../context/DataContext';
import TestimonialCard from '../components/TestimonialCard';
import ReservationModal from '../components/ReservationModal';
import OrderDishModal from '../components/OrderDishModal';

const HomePage = () => {
  const navigate = useNavigate();
  const { reviews: customerReviewsData, branches: branchData } = useData();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBranchId, setSelectedBranchId] = useState(branchData[0]?.id || 'downtown');
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedOrderDish, setSelectedOrderDish] = useState(null);

  const handleOrderDishClick = (dish) => {
    setSelectedOrderDish(dish);
    setIsOrderModalOpen(true);
  };

  // Categories list
  const categories = ['All', 'Asian Noodles', 'Asian Rice', 'Dimsum & Momos', 'Special Asian'];

  const filteredDishes = selectedCategory === 'All'
    ? signatureDishesData
    : signatureDishesData.filter((d) => d.category === selectedCategory);

  const activeBranch = branchData.find((b) => b.id === selectedBranchId) || branchData[0];

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles size={30} color="var(--accent)" />;
      case 'Award':
        return <Award size={30} color="var(--accent)" />;
      case 'HeartHandshake':
        return <HeartHandshake size={30} color="var(--accent)" />;
      default:
        return <Utensils size={30} color="var(--accent)" />;
    }
  };

  return (
    <div style={{ overflowX: 'hidden', backgroundColor: 'var(--bg-cream)' }}>
      {/* 0. INSTANT RESERVATION MODAL */}
      <ReservationModal isOpen={isReservationOpen} onClose={() => setIsReservationOpen(false)} />

      {/* 1. HERO SECTION WITH RICH VISUALS */}
      <section
        className="hero-wrapper"
        style={{
          backgroundImage: `url(${images.heroBg})`,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative'
        }}
      >
        <div className="hero-overlay" />
        
        <div className="hero-content animate-fade-in" style={{ paddingTop: '4rem', paddingBottom: '6rem' }}>
          {/* Michelin Award Pill */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              backgroundColor: 'rgba(10, 13, 16, 0.75)',
              border: '1px solid var(--accent-gold)',
              padding: '0.45rem 1.1rem',
              borderRadius: '50px',
              marginBottom: '1.75rem',
              boxShadow: '0 0 15px rgba(229, 193, 88, 0.25)'
            }}
          >
            <Sparkles size={16} color="var(--accent-gold)" />
            <span style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              Michelin Recommended 2026
            </span>
          </div>

          <h1 className="hero-title" style={{ marginBottom: '1.5rem' }}>
            Authentic Asian Flavours, <br />
            <span className="text-gradient-teal" style={{ fontStyle: 'italic', fontWeight: 600 }}>Crafted with Passion</span>
          </h1>

          <p className="hero-subtitle">
            Experience authentic Asian cuisine with premium ingredients, master chef artistry, and unforgettable dining in an atmosphere of refined luxury.
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.25rem',
              flexWrap: 'wrap',
              marginBottom: '3rem'
            }}
          >
            <button onClick={() => setIsReservationOpen(true)} className="btn btn-teal" style={{ padding: '1rem 2.2rem' }}>
              <PhoneCall size={18} />
              <span>Reserve A Table</span>
            </button>

            <button onClick={() => navigate('/about')} className="btn btn-outline-light" style={{ padding: '1rem 2.2rem' }}>
              <span>Explore Restaurant</span>
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Social Proof & Rating Bar */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '2rem',
              backgroundColor: 'rgba(20, 28, 36, 0.85)',
              backdropFilter: 'blur(12px)',
              padding: '0.85rem 1.8rem',
              borderRadius: '50px',
              border: '1px solid var(--border-light)',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ display: 'flex', color: 'var(--accent-gold)' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="var(--accent-gold)" color="var(--accent-gold)" />
                ))}
              </div>
              <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#FFFFFF' }}>4.9 / 5.0</span>
            </div>

            <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>

            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Over <strong style={{ color: '#FFFFFF' }}>12,000+</strong> Delighted Guests
            </span>

            <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>

            <span style={{ fontSize: '0.85rem', color: 'var(--accent-gold)', fontWeight: 600 }}>
              3 Sanctuary Branches
            </span>
          </div>
        </div>
      </section>

      {/* 2. ACCOLADES & AWARDS TICKER */}
      <section style={{ backgroundColor: '#06080A', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)', padding: '1.75rem 0' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.5rem',
              alignItems: 'center',
              textAlign: 'center'
            }}
          >
            {accoladesData.map((award, idx) => (
              <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span style={{ fontSize: '0.72rem', letterSpacing: '0.2em', color: 'var(--accent-gold)', fontWeight: 700, textTransform: 'uppercase' }}>
                  {award.year} ★ {award.title}
                </span>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                  {award.subtitle}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WELCOME & HERITAGE STORY */}
      <section className="section-padding bg-dark">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '4.5rem',
              alignItems: 'center'
            }}
          >
            {/* Left Story Text */}
            <div>
              <span className="section-tag">Welcome To Our Table</span>
              <h2 className="section-title">
                A Culinary Journey Across East Asia’s Finest Traditions
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                At <strong style={{ color: '#FFFFFF' }}>THE ASIAN <span style={{ color: 'var(--accent)' }}>TABLE</span></strong>, we believe every dish tells a story of heritage, master balance, and passion. From delicate handmade Cantonese dim sum to smoky charcoal-grilled skewers and rich Japanese broths, our menu honors century-old culinary secrets.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                Every element of our restaurant—from the dark mahogany timber architecture to the custom teal and gold ambient lighting—is designed to transport you into a world of tranquility and gastronomic delight.
              </p>

              {/* Master Chef Quote Card */}
              <div
                style={{
                  backgroundColor: '#0E141B',
                  borderLeft: '4px solid var(--accent)',
                  padding: '1.5rem 1.8rem',
                  borderRadius: '0 10px 10px 0',
                  border: '1px solid var(--border-light)',
                  borderLeftWidth: '4px',
                  marginBottom: '2.5rem'
                }}
              >
                <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.1rem', color: '#FFFFFF', lineHeight: 1.6, margin: 0 }}>
                  "Food is not just sustenance; it is a sacred bridge connecting culture, memory, and human warmth."
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.85rem' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--accent-gold)', fontWeight: 600 }}>
                    — Chef Kenjiro Takahashi
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    Executive Director
                  </span>
                </div>
              </div>

              {/* Stats Counters */}
              <div style={{ display: 'flex', gap: '2.5rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.5rem', flexWrap: 'wrap' }}>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.3rem', color: 'var(--accent)', margin: 0 }}>25+</h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.12em', marginTop: '4px' }}>Years Mastery</p>
                </div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.3rem', color: 'var(--accent-gold)', margin: 0 }}>3</h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.12em', marginTop: '4px' }}>Luxury Venues</p>
                </div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.3rem', color: 'var(--accent)', margin: 0 }}>100%</h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.12em', marginTop: '4px' }}>Authentic Heritage</p>
                </div>
              </div>
            </div>

            {/* Right Image Side */}
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  position: 'relative',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 210, 180, 0.15)',
                  border: '1px solid var(--border-light)'
                }}
              >
                <img
                  src={images.restaurantWelcome}
                  alt="THE ASIAN TABLE Dining Room"
                  style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                />
              </div>

              {/* Floating Badge Overlay */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-1.8rem',
                  left: '-1.5rem',
                  backgroundColor: '#0A0D10',
                  color: '#FFFFFF',
                  padding: '1.4rem 1.8rem',
                  borderRadius: '10px',
                  border: '1px solid var(--accent)',
                  boxShadow: 'var(--shadow-teal)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}
                className="desktop-accent-box"
              >
                <div style={{ padding: '0.75rem', borderRadius: '50%', backgroundColor: 'rgba(0, 210, 180, 0.15)' }}>
                  <Utensils size={28} color="var(--accent)" />
                </div>
                <div>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: '#FFFFFF', display: 'block', fontWeight: 600 }}>
                    Luxury Ambiance
                  </span>
                  <span style={{ fontSize: '0.82rem', color: 'var(--accent-gold)', fontWeight: 600 }}>
                    Crafted For Fine Dining
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CHEF'S SIGNATURE SPECIALTIES SHOWCASE (INTERACTIVE MENU) */}
      <section className="section-padding bg-secondary" style={{ borderTop: '1px solid rgba(0, 210, 180, 0.15)', borderBottom: '1px solid rgba(0, 210, 180, 0.15)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-tag">Gourmet Masterpieces</span>
            <h2 className="section-title">Signature Culinary Offerings</h2>
            <p className="section-subtitle">
              Explore our chef’s handpicked signature creations, prepared with rare Asian ingredients and precision artistry.
            </p>

            {/* Interactive Category Filter Pills */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                flexWrap: 'wrap',
                marginTop: '2rem'
              }}
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: '0.6rem 1.4rem',
                    borderRadius: '50px',
                    fontSize: '0.88rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    border: selectedCategory === cat ? '1px solid var(--accent)' : '1px solid rgba(255, 255, 255, 0.12)',
                    backgroundColor: selectedCategory === cat ? 'var(--accent)' : 'rgba(10, 13, 16, 0.6)',
                    color: selectedCategory === cat ? '#0A0D10' : '#E0ECEE',
                    boxShadow: selectedCategory === cat ? '0 0 15px rgba(0, 210, 180, 0.3)' : 'none'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Dishes Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem'
            }}
          >
            {filteredDishes.map((dish) => (
              <div
                key={dish.id}
                className="hover-lift"
                style={{
                  backgroundColor: 'var(--bg-white)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-md)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                  <img
                    src={dish.image}
                    alt={dish.name}
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
                      background: 'linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(10,13,16,0.9) 100%)'
                    }}
                  />
                  
                  {/* Category Pill */}
                  <span
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      color: '#0A0D10',
                      backgroundColor: 'var(--accent)',
                      padding: '0.3rem 0.75rem',
                      borderRadius: '4px',
                      boxShadow: '0 2px 8px rgba(0, 210, 180, 0.3)'
                    }}
                  >
                    {dish.category}
                  </span>

                  {/* Price Tag */}
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '1rem',
                      right: '1rem',
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.35rem',
                      fontWeight: 700,
                      color: 'var(--accent-gold)'
                    }}
                  >
                    {dish.price}
                  </span>
                </div>

                <div style={{ padding: '1.75rem', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: '#FFFFFF', marginBottom: '0.6rem' }}>
                      {dish.name}
                    </h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                      {dish.description}
                    </p>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem' }}>
                    <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                      {dish.tags.map((tag, i) => (
                        <span
                          key={i}
                          style={{
                            fontSize: '0.72rem',
                            color: 'var(--text-muted)',
                            backgroundColor: 'rgba(255,255,255,0.05)',
                            padding: '0.2rem 0.55rem',
                            borderRadius: '3px',
                            border: '1px solid rgba(255,255,255,0.1)'
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => handleOrderDishClick(dish)}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: 'var(--accent)',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        transition: 'color 0.2s ease'
                      }}
                      onMouseOver={(e) => e.currentTarget.style.color = '#FFFFFF'}
                      onMouseOut={(e) => e.currentTarget.style.color = 'var(--accent)'}
                    >
                      <span>Order Special</span>
                      <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE BRANCH & LOCATION SELECTOR */}
      <section className="section-padding bg-dark">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-tag">Sanctuaries Of Dining</span>
            <h2 className="section-title">Our Flagship Destinations</h2>
            <p className="section-subtitle">
              Explore our luxury venue branches, check live dining hours, and reserve your preferred table location.
            </p>

            {/* Interactive Branch Switcher */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem',
                flexWrap: 'wrap',
                marginTop: '2rem'
              }}
            >
              {branchData.map((b) => (
                <button
                  key={b.id}
                  onClick={() => setSelectedBranchId(b.id)}
                  style={{
                    padding: '0.85rem 1.8rem',
                    borderRadius: '8px',
                    fontSize: '0.92rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    border: selectedBranchId === b.id ? '1px solid var(--accent)' : '1px solid rgba(255, 255, 255, 0.1)',
                    backgroundColor: selectedBranchId === b.id ? 'rgba(0, 210, 180, 0.12)' : 'var(--bg-white)',
                    color: selectedBranchId === b.id ? 'var(--accent)' : '#E0ECEE',
                    boxShadow: selectedBranchId === b.id ? '0 0 20px rgba(0, 210, 180, 0.2)' : 'none'
                  }}
                >
                  {b.name}
                </button>
              ))}
            </div>
          </div>

          {/* Active Branch Display Card */}
          <div
            style={{
              backgroundColor: 'var(--bg-white)',
              borderRadius: '16px',
              border: '1px solid var(--border-light)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 0
            }}
          >
            {/* Left Image View */}
            <div style={{ position: 'relative', minHeight: '340px' }}>
              <img
                src={activeBranch.image}
                alt={activeBranch.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(10,13,16,0.9) 100%)'
                }}
              />
              
              <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', right: '1.5rem' }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    backgroundColor: 'rgba(0, 210, 180, 0.15)',
                    border: '1px solid var(--accent)',
                    padding: '0.35rem 0.8rem',
                    borderRadius: '50px',
                    fontSize: '0.78rem',
                    color: 'var(--accent)',
                    fontWeight: 600,
                    marginBottom: '0.5rem'
                  }}
                >
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#00FFE0', display: 'inline-block' }} />
                  Open Today for Fine Dining
                </span>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: '#FFFFFF', margin: 0 }}>
                  {activeBranch.name}
                </h3>
              </div>
            </div>

            {/* Right Details */}
            <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                  {activeBranch.description}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <MapPin size={20} color="var(--accent)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <div>
                      <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', color: '#FFFFFF' }}>Address</h4>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>{activeBranch.address}</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <Clock size={20} color="var(--accent)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <div>
                      <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', color: '#FFFFFF' }}>Opening Hours</h4>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>{activeBranch.openingHours}</p>
                      <p style={{ color: 'var(--accent-gold)', fontSize: '0.85rem', marginTop: '2px' }}>{activeBranch.reservationTiming}</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <PhoneCall size={20} color="var(--accent)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <div>
                      <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', color: '#FFFFFF' }}>Direct Line</h4>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>{activeBranch.phone} / {activeBranch.reservationPhone}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button onClick={() => setIsReservationOpen(true)} className="btn btn-teal" style={{ flexGrow: 1 }}>
                  <Calendar size={18} />
                  <span>Reserve Table At This Branch</span>
                </button>
                <button onClick={() => navigate('/contact')} className="btn btn-outline-light">
                  <span>Contact Branch</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE US (OUR CULINARY PROMISE) */}
      <section className="section-padding bg-secondary">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-tag">Our Culinary Promise</span>
            <h2 className="section-title">Why Choose THE ASIAN TABLE</h2>
            <p className="section-subtitle">
              We combine centuries of culinary wisdom with world-class hospitality to create unforgettable moments for every guest.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem'
            }}
          >
            {whyChooseUsData.map((item) => (
              <div
                key={item.id}
                className="hover-lift"
                style={{
                  backgroundColor: 'var(--bg-white)',
                  padding: '2.5rem',
                  borderRadius: '12px',
                  boxShadow: 'var(--shadow-md)',
                  border: '1px solid var(--border-light)',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}
              >
                <div
                  style={{
                    width: '74px',
                    height: '74px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(0, 210, 180, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                    border: '1px solid var(--accent)',
                    boxShadow: '0 0 20px rgba(0, 210, 180, 0.25)'
                  }}
                >
                  {getIcon(item.icon)}
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.45rem', color: '#FFFFFF', marginBottom: '0.85rem' }}>
                  {item.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FEATURED HIGHLIGHTS & AMBIANCE */}
      <section className="section-padding bg-dark" style={{ borderTop: '1px solid rgba(0, 210, 180, 0.15)', borderBottom: '1px solid rgba(0, 210, 180, 0.15)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-tag">Curated Distinction</span>
            <h2 className="section-title">Featured Atmosphere & Artistry</h2>
            <p className="section-subtitle">
              Discover what makes dining at THE ASIAN TABLE an extraordinary sensory experience.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '2rem'
            }}
          >
            {featuredHighlightsData.map((highlight) => (
              <div
                key={highlight.id}
                className="hover-lift"
                style={{
                  backgroundColor: 'var(--bg-white)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-md)',
                  border: '1px solid var(--border-light)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ position: 'relative', height: '230px', overflow: 'hidden' }}>
                  <img
                    src={highlight.image}
                    alt={highlight.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(10,13,16,0.92) 100%)'
                    }}
                  />
                  <span
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      color: '#0A0D10',
                      backgroundColor: 'var(--accent)',
                      padding: '0.3rem 0.7rem',
                      borderRadius: '4px',
                      boxShadow: '0 2px 10px rgba(0, 210, 180, 0.3)'
                    }}
                  >
                    {highlight.subtitle}
                  </span>
                </div>

                <div style={{ padding: '1.75rem', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: '#FFFFFF', marginBottom: '0.75rem' }}>
                      {highlight.title}
                    </h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CUSTOMER REVIEWS & TESTIMONIALS */}
      <section className="section-padding bg-secondary">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-tag">Testimonials</span>
            <h2 className="section-title">Reflections From Our Guests</h2>
            <p className="section-subtitle">
              Read reflections from valued patrons and food connoisseurs who have dined with us.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem'
            }}
          >
            {customerReviewsData.map((review) => (
              <TestimonialCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      {/* 9. CALL TO ACTION & PRIVATE RESERVATION BANNER */}
      <section
        style={{
          position: 'relative',
          padding: '7.5rem 0',
          backgroundImage: `url(${images.heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#FFFFFF',
          textAlign: 'center'
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(10,13,16,0.88) 0%, rgba(8,10,13,0.96) 100%)'
          }}
        />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <span className="section-tag">
            RESERVE YOUR EXPERIENCE
          </span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.3rem, 5vw, 3.5rem)', color: '#FFFFFF', marginBottom: '1.25rem' }}>
            Ready to Experience Authentic Asian Cuisine?
          </h2>
          <p style={{ color: '#C0D2DA', fontSize: '1.1rem', maxWidth: '660px', margin: '0 auto 2.5rem auto' }}>
            Whether an intimate dinner for two or a private family celebration, reserve your sanctuary table today.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <button onClick={() => handleOrderDishClick(null)} className="btn btn-teal" style={{ padding: '1rem 2.5rem' }}>
              <PhoneCall size={18} />
              <span>Instant Online Booking</span>
            </button>
            <button onClick={() => navigate('/contact')} className="btn btn-outline-light" style={{ padding: '1rem 2.2rem' }}>
              <span>Contact Concierge</span>
            </button>
          </div>
        </div>
      </section>

      {/* Modals */}
      <ReservationModal isOpen={isReservationOpen} onClose={() => setIsReservationOpen(false)} />
      <OrderDishModal isOpen={isOrderModalOpen} onClose={() => setIsOrderModalOpen(false)} selectedDish={selectedOrderDish} />
    </div>
  );
};

export default HomePage;
