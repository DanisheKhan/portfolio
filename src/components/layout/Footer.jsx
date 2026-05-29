import React from "react";
import { Link } from "react-router-dom";
import { ArrowUp, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import MagneticButton from "../ui/MagneticButton";
import useSmoothScroll from "../../hooks/useSmoothScroll";
import ScrollReveal from "../ui/ScrollReveal";

/**
 * Footer Component
 * Render large visual logo plates, magnetic socials, links, and Lenis scroll controllers.
 */
export default function Footer() {
  const { scrollTo } = useSmoothScroll();

  const socialLinks = [
    { name: "GitHub", icon: <FaGithub className="w-5 h-5" />, url: "https://github.com/DanisheKhan" },
    { name: "LinkedIn", icon: <FaLinkedin className="w-5 h-5" />, url: "https://linkedin.com/in/danish-jsx" },
    { name: "Email", icon: <Mail className="w-5 h-5" />, url: "mailto:danishkhan.jsx@gmail.com" }
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <footer className="relative w-full border-t border-border-color bg-primary-bg pt-12 sm:pt-16 pb-8 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 flex flex-col gap-10 sm:gap-12">
        {/* Footer Top Header */}
        <ScrollReveal direction="up" className="w-full">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 sm:gap-8">
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-clash-display tracking-tight text-white mb-2">
                Let's create something extraordinary.
              </h3>
              <p className="text-sm text-text-secondary">
                Available for full-time opportunities and creative collaborations.
              </p>
            </div>

            {/* Magnetic back-to-top button */}
            <MagneticButton range={20}>
              <button
                onClick={() => scrollTo(0, { duration: 2.0 })}
                className="p-4 rounded-full border border-border-color bg-card-bg/20 text-white hover:border-primary-accent hover:text-secondary-accent transition-all duration-300 group cursor-pointer"
                aria-label="Back to Top"
              >
                <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
            </MagneticButton>
          </div>
        </ScrollReveal>

        {/* Middle grid section */}
        <ScrollReveal direction="up" delay={0.08} className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 py-8 border-y border-border-color/60">
            {/* Quick Navigation Channels */}
            <div className="flex flex-col gap-4">
              <span className="text-xs uppercase font-mono tracking-widest text-text-secondary font-medium">
                Navigation
              </span>
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-text-secondary hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Social Profiles */}
            <div className="flex flex-col gap-4 col-span-2">
              <span className="text-xs uppercase font-mono tracking-widest text-text-secondary font-medium">
                Social Links
              </span>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <MagneticButton key={social.name} range={12}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full border border-border-color bg-card-bg/25 text-text-secondary hover:text-white hover:border-primary-accent transition-all duration-300 inline-block"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  </MagneticButton>
                ))}
              </div>
            </div>

            {/* Availability details */}
            <div className="flex flex-col gap-2 sm:text-right sm:items-end">
              <span className="text-xs uppercase font-mono tracking-widest text-text-secondary font-medium">
                Current Location
              </span>
              <span className="text-sm text-text-primary">Bhusawal, MH, India</span>
              <span className="text-xs text-text-secondary">UTC+5:30 (IST)</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Large Decorative Nameplate Section */}
        <ScrollReveal direction="up" delay={0.16} className="w-full">
          <div className="w-full flex items-center justify-center pointer-events-none select-none overflow-hidden">
            <h2 className="text-[clamp(3rem,12vw,12rem)] font-black font-clash-display tracking-tighter leading-none text-white/5 uppercase select-none pointer-events-none">
              DANISH
            </h2>
          </div>
        </ScrollReveal>

        {/* Footer Meta Credits */}
        <ScrollReveal direction="up" delay={0.2} className="w-full">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-text-secondary font-mono pt-4 gap-4">
            <span>&copy; {new Date().getFullYear()} Danish Khan. All rights reserved.</span>
            <div className="flex gap-6">
              <span>Built with React + Vite</span>
              <span>Aesthetics & Animated UX</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
