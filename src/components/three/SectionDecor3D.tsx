"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, MeshWobbleMaterial, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

// ===== ABOUT: Floating Code Brackets =====
function CodeBrackets() {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={1.5}>
      <group ref={groupRef}>
        {/* Left bracket < */}
        <group position={[-0.5, 0, 0]}>
          <RoundedBox args={[0.08, 0.6, 0.08]} radius={0.02} position={[0, 0, 0]} rotation={[0, 0, 0.3]}>
            <meshStandardMaterial color="#6c5ce7" emissive="#6c5ce7" emissiveIntensity={0.5} metalness={0.8} roughness={0.2} />
          </RoundedBox>
          <RoundedBox args={[0.08, 0.6, 0.08]} radius={0.02} position={[0, 0, 0]} rotation={[0, 0, -0.3]}>
            <meshStandardMaterial color="#6c5ce7" emissive="#6c5ce7" emissiveIntensity={0.5} metalness={0.8} roughness={0.2} />
          </RoundedBox>
        </group>
        {/* Slash / */}
        <RoundedBox args={[0.06, 0.8, 0.06]} radius={0.02} position={[0, 0, 0]} rotation={[0, 0, 0.4]}>
          <meshStandardMaterial color="#00cec9" emissive="#00cec9" emissiveIntensity={0.4} metalness={0.7} roughness={0.3} />
        </RoundedBox>
        {/* Right bracket > */}
        <group position={[0.5, 0, 0]}>
          <RoundedBox args={[0.08, 0.6, 0.08]} radius={0.02} position={[0, 0, 0]} rotation={[0, 0, -0.3]}>
            <meshStandardMaterial color="#6c5ce7" emissive="#6c5ce7" emissiveIntensity={0.5} metalness={0.8} roughness={0.2} />
          </RoundedBox>
          <RoundedBox args={[0.08, 0.6, 0.08]} radius={0.02} position={[0, 0, 0]} rotation={[0, 0, 0.3]}>
            <meshStandardMaterial color="#6c5ce7" emissive="#6c5ce7" emissiveIntensity={0.5} metalness={0.8} roughness={0.2} />
          </RoundedBox>
        </group>
      </group>
    </Float>
  );
}

// ===== PROJECTS: Floating Cube Matrix =====
function CubeMatrix() {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.25;
    groupRef.current.rotation.x = state.clock.elapsedTime * 0.15;
  });

  const cubes = useMemo(() => {
    const items: { pos: [number, number, number]; scale: number; color: string }[] = [];
    const colors = ["#6c5ce7", "#00cec9", "#a78bfa", "#fd79a8"];
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        if (Math.random() > 0.4) {
          items.push({
            pos: [x * 0.35, y * 0.35, (Math.random() - 0.5) * 0.3],
            scale: 0.12 + Math.random() * 0.08,
            color: colors[Math.floor(Math.random() * colors.length)],
          });
        }
      }
    }
    return items;
  }, []);

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={groupRef}>
        {cubes.map((cube, i) => (
          <RoundedBox key={i} args={[cube.scale, cube.scale, cube.scale]} radius={0.02} position={cube.pos}>
            <meshStandardMaterial
              color={cube.color}
              emissive={cube.color}
              emissiveIntensity={0.3}
              transparent
              opacity={0.6}
              metalness={0.8}
              roughness={0.1}
            />
          </RoundedBox>
        ))}
      </group>
    </Float>
  );
}

// ===== EXPERIENCE: Floating Graduation Cap =====
function GradCap() {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.35;
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.05;
  });

  return (
    <Float speed={1.8} rotationIntensity={0.4} floatIntensity={1.2}>
      <group ref={groupRef}>
        {/* Cap top — flat diamond shape */}
        <mesh position={[0, 0.15, 0]} rotation={[0.15, 0, 0]}>
          <boxGeometry args={[0.9, 0.04, 0.9]} />
          <meshStandardMaterial color="#1a1a2e" metalness={0.9} roughness={0.1} />
        </mesh>
        {/* Cap body */}
        <mesh position={[0, -0.05, 0]}>
          <cylinderGeometry args={[0.25, 0.35, 0.25, 6]} />
          <meshStandardMaterial color="#16213e" metalness={0.7} roughness={0.3} />
        </mesh>
        {/* Tassel */}
        <mesh position={[0.4, 0.15, 0]}>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshStandardMaterial color="#fd79a8" emissive="#fd79a8" emissiveIntensity={0.6} />
        </mesh>
        <mesh position={[0.4, 0, 0]}>
          <cylinderGeometry args={[0.01, 0.01, 0.3, 8]} />
          <meshStandardMaterial color="#fd79a8" emissive="#fd79a8" emissiveIntensity={0.3} />
        </mesh>
        {/* Glow ring around cap */}
        <mesh position={[0, 0.15, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.55, 0.008, 16, 64]} />
          <meshStandardMaterial color="#6c5ce7" emissive="#6c5ce7" emissiveIntensity={0.8} transparent opacity={0.5} />
        </mesh>
      </group>
    </Float>
  );
}

