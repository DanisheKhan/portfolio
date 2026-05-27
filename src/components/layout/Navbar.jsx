import React from "react";
import { motion } from "framer-motion";
import StaggeredMenu from "../ui/StaggeredMenu";

/**
 * Navbar Component
 * Integrates the high-fidelity StaggeredMenu component with custom menu items, socials, and top scroll progress indicator.
 */
export default function Navbar() {
  const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'About', ariaLabel: 'Learn about Danish', link: '/about' },
    { label: 'Projects', ariaLabel: 'View my works', link: '/projects' },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
  ];

  const socialItems = [
    { label: 'GitHub', link: 'https://github.com/DanisheKhan' },
    { label: 'LinkedIn', link: 'https://linkedin.com/in/danish-jsx' },
    { label: 'Email', link: 'mailto:danishkhan.jsx@gmail.com' }
  ];

  return (
    <>
      {/* Scroll Progress line at the very top */}
      <div className="fixed top-0 left-0 w-full h-[3px] z-[9999] pointer-events-none">
        <motion.div
          className="h-full bg-gradient-to-r from-primary-accent via-secondary-accent to-primary-accent origin-left"
          style={{
            scaleX: 0,
          }}
          id="scroll-progress-indicator-line"
        />
      </div>

      {/* GSAP-Driven Staggered Navigation Overlay */}
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#ffffff"
        openMenuButtonColor="#ffffff"
        changeMenuColorOnOpen={true}
        colors={['#08080a', '#121215', '#1a1a20']}
        logoText="DANISH"
        accentColor="var(--primary-accent)"
        isFixed={true}
        closeOnClickAway={true}
      />
    </>
  );
}
