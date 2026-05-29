import React from "react";
import { GitBranch, Star, Users, Code2 } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";
import { useGithubData } from "../../hooks/useGithubData";

/**
 * GitHubStats Section Component
 * Render custom-designed stats, contributions grids, and language breakdowns under DanisheKhan.
 */
export default function GitHubStats() {
  const { data, loading } = useGithubData("DanisheKhan");

  // Generate random visual contributions colors for matrix grid
  const gridColors = ["bg-white/5", "bg-green-900/30", "bg-green-700/40", "bg-green-500/60", "bg-green-400/80"];
  
  // Use real daily counts or fallback to an empty grid if loading
  const daysInYear = loading || !data 
    ? Array.from({ length: 180 }, () => gridColors[0]) 
    : data.dailyCounts.map(count => {
        if (count === 0) return gridColors[0];
        if (count < 3) return gridColors[1];
        if (count < 6) return gridColors[2];
        if (count < 10) return gridColors[3];
        return gridColors[4];
      });

  const gitStats = [
    { label: "Total Contributions", value: loading ? "..." : data?.totalContributions?.toLocaleString() || "0", icon: <GitBranch className="w-5 h-5 text-primary-accent" /> },
    { label: "Public Repositories", value: loading ? "..." : data?.publicRepos?.toLocaleString() || "0", icon: <Code2 className="w-5 h-5 text-secondary-accent" /> },
    { label: "Current Streak", value: loading ? "..." : `${data?.currentStreak || 0} Days`, icon: <Star className="w-5 h-5 text-orange-400" /> },
    { label: "Longest Streak", value: loading ? "..." : `${data?.longestStreak || 0} Days`, icon: <Star className="w-5 h-5 text-yellow-400" /> }
  ];

  const languages = loading || !data ? [] : data.languages;

  return (
    <section className="relative w-full py-20 md:py-32 bg-primary-bg overflow-hidden select-none">
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
              className="glass-card p-6 rounded-2xl border border-border-color bg-card-bg/25 flex flex-col gap-6 min-h-[180px]"
            >
              <h3 className="text-sm font-bold text-white uppercase font-mono tracking-widest">
                Language Breakdown
              </h3>
              
              {loading ? (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full border-2 border-primary-accent border-t-transparent animate-spin" />
                </div>
              ) : (
                <>
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
                        <span className={`w-2.5 h-2.5 rounded-full ${lang.color} inline-block shrink-0`} />
                        <div className="flex flex-col">
                          <span className="text-xs text-text-primary font-medium truncate">{lang.name}</span>
                          <span className="text-[10px] text-text-secondary font-mono">{lang.percent}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
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
              <div className="relative">
                {loading && (
                   <div className="absolute inset-0 z-20 flex items-center justify-center bg-card-bg/50 backdrop-blur-sm rounded-xl">
                      <div className="w-8 h-8 rounded-full border-2 border-primary-accent border-t-transparent animate-spin" />
                   </div>
                )}
                <div className="grid grid-cols-[repeat(26,_minmax(0,_1fr))] gap-[3px] md:gap-[5px] w-full max-w-full overflow-hidden">
                  {daysInYear.map((colorVal, idx) => (
                    <div
                      key={idx}
                      className={`aspect-square w-full rounded-[2px] transition-transform duration-300 hover:scale-125 hover:z-10 cursor-pointer ${colorVal}`}
                    />
                  ))}
                </div>
              </div>

              {/* Map Guide Labels */}
              <div className="flex justify-between items-center text-[10px] font-mono text-text-secondary pt-4 border-t border-border-color/60">
                <span>6 Months Ago</span>
                <div className="flex items-center gap-1.5">
                  <span>Less</span>
                  <span className="w-2.5 h-2.5 rounded-[1px] bg-white/5" />
                  <span className="w-2.5 h-2.5 rounded-[1px] bg-green-900/30" />
                  <span className="w-2.5 h-2.5 rounded-[1px] bg-green-700/40" />
                  <span className="w-2.5 h-2.5 rounded-[1px] bg-green-500/60" />
                  <span className="w-2.5 h-2.5 rounded-[1px] bg-green-400/80" />
                  <span>More</span>
                </div>
                <span>Today</span>
              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
}
