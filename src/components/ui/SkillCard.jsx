import React, { useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaDocker,
  FaCloud,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiTailwindcss,
  SiBootstrap,
  SiRedux,
  SiExpress,
  SiJsonwebtokens,
  SiMysql,
  SiMongodb,
  SiAppwrite,
  SiSupabase,
  SiVercel,
  SiCloudinary,
  SiPostman,
} from "react-icons/si";
import { TbApi, TbNetwork } from "react-icons/tb";

/**
 * SkillCard – redesigned as a horizontal scrollable "chip rail" inside a frosted panel.
 * Each chip lifts with a spring and emits a coloured glow matching the icon.
 */
export default function SkillCard({ categoryKey, data, className = "" }) {
  /* ─── icon + brand-colour map ─── */
  const getSkillMeta = (name) => {
    switch (name.toLowerCase()) {
      case "react.js":
        return { icon: <FaReact />, color: "#61DAFB" };
      case "next.js (basic)":
        return { icon: <SiNextdotjs />, color: "#ffffff" };
      case "javascript (es6+)":
        return { icon: <SiJavascript />, color: "#F7DF1E" };
      case "typescript":
        return { icon: <SiTypescript />, color: "#3178C6" };
      case "html5 / css3":
        return { icon: <SiHtml5 />, color: "#E34F26" };
      case "tailwind css":
        return { icon: <SiTailwindcss />, color: "#06B6D4" };
      case "bootstrap":
        return { icon: <SiBootstrap />, color: "#7952B3" };
      case "redux toolkit":
        return { icon: <SiRedux />, color: "#764ABC" };
      case "context api":
        return { icon: <TbNetwork />, color: "#61DAFB" };
      case "node.js":
        return { icon: <FaNodeJs />, color: "#339933" };
      case "express.js":
        return { icon: <SiExpress />, color: "#ffffff" };
      case "restful apis":
        return { icon: <TbApi />, color: "#F05032" };
      case "jwt auth flow":
        return { icon: <SiJsonwebtokens />, color: "#D63AFF" };
      case "sql & mysql":
        return { icon: <SiMysql />, color: "#4479A1" };
      case "mongodb / mongoose":
        return { icon: <SiMongodb />, color: "#47A248" };
      case "appwrite":
        return { icon: <SiAppwrite />, color: "#FD366E" };
      case "supabase":
        return { icon: <SiSupabase />, color: "#3ECF8E" };
      case "git & github":
        return { icon: <FaGithub />, color: "#ffffff" };
      case "vercel":
        return { icon: <SiVercel />, color: "#ffffff" };
      case "onrender":
        return { icon: <FaCloud />, color: "#46E3B7" };
      case "cloudinary":
        return { icon: <SiCloudinary />, color: "#3448C5" };
      case "docker (basic)":
        return { icon: <FaDocker />, color: "#2496ED" };
      case "postman":
        return { icon: <SiPostman />, color: "#FF6C37" };
      default:
        return { icon: <TbNetwork />, color: "#C5A880" };
    }
  };

  /* ─── 3D tilt + spotlight mouse tracking ─── */
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);   // -1 to 1
    const dy = (e.clientY - cy) / (rect.height / 2);  // -1 to 1
    // Spotlight CSS vars
    card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    card.style.setProperty("--my", `${e.clientY - rect.top}px`);
    // Smooth 3D tilt via GSAP
    gsap.to(card, {
      rotateY: dx * 6,
      rotateX: -dy * 5,
      duration: 0.4,
      ease: "power2.out",
      transformPerspective: 900,
    });
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    gsap.to(card, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.5)",
    });
  };

  /* ─── stagger children ─── */
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
  };
  const chip = {
    hidden: { opacity: 0, y: 16, scale: 0.92 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 120, damping: 14 },
    },
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      style={{ transformStyle: "preserve-3d" }}
      className={`skill-panel relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.015] backdrop-blur-2xl p-7 md:p-9 flex flex-col gap-7 transition-[border-color] duration-500 hover:border-white/[0.12] ${className}`}
    >
      {/* Spotlight radial glow that follows cursor */}
      <div className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 skill-spotlight" />

      {/* ── Header ── */}
      <div className="flex flex-col gap-1.5 relative z-10">
        <h3 className="text-lg md:text-xl font-bold font-clash-display tracking-wide text-white flex items-center gap-3">
          <span className="h-5 w-[3px] rounded-full bg-gradient-to-b from-primary-accent to-secondary-accent block shrink-0" />
          {data.title}
        </h3>
        <p className="text-xs text-text-secondary font-light leading-relaxed pl-[15px] max-w-md">
          {data.description}
        </p>
      </div>

      {/* ── Chip Grid ── */}
      <div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 relative z-10"
      >
        {data.items.map((skill, i) => {
          const { icon, color } = getSkillMeta(skill.name);
          return (
            <motion.div
              key={i}
              variants={chip}
              className="skill-chip group/chip relative overflow-hidden flex items-center gap-2 sm:gap-3 px-2.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-white/[0.06] bg-white/[0.02] cursor-default select-none transition-all duration-300 hover:border-white/[0.14] hover:-translate-y-[3px]"
              style={{ "--glow": color }}
            >
              {/* chip glow blob */}
              <span
                className="pointer-events-none absolute inset-0 opacity-0 group-hover/chip:opacity-100 transition-opacity duration-400 rounded-xl"
                style={{
                  background: `radial-gradient(ellipse at 0% 50%, ${color}22 0%, transparent 70%)`,
                }}
              />

              {/* icon wrapper */}
              <span
                className="relative z-10 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-lg border border-white/[0.06] bg-white/[0.03] text-sm sm:text-lg shrink-0 transition-all duration-300 group-hover/chip:scale-110"
                style={{ color }}
              >
                {icon}
              </span>

              <span className="relative z-10 text-[10px] sm:text-xs font-medium tracking-wide text-text-primary group-hover/chip:text-white transition-colors duration-300 font-mono leading-tight">
                {skill.name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
