import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import PageTransition from "../components/layout/PageTransition";
import { PROJECTS_DATA } from "../lib/data";
import { gsap } from "gsap";
import ScrollReveal from "../components/ui/ScrollReveal";
import { useGithubData } from "../hooks/useGithubData";

/**
 * Projects Catalog Page (/projects) — full editorial redesign.
 *
 * Layout:
 * - Sticky sidebar on desktop with filter pills
 * - Masonry-style responsive grid of image-first project cards
 * - Each card: tall image with overlay details on hover
 * - Category count badges on filter labels
 * - Total project count shown in the header
 */
export default function Projects() {
  const [activeTab, setActiveTab] = useState("featured"); // "featured" | "lab"
  const [activeFilter, setActiveFilter] = useState("All");
  const pageRef = useRef(null);

  const { data: githubData, loading: githubLoading } = useGithubData("DanisheKhan");

  const filters = [
    { label: "All", count: PROJECTS_DATA.length },
    { label: "Full-Stack", count: PROJECTS_DATA.filter((p) => p.category === "Full-Stack").length },
    { label: "UI/UX & Frontend", count: PROJECTS_DATA.filter((p) => p.category === "UI/UX & Frontend").length },
  ];

  const filtered =
    activeFilter === "All"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeFilter);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".page-header-line", {
        y: "100%",
        opacity: 0,
        stagger: 0.12,
        duration: 0.9,
        ease: "power4.out",
        delay: 0.15,
      });
      gsap.from(".page-header-meta", {
        opacity: 0,
        y: 12,
        stagger: 0.08,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.6,
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <PageTransition>
      <div ref={pageRef} className="w-full min-h-screen bg-primary-bg select-none">

        {/* ════════════════════════════════
            Header
        ════════════════════════════════ */}
        <div className="border-b border-white/[0.05]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
            <div className="flex flex-col xs:flex-row xs:items-center justify-between pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-10 border-b border-white/[0.05] gap-4">
              <span className="text-[10px] font-mono tracking-[0.3em] text-primary-accent uppercase font-semibold">
                ✦ The Catalog
              </span>
              
              {/* Premium Tab Selector Pill */}
              <div className="flex p-1 rounded-full bg-white/[0.02] border border-white/[0.05] backdrop-blur-md self-start xs:self-auto">
                <button
                  onClick={() => setActiveTab("featured")}
                  className={`px-4 py-1.5 rounded-full text-[10px] font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                    activeTab === "featured"
                      ? "bg-primary-accent text-[#0B0B0C] font-bold shadow-md"
                      : "text-text-secondary hover:text-white"
                  }`}
                >
                  Case Studies
                </button>
                <button
                  onClick={() => setActiveTab("lab")}
                  className={`px-4 py-1.5 rounded-full text-[10px] font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                    activeTab === "lab"
                      ? "bg-primary-accent text-[#0B0B0C] font-bold shadow-md"
                      : "text-text-secondary hover:text-white"
                  }`}
                >
                  Experimental Lab
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 py-12">
              <div className="flex flex-col gap-2">
                <div className="overflow-hidden">
                  <div className="page-header-line text-5xl sm:text-6xl md:text-7xl font-bold font-clash-display tracking-tight leading-[0.9] text-white">
                    {activeTab === "featured" ? "My" : "Open"}
                  </div>
                </div>
                <div className="overflow-hidden">
                  <div className="page-header-line text-5xl sm:text-6xl md:text-7xl font-bold font-clash-display tracking-tight leading-[0.9] text-gradient italic">
                    {activeTab === "featured" ? "Work." : "Source."}
                  </div>
                </div>
              </div>
              <p className="page-header-meta text-sm text-text-secondary font-light max-w-xs leading-relaxed sm:text-right">
                {activeTab === "featured"
                  ? "Production-ready applications spanning full-stack systems, secure APIs, and pixel-perfect interfaces."
                  : "Dynamic open-source experimental platforms, utilities, and packages synced directly from GitHub updates."}
              </p>
            </div>
          </div>
        </div>

        {/* ════════════════════════════
            Body: sidebar + grid or dynamic lab repos grid
        ════════════════════════════ */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-10 sm:py-14">
          {activeTab === "featured" ? (
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">

              {/* ── Sticky sidebar filter ── */}
              <div className="lg:w-44 shrink-0">
                <div className="lg:sticky lg:top-28 flex flex-row lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none flex-nowrap lg:flex-wrap">
                  <ScrollReveal direction="up" className="hidden lg:block w-full">
                    <span className="page-header-meta flex-none lg:flex-initial w-full text-[9px] font-mono tracking-[0.25em] text-text-secondary uppercase mb-1">
                      Filter by
                    </span>
                  </ScrollReveal>
                  {filters.map((f, idx) => (
                    <ScrollReveal key={f.label} direction="up" delay={idx * 0.05} className="flex-none lg:flex-initial w-full">
                      <button
                        onClick={() => setActiveFilter(f.label)}
                        className={`group flex items-center justify-between gap-2 px-4 py-2.5 rounded-xl text-xs font-mono tracking-wide transition-all duration-200 cursor-pointer w-full ${
                          activeFilter === f.label
                            ? "bg-primary-accent/[0.12] border border-primary-accent/40 text-primary-accent"
                            : "border border-white/[0.05] text-text-secondary hover:text-white hover:border-white/[0.1]"
                        }`}
                      >
                        <span>{f.label === "UI/UX & Frontend" ? "UI / UX" : f.label}</span>
                        <span
                          className={`text-[9px] font-bold ${
                            activeFilter === f.label ? "text-primary-accent" : "text-white/20"
                          }`}
                        >
                          {f.count}
                        </span>
                      </button>
                    </ScrollReveal>
                  ))}
                </div>
              </div>

              {/* ── Project grid ── */}
              <div className="flex-1 min-w-0">
                <motion.div
                  layout
                  className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6"
                >
                  <AnimatePresence mode="popLayout">
                    {filtered.map((project, i) => (
                      <motion.div
                        key={project.slug}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{
                          duration: 0.4,
                          delay: i * 0.04,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                      >
                        <ScrollReveal direction="up" delay={i * 0.04} distance={30} once={true}>
                          <ProjectTile project={project} />
                        </ScrollReveal>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>

                {filtered.length === 0 && (
                  <div className="flex flex-col items-center justify-center py-24 text-center gap-3">
                    <span className="text-3xl">🗂️</span>
                    <span className="text-sm font-mono text-text-secondary">
                      No projects match this filter.
                    </span>
                  </div>
                )}
              </div>

            </div>
          ) : (
            /* LAB VIEW - Dynamic open-source GitHub repos */
            <div className="w-full">
              {githubLoading ? (
                <div className="flex flex-col items-center justify-center py-32 gap-4">
                  <div className="w-6 h-6 rounded-full border-2 border-primary-accent border-t-transparent animate-spin" />
                  <span className="text-xs font-mono text-text-secondary">Syncing with GitHub API…</span>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6"
                >
                  {(githubData?.repos || []).map((repo, i) => (
                    <ScrollReveal key={repo.name} direction="up" delay={i * 0.04} distance={20} once={true}>
                      <LabRepoCard repo={repo} />
                    </ScrollReveal>
                  ))}
                </motion.div>
              )}
            </div>
          )}
        </div>

      </div>
    </PageTransition>
  );
}

/* ─────────────────────────────────────
   Inline project tile — image-first,
   details revealed on hover
───────────────────────────────────── */
function ProjectTile({ project }) {
  return (
    <Link to={`/projects/${project.slug}`} className="block group">
      <div className="flex flex-col gap-0 rounded-2xl overflow-hidden border border-white/[0.06] bg-white/[0.01] hover:border-white/[0.14] transition-all duration-400 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]">

        {/* Image */}
        <div className="relative overflow-hidden aspect-[4/3]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />

          {/* Number badge */}
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono font-bold text-white tracking-widest">
            {project.meta.number}
          </span>

          {/* Type badge */}
          <span className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-[9px] font-mono text-text-secondary tracking-wider uppercase">
            {project.meta.type}
          </span>

          {/* Live link — use button (not <a>) to avoid nested anchor inside <Link> */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              window.open(project.liveUrl, "_blank", "noopener,noreferrer");
            }}
            aria-label={`Open ${project.title} live site`}
            className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-primary-accent flex items-center justify-center transition-all duration-300 shadow-lg scale-90 md:scale-75 opacity-100 md:opacity-0 group-hover:opacity-100 group-hover:scale-100 cursor-pointer"
          >
            <ExternalLink className="w-3.5 h-3.5 text-[#0B0B0C]" />
          </button>

          {/* Tech pills at bottom on hover */}
          <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5 transition-opacity duration-300 opacity-100 md:opacity-0 group-hover:opacity-100">
            {project.tech.slice(0, 3).map((t, i) => (
              <span
                key={i}
                className="px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-[9px] font-mono text-white/80 uppercase tracking-wider"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Text block */}
        <div className="flex flex-col gap-2 p-5">
          <div className="flex items-center justify-between">
            <span className="text-[9px] font-mono tracking-[0.2em] text-primary-accent uppercase">
              {project.category}
            </span>
            <span className="text-[9px] font-mono text-text-secondary">{project.year}</span>
          </div>

          <div className="flex items-start justify-between gap-2">
            <h3 className="text-base font-bold font-clash-display text-white group-hover:text-primary-accent transition-colors duration-300 leading-tight">
              {project.title}
            </h3>
            <ArrowUpRight className="w-4 h-4 text-text-secondary shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 group-hover:text-primary-accent transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>

          <p className="text-xs text-text-secondary leading-relaxed line-clamp-2 font-light">
            {project.subtitle}
          </p>
        </div>
      </div>
    </Link>
  );
}

/* ─────────────────────────────────────
   Helper Component for Lab Repositories
───────────────────────────────────── */
function LabRepoCard({ repo }) {
  const getLangColor = (lang) => {
    switch (lang?.toLowerCase()) {
      case "javascript": return "bg-yellow-400";
      case "react": return "bg-sky-400";
      case "html": return "bg-orange-500";
      case "css": return "bg-blue-500";
      case "typescript": return "bg-blue-600";
      case "python": return "bg-indigo-500";
      default: return "bg-primary-accent";
    }
  };

  return (
    <a
      href={repo.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block relative rounded-2xl border border-white/[0.06] bg-white/[0.015] p-6 hover:border-primary-accent/30 hover:bg-white/[0.025] hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_15px_40px_rgba(0,0,0,0.4)] h-48 flex flex-col justify-between"
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${getLangColor(repo.language)}`} />
            <span className="text-[9px] font-mono text-text-secondary uppercase tracking-widest leading-none">
              {repo.language || "Open Source"}
            </span>
          </div>
          <span className="text-[9px] font-mono text-text-secondary/60">{repo.updatedAt}</span>
        </div>

        <h3 className="text-base font-bold font-clash-display text-white group-hover:text-primary-accent transition-colors duration-200 truncate mt-1">
          {repo.name.replace(/-/g, " ")}
        </h3>

        <p className="text-xs text-text-secondary leading-relaxed font-light line-clamp-2">
          {repo.description}
        </p>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-white/[0.04] mt-auto">
        <div className="flex gap-4 text-[10px] font-mono text-text-secondary">
          <span className="flex items-center gap-1">✦ Stars: {repo.stars}</span>
          <span className="flex items-center gap-1">✦ Forks: {repo.forks}</span>
        </div>
        <span className="text-xs font-semibold text-primary-accent font-mono uppercase tracking-wider group-hover:text-white transition-colors duration-300">
          Source ↗
        </span>
      </div>
    </a>
  );
}
