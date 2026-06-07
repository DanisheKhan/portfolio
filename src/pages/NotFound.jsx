import { Link } from "react-router-dom";
import { Home, Compass } from "lucide-react";
import { motion } from "framer-motion";
import PageTransition from "../components/layout/PageTransition";
import SEOHead from "../components/SEOHead";

/**
 * 404 Not Found Page
 * Displays a premium styled error page with navigation options.
 * Prevents Google from treating unknown URLs as duplicates of the homepage.
 */
export default function NotFound() {
  return (
    <PageTransition>
      <SEOHead
        title="Page Not Found — Danish Khan"
        description="The page you're looking for doesn't exist. Navigate back to Danish Khan's portfolio to explore projects, skills, and more."
      />

      <div className="w-full min-h-screen flex items-center justify-center bg-primary-bg select-none px-4">
        <div className="flex flex-col items-center text-center gap-8 max-w-md">

          {/* Large 404 number */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <h1
              className="text-[clamp(6rem,20vw,14rem)] font-black font-clash-display tracking-tighter leading-none select-none"
              style={{
                background: "linear-gradient(135deg, #C5A880 0%, #E8D5B0 50%, #C5A880 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              404
            </h1>
            {/* Subtle glow behind */}
            <div className="absolute inset-0 bg-primary-accent/5 blur-3xl rounded-full pointer-events-none" />
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-3"
          >
            <h2 className="text-xl sm:text-2xl font-bold font-clash-display text-white">
              Page Not Found
            </h2>
            <p className="text-sm text-text-secondary font-light leading-relaxed">
              The page you're looking for doesn't exist or has been moved.
              Let me help you navigate back.
            </p>
          </motion.div>

          {/* Navigation options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
          >
            <Link
              to="/"
              className="group inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full bg-primary-accent text-[#0B0B0C] text-xs font-semibold font-mono tracking-wider hover:bg-secondary-accent transition-all duration-300 hover:shadow-[0_0_30px_rgba(197,168,128,0.3)] active:scale-95"
            >
              <Home className="w-3.5 h-3.5" />
              Go Home
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full border border-white/[0.1] bg-white/[0.02] text-xs font-mono tracking-wider text-text-secondary hover:text-white hover:border-white/20 transition-all duration-300 active:scale-95"
            >
              <Compass className="w-3.5 h-3.5" />
              View Projects
            </Link>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-4 border-t border-white/[0.05]"
          >
            {[
              { label: "About", path: "/about" },
              { label: "Contact", path: "/contact" },
              { label: "Resume", path: "/resume" },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-[11px] font-mono text-text-secondary hover:text-primary-accent transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
