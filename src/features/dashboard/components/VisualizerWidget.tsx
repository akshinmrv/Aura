"use client";

import { GlassCard } from "@/components/atomic/GlassCard";
import { Canvas } from "@react-three/fiber";
import { HolographicGlobe } from "./3d/HolographicGlobe";
import { Globe } from "lucide-react";
import { Suspense } from "react";

export function VisualizerWidget() {
    return (
        <GlassCard className="h-full flex flex-col relative overflow-hidden p-0">
            {/* Header Overlay */}
            <div className="absolute top-6 left-6 z-10 pointer-events-none">
                <div className="flex items-center gap-2 mb-1">
                    <div className="p-1.5 rounded-md bg-neon-indigo/10 text-neon-indigo">
                        <Globe size={18} />
                    </div>
                    <h3 className="text-lg font-medium text-white">Global Fleet Map</h3>
                </div>
                <div className="text-xs text-slate-400 font-mono">
                    LIVE TRACKING • {new Date().getFullYear()}
                </div>
            </div>

            {/* Legend Overlay */}
            <div className="absolute bottom-6 left-6 z-10 pointer-events-none space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <div className="w-2 h-2 rounded-full bg-neon-indigo shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
                    ACTIVE
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <div className="w-2 h-2 rounded-full bg-amber-500" />
                    RETURNING
                </div>
            </div>

            {/* 3D Canvas */}
            <div className="flex-1 w-full h-full min-h-[300px]">
                <Canvas camera={{ position: [0, 0, 5.5], fov: 45 }}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} color="#6366F1" />

                    <Suspense fallback={null}>
                        <HolographicGlobe />
                    </Suspense>
                </Canvas>
            </div>

            {/* Decorative Grid Overlay (CSS) */}
            <div className="absolute inset-0 z-0 pointer-events-none bg-[url('/grid.svg')] opacity-10" />
        </GlassCard>
    );
}
