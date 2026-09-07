"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface CardProps extends HTMLMotionProps<"div"> {
  glass?: boolean;
  hoverEffect?: boolean;
  children?: React.ReactNode;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, glass = true, hoverEffect = false, children, ...props }, ref) => {
    const baseStyles = "rounded-2xl p-6 border transition-all duration-300";
    const glassStyles = glass
      ? "bg-surface/80 backdrop-blur-xl border-black/5 shadow-sm"
      : "bg-surface border-transparent shadow-sm";
    const hoverStyles = hoverEffect
      ? "hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
      : "";

    return (
      <motion.div
        ref={ref}
        initial={hoverEffect ? { opacity: 0, y: 20 } : undefined}
        whileInView={hoverEffect ? { opacity: 1, y: 0 } : undefined}
        viewport={{ once: true }}
        className={cn(baseStyles, glassStyles, hoverStyles, className)}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = "Card";
