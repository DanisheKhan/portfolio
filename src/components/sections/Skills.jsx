import React from "react";
import { SKILLS_DATA } from "../../lib/data";
import SkillCard from "../ui/SkillCard";
import ScrollReveal from "../ui/ScrollReveal";

/**
 * Skills Section Component
 * Creates an asymmetric Bento grid displaying categories with micro-interactions.
 */
export default function Skills() {
  return (
    <section className="relative w-full py-20 md:py-32 bg-[#111111] overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-12 md:gap-16">
        
        {/* Section Header */}
        <div className="flex flex-col gap-4">
          <ScrollReveal direction="up">
            <span className="text-xs uppercase font-mono tracking-widest text-primary-accent font-medium">
              CAPABILITIES
            </span>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-clash-display tracking-tight text-white leading-tight">
              My <span className="text-gradient">Tech Stack</span>
            </h2>
          </ScrollReveal>
          
          {/* Accent drawing line */}
          <ScrollReveal direction="left" delay={0.2} className="w-24 h-[3px] bg-gradient-to-r from-primary-accent to-secondary-accent rounded-full mt-2" />
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          
          {/* Card 1: Frontend Architecture (Spans 2 columns on large screens) */}
          <div className="lg:col-span-2">
            <SkillCard
              categoryKey="frontend"
              data={SKILLS_DATA.frontend}
              className="h-full"
            />
          </div>

          {/* Card 2: Backend & Systems */}
          <div className="lg:col-span-1">
            <SkillCard
              categoryKey="backend"
              data={SKILLS_DATA.backend}
              className="h-full"
            />
          </div>

          {/* Card 3: Deployment & Tools (Spans full width on mobile/tablet, 1 column on desktop) */}
          <div className="md:col-span-2 lg:col-span-3">
            <SkillCard
              categoryKey="deployment"
              data={SKILLS_DATA.deployment}
              className="h-full"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
