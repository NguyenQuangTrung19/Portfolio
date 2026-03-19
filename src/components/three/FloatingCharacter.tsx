"use client";

import { useState, useEffect, useRef, Suspense } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function CharacterModel() {
  const { scene } = useGLTF("/models/NguyenQuangTrung.glb");
  const ref = useRef<THREE.Group>(null);

  // Subtle rotation only, no floating
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <group ref={ref}>
      <primitive
        object={scene}
        scale={1.6}
        position={[0, -1.5, 0]}
        rotation={[0, 0.3, 0]}
      />
    </group>
  );
}

export default function FloatingCharacter() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed left-0 bottom-16 z-40 pointer-events-auto hidden md:block"
    >
      <div className="w-[200px] h-[350px]">
        <Canvas
          camera={{ position: [0, -0.3, 3.5], fov: 45 }}
          gl={{ alpha: true, antialias: true }}
          style={{ background: "transparent" }}
        >
          <ambientLight intensity={0.6} />
          <directionalLight position={[2, 3, 1]} intensity={1.2} />
          <directionalLight position={[-2, 1, -1]} intensity={0.4} color="#6c5ce7" />
          <pointLight position={[0, 2, 2]} intensity={0.8} color="#00e5df" />
          <Suspense fallback={null}>
            <CharacterModel />
          </Suspense>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={1}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.8}
          />
        </Canvas>
      </div>
    </motion.div>
  );
}

// Preload the model
useGLTF.preload("/models/NguyenQuangTrung.glb");
