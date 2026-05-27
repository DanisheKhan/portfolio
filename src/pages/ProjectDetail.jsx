import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Cpu, HelpCircle, CheckCircle2, ShieldCheck } from "lucide-react";
import PageTransition from "../components/layout/PageTransition";
import { PROJECTS_DATA } from "../lib/data";
import ScrollReveal from "../components/ui/ScrollReveal";
import MagneticButton from "../components/ui/MagneticButton";

/**
 * ProjectDetail Page Component (/projects/:slug)
 * Renders full case study breakdowns including problems, solutions, architecture, and performance.
 */
export default function ProjectDetail() {
  const { slug } = useParams();
  
  // Find project matching the URL param
  const project = PROJECTS_DATA.find((p) => p.slug === slug);

  if (!project) {
    return (
      <PageTransition>
        <div className="w-full h-screen bg-[#0A0A0A] flex flex-col justify-center items-center select-none text-center p-6 gap-6">
          <span className="text-sm font-mono text-primary-accent uppercase tracking-widest font-bold">404 Error</span>
          <h1 className="text-3xl md:text-5xl font-bold font-clash-display text-white">Project Not Found</h1>
          <Link to="/projects" className="px-6 py-2.5 rounded-full bg-primary-accent text-xs font-mono uppercase tracking-wider text-white shadow-lg shadow-primary-accent/25 hover:bg-secondary-accent transition-colors duration-300">
            Back to Catalog
          </Link>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="w-full relative bg-[#0A0A0A] pb-24 overflow-hidden select-none">
        
        {/* Project Header Hero Frame */}
        <section className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] flex items-end">
          <div className="absolute inset-0 z-0">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover origin-center opacity-40"
            />
            {/* Ambient vignette masks */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary-bg via-primary-bg/30 to-transparent" />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 pb-12 flex flex-col gap-6 items-start">
            <ScrollReveal direction="up">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-xs font-mono text-text-secondary hover:text-white transition-colors duration-300 uppercase tracking-widest"
              >
                <ArrowLeft className="w-4 h-4 text-primary-accent" />
                Back to Catalog
              </Link>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1}>
              <span className="text-xs uppercase font-mono tracking-widest text-secondary-accent font-medium bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                {project.category}
              </span>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-clash-display tracking-tight text-white leading-none">
                {project.title}
              </h1>
            </ScrollReveal>
          </div>
        </section>

        {/* Project Metadata Section */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 border-b border-border-color/60 grid grid-cols-2 md:grid-cols-4 gap-8">
          <ScrollReveal direction="up" className="flex flex-col gap-1.5 pl-4 border-l border-border-color">
            <span className="text-[10px] text-text-secondary font-mono tracking-widest font-medium uppercase">Role</span>
            <span className="text-sm font-semibold text-white">{project.role}</span>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.08} className="flex flex-col gap-1.5 pl-4 border-l border-border-color">
            <span className="text-[10px] text-text-secondary font-mono tracking-widest font-medium uppercase">Duration</span>
            <span className="text-sm font-semibold text-white">{project.duration}</span>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.16} className="flex flex-col gap-1.5 pl-4 border-l border-border-color">
            <span className="text-[10px] text-text-secondary font-mono tracking-widest font-medium uppercase">Year Completed</span>
            <span className="text-sm font-semibold text-white">{project.year}</span>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.24} className="flex flex-col gap-1.5 pl-4 border-l border-border-color">
            <span className="text-[10px] text-text-secondary font-mono tracking-widest font-medium uppercase">Open Source</span>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-secondary-accent hover:text-primary-accent transition-colors duration-300 flex items-center gap-1">
              View Code
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </ScrollReveal>
        </section>

        {/* Case Study Core content */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
          
          {/* Case study: Problem Statement & Solution */}
          <div className="lg:col-span-8 flex flex-col gap-12">
            
            {/* Problem block */}
            <ScrollReveal direction="up" className="glass-card p-8 rounded-2xl border border-border-color bg-card-bg/15 flex gap-6">
              <div className="p-3 w-fit h-fit rounded-xl bg-red-500/10 border border-red-500/20 shrink-0 hidden sm:block">
                <HelpCircle className="w-6 h-6 text-red-400" />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-bold font-clash-display text-white">
                  The Problem Statement
                </h3>
                <p className="text-xs md:text-sm text-text-secondary leading-relaxed font-light">
                  {project.caseStudy.problem}
                </p>
              </div>
            </ScrollReveal>

            {/* Solution block */}
            <ScrollReveal direction="up" delay={0.1} className="glass-card p-8 rounded-2xl border border-border-color bg-card-bg/15 flex gap-6">
              <div className="p-3 w-fit h-fit rounded-xl bg-green-500/10 border border-green-500/20 shrink-0 hidden sm:block">
                <CheckCircle2 className="w-6 h-6 text-green-400" />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-bold font-clash-display text-white">
                  The Implemented Solution
                </h3>
                <p className="text-xs md:text-sm text-text-secondary leading-relaxed font-light">
                  {project.caseStudy.solution}
                </p>
              </div>
            </ScrollReveal>

            {/* Solution Architecture */}
            <ScrollReveal direction="up" delay={0.2} className="flex flex-col gap-6">
              <h3 className="text-2xl font-bold font-clash-display text-white">
                Solution Architecture & Strategy
              </h3>
              
              <div className="flex flex-col gap-4">
                {project.caseStudy.architecture.map((archText, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <div className="p-1.5 rounded bg-primary-accent/15 border border-primary-accent/20 mt-0.5">
                      <Cpu className="w-3.5 h-3.5 text-primary-accent" />
                    </div>
                    <span className="text-xs md:text-sm text-text-secondary leading-relaxed font-light">
                      {archText}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right column: Outbound CTA & Performance benchmarks */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            
            {/* Live CTA button */}
            <ScrollReveal direction="up" delay={0.25}>
              <div className="glass-card p-6 md:p-8 rounded-2xl border border-border-color bg-card-bg/25 flex flex-col gap-6 text-center justify-center items-center">
                <h3 className="text-lg font-bold font-clash-display text-white">
                  Experience It Live
                </h3>
                <p className="text-[11px] text-text-secondary font-light">
                  Connect directly with the active production deployment environments.
                </p>
                <MagneticButton range={15}>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3.5 rounded-full bg-gradient-to-r from-primary-accent via-secondary-accent to-primary-accent text-xs font-mono uppercase tracking-wider text-white shadow-lg flex items-center gap-2 group cursor-pointer"
                  >
                    Launch App
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </a>
                </MagneticButton>
              </div>
            </ScrollReveal>

            {/* Performance metrics dashboard */}
            <ScrollReveal direction="up" delay={0.3}>
              <div className="glass-card p-6 md:p-8 rounded-2xl border border-border-color bg-card-bg/25 flex flex-col gap-6">
                <div className="flex gap-2 items-center pb-3 border-b border-border-color/60 text-white font-bold text-sm font-mono tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-secondary-accent" />
                  Lighthouse Scores
                </div>

                <div className="flex flex-col gap-4">
                  {Object.entries(project.caseStudy.benchmarks).map(([key, val], idx) => (
                    <div key={idx} className="flex justify-between items-center text-xs font-mono">
                      <span className="text-text-secondary uppercase tracking-widest">{key}</span>
                      <span className="font-bold text-white text-sm bg-white/5 border border-white/5 px-2 py-0.5 rounded">
                        {val}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

          </div>

        </section>

      </div>
    </PageTransition>
  );
}
