"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

// ===== ROBOT HEAD =====
function RobotHead({ scrollProgress }: { scrollProgress: number }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (!groupRef.current) return;
    // Subtle head tilt based on scroll
    groupRef.current.rotation.z = Math.sin(scrollProgress * Math.PI) * 0.15;
  });

  return (
    <group ref={groupRef} position={[0, 0.85, 0]}>
      {/* Main head - rounded cube */}
      <RoundedBox args={[0.7, 0.55, 0.55]} radius={0.1} smoothness={4}>
        <meshStandardMaterial
          color="#1a1a2e"
          metalness={0.8}
          roughness={0.2}
        />
      </RoundedBox>

      {/* Visor / Screen face */}
      <RoundedBox
        args={[0.55, 0.3, 0.05]}
        radius={0.06}
        smoothness={4}
        position={[0, 0.02, 0.27]}
      >
        <meshStandardMaterial
          color="#6c5ce7"
          emissive="#6c5ce7"
          emissiveIntensity={0.6}
          metalness={0.3}
          roughness={0.1}
        />
      </RoundedBox>

      {/* Left eye */}
      <mesh position={[-0.12, 0.04, 0.3]}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial
          color="#00cec9"
          emissive="#00cec9"
          emissiveIntensity={1}
        />
      </mesh>

      {/* Right eye */}
      <mesh position={[0.12, 0.04, 0.3]}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial
          color="#00cec9"
          emissive="#00cec9"
          emissiveIntensity={1}
        />
      </mesh>

      {/* Antenna */}
      <mesh position={[0, 0.35, 0]}>
        <cylinderGeometry args={[0.015, 0.015, 0.15, 8]} />
        <meshStandardMaterial color="#444" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0, 0.44, 0]}>
        <sphereGeometry args={[0.04, 16, 16]} />
        <meshStandardMaterial
          color="#fd79a8"
          emissive="#fd79a8"
          emissiveIntensity={0.8}
        />
      </mesh>
    </group>
  );
}

// ===== ROBOT BODY =====
function RobotBody() {
  return (
    <group position={[0, 0, 0]}>
      {/* Main torso */}
      <RoundedBox args={[0.6, 0.7, 0.45]} radius={0.08} smoothness={4}>
        <meshStandardMaterial
          color="#16213e"
          metalness={0.7}
          roughness={0.3}
        />
      </RoundedBox>

      {/* Chest light / Arc reactor */}
      <mesh position={[0, 0.1, 0.23]}>
        <circleGeometry args={[0.08, 32]} />
        <meshStandardMaterial
          color="#6c5ce7"
          emissive="#6c5ce7"
          emissiveIntensity={1.2}
        />
      </mesh>

      {/* Chest detail lines */}
      <RoundedBox
        args={[0.4, 0.03, 0.02]}
        radius={0.01}
        smoothness={2}
        position={[0, -0.1, 0.23]}
      >
        <meshStandardMaterial
          color="#00cec9"
          emissive="#00cec9"
          emissiveIntensity={0.4}
        />
      </RoundedBox>
      <RoundedBox
        args={[0.3, 0.03, 0.02]}
        radius={0.01}
        smoothness={2}
        position={[0, -0.18, 0.23]}
      >
        <meshStandardMaterial
          color="#00cec9"
          emissive="#00cec9"
          emissiveIntensity={0.3}
        />
      </RoundedBox>
    </group>
  );
}

// ===== ROBOT ARMS =====
function RobotArms({ scrollProgress }: { scrollProgress: number }) {
  const leftArmRef = useRef<THREE.Group>(null);
  const rightArmRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (leftArmRef.current) {
      leftArmRef.current.rotation.x =
        Math.sin(t * 1.5) * 0.15 + scrollProgress * 0.3;
      leftArmRef.current.rotation.z = 0.2 + Math.sin(t * 1.2) * 0.05;
    }
    if (rightArmRef.current) {
      rightArmRef.current.rotation.x =
        Math.sin(t * 1.5 + Math.PI) * 0.15 - scrollProgress * 0.2;
      rightArmRef.current.rotation.z = -0.2 + Math.sin(t * 1.2 + Math.PI) * 0.05;
    }
  });

  return (
    <>
      {/* Left arm */}
      <group ref={leftArmRef} position={[-0.42, 0.15, 0]}>
        <RoundedBox args={[0.15, 0.45, 0.15]} radius={0.05} smoothness={3} position={[0, -0.2, 0]}>
          <meshStandardMaterial color="#1a1a2e" metalness={0.7} roughness={0.3} />
        </RoundedBox>
        {/* Hand */}
        <mesh position={[0, -0.48, 0]}>
          <sphereGeometry args={[0.09, 16, 16]} />
          <meshStandardMaterial color="#6c5ce7" metalness={0.5} roughness={0.2} />
        </mesh>
      </group>

      {/* Right arm — waving */}
      <group ref={rightArmRef} position={[0.42, 0.15, 0]}>
        <RoundedBox args={[0.15, 0.45, 0.15]} radius={0.05} smoothness={3} position={[0, -0.2, 0]}>
          <meshStandardMaterial color="#1a1a2e" metalness={0.7} roughness={0.3} />
        </RoundedBox>
        <mesh position={[0, -0.48, 0]}>
          <sphereGeometry args={[0.09, 16, 16]} />
          <meshStandardMaterial color="#00cec9" metalness={0.5} roughness={0.2} />
        </mesh>
      </group>
    </>
  );
}

