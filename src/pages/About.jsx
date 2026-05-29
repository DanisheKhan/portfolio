import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, GraduationCap, MapPin, Mail, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageTransition from "../components/layout/PageTransition";
import { PERSONAL_DETAILS } from "../lib/data";
import ScrollReveal from "../components/ui/ScrollReveal";

gsap.registerPlugin(ScrollTrigger);

/**
 * About Page (/about) — full editorial redesign.
 *
 * Four distinct sections with unique layouts:
 * 1. Full-bleed opening with oversized name + portrait side-by-side
 * 2. Horizontal scrolling timeline of milestones
 * 3. Education + philosophy two-column split
 * 4. Skill capability table — elegant text-based design
 */
export default function About() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax on portrait
      gsap.to(".about-portrait", {
        y: -60,
        ease: "none",
        scrollTrigger: {
          trigger: ".about-hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Stagger-reveal name lines
      gsap.from(".name-line", {
        y: "100%",
        opacity: 0,
        stagger: 0.15,
        duration: 1.1,
        ease: "power4.out",
        delay: 0.2,
      });

      // Reveal metadata items
      gsap.from(".meta-item", {
        opacity: 0,
        y: 12,
        stagger: 0.08,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.7,
      });

      // Timeline rows
      gsap.from(".timeline-item", {
        opacity: 0,
        x: -24,
        stagger: 0.15,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".timeline-section",
          start: "top 80%",
        },
      });

      // Skill rows
      gsap.from(".skill-row", {
        opacity: 0,
        x: -16,
        stagger: 0.1,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".skills-section",
          start: "top 80%",
        },
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const milestones = [
    {
      year: "2020",
      title: "Secondary School (Class X)",
      role: "Student",
      org: "Maharashtra State Board",
      desc: "Completed secondary education with 89.60% distinction, focusing on core sciences and mathematics.",
    },
    {
      year: "2022",
      title: "Senior Secondary (Class XII)",
      role: "Student",
      org: "Maharashtra State Board",
      desc: "Completed senior secondary education in Science Stream with 70%.",
    },
    {
      year: "2024",
      title: "MERN Stack Projects",
      role: "Full Stack Engineer",
      org: "Independent Work",
      desc: "Engineered scalable platforms like Home Share, leveraging Node.js, React.js, and MongoDB.",
    },
    {
      year: "2025",
      title: "Professional Internship",
      role: "Full Stack Developer Intern",
      org: "Meet Bros",
      desc: "Designed and launched multiple commercial web applications with modern frontend frameworks and robust backends.",
    },
    {
      year: "2026",
      title: "Bachelor of Technology",
      role: "Student",
      org: "Raisoni Engineering College",
      desc: "Expected completion of B.Tech in Computer Science with a CGPA of 7.79/10.",
    },
  ];

  const deepSkills = [
    { name: "React.js / Next.js Architecture", proficiency: "Expert", pct: 95 },
    { name: "Node.js & Express REST APIs", proficiency: "Expert", pct: 90 },
    { name: "MongoDB & Supabase", proficiency: "Advanced", pct: 90 },
    { name: "JWT Auth & Security Flows", proficiency: "Advanced", pct: 92 },
    { name: "JavaScript / TypeScript", proficiency: "Expert", pct: 95 },
    { name: "Tailwind CSS & UI Design", proficiency: "Expert", pct: 95 },
  ];

  const principles = [
    { n: "01", t: "Ship with intent", b: "Every line of code is a decision. I write deliberately — typing everything, documenting the why, not just the what." },
    { n: "02", t: "Design as engineering", b: "UI is not decoration. Spacing, colour, and motion are system decisions that affect usability just as much as architecture." },
    { n: "03", t: "Performance is a feature", b: "Speed, accessibility, and stability are not after-thoughts. They're part of the spec from day one." },
  ];

  return (
    <PageTransition>
      <div ref={pageRef} className="w-full relative bg-primary-bg select-none overflow-x-hidden">

        {/* ════════════════════════════════════════
            SECTION 1 — HERO: Name + portrait + meta
        ════════════════════════════════════════ */}
        <section className="about-hero relative min-h-screen flex flex-col justify-end overflow-hidden">

          {/* Portrait — fills right half on lg, full bg on mobile */}
          <div className="absolute inset-0 lg:left-auto lg:right-0 lg:top-0 lg:bottom-0 lg:w-[52%] overflow-hidden pointer-events-none">
            <div className="about-portrait w-full h-full">
              <img
                src="/danish.jpeg"
                alt="Danish Khan"
                className="w-full h-full object-cover object-top"
              />
              {/* Mobile overlay — strong gradient so text reads clearly */}
              <div className="absolute inset-0 lg:hidden" style={{
                background: "linear-gradient(to right, rgba(11,11,12,0.95) 0%, rgba(11,11,12,0.88) 60%, rgba(11,11,12,0.7) 100%)"
              }} />
              {/* Left fade to blend into content (desktop) */}
              <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-primary-bg via-primary-bg/60 to-transparent lg:via-primary-bg/40" />
              {/* Bottom fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-bg via-transparent to-primary-bg/40" />
            </div>
          </div>

          {/* Content overlay */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full pb-12 sm:pb-16 pt-24 sm:pt-32">
            <div className="max-w-2xl flex flex-col gap-6 sm:gap-8">

              {/* Eyebrow */}
              <span className="meta-item text-[10px] font-mono tracking-[0.3em] text-primary-accent uppercase font-semibold">
                ✦ The Story
              </span>

              {/* Name — stacked massive */}
              <div className="flex flex-col -space-y-2">
                <div className="overflow-hidden">
                  <div className="name-line text-[clamp(3rem,10vw,8rem)] font-bold font-clash-display leading-[0.88] tracking-tight text-white">
                    Danish
                  </div>
                </div>
                <div className="overflow-hidden">
                  <div className="name-line text-[clamp(3rem,10vw,8rem)] font-bold font-clash-display leading-[0.88] tracking-tight text-gradient italic">
                    Khan.
                  </div>
                </div>
              </div>

              {/* Role tag */}
              <div className="meta-item flex items-center gap-3">
                <span className="h-px w-8 bg-primary-accent/60" />
                <span className="text-xs font-mono tracking-[0.25em] text-primary-accent uppercase font-semibold">
                  Full Stack Software Engineer
                </span>
              </div>

              {/* Short bio */}
              <p className="meta-item text-sm md:text-base text-text-secondary leading-[1.9] font-light max-w-lg">
                Passionate about translating complex engineering problems into
                clean, fast, and beautiful digital products. Based in Maharashtra,
                India — currently completing a B.Tech in AI &amp; CS while shipping
                real-world full-stack applications.
              </p>

              {/* Meta row */}
              <div className="meta-item flex flex-wrap gap-3 sm:gap-5 pt-2">
                <span className="flex items-center gap-1.5 text-[11px] font-mono text-text-secondary">
                  <MapPin className="w-3 h-3 text-primary-accent/60" />
                  {PERSONAL_DETAILS.location}
                </span>
                <span className="flex items-center gap-1.5 text-[11px] font-mono text-text-secondary">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  {PERSONAL_DETAILS.availability}
                </span>
                <a
                  href={`mailto:${PERSONAL_DETAILS.email}`}
                  className="flex items-center gap-1.5 text-[11px] font-mono text-text-secondary hover:text-primary-accent transition-colors duration-300 break-all"
                >
                  <Mail className="w-3 h-3 shrink-0" />
                  {PERSONAL_DETAILS.email}
                </a>
              </div>

              {/* CTAs */}
              <div className="meta-item flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4 pt-2">
                <Link
                  to="/resume"
                  className="group inline-flex items-center justify-center xs:justify-start gap-2 h-11 px-6 rounded-full bg-primary-accent text-[#0B0B0C] text-xs font-semibold font-mono tracking-wider hover:bg-secondary-accent transition-all duration-300 hover:shadow-[0_0_30px_rgba(197,168,128,0.3)] active:scale-95"
                >
                  View Résumé
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <a
                  href={`https://github.com/${PERSONAL_DETAILS.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center xs:justify-start gap-2 h-11 px-6 rounded-full border border-white/[0.1] bg-white/[0.02] text-xs font-mono tracking-wider text-text-secondary hover:text-white hover:border-white/20 transition-all duration-300 active:scale-95"
                >
                  GitHub
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            SECTION 2 — TIMELINE
        ════════════════════════════════════════ */}
        <section className="timeline-section border-t border-white/[0.05]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">

            {/* Header */}
            <div className="flex items-center justify-between py-12 border-b border-white/[0.05]">
              <span className="text-[10px] font-mono tracking-[0.3em] text-primary-accent uppercase font-semibold">
                ✦ Chronology
              </span>
              <span className="text-[10px] font-mono tracking-[0.2em] text-text-secondary uppercase">
                2022 — Present
              </span>
            </div>

            {/* Timeline rows */}
            <div className="flex flex-col">
              {milestones.map((m, i) => (
                <div
                  key={i}
                  className="timeline-item group flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-8 py-6 sm:py-8 border-b border-white/[0.05] hover:bg-white/[0.015] -mx-4 sm:-mx-6 md:-mx-12 px-4 sm:px-6 md:px-12 transition-colors duration-300"
                >
                  {/* Year */}
                  <span className="text-3xl md:text-4xl font-bold font-clash-display text-white/10 group-hover:text-primary-accent/40 transition-colors duration-300 shrink-0 w-20 leading-none pt-1">
                    {m.year}
                  </span>

                  {/* Content */}
                  <div className="flex-1 flex flex-col sm:flex-row gap-4 sm:gap-8">
                    <div className="flex flex-col gap-1 sm:w-52 shrink-0">
                      <h3 className="text-base font-bold font-clash-display text-white group-hover:text-primary-accent transition-colors duration-300">
                        {m.title}
                      </h3>
                      <span className="text-[10px] font-mono text-primary-accent/70 uppercase tracking-wider">
                        {m.role}
                      </span>
                      <span className="text-[10px] font-mono text-text-secondary">
                        {m.org}
                      </span>
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed font-light flex-1">
                      {m.desc}
                    </p>
                  </div>

                  {/* Gold accent bar on hover */}
                  <span className="hidden sm:block absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary-accent to-transparent scale-y-0 group-hover:scale-y-100 transition-transform duration-400 origin-top" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            SECTION 3 — EDUCATION + PRINCIPLES
        ════════════════════════════════════════ */}
        <section className="border-t border-white/[0.05]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.05]">

            {/* Education */}
            <div className="py-14 lg:pr-12">
              <ScrollReveal direction="up">
                <span className="text-[10px] font-mono tracking-[0.3em] text-primary-accent uppercase font-semibold block mb-8">
                  ✦ Education
                </span>
              </ScrollReveal>

              <div className="flex flex-col gap-6">
                <ScrollReveal direction="up" delay={0.05}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl border border-primary-accent/20 bg-primary-accent/[0.06] flex items-center justify-center shrink-0 mt-1">
                      <GraduationCap className="w-5 h-5 text-primary-accent" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <h3 className="text-lg font-bold font-clash-display text-white leading-tight">
                        Bachelor of Technology
                      </h3>
                      <p className="text-sm text-primary-accent/80 font-mono">
                        Computer Science
                      </p>
                      <p className="text-xs text-text-secondary font-mono">
                        Raisoni Engineering College, Maharashtra
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                  {[
                    { label: "Expected", value: "June 2026" },
                    { label: "CGPA", value: "7.79 / 10.0" },
                    { label: "Timezone", value: "IST (UTC+5:30)" },
                    { label: "Response", value: "< 24 hours" },
                  ].map((d, i) => (
                    <div key={i} className="bg-white/[0.02] border border-white/[0.05] p-3 rounded-lg flex flex-col gap-0.5">
                      <span className="text-[9px] font-mono text-text-secondary uppercase">{d.label}</span>
                      <span className="text-xs font-mono text-white">{d.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Principles */}
            <div className="py-14 lg:pl-12">
              <ScrollReveal direction="up">
                <span className="text-[10px] font-mono tracking-[0.3em] text-primary-accent uppercase font-semibold block mb-8">
                  ✦ Core Principles
                </span>
              </ScrollReveal>
              <div className="flex flex-col gap-4">
                {principles.map((p, i) => (
                  <ScrollReveal key={i} direction="up" delay={i * 0.05}>
                    <div className="flex items-start gap-4 group">
                      <span className="text-[10px] font-mono text-primary-accent mt-1 opacity-50 font-bold">{p.n}</span>
                      <div className="flex flex-col gap-1">
                        <h4 className="text-sm font-bold text-white group-hover:text-primary-accent transition-colors duration-300">{p.t}</h4>
                        <p className="text-xs text-text-secondary leading-relaxed font-light">{p.b}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            SECTION 4 — SKILL CAPABILITY TABLE
        ════════════════════════════════════════ */}
        <section className="skills-section border-t border-white/[0.05]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">

            <div className="flex items-center justify-between py-12 border-b border-white/[0.05]">
              <span className="text-[10px] font-mono tracking-[0.3em] text-primary-accent uppercase font-semibold">
                ✦ Capabilities
              </span>
              <Link
                to="/"
                className="text-[10px] font-mono tracking-[0.2em] text-text-secondary hover:text-primary-accent transition-colors duration-300 uppercase"
              >
                Full Tech Stack ↗
              </Link>
            </div>

            {/* Skills table */}
            <div className="flex flex-col pb-12 sm:pb-16">
              {deepSkills.map((s, i) => (
                <div
                  key={i}
                  className="skill-row group flex items-center gap-4 sm:gap-6 py-4 sm:py-5 border-b border-white/[0.05] hover:bg-white/[0.015] -mx-4 sm:-mx-6 md:-mx-12 px-4 sm:px-6 md:px-12 transition-colors duration-300"
                >
                  {/* Name */}
                  <span className="flex-1 text-sm font-medium text-white group-hover:text-primary-accent transition-colors duration-300 font-clash-display">
                    {s.name}
                  </span>

                  {/* Proficiency label */}
                  <span className="text-[10px] font-mono tracking-widest text-text-secondary uppercase shrink-0 hidden sm:block w-20 text-right">
                    {s.proficiency}
                  </span>

                  {/* Progress bar */}
                  <div className="shrink-0 w-24 md:w-40 h-[2px] bg-white/[0.06] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: [0.25, 0.8, 0.25, 1], delay: i * 0.08 }}
                      className="h-full bg-gradient-to-r from-primary-accent to-secondary-accent rounded-full"
                    />
                  </div>

                  {/* Percentage */}
                  <span className="text-[10px] font-mono text-text-secondary shrink-0 w-8 text-right">
                    {s.pct}%
                  </span>
                </div>
              ))}
            </div>

          </div>
        </section>

      </div>
    </PageTransition>
  );
}
