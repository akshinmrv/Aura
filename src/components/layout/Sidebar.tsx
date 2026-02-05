"use client";

import { motion } from "framer-motion";
import { BarChart2, Grid, Layers, Settings, LogOut } from "lucide-react";
import { cn } from "@/lib/cn";
import { sidebarAnim } from "@/lib/motion";

const NAV_ITEMS = [
    { icon: Grid, label: "Dashboard", active: true },
    { icon: BarChart2, label: "Analytics", active: false },
    { icon: Layers, label: "Fleet", active: false },
    { icon: Settings, label: "Settings", active: false },
];

export function Sidebar() {
    return (
        <>
            {/* Desktop Floating Dock */}
            <motion.div
                variants={sidebarAnim}
                initial="hidden"
                animate="visible"
                className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-8 p-4 rounded-full glass-panel border-white/5 bg-black/40 backdrop-blur-2xl"
            >
                <div className="w-10 h-10 rounded-full bg-neon-indigo/20 border border-neon-indigo/50 flex items-center justify-center text-neon-indigo font-bold text-xs shadow-[0_0_15px_rgba(99,102,241,0.5)]">
                    A
                </div>

                <nav className="flex flex-col gap-6">
                    {NAV_ITEMS.map((item, idx) => (
                        <button
                            key={idx}
                            className={cn(
                                "p-3 rounded-xl transition-all duration-300 group relative",
                                item.active
                                    ? "text-neon-indigo bg-white/10 shadow-[0_0_10px_rgba(99,102,241,0.2)]"
                                    : "text-slate-400 hover:text-white hover:bg-white/5"
                            )}
                            title={item.label}
                        >
                            <item.icon size={22} strokeWidth={1.5} />
                            {item.active && (
                                <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-neon-indigo/30" />
                            )}
                        </button>
                    ))}
                </nav>

                <div className="mt-auto">
                    <button className="p-3 text-slate-500 hover:text-rose-400 transition-colors">
                        <LogOut size={20} strokeWidth={1.5} />
                    </button>
                </div>
            </motion.div>

            {/* Mobile Bottom Bar */}
            <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.5 }}
                className="fixed bottom-4 left-4 right-4 z-50 md:hidden flex items-center justify-around p-3 rounded-2xl glass-panel border-white/5 bg-black/60 backdrop-blur-xl"
            >
                {NAV_ITEMS.map((item, idx) => (
                    <button
                        key={idx}
                        className={cn(
                            "p-3 rounded-xl transition-all duration-300 relative",
                            item.active
                                ? "text-neon-indigo"
                                : "text-slate-400"
                        )}
                    >
                        <item.icon size={24} strokeWidth={1.5} />
                        {item.active && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-neon-indigo shadow-[0_0_8px_rgba(99,102,241,1)]"
                            />
                        )}
                    </button>
                ))}
                <div className="w-px h-8 bg-white/10" />
                <button className="p-3 text-slate-500 hover:text-rose-400">
                    <div className="w-6 h-6 rounded-full bg-neon-indigo/20 border border-neon-indigo/50 flex items-center justify-center text-[10px] text-neon-indigo font-bold">
                        A
                    </div>
                </button>
            </motion.div>
        </>
    );
}
