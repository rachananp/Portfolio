"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import TextScramble from "./TextScramble";

export default function Resume() {
  return (
    <section id="resume" className="px-6 md:px-10 py-24 md:py-32 border-t border-line">
      <div className="max-w-7xl mx-auto grid md:grid-cols-[1fr_auto] gap-12 items-center">
        <Reveal>
          <span className="font-[family-name:var(--font-data)] text-xs uppercase tracking-widest text-signal">
            One-page export
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl md:text-5xl font-bold text-bone tracking-tight leading-tight">
            <TextScramble text="Resume" />
          </h2>
          <p className="mt-4 max-w-md text-bone-dim text-sm md:text-base leading-relaxed">
            Everything above, condensed to a single page — education, the
            Infosys internship, current builds, and the KSRSAC award. Updated
            as new work ships.
          </p>
          <Magnetic strength={0.35} className="mt-8">
            <a
              href="/resume.pdf"
              download
              data-cursor="view"
              data-cursor-label="Download"
              className="inline-flex items-center gap-3 bg-signal text-void font-[family-name:var(--font-data)] text-sm uppercase tracking-widest px-6 py-4"
            >
              Download resume
              <span aria-hidden>↓</span>
            </a>
          </Magnetic>
        </Reveal>

        <Reveal delay={0.15}>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="view"
            data-cursor-label="Open"
            className="group relative block w-56 md:w-64 aspect-[8.5/11] mx-auto border border-line bg-void-2 overflow-hidden"
          >
            {/* mock document lines */}
            <div className="p-6 space-y-3">
              <div className="h-3 w-2/3 bg-line" />
              <div className="h-2 w-1/2 bg-line/70" />
              <div className="mt-4 space-y-1.5">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="h-1.5 bg-line/50" style={{ width: `${85 - i * 10}%` }} />
                ))}
              </div>
              <div className="mt-4 h-2 w-1/3 bg-signal/50" />
              <div className="mt-2 space-y-1.5">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="h-1.5 bg-line/50" style={{ width: `${90 - i * 12}%` }} />
                ))}
              </div>
              <div className="mt-4 h-2 w-1/3 bg-circuit/50" />
              <div className="mt-2 space-y-1.5">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="h-1.5 bg-line/50" style={{ width: `${80 - i * 8}%` }} />
                ))}
              </div>
            </div>

            {/* scan line */}
            <motion.div
              className="absolute inset-x-0 h-px bg-signal/70"
              animate={{ top: ["4%", "94%", "4%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-void/70 transition-opacity duration-300">
              <span className="font-[family-name:var(--font-data)] text-xs uppercase tracking-widest text-bone border border-line px-3 py-2">
                Open PDF
              </span>
            </div>

            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-[family-name:var(--font-data)] text-[9px] uppercase tracking-widest text-bone-dim">
              <span>resume.pdf</span>
              <span>1 page</span>
            </div>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
