"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import * as THREE from "three";
import { DRONE_LOCATIONS, DroneLocation } from "@/lib/mockData";
import { latLonToVector3 } from "@/lib/math";

const GLOBE_RADIUS = 2;

function DroneMarker({ location }: { location: DroneLocation }) {
    const position = useMemo(() => {
        return latLonToVector3(location.lat, location.lng, GLOBE_RADIUS);
    }, [location]);

    // Color based on status
    const color =
        location.status === "active" ? "#6366F1" : // Neon Indigo
            location.status === "returning" ? "#F59E0B" : // Amber
                "#EF4444"; // Rose/Red for Maintenance

    return (
        <group position={position}>
            <mesh>
                <sphereGeometry args={[0.04, 8, 8]} />
                <meshBasicMaterial color={color} toneMapped={false} />
            </mesh>
            {/* Outer Glow Ring */}
            <mesh>
                <ringGeometry args={[0.06, 0.07, 16]} />
                <meshBasicMaterial color={color} transparent opacity={0.5} side={THREE.DoubleSide} />
            </mesh>
            {/* Label on Hover could go here, keeping it simple for now */}
        </group>
    );
}

export function HolographicGlobe() {
    const globeRef = useRef<THREE.Group>(null);

    useFrame((state, delta) => {
        // Slow rotation for "alive" feel
        if (globeRef.current) {
            globeRef.current.rotation.y += delta * 0.05;
        }
    });

    return (
        <group>
            <group ref={globeRef}>
                {/* Base Wireframe Sphere */}
                <Sphere args={[GLOBE_RADIUS, 24, 24]}>
                    <meshBasicMaterial
                        color="#312e81" // Dark Indigo
                        wireframe
                        transparent
                        opacity={0.15}
                    />
                </Sphere>

                {/* Inner Core (Solid darkness to block background stars acting as see-through) */}
                <Sphere args={[GLOBE_RADIUS - 0.05, 24, 24]}>
                    <meshBasicMaterial color="#05050A" />
                </Sphere>

                {/* Drone Markers which are children of the rotating globe */}
                {DRONE_LOCATIONS.map((drone) => (
                    <DroneMarker key={drone.id} location={drone} />
                ))}
            </group>

            <OrbitControls
                enablePan={false}
                enableZoom={false}
                minPolarAngle={Math.PI / 4}
                maxPolarAngle={Math.PI / 1.5}
            />
        </group>
    );
}
