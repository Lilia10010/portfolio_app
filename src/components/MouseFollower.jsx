import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '../hooks/useMousePosition';

const MouseFollower = () => {
  const { x, y } = useMousePosition();
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

  return (
    <motion.div
      className={`custom-cursor ${isActive ? 'active' : ''}`}
      animate={{
        x: x,
        y: y,
      }}
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 28,
        mass: 0.5
      }}
    />
  );
};

export default MouseFollower;
