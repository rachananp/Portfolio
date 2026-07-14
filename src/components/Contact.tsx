"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { LiveSignal } from "./Waveform";

const socials = [
  { label: "GitHub", href: "https://github.com/rachananp" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rachana-n-p-6a0ba8389" },
];

export default function Contact() {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    setPos({ x: relX * 0.25, y: relY * 0.35 });
  };

  return (
    <section id="contact" className="px-6 md:px-10 py-24 md:py-36 border-t border-line">
      <div className="max-w-7xl mx-auto text-center">
        <Reveal>
          <span className="font-[family-name:var(--font-data)] text-xs uppercase tracking-widest text-signal">
            Currently open to internships &amp; collaborations
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <motion.a
            ref={ref}
            href="rachananpfreelancing@gmail.com"
            data-cursor="view"
            data-cursor-label="Copy"
            onMouseMove={handleMove}
            onMouseLeave={() => setPos({ x: 0, y: 0 })}
            animate={{ x: pos.x, y: pos.y }}
            transition={{ type: "spring", stiffness: 150, damping: 12 }}
            className="inline-block mt-6 font-[family-name:var(--font-display)] font-extrabold text-[11vw] md:text-[6.5rem] leading-none tracking-tight text-bone hover:text-signal transition-colors duration-500"
          >
            Let&apos;s build
            <br />
            something.
          </motion.a>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-14 flex justify-center">
            <LiveSignal className="w-64 h-12" />
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
            <a
              href="mailto:rachananpfreelancing@gmail.com"
              data-cursor="link"
              className="link-trace font-[family-name:var(--font-data)] text-sm text-bone-dim hover:text-bone"
            >
              rachananpfreelancing@gmail.com
            </a>
            <div className="flex items-center gap-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="link"
                  className="link-trace font-[family-name:var(--font-data)] text-xs uppercase tracking-widest text-bone-dim hover:text-bone"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
