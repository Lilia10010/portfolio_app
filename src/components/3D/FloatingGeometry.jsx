import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {
  RoundedBox,
  Octahedron,
  Torus,
  Sphere,
  Icosahedron,
  Cone,
} from "@react-three/drei";

const FloatingGeometry = () => {
  const cube1 = useRef();
  const cube2 = useRef();
  const octa1 = useRef();
  // const torus1 = useRef();
  const star1 = useRef();
  const ringPlanet = useRef();

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    if (cube1.current) {
      cube1.current.rotation.x = time * 0.2;
      cube1.current.rotation.y = time * 0.3;
      cube1.current.position.y = Math.sin(time * 0.5) * 2 + 15;
    }

    if (cube2.current) {
      cube2.current.rotation.x = time * 0.15;
      cube2.current.rotation.z = time * 0.25;
      cube2.current.position.y = Math.sin(time * 0.6 + 2) * 2 + 3;
    }

    if (octa1.current) {
      octa1.current.rotation.y = time * 0.4;
      octa1.current.position.y = Math.sin(time * 0.7 + 1) * 1.5 + 4;
    }

    if (star1.current) {
      // star1.current.rotation.y = time * 0.4;
      // star1.current.position.y = Math.sin(time * 0.7 + 1) * 1.5 + 4;

      star1.current.rotation.x = time * 0.15;
      star1.current.rotation.z = time * 0.25;
      star1.current.position.y = Math.sin(time * 0.6 + 2) * 2 + 3;
    }

    // if (torus1.current) {
    //   torus1.current.rotation.x = time * 0.3;
    //   torus1.current.rotation.y = time * 0.2;
    //   torus1.current.position.y = Math.sin(time * 0.4 + 3) * 1.5 + 17;
    // }
    if (ringPlanet.current) {
      ringPlanet.current.rotation.y = time * 0.2;
      ringPlanet.current.position.y = Math.sin(time * 0.4 + 3) * 1.5 + 17;
    }
  });

  return (
    <group>
      {/* esquerdo cima */}
      <Icosahedron ref={star1} args={[2, 0]} position={[18, 3, -40]}>
        <meshBasicMaterial
          color="#ffaa00"
          wireframe
          transparent
          opacity={0.7}
        />
      </Icosahedron>

      {/* direito baixo */}
      <Cone
        ref={cube1}
        args={[1.2, 4, 12]}
        position={[-15, 5, -30]}
        rotation={[Math.PI / 4, 0, Math.PI / 6]}
      >
        <meshBasicMaterial color="#ff006e" wireframe opacity={0.6} />
      </Cone>

      {/* esquerdo de baixo */}
      <Octahedron ref={octa1} args={[2, 0]} position={[-20, 4, -50]}>
        <meshBasicMaterial
          color="#9d00ff"
          wireframe
          transparent
          opacity={0.7}
        />
      </Octahedron>

      {/* direito cima*/}
      <group ref={ringPlanet} position={[15, 6, -35]}>
        <Sphere args={[1.8, 32, 32]}>
          <meshBasicMaterial
            color="#00f3ff"
            wireframe
            transparent
            opacity={0.1}
          />
        </Sphere>
        <Torus args={[2.5, 0.15, 16, 64]} rotation={[Math.PI / 2, 0, 0]}>
          <meshBasicMaterial
            color="#00b4b4"
            wireframe
            transparent
            opacity={0.4}
          />
        </Torus>
      </group>
    </group>
  );
};

export default FloatingGeometry;
