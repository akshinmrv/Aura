"use client";

import { AppShell } from "@/components/layout/AppShell";
import { GlassCard } from "@/components/atomic/GlassCard";
import { GlowButton } from "@/components/atomic/GlowButton";
import { StatGrid } from "@/features/dashboard/components/StatGrid";
import { ActivityFeed } from "@/features/dashboard/components/ActivityFeed";
import { VisualizerWidget } from "@/features/dashboard/components/VisualizerWidget";
import { Copy, RefreshCw } from "lucide-react";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export default function Home() {
  return (
    <AppShell>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="space-y-6 max-w-7xl mx-auto"
      >
        <motion.div variants={fadeInUp} className="flex flex-col md:flex-row items-end justify-between gap-4">
          <div>
            <h2 className="text-4xl font-light tracking-tight text-white mb-2">
              Command <span className="text-neon-indigo font-bold">Center</span>
            </h2>
            <p className="text-slate-400">
              Orbital Monitoring Station • Sector 7-G
            </p>
          </div>
          <div className="flex items-center gap-3">
            <GlowButton variant="ghost" className="text-xs py-2 px-4">
              <RefreshCw size={14} className="mr-2" />
              Sync Data
            </GlowButton>
            <GlowButton className="py-2 px-6">
              + Deploy Unit
            </GlowButton>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div variants={fadeInUp}>
          <StatGrid />
        </motion.div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[500px]">
          {/* Center Stage / Map Placeholder */}
          <motion.div variants={fadeInUp} className="lg:col-span-2 h-full">
            <VisualizerWidget />
          </motion.div>

          {/* Activity Feed */}
          <motion.div variants={fadeInUp} className="h-full">
            <ActivityFeed />
          </motion.div>
        </div>

        {/* Footer / Status Bar */}
        <motion.div variants={fadeInUp}>
          <GlassCard className="py-3 px-6 flex items-center justify-between">
            <div className="flex items-center gap-4 text-xs font-mono text-slate-500">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                SERVER: ONLINE
              </span>
              <span className="hidden md:inline">LATENCY: 12ms</span>
            </div>
            <div className="text-xs font-mono text-slate-600 flex items-center gap-2">
              ID: AURA-8821-X
              <Copy size={12} className="cursor-pointer hover:text-white" />
            </div>
          </GlassCard>
        </motion.div>
      </motion.div>
    </AppShell>
  );
}
