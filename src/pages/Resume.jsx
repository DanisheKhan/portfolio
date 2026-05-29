import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download,
  Printer,
  ExternalLink,
  FileText,
  ChevronDown,
  Eye,
  ArrowUpRight,
} from "lucide-react";
import PageTransition from "../components/layout/PageTransition";
import ScrollReveal from "../components/ui/ScrollReveal";

const MotionLink = motion(Link);

const RESUME_PATH = "/DanishKhan_Resume.pdf";

/**
 * Resume Page (/resume)
 * Premium PDF viewer with download, print, and open-in-new-tab actions.
 * Mobile: shows a clean action card instead of embedding the PDF.
 * Desktop: shows a styled iframe PDF viewer.
 */
export default function Resume() {
  const [isLoading, setIsLoading] = useState(true);
  const [embedError, setEmbedError] = useState(false);

  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = RESUME_PATH;
    a.download = "DanishKhan_Resume.pdf";
    a.click();
  };

  const handlePrint = () => {
    const printFrame = document.getElementById("resume-pdf-frame");
    if (printFrame) {
      printFrame.contentWindow.print();
    } else {
      window.open(RESUME_PATH, "_blank");
    }
  };

  const handleOpenNew = () => {
    window.open(RESUME_PATH, "_blank");
  };

  const actions = [
    {
      id: "resume-download-btn",
      label: "Download PDF",
      icon: <Download className="w-4 h-4" />,
      onClick: handleDownload,
      primary: true,
    },
    {
      id: "resume-print-btn",
      label: "Print",
      icon: <Printer className="w-4 h-4 text-primary-accent" />,
      onClick: handlePrint,
      primary: false,
    },
    {
      id: "resume-open-btn",
      label: "Full Screen",
      icon: <ExternalLink className="w-4 h-4 text-secondary-accent" />,
      onClick: handleOpenNew,
      primary: false,
    },
  ];

  return (
    <PageTransition>
      <div className="w-full relative bg-primary-bg select-none overflow-x-hidden">

        {/* ─── HERO HEADER ─── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 pt-28 sm:pt-32 md:pt-36 pb-8 sm:pb-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:justify-between lg:items-end lg:gap-8">

            <div className="flex flex-col gap-4">
              <ScrollReveal direction="up">
                <span className="text-xs uppercase font-mono tracking-widest text-primary-accent font-medium">
                  MY CURRICULUM VITAE
                </span>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.1}>
                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-clash-display tracking-tight text-white leading-tight">
                  My <span className="text-gradient">Resume</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.2}>
                <p className="text-sm md:text-base text-text-secondary leading-relaxed font-light max-w-xl">
                  A concise overview of my skills, experience, and academic background as a Full Stack Developer.
                </p>
              </ScrollReveal>
            </div>

            {/* Action buttons */}
            <ScrollReveal direction="up" delay={0.25}>
              <div className="flex flex-wrap gap-3">
                {actions.map((action) =>
                  action.primary ? (
                    <motion.button
                      key={action.id}
                      id={action.id}
                      onClick={action.onClick}
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-gradient-to-r from-primary-accent to-secondary-accent text-primary-bg font-semibold text-sm shadow-[0_0_24px_rgba(197,168,128,0.3)] hover:shadow-[0_0_36px_rgba(197,168,128,0.45)] transition-all duration-300 font-mono"
                    >
                      {action.icon}
                      {action.label}
                    </motion.button>
                  ) : (
                    <motion.button
                      key={action.id}
                      id={action.id}
                      onClick={action.onClick}
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-card-bg/40 border border-border-color hover:border-primary-accent/40 text-white font-semibold text-sm transition-all duration-300 font-mono backdrop-blur-sm"
                    >
                      {action.icon}
                      {action.label}
                    </motion.button>
                  )
                )}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── MOBILE: Full action card (no PDF embed) ─── */}
        <section className="md:hidden max-w-7xl mx-auto px-4 sm:px-8 pb-16 sm:pb-20">
          <ScrollReveal direction="up" delay={0.3}>
            {/* Preview card */}
            <div className="relative rounded-2xl border border-border-color overflow-hidden bg-card-bg/10 backdrop-blur-sm shadow-[0_20px_60px_rgba(0,0,0,0.4)]">

              {/* Top bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-border-color/70 bg-card-bg/30 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                  </div>
                  <div className="w-px h-4 bg-border-color ml-1" />
                  <div className="flex items-center gap-2">
                    <FileText className="w-3.5 h-3.5 text-primary-accent" />
                    <span className="text-xs font-mono text-text-secondary">DanishKhan_Resume.pdf</span>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-text-secondary/60">Mobile View</span>
              </div>

              {/* Mobile content: icon + actions */}
              <div className="flex flex-col items-center gap-6 py-14 px-6 text-center">
                {/* Animated PDF icon */}
                <div className="relative">
                  <div className="w-20 h-20 rounded-2xl bg-primary-accent/10 border border-primary-accent/20 flex items-center justify-center">
                    <FileText className="w-9 h-9 text-primary-accent" />
                  </div>
                  {/* Glow */}
                  <div className="absolute inset-0 rounded-2xl bg-primary-accent/5 blur-xl" />
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold font-clash-display text-white">
                    DanishKhan_Resume.pdf
                  </h3>
                  <p className="text-sm text-text-secondary font-light leading-relaxed max-w-xs">
                    PDF preview is best experienced on desktop. Download or open the file to view it on your device.
                  </p>
                </div>

                {/* Action buttons — stacked on mobile */}
                <div className="flex flex-col w-full gap-3 max-w-xs">
                  <motion.button
                    onClick={handleDownload}
                    whileTap={{ scale: 0.97 }}
                    className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl bg-gradient-to-r from-primary-accent to-secondary-accent text-primary-bg font-semibold text-sm font-mono shadow-[0_0_20px_rgba(197,168,128,0.25)]"
                  >
                    <Download className="w-4 h-4" />
                    Download PDF
                  </motion.button>
                  <motion.button
                    onClick={handleOpenNew}
                    whileTap={{ scale: 0.97 }}
                    className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl border border-border-color hover:border-primary-accent/40 text-white font-semibold text-sm font-mono transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4 text-secondary-accent" />
                    Open in Browser
                  </motion.button>
                  <motion.button
                    onClick={handlePrint}
                    whileTap={{ scale: 0.97 }}
                    className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl border border-border-color hover:border-primary-accent/40 text-white font-semibold text-sm font-mono transition-colors duration-300"
                  >
                    <Printer className="w-4 h-4 text-primary-accent" />
                    Print
                  </motion.button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* ─── DESKTOP: PDF Viewer ─── */}
        <section className="hidden md:block max-w-7xl mx-auto px-6 md:px-12 pb-20">
          <ScrollReveal direction="up" delay={0.3}>
            <div className="relative rounded-2xl border border-border-color overflow-hidden bg-card-bg/10 backdrop-blur-sm shadow-[0_20px_60px_rgba(0,0,0,0.4)]">

              {/* Top bar */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-border-color/70 bg-card-bg/30 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  </div>
                  <div className="w-px h-4 bg-border-color ml-1" />
                  <div className="flex items-center gap-2">
                    <FileText className="w-3.5 h-3.5 text-primary-accent" />
                    <span className="text-xs font-mono text-text-secondary">DanishKhan_Resume.pdf</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="w-3.5 h-3.5 text-text-secondary" />
                  <span className="text-xs font-mono text-text-secondary">Embedded Viewer</span>
                </div>
              </div>

              {/* Loading skeleton */}
              <AnimatePresence>
                {isLoading && !embedError && (
                  <motion.div
                    key="loader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 top-[52px] z-10 bg-card-bg/40 backdrop-blur-sm flex flex-col items-center justify-center gap-4"
                  >
                    <div className="w-10 h-10 rounded-full border-2 border-primary-accent border-t-transparent animate-spin" />
                    <span className="text-xs font-mono text-text-secondary">Loading resume…</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* PDF embed */}
              {!embedError ? (
                <iframe
                  id="resume-pdf-frame"
                  src={RESUME_PATH}
                  title="Danish Khan Resume"
                  className="w-full"
                  style={{ height: "min(88vh, 820px)", minHeight: "500px", border: "none" }}
                  onLoad={() => setIsLoading(false)}
                  onError={() => { setIsLoading(false); setEmbedError(true); }}
                />
              ) : (
                /* Fallback if browser blocks iframe PDF */
                <div className="flex flex-col items-center justify-center gap-6 py-24 px-8 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary-accent/10 border border-primary-accent/20 flex items-center justify-center">
                    <FileText className="w-8 h-8 text-primary-accent" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-bold font-clash-display text-white">Preview unavailable in this browser</h3>
                    <p className="text-sm text-text-secondary max-w-md">
                      Your browser blocked the embedded PDF viewer. Use the buttons below to view or download.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3 justify-center">
                    <motion.button
                      onClick={handleDownload}
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-primary-accent to-secondary-accent text-primary-bg font-semibold text-sm font-mono"
                    >
                      <Download className="w-4 h-4" />
                      Download PDF
                    </motion.button>
                    <motion.button
                      onClick={handleOpenNew}
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex items-center gap-2 px-5 py-3 rounded-xl border border-border-color hover:border-secondary-accent/50 text-white font-semibold text-sm font-mono"
                    >
                      <ExternalLink className="w-4 h-4 text-secondary-accent" />
                      Open PDF
                    </motion.button>
                  </div>
                </div>
              )}
            </div>
          </ScrollReveal>
        </section>

        {/* ─── BOTTOM CTA ─── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pb-16 sm:pb-20 md:mt-0">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="glass-card p-6 sm:p-8 md:p-10 rounded-2xl border border-border-color bg-card-bg/15 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div className="flex flex-col gap-2">
                <h2 className="text-xl md:text-2xl font-bold font-clash-display text-white">
                  Let's <span className="text-gradient">Work Together</span>
                </h2>
                <p className="text-sm text-text-secondary font-light">
                  Looking for a passionate full-stack developer? I'm open to new opportunities.
                </p>
              </div>
              <MotionLink
                to="/contact"
                id="resume-contact-cta"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="w-full md:w-auto flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-primary-accent to-secondary-accent text-primary-bg font-semibold text-sm font-mono shadow-[0_0_24px_rgba(197,168,128,0.2)] hover:shadow-[0_0_36px_rgba(197,168,128,0.4)] transition-all duration-300 whitespace-nowrap"
              >
                Get In Touch
                <ArrowUpRight className="w-4 h-4" />
              </MotionLink>
            </div>
          </ScrollReveal>
        </section>

      </div>
    </PageTransition>
  );
}
