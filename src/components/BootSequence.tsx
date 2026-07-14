"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LINES = [
  "BOOTING RACH.SYS",
  "LOADING BIOSIGNAL MODULES...",
  "CALIBRATING SENSOR ARRAY...",
  "MOUNTING EDGE RUNTIME...",
  "SYSTEM READY.",
];

export default function BootSequence({ onDone }: { onDone: () => void }) {
  const [lineIndex, setLineIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const lineTimer = setInterval(() => {
      setLineIndex((i) => (i < LINES.length - 1 ? i + 1 : i));
    }, 300);

    const progressTimer = setInterval(() => {
      setProgress((p) => Math.min(100, p + Math.random() * 16 + 8));
    }, 130);

    const done = setTimeout(onDone, 1850);

    return () => {
      clearInterval(lineTimer);
      clearInterval(progressTimer);
      clearTimeout(done);
    };
  }, [onDone]);

  return (
    <motion.div
      exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.65, 0, 0.35, 1] } }}
      className="fixed inset-0 z-[100] bg-void flex flex-col items-center justify-center px-6"
    >
      <div className="w-full max-w-md font-[family-name:var(--font-data)] text-[11px] md:text-xs uppercase tracking-widest text-bone-dim space-y-2">
        {LINES.slice(0, lineIndex + 1).map((l, i) => (
          <motion.div
            key={l}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            className={i === lineIndex ? "text-signal" : ""}
          >
            {"> "} {l}
          </motion.div>
        ))}
        <div className="mt-6 h-px w-full bg-line relative overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0 bg-signal"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.15 }}
          />
        </div>
        <div className="text-right tabular-nums">{Math.floor(progress)}%</div>
      </div>
    </motion.div>
  );
}
