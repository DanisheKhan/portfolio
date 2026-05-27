import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PROJECTS_DATA } from "../../lib/data";
import ScrollReveal from "../ui/ScrollReveal";
import MagneticButton from "../ui/MagneticButton";

/**
 * Projects Section Component (Home Preview)
 * Renders alternating full-width project showcases.
 */
export default function Projects() {
  return (
    <section className="relative w-full py-20 md:py-32 bg-primary-bg overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-16 md:gap-24">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="flex flex-col gap-4">
            <ScrollReveal direction="up">
              <span className="text-xs uppercase font-mono tracking-widest text-primary-accent font-medium">
                CASE STUDIES
              </span>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-clash-display tracking-tight text-white leading-tight">
                Featured <span className="text-gradient">Projects</span>
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="left" delay={0.2}>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 group text-white font-medium hover:text-secondary-accent transition-colors duration-300"
            >
              View All Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300 text-primary-accent" />
            </Link>
          </ScrollReveal>
        </div>

        {/* Projects Alternating Display List */}
        <div className="flex flex-col gap-24 md:gap-36">
          {PROJECTS_DATA.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.slug}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center"
              >
                {/* 1. Project Image Mockup (Alternates position) */}
                <div
                  className={`lg:col-span-7 w-full h-[280px] sm:h-[380px] md:h-[450px] rounded-2xl overflow-hidden glass-card border border-border-color/60 cursor-pointer group relative ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover origin-center scale-100 group-hover:scale-[1.03] transition-transform duration-700"
                  />
                  {/* Backdrop Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-bg via-transparent to-transparent opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                  
                  {/* Dynamic Large Project Number overlay */}
                  <span className="absolute top-6 left-6 px-3.5 py-1.5 text-xs font-mono font-semibold tracking-widest text-white bg-black/80 backdrop-blur-md border border-white/10 rounded-lg shadow-lg">
                    {project.meta.number}
                  </span>

                  {/* Absolute Outbound Redirect button */}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-6 right-6 p-4 rounded-full bg-primary-accent hover:bg-secondary-accent text-white shadow-lg opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transform transition-all duration-300 cursor-pointer"
                  >
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </a>
                </div>

                {/* 2. Project Text description */}
                <div
                  className={`lg:col-span-5 flex flex-col gap-5 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <ScrollReveal direction={isEven ? "left" : "right"}>
                    <span className="text-xs uppercase font-mono tracking-widest text-text-secondary font-medium">
                      {project.category} &bull; {project.year}
                    </span>
                  </ScrollReveal>

                  <ScrollReveal direction={isEven ? "left" : "right"} delay={0.1}>
                    <Link to={`/projects/${project.slug}`}>
                      <h3 className="text-3xl md:text-4xl font-bold font-clash-display text-white hover:text-primary-accent transition-colors duration-300 cursor-pointer">
                        {project.title}
                      </h3>
                    </Link>
                  </ScrollReveal>

                  <ScrollReveal direction={isEven ? "left" : "right"} delay={0.2}>
                    <p className="text-sm md:text-base text-text-secondary leading-relaxed font-light">
                      {project.subtitle}
                    </p>
                  </ScrollReveal>

                  {/* Tech stack badging row */}
                  <ScrollReveal
                    direction={isEven ? "left" : "right"}
                    delay={0.3}
                    className="flex flex-wrap gap-2.5 mt-2"
                  >
                    {project.tech.map((techName, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] uppercase font-mono px-3 py-1.5 bg-white/5 rounded-md border border-white/5 text-text-primary"
                      >
                        {techName}
                      </span>
                    ))}
                  </ScrollReveal>

                  {/* Dynamic internal study detail link */}
                  <ScrollReveal direction={isEven ? "left" : "right"} delay={0.4} className="mt-4">
                    <MagneticButton range={15}>
                      <Link
                        to={`/projects/${project.slug}`}
                        className="px-6 py-2.5 rounded-full border border-border-color bg-card-bg/25 text-xs font-mono uppercase tracking-wider text-text-primary hover:border-primary-accent hover:text-white transition-colors duration-300 inline-block"
                      >
                        View Case Study
                      </Link>
                    </MagneticButton>
                  </ScrollReveal>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
