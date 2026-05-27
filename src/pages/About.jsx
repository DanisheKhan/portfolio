import React from "react";
import { GraduationCap, Milestone, Code2, Award } from "lucide-react";
import { motion } from "framer-motion";
import PageTransition from "../components/layout/PageTransition";
import ScrollReveal from "../components/ui/ScrollReveal";

/**
 * About Page Component (/about)
 * Implements detailed profile summaries, timelines, educational milestones, and custom capabilities.
 */
export default function About() {
  const storyMilestones = [
    {
      year: "2022",
      title: "Academic Genesis",
      description: "Commenced B.Tech in Computer Science at Raisoni College, building solid foundations in DSA, systems, and algorithms."
    },
    {
      year: "2024",
      title: "MERN Stack Specialization",
      description: "Pivoted intensely into JavaScript architectures, engineering custom backend API structures and robust database pipelines."
    },
    {
      year: "2025",
      title: "Professional Developer Intern",
      description: "Joined Meet Bros, designing premium client wireframes, tuning web delivery systems, and governing Git structures."
    }
  ];

  const deepSkills = [
    { name: "React.js & Creative Frontend UI", level: 95 },
    { name: "Node.js & Express API Architectures", level: 90 },
    { name: "Database Engineering & Custom Schemas", level: 88 }
  ];

  return (
    <PageTransition>
      <div className="w-full relative bg-primary-bg pt-28 pb-20 select-none">
        
        {/* SECTION 1 - Dynamic Hero & Hexagon mask reveal */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center border-b border-border-color/60 pb-16">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <ScrollReveal direction="up">
              <span className="text-xs uppercase font-mono tracking-widest text-primary-accent font-medium">
                THE STORY
              </span>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1}>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-clash-display tracking-tight text-white leading-tight">
                Danish <span className="text-gradient">Khan</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <p className="text-sm md:text-base text-text-secondary leading-relaxed font-light">
                I am a passionate software developer and designer who thrives on translating complex computational problems into highly interactive and fluid visual interfaces. Currently completing my engineering studies, I focus on constructing secure, clean, and robust products that deliver flawless user experiences.
              </p>
            </ScrollReveal>
          </div>

          {/* Masked Portrait Photo Reveal */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <ScrollReveal direction="none" delay={0.3}>
              <div className="w-[280px] sm:w-[320px] md:w-[380px] h-[320px] sm:h-[380px] md:h-[440px] overflow-hidden mask-hexagon bg-card-bg border border-border-color cursor-pointer relative shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop"
                  alt="Danish Portrait"
                  className="w-full h-full object-cover origin-top scale-105"
                />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* SECTION 2 - Story timeline tracking transitions */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 border-b border-border-color/60">
          <div className="flex flex-col gap-4 mb-12">
            <ScrollReveal direction="up">
              <span className="text-xs uppercase font-mono tracking-widest text-secondary-accent font-medium">
                CHRONOLOGY
              </span>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-bold font-clash-display text-white">
                Historical <span className="text-gradient">Milestones</span>
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {storyMilestones.map((milestone, idx) => (
              <ScrollReveal
                key={idx}
                direction="up"
                delay={0.1 * idx}
                className="glass-card p-6 md:p-8 rounded-2xl border border-border-color bg-card-bg/15 relative hover:border-secondary-accent/20 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-lg bg-secondary-accent/10 border border-secondary-accent/20">
                    <Milestone className="w-4 h-4 text-secondary-accent" />
                  </div>
                  <span className="text-xl md:text-2xl font-bold font-mono text-white">
                    {milestone.year}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold font-clash-display text-white mb-2">
                  {milestone.title}
                </h3>
                <p className="text-xs md:text-sm text-text-secondary leading-relaxed font-light">
                  {milestone.description}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* SECTION 3 - Academic Record credentials */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 border-b border-border-color/60">
          <div className="flex flex-col gap-4 mb-12">
            <ScrollReveal direction="up">
              <span className="text-xs uppercase font-mono tracking-widest text-primary-accent font-medium">
                EDUCATION
              </span>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-bold font-clash-display text-white">
                Academic <span className="text-gradient">Credentials</span>
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="up" delay={0.2}>
            <div className="glass-card p-8 md:p-12 rounded-2xl border border-border-color bg-card-bg/25 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="flex items-start gap-4 md:gap-6">
                <div className="p-4 rounded-xl bg-primary-accent/15 border border-primary-accent/20 w-fit shrink-0">
                  <GraduationCap className="w-8 h-8 text-primary-accent" />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-lg md:text-2xl font-bold font-clash-display text-white">
                    Bachelor of Technology (B. Tech) in Computer Science
                  </span>
                  <span className="text-xs md:text-sm text-text-secondary font-medium uppercase tracking-wider font-mono">
                    Raisoni Engineering College, Maharashtra
                  </span>
                  <p className="text-xs md:text-sm text-text-secondary leading-relaxed font-light max-w-xl">
                    Rigorous curriculum focusing on software architecture, systems programming, dynamic algorithms, relational database administration, and front-end engineering models.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-2 text-left md:text-right items-start md:items-end font-mono border-l-2 md:border-l-0 md:border-r-2 border-border-color pl-4 md:pl-0 md:pr-4 shrink-0">
                <span className="text-xs text-text-secondary uppercase tracking-widest font-medium">Graduation Date</span>
                <span className="text-sm font-bold text-white">Expected June 2026</span>
                <span className="text-xs text-secondary-accent font-semibold mt-1">CGPA: 8.9 / 10.0</span>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* SECTION 4 - Deep Dive Skills capability bars */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
          <div className="flex flex-col gap-4 mb-12">
            <ScrollReveal direction="up">
              <span className="text-xs uppercase font-mono tracking-widest text-secondary-accent font-medium">
                CAPABILITIES
              </span>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-bold font-clash-display text-white">
                Deep Dive <span className="text-gradient">Performance</span>
              </h2>
            </ScrollReveal>
          </div>

          <div className="flex flex-col gap-8 max-w-3xl mx-auto w-full">
            {deepSkills.map((skill, idx) => (
              <ScrollReveal
                key={idx}
                direction="up"
                delay={0.1 * idx}
                className="flex flex-col gap-2"
              >
                <div className="flex justify-between items-center text-xs md:text-sm font-mono font-medium">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-primary-accent" />
                    <span className="text-white">{skill.name}</span>
                  </div>
                  <span className="text-text-secondary">{skill.level}% Proficiency</span>
                </div>
                
                {/* Visual capability bar animation track */}
                <div className="w-full h-2.5 bg-border-color rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: "0%" }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: [0.25, 0.8, 0.25, 1], delay: 0.1 }}
                    className="h-full bg-gradient-to-r from-primary-accent via-secondary-accent to-primary-accent rounded-full"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
