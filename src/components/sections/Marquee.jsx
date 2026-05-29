import React from "react";

/**
 * Marquee — redesigned as a seamless CSS infinite ticker.
 *
 * Uses the same marquee-left/marquee-right CSS keyframes from index.css.
 * Two rows: tech stack scrolling left, services scrolling right.
 * Larger display type, minimal separators, no Framer Motion (avoids jump).
 */
export default function Marquee() {
  const techs = [
    "React.js", "Node.js", "Next.js", "Express.js",
    "Supabase", "MongoDB", "Redux", "Tailwind CSS",
    "TypeScript", "Git & GitHub", "RESTful APIs", "JWT Auth",
  ];

  const services = [
    "Full Stack Engineering", "UI/UX Design",
    "RESTful API Architecture", "Database Management",
    "Performance Optimization", "Secure Cloud Deployments",
  ];

  // Triplicate so the seamless 50% translateX trick has enough content on all screens
  const row1 = [...techs, ...techs, ...techs];
  const row2 = [...services, ...services, ...services];

  return (
    <div className="w-full bg-secondary-bg overflow-hidden border-t border-b border-white/[0.05] select-none py-0">

      {/* ── Row 1 — scrolls left ── */}
      <div className="relative overflow-hidden py-5 border-b border-white/[0.04]">
        <div className="marquee-left flex items-center gap-0 whitespace-nowrap">
          {row1.map((tech, i) => (
            <span key={i} className="inline-flex items-center gap-6 shrink-0">
              <span className="text-xl md:text-2xl font-bold font-clash-display tracking-tight text-white/60 hover:text-white transition-colors duration-300 cursor-default px-6">
                {tech}
              </span>
              <span className="text-primary-accent/40 text-sm select-none">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Row 2 — scrolls right ── */}
      <div className="relative overflow-hidden py-5">
        <div className="marquee-right flex items-center gap-0 whitespace-nowrap">
          {row2.map((service, i) => (
            <span key={i} className="inline-flex items-center gap-6 shrink-0">
              <span className="text-xl md:text-2xl font-bold font-clash-display tracking-tight text-white/30 hover:text-primary-accent transition-colors duration-300 cursor-default px-6">
                {service}
              </span>
              <span className="text-secondary-accent/30 text-sm select-none">✦</span>
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}
