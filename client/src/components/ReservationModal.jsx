import React, { useState } from 'react';
import { X, Calendar, Clock, Users, MapPin, CheckCircle2, PhoneCall, Sparkles } from 'lucide-react';
import { branchData } from '../data/restaurantData';

const ReservationModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [booking, setBooking] = useState({
    branch: 'downtown',
    date: new Date().toISOString().split('T')[0],
    time: '19:30',
    guests: '2 Guests',
    name: '',
    phone: '',
    notes: ''
  });
  const [isConfirmed, setIsConfirmed] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsConfirmed(true);
  };

  const resetModal = () => {
    setIsConfirmed(false);
    setStep(1);
    onClose();
  };

  return (
    <div
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
        padding: '1.5rem'
      }}
    >
      <div
        style={{
          backgroundColor: '#0F151C',
          borderRadius: '12px',
          border: '1px solid var(--accent)',
          boxShadow: '0 25px 60px rgba(0, 210, 180, 0.25)',
          maxWidth: '560px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative',
          padding: '2.2rem',
          color: '#FFFFFF'
        }}
      >
        {/* Close Button */}
        <button
          onClick={resetModal}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'rgba(255, 255, 255, 0.06)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            color: '#FFFFFF',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--accent)';
            e.currentTarget.style.color = '#0A0D10';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
            e.currentTarget.style.color = '#FFFFFF';
          }}
        >
          <X size={20} />
        </button>

        {isConfirmed ? (
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <div
              style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                backgroundColor: 'rgba(0, 210, 180, 0.15)',
                border: '2px solid var(--accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto'
              }}
            >
              <CheckCircle2 size={40} color="var(--accent)" />
            </div>
            <span style={{ fontSize: '0.8rem', letterSpacing: '0.2em', color: 'var(--accent-gold)', fontWeight: 600, textTransform: 'uppercase' }}>
              RESERVATION CONFIRMED
            </span>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: '#FFFFFF', margin: '0.5rem 0 1rem 0' }}>
              Table Reserved for {booking.name || 'Honored Guest'}
            </h3>
            <div
              style={{
                backgroundColor: '#07090C',
                padding: '1.25rem',
                borderRadius: '8px',
                border: '1px solid rgba(0, 210, 180, 0.2)',
                textAlign: 'left',
                margin: '1.5rem 0',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.6rem',
                fontSize: '0.92rem',
                color: 'var(--text-muted)'
              }}
            >
              <div><strong style={{ color: '#FFFFFF' }}>Venue:</strong> {branchData.find(b => b.id === booking.branch)?.name}</div>
              <div><strong style={{ color: '#FFFFFF' }}>Date & Time:</strong> {booking.date} at {booking.time}</div>
              <div><strong style={{ color: '#FFFFFF' }}>Party Size:</strong> {booking.guests}</div>
              <div><strong style={{ color: '#FFFFFF' }}>Contact Phone:</strong> {booking.phone || 'Standard Confirmation'}</div>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              A confirmation text message and email has been sent. We hold reserved tables for up to 15 minutes.
            </p>
            <button onClick={resetModal} className="btn btn-teal" style={{ width: '100%' }}>
              Done & Return To Site
            </button>
          </div>
        ) : (
          <div>
            <div style={{ marginBottom: '1.75rem' }}>
              <span className="section-tag" style={{ justifyContent: 'flex-start' }}>
                FINE DINING RESERVATIONS
              </span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', color: '#FFFFFF', margin: 0 }}>
                Reserve Your Table
              </h2>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Branch Selector */}
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#FFFFFF', marginBottom: '0.4rem' }}>
                  Select Sanctuary Branch
                </label>
                <div style={{ position: 'relative' }}>
                  <MapPin size={18} color="var(--accent)" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
                  <select
                    value={booking.branch}
                    onChange={(e) => setBooking({ ...booking, branch: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem 0.8rem 2.7rem',
                      borderRadius: '6px',
                      backgroundColor: '#07090C',
                      border: '1px solid var(--border-light)',
                      color: '#FFFFFF',
                      fontSize: '0.92rem',
                      outline: 'none'
                    }}
                  >
                    {branchData.map((b) => (
                      <option key={b.id} value={b.id}>{b.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Date & Guests Row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#FFFFFF', marginBottom: '0.4rem' }}>
                    Date
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Calendar size={18} color="var(--accent)" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
                    <input
                      type="date"
                      value={booking.date}
                      onChange={(e) => setBooking({ ...booking, date: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem 0.8rem 2.7rem',
                        borderRadius: '6px',
                        backgroundColor: '#07090C',
                        border: '1px solid var(--border-light)',
                        color: '#FFFFFF',
                        fontSize: '0.92rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#FFFFFF', marginBottom: '0.4rem' }}>
                    Guests
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Users size={18} color="var(--accent)" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
                    <select
                      value={booking.guests}
                      onChange={(e) => setBooking({ ...booking, guests: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem 0.8rem 2.7rem',
                        borderRadius: '6px',
                        backgroundColor: '#07090C',
                        border: '1px solid var(--border-light)',
                        color: '#FFFFFF',
                        fontSize: '0.92rem',
                        outline: 'none'
                      }}
                    >
                      <option value="1 Guest">1 Person (Counter)</option>
                      <option value="2 Guests">2 People (Dining)</option>
                      <option value="4 Guests">4 People (Table)</option>
                      <option value="6 Guests">6 People (Alcove)</option>
                      <option value="8+ VIP Party">8+ VIP Suite</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Time Selector */}
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#FFFFFF', marginBottom: '0.4rem' }}>
                  Preferred Slot
                </label>
                <div style={{ position: 'relative' }}>
                  <Clock size={18} color="var(--accent)" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
                  <select
                    value={booking.time}
                    onChange={(e) => setBooking({ ...booking, time: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem 0.8rem 2.7rem',
                      borderRadius: '6px',
                      backgroundColor: '#07090C',
                      border: '1px solid var(--border-light)',
                      color: '#FFFFFF',
                      fontSize: '0.92rem',
                      outline: 'none'
                    }}
                  >
                    <option value="12:00 PM">12:00 PM (Lunch)</option>
                    <option value="01:30 PM">01:30 PM (Lunch)</option>
                    <option value="06:00 PM">06:00 PM (Dinner)</option>
                    <option value="07:30 PM">07:30 PM (Prime Dinner)</option>
                    <option value="09:00 PM">09:00 PM (Late Dining)</option>
                  </select>
                </div>
              </div>

              {/* Guest Info */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#FFFFFF', marginBottom: '0.4rem' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Eleanor Vance"
                    value={booking.name}
                    onChange={(e) => setBooking({ ...booking, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: '6px',
                      backgroundColor: '#07090C',
                      border: '1px solid var(--border-light)',
                      color: '#FFFFFF',
                      fontSize: '0.92rem',
                      outline: 'none'
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#FFFFFF', marginBottom: '0.4rem' }}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 000-0000"
                    value={booking.phone}
                    onChange={(e) => setBooking({ ...booking, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: '6px',
                      backgroundColor: '#07090C',
                      border: '1px solid var(--border-light)',
                      color: '#FFFFFF',
                      fontSize: '0.92rem',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-teal" style={{ padding: '0.95rem', marginTop: '0.5rem', width: '100%' }}>
                <PhoneCall size={18} />
                <span>Confirm Table Reservation</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReservationModal;
