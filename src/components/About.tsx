import Reveal from "./Reveal";

const skillGroups = [
  {
    label: "AI / ML",
    items: ["PyTorch", "LSTM & Time-Series", "TinyML", "Reinforcement Learning"],
  },
  {
    label: "Edge & Embedded",
    items: ["ESP32 / ESP32-S3", "Sensor Fusion", "Biosignal Acquisition", "Embedded C++"],
  },
  {
    label: "Full-Stack",
    items: ["Next.js / TypeScript", "FastAPI", "PostgreSQL", "Supabase"],
  },
  {
    label: "Process",
    items: ["Rapid Prototyping", "BOM & Hardware Costing", "Pitch Decks", "Docker"],
  },
];

export default function About() {
  return (
    <section id="about" className="px-6 md:px-10 py-24 md:py-32 border-t border-line">
      <div className="max-w-7xl mx-auto grid md:grid-cols-[0.8fr_1.2fr] gap-16">
        <Reveal>
          <span className="font-[family-name:var(--font-data)] text-xs uppercase tracking-widest text-signal">
            About
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-bone leading-tight">
            Third-year engineering student.
            <br />
            First-principles builder.
          </h2>
        </Reveal>

        <div className="space-y-10">
          <Reveal delay={0.1}>
            <p className="text-bone-dim text-base md:text-lg leading-relaxed max-w-2xl">
              I&apos;m a Computer Science Engineering student in Bengaluru, graduating
              in 2028, spending most of my time at the intersection of AI/ML and
              edge hardware. I like problems that start with a real sensor
              reading and end with a decision worth trusting — whether that&apos;s a
              heartbeat, a water sample, or a student&apos;s next project step. I
              design end to end: circuit, firmware, model, and the interface
              someone actually uses.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="grid sm:grid-cols-2 gap-8">
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <div className="font-[family-name:var(--font-data)] text-xs uppercase tracking-widest text-bone-dim mb-3">
                    {group.label}
                  </div>
                  <ul className="space-y-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-bone text-sm"
                      >
                        <span className="w-1 h-1 bg-signal shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
