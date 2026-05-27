import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Global Layout Components
import Preloader from "./components/layout/Preloader";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import SmoothScroll from "./components/layout/SmoothScroll";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";

// Styling
import "./App.css";

/**
 * AppContent Sub-component
 * Separated to allow useLocation hooks within the Router Context boundary.
 */
function AppContent() {
  const location = useLocation();
  const [isPreloading, setIsPreloading] = useState(true);

  // Revert to permanent premium dark mode
  useEffect(() => {
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
  }, []);

  // Scroll to top instantly on every route/page transition
  useEffect(() => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <>
      {/* 2. Fullscreen Preloader Intro */}
      <AnimatePresence mode="wait">
        {isPreloading && (
          <Preloader onComplete={() => setIsPreloading(false)} />
        )}
      </AnimatePresence>

      {/* 3. Core Application Shell (renders after preloading concludes) */}
      {!isPreloading && (
        <SmoothScroll>
          <div className="flex flex-col min-h-screen bg-primary-bg text-text-primary selection:bg-primary-accent selection:text-white relative overflow-hidden">
            
            {/* Global Glassmorphic Background Glowing Blobs */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
              {/* Orb 1: Violet glow in top-left */}
              <div 
                className="absolute rounded-full bg-primary-accent/15 filter blur-[120px] pointer-events-none glass-orb-1"
                style={{
                  width: '50vw',
                  height: '50vw',
                  top: '-15%',
                  left: '-15%'
                }}
              />
              {/* Orb 2: Cyan glow in bottom-right */}
              <div 
                className="absolute rounded-full bg-secondary-accent/15 filter blur-[150px] pointer-events-none glass-orb-2"
                style={{
                  width: '60vw',
                  height: '60vw',
                  bottom: '-20%',
                  right: '-20%'
                }}
              />
              {/* Orb 3: Deep Royal Blue in middle-left */}
              <div 
                className="absolute rounded-full bg-blue-600/8 filter blur-[130px] pointer-events-none glass-orb-3"
                style={{
                  width: '45vw',
                  height: '45vw',
                  top: '35%',
                  left: '-20%'
                }}
              />
              {/* Orb 4: Pink/Indigo in middle-right */}
              <div 
                className="absolute rounded-full bg-purple-600/8 filter blur-[110px] pointer-events-none glass-orb-4"
                style={{
                  width: '40vw',
                  height: '40vw',
                  top: '15%',
                  right: '-15%'
                }}
              />
            </div>
            
            {/* Scrolled blurred glassy navbar */}
            <Navbar />

            {/* Layout-animated AnimatePresence Routes wipe wrap */}
            <main className="flex-grow">
              <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/projects/:slug" element={<ProjectDetail />} />
                  <Route path="/contact" element={<Contact />} />
                  {/* Fallback route redirect */}
                  <Route path="*" element={<Home />} />
                </Routes>
              </AnimatePresence>
            </main>

            {/* Footer typography maps */}
            <Footer />

          </div>
        </SmoothScroll>
      )}
    </>
  );
}

/**
 * Main App Assembly Wrapper
 */
export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}