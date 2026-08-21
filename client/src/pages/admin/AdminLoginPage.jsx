import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { Lock, User, Sparkles, ShieldCheck, Eye, EyeOff } from 'lucide-react';

const AdminLoginPage = () => {
  const { loginAdmin } = useData();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = loginAdmin(username, password);
    if (!success) {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'radial-gradient(circle at center, #151D24 0%, #0A0D10 100%)',
      color: '#F0F6F6',
      padding: '20px'
    }}>
      <div style={{
        maxWidth: '420px',
        width: '100%',
        background: 'rgba(21, 29, 36, 0.95)',
        border: '1px solid rgba(0, 210, 180, 0.3)',
        borderRadius: '16px',
        padding: '40px 32px',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 210, 180, 0.1)',
        backdropFilter: 'blur(10px)',
        textAlign: 'center'
      }}>
        <div style={{ display: 'inline-flex', padding: '14px', borderRadius: '50%', background: 'rgba(0, 210, 180, 0.1)', color: '#00D2B4', marginBottom: '16px' }}>
          <ShieldCheck size={36} />
        </div>
        
        <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '26px', color: '#00D2B4', marginBottom: '8px', letterSpacing: '1px' }}>
          THE ASIAN TABLE
        </h2>
        <p style={{ color: '#94A8B3', fontSize: '14px', marginBottom: '28px' }}>
          Luxury Management Portal
        </p>

        {error && (
          <div style={{
            background: 'rgba(220, 38, 38, 0.15)',
            border: '1px solid rgba(220, 38, 38, 0.4)',
            color: '#f87171',
            padding: '10px 14px',
            borderRadius: '8px',
            fontSize: '13px',
            marginBottom: '20px'
          }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px', textAlign: 'left' }}>
          <div>
            <label style={{ display: 'block', fontSize: '12px', color: '#94A8B3', marginBottom: '6px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
              Username
            </label>
            <div style={{ position: 'relative' }}>
              <User size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94A8B3' }} />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="name"
                style={{
                  width: '100%',
                  padding: '12px 12px 12px 40px',
                  background: 'rgba(17, 22, 27, 0.8)',
                  border: '1px solid rgba(0, 210, 180, 0.25)',
                  borderRadius: '8px',
                  color: '#fff',
                  fontSize: '14px',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '12px', color: '#94A8B3', marginBottom: '6px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
              Password
            </label>
            <div style={{ position: 'relative' }}>
              <Lock size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94A8B3' }} />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
                style={{
                  width: '100%',
                  padding: '12px 40px 12px 40px',
                  background: 'rgba(17, 22, 27, 0.8)',
                  border: '1px solid rgba(0, 210, 180, 0.25)',
                  borderRadius: '8px',
                  color: '#fff',
                  fontSize: '14px',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: '#94A8B3',
                  cursor: 'pointer',
                  padding: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            style={{
              marginTop: '10px',
              padding: '14px',
              background: 'linear-gradient(135deg, #00D2B4 0%, #00B49B 100%)',
              color: '#000',
              fontWeight: '600',
              fontSize: '15px',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(0, 210, 180, 0.3)'
            }}
          >
            <Sparkles size={18} /> Sign In to Portal
          </button>
        </form>

        <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid rgba(0, 210, 180, 0.1)', fontSize: '12px', color: '#94A8B3' }}>
          Please contact the system administrator if you have lost your credentials.
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;
