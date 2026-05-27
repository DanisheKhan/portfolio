import { useEffect } from "react";

/**
 * Access and control Lenis Smooth Scroll
 * Exposes methods to scroll to targets or temporarily freeze/unfreeze scrolling
 */
export default function useSmoothScroll() {
  const getLenis = () => {
    if (typeof window !== "undefined") {
      return window.lenis;
    }
    return null;
  };

  const scrollTo = (target, options = {}) => {
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(target, {
        duration: options.duration || 1.5,
        easing: options.easing || ((t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))), // easeOutExpo
        ...options
      });
    } else {
      // Fallback
      const element = typeof target === "string" ? document.querySelector(target) : target;
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const stop = () => {
    const lenis = getLenis();
    if (lenis) lenis.stop();
  };

  const start = () => {
    const lenis = getLenis();
    if (lenis) lenis.start();
  };

  return {
    scrollTo,
    stop,
    start,
    getLenis
  };
}
