import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Printer, ExternalLink, FileText, ChevronDown, Eye } from "lucide-react";
import PageTransition from "../components/layout/PageTransition";
import ScrollReveal from "../components/ui/ScrollReveal";

const RESUME_PATH = "/DanishKhan_Resume.pdf";

/**
 * Resume Page (/resume)
 * Premium PDF viewer with download, print, and open-in-new-tab actions.
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

  return (
    <PageTransition>
      <div className="w-full relative bg-primary-bg pt-28 pb-20 select-none">

        {/* ─── HERO HEADER ─── */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-10">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
            
            <div className="flex flex-col gap-4">
              <ScrollReveal direction="up">
                <span className="text-xs uppercase font-mono tracking-widest text-primary-accent font-medium">
                  MY CURRICULUM VITAE
                </span>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.1}>
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-clash-display tracking-tight text-white leading-tight">
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
                {/* Download */}
                <motion.button
                  id="resume-download-btn"
                  onClick={handleDownload}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-gradient-to-r from-primary-accent to-secondary-accent text-primary-bg font-semibold text-sm shadow-[0_0_24px_rgba(197,168,128,0.3)] hover:shadow-[0_0_36px_rgba(197,168,128,0.45)] transition-all duration-300 font-mono"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </motion.button>

                {/* Print */}
                <motion.button
                  id="resume-print-btn"
                  onClick={handlePrint}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-card-bg/40 border border-border-color hover:border-primary-accent/50 text-white font-semibold text-sm transition-all duration-300 font-mono backdrop-blur-sm"
                >
                  <Printer className="w-4 h-4 text-primary-accent" />
                  Print
                </motion.button>

                {/* Open in new tab */}
                <motion.button
                  id="resume-open-btn"
                  onClick={handleOpenNew}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-card-bg/40 border border-border-color hover:border-secondary-accent/50 text-white font-semibold text-sm transition-all duration-300 font-mono backdrop-blur-sm"
                >
                  <ExternalLink className="w-4 h-4 text-secondary-accent" />
                  Full Screen
                </motion.button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── PDF VIEWER ─── */}
        <section className="max-w-7xl mx-auto px-6 md:px-12">
          <ScrollReveal direction="up" delay={0.3}>
            <div className="relative rounded-2xl border border-border-color overflow-hidden bg-card-bg/10 backdrop-blur-sm shadow-[0_20px_60px_rgba(0,0,0,0.4)]">

              {/* Top bar */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-border-color/70 bg-card-bg/30 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  {/* Window dots */}
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
                  style={{ height: "90vh", minHeight: "700px", border: "none" }}
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
        <section className="max-w-7xl mx-auto px-6 md:px-12 mt-16">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="glass-card p-8 md:p-10 rounded-2xl border border-border-color bg-card-bg/15 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex flex-col gap-2">
                <h2 className="text-xl md:text-2xl font-bold font-clash-display text-white">
                  Let's <span className="text-gradient">Work Together</span>
                </h2>
                <p className="text-sm text-text-secondary font-light">
                  Looking for a passionate full-stack developer? I'm open to new opportunities.
                </p>
              </div>
              <motion.a
                href="/contact"
                id="resume-contact-cta"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-primary-accent to-secondary-accent text-primary-bg font-semibold text-sm font-mono shadow-[0_0_24px_rgba(197,168,128,0.2)] hover:shadow-[0_0_36px_rgba(197,168,128,0.4)] transition-all duration-300 whitespace-nowrap"
              >
                Get In Touch
                <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
              </motion.a>
            </div>
          </ScrollReveal>
        </section>

      </div>
    </PageTransition>
  );
}
