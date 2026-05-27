import React, { useRef, useState } from "react";

/**
 * TiltCard Component
 * Wraps any layout with 3D coordinate-tracking tilt on mouse movements.
 */
export default function TiltCard({
  children,
  className = "",
  maxTilt = 10, // Maximum tilt rotation degrees
  perspective = 1000,
  ...props
}) {
  const cardRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const el = cardRef.current;
    if (!el) return;

    const { left, top, width, height } = el.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / (width / 2); // -1 to 1
    const y = (e.clientY - top - height / 2) / (height / 2); // -1 to 1
    
    setRotation({
      x: y * -maxTilt,
      y: x * maxTilt
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform: `perspective(${perspective}px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transition: isHovered ? "none" : "transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)"
      }}
      className={className}
      {...props}
    >
      {children}
    </div>
  );
}
