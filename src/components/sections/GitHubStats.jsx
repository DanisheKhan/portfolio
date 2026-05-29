import React, { useRef, useEffect, useState } from "react";
import { GitBranch, Star, BookOpen, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGithubData } from "../../hooks/useGithubData";
import ScrollReveal from "../ui/ScrollReveal";

gsap.registerPlugin(ScrollTrigger);

/**
 * GitHubStats — redesigned as a full editorial data section.
 *
 * Layout:
 * - Header strip with section tag + GitHub handle link
 * - 4 large animated counter stats in a horizontal row
 * - Full-width heatmap with gold-tinted contributions
 * - Language breakdown as horizontal fact rows (not bar chart)
 */
export default function GitHubStats() {
  const { data, loading } = useGithubData("DanisheKhan");
  const sectionRef = useRef(null);

  // Gold-tinted cell levels instead of pure green
  const cellLevels = [
    "bg-white/[0.04]",
    "bg-primary-accent/20",
    "bg-primary-accent/35",
    "bg-primary-accent/55",
    "bg-primary-accent/80",
  ];

  const daysGrid = loading || !data
    ? Array.from({ length: 182 }, () => cellLevels[0])
    : data.dailyCounts.map((c) => {
        if (c === 0) return cellLevels[0];
        if (c < 3)  return cellLevels[1];
        if (c < 6)  return cellLevels[2];
        if (c < 10) return cellLevels[3];
        return cellLevels[4];
      });

  const stats = [
    {
      label: "Contributions",
      sub: "Total",
      icon: <GitBranch className="w-4 h-4" />,
      raw: data?.totalContributions || 0,
    },
    {
      label: "Repositories",
      sub: "Public",
      icon: <BookOpen className="w-4 h-4" />,
      raw: data?.publicRepos || 0,
    },
    {
      label: "Day Streak",
      sub: "Current",
      icon: <Star className="w-4 h-4" />,
      raw: data?.currentStreak || 0,
    },
    {
      label: "Day Streak",
      sub: "Longest",
      icon: <Star className="w-4 h-4" />,
      raw: data?.longestStreak || 0,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-primary-bg overflow-hidden select-none border-t border-white/[0.05]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">

        {/* ══ Header strip ══ */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 py-8 sm:py-12 border-b border-white/[0.05]">
          <div className="flex flex-col gap-1.5">
            <ScrollReveal direction="up">
              <span className="text-[10px] font-mono tracking-[0.3em] text-primary-accent uppercase font-semibold">
                ✦ Metrics
              </span>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.08}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-clash-display tracking-tight leading-[1.0] text-white">
                GitHub <span className="text-gradient italic">Activity.</span>
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="up" delay={0.16}>
            <a
              href="https://github.com/DanisheKhan"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.2em] text-text-secondary hover:text-primary-accent transition-colors duration-300 uppercase"
            >
              @DanisheKhan
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </ScrollReveal>
        </div>

        {/* ══ Stats row ══ */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-b border-white/[0.05]">
          {stats.map((s, i) => (
            <ScrollReveal
              key={i}
              direction="up"
              delay={i * 0.05}
              className={`flex flex-col gap-2 py-7 sm:py-10 px-4 sm:px-6 border-white/[0.05] ${
                i % 2 === 0 ? "border-r" : "border-r-0"
              } ${
                i < 3 ? "md:border-r" : "md:border-r-0"
              } ${
                i >= 2 ? "border-t" : "border-t-0"
              } md:border-t-0`}
            >
              <div className="flex items-center gap-2 text-text-secondary">
                <span className="text-primary-accent/60">{s.icon}</span>
                <span className="text-[9px] font-mono tracking-[0.2em] uppercase">{s.sub}</span>
              </div>

              <CountUp
                to={loading ? 0 : s.raw}
                sectionRef={sectionRef}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-clash-display text-white leading-none"
              />

              <span className="text-[10px] font-mono tracking-widest text-text-secondary uppercase">
                {s.label}
              </span>
            </ScrollReveal>
          ))}
        </div>

        {/* ══ Heatmap ══ */}
        <ScrollReveal direction="up" delay={0.15} className="py-10 border-b border-white/[0.05] w-full">
          <div className="flex items-center justify-between mb-5">
            <span className="text-[9px] font-mono tracking-[0.2em] text-text-secondary uppercase">
              Contribution activity · last 6 months
            </span>
            <div className="flex items-center gap-1.5">
              <span className="text-[9px] font-mono text-text-secondary">Less</span>
              {cellLevels.map((cls, i) => (
                <span key={i} className={`w-2.5 h-2.5 rounded-[2px] ${cls}`} />
              ))}
              <span className="text-[9px] font-mono text-text-secondary">More</span>
            </div>
          </div>

          <div className="relative">
            {loading && (
              <div className="absolute inset-0 z-10 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full border-2 border-primary-accent border-t-transparent animate-spin" />
              </div>
            )}
            <div className="w-full overflow-x-auto scrollbar-none pb-1">
              <div className="min-w-[550px] md:min-w-0">
                <div className="grid grid-cols-[repeat(26,minmax(0,1fr))] gap-[2px] sm:gap-[3px] md:gap-[4px] w-full">
                  {daysGrid.map((cls, i) => (
                    <div
                      key={i}
                      className={`aspect-square w-full rounded-[2px] ${cls} transition-all duration-200 hover:scale-125 hover:brightness-125 cursor-default`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ══ Language breakdown as fact rows ══ */}
        {!loading && data?.languages?.length > 0 && (
          <ScrollReveal direction="up" delay={0.2} className="flex flex-col pb-14 pt-4 w-full">
            <span className="text-[9px] font-mono tracking-[0.25em] text-text-secondary uppercase mb-4">
              Language breakdown
            </span>

            {/* Stacked bar */}
            <div className="w-full h-[3px] rounded-full overflow-hidden flex mb-6 bg-white/[0.04]">
              {data.languages.map((lang, i) => (
                <div
                  key={i}
                  className={`h-full ${lang.color}`}
                  style={{ width: `${lang.percent}%` }}
                />
              ))}
            </div>

            {/* Language rows */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {data.languages.map((lang, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 py-3 px-4 rounded-xl border border-white/[0.05] bg-white/[0.01] hover:border-white/[0.1] transition-colors duration-300"
                >
                  <span className={`w-2 h-2 rounded-full ${lang.color} shrink-0`} />
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs font-medium text-white truncate font-clash-display">
                      {lang.name}
                    </span>
                    <span className="text-[9px] font-mono text-text-secondary">
                      {lang.percent}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        )}

      </div>
    </section>
  );
}

/* ─── Animated count-up number ─── */
function CountUp({ to, sectionRef, className }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!to) return;
    const obj = { v: 0 };
    const anim = gsap.to(obj, {
      v: to,
      duration: 1.8,
      ease: "power2.out",
      onUpdate: () => setDisplay(Math.floor(obj.v)),
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        once: true,
      },
    });
    return () => anim.kill();
  }, [to, sectionRef]);

  return (
    <span className={className}>
      {display.toLocaleString()}
    </span>
  );
}
