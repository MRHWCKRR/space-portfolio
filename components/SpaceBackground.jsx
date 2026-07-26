"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

function MovingStars() {
  const starsRef = useRef(null);

  // Delta-based rotation ensures smooth animation regardless of screen refresh rate (60Hz, 120Hz, etc.)
  useFrame((_, delta) => {
    if (starsRef.current) {
      starsRef.current.rotation.x -= delta * 0.015;
      starsRef.current.rotation.y -= delta * 0.025;
    }
  });

  return (
    <group ref={starsRef}>
      <Stars
        radius={100}
        depth={50}
        count={3500} // Balanced density without overloading lower-end GPUs
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
    </group>
  );
}

export default function SpaceBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas
        dpr={[1, 1.5]} // Caps pixel ratio to prevent lag on 4K & Retina screens
        gl={{ antialias: false, powerPreference: "high-performance" }}
        camera={{ position: [0, 0, 1] }}
        events={() => ({})} // Completely disables R3F raycasting listeners
      >
        <MovingStars />
      </Canvas>
    </div>
  );
}