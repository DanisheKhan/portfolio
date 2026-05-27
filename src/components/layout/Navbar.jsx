import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import MagneticButton from "../ui/MagneticButton";

/**
 * Navbar Component
 * Tracks scroll for glass blur, page changes, active theme settings, and handles fullscreen mobile navigation.
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll listener to toggle background glassy class
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route updates
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <>
      {/* Scroll Progress line at the very top */}
      <div className="fixed top-0 left-0 w-full h-[3px] z-[9999] pointer-events-none">
        <motion.div
          className="h-full bg-gradient-to-r from-primary-accent via-secondary-accent to-primary-accent origin-left"
          style={{
            scaleX: 0, // This will be driven by the scroll thread inside App.jsx or via Lenis hooks
          }}
          id="scroll-progress-indicator-line"
        />
      </div>

      <header
        className={`fixed top-0 left-0 w-full z-[998] transition-all duration-500 border-b ${
          isScrolled
            ? "bg-primary-bg/70 backdrop-blur-xl border-border-color/60 py-4"
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo Brand */}
          <Link to="/" className="group flex items-center gap-2">
            <span className="text-xl md:text-2xl font-bold font-clash-display tracking-tight text-text-primary group-hover:text-primary-accent transition-colors duration-300">
              DANISH<span className="text-secondary-accent">.</span>
            </span>
          </Link>

          {/* Desktop Links (Centered/Right) */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <MagneticButton key={link.path} range={15}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `relative px-3 py-1.5 text-sm font-medium tracking-wide transition-colors duration-300 ${
                      isActive ? "text-text-primary" : "text-text-secondary hover:text-text-primary"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      {/* Active indicator underline */}
                      {isActive && (
                        <motion.div
                          layoutId="activeNavIndicatorLine"
                          className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary-accent to-secondary-accent rounded-full"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </MagneticButton>
            ))}


          </nav>

          {/* Mobile Actions Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-4">


            {/* Hamburger button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-full border border-border-color bg-card-bg/25 text-text-primary cursor-pointer"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
            className="fixed inset-0 z-[997] bg-primary-bg flex flex-col justify-center px-8 sm:px-16"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + idx * 0.1, duration: 0.5, ease: "easeOut" }}
                >
                  <NavLink
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `text-4xl sm:text-5xl font-bold font-clash-display block transition-colors duration-300 ${
                        isActive ? "text-gradient" : "text-text-secondary hover:text-text-primary"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
            </div>

            {/* Mobile Footer Area */}
            <div className="absolute bottom-12 left-8 sm:left-16 flex flex-col gap-4 text-text-secondary text-sm">
              <span>Bhusawal, Maharashtra, India</span>
              <a href="mailto:danishkhan.jsx@gmail.com" className="text-text-primary hover:text-secondary-accent transition-colors duration-300">
                danishkhan.jsx@gmail.com
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
