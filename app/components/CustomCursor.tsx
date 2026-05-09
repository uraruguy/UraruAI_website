"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Only activate on pointer:fine (mouse) devices
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let mouseX = 0;
    let mouseY = 0;
    let dotX = 0;
    let dotY = 0;
    let ringX = 0;
    let ringY = 0;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!visible) setVisible(true);
    };

    window.addEventListener("mousemove", onMouseMove);

    const tick = () => {
      // Dot: fast follow (lerp factor 0.28)
      dotX += (mouseX - dotX) * 0.28;
      dotY += (mouseY - dotY) * 0.28;

      // Ring: slower follow (lerp factor 0.1)
      ringX += (mouseX - ringX) * 0.1;
      ringY += (mouseY - ringY) * 0.1;

      dot.style.transform = `translate(${dotX - 3}px, ${dotY - 3}px)`;
      ring.style.transform = `translate(${ringX - 12}px, ${ringY - 12}px)`;

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* Small dot — fast */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none hidden md:block"
        style={{
          zIndex: 9999,
          width: 6,
          height: 6,
          borderRadius: "50%",
          backgroundColor: "#00C4CF",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.2s",
        }}
      />

      {/* Ring — slow */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none hidden md:block"
        style={{
          zIndex: 9999,
          width: 24,
          height: 24,
          borderRadius: "50%",
          border: "1px solid #00C4CF",
          opacity: visible ? 0.6 : 0,
          transition: "opacity 0.2s",
        }}
      />
    </>
  );
}
