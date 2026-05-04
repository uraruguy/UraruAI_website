"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 px-6 border-t border-white/5 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] bg-[#00C4CF]/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs font-mono text-[#00C4CF] tracking-[0.2em] uppercase">
            — Let's work together
          </span>
          <h2 className="mt-4 text-5xl md:text-6xl lg:text-7xl font-bold text-[#F0EDE4] tracking-tight leading-[1.05] mb-6">
            Ready to ship?
          </h2>
          <p className="text-[#888888] text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Tell us what you're building — or what's slowing you down. We'll
            figure out the fastest path forward together.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://cal.com/jakob-kavci"
              className="group flex items-center gap-2 px-8 py-4 bg-[#00C4CF] text-[#0D0D0D] font-semibold rounded-md hover:bg-[#00b3bd] transition-colors duration-200 text-sm"
            >
              Book a Discovery Call
              <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                →
              </span>
            </a>
            <a
              href="mailto:jakob.kavci@gmail.com"
              className="flex items-center gap-2 px-8 py-4 border border-white/20 text-[#F0EDE4] font-medium rounded-md hover:border-white/40 hover:bg-white/5 transition-all duration-200 text-sm"
            >
              jakob.kavci@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
