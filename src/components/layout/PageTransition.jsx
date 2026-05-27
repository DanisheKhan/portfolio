import React from "react";
import { motion } from "framer-motion";

/**
 * PageTransition Component
 * Introduces standard 3-state curtain slide layouts between page routing transitions.
 */
export default function PageTransition({ children }) {
  const overlayVariants = {
    initial: {
      scaleY: 1
    },
    animate: {
      scaleY: 0,
      transition: {
        duration: 0.65,
        ease: [0.76, 0, 0.24, 1], // easeInOutExpo
        delay: 0.1
      }
    },
    exit: {
      scaleY: 1,
      transition: {
        duration: 0.55,
        ease: [0.76, 0, 0.24, 1]
      }
    }
  };

  return (
    <div className="relative w-full">
      {/* Transition slide panel */}
      <motion.div
        variants={overlayVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        style={{ originY: 1 }} // Slide curtain wipes from bottom upwards
        className="fixed inset-0 bg-[#0A0A0A] z-[99999] pointer-events-none w-full h-full"
      />
      
      {/* Visual content opacity reveal fade */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
        className="w-full"
      >
        {children}
      </motion.div>
    </div>
  );
}
