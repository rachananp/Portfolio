"use client";

import { motion } from "framer-motion";
import type { BlogPost } from "./Blog";

export default function BlogModal({ post, onClose }: { post: BlogPost; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[90] bg-void/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto border border-line bg-void-2 p-8 md:p-12"
      >
        <button
          onClick={onClose}
          data-cursor="link"
          aria-label="Close"
          className="absolute top-5 right-5 md:top-6 md:right-6 w-9 h-9 flex items-center justify-center border border-line text-bone-dim hover:text-bone hover:border-signal transition-colors duration-300 text-xl leading-none"
        >
          ×
        </button>

        <div className="flex items-center gap-3 flex-wrap font-[family-name:var(--font-data)] text-xs uppercase tracking-widest text-bone-dim">
          <span className="text-signal">{post.issue}</span>
          <span>·</span>
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>

        <h3 className="mt-4 font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-bone leading-tight pr-10">
          {post.title}
        </h3>

        <p className="mt-2 font-[family-name:var(--font-data)] text-xs uppercase tracking-widest text-bone-dim">
          By Rachana N P
        </p>

        <div className="mt-8 space-y-4">
          {post.content.map((block, i) =>
            block.type === "heading" ? (
              <h4
                key={i}
                className="font-[family-name:var(--font-display)] text-lg font-bold text-bone pt-3"
              >
                {block.text}
              </h4>
            ) : (
              <p key={i} className="text-bone-dim leading-relaxed text-sm">
                {block.text}
              </p>
            )
          )}
        </div>

        <div className="mt-10 flex flex-wrap gap-2 border-t border-line pt-6">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="border border-line px-2.5 py-1 text-[10px] font-[family-name:var(--font-data)] uppercase tracking-wider text-bone"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
