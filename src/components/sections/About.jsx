import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CountUp from "../ui/CountUp";
import ScrollReveal from "../ui/ScrollReveal";

// Register ScrollTrigger immediately
gsap.registerPlugin(ScrollTrigger);

/**
 * About Section Component
 * Handles parallax image scrolling, circular years badge, bios, and counter grids.
 */
export default function About() {
  const imageRef = useRef(null);
  const triggerRef = useRef(null);
  const badgeRef = useRef(null);

  useEffect(() => {
    const img = imageRef.current;
    const trigger = triggerRef.current;
    const badge = badgeRef.current;

    if (!img || !trigger) return;

    // Parallax scrolling translation on image container
    const ctx = gsap.context(() => {
      gsap.to(img, {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: trigger,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

      // Infinite rotating years badge
      gsap.to(badge, {
        rotation: 360,
        ease: "none",
        duration: 15,
        repeat: -1
      });
    });

    return () => ctx.revert();
  }, []);

  const stats = [
    { label: "Projects Launched", end: 3, suffix: "+" },
    { label: "Months Interned", end: 10, suffix: "+" },
    { label: "Core Technologies", end: 15, suffix: "+" },
    { label: "Coffee", end: 9999, suffix: " ∞" }
  ];

  return (
    <section
      ref={triggerRef}
      className="relative w-full py-20 md:py-32 bg-primary-bg overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
        
        {/* Left column: Bio copy and stats grid */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <ScrollReveal direction="left">
            <span className="text-xs uppercase font-mono tracking-widest text-primary-accent font-medium bg-primary-accent/10 px-3.5 py-1.5 rounded-full border border-primary-accent/20">
              About Me
            </span>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-clash-display tracking-tight text-white leading-tight mt-2">
              Crafting premium solutions <br className="hidden sm:inline" />
              with <span className="text-gradient">modern technical skill.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.2}>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-light">
              Full Stack Developer specializing in building secure, clean, and highly optimized web applications. Focused on data structures, robust authentication flows, and seamless responsive client experiences. Driven by aesthetic excellence and flawless performance.
            </p>
          </ScrollReveal>

          {/* Stat Counters Grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 my-6 w-full">
            {stats.map((stat, index) => (
              <ScrollReveal
                key={index}
                direction="up"
                delay={0.1 * index}
                className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.05] p-5 flex flex-col gap-1 hover:border-primary-accent/30 transition-all duration-300 group/stat"
              >
                {/* Subtle light leak inside stats on hover */}
                <div className="absolute -right-10 -bottom-10 w-24 h-24 rounded-full bg-gradient-to-tr from-primary-accent/10 to-secondary-accent/10 blur-xl opacity-0 group-hover/stat:opacity-100 transition-opacity duration-500" />
                
                <span className="text-3xl md:text-4xl font-bold font-clash-display text-white group-hover/stat:text-gradient transition-all duration-300">
                  <CountUp end={stat.end} suffix={stat.suffix} />
                </span>
                <span className="text-[10px] sm:text-xs text-text-secondary font-mono tracking-wider font-semibold uppercase">
                  {stat.label}
                </span>
              </ScrollReveal>
            ))}
          </div>

          {/* More details page navigation */}
          <ScrollReveal direction="left" delay={0.4} className="mt-2">
            <Link
              to="/about"
              className="inline-flex items-center gap-3 group px-6 py-3.5 rounded-full bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.08] hover:border-primary-accent/30 text-white font-medium transition-all duration-300 shadow-lg w-fit"
            >
              <span>More About Me</span>
              <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-primary-accent flex items-center justify-center transition-colors duration-300">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300 text-white" />
              </div>
            </Link>
          </ScrollReveal>
        </div>

        {/* Right column: 3D Mask Hexagon Image Portrayal */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          
          {/* Glow backdrop mesh */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary-accent/15 to-secondary-accent/15 rounded-full blur-[80px] opacity-75 pointer-events-none -z-10 animate-pulse" />

          {/* Custom circular rotating SVG text badge */}
          <div className="absolute -top-10 -right-10 z-20 w-32 h-32 select-none pointer-events-none scale-90 sm:scale-100">
            <div ref={badgeRef} className="w-full h-full relative">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <defs>
                  <path
                    id="circlePath"
                    d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                  />
                </defs>
                <text className="text-[7px] fill-white/60 font-mono tracking-[4.5px] uppercase font-bold">
                  <textPath href="#circlePath">
                    • 10 Months Interned • Danish Khan •
                  </textPath>
                </text>
              </svg>
              {/* Inner glowing core */}
              <div className="absolute inset-[28%] rounded-full bg-gradient-to-tr from-primary-accent to-secondary-accent flex items-center justify-center shadow-[0_0_20px_rgba(108,99,255,0.4)] backdrop-blur-md border border-white/10">
                <span className="text-white font-bold text-[11px] font-clash-display tracking-wider">10M</span>
              </div>
            </div>
          </div>

          {/* Floating abstract decorative element rings */}
          <div className="absolute -bottom-8 -left-8 w-44 h-44 rounded-full border border-dashed border-border-color/60 animate-spin-slow -z-10 opacity-30" />

          {/* Classic Portrait Frame Wrapper */}
          <div className="relative group cursor-pointer w-[300px] sm:w-[350px] md:w-[380px] aspect-[4/5] mx-auto lg:mx-0">
            
            {/* Background Offset Outline Frame (Classic Editorial Design) */}
            <div className="absolute inset-0 border border-white/10 rounded-[32px] translate-x-5 translate-y-5 transition-all duration-500 ease-out group-hover:translate-x-3 group-hover:translate-y-3 group-hover:border-primary-accent/40 -z-10" />

            {/* Glowing Accent Border Container */}
            <div className="w-full h-full rounded-[32px] bg-gradient-to-b from-white/10 via-white/5 to-white/0 p-[1.5px] transition-all duration-500 ease-out group-hover:from-primary-accent/50 group-hover:to-secondary-accent/50 group-hover:shadow-[0_20px_50px_rgba(108,99,255,0.2)]">
              
              {/* Inner Image Mask and Layer */}
              <div className="w-full h-full overflow-hidden rounded-[30px] bg-secondary-bg relative">
                <img
                  ref={imageRef}
                  src="/danish.jpeg"
                  alt="Danish Khan Profile"
                  className="w-full h-full object-cover origin-top scale-105 transition-transform duration-700 ease-out group-hover:scale-110"
                />
                
                {/* Elegant overlay vignette on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-40 group-hover:opacity-70 transition-opacity duration-500" />
                
                {/* Tech corner accents or styling inside the frame */}
                <div className="absolute bottom-4 left-5 right-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex justify-between items-center z-10">
                  <div className="flex flex-col">
                    <span className="text-white text-xs font-mono font-semibold tracking-wider uppercase">Danish Khan</span>
                    <span className="text-[10px] text-text-secondary font-mono">Full Stack Developer</span>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10 text-white text-[10px]">
                    ✨
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
