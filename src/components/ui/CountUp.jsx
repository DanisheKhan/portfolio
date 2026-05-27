import React, { useState, useEffect, useRef } from "react";
import useInView from "../../hooks/useInView";

/**
 * CountUp Component
 * Increments integer values from 0 to target on scrolling into visibility.
 */
export default function CountUp({
  end,
  duration = 2000, // Duration of counter in milliseconds
  suffix = "",
  className = ""
}) {
  const [count, setCount] = useState(0);
  const [ref, isInView] = useInView({ triggerOnce: true });
  const countRef = useRef(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    const endVal = parseInt(end, 10);
    if (isNaN(endVal)) {
      setCount(end); // Return static if not a number
      return;
    }

    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressPercent = Math.min(progress / duration, 1);
      
      // Easing out quadratic
      const easeProgress = progressPercent * (2 - progressPercent);
      const currentVal = Math.floor(easeProgress * endVal);
      
      setCount(currentVal);

      if (progress < duration) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(endVal);
      }
    };

    requestAnimationFrame(animateCount);
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className={className}>
      {count}
      {suffix}
    </span>
  );
}
