import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';
import { images } from '../data/restaurantData';

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
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            backgroundImage: `url(${images.heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            overflow: 'hidden'
          }}
        >
          {/* Ambient Dark Luxury Vignette Overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(ellipse at center, rgba(10, 13, 16, 0.68) 0%, rgba(8, 10, 13, 0.92) 75%, rgba(5, 7, 10, 0.98) 100%)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)'
            }}
          />

          {/* Glowing Animated Radial Light Particles */}
          <div
            style={{
              position: 'absolute',
              width: '650px',
              height: '650px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(0, 210, 180, 0.2) 0%, rgba(229, 193, 88, 0.08) 50%, rgba(0, 0, 0, 0) 75%)',
              pointerEvents: 'none',
              animation: 'ambientPulse 3s infinite alternate ease-in-out'
            }}
          />

          {/* Glassmorphic Central Sanctuary Card */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'relative',
              zIndex: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              backgroundColor: 'rgba(12, 16, 21, 0.82)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              padding: '3rem 3.5rem',
              borderRadius: '24px',
              border: '1px solid rgba(0, 210, 180, 0.3)',
              boxShadow: '0 30px 80px rgba(0, 0, 0, 0.85), 0 0 40px rgba(0, 210, 180, 0.25)',
              maxWidth: '480px',
              width: '100%'
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
                  inset: '-8px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #00FFE0 0%, #00D2B4 50%, #E5C158 100%)',
                  opacity: 0.7,
                  filter: 'blur(12px)',
                  animation: 'pulseGlow 2s infinite alternate ease-in-out'
                }}
              />
              <img
                src={logo}
                alt="The Asian Table Logo"
                style={{
                  width: '115px',
                  height: '115px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  position: 'relative',
                  border: '2px solid var(--accent)',
                  boxShadow: '0 0 35px rgba(0, 210, 180, 0.5)'
                }}
              />
            </motion.div>

            {/* Brand Title */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.1rem, 5vw, 3.2rem)',
                fontWeight: 700,
                letterSpacing: '0.08em',
                color: '#FFFFFF',
                lineHeight: 1.1,
                marginBottom: '0.75rem',
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.8)'
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
                gap: '0.6rem',
                fontSize: '0.78rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--accent-gold)',
                fontWeight: 600,
                marginBottom: '0.5rem'
              }}
            >
              <span style={{ color: 'var(--accent)' }}>❖</span>
              <span>GOOD FOOD • GREAT EXPERIENCE</span>
              <span style={{ color: 'var(--accent)' }}>❖</span>
            </motion.div>

            {/* Luxury Progress Line */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: '190px', opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              style={{
                height: '2.5px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '4px',
                marginTop: '2rem',
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
          </motion.div>

          <style>{`
            @keyframes pulseGlow {
              0% { opacity: 0.5; transform: scale(0.96); }
              100% { opacity: 0.9; transform: scale(1.06); }
            }
            @keyframes ambientPulse {
              0% { opacity: 0.5; transform: scale(0.95); }
              100% { opacity: 1; transform: scale(1.1); }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
