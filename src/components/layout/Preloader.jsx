import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Plasma from "../ui/Plasma";

/**
 * Preloader — cinematic intro, single smooth upward exit wipe.
 */
export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const containerRef   = useRef(null);
  const line1Ref       = useRef(null);
  const line2Ref       = useRef(null);
  const progressBarRef = useRef(null);
  const numberRef      = useRef(null);
  const glowRef        = useRef(null);
  const gridRef        = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const ctx = gsap.context(() => {
      /* ── Initial states ── */
      gsap.set([line1Ref.current, line2Ref.current], { y: "110%", opacity: 0 });
      gsap.set(progressBarRef.current, { scaleX: 0 });
      gsap.set(glowRef.current, { opacity: 0 });

      const exitAnimation = () => {
        // Fade grid before wipe so it doesn't flash
        gsap.to(gridRef.current, { opacity: 0, duration: 0.3, ease: "power2.in" });
        gsap.to(containerRef.current, {
          yPercent: -100,
          duration: 1.1,
          ease: "power4.inOut",
          delay: 0.1,
          onComplete: () => {
            document.body.style.overflow = "";
            if (onComplete) onComplete();
          },
        });
      };

      /* ── Main loading timeline ── */
      const tl = gsap.timeline({ onComplete: exitAnimation });

      // Ambient glow
      tl.to(glowRef.current, {
        opacity: 1,
        duration: 0.7,
        ease: "power2.out",
      }, 0);

      // Line 1 — DANISH
      tl.to(line1Ref.current, {
        y: "0%",
        opacity: 1,
        duration: 1.0,
        ease: "power4.out",
      }, 0.1);

      // Line 2 — KHAN
      tl.to(line2Ref.current, {
        y: "0%",
        opacity: 1,
        duration: 1.0,
        ease: "power4.out",
      }, 0.22);

      // Progress counter 0 → 100
      const counter = { v: 0 };
      tl.to(counter, {
        v: 100,
        duration: 1.8,
        ease: "power2.inOut",
        onUpdate: () => setProgress(Math.floor(counter.v)),
      }, 0.1);

      // Progress bar fill
      tl.to(progressBarRef.current, {
        scaleX: 1,
        duration: 1.8,
        ease: "power2.inOut",
      }, 0.1);

      // Tiny hold so user sees 100% for a beat, then exit fires immediately
      tl.to({}, { duration: 0.15 });
    }, containerRef);

    return () => {
      ctx.revert();
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[999999] select-none overflow-hidden"
      style={{ background: "#080809" }}
    >
      {/* WebGL Plasma Background - Ambient Gold Glow */}
      <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
        <Plasma
          color="#EADBC8"
          speed={0.15}
          scale={1.5}
          opacity={0.3}
          mouseInteractive={false}
        />
      </div>
      {/* Ambient gold glow */}
      <div
        ref={glowRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 35% at 50% 50%, rgba(197,168,128,0.10) 0%, transparent 70%)",
        }}
      />

      {/* Subtle grid overlay */}
      <div
        ref={gridRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Corner metadata */}
      <div className="absolute top-8 left-8 md:top-12 md:left-14 z-10 flex flex-col gap-0.5">
        <span className="text-[9px] font-mono tracking-[0.3em] text-white/20 uppercase">
          Portfolio 2026
        </span>
        <span className="text-[9px] font-mono tracking-[0.2em] text-white/10 uppercase">
          DK / Full Stack
        </span>
      </div>
      <div className="absolute top-8 right-8 md:top-12 md:right-14 z-10">
        <span className="text-[9px] font-mono tracking-[0.3em] text-white/20 uppercase">
          Creative Developer
        </span>
      </div>

      {/* Name — centre */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
        <div className="overflow-hidden w-full text-center">
          <h1
            ref={line1Ref}
            className="font-bold font-clash-display tracking-[-0.02em] text-white leading-none"
            style={{ fontSize: "clamp(3.5rem, 15vw, 13rem)" }}
          >
            DANISH
          </h1>
        </div>
        <div className="overflow-hidden w-full text-center">
          <h1
            ref={line2Ref}
            className="font-bold font-clash-display tracking-[-0.02em] leading-none"
            style={{
              fontSize: "clamp(3.5rem, 15vw, 13rem)",
              background: "linear-gradient(135deg, #C5A880 0%, #EADBC8 50%, #C5A880 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            KHAN
          </h1>
        </div>
      </div>

      {/* Bottom progress */}
      <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-3 px-8 md:px-14 pb-8 md:pb-12 z-10">
        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-0.5">
            <span className="text-[9px] font-mono tracking-[0.3em] text-white/25 uppercase">
              System Initializing
            </span>
          </div>
          <span
            ref={numberRef}
            className="font-bold font-clash-display text-white leading-none"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            {progress}
            <span className="text-white/30" style={{ fontSize: "0.55em" }}>%</span>
          </span>
        </div>

        {/* Gold progress line */}
        <div className="w-full h-[1px] bg-white/[0.07] relative overflow-hidden">
          <div
            ref={progressBarRef}
            className="absolute top-0 left-0 h-full w-full origin-left"
            style={{
              background: "linear-gradient(90deg, #C5A880, #EADBC8, #C5A880)",
              boxShadow: "0 0 10px rgba(197,168,128,0.7)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
