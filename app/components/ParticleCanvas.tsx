"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  phase: number;
  speed: number;
  size: number;
}

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      buildParticles();
    };

    const buildParticles = () => {
      const cols = Math.floor(canvas.width / 40);
      const rows = Math.floor(canvas.height / 40);
      particlesRef.current = [];
      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          particlesRef.current.push({
            x: (i / cols) * canvas.width,
            y: (j / rows) * canvas.height,
            phase: Math.random() * Math.PI * 2,
            speed: 0.3 + Math.random() * 0.4,
            size: 1 + Math.random() * 0.8,
          });
        }
      }
    };

    resize();
    window.addEventListener("resize", resize);

    let t = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.008;

      for (const p of particlesRef.current) {
        const dy = Math.sin(t * p.speed + p.phase) * 3;
        const opacity = 0.08 + Math.sin(t * p.speed + p.phase) * 0.04;

        ctx.beginPath();
        ctx.arc(p.x, p.y + dy, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 196, 207, ${opacity})`;
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}
