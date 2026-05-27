import React, { useState, useEffect, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Points, PointMaterial } from "@react-three/drei";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import MagneticButton from "../ui/MagneticButton";

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
  const [currentRole, setCurrentRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);

  const roles = [
    "Full Stack MERN Developer",
    "UI/UX Designer",
    "Creative Frontend Coder",
    "Problem Solver"
  ];

  // 1. Typewriter cycling role effect
  useEffect(() => {
    let currentText = "";
    let isDeleting = false;
    let charIndex = 0;
    let typingSpeed = 100;

    const type = () => {
      const fullRole = roles[roleIndex];

      if (isDeleting) {
        currentText = fullRole.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50; // Deleting speed
      } else {
        currentText = fullRole.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100; // Normal typing speed
      }

      setCurrentRole(currentText);

      // Handle transitions
      if (!isDeleting && charIndex === fullRole.length) {
        typingSpeed = 2000; // Pause at end of word
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        setRoleIndex((prev) => (prev + 1) % roles.length);
        typingSpeed = 500; // Pause before starting next word
      }

      setTimeout(type, typingSpeed);
    };

    const timer = setTimeout(type, 1000);
    return () => clearTimeout(timer);
  }, [roleIndex]);

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
      {/* 3D Orbit Canvas Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <ambientLight intensity={0.5} />
          <StarField />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
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

        {/* Typewriter role cycling description */}
        <div className="hero-reveal-element h-12 flex items-center justify-center">
          <h2 className="text-xl md:text-3xl font-bold font-clash-display font-medium text-secondary-accent tracking-wide">
            {currentRole}
            <span className="animate-pulse duration-700 ml-1 font-extralight text-white">|</span>
          </h2>
        </div>

        {/* Bio Copy */}
        <p className="hero-reveal-element text-sm md:text-lg max-w-xl text-text-secondary leading-relaxed font-light">
          Specializing in crafting interactive modern UIs and high-performance, scalable web environments.
        </p>

        {/* Call to Actions */}
        <div className="hero-reveal-element flex flex-wrap gap-6 mt-4 items-center justify-center">
          {/* View My Work */}
          <MagneticButton range={15}>
            <Link
              to="/projects"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-primary-accent via-secondary-accent to-primary-accent text-sm font-medium text-white shadow-[0_4px_30px_rgba(108,99,255,0.25)] hover:shadow-[0_4px_40px_rgba(0,212,255,0.45)] transition-all duration-300 flex items-center gap-2 group cursor-pointer"
            >
              View My Work
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </Link>
          </MagneticButton>

          {/* Download CV */}
          <MagneticButton range={15}>
            <a
              href="#"
              className="px-8 py-3.5 rounded-full border border-border-color bg-card-bg/25 text-sm font-medium text-text-primary hover:border-primary-accent hover:text-white transition-colors duration-300 cursor-pointer"
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
