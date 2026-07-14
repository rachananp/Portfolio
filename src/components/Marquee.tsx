const items = [
  "PYTORCH",
  "ESP32-S3",
  "NEXT.JS",
  "TINYML",
  "FASTAPI",
  "SENSOR FUSION",
  "SUPABASE",
  "EDGE AI",
  "REACT",
  "EMBEDDED C++",
  "POSTGRESQL",
  "COMPUTER VISION",
];

export default function Marquee() {
  const track = [...items, ...items];
  return (
    <div className="border-y border-line py-5 overflow-hidden bg-slate/40">
      <div className="flex w-max marquee-track">
        {track.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-8 px-8 font-[family-name:var(--font-data)] text-sm tracking-widest text-bone-dim shrink-0"
          >
            <span>{item}</span>
            <span className="text-signal">◆</span>
          </div>
        ))}
      </div>
    </div>
  );
}
