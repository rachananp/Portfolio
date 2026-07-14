"use client";

import { motion } from "framer-motion";

/**
 * REPLACE ME:
 * Swap the <div className="placeholder-fill"> block below for:
 *   <img src="/your-photo.jpg" alt="Rachana N P" className="w-full h-full object-cover" />
 * Drop your photo into /public and update the src path.
 */
export default function PortraitFrame() {
  return (
    <div className="relative w-full aspect-[4/5] max-w-sm mx-auto md:mx-0">
      {/* corner brackets */}
      {[
        "top-0 left-0 border-t border-l",
        "top-0 right-0 border-t border-r",
        "bottom-0 left-0 border-b border-l",
        "bottom-0 right-0 border-b border-r",
      ].map((pos, i) => (
        <div
          key={i}
          className={`absolute w-6 h-6 border-signal ${pos} z-20`}
        />
      ))}

      <div className="relative w-full h-full bg-slate border border-line overflow-hidden">
        <img src="/rachana.jpg" alt="Rachana N P" className="w-full h-full object-cover" />
        {/* scan line */}
        <motion.div
          className="absolute inset-x-0 h-px bg-signal/70"
          animate={{ top: ["4%", "94%", "4%"] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* HUD label */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-[family-name:var(--font-data)] text-[10px] uppercase tracking-widest text-bone-dim">
          <span>rach.jpg — pending</span>
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-circuit pulse-dot" />
            Live
          </span>
        </div>
      </div>
    </div>
  );
}
