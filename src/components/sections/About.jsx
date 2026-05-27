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
        
        {/* Left column: 3D Mask Hexagon Image Portrayal */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          
          {/* Custom circular years badge (rotating slowly) */}
          <div
            ref={badgeRef}
            className="absolute -top-6 -right-6 z-20 w-24 h-24 rounded-full bg-primary-accent border border-white/10 flex items-center justify-center p-2 text-center shadow-lg font-mono font-bold select-none cursor-pointer"
          >
            <div className="text-[10px] uppercase tracking-widest text-white leading-tight">
              10 Months <br />
              <span className="text-[8px] text-secondary-accent">Interned</span>
            </div>
          </div>

          {/* Floating abstract decorative element rings */}
          <div className="absolute -bottom-8 -left-8 w-44 h-44 rounded-full border border-dashed border-border-color/60 animate-spin-slow -z-10" />

          {/* Hexagon masked image wrapper */}
          <div className="w-[300px] sm:w-[350px] md:w-[400px] h-[360px] sm:h-[420px] md:h-[480px] overflow-hidden mask-hexagon bg-card-bg border border-border-color relative cursor-pointer shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
            <img
              ref={imageRef}
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600&auto=format&fit=crop"
              alt="Danish Khan Profile"
              className="w-full h-full object-cover origin-top scale-110"
            />
          </div>
        </div>

        {/* Right column: Bio copy and stats grid */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <ScrollReveal direction="left">
            <span className="text-xs uppercase font-mono tracking-widest text-primary-accent font-medium">
              About Me
            </span>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-clash-display tracking-tight text-white leading-tight">
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
          <div className="grid grid-cols-2 gap-8 my-6">
            {stats.map((stat, index) => (
              <ScrollReveal
                key={index}
                direction="up"
                delay={0.1 * index}
                className="flex flex-col gap-1 border-l-2 border-border-color pl-4"
              >
                <span className="text-3xl md:text-4xl font-bold font-clash-display text-white">
                  <CountUp end={stat.end} suffix={stat.suffix} />
                </span>
                <span className="text-xs text-text-secondary font-mono tracking-wider font-medium uppercase">
                  {stat.label}
                </span>
              </ScrollReveal>
            ))}
          </div>

          {/* More details page navigation */}
          <ScrollReveal direction="left" delay={0.4} className="mt-2">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 group text-white font-medium hover:text-secondary-accent transition-colors duration-300"
            >
              More About Me
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300 text-primary-accent" />
            </Link>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
