"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import BlogRow from "./BlogRow";
import BlogModal from "./BlogModal";
import Reveal from "./Reveal";
import TextScramble from "./TextScramble";

export type ContentBlock = { type: "heading" | "p"; text: string };

export type BlogPost = {
  issue: string;
  date: string;
  title: string;
  excerpt: string;
  readTime: string;
  tags: string[];
  content: ContentBlock[];
};

export const posts: BlogPost[] = [
  {
    issue: "FIELD NOTE 001",
    date: "July 2026",
    title: "My Journey into Python for AI: What I Wish I Knew Earlier",
    excerpt:
      "A year of building, breaking, and debugging taught me more than any tutorial — ten lessons I'd tell my beginner self.",
    readTime: "6 min read",
    tags: ["Python", "AI", "Learning"],
    content: [
      {
        type: "p",
        text: "A year ago, if someone had asked me what Python was, my answer would probably have been, \"It's a programming language used for AI.\" That wasn't wrong — but it wasn't even 1% of the story.",
      },
      {
        type: "p",
        text: "Today, after building projects, solving problems, making countless mistakes, and spending hundreds of hours learning, I've realized something important: learning Python isn't about memorizing syntax. It's about learning to think like a problem solver.",
      },
      {
        type: "p",
        text: "If I could go back and talk to my beginner self, these are the lessons I'd share. Hopefully, they'll help someone who's just starting their own journey.",
      },
      { type: "heading", text: "1. Stop trying to learn everything" },
      {
        type: "p",
        text: "This was my biggest mistake. I thought I needed to know every Python feature before I could build anything meaningful — lists, tuples, sets, dictionaries, decorators, generators, lambda functions, object-oriented programming. Every tutorial made it feel like I needed to master everything first.",
      },
      {
        type: "p",
        text: "I couldn't have been more wrong. You don't need to know everything to start building. Some of my biggest learning moments came after I started creating projects, not before. Building teaches what tutorials cannot.",
      },
      { type: "heading", text: "2. Projects teach faster than tutorials" },
      {
        type: "p",
        text: "Watching tutorials feels productive. Building projects actually is productive. There's a huge difference. When you're watching someone else code, everything makes sense. When you're staring at a blank screen trying to build your own idea, that's where real learning begins.",
      },
      {
        type: "p",
        text: "Every error message, every bug, every Google search, every failed attempt — those moments teach you more than ten hours of passive learning. Looking back, I wish I had started building much earlier.",
      },
      { type: "heading", text: "3. Errors are your best teachers" },
      {
        type: "p",
        text: "I used to hate seeing red error messages. Now I almost expect them. Every programmer writes broken code — the difference isn't who writes fewer bugs, it's who learns from them.",
      },
      {
        type: "p",
        text: "Instead of thinking \"why isn't this working?\", I slowly started asking \"what is Python trying to tell me?\" That tiny mindset shift made debugging much less frustrating.",
      },
      { type: "heading", text: "4. Python is just the beginning" },
      {
        type: "p",
        text: "Many beginners think: once I finish Python, I'll start AI. I used to think the same. Then I discovered that Python is only the foundation — after it comes an entire ecosystem: NumPy, Pandas, Matplotlib, Scikit-learn, PyTorch, TensorFlow, OpenCV, Hugging Face, FastAPI.",
      },
      {
        type: "p",
        text: "Learning Python doesn't mean you've learned AI. It means you've opened the first door. And honestly? That's exciting.",
      },
      { type: "heading", text: "5. Consistency beats motivation" },
      {
        type: "p",
        text: "Some days I felt incredibly motivated. Other days I didn't want to open my laptop. I kept waiting for motivation to magically appear — it rarely did.",
      },
      {
        type: "p",
        text: "Progress came from showing up anyway. Even one hour of focused practice every day compounds into something remarkable over months. Consistency may not feel exciting, but it's incredibly powerful.",
      },
      { type: "heading", text: "6. Build things that matter to you" },
      {
        type: "p",
        text: "Motivation lasts longer when your projects solve problems you genuinely care about. Instead of building random tutorial projects forever, I became interested in healthcare AI and intelligent systems. Suddenly, learning wasn't just about writing code, it became about solving real problems. That's a much stronger reason to keep going.",
      },
      { type: "heading", text: "7. Don't compare your chapter 1 to someone else's chapter 20" },
      {
        type: "p",
        text: "Social media makes it easy to feel behind — people getting internships, publishing research, winning hackathons, landing dream jobs. What you don't see are the months, or years, of effort behind those achievements.",
      },
      {
        type: "p",
        text: "Everyone starts somewhere. The only comparison that truly matters is whether you're improving compared to yesterday.",
      },
      { type: "heading", text: "8. AI isn't about fancy models" },
      {
        type: "p",
        text: "Before learning Python, I thought AI was all about deep neural networks. Now I realize most AI projects spend far more time understanding the problem, collecting data, cleaning data, and evaluating results than training massive models. A great solution starts with understanding the problem, not choosing the fanciest algorithm.",
      },
      { type: "heading", text: "9. Learn in public" },
      {
        type: "p",
        text: "For a long time, I believed I needed to become an expert before sharing anything. Now I think the opposite. Sharing what you're learning helps you organize your thoughts, receive feedback, build confidence, and connect with people on similar journeys. That's one of the reasons I'm writing this blog.",
      },
      { type: "heading", text: "10. Enjoy the journey" },
      {
        type: "p",
        text: "Technology changes constantly — new frameworks appear, new models are released. There will always be something else to learn. Instead of chasing the finish line, I've started appreciating the learning process itself. Because that's what engineering really is: being curious enough to keep asking questions.",
      },
      { type: "heading", text: "Final thoughts" },
      {
        type: "p",
        text: "If you're just starting Python, don't worry about becoming an AI expert overnight. Start small. Write simple programs. Build tiny projects. Break things. Fix them. Repeat.",
      },
      {
        type: "p",
        text: "One day you'll look back and realize how far you've come, not because you learned everything, but because you never stopped learning. I'm still at the beginning of my own journey, and there are countless concepts I haven't explored yet. But if there's one lesson I wish someone had told me earlier, it's this: don't wait until you feel ready. Build anyway. Learn anyway. Keep going anyway.",
      },
      {
        type: "p",
        text: "Because every expert programmer was once a beginner staring at a blinking cursor, wondering where to start. And maybe today, that's you.",
      },
    ],
  },
];

export default function Blog() {
  const [active, setActive] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="px-6 md:px-10 py-24 md:py-32 border-t border-line">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-4 mb-14">
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold text-bone tracking-tight">
              <TextScramble text="Field Notes" />
            </h2>
            <span className="font-[family-name:var(--font-data)] text-xs uppercase tracking-widest text-bone-dim">
              new entry, monthly
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div>
            {posts.map((p) => (
              <BlogRow key={p.title} post={p} onOpen={() => setActive(p)} />
            ))}
            <div className="border-t border-line py-8 flex items-center gap-3 text-bone-dim">
              <span className="w-1.5 h-1.5 rounded-full bg-line pulse-dot" />
              <span className="font-[family-name:var(--font-data)] text-xs uppercase tracking-widest">
                next entry — coming next month
              </span>
            </div>
          </div>
        </Reveal>
      </div>

      <AnimatePresence>
        {active && <BlogModal post={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
}
