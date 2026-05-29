import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Database, Layout, Server, Code, Zap, Compass, ArrowUpRight } from "lucide-react";
import { SERVICES_DATA } from "../../lib/data";
import ScrollReveal from "../ui/ScrollReveal";

/**
 * Services Section — redesigned as an interactive numbered list.
 *
 * Design language: tall horizontal rows with hover-expand animation.
 * Each row shows: index number · icon · title — and on hover slides
 * in the description + a right-aligned arrow. A gold accent line sweeps
 * from left on hover. Completely different from the card grids used elsewhere.
 */
export default function Services() {
  const iconMap = {
    database: Database,
    layout: Layout,
    server: Server,
    code: Code,
    zap: Zap,
    compass: Compass,
  };

  return (
    <section className="relative w-full bg-secondary-bg overflow-hidden select-none">

      {/* ── Top border ── */}
      <div className="border-t border-white/[0.05]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">

        {/* ══════════════════════════════
            Header
        ══════════════════════════════ */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 py-14 md:py-20 border-b border-white/[0.05]">
          <div className="flex flex-col gap-3">
            <ScrollReveal direction="up">
              <span className="text-[10px] font-mono tracking-[0.3em] text-primary-accent uppercase font-semibold">
                ✦ Services
              </span>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.08}>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-clash-display tracking-tight leading-[1.0] text-white">
                What I{" "}
                <span className="text-gradient italic">Offer.</span>
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="up" delay={0.16} className="sm:text-right">
            <p className="text-sm text-text-secondary font-light max-w-xs leading-relaxed">
              Six areas where I bring full end‑to‑end capability — from a blank
              repo to a live product.
            </p>
          </ScrollReveal>
        </div>

        {/* ══════════════════════════════
            Numbered service rows
        ══════════════════════════════ */}
        <div className="flex flex-col">
          {SERVICES_DATA.map((service, index) => {
            const Icon = iconMap[service.icon] || Code;
            const num = String(index + 1).padStart(2, "0");

            return (
              <ScrollReveal
                key={index}
                direction="up"
                delay={index * 0.05}
                className="w-full"
              >
                <motion.div
                  initial={false}
                  className="group relative flex items-center gap-4 sm:gap-6 md:gap-10 py-5 sm:py-7 md:py-9 border-b border-white/[0.05] cursor-default overflow-hidden transition-colors duration-300 hover:bg-white/[0.015] -mx-4 sm:-mx-6 md:-mx-12 px-4 sm:px-6 md:px-12"
                >
                  {/* Gold sweep accent line */}
                  <span className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary-accent to-secondary-accent scale-y-0 group-hover:scale-y-100 transition-transform duration-400 ease-out origin-top" />

                  {/* Index number */}
                  <span className="text-[11px] font-mono text-text-secondary/40 group-hover:text-primary-accent/70 transition-colors duration-300 shrink-0 w-6 text-right">
                    {num}
                  </span>

                  {/* Icon */}
                  <div className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.02] group-hover:border-primary-accent/30 group-hover:bg-primary-accent/[0.06] transition-all duration-300">
                    <Icon className="w-4 h-4 text-text-secondary group-hover:text-primary-accent transition-colors duration-300" />
                  </div>

                  {/* Title + Desc Column */}
                  <div className="flex-1 flex flex-col gap-1 md:gap-0 min-w-0">
                    <h3 className="text-base sm:text-lg md:text-2xl font-bold font-clash-display tracking-tight text-white group-hover:text-primary-accent transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="md:hidden text-xs text-text-secondary font-light leading-relaxed mt-1">
                      {service.description}
                    </p>
                  </div>

                  {/* Description — slides in on hover (desktop only) */}
                  <p className="hidden md:block text-sm text-text-secondary font-light leading-relaxed max-w-xs xl:max-w-sm opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-400 ease-out">
                    {service.description}
                  </p>

                  {/* Arrow */}
                  <div className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/[0.06] flex items-center justify-center transition-all duration-300 ease-out bg-primary-accent/[0.05] opacity-50 scale-90 md:opacity-0 md:scale-75 group-hover:opacity-100 group-hover:scale-100">
                    <ArrowUpRight className="w-4 h-4 text-primary-accent" />
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* ══════════════════════════════
            Bottom CTA strip
        ══════════════════════════════ */}
        <ScrollReveal direction="up" delay={0.15}>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-10 border-t border-white/[0.05] mt-0">
            <p className="text-xs font-mono tracking-[0.2em] text-text-secondary uppercase">
              Have a project in mind?
            </p>
            <a
              href="mailto:danishkhan.jsx@gmail.com"
              className="group inline-flex items-center gap-2.5 text-sm font-medium text-primary-accent hover:text-white transition-colors duration-300 font-mono tracking-wide"
            >
              Let's talk
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}


