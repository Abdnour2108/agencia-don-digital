"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

/* ── Central AI Voice Sphere ── */
function VoiceCore() {
  const sphereRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const w1 = useRef<THREE.Mesh>(null);
  const w2 = useRef<THREE.Mesh>(null);
  const w3 = useRef<THREE.Mesh>(null);
  const w4 = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (sphereRef.current) {
      sphereRef.current.rotation.y = t * 0.22;
      sphereRef.current.rotation.z = Math.sin(t * 0.15) * 0.08;
    }
    if (glowRef.current) {
      const p = (Math.sin(t * 1.6) + 1) / 2;
      (glowRef.current.material as THREE.MeshStandardMaterial).opacity =
        0.06 + p * 0.07;
    }
    // Phase-offset pulse rings — emulates expanding audio waves
    const waves = [w1, w2, w3, w4];
    const phaseOffsets = [0, 0.62, 1.24, 1.86];
    const maxOpacities = [0.7, 0.52, 0.36, 0.2];
    waves.forEach((ref, i) => {
      if (!ref.current) return;
      const pulse = (Math.sin(t * 1.5 - phaseOffsets[i]) + 1) / 2;
      (ref.current.material as THREE.MeshStandardMaterial).opacity =
        pulse * maxOpacities[i];
    });
  });

  return (
    <Float speed={0.65} rotationIntensity={0.06} floatIntensity={0.42}>
      <group>
        {/* Main metallic sphere */}
        <mesh ref={sphereRef}>
          <sphereGeometry args={[0.62, 64, 64]} />
          <meshStandardMaterial
            color="#0A5CFF"
            metalness={0.92}
            roughness={0.06}
            emissive="#0037CC"
            emissiveIntensity={0.5}
          />
        </mesh>
        {/* Outer glow shell */}
        <mesh ref={glowRef}>
          <sphereGeometry args={[0.78, 32, 32]} />
          <meshStandardMaterial
            color="#27B3FF"
            emissive="#27B3FF"
            emissiveIntensity={1.2}
            transparent
            opacity={0.09}
            depthWrite={false}
            side={THREE.BackSide}
          />
        </mesh>
        {/* Audio wave ring 1 — innermost */}
        <mesh ref={w1} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.0, 0.016, 16, 128]} />
          <meshStandardMaterial
            color="#27B3FF"
            emissive="#27B3FF"
            emissiveIntensity={2.2}
            transparent
            opacity={0.7}
            depthWrite={false}
          />
        </mesh>
        {/* Audio wave ring 2 */}
        <mesh ref={w2} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.48, 0.012, 16, 128]} />
          <meshStandardMaterial
            color="#27B3FF"
            emissive="#27B3FF"
            emissiveIntensity={1.6}
            transparent
            opacity={0.52}
            depthWrite={false}
          />
        </mesh>
        {/* Audio wave ring 3 */}
        <mesh ref={w3} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[2.0, 0.008, 16, 128]} />
          <meshStandardMaterial
            color="#0A5CFF"
            emissive="#27B3FF"
            emissiveIntensity={1.1}
            transparent
            opacity={0.36}
            depthWrite={false}
          />
        </mesh>
        {/* Audio wave ring 4 — outermost */}
        <mesh ref={w4} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[2.58, 0.005, 16, 128]} />
          <meshStandardMaterial
            color="#27B3FF"
            emissive="#27B3FF"
            emissiveIntensity={0.8}
            transparent
            opacity={0.2}
            depthWrite={false}
          />
        </mesh>
      </group>
    </Float>
  );
}

/* ── Two orbiting rings ── */
function OrbitRings() {
  const r1 = useRef<THREE.Mesh>(null);
  const r2 = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (r1.current) {
      r1.current.rotation.x = t * 0.18;
      r1.current.rotation.y = t * 0.11;
    }
    if (r2.current) {
      r2.current.rotation.x = t * 0.13 + 1.2;
      r2.current.rotation.z = t * 0.09;
    }
  });

  return (
    <>
      <mesh ref={r1}>
        <torusGeometry args={[1.85, 0.013, 16, 140]} />
        <meshStandardMaterial
          color="#0A5CFF"
          emissive="#27B3FF"
          emissiveIntensity={1.4}
          transparent
          opacity={0.55}
          depthWrite={false}
        />
      </mesh>
      <mesh ref={r2} rotation={[Math.PI / 3, 0.4, Math.PI / 5]}>
        <torusGeometry args={[2.5, 0.008, 16, 140]} />
        <meshStandardMaterial
          color="#27B3FF"
          emissive="#27B3FF"
          emissiveIntensity={0.9}
          transparent
          opacity={0.3}
          depthWrite={false}
        />
      </mesh>
    </>
  );
}

