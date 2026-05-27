import React from "react";
import { motion } from "framer-motion";
import { 
  FaReact, 
  FaNodeJs, 
  FaGithub, 
  FaDocker, 
  FaCloud 
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
  SiPostman 
} from "react-icons/si";
import { TbApi, TbNetwork } from "react-icons/tb";

/**
 * SkillCard Component
 * Displays a list of tech skills under a category as a beautiful, premium, modern grid of glass tiles with dynamic tech icons.
 */
export default function SkillCard({ categoryKey, data, className = "" }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04
      }
    }
  };

  const tileVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  // Map technology names to custom icons and signature colors
  const getSkillIcon = (name) => {
    switch (name.toLowerCase()) {
      case "react.js":
        return <FaReact className="text-[#61DAFB] text-xl" />;
      case "next.js (basic)":
        return <SiNextdotjs className="text-white text-xl" />;
      case "javascript (es6+)":
        return <SiJavascript className="text-[#F7DF1E] text-lg rounded-sm" />;
      case "typescript":
        return <SiTypescript className="text-[#3178C6] text-lg rounded-sm" />;
      case "html5 / css3":
        return <SiHtml5 className="text-[#E34F26] text-xl" />;
      case "tailwind css":
        return <SiTailwindcss className="text-[#06B6D4] text-xl" />;
      case "bootstrap":
        return <SiBootstrap className="text-[#7952B3] text-xl" />;
      case "redux toolkit":
        return <SiRedux className="text-[#764ABC] text-xl" />;
      case "context api":
        return <TbNetwork className="text-[#61DAFB] text-xl" />;
      
      // Backend
      case "node.js":
        return <FaNodeJs className="text-[#339933] text-xl" />;
      case "express.js":
        return <SiExpress className="text-white text-xl" />;
      case "restful apis":
        return <TbApi className="text-[#F05032] text-2xl" />;
      case "jwt auth flow":
        return <SiJsonwebtokens className="text-[#D63AFF] text-xl" />;
      case "sql & mysql":
        return <SiMysql className="text-[#4479A1] text-2xl" />;
      case "mongodb / mongoose":
        return <SiMongodb className="text-[#47A248] text-xl" />;
      case "appwrite":
        return <SiAppwrite className="text-[#FD366E] text-lg" />;
      case "supabase":
        return <SiSupabase className="text-[#3ECF8E] text-lg" />;
      
      // Deployment & Dev Tools
      case "git & github":
        return <FaGithub className="text-white text-xl" />;
      case "vercel":
        return <SiVercel className="text-white text-lg" />;
      case "onrender":
        return <FaCloud className="text-[#46E3B7] text-lg" />;
      case "cloudinary":
        return <SiCloudinary className="text-[#3448C5] text-lg" />;
      case "docker (basic)":
        return <FaDocker className="text-[#2496ED] text-xl" />;
      case "postman":
        return <SiPostman className="text-[#FF6C37] text-lg" />;
      
      default:
        return <TbNetwork className="text-primary-accent text-xl" />;
    }
  };

  // Modern gradient dot color based on skill level / category
  const getGlowDot = (level) => {
    if (level >= 95) return "from-green-400 to-emerald-500 shadow-[0_0_12px_rgba(52,211,153,0.4)]";
    if (level >= 90) return "from-cyan-400 to-blue-500 shadow-[0_0_12px_rgba(34,211,238,0.4)]";
    return "from-violet-400 to-fuchsia-500 shadow-[0_0_12px_rgba(192,38,211,0.4)]";
  };

  // Determine grid columns dynamically for beautiful asymmetry
  const getGridCols = () => {
    if (categoryKey === "frontend") return "grid-cols-2 sm:grid-cols-3";
    if (categoryKey === "backend") return "grid-cols-2";
    return "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6";
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={`flex flex-col gap-8 p-6 md:p-8 rounded-3xl border border-white/[0.03] bg-gradient-to-b from-white/[0.02] to-transparent backdrop-blur-xl hover:border-white/[0.08] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] group/card ${className}`}
    >
      {/* Category Header */}
      <div className="flex flex-col gap-2 relative">
        <h3 className="text-xl md:text-2xl font-bold font-clash-display tracking-wide text-white group-hover/card:text-primary-accent transition-colors duration-500 flex items-center gap-3">
          <span className="w-1.5 h-6 rounded-full bg-gradient-to-b from-primary-accent to-secondary-accent block" />
          {data.title}
        </h3>
        <p className="text-sm text-text-secondary font-light leading-relaxed max-w-xl pl-4">
          {data.description}
        </p>
      </div>

      {/* Premium Tech Grid */}
      <div className={`grid ${getGridCols()} gap-3.5 w-full`}>
        {data.items.map((skill, index) => (
          <motion.div
            key={index}
            variants={tileVariants}
            whileHover={{ y: -6, scale: 1.02 }}
            className="flex items-center gap-3.5 p-4 rounded-xl border border-white/[0.05] bg-white/[0.01] hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-300 cursor-pointer select-none relative overflow-hidden group/tile"
          >
            {/* Ambient Background Glow on Hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-accent/0 via-primary-accent/[0.02] to-secondary-accent/[0.02] opacity-0 group-hover/tile:opacity-100 transition-opacity duration-500" />
            
            {/* Skill Icon container */}
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.05] group-hover/tile:border-white/10 group-hover/tile:bg-white/[0.07] transition-all duration-300 group-hover/tile:rotate-[8deg]">
              {getSkillIcon(skill.name)}
            </div>
            
            <span className="text-xs sm:text-sm font-medium tracking-wide text-text-primary group-hover/tile:text-white transition-colors duration-300 font-mono">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
