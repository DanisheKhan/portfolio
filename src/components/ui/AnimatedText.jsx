import React from "react";
import { motion } from "framer-motion";

/**
 * AnimatedText Component
 * Splits strings into characters and animates each sequentially with clip-paths.
 */
export default function AnimatedText({
  text,
  className = "",
  type = "chars", // 'words' | 'chars'
  delay = 0,
  stagger = 0.02,
  duration = 0.6,
  once = true
}) {
  // Split the text
  const items = type === "words" ? text.split(" ") : text.split("");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay
      }
    }
  };

  const itemVariants = {
    hidden: {
      y: "100%",
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: duration,
        ease: [0.215, 0.61, 0.355, 1] // OutExpo/Power3
      }
    }
  };

  return (
    <motion.span
      className={`inline-block overflow-hidden clip-text-container ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
    >
      {items.map((item, idx) => (
        <motion.span
          key={idx}
          variants={itemVariants}
          className="inline-block whitespace-pre"
        >
          {item}
          {type === "words" && idx < items.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </motion.span>
  );
}
