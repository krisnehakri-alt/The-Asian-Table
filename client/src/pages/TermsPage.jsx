import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, CalendarCheck, ShieldAlert, Award, Clock, ArrowLeft, HelpCircle } from 'lucide-react';

const TermsPage = () => {
  return (
    <div style={{ backgroundColor: 'var(--bg-cream)', minHeight: '100vh', color: 'var(--text-main)' }}>
      {/* Hero Banner */}
      <section className="page-banner">
        <div className="page-banner-overlay"></div>
        <div className="container page-banner-content">
          <div className="section-tag">LEGAL & POLICIES</div>
          <h1 className="page-banner-title">Terms of Service</h1>
          <div className="breadcrumbs">
            <Link to="/">Home</Link>
            <span>/</span>
            <span style={{ color: 'var(--accent)' }}>Terms of Service</span>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="section-padding bg-secondary">
        <div className="container" style={{ maxWidth: '960px' }}>
          {/* Introduction Header Card */}
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
                <FileText size={26} />
              </div>
              <div>
                <h2 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', color: '#FFFFFF', margin: 0 }}>
                  Terms & Dining Guidelines
                </h2>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
                  Effective Date: July 31, 2026
                </p>
              </div>
            </div>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '0.98rem' }}>
              Welcome to <strong style={{ color: '#FFFFFF' }}>The Asian Table</strong>. By accessing our website, reserving dining tables, or visiting our 
              establishment, you agree to comply with and be bound by the following Terms of Service. Please review them carefully 
              prior to making reservations.
            </p>
          </div>

          {/* Detailed Terms Sections */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* 1. Reservations & Cancellation Policy */}
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
                <CalendarCheck size={22} color="var(--accent)" />
                <h3 style={{ fontSize: '1.3rem', fontFamily: 'var(--font-serif)', color: '#FFFFFF' }}>
                  1. Reservations & Grace Period Policy
                </h3>
              </div>
              <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
                <li><strong style={{ color: '#FFFFFF' }}>Grace Period:</strong> Reserved tables are held for up to <strong style={{ color: 'var(--accent)' }}>15 minutes</strong> past the scheduled reservation time. If your party is delayed, please contact us immediately to ensure table availability.</li>
                <li><strong style={{ color: '#FFFFFF' }}>Cancellation Window:</strong> We request cancellations or party size adjustments to be made at least <strong style={{ color: 'var(--accent)' }}>6 hours prior</strong> to standard dining and <strong style={{ color: 'var(--accent)' }}>24 hours prior</strong> for private dining bookings.</li>
                <li><strong style={{ color: '#FFFFFF' }}>Private Dining Deposits:</strong> Chef’s tasting menu experiences and private banquet room reservations may require a non-refundable holding deposit.</li>
              </ul>
            </div>

            {/* 2. Dining Experience & Etiquette */}
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
                <Award size={22} color="var(--accent)" />
                <h3 style={{ fontSize: '1.3rem', fontFamily: 'var(--font-serif)', color: '#FFFFFF' }}>
                  2. Dining Etiquette & Guest Responsibilities
                </h3>
              </div>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>
                To maintain an exquisite atmosphere for all culinary guests, we ask that visitors adhere to our dining standards:
              </p>
              <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
                <li><strong style={{ color: '#FFFFFF' }}>Smart Casual Attire:</strong> We recommend elegant smart-casual attire. Beachwear and athletic attire are prohibited in the main dining hall.</li>
                <li><strong style={{ color: '#FFFFFF' }}>Dietary Disclosures:</strong> Guests must inform our service team of severe food allergies or medical dietary restrictions upon arrival or during reservation placement.</li>
                <li><strong style={{ color: '#FFFFFF' }}>Atmosphere:</strong> Please maintain courteous volume and respectful conduct towards fellow patrons and culinary staff.</li>
              </ul>
            </div>

            {/* 3. Intellectual Property */}
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
                <ShieldAlert size={22} color="var(--accent)" />
                <h3 style={{ fontSize: '1.3rem', fontFamily: 'var(--font-serif)', color: '#FFFFFF' }}>
                  3. Intellectual Property Rights
                </h3>
              </div>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                All brand identity assets, logos, culinary photography, menu design, and website graphics featured on this domain are the exclusive property of <strong style={{ color: '#FFFFFF' }}>The Asian Table</strong>. Unauthorized reproduction, distribution, or commercial use is strictly prohibited.
              </p>
            </div>

            {/* 4. Service Availability & Modifications */}
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
                <Clock size={22} color="var(--accent)" />
                <h3 style={{ fontSize: '1.3rem', fontFamily: 'var(--font-serif)', color: '#FFFFFF' }}>
                  4. Menu Variations & Pricing
                </h3>
              </div>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                Seasonal dish availability, market ingredients, and pricing are subject to subtle variations based on seasonal freshness and market availability. We reserve the right to modify menu selections and price listings at our discretion.
              </p>
            </div>

            {/* 5. Support & Contact */}
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
                <HelpCircle size={22} color="var(--accent)" />
                <h3 style={{ fontSize: '1.3rem', fontFamily: 'var(--font-serif)', color: '#FFFFFF' }}>
                  5. Governance & Inquiries
                </h3>
              </div>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                These terms shall be governed by and construed under local hospitality legislation. For any clarification regarding these terms or your dining experience, please contact our Guest Relations team.
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
                    Have Questions Regarding Terms?
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: '#CCCCCC', margin: 0 }}>
                    Our hospitality desk is available at <strong>concierge@theasiantable.com</strong>
                  </p>
                </div>
                <Link to="/contact" className="btn btn-teal" style={{ fontSize: '0.85rem', padding: '0.6rem 1.2rem' }}>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          {/* Back button */}
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

export default TermsPage;
