"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// ===== CIRCULAR STAR TEXTURE (fixes square stars) =====
function createStarTexture(): THREE.Texture {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext("2d")!;
  const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  gradient.addColorStop(0, "rgba(255,255,255,1)");
  gradient.addColorStop(0.2, "rgba(255,255,255,0.8)");
  gradient.addColorStop(0.5, "rgba(255,255,255,0.15)");
  gradient.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 64, 64);
  const tex = new THREE.CanvasTexture(canvas);
  return tex;
}

// ===== GALAXY STAR FIELD =====
function StarField() {
  const count = 2000;
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, starTexture] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 25;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 2] = -Math.random() * 15 - 2;
    }
    return [pos, createStarTexture()];
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.008;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        map={starTexture}
        color="#b8c0ff"
        size={0.08}
        transparent
        opacity={0.7}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

// ===== COLORFUL NEBULA DUST =====
function NebulaDust() {
  const count = 600;
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, colors, dustTexture] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const palette = [
      new THREE.Color("#6c5ce7"),
      new THREE.Color("#00cec9"),
      new THREE.Color("#a78bfa"),
      new THREE.Color("#fd79a8"),
    ];
    for (let i = 0; i < count; i++) {
      // Spread more around edges, less in center
      const angle = Math.random() * Math.PI * 2;
      const radius = 2 + Math.random() * 8;
      pos[i * 3] = Math.cos(angle) * radius + (Math.random() - 0.5) * 3;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 5;
      pos[i * 3 + 2] = -3 - Math.random() * 8;

      const c = palette[Math.floor(Math.random() * palette.length)];
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return [pos, col, createStarTexture()];
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.012;
    pointsRef.current.rotation.z = state.clock.elapsedTime * 0.005;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        map={dustTexture}
        vertexColors
        size={0.15}
        transparent
        opacity={0.35}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

// ===== REALISTIC PLANET =====
function Planet({
  position,
  size,
  color,
  emissive,
  ringColor,
  speed,
  hasRing,
}: {
  position: [number, number, number];
  size: number;
  color: string;
  emissive: string;
  ringColor?: string;
  speed: number;
  hasRing?: boolean;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const planetRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!groupRef.current || !planetRef.current) return;
    planetRef.current.rotation.y = state.clock.elapsedTime * speed;
    // Gentle floating
    groupRef.current.position.y =
      position[1] + Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.15;
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Planet sphere */}
      <mesh ref={planetRef}>
        <sphereGeometry args={[size, 64, 64]} />
        <meshStandardMaterial
          color={color}
          emissive={emissive}
          emissiveIntensity={0.3}
          roughness={0.6}
          metalness={0.4}
        />
      </mesh>

      {/* Atmosphere glow */}
      <mesh scale={1.15}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshBasicMaterial
          color={emissive}
          transparent
          opacity={0.08}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Ring */}
      {hasRing && (
        <mesh rotation={[Math.PI * 0.35, 0.2, 0]}>
          <ringGeometry args={[size * 1.4, size * 2, 64]} />
          <meshBasicMaterial
            color={ringColor || color}
            transparent
            opacity={0.25}
            side={THREE.DoubleSide}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      )}
    </group>
  );
}

// ===== SHOOTING STAR =====
function ShootingStar({ delay, angle }: { delay: number; angle: number }) {
  const trailRef = useRef<THREE.Mesh>(null);
  const headRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!trailRef.current || !headRef.current) return;
    const t = (state.clock.elapsedTime - delay) % 10;

    if (t > 0 && t < 0.8) {
      const progress = t / 0.8;
      trailRef.current.visible = true;
      headRef.current.visible = true;

      const startX = -8 + Math.cos(angle) * 2;
      const startY = 4 + Math.sin(angle);
      const speed = 18;

      headRef.current.position.x = startX + progress * speed * Math.cos(-0.5);
      headRef.current.position.y = startY + progress * speed * Math.sin(-0.5);
      headRef.current.position.z = -3;

      trailRef.current.position.copy(headRef.current.position);

      // Fade in and out
      const fade =
        progress < 0.15
          ? progress / 0.15
          : Math.max(0, 1 - (progress - 0.15) / 0.85);

      (headRef.current.material as THREE.MeshBasicMaterial).opacity = fade;
      (trailRef.current.material as THREE.MeshBasicMaterial).opacity =
        fade * 0.5;
      trailRef.current.scale.x = 0.5 + progress * 2;
    } else {
      trailRef.current.visible = false;
      headRef.current.visible = false;
    }
  });

  return (
    <>
      {/* Bright head */}
      <mesh ref={headRef} visible={false}>
        <circleGeometry args={[0.03, 16]} />
        <meshBasicMaterial
          color="#ffffff"
          transparent
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      {/* Glowing trail */}
      <mesh
        ref={trailRef}
        visible={false}
        rotation={[0, 0, -0.5]}
      >
        <planeGeometry args={[1.5, 0.015]} />
        <meshBasicMaterial
          color="#a78bfa"
          transparent
          side={THREE.DoubleSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </>
  );
}

// ===== MOUSE PARALLAX =====
function SceneContent() {
  const groupRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();
  const mouseTarget = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    if (!groupRef.current) return;

    // Get normalized mouse position
    const { pointer } = state;
    mouseTarget.current.x = pointer.x * 0.3;
    mouseTarget.current.y = pointer.y * 0.15;

    // Smooth lerp
    groupRef.current.rotation.y +=
      (mouseTarget.current.x * 0.08 - groupRef.current.rotation.y) * 0.03;
    groupRef.current.rotation.x +=
      (-mouseTarget.current.y * 0.08 - groupRef.current.rotation.x) * 0.03;
  });

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.15} />
      <pointLight position={[5, 5, 5]} intensity={0.8} color="#6c5ce7" />
      <pointLight position={[-5, -3, 3]} intensity={0.5} color="#00cec9" />
      <pointLight position={[0, 4, -2]} intensity={0.3} color="#fd79a8" />

      <group ref={groupRef}>
        {/* Star field background */}
        <StarField />

        {/* Colorful nebula dust */}
        <NebulaDust />

        {/* Planets at corners — away from center text */}
        <Planet
          position={[-5, 2.2, -5]}
          size={0.55}
          color="#6c5ce7"
          emissive="#a78bfa"
          hasRing
          ringColor="#c4b5fd"
          speed={0.2}
        />
        <Planet
          position={[5.5, -1.5, -6]}
          size={0.4}
          color="#00cec9"
          emissive="#00b894"
          hasRing
          ringColor="#81ecec"
          speed={0.3}
        />
        <Planet
          position={[4.5, 3, -7]}
          size={0.25}
          color="#fd79a8"
          emissive="#e84393"
          speed={0.4}
        />
        <Planet
          position={[-4, -2.5, -6]}
          size={0.2}
          color="#fdcb6e"
          emissive="#ffeaa7"
          speed={0.35}
        />

        {/* Shooting stars */}
        <ShootingStar delay={0} angle={0.3} />
        <ShootingStar delay={3.5} angle={-0.2} />
        <ShootingStar delay={7} angle={0.1} />
      </group>
    </>
  );
}

// ===== EXPORTED COMPONENT =====
export default function HeroScene() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{ background: "transparent", pointerEvents: "auto" }}
      >
        <SceneContent />
      </Canvas>
    </div>
  );
}
