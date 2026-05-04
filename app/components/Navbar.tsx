"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0D0D0D]/90 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo + Wordmark */}
        <a href="#" className="flex items-center gap-3 group">
          <svg width="40" height="40" viewBox="0 0 64 64" fill="none">
            <path
              d="M10 10 L10 36 Q10 56 32 56 Q54 56 54 36 L54 10"
              stroke="#00C4CF"
              strokeWidth="7"
              strokeLinecap="round"
            />
            <circle cx="32" cy="10" r="5" fill="#00C4CF" />
          </svg>
          <span className="font-semibold text-lg text-[#F0EDE4] tracking-tight group-hover:text-[#00C4CF] transition-colors duration-200">
            Uraru AI
          </span>
        </a>

        {/* Center Links */}
        <div className="hidden md:flex items-center gap-8">
          {["Work", "Services", "About"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-[#888888] hover:text-[#F0EDE4] transition-colors duration-200 tracking-wide"
            >
              {link}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:flex items-center px-4 py-2 text-sm font-medium text-[#00C4CF] border border-[#00C4CF] rounded-md hover:bg-[#00C4CF]/10 transition-colors duration-200"
        >
          Book a Call
        </a>
      </div>
    </motion.nav>
  );
}
