import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS_DATA } from "../../lib/data";

/**
 * Projects Section — redesigned as a hover-image list.
 *
 * Design language: Editorial project index rows.
 * - Each project is a full-width horizontal row
 * - Hovering a row reveals a floating image that follows the cursor
 * - A gold counter, project title, category badge, year, and live link sit in the row
 * - Completely different from any card/grid layout used elsewhere on the page
 */
export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const featured = PROJECTS_DATA.slice(0, 5);

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative w-full bg-primary-bg overflow-hidden select-none"
    >
      {/* ── Top border ── */}
      <div className="border-t border-white/[0.05]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* ══════════════════════════════
            Header
        ══════════════════════════════ */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 py-14 md:py-20 border-b border-white/[0.05]">
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-mono tracking-[0.3em] text-primary-accent uppercase font-semibold">
              ✦ Case Studies
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-clash-display tracking-tight leading-[1.0] text-white">
              Featured{" "}
              <span className="text-gradient italic">Work.</span>
            </h2>
          </div>

          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 text-sm font-mono tracking-wider text-text-secondary hover:text-primary-accent transition-colors duration-300 self-start sm:self-end"
          >
            All Projects
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* ══════════════════════════════
            Project rows
        ══════════════════════════════ */}
        <div className="flex flex-col">
          {featured.map((project, index) => {
            const isActive = activeIndex === index;
            const num = String(index + 1).padStart(2, "0");

            return (
              <motion.div
                key={project.slug}
                onHoverStart={() => setActiveIndex(index)}
                onHoverEnd={() => setActiveIndex(null)}
                className="group relative -mx-6 md:-mx-12 px-6 md:px-12"
              >
                <Link to={`/projects/${project.slug}`}>
                  <div className="flex items-center gap-5 md:gap-8 py-6 md:py-8 border-b border-white/[0.05] transition-all duration-300">

                    {/* Index */}
                    <span
                      className={`text-[11px] font-mono shrink-0 w-7 text-right transition-colors duration-300 ${
                        isActive ? "text-primary-accent" : "text-white/20"
                      }`}
                    >
                      {num}
                    </span>

                    {/* Title */}
                    <h3
                      className={`flex-1 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-clash-display tracking-tight transition-all duration-300 ${
                        isActive
                          ? "text-primary-accent translate-x-2"
                          : "text-white"
                      }`}
                    >
                      {project.title}
                    </h3>

                    {/* Category badge — hidden on mobile */}
                    <span className="hidden md:inline-flex items-center px-3 py-1 rounded-full border border-white/[0.07] text-[10px] font-mono tracking-widest text-text-secondary uppercase shrink-0">
                      {project.category}
                    </span>

                    {/* Year */}
                    <span className="text-[11px] font-mono text-text-secondary shrink-0 hidden sm:block">
                      {project.year}
                    </span>

                    {/* Arrow */}
                    <div
                      className={`shrink-0 w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? "border-primary-accent bg-primary-accent/10 scale-100 opacity-100"
                          : "border-white/[0.08] scale-75 opacity-0"
                      }`}
                    >
                      <ArrowUpRight className="w-4 h-4 text-primary-accent" />
                    </div>
                  </div>
                </Link>

                {/* Gold accent left bar */}
                <span
                  className={`absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary-accent to-secondary-accent transition-all duration-400 origin-top ${
                    isActive ? "scale-y-100" : "scale-y-0"
                  }`}
                />
              </motion.div>
            );
          })}
        </div>

        {/* ══════════════════════════════
            Bottom strip
        ══════════════════════════════ */}
        <div className="flex items-center justify-between py-10 border-t border-white/[0.05]">
          <span className="text-xs font-mono tracking-[0.2em] text-text-secondary uppercase">
            {PROJECTS_DATA.length}+ Projects Built
          </span>
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 h-10 px-6 rounded-full border border-white/[0.08] bg-white/[0.02] hover:bg-primary-accent hover:border-primary-accent text-xs font-mono tracking-wider text-text-secondary hover:text-[#0B0B0C] transition-all duration-300 font-semibold"
          >
            View All Work
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

      </div>

      {/* ══════════════════════════════
          Floating cursor image preview
      ══════════════════════════════ */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 0.88, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 2 }}
            exit={{ opacity: 0, scale: 0.88, rotate: -3 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-none fixed z-50 w-[260px] sm:w-[320px] aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
            style={{
              left: mousePos.x + sectionRef.current?.getBoundingClientRect().left || 0,
              top: mousePos.y + sectionRef.current?.getBoundingClientRect().top || 0,
              transform: "translate(-50%, -120%)",
            }}
          >
            <img
              src={featured[activeIndex]?.image}
              alt={featured[activeIndex]?.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
              <span className="text-[10px] font-mono text-white/80 uppercase tracking-widest">
                {featured[activeIndex]?.meta.type}
              </span>
              <span className="text-[10px] font-mono text-primary-accent">
                {featured[activeIndex]?.year}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
