import React, { useEffect, useState } from "react";
import usePhysics from "./usePhysics";

/**
 * CustomCursor Component
 * 
 * Production-ready modular custom cursor container.
 * - Consumes usePhysics custom hook for LERP coordinate updating.
 * - Hardware-accelerated translate3d and matrix translations.
 * - Refractive Glass Hover Lens mechanism.
 * - Auto-disables and reverts to native pointer on mobile and touch devices.
 */
export default function CustomCursor() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const { dotRef, ringRef, setHoverState } = usePhysics();

  useEffect(() => {
    // 1. Double check touch device capability
    const checkDevice = () => {
      const isCoarse = window.matchMedia("(any-pointer: coarse)").matches;
      const isTouch =
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        isCoarse;
      setIsTouchDevice(isTouch);

      if (!isTouch) {
        document.documentElement.classList.add("custom-cursor-active");
      } else {
        document.documentElement.classList.remove("custom-cursor-active");
      }
    };

    checkDevice();

    const mediaQuery = window.matchMedia("(any-pointer: coarse)");
    mediaQuery.addEventListener("change", checkDevice);

    return () => {
      mediaQuery.removeEventListener("change", checkDevice);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    const ring = ringRef.current;
    if (!ring) return;
    const textSpan = ring.querySelector("span");

    // 2. Global event delegation for interactive element hover detection
    const handleMouseOver = (e) => {
      const target = e.target.closest(
        "a, button, [role='button'], input, textarea, select, .cursor-pointer, [data-cursor]"
      );

      if (target) {
        // Toggle Refractive Hover lens multiplier
        setHoverState(true, 1.8);

        // Apply pure Tailwind refraction filters to outer ring
        ring.classList.add(
          "backdrop-blur-[1.2px]",
          "contrast-125",
          "saturate-130",
          "brightness-110",
          "border-white/40",
          "bg-white/5",
          "shadow-[0_0_20px_rgba(255,255,255,0.15)]"
        );
        ring.classList.remove("border-white/20", "bg-transparent");
      } else {
        setHoverState(false);

        // Revert to default trailing ring style
        ring.classList.remove(
          "backdrop-blur-[1.2px]",
          "contrast-125",
          "saturate-130",
          "brightness-110",
          "border-white/40",
          "bg-white/5",
          "shadow-[0_0_20px_rgba(255,255,255,0.15)]"
        );
        ring.classList.add("border-white/20", "bg-transparent");
      }
    };

    // 3. Decentralized Dynamic Cursor Broadcasting Event Listener
    const handleBroadcast = (e) => {
      const text = e.detail;

      if (text) {
        if (textSpan) {
          textSpan.textContent = text;
          textSpan.style.opacity = "1";
        }
        setHoverState(true, 2.4); // scale larger to envelope text label

        ring.classList.add(
          "backdrop-blur-[1.2px]",
          "contrast-125",
          "saturate-130",
          "brightness-110",
          "border-white/40",
          "bg-white/5",
          "shadow-[0_0_20px_rgba(255,255,255,0.15)]"
        );
        ring.classList.remove("border-white/20", "bg-transparent");
      } else {
        if (textSpan) {
          textSpan.style.opacity = "0";
          setTimeout(() => {
            if (textSpan.style.opacity === "0") {
              textSpan.textContent = "";
            }
          }, 200);
        }
        setHoverState(false);

        ring.classList.remove(
          "backdrop-blur-[1.2px]",
          "contrast-125",
          "saturate-130",
          "brightness-110",
          "border-white/40",
          "bg-white/5",
          "shadow-[0_0_20px_rgba(255,255,255,0.15)]"
        );
        ring.classList.add("border-white/20", "bg-transparent");
      }
    };

    document.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("cursor-broadcast", handleBroadcast);

    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("cursor-broadcast", handleBroadcast);
    };
  }, [isTouchDevice, setHoverState, ringRef]);

  if (isTouchDevice) return null;

  return (
    <div className="hidden md:block pointer-events-none select-none">
      {/* 1. Dynamic Outer trailing physics ring with embedded child span */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-7 h-7 -mt-3.5 -ml-3.5 rounded-full border border-white/20 bg-transparent pointer-events-none z-[99999] opacity-0 transition-[background-color,border-color,box-shadow,backdrop-filter,filter] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform flex items-center justify-center"
      >
        <span className="text-[5.5px] font-mono tracking-widest text-white uppercase font-bold text-center absolute select-none pointer-events-none opacity-0 transition-opacity duration-200 whitespace-nowrap" />
      </div>

      {/* 2. Center pinpoint indicator dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 -mt-0.75 -ml-0.75 rounded-full bg-secondary-accent pointer-events-none z-[99999] opacity-0 will-change-transform shadow-[0_0_12px_rgba(0,212,255,0.9)]"
      />

      {/* Modular Global Pointer Hider override */}
      <style>{`
        .custom-cursor-active, .custom-cursor-active * {
          cursor: none !important;
        }
      `}</style>
    </div>
  );
}
