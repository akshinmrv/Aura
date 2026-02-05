"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, MeshDistortMaterial, Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function NeuralCore() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.2;
            meshRef.current.rotation.y += delta * 0.3;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <mesh ref={meshRef} scale={2}>
                <icosahedronGeometry args={[1, 1]} />
                {/* Wireframe inner core */}
                <meshBasicMaterial color="#6366F1" wireframe transparent opacity={0.3} />
            </mesh>
            <mesh scale={2.05}>
                <icosahedronGeometry args={[1, 0]} />
                <MeshDistortMaterial
                    color="#4338ca"
                    emissive="#1e1b4b"
                    roughness={0.1}
                    metalness={1}
                    distort={0.4}
                    speed={2}
                    transparent
                    opacity={0.1}
                />
            </mesh>
        </Float>
    );
}

export default function Scene() {
    return (
        <div className="absolute inset-0 w-full h-full">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#6366F1" />
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

                <NeuralCore />

                {/* Optional: Fog for depth */}
                <fog attach="fog" args={["#05050A", 5, 20]} />
            </Canvas>
        </div>
    );
}
