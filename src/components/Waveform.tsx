"use client";

import { motion } from "framer-motion";

export function WaveformDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full overflow-hidden ${className}`} aria-hidden>
      <svg
        viewBox="0 0 1200 60"
        className="w-full h-10"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0 30 L140 30 L165 8 L190 52 L215 30 L340 30 L365 15 L380 30 L470 30 L495 4 L515 56 L535 20 L555 30 L700 30 L725 12 L745 30 L900 30 L925 6 L945 54 L965 30 L1200 30"
          fill="none"
          stroke="var(--signal)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0.3 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, ease: [0.65, 0, 0.35, 1] }}
        />
      </svg>
    </div>
  );
}

export function LiveSignal({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 60" className={className} preserveAspectRatio="none" aria-hidden>
      <motion.path
        d="M0 30 L40 30 L55 10 L70 50 L85 30 L120 30 L135 18 L145 30 L190 30 L205 4 L218 56 L230 30 L300 30"
        fill="none"
        stroke="var(--circuit)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={{
          pathLength: [0, 1],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
      />
    </svg>
  );
}
