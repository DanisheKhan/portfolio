import React, { useEffect, useRef, useState } from "react";

/**
 * CustomCursor Component
 * High-performance, physics-based custom cursor system.
 * - Single-mount listener architecture with zero React state re-renders during motion.
 * - GPU-accelerated direct DOM style injection targeting 120FPS.
 * - Multi-factor Linear Interpolation (LERP) for coordinate tracking, scaling, and opacity.
 * - Real-time physical velocity calculating from trailing ring momentum (spring-like physics).
 * - Vector direction angle tracking with stationary threshold filtering to eliminate jitter.
 * - Hover scaling multiplier (1.8x / 2.4x) with progressive deformation dampening.
 * - Glass refractive lens styles: backdrop-blur (1.2px), contrast and saturation boost.
 * - Absolute touch-device bypass and window boundary leaving safe states.
 */
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);

  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const textRef = useRef(null);

  // Position and LERP refs
  const mouse = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const lastRingPos = useRef({ x: 0, y: 0 });
  
  // Animation variables
  const lastAngle = useRef(0);
  const initialized = useRef(false);
  const hoverText = useRef("");
  
  // Dynamic factors (LERPed for extreme smoothness)
  const hoverFactor = useRef(0);       // LERPs between 0 (normal) and 1 (hovered)
  const scaleFactor = useRef(1);       // LERPs towards targetScale
  const opacityFactor = useRef(0);     // LERPs towards targetOpacity

  const targetHover = useRef(0);
  const targetScale = useRef(1);
  const targetOpacity = useRef(0);

  // LERP speeds
  const posLerpSpeed = 0.16;
  const factorLerpSpeed = 0.15;

  useEffect(() => {
    // 1. Strict Touch Device Bypass check
    const isTouchDevice =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      (window.matchMedia && window.matchMedia("(any-pointer: coarse)").matches);

    if (isTouchDevice) {
      return;
    }

    setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    // 2. Hide default system cursor
    document.documentElement.classList.add("custom-cursor-active");

    const dot = dotRef.current;
    const ring = ringRef.current;
    const textSpan = textRef.current;

    if (!dot || !ring) return;

    let animationFrameId;

    // 3. High-performance Animation Loop
    const updateCursor = () => {
      if (!initialized.current) {
        animationFrameId = requestAnimationFrame(updateCursor);
        return;
      }

      // --- Coordinate LERP (fluid trailing) ---
      ringPos.current.x += (mouse.current.x - ringPos.current.x) * posLerpSpeed;
      ringPos.current.y += (mouse.current.y - ringPos.current.y) * posLerpSpeed;

      // --- Momentum Velocity Calculation (using trailing ring delta) ---
      const rx = ringPos.current.x - lastRingPos.current.x;
      const ry = ringPos.current.y - lastRingPos.current.y;
      const ringVelocity = Math.sqrt(rx * rx + ry * ry);

      // --- Vector Direction Angle Tracking with Stationary Filtering ---
      if (ringVelocity > 0.5) {
        lastAngle.current = Math.atan2(ry, rx) * (180 / Math.PI);
      }

      // --- LERP Animation Factors ---
      hoverFactor.current += (targetHover.current - hoverFactor.current) * factorLerpSpeed;
      scaleFactor.current += (targetScale.current - scaleFactor.current) * factorLerpSpeed;
      opacityFactor.current += (targetOpacity.current - opacityFactor.current) * factorLerpSpeed;

      // --- Squash & Stretch Calculations (elastic momentum) ---
      const clampedVelocity = Math.min(ringVelocity, 120);
      const stretch = 1 + clampedVelocity * 0.004;
      const squash = Math.max(1 - clampedVelocity * 0.003, 0.6);

      // Blend squash & stretch to perfectly circular when hoverFactor reaches 1
      const currentStretch = 1 + (stretch - 1) * (1 - hoverFactor.current);
      const currentSquash = 1 + (squash - 1) * (1 - hoverFactor.current);

      // --- Direct Hardware Transform Styling (Zero Layout Thrashing) ---
      // Dot translate & opacity (fades out smoothly on hover)
      dot.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0)`;
      dot.style.opacity = (1 - hoverFactor.current) * opacityFactor.current;

      // Ring translate, rotate, and double-axis scaling
      const scaleX = scaleFactor.current * currentStretch;
      const scaleY = scaleFactor.current * currentSquash;
      ring.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) rotate(${lastAngle.current}deg) scale(${scaleX}, ${scaleY})`;
      ring.style.opacity = opacityFactor.current;

      // Counter-rotate and counter-scale text element so label stays upright, legible, and unsquashed
      if (textSpan) {
        textSpan.style.opacity = hoverFactor.current;
        if (hoverFactor.current > 0.01) {
          textSpan.style.transform = `rotate(${-lastAngle.current}deg) scale(${1 / scaleX}, ${1 / scaleY})`;
        }
      }

      // Update trailing history
      lastRingPos.current.x = ringPos.current.x;
      lastRingPos.current.y = ringPos.current.y;

      animationFrameId = requestAnimationFrame(updateCursor);
    };

    // 4. Mouse and Window Event Handlers
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      if (!initialized.current) {
        // Instant snap on first load to prevent starting from (0,0)
        ringPos.current.x = e.clientX;
        ringPos.current.y = e.clientY;
        lastRingPos.current.x = e.clientX;
        lastRingPos.current.y = e.clientY;
        initialized.current = true;
        targetOpacity.current = 1;
      }
    };

    const handleMouseEnter = () => {
      targetOpacity.current = 1;
    };

    const handleMouseLeave = () => {
      targetOpacity.current = 0;
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest(
        "a, button, [role='button'], input, textarea, select, .cursor-pointer, [data-cursor]"
      );

      if (target) {
        ring.classList.add("cursor-hovered");
        targetHover.current = 1;
        
        const customText = target.getAttribute("data-cursor");
        if (customText) {
          if (textSpan && hoverText.current !== customText) {
            textSpan.textContent = customText;
            hoverText.current = customText;
          }
          targetScale.current = 2.4;
        } else {
          targetScale.current = 1.8;
          if (textSpan && hoverText.current !== "") {
            textSpan.textContent = "";
            hoverText.current = "";
          }
        }
      } else {
        ring.classList.remove("cursor-hovered");
        targetHover.current = 0;
        targetScale.current = 1.0;
        
        // Let the fadeout duration complete before clearing text content completely
        if (textSpan && hoverText.current !== "" && hoverFactor.current < 0.05) {
          textSpan.textContent = "";
          hoverText.current = "";
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleMouseOver);

    // Run the animation loop
    animationFrameId = requestAnimationFrame(updateCursor);

    // Clean up
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animationFrameId);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div className="hidden md:block pointer-events-none select-none">
      {/* Outer physics-based trailing ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-7 h-7 -mt-3.5 -ml-3.5 rounded-full border pointer-events-none z-[99999] opacity-0 transition-[background,border-color,box-shadow] duration-300 ease-out flex items-center justify-center will-change-transform"
        style={{
          borderColor: "rgba(108, 99, 255, 0.7)",
          background: "transparent",
          boxShadow: "none",
        }}
      >
        {/* Floating text inside custom cursor */}
        <span
          ref={textRef}
          className="text-[6.5px] font-mono tracking-widest text-white uppercase font-bold text-center absolute select-none pointer-events-none opacity-0 transition-opacity duration-200"
        />
      </div>

      {/* Center pinpoint indicator */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 -mt-0.75 -ml-0.75 rounded-full bg-secondary-accent pointer-events-none z-[99999] opacity-0 will-change-transform shadow-[0_0_12px_rgba(0,212,255,0.9)]"
      />

      {/* Inline styles for custom hover dynamic transforms */}
      <style>{`
        .custom-cursor-active, .custom-cursor-active * {
          cursor: none !important;
        }
        .cursor-hovered {
          border-color: rgba(0, 212, 255, 0.8) !important;
          background: rgba(255, 255, 255, 0.03) !important;
          box-shadow: 0 0 35px rgba(0, 212, 255, 0.3), inset 0 0 15px rgba(255, 255, 255, 0.05) !important;
          backdrop-filter: blur(1.2px) contrast(125%) saturate(130%) brightness(110%) !important;
          -webkit-backdrop-filter: blur(1.2px) contrast(125%) saturate(130%) brightness(110%) !important;
        }
      `}</style>
    </div>
  );
}
