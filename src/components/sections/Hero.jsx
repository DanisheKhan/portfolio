import React, { useEffect, useRef } from "react";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import Plasma from "../ui/Plasma";
import { PERSONAL_DETAILS } from "../../lib/data";

/**
 * Hero Section — redesigned with a classic editorial split layout:
 * - Left: stacked name + bio + CTAs
 * - Right: portrait with overlay card + rotating role badge
 * - Bottom: minimal stat rail
 */
export default function Hero() {
  const containerRef = useRef(null);
  const tlRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });

      // Reveal lines by unclipping from bottom
      tl.from(".hero-line", {
        y: "100%",
        opacity: 0,
        stagger: 0.12,
        duration: 1.0,
        ease: "power4.out",
      })
        .from(
          ".hero-fade",
          {
            opacity: 0,
            y: 18,
            stagger: 0.1,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .from(
          ".hero-right",
          {
            opacity: 0,
            x: 40,
            duration: 1.0,
            ease: "power3.out",
          },
          "-=0.9"
        )
        .from(
          ".hero-stat",
          {
            opacity: 0,
            y: 10,
            stagger: 0.08,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.4"
        );

      tlRef.current = tl;
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { value: "7+", label: "Projects" },
    { value: "20+", label: "Technologies" },
    { value: "MERN", label: "Core Stack" },
    { value: "B.Tech", label: "AI & CS" },
  ];

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen bg-primary-bg flex flex-col justify-between overflow-hidden"
    >
      {/* ── Ambient Plasma blob (toned down) ── */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <Plasma
          color="#C5A880"
          speed={0.12}
          direction="pingpong"
          scale={1.4}
          opacity={0.35}
          mouseInteractive={false}
        />
      </div>

      {/* Radial vignette */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 30% 50%, transparent 30%, var(--primary-bg) 85%)",
        }}
      />

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-primary-bg to-transparent z-[2] pointer-events-none" />

      {/* ══════════════════════════════════
          Main content grid
      ══════════════════════════════════ */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex-1 flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 pt-28 pb-16">

          {/* ── LEFT COLUMN ── */}
          <div className="flex flex-col justify-center gap-8 max-w-2xl">

            {/* Eyebrow: availability badge */}
            <div className="hero-fade flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-[10px] font-mono tracking-[0.25em] uppercase text-text-secondary">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 pulse-glow-dot" />
                Available for work
              </span>
              <span className="h-px w-12 bg-white/10" />
              <span className="flex items-center gap-1 text-[10px] font-mono tracking-[0.15em] text-text-secondary uppercase">
                <MapPin className="w-2.5 h-2.5" />
                {PERSONAL_DETAILS.location}
              </span>
            </div>

            {/* Name — big editorial stacked display */}
            <div className="flex flex-col gap-0 -mt-2">
              <div className="overflow-hidden">
                <div className="hero-line text-[clamp(3.5rem,9vw,7.5rem)] font-bold font-clash-display leading-[0.9] tracking-tight text-white uppercase">
                  Danish
                </div>
              </div>
              <div className="overflow-hidden">
                <div className="hero-line text-[clamp(3.5rem,9vw,7.5rem)] font-bold font-clash-display leading-[0.9] tracking-tight text-gradient italic">
                  Khan.
                </div>
              </div>
            </div>

            {/* Thin rule + role */}
            <div className="hero-fade flex items-center gap-4">
              <span className="h-px w-8 bg-primary-accent/60 shrink-0" />
              <span className="text-xs font-mono tracking-[0.3em] text-primary-accent uppercase font-semibold">
                Full Stack Software Engineer
              </span>
            </div>

            {/* Bio */}
            <p className="hero-fade text-sm md:text-base text-text-secondary leading-relaxed font-light max-w-md">
              Engineering premium, high-performance web applications — from
              pixel-perfect interfaces to robust backend architectures and
              scalable database systems.
            </p>

            {/* CTAs */}
            <div className="hero-fade flex flex-wrap gap-4 items-center">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2.5 h-12 px-7 rounded-full bg-primary-accent text-[#0B0B0C] text-sm font-semibold tracking-wide transition-all duration-300 hover:bg-secondary-accent hover:shadow-[0_0_40px_rgba(197,168,128,0.35)] hover:-translate-y-0.5 select-none"
              >
                View My Work
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <a
                href="/DanishKhan_Resume.pdf"
                download="DanishKhan_Resume.pdf"
                className="inline-flex items-center gap-2 h-12 px-7 rounded-full border border-white/[0.1] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 text-sm font-medium tracking-wide text-text-secondary hover:text-white transition-all duration-300 select-none"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* ── RIGHT COLUMN — portrait card ── */}
          <div className="hero-right hidden lg:flex flex-col items-center justify-center gap-6 relative">

            {/* Portrait frame */}
            <div className="relative group select-none">
              {/* Wireframe offset */}
              <div className="absolute inset-0 border border-primary-accent/20 rounded-[28px] translate-x-3.5 translate-y-3.5 transition-transform duration-500 ease-out group-hover:translate-x-2 group-hover:translate-y-2 -z-10" />

              {/* Main portrait */}
              <div className="w-[280px] xl:w-[320px] aspect-[3/4] rounded-[28px] overflow-hidden border border-white/[0.08] bg-secondary-bg relative shadow-[0_40px_80px_rgba(0,0,0,0.6)]">
                <img
                  src="/danish.jpeg"
                  alt="Danish Khan"
                  className="w-full h-full object-cover object-top scale-105 transition-transform duration-700 ease-out group-hover:scale-110"
                />
                {/* Bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Hover-reveal name card */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 opacity-0 translate-y-3 transition-all duration-400 ease-out group-hover:opacity-100 group-hover:translate-y-0 flex items-center justify-between">
                  <div>
                    <p className="text-white text-xs font-mono font-bold uppercase tracking-widest">
                      Danish Khan
                    </p>
                    <p className="text-[10px] text-text-secondary font-mono mt-0.5">
                      Full Stack Developer
                    </p>
                  </div>
                  <span className="text-sm">✦</span>
                </div>
              </div>

              {/* Floating badge top-right */}
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-primary-accent/10 border border-primary-accent/20 backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_rgba(197,168,128,0.15)]">
                <div className="text-center">
                  <p className="text-primary-accent font-bold text-lg font-clash-display leading-none">10</p>
                  <p className="text-[8px] text-primary-accent/70 font-mono uppercase tracking-wider leading-tight">Mo. Exp</p>
                </div>
              </div>
            </div>

            {/* Vertical role ticker */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06]">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-accent animate-pulse shrink-0" />
              <span className="text-[10px] font-mono tracking-[0.2em] text-text-secondary uppercase">
                MERN · Next.js · TypeScript
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* ══════════════════════════════════
          Bottom stat rail
      ══════════════════════════════════ */}
      <div className="relative z-10 border-t border-white/[0.05] max-w-7xl mx-auto w-full px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.05] py-5">
          {stats.map((s, i) => (
            <div key={i} className="hero-stat flex flex-col items-center gap-0.5 px-6">
              <span className="text-xl md:text-2xl font-bold font-clash-display text-white">
                {s.value}
              </span>
              <span className="text-[10px] font-mono tracking-[0.2em] text-text-secondary uppercase">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-24 left-8 z-20 hidden md:flex flex-col items-center gap-2 select-none">
        <span
          className="h-12 w-px bg-gradient-to-b from-transparent to-white/20"
          style={{ animation: "scrollLine 2s ease-in-out infinite" }}
        />
        <span className="text-[9px] font-mono tracking-[0.3em] text-text-secondary uppercase rotate-90 origin-center translate-y-6">
          Scroll
        </span>
      </div>

      <style>{`
        @keyframes scrollLine {
          0%, 100% { opacity: 0.3; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.3); }
        }
      `}</style>
    </section>
  );
}
