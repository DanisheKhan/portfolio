import React, { useRef } from "react";
import { TESTIMONIALS_DATA } from "../../lib/data";
import ScrollReveal from "../ui/ScrollReveal";

/**
 * Testimonials — redesigned as a dual infinite marquee.
 *
 * Two rows scroll in opposite directions using pure CSS animation.
 * Each item is a compact quote pill. Pauses on hover.
 * No drag, no cards, no glass — completely different from all other sections.
 */
export default function Testimonials() {
  // Duplicate the data so the loop is seamless
  const row1 = [...TESTIMONIALS_DATA, ...TESTIMONIALS_DATA];
  const row2 = [...TESTIMONIALS_DATA, ...TESTIMONIALS_DATA].reverse();

  return (
    <section className="relative w-full bg-secondary-bg overflow-hidden select-none border-t border-white/[0.05]">

      {/* ── Header ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 py-14 md:py-20 border-b border-white/[0.05]">
          <div className="flex flex-col gap-3">
            <ScrollReveal direction="up">
              <span className="text-[10px] font-mono tracking-[0.3em] text-primary-accent uppercase font-semibold">
                ✦ Reviews
              </span>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.08}>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-clash-display tracking-tight leading-[1.0] text-white">
                Kind{" "}
                <span className="text-gradient italic">Words.</span>
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal direction="up" delay={0.16} className="sm:text-right">
            <p className="text-sm text-text-secondary font-light max-w-xs leading-relaxed">
              From peers, clients, and collaborators who've worked with me directly.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* ── Marquee rows ── */}
      <ScrollReveal direction="up" delay={0.12}>
        <div className="py-10 md:py-14 flex flex-col gap-5">

          {/* Row 1 — scrolls left */}
          <div className="relative overflow-hidden">
            {/* Left & right fade masks */}
            <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none"
              style={{ background: "linear-gradient(90deg, #111112 0%, transparent 100%)" }} />
            <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none"
              style={{ background: "linear-gradient(-90deg, #111112 0%, transparent 100%)" }} />

            <div className="flex gap-5 marquee-left hover:[animation-play-state:paused]">
              {row1.map((item, i) => (
                <QuotePill key={i} item={item} />
              ))}
            </div>
          </div>

          {/* Row 2 — scrolls right */}
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none"
              style={{ background: "linear-gradient(90deg, #111112 0%, transparent 100%)" }} />
            <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none"
              style={{ background: "linear-gradient(-90deg, #111112 0%, transparent 100%)" }} />

            <div className="flex gap-5 marquee-right hover:[animation-play-state:paused]">
              {row2.map((item, i) => (
                <QuotePill key={i} item={item} />
              ))}
            </div>
          </div>

        </div>
      </ScrollReveal>

    </section>
  );
}

function QuotePill({ item }) {
  return (
    <div className="shrink-0 flex flex-col gap-4 px-6 py-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-primary-accent/20 hover:bg-white/[0.04] transition-all duration-300 w-[300px] md:w-[360px]">
      {/* Quote */}
      <p className="text-sm text-text-secondary leading-relaxed font-light line-clamp-2">
        "{item.quote}"
      </p>

      {/* Divider */}
      <div className="h-px bg-white/[0.05]" />

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full overflow-hidden border border-white/[0.08] bg-white/[0.04] shrink-0">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-bold text-white font-clash-display">
            {item.name}
          </span>
          <span className="text-[10px] font-mono text-text-secondary">
            {item.role}
          </span>
        </div>
        {/* Quote mark accent */}
        <span className="ml-auto text-primary-accent/30 text-2xl font-serif leading-none">
          "
        </span>
      </div>
    </div>
  );
}
