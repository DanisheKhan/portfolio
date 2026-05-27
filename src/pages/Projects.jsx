import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "../components/layout/PageTransition";
import { PROJECTS_DATA } from "../lib/data";
import ProjectCard from "../components/ui/ProjectCard";
import ScrollReveal from "../components/ui/ScrollReveal";

/**
 * Projects Catalog Page Component (/projects)
 * Implements category filtering buttons and fluid shuffle layout grids.
 */
export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filterTabs = [
    { label: "All Projects", filterVal: "All" },
    { label: "Full-Stack", filterVal: "Full-Stack" },
    { label: "UI/UX & Frontend", filterVal: "UI/UX & Frontend" }
  ];

  // Filter projects dataset
  const filteredProjects = activeFilter === "All"
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeFilter);

  return (
    <PageTransition>
      <div className="w-full min-h-screen bg-primary-bg pt-28 pb-20 select-none">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-12 md:gap-16">
          
          {/* Section Header */}
          <div className="flex flex-col gap-4 text-center md:text-left">
            <ScrollReveal direction="up">
              <span className="text-xs uppercase font-mono tracking-widest text-primary-accent font-medium">
                THE CATALOG
              </span>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.1}>
              <h1 className="text-4xl sm:text-6xl font-bold font-clash-display tracking-tight text-white leading-tight">
                My <span className="text-gradient">Creations</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2} className="text-sm md:text-base text-text-secondary max-w-xl font-light mt-2 leading-relaxed">
              Explore my production-ready creations spanning full-stack application development, secure database systems, and highly animated vector interfaces.
            </ScrollReveal>
          </div>

          {/* Dynamic Filter Tab Bar */}
          <ScrollReveal direction="up" delay={0.3} className="flex flex-wrap gap-3 items-center justify-center md:justify-start pb-4 border-b border-border-color/60">
            {filterTabs.map((tab) => (
              <button
                key={tab.filterVal}
                onClick={() => setActiveFilter(tab.filterVal)}
                className={`relative px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeFilter === tab.filterVal
                    ? "text-white border-transparent"
                    : "text-text-secondary border-border-color border hover:text-white"
                }`}
              >
                {tab.label}
                {activeFilter === tab.filterVal && (
                  <motion.div
                    layoutId="activeFilterUnderlineTab"
                    className="absolute inset-0 bg-primary-accent rounded-full -z-10 shadow-lg shadow-primary-accent/25"
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  />
                )}
              </button>
            ))}
          </ScrollReveal>

          {/* Shuffling Grid Swarm */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="w-full h-full"
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-center select-none text-text-secondary gap-2">
              <span className="text-sm font-mono uppercase tracking-widest font-semibold text-primary-accent">Empty State</span>
              <p className="text-xs font-light">No creations match the selected criteria.</p>
            </div>
          )}

        </div>
      </div>
    </PageTransition>
  );
}
