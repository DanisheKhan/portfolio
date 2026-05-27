import React from "react";
import { GitBranch, Star, Eye, Code2 } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

/**
 * GitHubStats Section Component
 * Render custom-designed stats, contributions grids, and language breakdowns under DanisheKhan.
 */
export default function GitHubStats() {
  // Generate random visual contributions colors for matrix grid
  const gridColors = ["bg-white/5", "bg-green-900/30", "bg-green-700/40", "bg-green-500/60", "bg-green-400/80"];
  const daysInYear = Array.from({ length: 180 }, () => {
    // Bias towards low-medium contributions
    const r = Math.random();
    if (r < 0.4) return gridColors[0];
    if (r < 0.7) return gridColors[1];
    if (r < 0.88) return gridColors[2];
    if (r < 0.97) return gridColors[3];
    return gridColors[4];
  });

  const gitStats = [
    { label: "Total Contributions", value: "1,248", icon: <GitBranch className="w-5 h-5 text-primary-accent" /> },
    { label: "Public Repositories", value: "32", icon: <Code2 className="w-5 h-5 text-secondary-accent" /> },
    { label: "GitHub Stars", value: "48", icon: <Star className="w-5 h-5 text-yellow-400" /> },
    { label: "Profile Views", value: "2,482", icon: <Eye className="w-5 h-5 text-primary-accent" /> }
  ];

  const languages = [
    { name: "JavaScript", percent: 65, color: "bg-yellow-400" },
    { name: "React / HTML5", percent: 20, color: "bg-secondary-accent" },
    { name: "CSS / Tailwind", percent: 10, color: "bg-primary-accent" },
    { name: "Database / SQL", percent: 5, color: "bg-green-500" }
  ];

  return (
    <section className="relative w-full py-20 md:py-32 bg-[#0A0A0A] overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-12 md:gap-16">
        
        {/* Section Header */}
        <div className="flex flex-col gap-4">
          <ScrollReveal direction="up">
            <span className="text-xs uppercase font-mono tracking-widest text-primary-accent font-medium">
              METRICS
            </span>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-clash-display tracking-tight text-white leading-tight">
              GitHub <span className="text-gradient">Activity</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.2} className="w-24 h-[3px] bg-gradient-to-r from-primary-accent to-secondary-accent rounded-full mt-2" />
        </div>

        {/* GitHub Panel Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left panel: Quick metrics grid & Lang breakdown */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-4">
              {gitStats.map((stat, idx) => (
                <ScrollReveal
                  key={idx}
                  direction="up"
                  delay={0.05 * idx}
                  className="glass-card p-6 rounded-2xl border border-border-color bg-card-bg/25 flex flex-col gap-3"
                >
                  <div className="p-2 w-fit rounded-lg bg-white/5 border border-white/5">
                    {stat.icon}
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-xl md:text-2xl font-bold text-white font-clash-display">
                      {stat.value}
                    </span>
                    <span className="text-[10px] text-text-secondary font-mono tracking-wider font-medium uppercase">
                      {stat.label}
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Language Breakdown */}
            <ScrollReveal
              direction="up"
              delay={0.2}
              className="glass-card p-6 rounded-2xl border border-border-color bg-card-bg/25 flex flex-col gap-6"
            >
              <h3 className="text-sm font-bold text-white uppercase font-mono tracking-widest">
                Language Breakdown
              </h3>
              
              {/* Stacked bar visual representation */}
              <div className="w-full h-3 rounded-full overflow-hidden flex bg-border-color">
                {languages.map((lang, idx) => (
                  <div
                    key={idx}
                    className={`h-full ${lang.color}`}
                    style={{ width: `${lang.percent}%` }}
                  />
                ))}
              </div>

              {/* Language labels grid */}
              <div className="grid grid-cols-2 gap-4">
                {languages.map((lang, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className={`w-2.5 h-2.5 rounded-full ${lang.color} inline-block`} />
                    <div className="flex flex-col">
                      <span className="text-xs text-text-primary font-medium">{lang.name}</span>
                      <span className="text-[10px] text-text-secondary font-mono">{lang.percent}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right panel: Contribution heat map representation */}
          <div className="lg:col-span-7">
            <ScrollReveal
              direction="up"
              delay={0.3}
              className="glass-card p-6 md:p-8 rounded-2xl border border-border-color bg-card-bg/25 flex flex-col justify-between h-full gap-6"
            >
              <div className="flex justify-between items-center pb-4 border-b border-border-color/60">
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-white font-mono tracking-wider">
                    @DanisheKhan
                  </span>
                  <span className="text-xs text-text-secondary mt-0.5">
                    Contributions in the last 6 months
                  </span>
                </div>
                
                <a
                  href="https://github.com/DanisheKhan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 rounded-full border border-border-color bg-white/5 hover:border-primary-accent hover:text-white transition-colors duration-300 text-xs font-mono uppercase tracking-wider text-text-primary"
                >
                  Follow
                </a>
              </div>

              {/* Contribution Grid Swarm */}
              <div className="grid grid-cols-[repeat(26,_minmax(0,_1fr))] gap-[3px] md:gap-[5px] w-full max-w-full overflow-hidden">
                {daysInYear.map((colorVal, idx) => (
                  <div
                    key={idx}
                    className={`aspect-square w-full rounded-[2px] transition-transform duration-300 hover:scale-125 hover:z-10 cursor-pointer ${colorVal}`}
                  />
                ))}
              </div>

              {/* Map Guide Labels */}
              <div className="flex justify-between items-center text-[10px] font-mono text-text-secondary pt-4 border-t border-border-color/60">
                <span>Jan</span>
                <div className="flex items-center gap-1.5">
                  <span>Less</span>
                  <span className="w-2.5 h-2.5 rounded-[1px] bg-white/5" />
                  <span className="w-2.5 h-2.5 rounded-[1px] bg-green-900/30" />
                  <span className="w-2.5 h-2.5 rounded-[1px] bg-green-700/40" />
                  <span className="w-2.5 h-2.5 rounded-[1px] bg-green-500/60" />
                  <span className="w-2.5 h-2.5 rounded-[1px] bg-green-400/80" />
                  <span>More</span>
                </div>
                <span>Jun</span>
              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
}
