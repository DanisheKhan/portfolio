import React from "react";
import { Briefcase } from "lucide-react";
import { EXPERIENCE_DATA } from "../../lib/data";
import ScrollReveal from "../ui/ScrollReveal";

/**
 * Experience Section Component (Vertical Timeline)
 * Renders scroll-revealed timeline points and detailed accomplishments.
 */
export default function Experience() {
  return (
    <section className="relative w-full py-20 md:py-32 bg-[#111111] overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-12 md:gap-16">
        
        {/* Section Header */}
        <div className="flex flex-col gap-4">
          <ScrollReveal direction="up">
            <span className="text-xs uppercase font-mono tracking-widest text-primary-accent font-medium">
              JOURNEY
            </span>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-clash-display tracking-tight text-white leading-tight">
              Work <span className="text-gradient">Experience</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.2} className="w-24 h-[3px] bg-gradient-to-r from-primary-accent to-secondary-accent rounded-full mt-2" />
        </div>

        {/* Timeline Layout */}
        <div className="relative mt-8 max-w-4xl mx-auto w-full">
          {/* Vertical Track Line (Animated down on scroll via CSS mask/reveal) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-border-color origin-top" />
          
          {/* Glow track overlay */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary-accent to-secondary-accent origin-top scale-y-75 opacity-30" />

          {/* Timeline Blocks */}
          {EXPERIENCE_DATA.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className="relative flex flex-col md:flex-row justify-between items-start md:items-center w-full mb-16 last:mb-0"
              >
                {/* 1. Timeline Dot Marker */}
                <div className="absolute left-[9px] md:left-1/2 -translate-x-[7px] md:-translate-x-1/2 z-10 w-4 h-4 rounded-full bg-secondary-accent border-4 border-primary-bg pulse-glow-dot shadow-md shadow-secondary-accent/40" />

                {/* Left block (Spans left side on desktop, hidden/empty on right side) */}
                <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${isLeft ? "md:text-right" : "hidden md:block"}`}>
                  {isLeft && (
                    <ScrollReveal direction="right">
                      <span className="text-sm font-mono text-text-secondary font-medium uppercase tracking-wider block mb-1">
                        {exp.duration}
                      </span>
                      <h4 className="text-lg font-bold font-clash-display text-primary-accent">
                        {exp.company}
                      </h4>
                    </ScrollReveal>
                  )}
                </div>

                {/* Right block (The details card) */}
                <div className="w-full md:w-[45%] pl-12 md:pl-0">
                  <ScrollReveal direction={isLeft ? "left" : "right"}>
                    <div className="glass-card p-6 md:p-8 rounded-2xl border border-border-color/60 bg-card-bg/15 relative hover:border-primary-accent/30 transition-all duration-300">
                      {/* Mobile Header indicators */}
                      <div className="md:hidden flex flex-col gap-1 mb-4">
                        <span className="text-xs font-mono text-text-secondary tracking-widest font-medium uppercase">
                          {exp.duration}
                        </span>
                        <h4 className="text-lg font-bold font-clash-display text-primary-accent">
                          {exp.company}
                        </h4>
                      </div>

                      {/* Role & Icon */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2.5 rounded-lg bg-primary-accent/15 border border-primary-accent/20">
                          <Briefcase className="w-4 h-4 text-primary-accent" />
                        </div>
                        <h3 className="text-lg md:text-xl font-bold font-clash-display text-white">
                          {exp.role}
                        </h3>
                      </div>

                      {/* Bullet points */}
                      <ul className="flex flex-col gap-3 mb-6">
                        {exp.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex gap-2 text-xs md:text-sm text-text-secondary leading-relaxed font-light text-left">
                            <span className="text-secondary-accent shrink-0 select-none">&bull;</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech utilized */}
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-border-color/60">
                        {exp.tech.map((techName, idx) => (
                          <span
                            key={idx}
                            className="text-[9px] uppercase font-mono px-2.5 py-1 bg-white/5 rounded-md border border-white/5 text-text-primary"
                          >
                            {techName}
                          </span>
                        ))}
                      </div>
                    </div>
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
