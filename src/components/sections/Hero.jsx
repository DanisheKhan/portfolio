import React, { useEffect, useRef } from "react";
import { ArrowUpRight, ArrowDown, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { PERSONAL_DETAILS } from "../../lib/data";

/**
 * Hero — Mobile-first cinematic redesign.
 *
 * MOBILE:
 *   - Full-bleed portrait photo in the top 55% of the viewport
 *   - Dark glass card panel slides up from the bottom, overlapping the photo
 *   - Content (name, role, bio, CTAs) lives entirely in that panel
 *   - "Available" badge floats over the photo
 *
 * DESKTOP:
 *   - Photo bleeds the right 55%, face fully visible
 *   - Multi-layer gradient blends photo into dark bg on all edges
 *   - Text in the left column
 */
export default function Hero() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.15 });

      // Photo fade-in
      tl.from(".hero-photo-wrap", {
        opacity: 0,
        duration: 1.4,
        ease: "power2.out",
      }, 0);

      // Mobile card slides up
      tl.from(".hero-mobile-card", {
        y: 60,
        opacity: 0,
        duration: 0.9,
        ease: "power4.out",
      }, 0.3);

      // Badge
      tl.from(".hero-badge", {
        opacity: 0,
        y: -10,
        duration: 0.6,
        ease: "power3.out",
      }, 0.4);

      // Name lines
      tl.from(".name-line", {
        y: "110%",
        duration: 1.0,
        stagger: 0.1,
        ease: "power4.out",
      }, 0.35);

      // Fade elements
      tl.from(".hero-fade", {
        opacity: 0,
        y: 14,
        stagger: 0.08,
        duration: 0.65,
        ease: "power3.out",
      }, 0.65);

      // Stat boxes
      tl.from(".hero-stat", {
        opacity: 0,
        y: 8,
        stagger: 0.06,
        duration: 0.45,
        ease: "power2.out",
      }, 0.95);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { value: "7+",          label: "Projects" },
    { value: "20+",         label: "Technologies" },
    { value: "MERN & JAVA", label: "Core Stack" },
    { value: "B.Tech",      label: "CS" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#080809] flex flex-col overflow-hidden select-none"
    >

      {/* ══════════════════════════════════════════
          VIEWPORT UNIT — photo + content
      ══════════════════════════════════════════ */}
      <div className="relative w-full min-h-[100dvh] flex flex-col">

        {/* ─── PHOTO ─── */}
        {/*
          Mobile:  fills the entire section (will be covered by card from below)
          Desktop: right 55%, taller than viewport to account for parallax
        */}
        <div className="hero-photo-wrap absolute inset-0 pointer-events-none lg:inset-y-0 lg:right-0 lg:left-[45%]">
          <img
            src="/danish.jpeg"
            alt="Danish Khan"
            className="w-full h-full object-cover object-[40%_15%]"
          />

          {/* Mobile bottom gradient — dark card blends into photo */}
          <div
            className="absolute inset-0 lg:hidden"
            style={{
              background:
                "linear-gradient(to bottom, rgba(8,8,9,0.35) 0%, rgba(8,8,9,0.05) 35%, rgba(8,8,9,0.5) 55%, #080809 68%)",
            }}
          />

          {/* Desktop overlays */}
          {/* 1. Left-to-transparent */}
          <div
            className="absolute inset-0 hidden lg:block"
            style={{
              background:
                "linear-gradient(to right, #080809 0%, #080809 8%, rgba(8,8,9,0.82) 22%, rgba(8,8,9,0.4) 38%, rgba(8,8,9,0.1) 55%, transparent 75%)",
            }}
          />
          {/* 2. Bottom fade */}
          <div
            className="absolute bottom-0 left-0 right-0 hidden lg:block"
            style={{
              height: "40%",
              background:
                "linear-gradient(to top, #080809 0%, rgba(8,8,9,0.7) 30%, transparent 100%)",
            }}
          />
          {/* 3. Top fade */}
          <div
            className="absolute top-0 left-0 right-0"
            style={{
              height: "20%",
              background:
                "linear-gradient(to bottom, #080809 0%, rgba(8,8,9,0.55) 40%, transparent 100%)",
            }}
          />
          {/* 4. Right edge fade (desktop) */}
          <div
            className="absolute inset-y-0 right-0 hidden lg:block"
            style={{
              width: "12%",
              background: "linear-gradient(to left, #080809 0%, transparent 100%)",
            }}
          />
          {/* 5. Global darkening */}
          <div className="absolute inset-0 bg-[#080809]/10 hidden lg:block" />
        </div>

        {/* ─── MOBILE: "Available" badge floating over photo ─── */}
        <div className="hero-badge lg:hidden absolute top-[4.5rem] left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#080809]/70 backdrop-blur-md border border-white/[0.08]">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-white/70">
            Available for work
          </span>
        </div>

        {/* ─── DESKTOP: Top meta bar ─── */}
        <div className="hero-fade hidden lg:flex relative z-10 items-center justify-between max-w-7xl mx-auto w-full px-12 pt-32">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[10px] font-mono tracking-[0.28em] uppercase text-white/35">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Available for work
            </span>
            <span className="h-px w-8 bg-white/10" />
            <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-white/20">
              {PERSONAL_DETAILS.location}
            </span>
          </div>
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-white/15">
            Portfolio 2026
          </span>
        </div>

        {/* ══════════════════════════════════════════
            MOBILE CARD — slides up from below,
            overlaps the bottom of the photo.
            Hidden on lg+; desktop uses the column below.
        ══════════════════════════════════════════ */}
        <div
          className="hero-mobile-card lg:hidden absolute bottom-0 left-0 right-0 z-10 flex flex-col gap-4 px-5 pt-6 pb-8 rounded-t-3xl"
          style={{
            background:
              "linear-gradient(to bottom, rgba(8,8,9,0.9) 0%, #080809 20%)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderTop: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          {/* Name */}
          <div className="flex flex-col gap-0">
            <div className="overflow-hidden">
              <h1
                className="name-line font-black font-clash-display tracking-[-0.03em] leading-[0.88] text-white uppercase"
                style={{ fontSize: "clamp(2.6rem, 13vw, 5rem)" }}
              >
                DANISH
              </h1>
            </div>
            <div className="overflow-hidden">
              <h1
                className="name-line font-black font-clash-display tracking-[-0.03em] leading-[0.88] uppercase"
                style={{
                  fontSize: "clamp(2.6rem, 13vw, 5rem)",
                  background:
                    "linear-gradient(135deg, #C5A880 0%, #E8D5B0 50%, #C5A880 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                KHAN
              </h1>
            </div>
          </div>

          {/* Role */}
          <div className="hero-fade flex items-center gap-3">
            <span className="h-px w-6 bg-primary-accent/60 shrink-0" />
            <span className="text-[11px] font-mono tracking-[0.28em] text-primary-accent uppercase">
              Full Stack Engineer
            </span>
          </div>

          {/* Bio — single line on mobile to save space */}
          <p className="hero-fade text-xs text-white/55 leading-relaxed font-light">
            Crafting high-performance web apps — pixel-perfect UIs,
            robust backends and scalable systems.
          </p>

          {/* CTAs */}
          <div className="hero-fade flex flex-col gap-2.5">
            <Link
              to="/projects"
              className="group flex items-center justify-center gap-2 h-11 rounded-xl bg-primary-accent text-[#080809] text-sm font-bold tracking-widest uppercase transition-all duration-300 active:scale-95"
            >
              View Work
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </Link>
            <Link
              to="/resume"
              className="flex items-center justify-center gap-2 h-11 rounded-xl border border-white/[0.12] bg-white/[0.03] text-sm font-medium tracking-widest uppercase text-white/60 hover:text-white hover:border-white/20 transition-all duration-300 active:scale-95"
            >
              View Resume
            </Link>
          </div>

          {/* Quick meta row */}
          <div className="hero-fade flex items-center gap-3 pt-1">
            <MapPin className="w-3 h-3 text-white/30 shrink-0" />
            <span className="text-[10px] font-mono text-white/30 tracking-wider">
              {PERSONAL_DETAILS.location}
            </span>
            <span className="h-3 w-px bg-white/10 mx-1" />
            <span className="text-[10px] font-mono text-white/30 tracking-wider">
              Open to Remote
            </span>
          </div>
        </div>

        {/* ══════════════════════════════════════════
            DESKTOP CONTENT COLUMN
        ══════════════════════════════════════════ */}
        <div className="hidden lg:flex relative z-10 flex-col flex-1 max-w-7xl mx-auto w-full px-12">
          <div className="flex-1 flex flex-col justify-center py-12">
            <div className="max-w-[60%] flex flex-col gap-0">
              <div className="overflow-hidden">
                <h1
                  className="name-line font-black font-clash-display tracking-[-0.03em] leading-[0.88] text-white uppercase"
                  style={{ fontSize: "clamp(2.75rem, 11.5vw, 12rem)" }}
                >
                  DANISH
                </h1>
              </div>
              <div className="overflow-hidden">
                <h1
                  className="name-line font-black font-clash-display tracking-[-0.03em] leading-[0.88] uppercase"
                  style={{
                    fontSize: "clamp(2.75rem, 11.5vw, 12rem)",
                    background:
                      "linear-gradient(135deg, #C5A880 0%, #E8D5B0 50%, #C5A880 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  KHAN
                </h1>
              </div>

              {/* Role tag */}
              <div className="hero-fade flex items-center gap-3 mt-6">
                <span className="h-px w-7 bg-primary-accent/50 shrink-0" />
                <span className="text-[11px] font-mono tracking-[0.28em] text-primary-accent uppercase">
                  Full Stack Engineer
                </span>
              </div>

              {/* Bio */}
              <p className="hero-fade text-sm text-white/35 leading-relaxed font-light mt-4 max-w-xs">
                Crafting high-performance web apps — pixel-perfect UIs,
                robust backends and scalable systems.
              </p>

              {/* CTAs */}
              <div className="hero-fade flex items-center gap-3 mt-7">
                <Link
                  to="/projects"
                  className="group inline-flex items-center gap-2 h-11 px-6 rounded-full bg-primary-accent text-[#080809] text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_36px_rgba(197,168,128,0.4)] active:scale-95"
                >
                  View Work
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </Link>
                <Link
                  to="/resume"
                  className="inline-flex items-center gap-2 h-11 px-6 rounded-full border border-white/[0.15] text-xs font-medium tracking-widest uppercase text-white/60 hover:text-white hover:border-white/20 transition-all duration-300 active:scale-95"
                >
                  View Resume
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue — desktop only */}
        <div className="absolute bottom-8 left-8 z-20 hidden lg:flex flex-col items-center gap-2">
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-white/15 animate-[scrollPulse_2s_ease-in-out_infinite]" />
          <ArrowDown className="w-3 h-3 text-white/15 animate-bounce" />
        </div>
      </div>

      {/* ══════════════════════════════════════════
          STATS RAIL — below the viewport fold
      ══════════════════════════════════════════ */}
      <div className="relative z-10 border-t border-white/[0.05] w-full bg-[#080809]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`hero-stat flex flex-col items-center gap-1 py-5 sm:py-6 px-3 sm:px-6 border-white/[0.05] ${
                i % 2 === 0 ? "border-r" : "border-r-0"
              } ${
                i < 3 ? "lg:border-r" : "lg:border-r-0"
              } ${
                i >= 2 ? "border-t" : "border-t-0"
              } lg:border-t-0`}
            >
              <span className="text-base sm:text-lg md:text-xl font-bold font-clash-display text-white">
                {s.value}
              </span>
              <span className="text-[8px] sm:text-[9px] font-mono tracking-[0.2em] text-white/40 uppercase">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; }
          50%       { opacity: 0.8; }
        }
      `}</style>

    </section>
  );
}
