import { useState, useEffect } from "react";

/**
 * Tracks the scroll progress percentage (0 - 100) of the document
 * Used for top progress indicators and dynamic navigation scaling
 */
export default function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight === 0) return;
      const progressPercent = (window.scrollY / totalHeight) * 100;
      setProgress(progressPercent);
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return progress;
}
