import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

const SplashScreen = ({ onFinish }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Show splash for 2.2 seconds then trigger exit fade out
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  const handleExitComplete = () => {
    if (onFinish) {
      onFinish();
    }
  };

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {isVisible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            backgroundColor: '#080A0D',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            overflow: 'hidden'
          }}
        >
          {/* Ambient Background Radial Glow */}
          <div
            style={{
              position: 'absolute',
              width: '600px',
              height: '600px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(0, 210, 180, 0.12) 0%, rgba(229, 193, 88, 0.04) 45%, rgba(8, 10, 13, 0) 70%)',
              pointerEvents: 'none'
            }}
          />

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              position: 'relative',
              zIndex: 2
            }}
          >
            {/* Animated Logo Container */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'relative',
                marginBottom: '1.75rem'
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: '-6px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #00FFE0 0%, #00D2B4 50%, #E5C158 100%)',
                  opacity: 0.6,
                  filter: 'blur(10px)',
                  animation: 'pulseGlow 2s infinite alternate ease-in-out'
                }}
              />
              <img
                src={logo}
                alt="The Asian Table Logo"
                style={{
                  width: '110px',
                  height: '110px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  position: 'relative',
                  border: '2px solid var(--accent)',
                  boxShadow: '0 0 30px rgba(0, 210, 180, 0.4)'
                }}
              />
            </motion.div>

            {/* Brand Name */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2rem, 5vw, 3.2rem)',
                fontWeight: 700,
                letterSpacing: '0.08em',
                color: '#FFFFFF',
                lineHeight: 1.1,
                marginBottom: '0.75rem'
              }}
            >
              THE ASIAN <span style={{ color: 'var(--accent)' }}>TABLE</span>
            </motion.h1>

            {/* Tagline */}
            <motion.div
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                fontSize: '0.82rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'var(--accent-gold)',
                fontWeight: 600
              }}
            >
              <span style={{ color: 'var(--accent)' }}>❖</span>
              <span>GOOD FOOD • GREAT EXPERIENCE</span>
              <span style={{ color: 'var(--accent)' }}>❖</span>
            </motion.div>

            {/* Luxury Animated Progress Line */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: '180px', opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              style={{
                height: '2px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '4px',
                marginTop: '2.5rem',
                overflow: 'hidden',
                position: 'relative'
              }}
            >
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '0%' }}
                transition={{ duration: 1.7, delay: 0.5, ease: 'easeInOut' }}
                style={{
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, #00A896 0%, #00FFE0 50%, #E5C158 100%)'
                }}
              />
            </motion.div>
          </div>

          <style>{`
            @keyframes pulseGlow {
              0% { opacity: 0.4; transform: scale(0.98); }
              100% { opacity: 0.8; transform: scale(1.05); }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
