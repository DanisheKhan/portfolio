import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger immediately
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Reusable Framer Motion Variants
 */
export const FADE_UP = {
  initial: { y: 40, opacity: 0 },
  animate: (custom = 0) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.215, 0.61, 0.355, 1], // power3.out equivalent
      delay: custom
    }
  })
};

export const STAGGER_CONTAINER = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

export const PAGE_TRANSITION_CURTAIN = {
  initial: {
    y: "100%"
  },
  animate: {
    y: "-100%",
    transition: {
      duration: 1.2,
      ease: [0.76, 0, 0.24, 1]
    }
  },
  exit: {
    y: "0%",
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1]
    }
  }
};

/**
 * GSAP Animation Helpers with returns/cleanups
 */

// Text reveal with GSAP ScrollTrigger
export const initScrollReveal = (element, options = {}) => {
  if (!element) return null;
  
  const {
    y = 50,
    opacity = 0,
    duration = 0.8,
    ease = "power3.out",
    stagger = 0.1,
    start = "top 85%",
    toggleActions = "play none none none"
  } = options;

  const ctx = gsap.context(() => {
    gsap.from(element, {
      y,
      opacity,
      duration,
      ease,
      stagger,
      scrollTrigger: {
        trigger: element,
        start,
        toggleActions
      }
    });
  });

  return () => ctx.revert(); // Returns cleanup
};

// Continuous text marquee speeds up on hover
export const initMarqueeAnimation = (container, speed = 50, direction = 1) => {
  if (!container) return null;
  
  const ctx = gsap.context(() => {
    const items = container.children;
    const totalWidth = Array.from(items).reduce((acc, el) => acc + el.offsetWidth, 0) / 2; // Assuming duplicate items exist

    gsap.set(container, { x: 0 });

    const timeline = gsap.to(container, {
      x: direction > 0 ? -totalWidth : totalWidth,
      ease: "none",
      duration: speed,
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(x => {
          const val = parseFloat(x);
          return direction > 0 
            ? (val % totalWidth).toString() 
            : ((val + totalWidth) % totalWidth - totalWidth).toString();
        })
      }
    });

    // Speed controls
    container.addEventListener("mouseenter", () => {
      gsap.to(timeline, { timeScale: 2.5, duration: 0.5 });
    });

    container.addEventListener("mouseleave", () => {
      gsap.to(timeline, { timeScale: 1.0, duration: 0.5 });
    });
  });

  return () => ctx.revert();
};

// Infinite Floating Element Animation (ambient)
export const initAmbientFloat = (element, delay = 0) => {
  if (!element) return null;
  
  const ctx = gsap.context(() => {
    gsap.to(element, {
      y: -15,
      rotation: 3,
      duration: 3 + Math.random() * 2,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      delay: delay
    });
  });
  
  return () => ctx.revert();
};
