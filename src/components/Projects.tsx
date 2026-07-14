"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ProjectCard, { Project } from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import Reveal from "./Reveal";
import TextScramble from "./TextScramble";

const projects: Project[] = [
  {
    index: "01 / FOLLICURE",
    title: "Follicure — Predictive Scalp Cooling System",
    blurb:
      "A closed-loop scalp cooling system for chemotherapy-induced hair loss that measures whether vasoconstriction is actually happening in real time, instead of cooling to a fixed temperature on a fixed timer like every device on the market today.",
    meta: "Perfusion biofeedback · Fit-adaptive for textured hair",
    tags: ["ESP32-S3", "Multi-site PPG", "TinyML", "Zone Peltier Control"],
    accent: "circuit",
    status: "In Progress",
    details: [
      "Multi-site reflectance PPG array reads real-time perfusion per scalp zone (crown, temporal, occipital), and an on-device TinyML classifier tracks each zone's constriction state continuously — not yet constricted, constricting, adequately constricted, or over-cooled.",
      "A pre-treatment predictive model personalizes the starting protocol from chemo regimen, hair density, and other known clinical factors, then refines itself session over session using live perfusion data — the same personalized-baseline philosophy as VitalDrift, applied to a different clinical problem.",
      "A segmented, pressure-sensing modular shell self-adjusts contact pressure across hair thicknesses and textures, directly addressing the fit gap in existing caps for thick, curly, and coily hair.",
    ],
  },
  {
    index: "02 / VITALDRIFT",
    title: "VitalDrift — Wearable Cardiac Early-Warning",
    blurb:
      "An inner-arm wearable that learns each wearer's own 14-day biosignal baseline and flags dangerous drift on-device — built to catch sudden cardiac events in young, healthy adults before symptoms show.",
    meta: "On-device LSTM · Personalized baseline",
    tags: ["ESP32-S3", "AD8232 ECG", "MAX30102 PPG", "TinyML"],
    accent: "signal",
    status: "In Progress",
    details: [
      "Fuses ECG, PPG, GSR, and skin-temperature signals into a single personalized drift model, rather than relying on generic population thresholds.",
      "Framed as a wellness device to stay outside CDSCO medical-device classification, with a subscription model covering electrode replacement and an emergency-relay backend.",
      "Includes an ER handoff feature that exports a 6-hour pre-event biosignal log — a capability with no direct competitor equivalent.",
    ],
  },
  {
    index: "03 / CHROMATRACK",
    title: "ChromaTrack + DyeTag — Effluent Attribution",
    blurb:
      "A pipe-level spectral fingerprinting system that identifies exactly which factory an industrial dye discharge came from, using a unique fluorescent tracer ratio assigned per site.",
    meta: "Environmental compliance · Govt. pitch ready",
    tags: ["AS7265x Spectral", "Fluorescent Tracers", "CPCB / TNPCB"],
    accent: "circuit",
    status: "In Progress",
    details: [
      "Uses an 18-channel spectral sensor with on-device TinyML inference to read dye composition in real time, directly at the pipe.",
      "DyeTag adds government-assigned fluorescent tracers (Rhodamine WT, Fluorescein sodium, PTSA) unique to each factory, detectable with a simple UV LED addition.",
      "Positioned for pitches to CPCB, TNPCB, RSPCB, NGT, and KSPCB via existing KSRSAC contacts.",
    ],
  },
  {
    index: "04 / LAKEGUARD",
    title: "LakeGuard AI + AquaDrone Sentinel",
    blurb:
      "A lake-health dashboard paired with a floating sensor drone that reads water conditions in real time and predicts degradation — placed 4th of 147 teams at a state-level exhibition.",
    meta: "KSRSAC State-Level Exhibition · Top 4",
    tags: ["React", "FastAPI", "ESP32", "JSN-SR04T"],
    accent: "signal",
    status: "Shipped",
    details: [
      "Combines a React + FastAPI dashboard covering 161 Bengaluru lakes with a floating ESP32-based drone prototype.",
      "Blends live Open-Meteo rainfall data with research-accurate simulated lake data to model conditions where live sensors aren't yet deployed.",
      "Won ₹15,000 at the KSRSAC State-Level Student Innovation Exhibition; jury feedback noted a live lake demo would have pushed the team into the top 3.",
    ],
  },
  {
    index: "05 / MENTOR",
    title: "AI Academic Project Mentor",
    blurb:
      "A full-stack platform that guides students through academic projects end to end — built solo during an Infosys internship, from schema to shipped frontend.",
    meta: "Infosys internship · In progress",
    tags: ["Next.js", "FastAPI", "Supabase", "PostgreSQL"],
    accent: "circuit",
    status: "In Progress",
    details: [
      "Milestone 1 shipped: full system design deliverables plus a working student onboarding UI with Supabase Auth integration.",
      "Built on the same stack as this portfolio — Next.js on the frontend, FastAPI and Supabase/PostgreSQL underneath.",
    ],
  },
];

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="work" className="px-6 md:px-10 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-4 mb-14">
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold text-bone tracking-tight">
              <TextScramble text="Selected Work" />
            </h2>
            <span className="font-[family-name:var(--font-data)] text-xs uppercase tracking-widest text-bone-dim">
              2025 — 2026 · click a card to expand
            </span>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6" style={{ perspective: 1200 }}>
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <ProjectCard project={p} onOpen={() => setActive(p)} />
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
}
