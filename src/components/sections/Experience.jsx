import React from "react";
import { Briefcase } from "lucide-react";
import { EXPERIENCE_DATA } from "../../lib/data";
import ScrollReveal from "../ui/ScrollReveal";
import { Timeline } from "../ui/timeline";

/**
 * Experience Section Component (Vertical Timeline)
 * Renders scroll-revealed timeline points and detailed accomplishments.
 */
export default function Experience() {
  const timelineData = EXPERIENCE_DATA.map((exp, index) => ({
    title: exp.duration,
    content: (
      <div className="glass-card p-6 md:p-8 rounded-2xl border border-border-color/60 bg-card-bg/15 relative hover:border-primary-accent/30 transition-all duration-300">
        {/* Role & Icon */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-primary-accent/15 border border-primary-accent/20">
              <Briefcase className="w-4 h-4 text-primary-accent" />
            </div>
            <h3 className="text-lg md:text-xl font-bold font-clash-display text-primary-accent">
              {exp.company}
            </h3>
          </div>
          {exp.link && (
            <a
              href={exp.link}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-secondary-accent hover:text-white transition-colors duration-300 font-mono tracking-wider px-3 py-1 bg-white/5 rounded-full border border-white/10 flex items-center gap-2"
            >
              Visit <span className="text-[10px]">↗</span>
            </a>
          )}
        </div>
        
        <h4 className="text-md font-semibold text-white mb-4 ml-1">
          {exp.role}
        </h4>

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
    )
  }));

  return (
    <section className="relative w-full py-16 sm:py-20 md:py-32 bg-secondary-bg overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 flex flex-col gap-10 md:gap-16">
        
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
        <div className="relative mt-4 sm:mt-8 w-full -mx-4 md:-mx-10">
          <Timeline data={timelineData} />
        </div>

      </div>
    </section>
  );
}
