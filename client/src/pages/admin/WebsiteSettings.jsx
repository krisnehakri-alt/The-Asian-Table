import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import {
  Save,
  Globe,
  Mail,
  Phone,
  MapPin,
  Clock,
  Share2,
  CheckCircle,
  FileText
} from 'lucide-react';

const WebsiteSettings = () => {
  const { settings, updateSettings } = useData();

  const [formData, setFormData] = useState({ ...settings });
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateSettings(formData);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '800px' }}>
      
      {/* Header */}
      <div>
        <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '24px', color: '#d4af37', margin: '0 0 6px 0' }}>
          Global Website Settings
        </h2>
        <p style={{ color: '#a09585', fontSize: '14px', margin: 0 }}>
          Configure restaurant branding name, primary contact details, opening hours, social links, and footer info.
        </p>
      </div>

      {savedSuccess && (
        <div style={{
          background: 'rgba(34, 197, 94, 0.15)',
          border: '1px solid rgba(34, 197, 94, 0.4)',
          color: '#4ade80',
          padding: '12px 16px',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          fontSize: '14px'
        }}>
          <CheckCircle size={18} /> Website configuration settings saved successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* General Branding Section */}
        <div style={{
          background: 'rgba(22, 18, 15, 0.8)',
          border: '1px solid rgba(212, 175, 55, 0.15)',
          borderRadius: '12px',
          padding: '24px'
        }}>
          <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '16px', color: '#d4af37', margin: '0 0 16px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Globe size={18} /> Branding & Identity
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '12px', color: '#c5b59b', marginBottom: '6px' }}>Restaurant Name</label>
              <input
                type="text"
                value={formData.restaurantName}
                onChange={(e) => setFormData({ ...formData, restaurantName: e.target.value })}
                style={{ width: '100%', padding: '10px', background: 'rgba(30,26,22,0.8)', border: '1px solid rgba(212,175,55,0.25)', borderRadius: '6px', color: '#fff', boxSizing: 'border-box' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '12px', color: '#c5b59b', marginBottom: '6px' }}>Tagline / Slogan</label>
              <input
                type="text"
                value={formData.tagline}
                onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                style={{ width: '100%', padding: '10px', background: 'rgba(30,26,22,0.8)', border: '1px solid rgba(212,175,55,0.25)', borderRadius: '6px', color: '#fff', boxSizing: 'border-box' }}
              />
            </div>
          </div>
        </div>

        {/* Contact Info Section */}
        <div style={{
          background: 'rgba(22, 18, 15, 0.8)',
          border: '1px solid rgba(212, 175, 55, 0.15)',
          borderRadius: '12px',
          padding: '24px'
        }}>
          <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '16px', color: '#d4af37', margin: '0 0 16px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Phone size={18} /> Contact & Location Information
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '12px', color: '#c5b59b', marginBottom: '6px' }}>Concierge Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={{ width: '100%', padding: '10px', background: 'rgba(30,26,22,0.8)', border: '1px solid rgba(212,175,55,0.25)', borderRadius: '6px', color: '#fff', boxSizing: 'border-box' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '12px', color: '#c5b59b', marginBottom: '6px' }}>Primary Phone</label>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                style={{ width: '100%', padding: '10px', background: 'rgba(30,26,22,0.8)', border: '1px solid rgba(212,175,55,0.25)', borderRadius: '6px', color: '#fff', boxSizing: 'border-box' }}
              />
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '12px', color: '#c5b59b', marginBottom: '6px' }}>Headquarters Address</label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                style={{ width: '100%', padding: '10px', background: 'rgba(30,26,22,0.8)', border: '1px solid rgba(212,175,55,0.25)', borderRadius: '6px', color: '#fff', boxSizing: 'border-box' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '12px', color: '#c5b59b', marginBottom: '6px' }}>Global Opening Hours</label>
              <input
                type="text"
                value={formData.openingHours}
                onChange={(e) => setFormData({ ...formData, openingHours: e.target.value })}
                style={{ width: '100%', padding: '10px', background: 'rgba(30,26,22,0.8)', border: '1px solid rgba(212,175,55,0.25)', borderRadius: '6px', color: '#fff', boxSizing: 'border-box' }}
              />
            </div>
          </div>
        </div>

        {/* Social Media & Footer */}
        <div style={{
          background: 'rgba(22, 18, 15, 0.8)',
          border: '1px solid rgba(212, 175, 55, 0.15)',
          borderRadius: '12px',
          padding: '24px'
        }}>
          <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '16px', color: '#d4af37', margin: '0 0 16px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Share2 size={18} /> Social Media Links & Footer Content
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '12px', color: '#c5b59b', marginBottom: '6px' }}>Facebook URL</label>
              <input
                type="text"
                value={formData.facebook}
                onChange={(e) => setFormData({ ...formData, facebook: e.target.value })}
                style={{ width: '100%', padding: '10px', background: 'rgba(30,26,22,0.8)', border: '1px solid rgba(212,175,55,0.25)', borderRadius: '6px', color: '#fff', boxSizing: 'border-box' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '12px', color: '#c5b59b', marginBottom: '6px' }}>Instagram URL</label>
              <input
                type="text"
                value={formData.instagram}
                onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                style={{ width: '100%', padding: '10px', background: 'rgba(30,26,22,0.8)', border: '1px solid rgba(212,175,55,0.25)', borderRadius: '6px', color: '#fff', boxSizing: 'border-box' }}
              />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '12px', color: '#c5b59b', marginBottom: '6px' }}>Footer Blurb Text</label>
            <textarea
              rows={3}
              value={formData.footerContent}
              onChange={(e) => setFormData({ ...formData, footerContent: e.target.value })}
              style={{ width: '100%', padding: '10px', background: 'rgba(30,26,22,0.8)', border: '1px solid rgba(212,175,55,0.25)', borderRadius: '6px', color: '#fff', boxSizing: 'border-box', fontFamily: 'inherit' }}
            />
          </div>
        </div>

        {/* Submit */}
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button
            type="submit"
            style={{
              padding: '14px 28px',
              background: 'linear-gradient(135deg, #d4af37 0%, #aa820a 100%)',
              color: '#000',
              fontWeight: '600',
              fontSize: '15px',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)'
            }}
          >
            <Save size={18} /> Save Settings
          </button>
        </div>

      </form>
    </div>
  );
};

export default WebsiteSettings;
