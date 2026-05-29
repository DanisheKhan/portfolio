import React, { useEffect, useRef } from "react";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { PERSONAL_DETAILS } from "../../lib/data";

/**
 * Hero — refined cinematic layout.
 *
 * - Photo bleeds full-height on the right 55%, face fully visible
 * - Multi-layer gradient blends photo into dark bg on all 4 edges
 * - Text is contained in left 50% max-width — doesn't cross into the photo
 * - Name at a balanced size that doesn't compete with the face
 */
export default function Hero() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });

      tl.from(".hero-photo-wrap", {
        opacity: 0,
        duration: 1.6,
        ease: "power2.out",
      }, 0);

      tl.from(".name-line", {
        y: "110%",
        duration: 1.1,
        stagger: 0.11,
        ease: "power4.out",
      }, 0.2);

      tl.from(".hero-fade", {
        opacity: 0,
        y: 16,
        stagger: 0.09,
        duration: 0.7,
        ease: "power3.out",
      }, 0.6);

      tl.from(".hero-stat", {
        opacity: 0,
        y: 8,
        stagger: 0.07,
        duration: 0.5,
        ease: "power2.out",
      }, 0.9);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { value: "7+",     label: "Projects" },
    { value: "20+",    label: "Technologies" },
    { value: "MERN & JAVA",   label: "Core Stack" },
    { value: "B.Tech", label: "CS" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[100dvh] bg-[#080809] flex flex-col overflow-hidden select-none"
    >

      {/* ══════════ PHOTO — right half on desktop, full bg on mobile ══════════ */}
      {/* Mobile: covers full section with heavy overlay for text readability */}
      <div className="hero-photo-wrap absolute inset-0 pointer-events-none lg:inset-y-0 lg:right-0 lg:left-[45%]">
        <img
          src="/danish.jpeg"
          alt="Danish Khan"
          className="w-full h-full object-cover object-[35%_top]"
        />

        {/* Mobile strong overlay — makes text readable */}
        <div className="absolute inset-0 lg:hidden" style={{
          background: "linear-gradient(to right, rgba(8,8,9,0.92) 0%, rgba(8,8,9,0.85) 50%, rgba(8,8,9,0.75) 100%)"
        }} />

        {/* 1. Left-to-transparent: blends into the dark text area (desktop) */}
        <div className="absolute inset-0 hidden lg:block" style={{
          background: "linear-gradient(to right, #080809 0%, #080809 8%, rgba(8,8,9,0.82) 22%, rgba(8,8,9,0.4) 38%, rgba(8,8,9,0.1) 55%, transparent 75%)"
        }} />

        {/* 2. Bottom fade: grounds the photo into the stat rail */}
        <div className="absolute bottom-0 left-0 right-0" style={{
          height: "45%",
          background: "linear-gradient(to top, #080809 0%, rgba(8,8,9,0.85) 25%, rgba(8,8,9,0.4) 55%, transparent 100%)"
        }} />

        {/* 3. Top fade: matches navbar area */}
        <div className="absolute top-0 left-0 right-0" style={{
          height: "22%",
          background: "linear-gradient(to bottom, #080809 0%, rgba(8,8,9,0.6) 40%, transparent 100%)"
        }} />

        {/* 4. Right edge fade: prevents hard crop (desktop) */}
        <div className="absolute inset-y-0 right-0 hidden lg:block" style={{
          width: "12%",
          background: "linear-gradient(to left, #080809 0%, transparent 100%)"
        }} />

        {/* 5. Subtle global darkening so white text pops */}
        <div className="absolute inset-0 bg-[#080809]/20" />
      </div>

      {/* ══════════ CONTENT ══════════ */}
      <div className="relative z-10 flex flex-col flex-1 max-w-7xl mx-auto w-full px-4 sm:px-8 md:px-12">

        {/* Top meta */}
        <div className="hero-fade flex items-center justify-between pt-20 sm:pt-24 md:pt-32">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[10px] font-mono tracking-[0.28em] uppercase text-white/50 md:text-white/35">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Available for work
            </span>
            <span className="hidden md:block h-px w-8 bg-white/10" />
            <span className="hidden md:block text-[10px] font-mono tracking-[0.2em] uppercase text-white/20">
              {PERSONAL_DETAILS.location}
            </span>
          </div>
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-white/15">
            Portfolio 2026
          </span>
        </div>

        {/* Name — contained so face stays clear */}
        <div className="flex-1 flex flex-col justify-center py-8 sm:py-12">
          <div className="max-w-full md:max-w-[60%] min-w-[280px] flex flex-col gap-0">
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
                  background: "linear-gradient(135deg, #C5A880 0%, #E8D5B0 50%, #C5A880 100%)",
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
            <p className="hero-fade text-sm text-white/60 md:text-white/35 leading-relaxed font-light mt-4 max-w-xs">
              Crafting high-performance web apps — pixel-perfect UIs,
              robust backends and scalable systems.
            </p>

            {/* CTAs */}
            <div className="hero-fade flex flex-col xs:flex-row items-stretch xs:items-center gap-3 mt-7">
              <Link
                to="/projects"
                className="justify-center group inline-flex items-center gap-2 h-11 px-6 rounded-full bg-primary-accent text-[#080809] text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_36px_rgba(197,168,128,0.4)] active:scale-95"
              >
                View Work
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </Link>

              <Link
                to="/resume"
                className="justify-center inline-flex items-center gap-2 h-11 px-6 rounded-full border border-white/[0.15] text-xs font-medium tracking-widest uppercase text-white/60 hover:text-white hover:border-white/20 transition-all duration-300 active:scale-95"
              >
                View Resume
              </Link>
            </div>
          </div>
        </div>

      </div>

      <div className="relative z-10 border-t border-white/[0.05] w-full bg-[#080809]/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-2 lg:grid-cols-4 border-white/[0.05]">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`hero-stat flex flex-col items-center gap-1 py-4 sm:py-5 px-3 sm:px-6 border-white/[0.05] ${
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

      {/* Scroll cue */}
      <div className="absolute bottom-24 left-8 z-20 hidden md:flex flex-col items-center gap-2">
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-white/15 animate-[scrollPulse_2s_ease-in-out_infinite]" />
        <ArrowDown className="w-3 h-3 text-white/15 animate-bounce" />
      </div>

      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
      `}</style>

    </section>
  );
}
