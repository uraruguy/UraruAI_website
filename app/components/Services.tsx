"use client";

import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "AI Infrastructure",
    subtitle: "Build the foundation",
    description:
      "Design and deploy the AI backbone your business needs — model selection, API integration, data pipelines, and production-grade reliability.",
    bullets: [
      "LLM integration & orchestration",
      "RAG pipelines & vector databases",
      "API design & deployment",
      "Monitoring & observability",
    ],
  },
  {
    number: "02",
    title: "Process Automation",
    subtitle: "Eliminate manual work",
    description:
      "Turn your most repetitive, error-prone workflows into automated systems that run in the background — reliably, at scale.",
    bullets: [
      "Workflow analysis & mapping",
      "AI agent design & build",
      "Integration with existing tools",
      "Ongoing optimization",
    ],
  },
  {
    number: "03",
    title: "Custom Platforms",
    subtitle: "End-to-end development",
    description:
      "Full-stack custom software that fits your business exactly — designed, built, and shipped by a team that understands both AI and product.",
    bullets: [
      "Product design & scoping",
      "Full-stack development",
      "AI feature integration",
      "Handoff & documentation",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 px-6 border-t border-white/5">
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
            — Services
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#F0EDE4] tracking-tight max-w-xl">
            What we build for you
          </h2>
        </motion.div>

        {/* Service columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={svc.number}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="flex flex-col"
            >
              {/* Number fades in first */}
              <motion.div
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { duration: 0.5, delay: i * 0.12 },
                  },
                }}
                className="text-5xl font-bold text-white/10 font-mono mb-4 select-none"
              >
                {svc.number}
              </motion.div>

              {/* Title slides up after number */}
              <motion.h3
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4, delay: i * 0.12 + 0.28 },
                  },
                }}
                className="text-xl font-semibold text-[#F0EDE4] mb-1"
              >
                {svc.title}
              </motion.h3>

              {/* Rest fades in after title */}
              <motion.div
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { duration: 0.4, delay: i * 0.12 + 0.45 },
                  },
                }}
                className="flex flex-col flex-1"
              >
                <p className="text-sm text-[#00C4CF] mb-4 font-mono tracking-wide">
                  {svc.subtitle}
                </p>
                <p className="text-[#888888] text-sm leading-relaxed mb-6">
                  {svc.description}
                </p>
                <ul className="space-y-2 mt-auto">
                  {svc.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-2.5 text-sm text-[#888888]"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#00C4CF] shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
