import React from "react";
import { ArrowLeft, Cpu, Terminal, ShieldAlert } from "lucide-react";
import Link from "next/link";

/**
 * ProjectCaseStudy Component (Next.js Dynamic Route)
 * 
 * Path: src/app/projects/[id]/page.jsx
 * Highly scannable, editorial case study template with markdown-style dividers,
 * system flow schematics, and an engineering debugging ledger.
 */
export default async function ProjectCaseStudy({ params }) {
  // Await params to support Next.js 15+ specifications natively
  const resolvedParams = await params;
  const { id } = resolvedParams;

  // Static dictionary representing full-stack flagship project data
  const projectDetails = {
    "madina-perfumes": {
      title: "Madina Perfumes",
      objective: "Scale catalog state querying performance and enforce transactional integrity for nested ordering pipelines.",
      role: "Lead Full-Stack Architect",
      duration: "4 Months",
      stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      dataFlow: `
[Client State (Redux)] --(POST /api/orders)--> [Route JWT Validation]
                                                      |
                                          (Zod Schema Sanity Checks)
                                                      |
                                                      v
                                        [Aggregated Pipeline Query]
                                                      |
                                        (MongoDB Multi-Document Session)
                                                      |
                                                      v
                                        [200 OK: Response Payload]
      `,
      debuggingLedger: [
        {
          bug: "Vite Cursor Positioning Lag",
          diagnosis: "Redundant CSS transition-transform rules conflicting directly with requestAnimationFrame paint threads during rapid movement.",
          resolution: "Removed CSS transform transitions; refactored styling to inject high-performance GPU 2D matrices directly onto elements."
        },
        {
          bug: "Refractive Lens Readability Loss",
          diagnosis: "High backdrop-blur (16px) overlay layers causing extreme subpixel rendering and text color distortion.",
          resolution: "Trimmed backdrop-blur to exactly 1.2px, added contrast-125 and saturate-130 utility parameters for high contrast."
        },
        {
          bug: "Typography Badge Rotation Stutter",
          diagnosis: "GSAP linear clock animation taxing main-thread rendering loops even when scrolled out of view.",
          resolution: "Wrapped rotating SVG paths in an IntersectionObserver context, triggering GSAP .pause() automatically when out of viewport."
        }
      ]
    },
    "boliselikh": {
      title: "BoliseLikh",
      objective: "Architect a layout-stable writing pipeline utilizing custom markdown parsing layers and relational schemas.",
      role: "Core Systems Engineer",
      duration: "6 Months",
      stack: ["Next.js", "React.js", "Supabase", "Vite", "Tailwind CSS"],
      dataFlow: `
[Markdown Workspace] --(Client Input Stream)--> [Dynamic AST Parser]
                                                       |
                                            (DOM Reflow Prevention)
                                                       |
                                                       v
                                            [Supabase API Client]
                                                       |
                                            (PostgreSQL RLS Filters)
                                                       |
                                                       v
                                            [201 Created: DB Row Commit]
      `,
      debuggingLedger: [
        {
          bug: "Document State Jitter",
          diagnosis: "Asynchronous state dispatches triggering parent re-renderings during active markdown parsing loops.",
          resolution: "Decoupled state syncing using debounced refs and shifted coordinate tracking to stand-alone custom hooks."
        },
        {
          bug: "Mobile Render Repaint Bottleneck",
          diagnosis: "Coarse input touch listeners registering useless mouse move variables on mobile displays, causing layout thrashing.",
          resolution: "Implemented matchMedia bypass to permanently self-disable the tracking logic on course pointing interfaces."
        },
        {
          bug: "Filter Overlay Layer Collision",
          diagnosis: "Excessive filter layers (blur, contrast, saturate) causing layout repaint loops under complex DOM parent stacks.",
          resolution: "Decoupled transition classes from spatial transforms, strictly restricting will-change rules to transform and opacity."
        }
      ]
    }
  };

  // Fallback default details if the parameter does not match flagship projects
  const activeProject = projectDetails[id] || {
    title: id.charAt(0).toUpperCase() + id.slice(1),
    objective: "Engineering robust full-stack solutions with clean computing tiers and highly responsive micro-interactions.",
    role: "Full-Stack Architect",
    duration: "Ongoing",
    stack: ["React.js", "Node.js", "Express.js", "Tailwind CSS"],
    dataFlow: `
[Client Presentation] --(RESTful Request)--> [Server Route Validation]
                                                     |
                                            (Logic Aggregation Layer)
                                                     |
                                                     v
                                            [Database Storage Layer]
    `,
    debuggingLedger: [
      {
        bug: "Vite Positioning Lag",
        diagnosis: "CSS transition-transform rules conflicting directly with requestAnimationFrame paint threads.",
        resolution: "Replaced CSS transitions with direct GPU matrix injection and restricted will-change layout properties."
      }
    ]
  };

  return (
    <div className="min-h-screen w-full bg-[#030303] text-white flex flex-col font-sans relative overflow-hidden select-none pb-24">
      {/* Viewport mesh background glow */}
      <div className="absolute top-0 left-1/3 w-[60vw] h-[60vw] rounded-full bg-neutral-800/10 blur-[130px] pointer-events-none -z-10" />

      {/* Main Container */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 w-full pt-20 flex flex-col gap-10">
        
        {/* Navigation back link */}
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-[10px] font-mono text-neutral-500 hover:text-white transition-colors duration-300 uppercase tracking-widest"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-white transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Workspace
        </Link>

        {/* --- ZONE 1: EXECUTIVE SYNOPSIS HEADER --- */}
        <header className="flex flex-col gap-6">
          <span className="w-fit text-[9px] font-mono tracking-widest text-neutral-400 uppercase bg-neutral-900 border border-neutral-800 px-3 py-1 rounded-full">
            [ System Architecture Case Study ]
          </span>

          <h1 className="text-4xl sm:text-6xl font-black font-clash-display tracking-tight text-white leading-none uppercase">
            {activeProject.title}
          </h1>

          {/* Separator Divider */}
          <hr className="border-neutral-800" />

          {/* 4-Column Header Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-4">
            <div className="flex flex-col gap-1.5 pl-4 border-l border-neutral-800">
              <span className="text-[9px] text-neutral-500 font-mono tracking-widest font-medium uppercase">Role</span>
              <span className="text-xs font-bold text-white uppercase">{activeProject.role}</span>
            </div>

            <div className="flex flex-col gap-1.5 pl-4 border-l border-neutral-800">
              <span className="text-[9px] text-neutral-500 font-mono tracking-widest font-medium uppercase">Duration</span>
              <span className="text-xs font-bold text-white uppercase">{activeProject.duration}</span>
            </div>

            <div className="flex flex-col gap-1.5 pl-4 border-l border-neutral-800 col-span-2">
              <span className="text-[9px] text-neutral-500 font-mono tracking-widest font-medium uppercase">Core Stack</span>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {activeProject.stack.map((item, idx) => (
                  <span
                    key={idx}
                    className="text-[9px] font-mono bg-neutral-900 text-neutral-400 px-2 py-0.5 rounded border border-neutral-800/60"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <hr className="border-neutral-800" />

          {/* Engineering Objective Block */}
          <div className="flex flex-col gap-2 p-5 rounded-2xl bg-neutral-950 border border-neutral-900">
            <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest">
              [ Targeted Engineering Objective ]
            </span>
            <p className="text-xs md:text-sm text-neutral-300 leading-relaxed font-light">
              {activeProject.objective}
            </p>
          </div>
        </header>

        {/* --- ZONE 2: SYSTEM DATA FLOW SCHEMA --- */}
        <section className="flex flex-col gap-6">
          <div className="flex items-center gap-2.5">
            <Cpu className="w-4 h-4 text-neutral-400" />
            <h3 className="text-lg font-bold font-clash-display uppercase tracking-widest text-white">
              System Data Flow
            </h3>
          </div>

          <div className="rounded-2xl border border-neutral-900 bg-neutral-950 p-6 flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-neutral-900 pb-3 font-mono text-[9px] tracking-wider text-neutral-500 uppercase">
              <span>Schematic Flowchart</span>
              <span className="text-green-500 animate-pulse">[ Status: Active Execution ]</span>
            </div>

            {/* Code Schematic rendering */}
            <div className="font-mono text-[10px] leading-relaxed text-neutral-400 p-4 bg-black/40 rounded-xl overflow-x-auto whitespace-pre">
              {activeProject.dataFlow.trim()}
            </div>
          </div>
        </section>

        {/* --- ZONE 3: PRODUCTION DEBUGGING LEDGER --- */}
        <section className="flex flex-col gap-6">
          <div className="flex items-center gap-2.5">
            <Terminal className="w-4 h-4 text-neutral-400" />
            <h3 className="text-lg font-bold font-clash-display uppercase tracking-widest text-white">
              Production Debugging Ledger
            </h3>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-neutral-900 bg-neutral-950">
            <table className="w-full border-collapse text-left text-xs font-mono">
              <thead>
                <tr className="border-b border-neutral-900 text-neutral-500 uppercase text-[9px] tracking-widest">
                  <th className="p-4 font-semibold">Bug / Edge Case</th>
                  <th className="p-4 font-semibold">Diagnosis</th>
                  <th className="p-4 font-semibold">Resolution</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-900 text-neutral-300">
                {activeProject.debuggingLedger.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-white/[0.01] transition-colors duration-200"
                  >
                    <td className="p-4 align-top font-bold text-white whitespace-nowrap flex items-start gap-2">
                      <ShieldAlert className="w-3.5 h-3.5 text-neutral-500 shrink-0 mt-0.5" />
                      {row.bug}
                    </td>
                    <td className="p-4 align-top font-light leading-relaxed max-w-[280px]">
                      {row.diagnosis}
                    </td>
                    <td className="p-4 align-top font-light leading-relaxed max-w-[320px] text-neutral-400">
                      {row.resolution}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

      </div>
    </div>
  );
}
