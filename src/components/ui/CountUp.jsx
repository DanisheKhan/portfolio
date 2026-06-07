import { useState, useEffect } from "react";
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
  const endVal = parseInt(end, 10);
  const [count, setCount] = useState(isNaN(endVal) ? end : 0);
  const [ref, isInView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (!isInView) return;

    const targetVal = parseInt(end, 10);
    if (isNaN(targetVal)) return;

    let startTime = null;

    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressPercent = Math.min(progress / duration, 1);
      
      // Easing out quadratic
      const easeProgress = progressPercent * (2 - progressPercent);
      const currentVal = Math.floor(easeProgress * targetVal);
      
      setCount(currentVal);

      if (progress < duration) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(targetVal);
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
