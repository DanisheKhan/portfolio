import React from "react";
import { motion } from "framer-motion";

/**
 * ScrollReveal Wrapper Component
 * Triggers entrance animations for nested elements as they enter the viewport
 */
export default function ScrollReveal({
  children,
  className = "",
  direction = "up", // 'up' | 'down' | 'left' | 'right' | 'none'
  delay = 0,
  duration = 0.8,
  distance = 50,
  once = true
}) {
  // Define directional coordinates
  const directions = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 }
  };

  const initialVal = {
    opacity: 0,
    ...directions[direction]
  };

  const variants = {
    hidden: initialVal,
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: duration,
        ease: [0.215, 0.61, 0.355, 1], // power3.out
        delay: delay
      }
    }
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-50px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
