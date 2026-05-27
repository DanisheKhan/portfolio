import React from "react";
import { motion } from "framer-motion";

/**
 * SkillCard Component
 * Displays a list of tech skills under a category with animated loading lines.
 */
export default function SkillCard({ categoryKey, data, className = "" }) {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.05
      }
    }
  };

  const lineVariants = {
    hidden: { width: "0%" },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.8, 0.25, 1], // Power3 ease
        delay: 0.2
      }
    })
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={`glass-card p-6 md:p-8 rounded-2xl border border-border-color bg-card-bg/10 hover:border-primary-accent/30 transition-colors duration-500 group ${className}`}
    >
      <div className="mb-6">
        <h3 className="text-xl md:text-2xl font-bold text-text-primary group-hover:text-primary-accent transition-colors duration-300">
          {data.title}
        </h3>
        <p className="text-sm text-text-secondary mt-2">
          {data.description}
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {data.items.map((skill, index) => (
          <div key={index} className="flex flex-col gap-1.5">
            <div className="flex justify-between items-center text-xs font-mono font-medium">
              <span className="text-text-primary group-hover:text-white transition-colors duration-300">
                {skill.name}
              </span>
              <span className="text-text-secondary">
                {skill.level}%
              </span>
            </div>
            
            {/* Visual Bar Track */}
            <div className="w-full h-1.5 bg-border-color rounded-full overflow-hidden">
              <motion.div
                custom={skill.level}
                variants={lineVariants}
                className="h-full bg-gradient-to-r from-primary-accent to-secondary-accent rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
