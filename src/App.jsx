import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Global Layout Components
import CustomCursor from "./components/layout/CustomCursor";
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
  const [theme, setTheme] = useState("dark"); // Default dark theme

  // 1. Maintain Light/Dark document theme classes
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.remove("dark");
      root.classList.add("light");
      root.style.backgroundColor = "#F4F4F4";
      root.style.color = "#0F0F0F";
    } else {
      root.classList.remove("light");
      root.classList.add("dark");
      root.style.backgroundColor = "#0A0A0A";
      root.style.color = "#FFFFFF";
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

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
      {/* 1. Custom Pointer Cursor */}
      <CustomCursor />

      {/* 2. Fullscreen Preloader Intro */}
      <AnimatePresence mode="wait">
        {isPreloading && (
          <Preloader onComplete={() => setIsPreloading(false)} />
        )}
      </AnimatePresence>

      {/* 3. Core Application Shell (renders after preloading concludes) */}
      {!isPreloading && (
        <SmoothScroll>
          <div className="flex flex-col min-h-screen bg-primary-bg text-text-primary selection:bg-primary-accent selection:text-white">
            
            {/* Scrolled blurred glassy navbar */}
            <Navbar theme={theme} toggleTheme={toggleTheme} />

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