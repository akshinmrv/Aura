"use client";

import { cn } from "@/lib/cn";
import { motion, HTMLMotionProps } from "framer-motion";

interface GlassCardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export const GlassCard = ({
    children,
    className,
    hoverEffect = true,
    ...props
}: GlassCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn(
                "glass-panel rounded-xl p-6 relative overflow-hidden",
                hoverEffect && "glass-panel-hover",
                className
            )}
            {...props}
        >
            <div className="relative z-10">{children}</div>

            {/* Optional: Add a subtle gradient overlay or noise here if strict adherence allows */}
        </motion.div>
    );
};
