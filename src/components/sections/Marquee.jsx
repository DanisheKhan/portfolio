import React from "react";
import { motion } from "framer-motion";

/**
 * Marquee Component
 * Implements infinite dual scrolling tickers that accelerate on hover.
 */
export default function Marquee() {
  const row1Techs = [
    "React.js", "Node.js", "Next.js", "Express.js", 
    "Supabase", "MongoDB", "Redux", "Tailwind CSS",
    "TypeScript", "Git & GitHub", "RESTful APIs", "JWT Auth"
  ];

  const row2Services = [
    "Full Stack Engineering", "UI/UX Design", 
    "RESTful API Architecture", "Database Management",
    "Performance Optimization", "Secure Cloud Deployments"
  ];

  // Helper to double items to ensure smooth infinite loop coverage
  const doubleArray = (arr) => [...arr, ...arr, ...arr, ...arr];

  return (
    <section className="w-full bg-[#111111] py-12 overflow-hidden border-y border-border-color/60 select-none">
      <div className="flex flex-col gap-6 md:gap-8 max-w-full">
        {/* Row 1 Scrolling Leftwards (→ direction items) */}
        <div className="relative w-full flex items-center overflow-hidden group">
          <motion.div
            animate={{ x: [0, -1200] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear"
              }
            }}
            whileHover={{ scaleY: 1.05 }}
            className="flex gap-12 shrink-0 select-none whitespace-nowrap"
          >
            {doubleArray(row1Techs).map((tech, idx) => (
              <div key={idx} className="flex items-center gap-12 select-none">
                <span className="text-xl md:text-3xl font-bold font-clash-display tracking-wide text-text-primary/70 hover:text-secondary-accent transition-colors duration-300">
                  {tech}
                </span>
                <span className="text-xl text-primary-accent select-none">✦</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2 Scrolling Rightwards (← direction items) */}
        <div className="relative w-full flex items-center overflow-hidden group">
          <motion.div
            animate={{ x: [-1200, 0] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear"
              }
            }}
            whileHover={{ scaleY: 1.05 }}
            className="flex gap-12 shrink-0 select-none whitespace-nowrap"
          >
            {doubleArray(row2Services).map((service, idx) => (
              <div key={idx} className="flex items-center gap-12 select-none">
                <span className="text-xl md:text-3xl font-bold font-clash-display tracking-wide text-text-primary/40 hover:text-primary-accent transition-colors duration-300">
                  {service}
                </span>
                <span className="text-xl text-secondary-accent select-none">✦</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
