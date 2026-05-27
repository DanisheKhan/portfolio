import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

/**
 * Preloader Component
 * Handles fullscreen entrance loader, progress ticks, character animations, and sliding exit wipe.
 */
export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const progressBarRef = useRef(null);
  const numberRef = useRef(null);

  useEffect(() => {
    // Prevent scrolling during preloading
    document.body.style.overflow = "hidden";

    const textLetters = textRef.current?.querySelectorAll(".letter") || [];
    
    const ctx = gsap.context(() => {
      // 1. Initial setups
      gsap.set(textLetters, { y: 100, opacity: 0 });

      const tl = gsap.timeline({
        onComplete: () => {
          // Curtain wipe exit
          gsap.to(containerRef.current, {
            yPercent: -100,
            duration: 1.0,
            ease: "power4.inOut",
            onComplete: () => {
              document.body.style.overflow = ""; // Re-enable scrolling
              if (onComplete) onComplete();
            }
          });
        }
      });

      // 2. Animate progress number ticks (0 to 100)
      const countObj = { value: 0 };
      tl.to(countObj, {
        value: 100,
        duration: 1.8,
        ease: "power2.out",
        onUpdate: () => {
          setProgress(Math.floor(countObj.value));
        }
      }, 0);

      // 3. Scale progress bar track
      tl.to(progressBarRef.current, {
        scaleX: 1,
        duration: 1.8,
        ease: "power2.out"
      }, 0);

      // 4. Stagger reveal letter by letter
      tl.to(textLetters, {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 0.8,
        ease: "power3.out"
      }, 0.2);

      // 5. Ambient text fade-out before screen wipe
      tl.to([textRef.current, numberRef.current, progressBarRef.current?.parentNode], {
        opacity: 0,
        y: -30,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.in"
      }, "+=0.2");
    });

    return () => {
      ctx.revert();
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  const nameLetters = "DANISH KHAN".split("");

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 bg-[#0A0A0A] z-[999999] flex flex-col justify-between p-8 md:p-16 select-none"
    >
      {/* Top Header Placeholder */}
      <div className="flex justify-between items-center text-xs font-mono font-medium text-text-secondary tracking-widest uppercase">
        <span>Portfolio 2026</span>
        <span>Creative Developer</span>
      </div>

      {/* Middle Massive Typography */}
      <div className="flex flex-col items-center justify-center">
        <h1
          ref={textRef}
          className="text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] font-bold font-clash-display flex overflow-hidden clip-text-container select-none tracking-tight text-white"
        >
          {nameLetters.map((char, index) => (
            <span
              key={index}
              className={`letter inline-block ${char === " " ? "w-[1.5rem] md:w-[3rem]" : ""}`}
            >
              {char}
            </span>
          ))}
        </h1>
      </div>

      {/* Bottom Progress Tracker */}
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-end">
          <span className="text-xs font-mono text-text-secondary font-medium uppercase tracking-widest">
            System Initializing
          </span>
          <span
            ref={numberRef}
            className="text-4xl md:text-6xl font-bold font-clash-display font-medium text-white"
          >
            {progress}%
          </span>
        </div>
        
        {/* Loading Progress Bar Container */}
        <div className="w-full h-[2px] bg-border-color origin-left relative">
          <div
            ref={progressBarRef}
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary-accent to-secondary-accent scale-x-0 origin-left"
          />
        </div>
      </div>
    </div>
  );
}
