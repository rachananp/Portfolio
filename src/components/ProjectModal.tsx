"use client";

import { motion } from "framer-motion";
import { Project } from "./ProjectCard";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const accent = project.accent === "circuit" ? "var(--circuit)" : "var(--signal)";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[90] bg-void/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto border border-line bg-void-2 p-8 md:p-12"
      >
        <button
          onClick={onClose}
          data-cursor="link"
          aria-label="Close"
          className="absolute top-5 right-5 md:top-6 md:right-6 w-9 h-9 flex items-center justify-center border border-line text-bone-dim hover:text-bone hover:border-signal transition-colors duration-300 text-xl leading-none"
        >
          ×
        </button>

        <div className="flex items-center gap-3 flex-wrap">
          <span
            className="font-[family-name:var(--font-data)] text-xs tracking-widest"
            style={{ color: accent }}
          >
            {project.index}
          </span>
          <span
            className={`flex items-center gap-1.5 border px-2 py-0.5 text-[9px] font-[family-name:var(--font-data)] uppercase tracking-widest ${
              project.status === "Shipped" ? "border-signal text-signal" : "border-line text-bone-dim"
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                project.status === "Shipped" ? "bg-signal" : "bg-bone-dim pulse-dot"
              }`}
            />
            {project.status}
          </span>
        </div>

        <h3 className="mt-4 font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-bone leading-tight pr-10">
          {project.title}
        </h3>

        <p className="mt-3 font-[family-name:var(--font-data)] text-xs uppercase tracking-widest text-bone-dim">
          {project.meta}
        </p>

        <p className="mt-6 text-bone-dim leading-relaxed">{project.blurb}</p>

        {project.details && (
          <div className="mt-6 space-y-4 border-t border-line pt-6">
            {project.details.map((d, i) => (
              <p key={i} className="text-bone-dim leading-relaxed text-sm">
                {d}
              </p>
            ))}
          </div>
        )}

        <div className="mt-8 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="border border-line px-2.5 py-1 text-[10px] font-[family-name:var(--font-data)] uppercase tracking-wider text-bone"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
