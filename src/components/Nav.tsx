"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Magnetic from "./Magnetic";

const links = [
  { id: "work", label: "Work" },
  { id: "blog", label: "Blog" },
  { id: "about", label: "About" },
  { id: "certifications", label: "Certs" },
  { id: "experience", label: "Log" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);

    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    sections.forEach((s) => observer.observe(s));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.9, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-void/80 backdrop-blur-md border-b border-line" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 h-20">
        <a
          href="#top"
          data-cursor="link"
          className="font-[family-name:var(--font-display)] font-bold text-lg tracking-tight text-bone"
        >
          RACH<span className="text-signal">/</span>ANA
        </a>

        <nav className="hidden lg:flex items-center gap-7 font-[family-name:var(--font-data)] text-xs uppercase tracking-widest">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              data-cursor="link"
              className={`link-trace transition-colors duration-300 ${
                active === l.id ? "text-signal" : "text-bone-dim hover:text-bone"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <Magnetic strength={0.35}>
          <a
            href="#contact"
            data-cursor="view"
            data-cursor-label="Say hi"
            className="hidden lg:flex items-center gap-2 border border-line px-4 py-2 text-xs font-[family-name:var(--font-data)] uppercase tracking-widest hover:border-signal hover:text-signal transition-colors duration-300"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-circuit pulse-dot" />
            Available for work
          </a>
        </Magnetic>
      </div>
    </motion.header>
  );
}
