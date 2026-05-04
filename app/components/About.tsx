"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-28 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-mono text-[#00C4CF] tracking-[0.2em] uppercase">
              — About
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#F0EDE4] tracking-tight leading-tight">
              Built by someone who speaks both business and code.
            </h2>
            <div className="mt-6 space-y-4 text-[#888888] text-base leading-relaxed">
              <p>
                I'm Jakob — the founder of Uraru AI. I started this agency
                because I kept seeing the same pattern: businesses knew they
                needed AI, but every agency they talked to either oversold
                vague "AI strategy" or under-delivered clunky automations.
              </p>
              <p>
                Uraru AI is different. We sit at the intersection of technical
                depth and business pragmatism. I personally scope every
                engagement, write most of the code, and stay close to delivery
                — because your timeline and budget matter as much as the
                output.
              </p>
              <p>
                We don't pitch decks. We ship systems.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              {["Next.js", "Python", "LangChain", "OpenAI", "n8n", "Supabase"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-mono bg-white/5 text-[#888888] rounded-md border border-white/5"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </motion.div>

          {/* Right: Visual card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="relative p-8 rounded-2xl bg-[#111111] border border-white/5 overflow-hidden">
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#00C4CF]/5 rounded-full blur-3xl" />

              <div className="relative z-10">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 64 64"
                  fill="none"
                  className="mb-6"
                >
                  <path
                    d="M10 10 L10 36 Q10 56 32 56 Q54 56 54 36 L54 10"
                    stroke="#00C4CF"
                    strokeWidth="7"
                    strokeLinecap="round"
                  />
                  <circle cx="32" cy="10" r="5" fill="#00C4CF" />
                </svg>

                <blockquote className="text-[#F0EDE4] text-xl font-medium leading-relaxed mb-6">
                  "Most AI projects fail not because the technology doesn't
                  work — but because no one bridged the gap between the tool
                  and the team."
                </blockquote>

                <div className="flex items-center gap-3 pt-5 border-t border-white/5">
                  <div className="w-10 h-10 rounded-full bg-[#00C4CF]/20 border border-[#00C4CF]/40 flex items-center justify-center text-[#00C4CF] font-bold text-sm">
                    J
                  </div>
                  <div>
                    <div className="text-sm font-medium text-[#F0EDE4]">
                      Jakob Kavčič
                    </div>
                    <div className="text-xs text-[#888888]">
                      Founder, Uraru AI
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
