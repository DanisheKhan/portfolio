import React from "react";

/**
 * GlassCard Component
 * Implements a premium acrylic backdrop blur and custom subtle borders.
 */
export default function GlassCard({
  children,
  className = "",
  hoverEffect = true,
  ...props
}) {
  const baseClass = "glass-card px-6 py-6 md:px-8 md:py-8 rounded-2xl border border-border-color";
  const hoverClass = hoverEffect ? "glass-card-hover" : "";

  return (
    <div
      className={`${baseClass} ${hoverClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
