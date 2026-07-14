export default function Footer() {
  return (
    <footer className="px-6 md:px-10 py-8 border-t border-line">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 font-[family-name:var(--font-data)] text-[11px] uppercase tracking-widest text-bone-dim">
        <span>© {new Date().getFullYear()} Rachana N P — Built with Next.js</span>
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-signal pulse-dot" />
          System nominal
        </span>
      </div>
    </footer>
  );
}
