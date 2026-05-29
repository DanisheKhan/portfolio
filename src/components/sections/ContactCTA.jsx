import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

/**
 * ContactCTA — editorial redesign.
 *
 * Layout: full-width dark section with a large left headline
 * and a right column with email + CTA button.
 * No centered blob — uses a diagonal line grid texture instead.
 */
export default function ContactCTA() {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
  });

  return (
    <section className="relative w-full bg-primary-bg overflow-hidden select-none border-t border-white/[0.05]">

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gold glow — bottom-center */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-primary-accent/[0.07] blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28 relative z-10">

        {/* ── Top label ── */}
        <motion.span
          {...fadeUp(0)}
          className="block text-[10px] font-mono tracking-[0.3em] text-primary-accent uppercase mb-8"
        >
          ✦ Get in Touch
        </motion.span>

        {/* ── Main row ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12 lg:gap-20 border-b border-white/[0.05] pb-14">

          {/* Left: Big headline */}
          <div className="flex flex-col gap-0">
            <motion.div {...fadeUp(0.05)} className="overflow-hidden">
              <h2
                className="font-bold font-clash-display tracking-tight text-white leading-[0.9] uppercase"
                style={{ fontSize: "clamp(3rem, 8vw, 8rem)" }}
              >
                Let's Work
              </h2>
            </motion.div>
            <motion.div {...fadeUp(0.12)} className="overflow-hidden">
              <h2
                className="font-bold font-clash-display tracking-tight leading-[0.9] uppercase italic"
                style={{
                  fontSize: "clamp(3rem, 8vw, 8rem)",
                  background: "linear-gradient(135deg, #C5A880 0%, #E8D5B0 55%, #C5A880 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Together.
              </h2>
            </motion.div>
          </div>

          {/* Right: email + body + CTA */}
          <motion.div
            {...fadeUp(0.2)}
            className="flex flex-col gap-6 lg:max-w-xs shrink-0"
          >
            <p className="text-sm text-white/40 leading-relaxed font-light">
              Currently taking freelance commitments and full-time
              opportunities. Dropping an inquiry takes less than a minute.
            </p>

            <a
              href="mailto:danishkhan.jsx@gmail.com"
              className="group inline-flex items-center gap-2 text-sm font-mono text-white/40 hover:text-primary-accent transition-colors duration-300"
            >
              danishkhan.jsx@gmail.com
              <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
            </a>

            <Link
              to="/contact"
              className="group self-start inline-flex items-center gap-2.5 h-12 px-7 rounded-full bg-primary-accent text-[#080809] text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_36px_rgba(197,168,128,0.4)] hover:-translate-y-0.5"
            >
              Say Hello
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>

        {/* ── Bottom note ── */}
        <motion.div
          {...fadeUp(0.3)}
          className="flex items-center justify-between pt-6"
        >
          <span className="text-[10px] font-mono tracking-[0.2em] text-white/20 uppercase">
            Response within 24 hours
          </span>
          <span className="flex items-center gap-1.5 text-[10px] font-mono tracking-[0.2em] text-white/20 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400/60 animate-pulse" />
            Available now
          </span>
        </motion.div>

      </div>
    </section>
  );
}
