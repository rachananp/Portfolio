"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import BootSequence from "./BootSequence";
import CircuitField from "./CircuitField";
import CustomCursor from "./CustomCursor";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    document.body.style.overflow = booted ? "" : "hidden";
  }, [booted]);

  return (
    <>
      <AnimatePresence>{!booted && <BootSequence onDone={() => setBooted(true)} />}</AnimatePresence>
      <CircuitField />
      <CustomCursor />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: booted ? 1 : 0 }}
        transition={{ duration: 0.9, delay: booted ? 0.05 : 0 }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </>
  );
}
