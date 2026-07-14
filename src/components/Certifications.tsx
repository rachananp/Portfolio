"use client";

import Reveal from "./Reveal";
import TextScramble from "./TextScramble";

type Certification = {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  skills: string[];
  accent?: "signal" | "circuit";
};

const certifications: Certification[] = [
  {
    title: "Oracle AI Foundations Associate",
    issuer: "Oracle",
    date: "Issued Jan 2026",
    credentialId: "324930988OCI25AICFA",
    skills: ["AI & Machine Learning Fundamentals"],
    accent: "signal",
  },
  {
    title: "Nation SkillUp Program — Python, Data Analytics, AI Tools & Git",
    issuer: "GeeksforGeeks",
    date: "Issued Jan 2026",
    skills: ["Python", "Git", "Data Analytics", "AI Tools"],
    accent: "circuit",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="px-6 md:px-10 py-24 md:py-32 border-t border-line">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-4 mb-14">
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold text-bone tracking-tight">
              <TextScramble text="Certifications" />
            </h2>
            <span className="font-[family-name:var(--font-data)] text-xs uppercase tracking-widest text-bone-dim">
              verified credentials
            </span>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((c, i) => {
            const accent = c.accent === "circuit" ? "var(--circuit)" : "var(--signal)";
            return (
              <Reveal key={c.title} delay={i * 0.08}>
                <div
                  className="group relative border border-line bg-void-2 p-8 overflow-hidden transition-colors duration-500 hover:border-[color:var(--tw-accent)]"
                  style={{ ["--tw-accent" as string]: accent }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className="font-[family-name:var(--font-data)] text-[10px] uppercase tracking-widest"
                      style={{ color: accent }}
                    >
                      {c.date}
                    </span>
                    <span className="font-[family-name:var(--font-data)] text-[10px] uppercase tracking-widest text-bone-dim">
                      {c.issuer}
                    </span>
                  </div>

                  <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl md:text-2xl font-bold text-bone leading-tight">
                    {c.title}
                  </h3>

                  {c.credentialId && (
                    <p className="mt-3 font-[family-name:var(--font-data)] text-xs text-bone-dim">
                      Credential ID: {c.credentialId}
                    </p>
                  )}

                  <div className="mt-6 flex flex-wrap gap-2">
                    {c.skills.map((s) => (
                      <span
                        key={s}
                        className="border border-line px-2.5 py-1 text-[10px] font-[family-name:var(--font-data)] uppercase tracking-wider text-bone-dim group-hover:text-bone transition-colors duration-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
