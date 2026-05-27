import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

/**
 * Magnetic Button Component
 * Uses GSAP to translate content smoothly towards the mouse cursor on hover.
 */
export default function MagneticButton({
  children,
  className = "",
  range = 30, // Maximum translation distance in pixels
  speed = 1.0, // Animation speed multiplier
  ...props
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let ctx;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = el.getBoundingClientRect();
      
      // Calculate mouse position relative to button center
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);

      // Translate matching standard magnetic visual delay
      ctx = gsap.context(() => {
        gsap.to(el, {
          x: (x / (width / 2)) * range,
          y: (y / (height / 2)) * range,
          duration: 0.35,
          ease: "power2.out"
        });
      });
    };

    const handleMouseLeave = () => {
      ctx = gsap.context(() => {
        gsap.to(el, {
          x: 0,
          y: 0,
          duration: 0.6,
          ease: "elastic.out(1, 0.3)"
        });
      });
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
      if (ctx) ctx.revert();
    };
  }, [range, speed]);

  return (
    <div
      ref={containerRef}
      className={`inline-block transition-transform duration-100 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
