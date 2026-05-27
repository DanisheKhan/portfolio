import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/**
 * ProjectCard Component
 * Implements butter-smooth spring-physics 3D card tilt, tech tags, outbound assets and direct details link.
 */
export default function ProjectCard({ project }) {
  const cardRef = useRef(null);

  // High-performance Framer Motion coordinates (avoids React re-renders on mousemove)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Soft spring config for elegant responsive dampening
  const springConfig = { damping: 20, stiffness: 160, mass: 0.5 };

  // Map normalized coordinates [-0.5, 0.5] to expressive 3D rotation angles [-18, 18] degrees
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [18, -18]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-18, 18]), springConfig);

  const handleMouseMove = (e) => {
    const el = cardRef.current;
    if (!el) return;

    const { left, top, width, height } = el.getBoundingClientRect();
    const relativeX = (e.clientX - left) / width - 0.5; // Normalized relative x between -0.5 and 0.5
    const relativeY = (e.clientY - top) / height - 0.5; // Normalized relative y between -0.5 and 0.5
    
    x.set(relativeX);
    y.set(relativeY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        rotateX,
        rotateY
      }}
      className="group relative w-full glass-card rounded-2xl overflow-hidden p-4 border border-border-color cursor-pointer bg-card-bg/25"
    >
      {/* 3D Depth Card Wrapper */}
      <div style={{ transform: "translateZ(30px)" }} className="relative w-full h-[260px] md:h-[320px] rounded-xl overflow-hidden mb-6">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Absolute Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-bg/90 via-primary-bg/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
        
        {/* Dynamic Project Number Badge */}
        <span className="absolute top-4 left-4 px-3 py-1 text-xs font-mono font-semibold tracking-widest text-white bg-black/80 backdrop-blur-md border border-white/10 rounded-lg shadow-lg">
          {project.meta.number}
        </span>

        {/* Dynamic Live Link Button */}
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()} // Prevent bubble link navigation
          className="absolute bottom-4 right-4 bg-primary-accent hover:bg-secondary-accent text-white p-3 rounded-full shadow-lg transition-colors duration-300 opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transform"
        >
          <ArrowUpRight className="w-5 h-5 text-white" />
        </a>
      </div>

      {/* Meta Content Details */}
      <div style={{ transform: "translateZ(20px)" }} className="relative flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <span className="text-xs uppercase font-mono tracking-widest text-text-secondary font-medium">
            {project.category}
          </span>
          <span className="text-xs font-mono font-medium text-text-secondary">
            {project.year}
          </span>
        </div>

        <Link to={`/projects/${project.slug}`} className="block">
          <h3 className="text-2xl font-bold group-hover:text-primary-accent transition-colors duration-300">
            {project.title}
          </h3>
        </Link>

        <p className="text-sm text-text-secondary line-clamp-2 mt-1">
          {project.subtitle}
        </p>

        {/* Tech Stack badging */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.slice(0, 4).map((techName, index) => (
            <span
              key={index}
              className="text-[10px] uppercase font-mono px-2.5 py-1 bg-white/5 rounded-md border border-white/5 text-text-primary"
            >
              {techName}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="text-[10px] uppercase font-mono px-2.5 py-1 bg-white/5 rounded-md border border-white/5 text-text-secondary">
              +{project.tech.length - 4} More
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
