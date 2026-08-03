import React, { useState } from 'react';
import { Send, CheckCircle2, User, Mail, Phone, MessageSquare, FileText } from 'lucide-react';
import { useData } from '../context/DataContext';

const ContactForm = () => {
  const { addMessage } = useData();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMessage({
      name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message
    });
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({ fullName: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
    setSubmitted(false);
  };

  return (
    <div
      style={{
        backgroundColor: 'var(--bg-white)',
        borderRadius: '12px',
        padding: '2.5rem',
        boxShadow: 'var(--shadow-lg)',
        border: '1px solid var(--border-light)'
      }}
    >
      <div style={{ marginBottom: '2rem' }}>
        <span className="section-tag" style={{ justifyContent: 'flex-start' }}>
          Get In Touch
        </span>
        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>
          Send Us A Message
        </h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
          Have a question or special inquiry? Fill out the form below and our team will respond promptly.
        </p>
      </div>

      {submitted ? (
        <div
          style={{
            backgroundColor: '#0A0D10',
            border: '1px solid var(--accent)',
            borderRadius: '8px',
            padding: '2.5rem 1.5rem',
            textAlign: 'center',
            animation: 'fadeIn 0.5s ease forwards'
          }}
        >
          <div
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              backgroundColor: 'rgba(0, 210, 180, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.25rem auto'
            }}
          >
            <CheckCircle2 size={32} color="var(--accent)" />
          </div>
          <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>
            Thank You, {formData.fullName || 'Guest'}!
          </h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '420px', margin: '0 auto 1.5rem auto' }}>
            Your message has been saved to our inbox. Our concierge team will get in touch with you shortly.
          </p>
          <button onClick={handleReset} className="btn btn-outline-teal" style={{ padding: '0.6rem 1.4rem', fontSize: '0.88rem' }}>
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: '#FFFFFF', marginBottom: '0.5rem' }}
            >
              Full Name *
            </label>
            <div style={{ position: 'relative' }}>
              <User size={18} color="var(--accent)" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                placeholder="e.g. Alexander Wright"
                value={formData.fullName}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.85rem 1rem 0.85rem 2.8rem',
                  fontSize: '0.95rem',
                  borderRadius: '6px',
                  border: '1px solid var(--border-subtle)',
                  backgroundColor: '#0A0D10',
                  color: '#FFFFFF',
                  outline: 'none',
                  transition: 'all 0.25s ease',
                  fontFamily: 'var(--font-sans)'
                }}
              />
            </div>
          </div>

          {/* Grid: Email & Phone */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: '#FFFFFF', marginBottom: '0.5rem' }}
              >
                Email Address *
              </label>
              <div style={{ position: 'relative' }}>
                <Mail size={18} color="var(--accent)" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="alexander@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem 0.85rem 2.8rem',
                    fontSize: '0.95rem',
                    borderRadius: '6px',
                    border: '1px solid var(--border-subtle)',
                    backgroundColor: '#0A0D10',
                    color: '#FFFFFF',
                    outline: 'none',
                    transition: 'all 0.25s ease',
                    fontFamily: 'var(--font-sans)'
                  }}
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: '#FFFFFF', marginBottom: '0.5rem' }}
              >
                Phone Number *
              </label>
              <div style={{ position: 'relative' }}>
                <Phone size={18} color="var(--accent)" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem 0.85rem 2.8rem',
                    fontSize: '0.95rem',
                    borderRadius: '6px',
                    border: '1px solid var(--border-subtle)',
                    backgroundColor: '#0A0D10',
                    color: '#FFFFFF',
                    outline: 'none',
                    transition: 'all 0.25s ease',
                    fontFamily: 'var(--font-sans)'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Subject */}
          <div>
            <label
              htmlFor="subject"
              style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: '#FFFFFF', marginBottom: '0.5rem' }}
            >
              Subject *
            </label>
            <div style={{ position: 'relative' }}>
              <FileText size={18} color="var(--accent)" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="text"
                id="subject"
                name="subject"
                required
                placeholder="e.g. Private VIP Suite Reservation"
                value={formData.subject}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.85rem 1rem 0.85rem 2.8rem',
                  fontSize: '0.95rem',
                  borderRadius: '6px',
                  border: '1px solid var(--border-subtle)',
                  backgroundColor: '#0A0D10',
                  color: '#FFFFFF',
                  outline: 'none',
                  transition: 'all 0.25s ease',
                  fontFamily: 'var(--font-sans)'
                }}
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: '#FFFFFF', marginBottom: '0.5rem' }}
            >
              Your Message *
            </label>
            <div style={{ position: 'relative' }}>
              <MessageSquare size={18} color="var(--accent)" style={{ position: 'absolute', left: '1rem', top: '1rem' }} />
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="Tell us about your dining plans, inquiries, or special requirements..."
                value={formData.message}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.85rem 1rem 0.85rem 2.8rem',
                  fontSize: '0.95rem',
                  borderRadius: '6px',
                  border: '1px solid var(--border-subtle)',
                  backgroundColor: '#0A0D10',
                  color: '#FFFFFF',
                  outline: 'none',
                  transition: 'all 0.25s ease',
                  fontFamily: 'var(--font-sans)',
                  resize: 'vertical'
                }}
              />
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-teal" style={{ width: '100%', marginTop: '0.5rem', padding: '1rem' }}>
            <Send size={18} />
            <span>Submit Message</span>
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
