"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type Variant = "default" | "link" | "view" | "drag";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [variant, setVariant] = useState<Variant>("default");
  const [label, setLabel] = useState("");
  const [pressed, setPressed] = useState(false);
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springConfig = { damping: 28, stiffness: 320, mass: 0.4 };
  const ringX = useSpring(x, springConfig);
  const ringY = useSpring(y, springConfig);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      const el = target.closest<HTMLElement>("[data-cursor]");
      if (el) {
        setVariant((el.dataset.cursor as Variant) || "link");
        setLabel(el.dataset.cursorLabel || "");
      } else {
        setVariant("default");
        setLabel("");
      }
    };

    const down = () => setPressed(true);
    const up = () => setPressed(false);
    const click = (e: MouseEvent) => {
      const id = Date.now() + Math.random();
      setRipples((r) => [...r, { id, x: e.clientX, y: e.clientY }]);
      setTimeout(() => setRipples((r) => r.filter((rp) => rp.id !== id)), 700);
    };
    const leave = () => setIsVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    window.addEventListener("click", click);
    document.documentElement.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("click", click);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  const baseSize = variant === "default" ? 26 : variant === "link" ? 54 : variant === "view" ? 76 : 44;
  const size = pressed ? baseSize * 0.82 : baseSize;

  return (
    <>
      {ripples.map((r) => (
        <motion.div
          key={r.id}
          initial={{ opacity: 0.55, scale: 0 }}
          animate={{ opacity: 0, scale: 2.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{ left: r.x, top: r.y }}
          className="fixed w-10 h-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-signal pointer-events-none z-[9998]"
        />
      ))}

      <motion.div className="reticle-dot" style={{ x, y, opacity: isVisible ? 1 : 0 }} />

      <motion.div
        className="reticle flex items-center justify-center"
        style={{ x: ringX, y: ringY, opacity: isVisible ? 1 : 0 }}
        animate={{ width: size, height: size }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
      >
        <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none">
          <path d="M2 12V4h8" stroke="var(--bone)" strokeWidth="1.4" />
          <path d="M38 12V4h-8" stroke="var(--bone)" strokeWidth="1.4" />
          <path d="M2 28v8h8" stroke="var(--bone)" strokeWidth="1.4" />
          <path d="M38 28v8h-8" stroke="var(--bone)" strokeWidth="1.4" />
        </svg>
        {label && (
          <span className="absolute whitespace-nowrap font-[family-name:var(--font-data)] text-[10px] uppercase tracking-widest text-bone bg-void px-2 py-1 translate-y-10">
            {label}
          </span>
        )}
      </motion.div>
    </>
  );
}
