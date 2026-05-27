import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TESTIMONIALS_DATA } from "../../lib/data";
import TestimonialCard from "../ui/TestimonialCard";
import ScrollReveal from "../ui/ScrollReveal";

/**
 * Testimonials Section Component
 * Implements a hardware-accelerated draggable review carousel using Framer Motion.
 */
export default function Testimonials() {
  const containerRef = useRef(null);
  const dragTrackRef = useRef(null);
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });

  // Compute boundaries for the drag constraints on mount/resize
  useEffect(() => {
    const updateConstraints = () => {
      const container = containerRef.current;
      const track = dragTrackRef.current;
      if (!container || !track) return;
      
      const widthDiff = container.offsetWidth - track.scrollWidth;
      setDragConstraints({
        left: widthDiff < 0 ? widthDiff : 0,
        right: 0
      });
    };

    updateConstraints();
    window.addEventListener("resize", updateConstraints);
    
    // Quick delay check for asset image loading adjustments
    const timer = setTimeout(updateConstraints, 500);

    return () => {
      window.removeEventListener("resize", updateConstraints);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="relative w-full py-20 md:py-32 bg-secondary-bg overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-12 md:gap-16">
        
        {/* Section Header */}
        <div className="flex flex-col gap-4">
          <ScrollReveal direction="up">
            <span className="text-xs uppercase font-mono tracking-widest text-primary-accent font-medium">
              REVIEWS
            </span>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-clash-display tracking-tight text-white leading-tight">
              Client & Peer <span className="text-gradient">Feedback</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.2} className="w-24 h-[3px] bg-gradient-to-r from-primary-accent to-secondary-accent rounded-full mt-2" />
        </div>

        {/* Draggable Carousel Frame */}
        <div
          ref={containerRef}
          className="relative w-full overflow-visible md:overflow-hidden cursor-grab active:cursor-grabbing py-4"
        >
          {/* Inner Drag Track */}
          <motion.div
            ref={dragTrackRef}
            drag="x"
            dragConstraints={dragConstraints}
            dragElastic={0.1}
            className="flex gap-6 w-max select-none"
          >
            {TESTIMONIALS_DATA.map((item, idx) => (
              <TestimonialCard key={idx} item={item} />
            ))}
          </motion.div>
        </div>

        {/* Grab instructional cue */}
        <ScrollReveal direction="up" className="flex items-center justify-center gap-2 text-xs font-mono text-text-secondary select-none">
          <span>&larr; Drag Left or Right to Scroll &rarr;</span>
        </ScrollReveal>

      </div>
    </section>
  );
}
