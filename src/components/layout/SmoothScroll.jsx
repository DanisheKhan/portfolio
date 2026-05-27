import React, { useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger immediately
gsap.registerPlugin(ScrollTrigger);

/**
 * SmoothScroll Layout Component
 * Initializes Lenis globally, syncs scrolling with GSAP ScrollTrigger, and provides scroll frame cycles.
 */
export default function SmoothScroll({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis with premium options
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
      infinite: false
    });

    lenisRef.current = lenis;
    window.lenis = lenis; // Expose globally for hooks

    // Sync Lenis scroll updates with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Sync GSAP animations with Lenis frames
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // Disable GSAP lag smoothing to keep ticking locked together
    gsap.ticker.lagSmoothing(0);

    // Listen to custom header scroll progress indicators
    const handleScroll = ({ scroll, limit }) => {
      const line = document.getElementById("scroll-progress-indicator-line");
      if (line && limit > 0) {
        const percent = scroll / limit;
        line.style.transform = `scaleX(${percent})`;
      }
    };
    
    lenis.on("scroll", handleScroll);

    return () => {
      // Destroy Lenis instance on unmount to prevent leaks
      lenis.destroy();
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
      window.lenis = null;
    };
  }, []);

  return <div className="w-full relative">{children}</div>;
}
