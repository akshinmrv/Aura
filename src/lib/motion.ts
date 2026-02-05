import { Variants } from "framer-motion";

export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 0.6
        }
    },
};

export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    },
};

export const sidebarAnim: Variants = {
    hidden: { x: -60, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 30
        }
    },
};

export const navItemAnim: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 }
};
