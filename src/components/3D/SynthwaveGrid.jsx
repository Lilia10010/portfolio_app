import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const SynthwaveGrid = () => {
  const gridRef = useRef();
  const gridRef2 = useRef();

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.position.z = (state.clock.elapsedTime * 20) % 100;
    }
    if (gridRef2.current) {
      gridRef2.current.position.z =
        ((state.clock.elapsedTime * 20) % 100) - 100;
    }
  });

  const createGrid = () => {
    const geometry = new THREE.BufferGeometry();
    const material = new THREE.LineBasicMaterial({
      color: new THREE.Color("#ff006e"),
      transparent: true,
      opacity: 0.3,
    });

    const points = [];
    const size = 200;
    const divisions = 10;

    // Horizontal lines
    for (let i = -divisions; i <= divisions; i++) {
      points.push(
        new THREE.Vector3(-size, 0, (i / divisions) * size),
        new THREE.Vector3(size, 0, (i / divisions) * size),
      );
    }

    // Vertical lines
    for (let i = -divisions; i <= divisions; i++) {
      points.push(
        new THREE.Vector3((i / divisions) * size, 0, -size),
        new THREE.Vector3((i / divisions) * size, 0, size),
      );
    }

    geometry.setFromPoints(points);

    return { geometry, material };
  };

  const { geometry, material } = createGrid();
  const { geometry: geometry2, material: material2 } = createGrid();

  // Update material color for second grid (cyan)
  material2.color = new THREE.Color("#00f3ff");

  return (
    <group position={[0, -30, -220]}>
      {/* First grid (pink) */}
      <lineSegments
        ref={gridRef}
        geometry={geometry}
        material={material}
        position={[0, 0, 0]}
      />

      {/* Second grid (cyan) - for seamless loop */}
      <lineSegments
        ref={gridRef2}
        geometry={geometry2}
        material={material2}
        position={[0, 0, 0]}
      />

      {/* Fog effect for distance */}
      <fog attach="fog" args={["#000000", 50, 200]} />
    </group>
  );
};

export default SynthwaveGrid;
