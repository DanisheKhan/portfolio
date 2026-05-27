import React, { useState, useEffect } from "react";
import useMousePosition from "../../hooks/useMousePosition";

/**
 * CustomCursor Component
 * Displays a dual pointer (dot + ring) that lerps and reacts to interactive elements.
 */
export default function CustomCursor() {
  const { x, y } = useMousePosition();
  const [hovered, setHovered] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Check if device supports hover/touch to hide on mobile
    const checkDevice = () => {
      const mobile = window.matchMedia("(max-width: 768px)").matches || 
                     ("ontouchstart" in window) || 
                     (navigator.maxTouchPoints > 0);
      setIsMobile(mobile);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => {
      window.removeEventListener("resize", checkDevice);
    };
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseEnter = () => setHidden(false);
    const handleMouseLeave = () => setHidden(true);
    
    // Add/remove cursor pointer states on active elements
    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, input, select, textarea, [role="button"], .interactive'
      );
      
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", () => setHovered(true));
        el.addEventListener("mouseleave", () => setHovered(false));
      });
    };

    document.body.addEventListener("mouseenter", handleMouseEnter);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    
    // Inject custom class on body to remove browser standard cursor
    document.documentElement.classList.add("custom-cursor-active");

    addHoverListeners();

    // Re-check dynamic items periodically (since React updates routes)
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.classList.remove("custom-cursor-active");
      observer.disconnect();
    };
  }, [isMobile]);

  if (isMobile || hidden) return null;

  return (
    <>
      {/* Outer follow ring with smooth lagging */}
      <div
        className={`fixed top-0 left-0 w-8 h-8 rounded-full border border-primary-accent pointer-events-none z-[99999] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-[cubic-bezier(0.215,0.61,0.355,1)] ${
          hovered ? "scale-[1.8] bg-primary-accent/15 border-secondary-accent" : "scale-100"
        }`}
        style={{
          transform: `translate3d(${x}px, ${y}px, 0) ${hovered ? "translate(-28%, -28%) scale(1.8)" : "translate(-50%, -50%)"}`
        }}
      />
      {/* Inner instant dot */}
      <div
        className={`fixed top-0 left-0 w-2 h-2 bg-secondary-accent rounded-full pointer-events-none z-[99999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ${
          hovered ? "scale-50" : "scale-100"
        }`}
        style={{
          transform: `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`
        }}
      />
    </>
  );
}
