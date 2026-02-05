"use client";

import { GlassCard } from "@/components/atomic/GlassCard";
import { STATS_DATA } from "@/lib/mockData";
import { cn } from "@/lib/cn";
import { ArrowUpRight, ArrowDownRight, Minus } from "lucide-react";

export function StatGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS_DATA.map((stat) => {
                const Icon = stat.icon;

                // Dynamic color styles
                const colorStyles = {
                    indigo: "text-neon-indigo bg-neon-indigo/10",
                    emerald: "text-emerald-400 bg-emerald-500/10",
                    amber: "text-amber-400 bg-amber-500/10",
                    rose: "text-rose-400 bg-rose-500/10",
                };

                const activeColorClass = colorStyles[stat.color] || colorStyles.indigo;

                // Trend logic
                const isUp = stat.trendDirection === "up";
                const isDown = stat.trendDirection === "down";
                const TrendIcon = isUp ? ArrowUpRight : isDown ? ArrowDownRight : Minus;
                const trendColor = isUp ? "text-emerald-400" : isDown ? "text-rose-400" : "text-slate-400";

                return (
                    <GlassCard key={stat.id} className="flex flex-col justify-between group">
                        <div className="flex items-start justify-between mb-4">
                            <div className={cn("p-3 rounded-lg transition-colors duration-300", activeColorClass)}>
                                <Icon size={24} />
                            </div>
                            <div className={cn("flex items-center gap-1 text-xs font-mono px-2 py-1 rounded bg-white/5", trendColor)}>
                                <TrendIcon size={14} />
                                <span>{stat.trend}</span>
                            </div>
                        </div>

                        <div>
                            <div className="text-slate-400 text-sm mb-1">{stat.label}</div>
                            <div className="text-2xl font-bold text-white tracking-tight group-hover:text-glow transition-all">
                                {stat.value}
                            </div>
                        </div>
                    </GlassCard>
                );
            })}
        </div>
    );
}
