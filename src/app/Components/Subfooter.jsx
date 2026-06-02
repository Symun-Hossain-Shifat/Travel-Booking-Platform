"use client";

import { ArrowRight } from "lucide-react";
import backimg from '@/assets/CTA.png'

export default function TravelCTASection() {
  return (
    <section className="relative w-full h-[320px] sm:h-[380px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
                backgroundImage: `url(${backimg.src})`,
              }}
      />

      {/* Dark Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/65" />

      {/* Subtle vignette on sides */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(0,0,0,0.5)_100%)]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        {/* Decorative top line */}
        <div className="flex items-center gap-3 mb-5">
          <div className="h-px w-10 bg-rose-400/70" />
          <span className="text-rose-300 text-xs tracking-[0.25em] uppercase font-medium">
            Explore the world
          </span>
          <div className="h-px w-10 bg-rose-400/70" />
        </div>

        {/* Heading */}
        <h2
          className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight"
          style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
        >
          Ready To Start Your Journey?
        </h2>

        {/* Subtext */}
        <p className="text-white/75 text-sm sm:text-base mb-8 max-w-md leading-relaxed tracking-wide">
          Join thousands of travelers who have discovered the world with us
        </p>

        {/* CTA Button */}
        <button
          className="group relative flex items-center gap-3 bg-white/10 hover:bg-white/20 
                     text-white border border-white/50 hover:border-white 
                     px-7 py-3 text-xs sm:text-sm tracking-[0.18em] uppercase font-semibold
                     transition-all duration-300 cursor-pointer backdrop-blur-sm
                     hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]"
        >
          <span>Book Your Trip Today</span>
          <ArrowRight
            size={15}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />

          {/* Corner accents */}
          <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/80" />
          <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/80" />
          <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/80" />
          <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/80" />
        </button>
      </div>
    </section>
  );
}