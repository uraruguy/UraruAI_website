"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, type Variants } from "framer-motion";

const caseStudies = [
  {
    title: "Automated Content Pipeline",
    description:
      "Built an end-to-end AI agent that ingests raw briefs and publishes formatted, SEO-ready content across multiple channels — zero manual steps.",
    tags: ["AI Agents"],
    countTo: 12,
    countSuffix: "×",
    countPrefix: "",
    metricRest: " faster",
    metricLabel: "content output",
  },
  {
    title: "Canva Brochure Automation",
    description:
      "Automated the creation of hundreds of branded brochures from a data feed, replacing days of design work with a single workflow trigger.",
    tags: ["Workflow"],
    countTo: 1,
    countSuffix: " hour",
    countPrefix: "8 hours → ",
    metricRest: "",
    metricLabel: "per batch",
  },
  {
    title: "Enterprise Operations Platform",
    description:
      "Custom internal platform connecting disparate systems into a single intelligent operations layer, with AI-assisted decision support.",
    tags: ["Custom Platform"],
    countTo: null,
    countSuffix: "",
    countPrefix: "",
    metricRest: "One platform",
    metricLabel: "all systems unified",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function useCountUp(target: number, duration = 1600, trigger = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger || target === null) return;
    let start: number | null = null;

    const step = (ts: number) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [trigger, target, duration]);

  return count;
}

function MetricDisplay({
  cs,
  triggered,
}: {
  cs: (typeof caseStudies)[0];
  triggered: boolean;
}) {
  const count = useCountUp(cs.countTo ?? 0, 1600, triggered && cs.countTo !== null);

  if (cs.countTo === null) {
    return <div className="text-xl font-bold text-[#00C4CF]">{cs.metricRest}</div>;
  }

  return (
    <div className="text-xl font-bold text-[#00C4CF]">
      {cs.countPrefix}
      {triggered ? count : 0}
      {cs.countSuffix}
      {cs.metricRest}
    </div>
  );
}

export default function Work() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section id="work" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs font-mono text-[#00C4CF] tracking-[0.2em] uppercase">
            — Selected Work
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#F0EDE4] tracking-tight">
            What we've shipped
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          ref={sectionRef}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {caseStudies.map((cs) => (
            <motion.div
              key={cs.title}
              variants={item}
              className="group relative flex flex-col p-7 rounded-xl bg-[#111111] border border-white/5 hover:border-[#00C4CF]/40 transition-all duration-300 hover:-translate-y-1 hover:bg-[#111111]/80"
            >
              {/* Top border that lights up on hover */}
              <div className="absolute inset-x-0 top-0 h-[2px] rounded-t-xl bg-gradient-to-r from-transparent via-[#00C4CF]/0 to-transparent group-hover:via-[#00C4CF]/80 transition-all duration-300" />

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {cs.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-2.5 py-1 text-xs rounded-md font-mono tracking-wide ${
                      tag === "NDA"
                        ? "bg-white/5 text-[#888888]"
                        : "bg-[#00C4CF]/10 text-[#00C4CF]"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-lg font-semibold text-[#F0EDE4] mb-3 leading-snug">
                {cs.title}
              </h3>
              <p className="text-[#888888] text-sm leading-relaxed flex-1">
                {cs.description}
              </p>

              {/* Metric */}
              <div className="mt-6 pt-5 border-t border-white/5">
                <MetricDisplay cs={cs} triggered={inView} />
                <div className="text-xs text-[#888888] mt-0.5">
                  {cs.metricLabel}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