/* ── Orbiting point light for dynamic highlights ── */
function OrbitLight() {
  const light = useRef<THREE.PointLight>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (!light.current) return;
    light.current.position.x = Math.cos(t * 0.45) * 3.2;
    light.current.position.y = Math.sin(t * 0.3) * 2.2;
    light.current.position.z = Math.sin(t * 0.45) * 1.8 + 2;
  });

  return <pointLight ref={light} color="#27B3FF" intensity={1.8} decay={2} />;
}

/* ── Small drifting particles ── */
function Particles({ count = 160 }: { count?: number }) {
  const pts = useRef<THREE.Points>(null);

  const { positions, speeds } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const spd = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 5 - 1;
      spd[i] = 0.003 + Math.random() * 0.004;
    }
    return { positions: pos, speeds: spd };
  }, [count]);

  useFrame(({ clock }) => {
    if (!pts.current) return;
    const t = clock.getElapsedTime();
    const arr = pts.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 1] += speeds[i];
      if (arr[i * 3 + 1] > 5) arr[i * 3 + 1] = -5;
      arr[i * 3] += Math.sin(t * 0.25 + i * 0.4) * 0.0008;
    }
    pts.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pts}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.022}
        color="#27B3FF"
        transparent
        opacity={0.45}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

/* ── Large glowing halo spots ── */
function GlowSpots() {
  const pts = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(9 * 3);
    const spots = [
      [-3.2, 2.1, -1.5], [2.8, 1.6, -2], [-2.4, -1.8, -1],
      [3.1, -2.2, -1.8], [-1.2, 3.0, -2.2], [1.8, -3.0, -1.5],
      [-3.8, 0.2, -2], [0.4, 2.8, -1.8], [2.5, 0.8, -2.5],
    ];
    spots.forEach(([x, y, z], i) => {
      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;
    });
    return pos;
  }, []);

  useFrame(({ clock }) => {
    if (!pts.current) return;
    const t = clock.getElapsedTime();
    const arr = pts.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < 9; i++) {
      arr[i * 3] += Math.sin(t * 0.12 + i * 0.9) * 0.0015;
      arr[i * 3 + 1] += Math.cos(t * 0.1 + i * 0.7) * 0.0015;
    }
    pts.current.geometry.attributes.position.needsUpdate = true;
    const mat = pts.current.material as THREE.PointsMaterial;
    mat.opacity = 0.28 + Math.sin(t * 0.7) * 0.12;
  });

  return (
    <points ref={pts}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.13}
        color="#27B3FF"
        transparent
        opacity={0.35}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

/* ── Mouse parallax camera ── */
function CameraRig({
  mouse,
}: {
  mouse: React.RefObject<{ x: number; y: number }>;
}) {
  const { camera } = useThree();
  useFrame(() => {
    if (!mouse.current) return;
    camera.position.x += (mouse.current.x * 0.55 - camera.position.x) * 0.035;
    camera.position.y += (mouse.current.y * 0.35 - camera.position.y) * 0.035;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

/* ── Canvas ── */
export default function DScene({
  mouse,
}: {
  mouse: React.RefObject<{ x: number; y: number }>;
}) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.2], fov: 44 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
      style={{ background: "transparent", width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.4} color="#a8c8ff" />
      <directionalLight position={[4, 5, 5]} intensity={2.2} color="#ffffff" />
      <directionalLight
        position={[-5, -2, -4]}
        intensity={0.7}
        color="#0037CC"
      />
      <pointLight position={[0, 2, 3]} intensity={1.0} color="#27B3FF" decay={2} />
      <OrbitLight />
      <GlowSpots />
      <Particles />
      <OrbitRings />
      <VoiceCore />
      <CameraRig mouse={mouse} />
    </Canvas>
  );
}
