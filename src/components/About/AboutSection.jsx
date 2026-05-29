import React, { useEffect, useRef } from "react";
import { ArrowUpRight, GraduationCap, Briefcase, Code2, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PERSONAL_DETAILS } from "../../lib/data";

gsap.registerPlugin(ScrollTrigger);

/**
 * AboutSection — completely different from Hero.
 *
 * Design language: Full-width editorial magazine layout.
 * - No portrait (already shown in Hero)
 * - Giant "02" ghost watermark number
 * - Manifesto headline spanning full width
 * - Horizontal divider fact rows (magazine data-points style)
 * - Two-column philosophy + credential grid
 * - Accent CTA row at the bottom
 */
export default function AboutSection() {
  const sectionRef = useRef(null);
  const numRef = useRef(null);
  const headlineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Ghost number parallax
      gsap.to(numRef.current, {
        y: -80,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Headline word reveal
      gsap.from(".about-word", {
        y: "110%",
        opacity: 0,
        stagger: 0.05,
        duration: 0.9,
        ease: "power4.out",
        scrollTrigger: {
          trigger: headlineRef.current,
          start: "top 85%",
        },
      });

      // Fact rows slide in from left
      gsap.from(".about-row", {
        x: -30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-rows",
          start: "top 80%",
        },
      });

      // Philosophy cards fade up
      gsap.from(".about-card", {
        y: 24,
        opacity: 0,
        stagger: 0.12,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-cards",
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const facts = [
    {
      icon: <Briefcase className="w-4 h-4" />,
      label: "Experience",
      value: "10 Months Internship",
      sub: "Full Stack Development",
    },
    {
      icon: <GraduationCap className="w-4 h-4" />,
      label: "Education",
      value: "B.Tech — Computer Science",
      sub: PERSONAL_DETAILS.academic.institution,
    },
    {
      icon: <Code2 className="w-4 h-4" />,
      label: "Specialisation",
      value: "MERN Stack · DSA · System Design",
      sub: "20+ Core Technologies",
    },
    {
      icon: <MapPin className="w-4 h-4" />,
      label: "Location",
      value: PERSONAL_DETAILS.location,
      sub: "IST (UTC+5:30) · Open to Remote",
    },
  ];

  const cards = [
    {
      number: "01",
      title: "Clean Architecture",
      body: "I treat every codebase like a product — modular, typed, and built to last. No shortcuts, no tech debt by design.",
    },
    {
      number: "02",
      title: "Performance-First",
      body: "From algorithmic efficiency to layout-stable rendering, speed and precision are non-negotiable in everything I ship.",
    },
    {
      number: "03",
      title: "Pixel Craft",
      body: "UI is not just styling. It's communication. I obsess over spacing, contrast, and motion until every detail feels intentional.",
    },
  ];

  const words = [
    "Engineering", "secure,", "scalable,", "and",
    "beautiful", "digital", "experiences."
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-primary-bg overflow-hidden select-none"
    >
      {/* ── Top rule ── */}
      <div className="border-t border-white/[0.05]" />

      {/* ── Giant ghost section number ── */}
      <span
        ref={numRef}
        className="pointer-events-none absolute -top-8 right-4 md:right-12 text-[20vw] font-bold font-clash-display leading-none text-white/[0.025] select-none z-0"
      >
        02
      </span>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">

        {/* ══════════════════════════════
            Header row
        ══════════════════════════════ */}
        <div className="flex items-center justify-between pt-16 pb-10 border-b border-white/[0.05]">
          <span className="text-[10px] font-mono tracking-[0.3em] text-primary-accent uppercase font-semibold">
            ✦ About
          </span>
          <span className="text-[10px] font-mono tracking-[0.2em] text-text-secondary uppercase">
            Danish Khan — 2026
          </span>
        </div>

        {/* ══════════════════════════════
            Manifesto headline
        ══════════════════════════════ */}
        <div
          ref={headlineRef}
          className="py-14 md:py-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-clash-display tracking-tight leading-[1.05] flex flex-wrap gap-x-4 gap-y-1">
            {words.map((word, i) => (
              <span key={i} className="overflow-hidden inline-block">
                <span
                  className={`about-word inline-block ${
                    i >= 4 ? "text-gradient italic" : "text-white"
                  }`}
                >
                  {word}
                </span>
              </span>
            ))}
          </h2>
        </div>

        {/* ══════════════════════════════
            Horizontal fact rows
        ══════════════════════════════ */}
        <div className="about-rows flex flex-col border-t border-white/[0.05] mb-20">
          {facts.map((fact, i) => (
            <div
              key={i}
              className="about-row flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-0 py-5 border-b border-white/[0.05] group transition-colors duration-300 hover:bg-white/[0.015] -mx-6 md:-mx-12 px-6 md:px-12"
            >
              {/* Icon + label */}
              <div className="flex items-center gap-3 sm:w-40 shrink-0">
                <span className="text-primary-accent/60 group-hover:text-primary-accent transition-colors duration-300">
                  {fact.icon}
                </span>
                <span className="text-[10px] font-mono tracking-[0.2em] text-text-secondary uppercase">
                  {fact.label}
                </span>
              </div>

              {/* Dotted line connector */}
              <div className="hidden sm:block flex-1 border-b border-dashed border-white/[0.06] mx-6" />

              {/* Value */}
              <div className="flex flex-col sm:text-right shrink-0">
                <span className="text-sm font-medium text-white font-clash-display tracking-wide">
                  {fact.value}
                </span>
                <span className="text-[10px] text-text-secondary font-mono mt-0.5">
                  {fact.sub}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ══════════════════════════════
            Bio section
        ══════════════════════════════ */}
        <div className="about-cards flex flex-col items-start gap-8 pb-20 max-w-4xl">
          <div className="about-card flex flex-col gap-6">
            <p className="text-lg md:text-xl text-text-secondary leading-[1.8] font-light">
              I'm a <span className="text-white font-medium">Full Stack Software Engineer</span> based
              in Maharashtra, India — currently pursuing a B.Tech in Computer Science.
              I've interned across full-stack environments and bring a developer's precision to
              every project I touch.
            </p>
            <p className="text-lg md:text-xl text-text-secondary leading-[1.8] font-light">
              My craft sits at the intersection of engineering rigour and visual design — writing
              clean, typed APIs as carefully as I compose a grid layout.
            </p>

            <Link
              to="/resume"
              className="group mt-4 inline-flex items-center gap-3 w-fit text-sm font-mono tracking-wider text-primary-accent hover:text-white transition-colors duration-300"
            >
              View Full Résumé
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

      </div>

      {/* ── Bottom rule ── */}
      <div className="border-t border-white/[0.05]" />
    </section>
  );
}
