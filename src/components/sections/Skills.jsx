import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SKILLS_DATA } from "../../lib/data";
import SkillCard from "../ui/SkillCard";

/**
 * Skills Section — editorial layout with numbered sidebar tabs.
 */
export default function Skills() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax is applied to a wrapper div, NOT the animated motion.h2,
  // so the two motion systems never conflict.
  const parallaxY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const categories = [
    { key: "frontend", label: "01  Frontend", data: SKILLS_DATA.frontend },
    { key: "backend",  label: "02  Backend",  data: SKILLS_DATA.backend  },
    { key: "deployment", label: "03  DevOps", data: SKILLS_DATA.deployment },
  ];

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] },
  });

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 md:py-36 bg-secondary-bg overflow-hidden select-none"
    >
      {/* ── Ambient orbs ── */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-1/4 w-[500px] h-[500px] rounded-full bg-primary-accent/[0.04] blur-[120px]" />
        <div className="absolute -right-32 bottom-1/4 w-[400px] h-[400px] rounded-full bg-secondary-accent/[0.05] blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col gap-20 md:gap-28">

        {/* ── Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          {/* Left: label + big headline inside a parallax wrapper */}
          <div className="flex flex-col gap-4">
            <motion.span {...fadeUp(0)} className="text-[10px] uppercase font-mono tracking-[0.3em] text-primary-accent font-semibold">
              ✦ Capabilities
            </motion.span>

            {/* Parallax wrapper — separate from the entrance animation */}
            <motion.div style={{ y: parallaxY }}>
              <motion.h2
                {...fadeUp(0.08)}
                className="text-4xl sm:text-5xl md:text-6xl font-bold font-clash-display tracking-tight text-white leading-[1.08]"
              >
                My <span className="text-gradient">Tech</span>
                <br />
                <span className="text-gradient">Stack.</span>
              </motion.h2>
            </motion.div>
          </div>

          {/* Right: description */}
          <motion.div
            {...fadeUp(0.15)}
            className="flex flex-col gap-3 lg:text-right lg:max-w-sm"
          >
            <p className="text-sm text-text-secondary font-light leading-relaxed">
              A curated set of tools &amp; technologies I reach for to ship
              fast, scale cleanly, and maintain with confidence.
            </p>
            <span className="w-16 h-px bg-gradient-to-r from-primary-accent to-transparent lg:ml-auto" />
          </motion.div>
        </div>

        {/* ── Category rows ── */}
        <div className="flex flex-col gap-8 md:gap-10">
          {categories.map(({ key, label, data }, idx) => (
            <motion.div
              key={key}
              {...fadeUp(idx * 0.08)}
              className="flex flex-col md:flex-row gap-5 md:gap-8 items-stretch"
            >
              {/* Sidebar tab */}
              <div className="flex md:flex-col items-center md:items-start gap-3 md:w-28 shrink-0 pt-1">
                <span className="text-[10px] font-mono tracking-[0.2em] text-text-secondary uppercase whitespace-nowrap">
                  {label}
                </span>
                <div className="flex-1 md:flex-none md:h-full w-full md:w-px h-px bg-white/[0.06]" />
              </div>

              {/* Skill card */}
              <div className="flex-1 min-w-0">
                <SkillCard categoryKey={key} data={data} className="h-full" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
