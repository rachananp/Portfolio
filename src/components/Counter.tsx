"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

export default function Counter({
  from = 0,
  to,
  duration = 1.6,
  format = (n: number) => Math.round(n).toString(),
  className,
}: {
  from?: number;
  to: number;
  duration?: number;
  format?: (n: number) => string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(format(from));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(from, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(v) {
        setDisplay(format(v));
      },
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
