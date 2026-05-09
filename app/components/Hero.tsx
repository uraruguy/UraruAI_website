"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ParticleCanvas from "./ParticleCanvas";
import { CALENDLY_URL } from "../config";

const FULL_TEXT = "We build AI infrastructure for businesses that are serious about it.";

// Pre-computed colored segments [start, end, isAccent]
const SEGMENTS: [number, number, boolean][] = [
  [0, 9, false],              // "We build "
  [9, 11, true],              // "AI"
  [11, 12, false],            // " "
  [12, 26, true],             // "infrastructure"
  [26, FULL_TEXT.length, false], // rest
];

function renderColored(displayed: string) {
  return SEGMENTS.map(([start, end, isAccent], i) => {
    if (displayed.length <= start) return null;
    const slice = displayed.slice(start, Math.min(end, displayed.length));
    if (!slice) return null;
    return (
      <span key={i} className={isAccent ? "text-[#00C4CF]" : "text-[#F0EDE4]"}>
        {slice}
      </span>
    );
  });
}

export default function Hero() {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setDisplayed(FULL_TEXT.slice(0, i));
        if (i >= FULL_TEXT.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, 50);
      return () => clearInterval(interval);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <ParticleCanvas />

      {/* Gradient vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(13,13,13,0.7) 100%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* H1 — letter-by-letter typewriter */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-4"
        >
          {renderColored(displayed)}
          <span
            className={`inline-block w-[3px] h-[0.85em] bg-[#F0EDE4] ml-1 align-middle ${done ? "opacity-0" : "cursor-blink"}`}
          />
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 text-lg md:text-xl text-[#888888] max-w-2xl mx-auto leading-relaxed"
        >
          Custom platforms, automated workflows, real integrations — built and
          deployed, not just demoed.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-7 py-3.5 bg-[#00C4CF] text-[#0D0D0D] font-semibold rounded-md hover:bg-[#00b3bd] transition-all duration-200 text-sm hover:shadow-[0_0_20px_rgba(0,196,207,0.3)]"
          >
            Book a Discovery Call
            <span className="group-hover:translate-x-0.5 transition-transform duration-200">
              →
            </span>
          </a>
          <a
            href="#work"
            className="flex items-center gap-2 px-7 py-3.5 border border-white/20 text-[#F0EDE4] font-medium rounded-md hover:border-[#00C4CF]/40 hover:bg-white/5 transition-all duration-200 text-sm hover:shadow-[0_0_20px_rgba(0,196,207,0.15)]"
          >
            See our work
            <span>↓</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
