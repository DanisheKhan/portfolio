import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";

/**
 * AboutSection Component
 * 
 * Editorial-grade, high-contrast 50/50 split-grid section.
 * - Left column: Interactive metric cards with radial gradient light leaks tracking mouse position.
 * - Right column: Visual gallery asset suite with spring wireframe offsets, vignettes, and
 *   IntersectionObserver-wrapped rotating GSAP typography circular badge.
 */
export default function AboutSection() {
  const badgeRef = useRef(null);

  // 1. Infinitely rotating circular badge with IntersectionObserver boundary controls
  useEffect(() => {
    const badge = badgeRef.current;
    if (!badge) return;

    const anim = gsap.to(badge, {
      rotation: 360,
      ease: "none",
      duration: 18,
      repeat: -1,
      paused: true,
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          anim.play();
        } else {
          anim.pause();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(badge);

    return () => {
      observer.disconnect();
      anim.kill();
    };
  }, []);

  // 2. Metrics grid card mouse tracking handler (CSS variable binding for radial leak)
  const handleCardMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  };

  const metrics = [
    { title: "10 Months", desc: "Interned" },
    { title: "MERN Stack", desc: "Focus" },
    { title: "Java DSA", desc: "Specialist" },
    { title: "B.Tech AI", desc: "Student" },
  ];

  return (
    <section className="relative w-full py-20 md:py-32 bg-primary-bg overflow-hidden select-none">
      {/* Immersive mesh glow behind the right column */}
      <div className="absolute -right-20 top-20 w-[40vw] h-[40vw] rounded-full bg-primary-accent/5 filter blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
        
        {/* Left Column: Bio copy and light-leak stats grid */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <span className="w-fit text-xs uppercase font-mono tracking-widest text-primary-accent font-semibold bg-primary-accent/10 px-3.5 py-1.5 rounded-full border border-primary-accent/20">
            Overview
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-clash-display tracking-tight text-white leading-tight mt-2">
            Engineering premium solutions <br />
            with <span className="text-gradient">high-performance UI mechanics.</span>
          </h2>

          <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-light">
            Creative Frontend Developer and Systems Engineer focused on fluid web architectures, secure database schemas, and seamless responsive client experiences. Driven by aesthetic excellence and layout-stable rendering.
          </p>

          {/* 2x2 Metric Cards Grid with local mouse tracking */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 my-6 w-full">
            {metrics.map((metric, index) => (
              <div
                key={index}
                onMouseMove={handleCardMouseMove}
                className="group/card relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 flex flex-col gap-1 transition-all duration-300 hover:border-white/20 hover:-translate-y-1"
              >
                {/* Embedded internal cursor light leak gradient */}
                <div
                  className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(255,255,255,0.15) 0%, transparent 80%)",
                  }}
                />

                <span className="text-2xl md:text-3xl font-bold font-clash-display text-white">
                  {metric.title}
                </span>
                <span className="text-[10px] sm:text-xs text-text-secondary font-mono tracking-wider font-semibold uppercase">
                  {metric.desc}
                </span>
              </div>
            ))}
          </div>

          {/* Minimalist interactive pill CTA button */}
          <button className="group mt-4 inline-flex items-center gap-4 px-6 py-3 w-fit rounded-full bg-white/5 border border-white/10 hover:border-white/20 text-white font-medium transition-all duration-300">
            <span className="text-sm font-mono tracking-wider font-medium">Download Resume</span>
            <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-300 ease-out group-hover:translate-x-2 shrink-0">
              <ArrowRight className="w-4 h-4 text-white" />
            </span>
          </button>
        </div>

        {/* Right Column: Visual Gallery Asset Suite */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          
          {/* GSAP Typography Badge circular text path */}
          <div className="absolute -top-10 -right-10 z-20 w-32 h-32 select-none pointer-events-none scale-90 sm:scale-100">
            <div ref={badgeRef} className="w-full h-full relative">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <defs>
                  <path
                    id="circlePath"
                    d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                  />
                </defs>
                <text className="text-[7.2px] fill-white/40 font-mono tracking-[4px] uppercase font-bold">
                  <textPath href="#circlePath">
                    • 10 Months Interned • Danish Khan •
                  </textPath>
                </text>
              </svg>

              {/* Glowing glass core containing typography badge */}
              <div className="absolute inset-[28%] rounded-full bg-white/5 border border-white/10 flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.1)] backdrop-blur-md">
                <span className="text-white font-bold text-[10px] font-clash-display tracking-wider">
                  10M
                </span>
              </div>
            </div>
          </div>

          {/* Portrait Container Frame holding profile placeholder */}
          <div className="relative group cursor-pointer w-[300px] sm:w-[340px] md:w-[360px] aspect-[4/5]">
            
            {/* Background Offset Wireframe Offset behind the portrait */}
            <div className="absolute inset-0 border border-white/10 rounded-[32px] translate-x-5 translate-y-5 transition-transform duration-500 ease-out group-hover:translate-x-3 group-hover:translate-y-3 group-hover:border-primary-accent/30 -z-10" />

            {/* Core Portrait Box */}
            <div className="w-full h-full rounded-[32px] overflow-hidden bg-secondary-bg relative border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.4)]">
              <img
                src="/danish.jpeg"
                alt="Danish Khan"
                className="w-full h-full object-cover origin-top scale-100 transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Ambient bottom gradient shade */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-500" />

              {/* Bottom slide-up Metadata Card Vignette Reveal */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 opacity-0 translate-y-4 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 flex justify-between items-center z-10">
                <div className="flex flex-col">
                  <span className="text-white text-xs font-mono font-bold uppercase tracking-wider">
                    Danish Khan
                  </span>
                  <span className="text-[9px] text-text-secondary font-mono">
                    Full Stack Developer
                  </span>
                </div>
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-[10px]">
                  ✨
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
