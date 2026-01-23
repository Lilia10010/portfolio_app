import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Stars = ({ count = 1500 }) => { // Reduced from 5000 for better performance
  const points = useRef();
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      // Random position in a large sphere
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      
      // Random neon color (cyan, pink, purple)
      const colorChoice = Math.random();
      if (colorChoice < 0.33) {
        // Cyan
        colors[i * 3] = 0;
        colors[i * 3 + 1] = 0.95;
        colors[i * 3 + 2] = 1;
      } else if (colorChoice < 0.66) {
        // Pink
        colors[i * 3] = 1;
        colors[i * 3 + 1] = 0;
        colors[i * 3 + 2] = 0.43;
      } else {
        // Purple
        colors[i * 3] = 0.62;
        colors[i * 3 + 1] = 0;
        colors[i * 3 + 2] = 1;
      }
    }
    
    return { positions, colors };
  }, [count]);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y += 0.0001;
      points.current.rotation.x += 0.00005;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.positions.length / 3}
          array={particlesPosition.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particlesPosition.colors.length / 3}
          array={particlesPosition.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={2}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const StarField = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        // zIndex: 1,
        pointerEvents: 'none',
      }}
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Stars />
      </Canvas>
    </div>
  );
};

export default StarField;
