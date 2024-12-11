// components/EthereumModel.tsx
"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const EthereumModel = () => {
  const ref = useRef<THREE.Group>(null);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={ref}>
      <mesh>
        <cylinderGeometry args={[1, 1, 0.2, 6]} />
        <meshStandardMaterial color="#ff9902" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0, 0, 0.11]}>
        <cylinderGeometry args={[0.8, 0.8, 0.1, 6]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.5} roughness={0.5} />
      </mesh>
    </group>
  );
};

export default EthereumModel;
