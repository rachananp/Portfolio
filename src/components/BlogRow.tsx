"use client";

import type { BlogPost } from "./Blog";

export default function BlogRow({ post, onOpen }: { post: BlogPost; onOpen: () => void }) {
  return (
    <button
      onClick={onOpen}
      data-cursor="view"
      data-cursor-label="Read"
      className="group w-full text-left border-t border-line first:border-t-0 pl-4 md:pl-5 border-l-2 border-l-transparent hover:border-l-signal hover:bg-void-2/40 transition-colors duration-300 py-7 grid md:grid-cols-[110px_1fr_auto] gap-3 md:gap-8 items-start"
    >
      <div className="font-[family-name:var(--font-data)] text-xs uppercase tracking-widest text-bone-dim pt-1">
        {post.date}
      </div>

      <div>
        <h3 className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-bold text-bone group-hover:text-signal transition-colors duration-300">
          {post.title}
        </h3>
        <p className="mt-2 text-sm text-bone-dim leading-relaxed max-w-xl">{post.excerpt}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {post.tags.map((t) => (
            <span
              key={t}
              className="text-[10px] font-[family-name:var(--font-data)] uppercase tracking-widest text-bone-dim border border-line px-2 py-0.5"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="flex md:flex-col items-center md:items-end gap-2 md:gap-2 justify-between md:justify-start pt-1">
        <span className="font-[family-name:var(--font-data)] text-[10px] uppercase tracking-widest text-bone-dim">
          {post.readTime}
        </span>
        <span className="text-xl text-bone-dim group-hover:text-signal group-hover:translate-x-1 transition-all duration-300">
          →
        </span>
      </div>
    </button>
  );
}
