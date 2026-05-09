"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { UraruLogo } from "./Logo";
import { CALENDLY_URL } from "../config";

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
          ? "bg-black/60 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="group opacity-90 hover:opacity-100 transition-opacity duration-200"
          style={{ filter: "drop-shadow(0 0 0px transparent)", transition: "filter 0.2s" }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.filter =
              "drop-shadow(0 0 8px rgba(0,196,207,0.35))";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.filter =
              "drop-shadow(0 0 0px transparent)";
          }}
        >
          <UraruLogo width={130} />
        </a>

        {/* Center Links */}
        <div className="hidden md:flex items-center gap-8">
          {["Work", "Services"].map((link) => (
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
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center px-4 py-2 text-sm font-medium text-[#00C4CF] border border-[#00C4CF] rounded-md hover:bg-[#00C4CF]/10 transition-colors duration-200"
        >
          Book a Call
        </a>
      </div>
    </motion.nav>
  );
}
