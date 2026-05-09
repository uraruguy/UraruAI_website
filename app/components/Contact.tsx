"use client";

import { motion } from "framer-motion";
import { CALENDLY_URL } from "../config";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-40 px-6 border-t border-white/5 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[400px] bg-[#00C4CF]/5 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs font-mono text-[#00C4CF] tracking-[0.2em] uppercase">
            — Direct line
          </span>
          <h2 className="mt-5 text-5xl md:text-6xl lg:text-7xl font-bold text-[#F0EDE4] tracking-tight leading-[1.05]">
            Let&apos;s talk
            <br />
            <span className="text-[#00C4CF]">with Jakob.</span>
          </h2>
          <p className="mt-6 text-[#888888] text-base leading-relaxed">
            No forms. No gatekeeping. Just reach out directly.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-8 py-4 bg-[#00C4CF] text-[#0D0D0D] font-semibold rounded-md hover:bg-[#00b3bd] transition-colors duration-200 text-sm"
            >
              Book a Call
              <span className="group-hover:translate-x-0.5 transition-transform duration-200">→</span>
            </a>
            <a
              href="mailto:jakob.kavci@gmail.com"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#00C4CF]/8 border border-[#00C4CF]/25 text-[#00C4CF] font-mono text-sm rounded-md hover:bg-[#00C4CF]/15 hover:border-[#00C4CF]/50 transition-all duration-300"
            >
              jakob.kavci@gmail.com
              <span className="opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200">→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
