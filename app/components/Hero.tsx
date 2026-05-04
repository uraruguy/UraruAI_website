"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ParticleCanvas from "./ParticleCanvas";

const TYPEWRITER_TEXT = "We ship it.";

export default function Hero() {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const delay = 1200;
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setDisplayed(TYPEWRITER_TEXT.slice(0, i));
        if (i >= TYPEWRITER_TEXT.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, 80);
      return () => clearInterval(interval);
    }, delay);
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
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-2 mb-8"
        >
          <span className="text-[#00C4CF] font-mono">—</span>
          <span className="text-xs font-mono text-[#888888] tracking-[0.25em] uppercase">
            AI Infrastructure Agency
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-4"
        >
          <span className="text-[#F0EDE4] block">Most agencies talk about AI.</span>
          <span className="text-[#00C4CF] block mt-2">
            {displayed}
            <span
              className={`inline-block w-[3px] h-[0.85em] bg-[#00C4CF] ml-1 align-middle cursor-blink ${done ? "" : "opacity-100"}`}
            />
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 text-lg md:text-xl text-[#888888] max-w-2xl mx-auto leading-relaxed"
        >
          From messy spreadsheets to intelligent systems — built, integrated,
          and running in weeks.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group flex items-center gap-2 px-7 py-3.5 bg-[#00C4CF] text-[#0D0D0D] font-semibold rounded-md hover:bg-[#00b3bd] transition-colors duration-200 text-sm"
          >
            Book a Discovery Call
            <span className="group-hover:translate-x-0.5 transition-transform duration-200">
              →
            </span>
          </a>
          <a
            href="#work"
            className="flex items-center gap-2 px-7 py-3.5 border border-white/20 text-[#F0EDE4] font-medium rounded-md hover:border-white/40 hover:bg-white/5 transition-all duration-200 text-sm"
          >
            See our work
            <span>↓</span>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-[#888888] tracking-widest uppercase font-mono">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-[#888888] to-transparent" />
      </motion.div>
    </section>
  );
}
