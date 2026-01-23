import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  
  const currentLang = i18n.language;
  const isPortuguese = currentLang === 'pt-BR';

  const toggleLanguage = () => {
    const newLang = isPortuguese ? 'en' : 'pt-BR';
    i18n.changeLanguage(newLang);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 1.2 }}
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 1000,
      }}
    >
      <motion.button
        onClick={toggleLanguage}
        className="holo-card"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--spacing-sm)',
          padding: 'var(--spacing-sm) var(--spacing-md)',
          background: 'rgba(0, 0, 0, 0.8)',
          border: '1px solid var(--neon-cyan)',
          borderRadius: '4px',
          cursor: 'pointer',
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--font-size-sm)',
          color: 'var(--neon-cyan)',
          backdropFilter: 'blur(10px)',
          position: 'relative',
          overflow: 'hidden',
        }}
        whileHover={{
          scale: 1.05,
          boxShadow: '0 0 20px var(--neon-cyan), 0 0 40px var(--neon-cyan)',
        }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Animated background on hover */}
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(0, 243, 255, 0.1), transparent)',
            pointerEvents: 'none',
          }}
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.6 }}
        />

        <Globe size={16} />
        
        <div style={{ 
          display: 'flex', 
          gap: '4px',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
        }}>
          <span
            style={{
              fontWeight: isPortuguese ? 'bold' : 'normal',
              color: isPortuguese ? 'var(--neon-pink)' : 'var(--neon-cyan)',
              textShadow: isPortuguese ? '0 0 10px var(--neon-pink)' : 'none',
            }}
          >
            PT
          </span>
          <span style={{ opacity: 0.5 }}>/</span>
          <span
            style={{
              fontWeight: !isPortuguese ? 'bold' : 'normal',
              color: !isPortuguese ? 'var(--neon-pink)' : 'var(--neon-cyan)',
              textShadow: !isPortuguese ? '0 0 10px var(--neon-pink)' : 'none',
            }}
          >
            EN
          </span>
        </div>

        {/* Corner decoration */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '8px',
            height: '8px',
            borderTop: '2px solid var(--neon-cyan)',
            borderRight: '2px solid var(--neon-cyan)',
          }}
        />
      </motion.button>
    </motion.div>
  );
};

export default LanguageSwitcher;
