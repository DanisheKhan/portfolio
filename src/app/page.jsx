"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Cpu, Code2, Database, LayoutGrid, Terminal, ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";

/**
 * EditorialHomepage Component (Next.js page.jsx)
 * 
 * Immersive, high-performance developer workspace layout designed for Danish Khan.
 * Tailored with monochrome color restraint, zero layout thrashing, and hardware-accelerated animations.
 */
export default function EditorialHomepage() {
  const magneticButtonRef = useRef(null);
  const badgeRef = useRef(null);
  const [hoveredTool, setHoveredTool] = useState(null);

  // --- SECTION A: Magnetic CTA Proximity calculation ---
  useEffect(() => {
    const button = magneticButtonRef.current;
    if (!button) return;

    const handleMouseMove = (e) => {
      const rect = button.getBoundingClientRect();
      // Calculate button center coordinates
      const btnX = rect.left + rect.width / 2;
      const btnY = rect.top + rect.height / 2;

      // Mouse coordinates
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Displacement vectors
      const dx = mouseX - btnX;
      const dy = mouseY - btnY;
      const d = Math.sqrt(dx * dx + dy * dy);

      const R = 60; // Proximity threshold radius in pixels

      if (d < R) {
        // Elastic displacement formula: D_displacement = D_mouse * (1 - d/R)
        const factor = 1 - d / R;
        const dispX = dx * factor * 0.6; // Scale down slightly for elegant spring action
        const dispY = dy * factor * 0.6;

        button.style.transform = `translate3d(${dispX}px, ${dispY}px, 0)`;
      } else {
        button.style.transform = `translate3d(0, 0, 0)`;
      }
    };

    const handleMouseLeave = () => {
      button.style.transform = `translate3d(0, 0, 0)`;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // --- SECTION B: GSAP Rotating Badge & IntersectionObserver ---
  useEffect(() => {
    const badge = badgeRef.current;
    if (!badge) return;

    const anim = gsap.to(badge, {
      rotation: 360,
      ease: "none",
      duration: 16,
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

  // --- SECTION D: Cursor Context Broadcasting ---
  const handleProjectEnter = (projectName) => {
    const event = new CustomEvent("cursor-broadcast", {
      detail: `Analyze ${projectName} Architecture →`,
    });
    window.dispatchEvent(event);
  };

  const handleProjectLeave = () => {
    const event = new CustomEvent("cursor-broadcast", {
      detail: "",
    });
    window.dispatchEvent(event);
  };

  // --- SECTION C: Tiered System Architecture Data ---
  const technicalArsenal = [
    {
      tier: "1. Client Interface & Presentation Layer",
      icon: <LayoutGrid className="w-4 h-4 text-white" />,
      tools: [
        { name: "React.js", status: "Production Heavy" },
        { name: "Next.js", status: "Enterprise Core" },
        { name: "Vite", status: "Primary Bundler" },
        { name: "Tailwind CSS", status: "Design Standard" },
        { name: "Framer Motion", status: "Aesthetic Physics" },
      ],
    },
    {
      tier: "2. Server, Integration & Runtime Layer",
      icon: <Cpu className="w-4 h-4 text-white" />,
      tools: [
        { name: "Node.js", status: "Runtime Standard" },
        { name: "Express.js", status: "Modular Routing" },
        { name: "RESTful API Design", status: "Core Architecture" },
      ],
    },
    {
      tier: "3. Database & State Infrastructure Layer",
      icon: <Database className="w-4 h-4 text-white" />,
      tools: [
        { name: "MongoDB", status: "Aggregations Focus" },
        { name: "Supabase", status: "BaaS & Postgres" },
        { name: "Firebase", status: "Legacy Sync" },
        { name: "Linux Environments", status: "Core Devops" },
      ],
    },
    {
      tier: "4. Algorithmic Logic Layer",
      icon: <Code2 className="w-4 h-4 text-white" />,
      tools: [
        { name: "Java", status: "Low-level Backend" },
        { name: "Data Structures & Algorithms", status: "Strict Efficiency" },
      ],
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[#030303] text-white flex flex-col font-sans relative overflow-hidden select-none">
      {/* 1. SYSTEM CONFIG TICKER */}
      <div className="absolute top-0 left-0 w-full h-8 border-b border-neutral-900 bg-black/40 backdrop-blur-sm z-50 flex items-center overflow-hidden pointer-events-none opacity-40">
        <div className="whitespace-nowrap flex items-center gap-12 text-[9px] font-mono tracking-[0.2em] animate-marquee px-6 text-neutral-300">
          <span>BUILD: VITE // RUNTIME: NODE_20 // PLATFORM: MERN_ARCH // PERFORMANCE: 120FPS_LOCKED</span>
          <span>BUILD: VITE // RUNTIME: NODE_20 // PLATFORM: MERN_ARCH // PERFORMANCE: 120FPS_LOCKED</span>
          <span>BUILD: VITE // RUNTIME: NODE_20 // PLATFORM: MERN_ARCH // PERFORMANCE: 120FPS_LOCKED</span>
          <span>BUILD: VITE // RUNTIME: NODE_20 // PLATFORM: MERN_ARCH // PERFORMANCE: 120FPS_LOCKED</span>
        </div>
      </div>

      {/* Hero stage backdrop glow */}
      <div className="absolute top-0 left-1/4 w-[50vw] h-[50vw] rounded-full bg-neutral-800/10 blur-[130px] pointer-events-none -z-10" />

      {/* --- HERO STAGE --- */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-start max-w-7xl mx-auto px-6 md:px-12 w-full pt-16 border-b border-neutral-900">
        <div className="flex flex-col gap-6 max-w-4xl">
          <span className="text-[10px] font-mono tracking-[0.25em] text-neutral-500 uppercase">
            [ Developer Portfolio Reference ]
          </span>

          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black font-clash-display tracking-tighter text-white leading-[0.9] uppercase">
            Danish <br />
            <span className="text-neutral-500">Khan</span>
          </h1>

          <p className="text-sm md:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mt-4">
            Full Stack Developer specializing in MERN architectures, optimized dynamic rendering, and low-level Java data structures. Engineering clean logic and high-performance interactive interfaces.
          </p>

          {/* Magnetic CTA Target Core Button */}
          <div className="relative mt-8 h-20 flex items-center">
            <button
              ref={magneticButtonRef}
              className="px-8 py-4 rounded-full bg-white text-black font-mono text-xs uppercase tracking-wider font-bold hover:bg-neutral-200 shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-transform duration-200 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform flex items-center gap-3 shrink-0"
            >
              <span>Initialize Workspace</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </button>
          </div>
        </div>
      </section>

      {/* --- ABOUT ME OVERHAUL OPTIMIZATION --- */}
      <section className="relative w-full py-20 md:py-32 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* Left Column: Metrics & Pill CTA */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <span className="w-fit text-[9px] font-mono tracking-widest text-white uppercase bg-neutral-900 border border-neutral-800 px-3 py-1 rounded-full">
              [ Profile Synopsis ]
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-clash-display tracking-tight text-white leading-tight uppercase">
              Developing Systems with <br />
              <span className="text-neutral-500 font-light">restrained layouts.</span>
            </h2>

            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed font-light">
              Designing premium frontend platforms, building secure API frameworks, and governance structures. Focused on dynamic, high-framerate executions and layout stability.
            </p>

            {/* 2x2 grid containing glassmorphic metric cards */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 my-4 w-full">
              {[
                { number: "10M", sub: "Months Interned" },
                { number: "MERN", sub: "Stack Focus" },
                { number: "JAVA", sub: "DSA Specialist" },
                { number: "B.TECH", sub: "AI Student" },
              ].map((metric, idx) => (
                <div
                  key={idx}
                  className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 flex flex-col gap-1 transition-all duration-300 hover:border-neutral-500 hover:-translate-y-0.5 group/metric"
                >
                  <span className="text-3xl font-black font-mono text-white group-hover/metric:text-neutral-400 transition-colors duration-300">
                    {metric.number}
                  </span>
                  <span className="text-[9px] text-neutral-500 font-mono tracking-widest uppercase font-semibold">
                    {metric.sub}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Pill navigation */}
            <button className="group mt-4 inline-flex items-center gap-4 px-6 py-3 w-fit rounded-full bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-white font-medium transition-all duration-300">
              <span className="text-xs font-mono tracking-widest font-bold uppercase">Download CV</span>
              <span className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center transition-transform duration-300 ease-out group-hover:translate-x-2 shrink-0">
                <ArrowRight className="w-4 h-4 text-white" />
              </span>
            </button>
          </div>

          {/* Right Column: Visual Gallery Asset & Infinite rotation badge */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            {/* GSAP circular typography badge */}
            <div className="absolute -top-10 -right-10 z-20 w-32 h-32 select-none pointer-events-none scale-90 sm:scale-100">
              <div ref={badgeRef} className="w-full h-full relative">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <defs>
                    <path
                      id="circlePath"
                      d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                    />
                  </defs>
                  <text className="text-[7.2px] fill-neutral-500 font-mono tracking-[4px] uppercase font-bold">
                    <textPath href="#circlePath">
                      • 10 Months Interned • Danish Khan •
                    </textPath>
                  </text>
                </svg>

                {/* glowing center emblem */}
                <div className="absolute inset-[28%] rounded-full bg-neutral-950 border border-neutral-800 flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.05)] backdrop-blur-md">
                  <span className="text-white font-mono font-bold text-[9px] tracking-wider">
                    10M
                  </span>
                </div>
              </div>
            </div>

            {/* Portrait Frame Aspect Wrapper */}
            <div className="relative group cursor-pointer w-[300px] sm:w-[340px] md:w-[360px] aspect-[4/5]">
              {/* Offset border wireframe backing */}
              <div className="absolute inset-0 border border-neutral-800 rounded-[32px] translate-x-5 translate-y-5 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-x-3 group-hover:translate-y-3 group-hover:border-neutral-600 -z-10" />

              {/* Central Frame */}
              <div className="w-full h-full rounded-[32px] overflow-hidden bg-neutral-950 relative border border-neutral-800">
                <div className="w-full h-full bg-neutral-900 flex items-center justify-center relative">
                  {/* Visual placeholder inside editorial frame */}
                  <span className="text-neutral-600 font-mono text-xs font-bold uppercase tracking-widest select-none">
                    Asset Frame
                  </span>
                  
                  {/* Elegant bottom metadata vignette reveal */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/85 backdrop-blur-md border border-neutral-800 opacity-0 translate-y-4 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 flex justify-between items-center z-10">
                    <div className="flex flex-col">
                      <span className="text-white text-xs font-mono font-bold uppercase tracking-wider">
                        Danish Khan
                      </span>
                      <span className="text-[9px] text-neutral-500 font-mono">
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
        </div>
      </section>

      {/* --- TECHNICAL ARSENAL: TIERED SYSTEM ARCHITECTURE --- */}
      <section className="relative w-full py-20 md:py-32 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-12 w-full">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6 pb-6 border-b border-neutral-900">
            <div className="flex flex-col gap-4">
              <span className="w-fit text-[9px] font-mono tracking-widest text-white uppercase bg-neutral-900 border border-neutral-800 px-3 py-1 rounded-full">
                [ Computing Stack Tiers ]
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-clash-display uppercase tracking-tight">
                Technical <span className="text-neutral-500 font-light">Arsenal</span>
              </h2>
            </div>
            {/* Stationary Diagnostic Tooltip readout */}
            <div className="font-mono text-[10px] tracking-widest text-neutral-500 uppercase h-8 flex items-center">
              {hoveredTool ? (
                <span className="text-white animate-pulse">
                  [ Tool: {hoveredTool.name} // State: {hoveredTool.status} ]
                </span>
              ) : (
                <span>[ Status: Ecosystem Diagnostic Idle ]</span>
              )}
            </div>
          </div>

          {/* Tiered Stack Layout */}
          <div className="flex flex-col w-full">
            {technicalArsenal.map((tierData, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 lg:grid-cols-12 py-8 border-b border-neutral-900 last:border-b-0 gap-6 items-start transition-colors duration-300 hover:bg-white/[0.01] px-4"
              >
                <div className="lg:col-span-5 flex items-center gap-3">
                  <div className="p-2 bg-neutral-900 border border-neutral-800 rounded-lg shrink-0">
                    {tierData.icon}
                  </div>
                  <span className="text-xs font-mono font-bold tracking-wider text-neutral-400 uppercase">
                    {tierData.tier}
                  </span>
                </div>

                <div className="lg:col-span-7 flex flex-wrap gap-3">
                  {tierData.tools.map((tool, tIdx) => (
                    <div
                      key={tIdx}
                      onMouseEnter={() => setHoveredTool(tool)}
                      onMouseLeave={() => setHoveredTool(null)}
                      className="px-4 py-2 border border-neutral-800 hover:border-neutral-500 bg-neutral-950 text-white rounded-lg transition-colors duration-300 text-xs font-mono select-none cursor-pointer"
                    >
                      {tool.name}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SELECTED SYSTEMS SHOWCASE --- */}
      <section className="relative w-full py-20 md:py-32 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-16 w-full">
          <div className="flex flex-col gap-4">
            <span className="w-fit text-[9px] font-mono tracking-widest text-white uppercase bg-neutral-900 border border-neutral-800 px-3 py-1 rounded-full">
              [ Flagship Case Studies ]
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-clash-display uppercase tracking-tight">
              Selected <span className="text-neutral-500 font-light">Systems</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
            {[
              {
                id: "madina-perfumes",
                title: "Madina Perfumes",
                desc: "Integrated e-commerce database system modeling complex ordering states and optimized item categorizations.",
              },
              {
                id: "boliselikh",
                title: "BoliseLikh",
                desc: "Secure markdown writing pipeline engineering clean relational models, fast state transitions, and rendering stability.",
              },
            ].map((project, idx) => (
              <div
                key={idx}
                onMouseEnter={() => handleProjectEnter(project.title)}
                onMouseLeave={handleProjectLeave}
                className="group relative flex flex-col gap-6 p-6 border border-neutral-900 hover:border-neutral-700 bg-neutral-950/20 rounded-3xl transition-colors duration-300"
              >
                {/* Clamped graphics element */}
                <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 flex items-center justify-center relative">
                  <span className="text-neutral-600 font-mono text-xs uppercase tracking-widest transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] scale-100 group-hover:scale-105 select-none">
                    Preview Image Asset
                  </span>

                  <div className="absolute top-4 right-4 p-2.5 rounded-full bg-neutral-950/80 border border-neutral-800 text-white opacity-0 scale-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold font-clash-display uppercase tracking-wider text-white">
                    {project.title}
                  </h3>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed">
                    {project.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TELEMETRY SANDBOX FOOTER --- */}
      <footer className="w-full py-12 border-t border-neutral-900 bg-black/60 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-10 w-full">
          {/* Live Operational Status Pulse banner */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pb-6 border-b border-neutral-900">
            <div className="flex items-center gap-3 text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span>Operational Status: Available for Engineering Roles</span>
            </div>

            <span className="text-[9px] font-mono text-neutral-600 uppercase tracking-widest">
              © 2026 Danish Khan // ALL RIGHTS RESERVED
            </span>
          </div>

          {/* Diagnostic Sandbox Monitor display row */}
          <div className="flex overflow-x-auto select-none pointer-events-none pb-2">
            <div className="flex gap-12 font-mono text-[9px] tracking-[0.15em] text-neutral-500 uppercase whitespace-nowrap">
              <span>FPS: 120</span>
              <span>THREAD: HARDWARE_ACCELERATED</span>
              <span>DOM_NODES: STABLE</span>
              <span>LAYOUT_THRASHING: 0%</span>
              <span>GPU: ACCELERATED_COMPILE</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
