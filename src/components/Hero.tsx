"use client";

import { motion, type Variants } from "framer-motion";
import PortraitFrame from "./PortraitFrame";
import { WaveformDivider } from "./Waveform";
import TextScramble from "./TextScramble";
import Magnetic from "./Magnetic";
import Counter from "./Counter";

const stats = [
  {
    to: 4,
    format: (n: number) => String(Math.round(n)).padStart(2, "0"),
    label: "Hardware + AI systems in build",
  },
  {
    to: 4,
    format: (n: number) => `${Math.round(n)}th`,
    label: "State-level exhibition, 147 teams",
  },
  {
    to: 2028,
    format: (n: number) => Math.round(n).toString(),
    label: "B.E. Computer Science, graduating",
  },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 3.3 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

export default function Hero() {
  return (
    <section id="top" className="relative pt-40 pb-20 md:pt-48 md:pb-28 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className="flex items-center gap-3 mb-8 font-[family-name:var(--font-data)] text-xs uppercase tracking-[0.25em] text-bone-dim">
            <span className="w-1.5 h-1.5 rounded-full bg-signal pulse-dot" />
            Bengaluru, IN — Systems Log 001
          </motion.div>

          <div className="grid md:grid-cols-[1.4fr_1fr] gap-14 items-start">
            <div>
              <h1 className="font-[family-name:var(--font-display)] font-extrabold text-[13vw] leading-[0.92] md:text-[5.2rem] tracking-tight text-bone">
                <TextScramble
                  as="div"
                  text="I build things"
                  trigger="mount"
                  delay={1950}
                  speed={22}
                />
                <div>
                  that{" "}
                  <TextScramble
                    as="span"
                    text="sense"
                    trigger="mount"
                    delay={2450}
                    speed={30}
                    className="text-signal"
                  />
                </div>
                <TextScramble
                  as="div"
                  text="the world."
                  trigger="mount"
                  delay={2850}
                  speed={22}
                />
              </h1>

              <motion.p
                variants={item}
                className="mt-8 max-w-lg text-bone-dim text-base md:text-lg leading-relaxed"
              >
                I&apos;m Rachana — a Computer Science engineer fusing AI/ML with edge
                hardware. From wearables that read the heart to sensors that read
                a lake, I design systems that turn raw signal into something
                worth acting on.
              </motion.p>

              <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-6">
                <Magnetic strength={0.4}>
                  <a
                    href="#work"
                    data-cursor="view"
                    data-cursor-label="Scroll"
                    className="group inline-flex items-center gap-3 bg-signal text-void font-[family-name:var(--font-data)] text-sm uppercase tracking-widest px-6 py-4 transition-transform duration-300"
                  >
                    View the work
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </a>
                </Magnetic>
                <a
                  href="#contact"
                  data-cursor="link"
                  className="link-trace font-[family-name:var(--font-data)] text-sm uppercase tracking-widest text-bone-dim hover:text-bone"
                >
                  Get in touch
                </a>
              </motion.div>
            </div>

            <motion.div variants={item}>
              <PortraitFrame />
            </motion.div>
          </div>
        </motion.div>

        <WaveformDivider className="mt-20 md:mt-24" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-line pt-10"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <Counter
                to={s.to}
                format={s.format}
                className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold text-bone tabular-nums"
              />
              <div className="mt-2 text-sm text-bone-dim">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
