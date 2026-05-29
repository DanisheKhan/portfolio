import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";
import MagneticButton from "../ui/MagneticButton";

/**
 * ContactCTA Section Component (Home Footer CTA)
 * Renders large full-width action panels attracting clients to dropping contact requests.
 */
export default function ContactCTA() {
  return (
    <section className="relative w-full py-24 md:py-36 bg-secondary-bg overflow-hidden select-none border-t border-border-color/60">
      {/* Decorative gradient orb background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-primary-accent/10 blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-center justify-center text-center relative z-10 gap-6">
        
        <ScrollReveal direction="up">
          <span className="text-xs uppercase font-mono tracking-widest text-secondary-accent font-medium">
            GET IN TOUCH
          </span>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.1}>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold font-clash-display tracking-tight text-white leading-tight">
            Let's Work <span className="text-gradient">Together.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <p className="text-sm sm:text-base md:text-lg max-w-xl text-text-secondary leading-relaxed font-light">
            Currently taking freelance commitments and full-time opportunities. Dropping an inquiry takes less than a minute.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.3} className="mt-6">
          <MagneticButton range={25}>
            <Link
              to="/contact"
              className="px-10 py-5 rounded-full bg-gradient-to-r from-primary-accent via-secondary-accent to-primary-accent text-sm md:text-base font-medium text-white shadow-[0_8px_30px_rgba(197,168,128,0.25)] hover:shadow-[0_8px_40px_rgba(234,219,200,0.4)] transition-all duration-300 flex items-center gap-3 group cursor-pointer"
            >
              Say Hello
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </MagneticButton>
        </ScrollReveal>

      </div>
    </section>
  );
}