// ===== CONTACT: Floating Connection Nodes =====
function ConnectionNodes() {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.4) * 0.1;
  });

  const nodes = useMemo(() => [
    { pos: [0, 0.4, 0] as [number, number, number], color: "#6c5ce7" },
    { pos: [0.35, -0.2, 0.1] as [number, number, number], color: "#00cec9" },
    { pos: [-0.35, -0.2, -0.1] as [number, number, number], color: "#a78bfa" },
    { pos: [0.15, 0.1, 0.3] as [number, number, number], color: "#fd79a8" },
    { pos: [-0.2, 0.25, -0.2] as [number, number, number], color: "#00cec9" },
  ], []);

  // Connection lines between nodes
  const lines = useMemo(() => {
    const result: { start: [number, number, number]; end: [number, number, number] }[] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (Math.random() > 0.3) {
          result.push({ start: nodes[i].pos, end: nodes[j].pos });
        }
      }
    }
    return result;
  }, [nodes]);

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={1}>
      <group ref={groupRef}>
        {/* Nodes */}
        {nodes.map((node, i) => (
          <mesh key={i} position={node.pos}>
            <sphereGeometry args={[0.06, 16, 16]} />
            <meshStandardMaterial
              color={node.color}
              emissive={node.color}
              emissiveIntensity={0.8}
            />
          </mesh>
        ))}
        {/* Lines */}
        {lines.map((line, i) => {
          const start = new THREE.Vector3(...line.start);
          const end = new THREE.Vector3(...line.end);
          const mid = start.clone().add(end).multiplyScalar(0.5);
          const length = start.distanceTo(end);
          const dir = end.clone().sub(start).normalize();
          const quat = new THREE.Quaternion().setFromUnitVectors(
            new THREE.Vector3(0, 1, 0),
            dir
          );
          return (
            <mesh key={`line-${i}`} position={mid} quaternion={quat}>
              <cylinderGeometry args={[0.005, 0.005, length, 4]} />
              <meshStandardMaterial
                color="#6c5ce7"
                emissive="#6c5ce7"
                emissiveIntensity={0.3}
                transparent
                opacity={0.4}
              />
            </mesh>
          );
        })}
        {/* Central glow */}
        <mesh position={[0, 0.05, 0]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <MeshDistortMaterial
            color="#6c5ce7"
            emissive="#6c5ce7"
            emissiveIntensity={0.2}
            transparent
            opacity={0.1}
            distort={0.4}
            speed={3}
          />
        </mesh>
      </group>
    </Float>
  );
}

// ===== MINI PARTICLES (shared by all sections) =====
function SectionParticles({ color = "#6c5ce7", count = 30 }: { color?: string; count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 4;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 3;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 3;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.08;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color={color} size={0.015} transparent opacity={0.5} sizeAttenuation />
    </points>
  );
}

// ===== CANVAS WRAPPER =====
function SceneCanvas({ children }: { children: React.ReactNode }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 3], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[3, 3, 3]} intensity={0.5} color="#6c5ce7" />
      <pointLight position={[-3, -2, 2]} intensity={0.3} color="#00cec9" />
      {children}
    </Canvas>
  );
}

// ===== EXPORTED SECTION DECORATIONS =====
export function AboutDecor3D() {
  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[200px] h-[200px] pointer-events-none opacity-60 hidden lg:block">
      <SceneCanvas>
        <CodeBrackets />
        <SectionParticles color="#6c5ce7" count={20} />
      </SceneCanvas>
    </div>
  );
}

export function ProjectsDecor3D() {
  return (
    <div className="absolute left-0 top-20 w-[180px] h-[180px] pointer-events-none opacity-50 hidden lg:block">
      <SceneCanvas>
        <CubeMatrix />
        <SectionParticles color="#00cec9" count={25} />
      </SceneCanvas>
    </div>
  );
}

export function ExperienceDecor3D() {
  return (
    <div className="absolute right-4 top-24 w-[180px] h-[180px] pointer-events-none opacity-50 hidden lg:block">
      <SceneCanvas>
        <GradCap />
        <SectionParticles color="#fd79a8" count={20} />
      </SceneCanvas>
    </div>
  );
}

export function ContactDecor3D() {
  return (
    <div className="absolute left-4 bottom-20 w-[200px] h-[200px] pointer-events-none opacity-50 hidden lg:block">
      <SceneCanvas>
        <ConnectionNodes />
        <SectionParticles color="#a78bfa" count={25} />
      </SceneCanvas>
    </div>
  );
}