// ===== ROBOT LEGS =====
function RobotLegs() {
  return (
    <>
      {/* Left leg */}
      <group position={[-0.15, -0.55, 0]}>
        <RoundedBox args={[0.15, 0.35, 0.15]} radius={0.05} smoothness={3} position={[0, -0.15, 0]}>
          <meshStandardMaterial color="#1a1a2e" metalness={0.7} roughness={0.3} />
        </RoundedBox>
        <RoundedBox args={[0.18, 0.08, 0.22]} radius={0.03} smoothness={3} position={[0, -0.36, 0.03]}>
          <meshStandardMaterial color="#16213e" metalness={0.8} roughness={0.2} />
        </RoundedBox>
      </group>

      {/* Right leg */}
      <group position={[0.15, -0.55, 0]}>
        <RoundedBox args={[0.15, 0.35, 0.15]} radius={0.05} smoothness={3} position={[0, -0.15, 0]}>
          <meshStandardMaterial color="#1a1a2e" metalness={0.7} roughness={0.3} />
        </RoundedBox>
        <RoundedBox args={[0.18, 0.08, 0.22]} radius={0.03} smoothness={3} position={[0, -0.36, 0.03]}>
          <meshStandardMaterial color="#16213e" metalness={0.8} roughness={0.2} />
        </RoundedBox>
      </group>
    </>
  );
}

// ===== GLOW RING =====
function GlowRing({ scrollProgress }: { scrollProgress: number }) {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ringRef.current) return;
    ringRef.current.rotation.x = Math.PI * 0.5;
    ringRef.current.rotation.z = state.clock.elapsedTime * 0.5 + scrollProgress * Math.PI * 2;
  });

  return (
    <mesh ref={ringRef} position={[0, 0, 0]}>
      <torusGeometry args={[1.1, 0.01, 16, 64]} />
      <meshStandardMaterial
        color="#6c5ce7"
        emissive="#6c5ce7"
        emissiveIntensity={0.8}
        transparent
        opacity={0.4}
      />
    </mesh>
  );
}

// ===== MINI PARTICLES AROUND ROBOT =====
function MiniParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 60;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const radius = 1.2 + Math.random() * 0.8;
      pos[i * 3] = Math.cos(angle) * radius;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 2;
      pos[i * 3 + 2] = Math.sin(angle) * radius;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.15;
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
        color="#00cec9"
        size={0.03}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

// ===== FULL ROBOT SCENE =====
function RobotScene({ scrollProgress }: { scrollProgress: number }) {
  const robotRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!robotRef.current) return;
    const t = state.clock.elapsedTime;

    // Scroll-linked Y rotation (main effect)
    robotRef.current.rotation.y = scrollProgress * Math.PI * 2;

    // Gentle floating bob
    robotRef.current.position.y = Math.sin(t * 0.8) * 0.08;

    // Slight tilt based on scroll direction
    robotRef.current.rotation.x = Math.sin(scrollProgress * Math.PI * 4) * 0.08;
  });

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[3, 3, 3]} intensity={0.8} color="#6c5ce7" />
      <pointLight position={[-3, -2, 2]} intensity={0.5} color="#00cec9" />
      <pointLight position={[0, 3, -2]} intensity={0.3} color="#fd79a8" />

      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
        <group ref={robotRef} scale={1.1}>
          <RobotHead scrollProgress={scrollProgress} />
          <RobotBody />
          <RobotArms scrollProgress={scrollProgress} />
          <RobotLegs />
          <GlowRing scrollProgress={scrollProgress} />
          <MiniParticles />
        </group>
      </Float>
    </>
  );
}

// ===== EXPORTED COMPONENT =====
export default function RobotCharacter({
  scrollProgress,
}: {
  scrollProgress: number;
}) {
  return (
    <Canvas
      camera={{ position: [0, 0.3, 3.5], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
      style={{ background: "transparent" }}
    >
      <RobotScene scrollProgress={scrollProgress} />
    </Canvas>
  );
}
