import React, { useState, useEffect, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Points, PointMaterial } from "@react-three/drei";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import MagneticButton from "../ui/MagneticButton";
import Plasma from "../ui/Plasma";

// Custom R3F Component to render floating stellar particles
function StarField() {
  const pointsRef = useRef();

  // Create random 3D points
  const [positions] = useState(() => {
    const arr = [];
    for (let i = 0; i < 200; i++) {
      arr.push((Math.random() - 0.5) * 10); // X
      arr.push((Math.random() - 0.5) * 10); // Y
      arr.push((Math.random() - 0.5) * 10); // Z
    }
    return new Float32Array(arr);
  });

  // Rotate point fields slowly on every frame
  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.05;
      pointsRef.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <group ref={pointsRef}>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#00D4FF"
          size={0.06}
          sizeAttenuation
          depthWrite={false}
          transparent
          opacity={0.6}
        />
      </points>
    </group>
  );
}

export default function Hero() {
  const nameRef = useRef(null);
  const containerRef = useRef(null);


  // 2. Character-by-character split name entrance reveal via GSAP
  useEffect(() => {
    const nameLetters = nameRef.current?.querySelectorAll(".char") || [];
    
    const ctx = gsap.context(() => {
      gsap.from(nameLetters, {
        y: "110%",
        opacity: 0,
        stagger: 0.06,
        duration: 1.0,
        ease: "power4.out",
        delay: 0.6
      });
      
      // Animate pulsing badge & CTAs in
      gsap.from(".hero-reveal-element", {
        y: 30,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        delay: 1.2
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const titleString = "DANISH KHAN";

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen bg-primary-bg flex flex-col justify-center items-center overflow-hidden pt-20"
    >
      {/* WebGL Fluid Plasma Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Plasma 
          color="#8b5cf6"
          speed={0.15}
          direction="pingpong"
          scale={1.2}
          opacity={0.45}
          mouseInteractive={true}
        />
      </div>

      {/* Decorative Gradient Vignette radial mask overlay */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at center, transparent 40%, var(--primary-bg) 95%)"
        }}
      />

      {/* Content wrapper */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-center justify-center text-center relative z-20 gap-6">
        {/* Availability Badge */}
        <div className="hero-reveal-element inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-border-color/80 text-xs font-mono font-medium text-white select-none">
          <span className="w-2 h-2 rounded-full bg-green-500 pulse-glow-dot inline-block" />
          Available for freelance & full-time work
        </div>

        {/* Dynamic Name (Clip path mask split GSAP entry) */}
        <div className="overflow-hidden py-2 select-none">
          <h1
            ref={nameRef}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-bold font-clash-display tracking-tight text-white flex select-none"
          >
            {titleString.split("").map((char, index) => (
              <span
                key={index}
                className={`char inline-block select-none ${
                  char === " " ? "w-[1.2rem] sm:w-[2.2rem]" : ""
                }`}
              >
                {char}
              </span>
            ))}
          </h1>
        </div>

        {/* Static role description */}
        <div className="hero-reveal-element h-12 flex items-center justify-center">
          <h2 className="text-xl md:text-3xl font-bold font-clash-display font-medium text-secondary-accent tracking-wide uppercase">
            Full Stack Web Developer
          </h2>
        </div>

        {/* Bio Copy */}
        <p className="hero-reveal-element text-sm md:text-lg max-w-xl text-text-secondary leading-relaxed font-light">
          Specializing in crafting interactive modern UIs and high-performance, scalable web environments.
        </p>

        {/* Call to Actions */}
        <div className="hero-reveal-element flex flex-wrap gap-6 mt-6 items-center justify-center">
          {/* View My Work (Primary Obsidian Glass Button) */}
          <MagneticButton range={15}>
            <Link
              to="/projects"
              className="px-8 py-3.5 rounded-full bg-[#0d0d11]/80 backdrop-blur-xl border border-white/[0.08] hover:border-primary-accent/40 text-sm font-medium tracking-wide text-white shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(108,99,255,0.2)] transition-all duration-500 flex items-center gap-2.5 group cursor-pointer relative overflow-hidden"
            >
              {/* Sleek Ambient Inner Glow */}
              <span className="absolute inset-0 bg-gradient-to-r from-primary-accent/5 to-secondary-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <span className="relative z-10">View My Work</span>
              <ArrowUpRight className="w-4 h-4 text-text-secondary group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 relative z-10" />
            </Link>
          </MagneticButton>

          {/* Download CV (Secondary Clean Border Button) */}
          <MagneticButton range={15}>
            <a
              href="#"
              className="px-8 py-3.5 rounded-full border border-white/[0.05] bg-white/[0.01] hover:bg-white/[0.04] hover:border-white/10 text-sm font-medium tracking-wide text-text-secondary hover:text-white transition-all duration-300 cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
            >
              Download CV
            </a>
          </MagneticButton>
        </div>
      </div>

      {/* Dynamic Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-50 select-none animate-bounce duration-[1.5s] cursor-pointer">
        <span className="text-[10px] font-mono tracking-widest text-text-secondary font-medium uppercase">
          SCROLL DOWN
        </span>
        <ArrowDown className="w-4 h-4 text-white" />
      </div>
    </section>
  );
}
