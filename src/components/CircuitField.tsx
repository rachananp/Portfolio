"use client";

import { useEffect, useRef } from "react";

export default function CircuitField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const GAP = 48;
    let nodes: { x: number; y: number }[] = [];

    function setup() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = width + "px";
      canvas!.style.height = height + "px";
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      nodes = [];
      const cols = Math.ceil(width / GAP) + 1;
      const rows = Math.ceil(height / GAP) + 1;
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          nodes.push({ x: i * GAP, y: j * GAP });
        }
      }
    }
    setup();

    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    const onLeave = () => {
      mouse.current.x = -9999;
      mouse.current.y = -9999;
    };
    let resizeRaf: number;
    const onResize = () => {
      cancelAnimationFrame(resizeRaf);
      resizeRaf = requestAnimationFrame(setup);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseout", onLeave);
    window.addEventListener("resize", onResize);

    let raf: number;
    const RADIUS = 200;

    function draw() {
      ctx!.clearRect(0, 0, width, height);
      const mx = mouse.current.x;
      const my = mouse.current.y;

      for (const n of nodes) {
        const dx = n.x - mx;
        const dy = n.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < RADIUS) {
          const t = 1 - dist / RADIUS;
          ctx!.beginPath();
          ctx!.arc(n.x, n.y, 1 + t * 2.4, 0, Math.PI * 2);
          ctx!.fillStyle = `rgba(255,90,54,${t * 0.85})`;
          ctx!.fill();

          if (t > 0.35) {
            ctx!.beginPath();
            ctx!.moveTo(n.x, n.y);
            ctx!.lineTo(mx, my);
            ctx!.strokeStyle = `rgba(108,140,255,${(t - 0.35) * 0.35})`;
            ctx!.lineWidth = 1;
            ctx!.stroke();
          }
        } else {
          ctx!.beginPath();
          ctx!.arc(n.x, n.y, 1, 0, Math.PI * 2);
          ctx!.fillStyle = "rgba(243,239,231,0.045)";
          ctx!.fill();
        }
      }
      raf = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      cancelAnimationFrame(raf);
      cancelAnimationFrame(resizeRaf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" aria-hidden />;
}
