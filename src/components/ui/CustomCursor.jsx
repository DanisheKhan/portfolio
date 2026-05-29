import React, { useEffect, useRef } from "react";

/**
 * CustomCursor Component
 * High-performance, physics-based custom cursor.
 * - Single-mount listener architecture (zero state-recreation stutters).
 * - GPU-accelerated direct DOM transform injections (bypasses React & GSAP loops).
 * - will-change optimization for solid 120FPS rendering.
 * - Dynamic squash & stretch deformation based on pointer velocity.
 * - Absolute touch-device bypass and window-leaving safe state checking.
 */
export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const textRef = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const lastMouse = useRef({ x: 0, y: 0 });
  const initialized = useRef(false);
  const speed = 0.16; // Lerp smoothing weight

  useEffect(() => {
    // Absolute mobile/touch capability check
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      return;
    }

    // Hide default cursor across entire document
    document.documentElement.classList.add("custom-cursor-active");

    const dot = dotRef.current;
    const ring = ringRef.current;
    const textSpan = textRef.current;

    if (!dot || !ring) return;

    let animationFrameId;

    // High performance trailing updates
    const updatePosition = () => {
      if (!initialized.current) {
        animationFrameId = requestAnimationFrame(updatePosition);
        return;
      }

      // Linear Interpolation trailing maths
      ringPos.current.x += (mouse.current.x - ringPos.current.x) * speed;
      ringPos.current.y += (mouse.current.y - ringPos.current.y) * speed;

      // Real movement speed velocity calculating
      const dx = mouse.current.x - lastMouse.current.x;
      const dy = mouse.current.y - lastMouse.current.y;
      const velocity = Math.min(Math.sqrt(dx * dx + dy * dy), 120);
      
      // Motion direction orientation angle
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);

      // Squashing ratios
      const stretch = 1 + velocity * 0.004;
      const squash = 1 - velocity * 0.003;

      // Push raw hardware transform styles (bypasses library cycles)
      dot.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0)`;

      const isHovered = ring.classList.contains("cursor-hovered");
      const scaleX = isHovered ? 5.2 : stretch;
      const scaleY = isHovered ? 5.2 : squash;
      
      ring.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) rotate(${angle}deg) scale(${scaleX}, ${scaleY})`;

      lastMouse.current.x = mouse.current.x;
      lastMouse.current.y = mouse.current.y;

      animationFrameId = requestAnimationFrame(updatePosition);
    };

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      if (!initialized.current) {
        ringPos.current.x = e.clientX;
        ringPos.current.y = e.clientY;
        lastMouse.current.x = e.clientX;
        lastMouse.current.y = e.clientY;
        initialized.current = true;
        
        // Show components smoothly once active coordinates exist
        dot.style.opacity = "1";
        ring.style.opacity = "1";
      }
    };

    // Smoothly fade on document entry/exit
    const handleMouseLeave = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    const handleMouseEnter = () => {
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };

    // Toggle interactive states using high-speed element detection
    const handleMouseOver = (e) => {
      const target = e.target.closest("a, button, [role='button'], input, textarea, select, .cursor-pointer, [data-cursor]");
      
      if (target) {
        ring.classList.add("cursor-hovered");
        dot.classList.add("dot-hovered");
        
        const customText = target.getAttribute("data-cursor");
        if (customText && textSpan) {
          textSpan.textContent = customText;
          textSpan.style.opacity = "1";
        }
      } else {
        ring.classList.remove("cursor-hovered");
        dot.classList.remove("dot-hovered");
        if (textSpan) {
          textSpan.style.opacity = "0";
          textSpan.textContent = "";
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleMouseOver);

    // Initial frame run
    animationFrameId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animationFrameId);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, []);

  return (
    <div className="hidden md:block pointer-events-none select-none">
      {/* Outer physics-based trailing ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-7 h-7 -mt-3.5 -ml-3.5 rounded-full border pointer-events-none z-[99999] opacity-0 transition-[background,border-color,box-shadow,opacity] duration-350 ease-out flex items-center justify-center will-change-transform"
        style={{
          borderColor: "rgba(108, 99, 255, 0.7)",
          background: "transparent",
          boxShadow: "none"
        }}
      >
        {/* Floating text inside custom cursor */}
        <span
          ref={textRef}
          className="text-[7px] font-mono tracking-widest text-white uppercase font-bold text-center absolute select-none pointer-events-none scale-[0.6] opacity-0 transition-opacity duration-200"
        />
      </div>

      {/* Center pinpoint indicator */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 -mt-0.75 -ml-0.75 rounded-full bg-secondary-accent pointer-events-none z-[99999] opacity-0 transition-opacity duration-200 will-change-transform shadow-[0_0_12px_rgba(0,212,255,0.9)]"
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
          backdrop-filter: blur(2.5px) contrast(130%) saturate(140%) brightness(115%) !important;
          -webkit-backdrop-filter: blur(2.5px) contrast(130%) saturate(140%) brightness(115%) !important;
        }
        .dot-hovered {
          opacity: 0 !important;
        }
      `}</style>
    </div>
  );
}
