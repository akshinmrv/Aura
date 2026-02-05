"use client";

import { GlassCard } from "@/components/atomic/GlassCard";
import { ACTIVITY_DATA } from "@/lib/mockData";
import { Clock } from "lucide-react";

export function ActivityFeed() {
    return (
        <GlassCard className="h-full">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-medium text-white">System Activity</h3>
                <div className="flex items-center gap-2 text-xs text-slate-500 bg-white/5 px-3 py-1.5 rounded-full">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Live Feed
                </div>
            </div>

            <div className="space-y-6 relative">
                {/* Vertical line connecting items */}
                <div className="absolute left-2.5 top-2 bottom-2 w-px bg-white/10" />

                {ACTIVITY_DATA.map((item) => (
                    <div key={item.id} className="relative pl-8 group">
                        {/* Timeline Node */}
                        <div className="absolute left-0 top-1.5 w-5 h-5 rounded-full border border-white/10 bg-black flex items-center justify-center group-hover:border-neon-indigo/50 transition-colors">
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-500 group-hover:bg-neon-indigo transition-colors" />
                        </div>

                        <div className="flex flex-col gap-1">
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-slate-200 font-medium">
                                    {item.action} <span className="text-slate-500 font-normal"> - {item.target}</span>
                                </span>
                            </div>
                            <div className="flex items-center gap-4 text-xs text-slate-500 font-mono">
                                <span className="flex items-center gap-1">
                                    <Clock size={12} /> {item.timestamp}
                                </span>
                                <span className="text-slate-600">by {item.user}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </GlassCard>
    );
}
