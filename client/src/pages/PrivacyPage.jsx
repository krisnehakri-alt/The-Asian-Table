import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, Eye, FileText, Mail, ArrowLeft, Server, UserCheck } from 'lucide-react';

const PrivacyPage = () => {
  return (
    <div style={{ backgroundColor: 'var(--bg-cream)', minHeight: '100vh', color: 'var(--text-main)' }}>
      {/* Hero Banner */}
      <section className="page-banner">
        <div className="page-banner-overlay"></div>
        <div className="container page-banner-content">
          <div className="section-tag">LEGAL & TRANSPARENCY</div>
          <h1 className="page-banner-title">Privacy Policy</h1>
          <div className="breadcrumbs">
            <Link to="/">Home</Link>
            <span>/</span>
            <span style={{ color: 'var(--accent)' }}>Privacy Policy</span>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="section-padding bg-secondary">
        <div className="container" style={{ maxWidth: '960px' }}>
          {/* Introduction Card */}
          <div
            style={{
              backgroundColor: 'var(--bg-white)',
              padding: '2.5rem',
              borderRadius: '8px',
              boxShadow: 'var(--shadow-md)',
              border: '1px solid var(--border-light)',
              marginBottom: '3rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(0, 210, 180, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent)',
                  border: '1px solid var(--accent)'
                }}
              >
                <ShieldCheck size={26} />
              </div>
              <div>
                <h2 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', color: '#FFFFFF', margin: 0 }}>
                  Commitment to Your Privacy
                </h2>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
                  Last Updated: July 31, 2026
                </p>
              </div>
            </div>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '0.98rem' }}>
              At <strong style={{ color: '#FFFFFF' }}>The Asian Table</strong>, we hold the trust and privacy of our valued guests in the highest regard. 
              Whether you are reserving a table for an intimate dining experience, inquiring about private banquets, or exploring 
              our culinary offerings online, we are committed to safeguarding your personal data with utmost transparency and security.
            </p>
          </div>

          {/* Detailed Policy Blocks */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* 1. Information We Collect */}
            <div
              style={{
                backgroundColor: 'var(--bg-white)',
                padding: '2rem',
                borderRadius: '8px',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <Eye size={22} color="var(--accent)" />
                <h3 style={{ fontSize: '1.3rem', fontFamily: 'var(--font-serif)', color: '#FFFFFF' }}>
                  1. Information We Collect
                </h3>
              </div>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>
                To deliver bespoke fine dining service, we collect personal information when you interact with our website or establishment:
              </p>
              <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
                <li><strong style={{ color: '#FFFFFF' }}>Reservation & Contact Details:</strong> Full name, phone number, email address, dining date, and party size.</li>
                <li><strong style={{ color: '#FFFFFF' }}>Dining Preferences & Dietary Needs:</strong> Specific dietary restrictions, food allergies, or special occasion notes provided during booking.</li>
                <li><strong style={{ color: '#FFFFFF' }}>Digital & Technical Data:</strong> IP address, browser type, device information, and browsing telemetry captured via cookies to refine our site performance.</li>
              </ul>
            </div>

            {/* 2. How We Use Your Data */}
            <div
              style={{
                backgroundColor: 'var(--bg-white)',
                padding: '2rem',
                borderRadius: '8px',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <UserCheck size={22} color="var(--accent)" />
                <h3 style={{ fontSize: '1.3rem', fontFamily: 'var(--font-serif)', color: '#FFFFFF' }}>
                  2. How We Use Your Information
                </h3>
              </div>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>
                Your data is exclusively processed for legitimate hospitality and service operations:
              </p>
              <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
                <li>Confirming, managing, and sending reminders for your table reservations.</li>
                <li>Customizing culinary preparation to accommodate dietary requirements and allergies.</li>
                <li>Responding promptly to guest inquiries, private dining requests, and feedback.</li>
                <li>Sending optional invitations to exclusive seasonal menu debuts (only with explicit consent).</li>
              </ul>
            </div>

            {/* 3. Security & Protection */}
            <div
              style={{
                backgroundColor: 'var(--bg-white)',
                padding: '2rem',
                borderRadius: '8px',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <Lock size={22} color="var(--accent)" />
                <h3 style={{ fontSize: '1.3rem', fontFamily: 'var(--font-serif)', color: '#FFFFFF' }}>
                  3. Data Security & Storage
                </h3>
              </div>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                We employ industry-standard SSL encryption and strict administrative protocols to prevent unauthorized access, alteration, or disclosure of your personal information. Access to guest records is strictly restricted to authorized staff members on a need-to-know basis.
              </p>
            </div>

            {/* 4. Third-Party Sharing */}
            <div
              style={{
                backgroundColor: 'var(--bg-white)',
                padding: '2rem',
                borderRadius: '8px',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <Server size={22} color="var(--accent)" />
                <h3 style={{ fontSize: '1.3rem', fontFamily: 'var(--font-serif)', color: '#FFFFFF' }}>
                  4. Third-Party Disclosure
                </h3>
              </div>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                <strong style={{ color: '#FFFFFF' }}>We never sell, rent, or trade your personal information.</strong> Information is shared only with trusted technology partners (such as secure table booking engines and payment processing networks) who operate under strict non-disclosure obligations.
              </p>
            </div>

            {/* 5. Rights & Contact */}
            <div
              style={{
                backgroundColor: 'var(--bg-white)',
                padding: '2rem',
                borderRadius: '8px',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <FileText size={22} color="var(--accent)" />
                <h3 style={{ fontSize: '1.3rem', fontFamily: 'var(--font-serif)', color: '#FFFFFF' }}>
                  5. Your Rights & Choice
                </h3>
              </div>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                You reserve the right to inspect, update, or request the deletion of your personal contact records at any time. You may also opt out of promotional communications with a single click.
              </p>
              
              <div
                style={{
                  backgroundColor: '#0A0D10',
                  color: '#FFFFFF',
                  padding: '1.5rem',
                  borderRadius: '6px',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  border: '1px solid var(--border-light)'
                }}
              >
                <div>
                  <h4 style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent)', fontSize: '1.1rem', marginBottom: '0.25rem' }}>
                    Privacy Concerns or Questions?
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: '#CCCCCC', margin: 0 }}>
                    Direct your inquiries to our Data Protection Officer at <strong>privacy@theasiantable.com</strong>
                  </p>
                </div>
                <a
                  href="mailto:privacy@theasiantable.com"
                  className="btn btn-teal"
                  style={{ fontSize: '0.85rem', padding: '0.6rem 1.2rem' }}
                >
                  <Mail size={16} /> Email DPO
                </a>
              </div>
            </div>
          </div>

          {/* Navigation back */}
          <div style={{ marginTop: '3rem', textAlign: 'center' }}>
            <Link to="/" className="btn btn-outline-teal">
              <ArrowLeft size={16} /> Return to Home Page
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;
