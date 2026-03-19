"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, MeshWobbleMaterial } from "@react-three/drei";
import * as THREE from "three";

// ===== FLOATING GEOMETRIC SHAPES =====
function FloatingOctahedron({ position, color, speed }: {
  position: [number, number, number];
  color: string;
  speed: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.3;
    meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.5;
  });

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={1.5}>
      <mesh ref={meshRef} position={position}>
        <octahedronGeometry args={[0.6, 0]} />
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.15}
          wireframe
          distort={0.3}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

function FloatingTorus({ position, color, speed }: {
  position: [number, number, number];
  color: string;
  speed: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.4;
    meshRef.current.rotation.z = state.clock.elapsedTime * speed * 0.2;
  });

  return (
    <Float speed={speed} rotationIntensity={0.8} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <torusGeometry args={[0.5, 0.15, 16, 32]} />
        <MeshWobbleMaterial
          color={color}
          transparent
          opacity={0.12}
          wireframe
          factor={0.3}
          speed={1.5}
        />
      </mesh>
    </Float>
  );
}

function FloatingIcosahedron({ position, color, speed }: {
  position: [number, number, number];
  color: string;
  speed: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.3;
    meshRef.current.rotation.z = state.clock.elapsedTime * speed * 0.2;
  });

  return (
    <Float speed={speed} rotationIntensity={0.6} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        <icosahedronGeometry args={[0.5, 0]} />
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.1}
          wireframe
          distort={0.2}
          speed={3}
        />
      </mesh>
    </Float>
  );
}

// ===== PARTICLE FIELD =====
function ParticleField() {
  const count = 200;
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    pointsRef.current.rotation.x = state.clock.elapsedTime * 0.01;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#6c5ce7"
        size={0.02}
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
}

// ===== SCENE =====
function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={0.5} color="#6c5ce7" />
      <pointLight position={[-5, -3, 3]} intensity={0.3} color="#00cec9" />

      <FloatingOctahedron position={[-3.5, 1.5, -2]} color="#6c5ce7" speed={1.2} />
      <FloatingTorus position={[3.5, -1, -1.5]} color="#00cec9" speed={0.8} />
      <FloatingIcosahedron position={[-2, -1.5, -3]} color="#a78bfa" speed={1} />
      <FloatingOctahedron position={[2.5, 2, -2.5]} color="#fd79a8" speed={0.6} />
      <FloatingTorus position={[0, -2.5, -2]} color="#6c5ce7" speed={1.1} />
      <FloatingIcosahedron position={[4, 0.5, -3]} color="#00cec9" speed={0.9} />

      <ParticleField />
    </>
  );
}

// ===== EXPORTED COMPONENT =====
export default function HeroScene() {
  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
