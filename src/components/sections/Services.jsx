import React from "react";
import { Database, Layout, Server, Code, Zap, Compass } from "lucide-react";
import { SERVICES_DATA } from "../../lib/data";
import ScrollReveal from "../ui/ScrollReveal";

/**
 * Services Section Component
 * Displays a 3x2 grid of specialties with hover reactions.
 */
export default function Services() {
  // Map string IDs to Lucide Icon components
  const iconMap = {
    database: <Database className="w-6 h-6 text-primary-accent" />,
    layout: <Layout className="w-6 h-6 text-secondary-accent" />,
    server: <Server className="w-6 h-6 text-primary-accent" />,
    code: <Code className="w-6 h-6 text-secondary-accent" />,
    zap: <Zap className="w-6 h-6 text-primary-accent" />,
    compass: <Compass className="w-6 h-6 text-secondary-accent" />
  };

  return (
    <section className="relative w-full py-20 md:py-32 bg-primary-bg overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-12 md:gap-16">
        
        {/* Section Header */}
        <div className="flex flex-col gap-4">
          <ScrollReveal direction="up">
            <span className="text-xs uppercase font-mono tracking-widest text-secondary-accent font-medium">
              SERVICES
            </span>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-clash-display tracking-tight text-white leading-tight">
              What I <span className="text-gradient">Offer</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.2} className="w-24 h-[3px] bg-gradient-to-r from-primary-accent to-secondary-accent rounded-full mt-2" />
        </div>

        {/* Services Grid (3x2 on Large Viewports) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES_DATA.map((service, index) => (
            <ScrollReveal
              key={index}
              direction="up"
              delay={0.08 * index}
            >
              <div className="glass-card p-8 rounded-2xl border border-border-color bg-card-bg/25 hover:border-primary-accent/40 transition-colors duration-500 group h-full flex flex-col justify-between cursor-pointer">
                <div className="flex flex-col gap-6">
                  {/* Icon wrapper with hover bounce */}
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 w-fit group-hover:-translate-y-1 transition-transform duration-300">
                    {iconMap[service.icon]}
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold font-clash-display text-white group-hover:text-primary-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>

                <p className="text-xs md:text-sm text-text-secondary leading-relaxed font-light mt-4">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
