import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SKILLS_DATA } from "../../lib/data";
import SkillCard from "../ui/SkillCard";

/**
 * Skills Section — redesigned with a dramatic editorial layout:
 * - Bold numbered category tabs on the left sidebar
 * - Animated gradient orbs behind the grid
 * - Scroll-driven parallax on the accent headline
 * - Staggered card entrance with framer-motion
 */
export default function Skills() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const headlineY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  const categories = [
    { key: "frontend", label: "01  Frontend", data: SKILLS_DATA.frontend },
    { key: "backend", label: "02  Backend", data: SKILLS_DATA.backend },
    { key: "deployment", label: "03  DevOps", data: SKILLS_DATA.deployment },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 md:py-36 bg-secondary-bg overflow-hidden select-none"
    >
      {/* ─── Ambient background orbs ─── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-1/4 w-[500px] h-[500px] rounded-full bg-primary-accent/[0.04] blur-[120px]" />
        <div className="absolute -right-32 bottom-1/4 w-[400px] h-[400px] rounded-full bg-secondary-accent/[0.05] blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col gap-20 md:gap-28">

        {/* ─── Section Header ─── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          {/* Left: eyebrow + big number */}
          <div className="flex flex-col gap-4">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[10px] uppercase font-mono tracking-[0.3em] text-primary-accent font-semibold"
            >
              ✦ Capabilities
            </motion.span>

            <div className="overflow-hidden">
              <motion.h2
                style={{ y: headlineY }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold font-clash-display tracking-tight text-white leading-[1.05]"
              >
                My{" "}
                <span className="text-gradient">Tech</span>
                <br />
                <span className="text-gradient">Stack.</span>
              </motion.h2>
            </div>
          </div>

          {/* Right: thin description + decorative line */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-3 lg:text-right lg:max-w-sm"
          >
            <p className="text-sm text-text-secondary font-light leading-relaxed">
              A curated set of tools &amp; technologies I reach for to ship
              fast, scale cleanly, and maintain with confidence.
            </p>
            <span className="w-16 h-px bg-gradient-to-r from-primary-accent to-transparent lg:ml-auto" />
          </motion.div>
        </div>

        {/* ─── Category blocks ─── */}
        <div className="flex flex-col gap-8 md:gap-10">
          {categories.map(({ key, label, data }, idx) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: idx * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col md:flex-row gap-5 md:gap-8 items-stretch"
            >
              {/* Sidebar tab */}
              <div className="flex md:flex-col items-center md:items-start gap-3 md:w-28 shrink-0 pt-1">
                <span className="text-[10px] font-mono tracking-[0.2em] text-text-secondary uppercase whitespace-nowrap">
                  {label}
                </span>
                <div className="flex-1 md:flex-none md:h-full w-full md:w-px h-px bg-white/[0.06]" />
              </div>

              {/* The card */}
              <div className="flex-1">
                <SkillCard
                  categoryKey={key}
                  data={data}
                  className="h-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* CSS for spotlight effect applied in SkillCard */}
      <style>{`
        .skill-panel {
          --mx: 50%;
          --my: 50%;
        }
        .skill-panel:hover .skill-spotlight {
          opacity: 1;
          background: radial-gradient(
            400px circle at var(--mx) var(--my),
            rgba(197,168,128,0.06) 0%,
            transparent 70%
          );
        }
        .skill-spotlight {
          transition: opacity 0.4s ease;
        }
      `}</style>
    </section>
  );
}
