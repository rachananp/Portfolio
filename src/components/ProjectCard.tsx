"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export type Project = {
  index: string;
  title: string;
  blurb: string;
  meta: string;
  tags: string[];
  accent?: "signal" | "circuit";
  details?: string[];
  status: "In Progress" | "Shipped";
};

export default function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [hovering, setHovering] = useState(false);

  const rotX = useMotionValue(0);
  const rotY = useMotionValue(0);
  const springX = useSpring(rotX, { stiffness: 220, damping: 22 });
  const springY = useSpring(rotY, { stiffness: 220, damping: 22 });

  const accent = project.accent === "circuit" ? "var(--circuit)" : "var(--signal)";

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    setPos({ x: px * 100, y: py * 100 });
    rotY.set((px - 0.5) * 16);
    rotX.set((0.5 - py) * 16);
  };

  const reset = () => {
    setHovering(false);
    rotX.set(0);
    rotY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      data-cursor="view"
      data-cursor-label="Open"
      onMouseMove={handleMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={reset}
      onClick={onOpen}
      style={{
        rotateX: springX,
        rotateY: springY,
        transformPerspective: 1000,
        ["--tw-accent" as string]: accent,
      }}
      className="group relative border border-line bg-void-2 p-8 md:p-10 overflow-hidden transition-colors duration-500 hover:border-[color:var(--tw-accent)] cursor-pointer will-change-transform"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(420px circle at ${pos.x}% ${pos.y}%, ${accent}22, transparent 70%)`,
        }}
      />

      <div className="relative z-10 flex flex-col h-full" style={{ transform: "translateZ(40px)" }}>
        <div className="flex items-start justify-between gap-3">
          <span
            className="font-[family-name:var(--font-data)] text-xs tracking-widest"
            style={{ color: accent }}
          >
            {project.index}
          </span>
          <div className="flex items-center gap-3">
            <span
              className={`flex items-center gap-1.5 border px-2 py-0.5 text-[9px] font-[family-name:var(--font-data)] uppercase tracking-widest ${
                project.status === "Shipped"
                  ? "border-signal text-signal"
                  : "border-line text-bone-dim"
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  project.status === "Shipped" ? "bg-signal" : "bg-bone-dim pulse-dot"
                }`}
              />
              {project.status}
            </span>
            <motion.span
              animate={{ rotate: hovering ? 45 : 0 }}
              transition={{ duration: 0.35, ease: [0.65, 0, 0.35, 1] }}
              className="text-2xl text-bone-dim"
            >
              ↗
            </motion.span>
          </div>
        </div>

        <h3 className="mt-6 font-[family-name:var(--font-display)] text-2xl md:text-[1.8rem] font-bold text-bone leading-tight">
          {project.title}
        </h3>

        <p className="mt-4 text-sm md:text-[0.95rem] text-bone-dim leading-relaxed max-w-md">
          {project.blurb}
        </p>

        <div className="mt-6 font-[family-name:var(--font-data)] text-xs uppercase tracking-widest text-bone-dim">
          {project.meta}
        </div>

        <div className="mt-auto pt-8 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="border border-line px-2.5 py-1 text-[10px] font-[family-name:var(--font-data)] uppercase tracking-wider text-bone-dim group-hover:text-bone transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
