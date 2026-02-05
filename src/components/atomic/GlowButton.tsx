"use client";

import { cn } from "@/lib/cn";
import { motion, HTMLMotionProps } from "framer-motion";

interface GlowButtonProps extends HTMLMotionProps<"button"> {
    children: React.ReactNode;
    variant?: "primary" | "ghost";
}

export const GlowButton = ({
    children,
    className,
    variant = "primary",
    ...props
}: GlowButtonProps) => {
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
                "relative px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2",
                variant === "primary" &&
                "bg-neon-indigo/10 border border-neon-indigo/50 text-indigo-100 shadow-[0_0_15px_rgba(99,102,241,0.3)] hover:shadow-[0_0_25px_rgba(99,102,241,0.6)] hover:bg-neon-indigo/20 hover:border-neon-indigo",
                variant === "ghost" &&
                "bg-transparent border border-transparent text-slate-400 hover:text-white hover:bg-white/5",
                className
            )}
            {...props}
        >
            {children}
        </motion.button>
    );
};
