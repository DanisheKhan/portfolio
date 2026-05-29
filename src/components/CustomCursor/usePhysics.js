import { useEffect, useRef } from "react";

/**
 * usePhysics Hook
 * Manages a high-performance mathematical loop using requestAnimationFrame
 * and mutable refs to eliminate React re-render cycles.
 * 
 * Equations:
 * X_current = X_current + (X_target - X_current) * alpha
 * Y_current = Y_current + (Y_target - Y_current) * alpha
 * where alpha = 0.15 is the smoothing interpolation factor.
 */
export default function usePhysics() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  // Position coordinates
  const mouse = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const lastRingPos = useRef({ x: 0, y: 0 });

  // Physics & Animation states
  const lastAngle = useRef(0);
  const initialized = useRef(false);

  // Smooth LERP Factors
  const hoverFactor = useRef(0);       // LERPs between 0 (normal) and 1 (hovered)
  const scaleFactor = useRef(1);       // LERPs towards targetScale
  const opacityFactor = useRef(0);     // LERPs towards targetOpacity

  // Target states
  const targetHover = useRef(0);
  const targetScale = useRef(1);
  const targetOpacity = useRef(0);

  const alpha = 0.15;        // Positional fluid trailing LERP factor
  const factorAlpha = 0.28;  // Snappy, professional factor LERP (hover state transitions)

  // Exported methods to update hover states dynamically from other components
  const setHoverState = (isHovered, customScale = 1.8) => {
    targetHover.current = isHovered ? 1 : 0;
    targetScale.current = isHovered ? customScale : 1.0;
  };

  useEffect(() => {
    let rAFId;

    const updateLoop = () => {
      const dot = dotRef.current;
      const ring = ringRef.current;

      if (!dot || !ring) {
        rAFId = requestAnimationFrame(updateLoop);
        return;
      }

      if (!initialized.current) {
        rAFId = requestAnimationFrame(updateLoop);
        return;
      }

      // 1. Position Linear Interpolation (LERP) trailing
      ringPos.current.x += (mouse.current.x - ringPos.current.x) * alpha;
      ringPos.current.y += (mouse.current.y - ringPos.current.y) * alpha;

      // 2. Real-time acceleration vectors (dx, dy) and velocity calculation
      const dx = ringPos.current.x - lastRingPos.current.x;
      const dy = ringPos.current.y - lastRingPos.current.y;
      const velocity = Math.sqrt(dx * dx + dy * dy);

      // Track direction vector angle with stationary threshold filtering
      if (velocity > 0.5) {
        lastAngle.current = Math.atan2(dy, dx);
      }
      const angle = lastAngle.current;

      // 3. Snappy LERP factors for professional, instant-response hover/fade transitions
      hoverFactor.current += (targetHover.current - hoverFactor.current) * factorAlpha;
      scaleFactor.current += (targetScale.current - scaleFactor.current) * factorAlpha;
      opacityFactor.current += (targetOpacity.current - opacityFactor.current) * factorAlpha;

      // 4. Dynamic Squash & Stretch matrix calculations
      // Clamped stretch to 0.5 above 1.0 to prevent visual distortion
      const stretchFactor = Math.min(velocity * 0.005, 0.5);
      const stretch = 1 + stretchFactor;
      const squash = Math.max(1 - stretchFactor * 0.8, 0.5);

      // Interpolate the squash/stretch back to normal (1.0) on hover
      const currentStretch = 1 + (stretch - 1) * (1 - hoverFactor.current);
      const currentSquash = 1 + (squash - 1) * (1 - hoverFactor.current);

      // Dynamic scales combined with hover factors
      const scaleX = scaleFactor.current * currentStretch;
      const scaleY = scaleFactor.current * currentSquash;

      // 5. Compute the non-uniform 2D CSS transform matrix
      // Matrix: [a, b, c, d, tx, ty]
      // a = cos(theta) * sx
      // b = sin(theta) * sx
      // c = -sin(theta) * sy
      // d = cos(theta) * sy
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);

      const a = cos * scaleX;
      const b = sin * scaleX;
      const c = -sin * scaleY;
      const d = cos * scaleY;

      // Direct hardware-accelerated translations bypassing repaint loops
      dot.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0)`;
      dot.style.opacity = (1 - hoverFactor.current) * opacityFactor.current;

      ring.style.transform = `matrix(${a}, ${b}, ${c}, ${d}, ${ringPos.current.x}, ${ringPos.current.y})`;
      ring.style.opacity = opacityFactor.current;

      // Store historical positions
      lastRingPos.current.x = ringPos.current.x;
      lastRingPos.current.y = ringPos.current.y;

      rAFId = requestAnimationFrame(updateLoop);
    };

    // Global cursor tracking events
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      if (!initialized.current) {
        ringPos.current.x = e.clientX;
        ringPos.current.y = e.clientY;
        lastRingPos.current.x = e.clientX;
        lastRingPos.current.y = e.clientY;
        initialized.current = true;
        targetOpacity.current = 1;
      }
    };

    // Smooth boundary checking entry/exit fades
    const handleMouseEnter = () => {
      targetOpacity.current = 1;
    };

    const handleMouseLeave = () => {
      targetOpacity.current = 0;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    rAFId = requestAnimationFrame(updateLoop);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(rAFId);
    };
  }, []);

  return {
    dotRef,
    ringRef,
    setHoverState
  };
}
