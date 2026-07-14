import Reveal from "./Reveal";
import TextScramble from "./TextScramble";

const logs = [
  {
    date: "June 2026 — Ongoing",
    title: "AI Engineering Intern, Infosys",
    desc:
      "Building an AI Academic Project Mentor from scratch — schema, backend, and frontend — on a Next.js, FastAPI, and Supabase stack.",
    tag: "Internship",
  },
  {
    date: "Jan 2026 - Apr 2026",
    title: "Data Science Intern, Pursuit Future Technologies",
    desc:
      "Strengthened skills in Python, data analysis, machine learning, data preprocessing, and exploratory data analysis while building a Customer Churn Prediction model and a Blind Auction application. Received the Performance of Excellence award for the internship.",
    tag: "Internship",
  },
  {
    date: "Apr 2026",
    title: "4th Place, KSRSAC State-Level Student Innovation Exhibition",
    desc:
      "Won ₹15,000 out of 147 competing teams with LakeGuard AI + AquaDrone Sentinel, a lake monitoring dashboard paired with a floating ESP32 sensor drone.",
    tag: "Award",
  },
  {
    date: "Apr 2026",
    title: "Scaler × Meta PyTorch OpenEnv Hackathon",
    desc:
      "Built a Legal Negotiation RL Environment solo, using the OpenEnv framework with a Docker and FastAPI backend.",
    tag: "Hackathon",
  },
  {
    date: "2024 — 2028",
    title: "B.E. Computer Science Engineering",
    desc:
      "Focused coursework and independent projects in AI/ML, Data Science, and Edge AI / IoT / Embedded Systems.",
    tag: "Education",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-6 md:px-10 py-24 md:py-32 border-t border-line">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold text-bone tracking-tight mb-16">
            <TextScramble text="System Log" />
          </h2>
        </Reveal>

        <div className="relative">
          <div className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px bg-line" />
          <div className="space-y-12">
            {logs.map((log, i) => (
              <Reveal key={log.title} delay={i * 0.06}>
                <div className="relative pl-10 grid md:grid-cols-[160px_1fr] gap-2 md:gap-10">
                  <span className="absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-signal bg-void" />
                  <span className="font-[family-name:var(--font-data)] text-xs uppercase tracking-widest text-bone-dim pt-0.5">
                    {log.date}
                  </span>
                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-bold text-bone">
                        {log.title}
                      </h3>
                      <span className="text-[10px] font-[family-name:var(--font-data)] uppercase tracking-widest text-circuit border border-circuit-dim px-2 py-0.5">
                        {log.tag}
                      </span>
                    </div>
                    <p className="mt-2 text-bone-dim text-sm md:text-base leading-relaxed max-w-2xl">
                      {log.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
