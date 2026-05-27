import React from "react";
import { Quote } from "lucide-react";

/**
 * TestimonialCard Component
 * Modern glass slide card presenting peer feedback
 */
export default function TestimonialCard({ item }) {
  return (
    <div className="w-[300px] md:w-[450px] shrink-0 glass-card p-6 md:p-8 rounded-2xl border border-border-color bg-card-bg/20 flex flex-col justify-between select-none">
      <div>
        <Quote className="w-10 h-10 text-primary-accent/40 mb-4" />
        <p className="text-sm md:text-base text-text-secondary leading-relaxed italic font-light select-none">
          "{item.quote}"
        </p>
      </div>

      <div className="flex items-center gap-4 mt-6 border-t border-border-color pt-6">
        <div className="w-12 h-12 rounded-full overflow-hidden border border-border-color shrink-0">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover select-none pointer-events-none"
          />
        </div>
        <div className="flex flex-col select-none">
          <span className="text-sm font-bold text-text-primary font-clash-display">
            {item.name}
          </span>
          <span className="text-[11px] font-mono tracking-wider text-text-secondary">
            {item.role}
          </span>
        </div>
      </div>
    </div>
  );
}
