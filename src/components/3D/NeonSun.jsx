import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";

const NeonSun = () => {
  const sunRef = useRef();
  const glowRef = useRef();

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    if (sunRef.current) {
      // Pulsating effect
      const scale = 1 + Math.sin(time * 0.5) * 0.05;
      sunRef.current.scale.set(scale, scale, scale);
    }

    if (glowRef.current) {
      // Rotating glow
      glowRef.current.rotation.z = time * 0.1;
    }
  });

  return (
    <group position={[0, 20, -150]}>
      {/* Main sun sphere */}
      <Sphere ref={sunRef} args={[18, 64, 64]}>
        <meshBasicMaterial color="#ff0080" transparent opacity={0.1} />
      </Sphere>

      {/* Glow layers */}
      <Sphere args={[22, 32, 32]}>
        <meshBasicMaterial color="#ff006e" transparent opacity={0.08} />
      </Sphere>

      <Sphere args={[25, 32, 32]}>
        <meshBasicMaterial color="#ffaa00" transparent opacity={0.08} />
      </Sphere>

      <Sphere ref={glowRef} args={[30, 32, 32]}>
        <meshBasicMaterial color="#ff00ff" transparent opacity={0.08} />
      </Sphere>

      {/* Point light for illumination */}
      <pointLight
        position={[0, 0, 0]}
        intensity={2}
        distance={200}
        color="#ff006e"
      />
    </group>
  );
};

export default NeonSun;
