import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { Lock, User, Sparkles, ShieldCheck } from 'lucide-react';

const AdminLoginPage = () => {
  const { loginAdmin } = useData();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = loginAdmin(username, password);
    if (!success) {
      setError('Invalid credentials. Use admin / admin123 or password 1234');
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'radial-gradient(circle at center, #1a1612 0%, #0d0b09 100%)',
      color: '#f3e8d8',
      padding: '20px'
    }}>
      <div style={{
        maxWidth: '420px',
        width: '100%',
        background: 'rgba(20, 18, 16, 0.95)',
        border: '1px solid rgba(212, 175, 55, 0.3)',
        borderRadius: '16px',
        padding: '40px 32px',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8), 0 0 30px rgba(212, 175, 55, 0.1)',
        backdropFilter: 'blur(10px)',
        textAlign: 'center'
      }}>
        <div style={{ display: 'inline-flex', padding: '14px', borderRadius: '50%', background: 'rgba(212, 175, 55, 0.1)', color: '#d4af37', marginBottom: '16px' }}>
          <ShieldCheck size={36} />
        </div>
        
        <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '26px', color: '#d4af37', marginBottom: '8px', letterSpacing: '1px' }}>
          THE ASIAN TABLE
        </h2>
        <p style={{ color: '#a09585', fontSize: '14px', marginBottom: '28px' }}>
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
            <label style={{ display: 'block', fontSize: '12px', color: '#c5b59b', marginBottom: '6px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
              Username
            </label>
            <div style={{ position: 'relative' }}>
              <User size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#8c7e6b' }} />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="admin"
                style={{
                  width: '100%',
                  padding: '12px 12px 12px 40px',
                  background: 'rgba(30, 26, 22, 0.8)',
                  border: '1px solid rgba(212, 175, 55, 0.25)',
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
            <label style={{ display: 'block', fontSize: '12px', color: '#c5b59b', marginBottom: '6px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
              Password
            </label>
            <div style={{ position: 'relative' }}>
              <Lock size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#8c7e6b' }} />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="admin123"
                style={{
                  width: '100%',
                  padding: '12px 12px 12px 40px',
                  background: 'rgba(30, 26, 22, 0.8)',
                  border: '1px solid rgba(212, 175, 55, 0.25)',
                  borderRadius: '8px',
                  color: '#fff',
                  fontSize: '14px',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>
          </div>

          <button
            type="submit"
            style={{
              marginTop: '10px',
              padding: '14px',
              background: 'linear-gradient(135deg, #d4af37 0%, #aa820a 100%)',
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
              boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)'
            }}
          >
            <Sparkles size={18} /> Sign In to Portal
          </button>
        </form>

        <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid rgba(212, 175, 55, 0.1)', fontSize: '12px', color: '#8c7e6b' }}>
          Default Demo Access: <strong>admin</strong> / <strong>admin123</strong>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;
