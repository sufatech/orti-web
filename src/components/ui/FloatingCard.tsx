"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FloatingCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
  duration?: number;
}

export function FloatingCard({ 
  children, 
  className = "", 
  delay = 0,
  yOffset = 15,
  duration = 4
}: FloatingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.8, type: "spring", stiffness: 100 }}
      className={`absolute z-10 ${className}`}
    >
      <motion.div
        animate={{ y: [0, -yOffset, 0] }}
        transition={{ 
          repeat: Infinity, 
          duration: duration, 
          ease: "easeInOut",
          delay: delay % duration
        }}
        className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_16px_36px_rgba(0,0,0,0.14)] border border-white/70 p-3.5 sm:p-4 flex items-center gap-3.5 whitespace-nowrap text-slate-900"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
