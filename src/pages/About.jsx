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
              
              {/* Classic Portrait Frame Wrapper */}
              <div className="relative group cursor-pointer w-[280px] sm:w-[320px] md:w-[360px] aspect-[4/5] mx-auto lg:mx-0">
                
                {/* Background Offset Outline Frame (Classic Editorial Design) */}
                <div className="absolute inset-0 border border-white/10 rounded-[32px] translate-x-5 translate-y-5 transition-all duration-500 ease-out group-hover:translate-x-3 group-hover:translate-y-3 group-hover:border-primary-accent/40 -z-10" />

                {/* Glowing Accent Border Container */}
                <div className="w-full h-full rounded-[32px] bg-gradient-to-b from-white/10 via-white/5 to-white/0 p-[1.5px] transition-all duration-500 ease-out group-hover:from-primary-accent/50 group-hover:to-secondary-accent/50 group-hover:shadow-[0_20px_50px_rgba(197,168,128,0.15)]">
                  
                  {/* Inner Image Mask and Layer */}
                  <div className="w-full h-full overflow-hidden rounded-[30px] bg-secondary-bg relative">
                    <img
                      src="/danish.jpeg"
                      alt="Danish Portrait"
                      className="w-full h-full object-cover origin-top scale-105 transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    
                    {/* Elegant overlay vignette on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-40 group-hover:opacity-70 transition-opacity duration-500" />
                    
                    {/* Tech corner accents or styling inside the frame */}
                    <div className="absolute bottom-4 left-5 right-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex justify-between items-center z-10">
                      <div className="flex flex-col">
                        <span className="text-white text-xs font-mono font-semibold tracking-wider uppercase">Danish Khan</span>
                        <span className="text-[10px] text-text-secondary font-mono">Full Stack Developer</span>
                      </div>
                      <div className="w-7 h-7 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10 text-white text-[10px]">
                        ✨
                      </div>
                    </div>
                  </div>

                </div>

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
