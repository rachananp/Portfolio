"use client";

import { useEffect, useRef, useState } from "react";
import type { ElementType } from "react";

const CHARS = "!<>-_\\/[]{}—=+*^?#01";

export default function TextScramble({
  text,
  className,
  as = "span",
  trigger = "view",
  speed = 28,
  delay = 0,
}: {
  text: string;
  className?: string;
  as?: ElementType;
  trigger?: "view" | "mount";
  speed?: number;
  delay?: number;
}) {
  const [display, setDisplay] = useState(trigger === "mount" ? "" : text);
  const ref = useRef<HTMLElement | null>(null);
  const started = useRef(false);
  const Tag = as;

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    let startTimer: ReturnType<typeof setTimeout>;

    const run = () => {
      if (started.current) return;
      started.current = true;
      startTimer = setTimeout(() => {
        let frame = 0;
        const totalFrames = text.length * 2.4;
        interval = setInterval(() => {
          frame++;
          const revealCount = Math.floor((frame / totalFrames) * text.length);
          let out = "";
          for (let i = 0; i < text.length; i++) {
            if (text[i] === " ") {
              out += " ";
            } else if (i < revealCount) {
              out += text[i];
            } else {
              out += CHARS[Math.floor(Math.random() * CHARS.length)];
            }
          }
          setDisplay(out);
          if (frame >= totalFrames) {
            setDisplay(text);
            clearInterval(interval);
          }
        }, speed);
      }, delay);
    };

    if (trigger === "mount") {
      run();
      return () => {
        clearInterval(interval);
        clearTimeout(startTimer);
      };
    }

    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && run()),
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      clearInterval(interval);
      clearTimeout(startTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, trigger, speed, delay]);

  return (
    <Tag ref={ref} className={className}>
      {display}
    </Tag>
  );
}
