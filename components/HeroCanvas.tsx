"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshWobbleMaterial } from "@react-three/drei";
import * as THREE from "three";

function InteractivePolyhedron() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((_, delta) => {
    if (meshRef.current) {
      const speed = hovered ? 0.8 : 0.3;
      meshRef.current.rotation.x += delta * speed;
      meshRef.current.rotation.y += delta * (speed * 1.2);
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.15 : 1}
      >
        <icosahedronGeometry args={[1.8, 1]} />
        <MeshWobbleMaterial
          wireframe
          color={hovered ? "#22d3ee" : "#818cf8"}
          factor={0.4}
          speed={hovered ? 3 : 1.5}
        />
      </mesh>
    </Float>
  );
}

export default function HeroCanvas() {
  return (
    <div className="w-full h-64 md:h-80 cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00f0ff" />
        <InteractivePolyhedron />
      </Canvas>
    </div>
  );
}