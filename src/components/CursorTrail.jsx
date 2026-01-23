import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '../hooks/useMousePosition';

const CursorTrail = () => {
  const { x, y } = useMousePosition();
  const [trail, setTrail] = useState([]);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleMouseDown = () => setIsActive(true);
    const handleMouseUp = () => setIsActive(false);

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  // Update trail with reduced count for performance
  useEffect(() => {
    const newTrail = [...trail, { x, y, id: Date.now() }];
    if (newTrail.length > 10) { // Reduced from 20
      newTrail.shift();
    }
    setTrail(newTrail);
  }, [x, y]);

  return (
    <>
      {/* Main cursor - HUD style */}
      <motion.div
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: '40px',
          height: '40px',
          pointerEvents: 'none',
          zIndex: 10000,
        }}
        animate={{
          x: x - 20,
          y: y - 20,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        {/* Outer ring */}
        <div
          style={{
            width: '100%',
            height: '100%',
            border: `2px solid ${isActive ? '#ff006e' : '#00f3ff'}`,
            borderRadius: '50%',
            boxShadow: isActive
              ? '0 0 20px #ff006e, 0 0 40px #ff006e'
              : '0 0 20px #00f3ff, 0 0 40px #00f3ff',
            transition: 'all 0.2s ease',
            transform: isActive ? 'scale(0.8)' : 'scale(1)',
          }}
        >
          {/* Crosshair */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '2px',
              height: '60%',
              background: isActive ? '#ff006e' : '#00f3ff',
              transform: 'translate(-50%, -50%)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '60%',
              height: '2px',
              background: isActive ? '#ff006e' : '#00f3ff',
              transform: 'translate(-50%, -50%)',
            }}
          />
          
          {/* Center dot */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '4px',
              height: '4px',
              background: isActive ? '#ff006e' : '#00f3ff',
              borderRadius: '50%',
              transform: 'translate(-50%, -50%)',
              boxShadow: isActive
                ? '0 0 10px #ff006e'
                : '0 0 10px #00f3ff',
            }}
          />
        </div>
      </motion.div>

      {/* Trail particles */}
      {trail.map((point, index) => (
        <motion.div
          key={point.id}
          style={{
            position: 'fixed',
            left: point.x,
            top: point.y,
            width: '4px',
            height: '4px',
            borderRadius: '50%',
            background: '#00f3ff',
            pointerEvents: 'none',
            zIndex: 9999,
          }}
          initial={{ opacity: 0.8, scale: 1 }}
          animate={{
            opacity: 0,
            scale: 0,
          }}
          transition={{
            duration: 0.5,
            ease: 'easeOut',
          }}
        />
      ))}
    </>
  );
};

export default CursorTrail;
