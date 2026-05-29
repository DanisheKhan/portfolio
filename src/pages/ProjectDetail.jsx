import React, { useRef, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import { gsap } from "gsap";
import PageTransition from "../components/layout/PageTransition";
import { PROJECTS_DATA } from "../lib/data";
import ScrollReveal from "../components/ui/ScrollReveal";

/**
 * ProjectDetail Page (/projects/:slug) — editorial case study redesign.
 *
 * Layout:
 * 1. Full-bleed hero image (100vh) with title overlaid at bottom
 * 2. Thin 4-col metadata strip
 * 3. Two-column body: long-form case study left, sticky sidebar right
 * 4. Tech stack chips row at the bottom
 */
export default function ProjectDetail() {
  const { slug } = useParams();
  const heroRef  = useRef(null);
  const titleRef = useRef(null);
  const pageRef  = useRef(null);

  const project = PROJECTS_DATA.find((p) => p.slug === slug);

  useEffect(() => {
    if (!project) return;
    const ctx = gsap.context(() => {
      // Hero image subtle zoom-in
      gsap.from(heroRef.current, {
        scale: 1.08,
        duration: 1.6,
        ease: "power3.out",
      });
      // Title slides up from below
      gsap.from(".hero-title-word", {
        y: "110%",
        opacity: 0,
        stagger: 0.07,
        duration: 1.0,
        ease: "power4.out",
        delay: 0.3,
      });
      gsap.from(".meta-cell", {
        opacity: 0,
        y: 10,
        stagger: 0.06,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.8,
      });
    }, pageRef);
    return () => ctx.revert();
  }, [project]);

  if (!project) {
    return (
      <PageTransition>
        <div className="w-full h-screen bg-primary-bg flex flex-col justify-center items-center select-none text-center p-6 gap-6">
          <span className="text-sm font-mono text-primary-accent uppercase tracking-widest">404</span>
          <h1 className="text-4xl font-bold font-clash-display text-white">Project Not Found</h1>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-text-secondary hover:text-white transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Catalog
          </Link>
        </div>
      </PageTransition>
    );
  }

  const words = project.title.split(" ");

  return (
    <PageTransition>
      <div ref={pageRef} className="w-full relative bg-primary-bg overflow-hidden select-none">

        {/* ══ Full-bleed hero ══ */}
        <div className="relative w-full overflow-hidden" style={{ height: "min(100vh, 100svh)" }}>
          {/* Background image */}
          <img
            ref={heroRef}
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#080809] via-[#080809]/40 to-transparent" />
          <div className="absolute inset-0 bg-[#080809]/30" />

          {/* Back link — top left */}
          <Link
            to="/projects"
            className="absolute top-20 sm:top-28 left-5 sm:left-6 md:left-12 inline-flex items-center gap-2 text-[10px] font-mono tracking-[0.25em] uppercase text-white/50 hover:text-white transition-colors duration-300 z-10"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Catalog
          </Link>

          {/* Category badge — top right */}
          <span className="absolute top-20 sm:top-28 right-5 sm:right-6 md:right-12 text-[9px] font-mono tracking-[0.2em] uppercase border border-white/10 px-3 py-1.5 rounded-full text-white/50 z-10">
            {project.category}
          </span>

          {/* Title — pinned to bottom */}
          <div className="absolute bottom-0 left-0 right-0 z-10 px-5 sm:px-6 md:px-12 pb-10 sm:pb-14">
            <div ref={titleRef} className="flex flex-wrap gap-x-3 sm:gap-x-5 overflow-hidden">
              {words.map((word, i) => (
                <div key={i} className="overflow-hidden">
                  <span
                    className="hero-title-word inline-block font-bold font-clash-display text-white tracking-tight leading-none"
                    style={{ fontSize: "clamp(2rem, 9vw, 9rem)" }}
                  >
                    {word}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══ Metadata strip ══ */}
        <div className="border-b border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-2 md:grid-cols-4">
            {[
              { label: "Role",      value: project.role },
              { label: "Duration",  value: project.duration },
              { label: "Year",      value: project.year },
              { label: "Source",    value: null, link: project.githubUrl, linkLabel: "View Code" },
            ].map((cell, i) => (
              <div
                key={i}
                className={`meta-cell flex flex-col gap-1.5 py-4 sm:py-8 border-white/[0.06] ${
                  i % 2 !== 0 ? "border-l" : "border-l-0"
                } ${
                  i > 0 ? "md:border-l" : "md:border-l-0"
                } ${
                  i % 2 !== 0 ? "pl-4 sm:pl-8" : "pl-0"
                } ${
                  i >= 2 ? "border-t md:border-t-0 pt-4 sm:pt-8" : ""
                }`}
              >
                <span className="text-[9px] font-mono tracking-[0.25em] text-text-secondary uppercase">
                  {cell.label}
                </span>
                {cell.link ? (
                  <a
                    href={cell.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary-accent hover:text-white transition-colors duration-300 font-clash-display"
                  >
                    {cell.linkLabel}
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  </a>
                ) : (
                  <span className="text-sm font-semibold text-white font-clash-display">
                    {cell.value}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ══ Body: case study + sidebar ══ */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12 sm:py-16 md:py-24">
          <div className="flex flex-col lg:flex-row gap-10 sm:gap-12 lg:gap-20">

            {/* ── Left: long-form content ── */}
            <div className="flex-1 min-w-0 flex flex-col gap-14">

              {/* Problem */}
              <ScrollReveal direction="up">
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-3">
                    <span className="text-[9px] font-mono tracking-[0.3em] text-text-secondary uppercase">01</span>
                    <div className="flex-1 h-px bg-white/[0.06]" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold font-clash-display text-white">
                    The Problem
                  </h2>
                  <p className="text-sm md:text-base text-text-secondary leading-relaxed font-light">
                    {project.caseStudy.problem}
                  </p>
                </div>
              </ScrollReveal>

              {/* Solution */}
              <ScrollReveal direction="up">
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-3">
                    <span className="text-[9px] font-mono tracking-[0.3em] text-text-secondary uppercase">02</span>
                    <div className="flex-1 h-px bg-white/[0.06]" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold font-clash-display text-white">
                    The Solution
                  </h2>
                  <p className="text-sm md:text-base text-text-secondary leading-relaxed font-light">
                    {project.caseStudy.solution}
                  </p>
                </div>
              </ScrollReveal>

              {/* Architecture */}
              <ScrollReveal direction="up">
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-3">
                    <span className="text-[9px] font-mono tracking-[0.3em] text-text-secondary uppercase">03</span>
                    <div className="flex-1 h-px bg-white/[0.06]" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold font-clash-display text-white">
                    Architecture & Strategy
                  </h2>
                  <ol className="flex flex-col gap-4">
                    {project.caseStudy.architecture.map((item, i) => (
                      <li key={i} className="flex gap-4 items-start">
                        <span className="text-[10px] font-mono text-primary-accent/50 mt-1.5 shrink-0 w-4">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <p className="text-sm text-text-secondary leading-relaxed font-light">
                          {item}
                        </p>
                      </li>
                    ))}
                  </ol>
                </div>
              </ScrollReveal>

              {/* Tech stack */}
              <ScrollReveal direction="up">
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-3">
                    <span className="text-[9px] font-mono tracking-[0.3em] text-text-secondary uppercase">04</span>
                    <div className="flex-1 h-px bg-white/[0.06]" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold font-clash-display text-white">
                    Tech Stack
                  </h2>
                  <div className="flex flex-wrap gap-2.5">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-3.5 py-1.5 rounded-xl border border-white/[0.07] bg-white/[0.02] text-[11px] font-mono text-text-secondary hover:text-white hover:border-white/[0.15] transition-all duration-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

            </div>

            {/* ── Right: sticky sidebar ── */}
            <div className="lg:w-72 shrink-0">
              <div className="lg:sticky lg:top-32 flex flex-col gap-6">

                {/* Live CTA */}
                <ScrollReveal direction="up" delay={0.05}>
                  <div className="flex flex-col gap-4 p-6 rounded-2xl border border-white/[0.07] bg-white/[0.01]">
                    <span className="text-[9px] font-mono tracking-[0.25em] text-text-secondary uppercase">
                      Live Deployment
                    </span>
                    <p className="text-xs text-text-secondary font-light leading-relaxed">
                      Connect to the active production environment directly.
                    </p>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-primary-accent hover:bg-primary-accent/90 text-[#080809] text-xs font-mono font-bold uppercase tracking-widest transition-colors duration-300"
                    >
                      Launch App
                      <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                    </a>
                  </div>
                </ScrollReveal>

                {/* Lighthouse scores */}
                <ScrollReveal direction="up" delay={0.12}>
                  <div className="flex flex-col gap-4 p-6 rounded-2xl border border-white/[0.07] bg-white/[0.01]">
                    <span className="text-[9px] font-mono tracking-[0.25em] text-text-secondary uppercase">
                      Lighthouse Scores
                    </span>
                    <div className="flex flex-col gap-3">
                      {Object.entries(project.caseStudy.benchmarks).map(([key, val], i) => {
                        const num = parseInt(val);
                        const isHigh = num >= 90;
                        return (
                          <div key={i} className="flex items-center justify-between gap-3">
                            <span className="text-[10px] font-mono text-text-secondary uppercase tracking-wider">
                              {key}
                            </span>
                            <span
                              className={`text-sm font-bold font-clash-display ${
                                isHigh ? "text-green-400" : "text-primary-accent"
                              }`}
                            >
                              {val}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </ScrollReveal>

                {/* Back link */}
                <ScrollReveal direction="up" delay={0.18}>
                  <Link
                    to="/projects"
                    className="group flex items-center gap-2 text-[10px] font-mono tracking-[0.2em] uppercase text-text-secondary hover:text-primary-accent transition-colors duration-300"
                  >
                    <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform duration-200" />
                    All Projects
                  </Link>
                </ScrollReveal>

              </div>
            </div>

          </div>
        </div>

      </div>
    </PageTransition>
  );
}
