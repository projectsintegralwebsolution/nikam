"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Award, Cpu, Globe2, ArrowRight, ShieldCheck } from "lucide-react";

export default function StandardsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Only calculate when section is visible in viewport
            if (rect.top <= windowHeight && rect.bottom >= 0) {
              const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
              // Shift between -45px to +45px
              const shift = (progress - 0.5) * 90;
              setOffsetY(shift);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const standards = [
    {
      icon: Award,
      title: "Quality Control & Assurance",
      desc: "Every piece of glassware undergoes strict dimensional inspection, optical clarity checks, and thermal stress testing before dispatch.",
    },
    {
      icon: Cpu,
      title: "Advanced Manufacturing",
      desc: "Precision automated glass lathe tooling combined with master artisan hand-blowing guarantees micrometer-level accuracy.",
    },
    {
      icon: Globe2,
      title: "International Standards",
      desc: "Manufactured strictly in compliance with ISO, ASTM, DIN, and USP standards for borosilicate 3.3 laboratory apparatus.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-24 lg:py-32 text-white overflow-hidden"
    >
      {/* Parallax Background Layer */}
      <div
        ref={bgRef}
        className="absolute inset-x-0 -top-24 -bottom-24 bg-cover bg-center transition-transform duration-75 ease-out will-change-transform parallax-layer"
        style={{
          backgroundImage:
            'url("/demo-2/images/products/ChatGPT-Image-Sep-8-2026-04_19_37-PM.png")',
          transform: `translate3d(0, ${offsetY}px, 0) scale(1.12)`,
        }}
      />

      {/* Classic Deep Navy Corporate Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#021330]/95 via-[#021330]/85 to-[#000E30]/95 backdrop-brightness-90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#ff7522]/15 via-transparent to-transparent pointer-events-none" />

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          {/* Glowing Badge Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff7522]/20 border border-[#ff7522]/40 text-[#ff7522] text-xs font-black uppercase tracking-widest backdrop-blur-md mb-4 shadow-inner">
            <ShieldCheck className="w-3.5 h-3.5 text-[#ff7522]" />
            <span>MANUFACTURING EXCELLENCE</span>
          </div>

          <h2
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white font-heading tracking-tight leading-tight !text-white drop-shadow-md"
            style={{ color: "#ffffff" }}
          >
            Manufactured with Precision. Trusted for Performance.
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-200 mt-3 max-w-2xl mx-auto leading-relaxed">
            Supplying India&apos;s leading pharmaceutical, chemical, research, and educational laboratories with zero-defect borosilicate 3.3 glassware.
          </p>
        </div>

        {/* 3 Elevated Glassmorphic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {standards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#021330]/80 hover:bg-[#021330]/95 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/15 hover:border-[#ff7522] shadow-[0_12px_32px_rgba(0,0,0,0.35)] hover:shadow-[0_20px_45px_rgba(255,117,34,0.25)] hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#ff7522]/15 border border-[#ff7522]/30 text-[#ff7522] flex items-center justify-center mb-5 group-hover:bg-[#ff7522] group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-md">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2]" />
                  </div>
                  <h3
                    className="text-lg sm:text-xl font-bold font-heading mb-2.5 !text-white group-hover:text-[#ff7522] transition-colors"
                    style={{ color: "#ffffff" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
                {/* Subtle bottom highlight bar */}
                <div className="w-12 h-1 rounded-full bg-white/20 group-hover:bg-[#ff7522] group-hover:w-full transition-all duration-300 mt-6" />
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="text-center mt-12 sm:mt-16">
          <Link
            href="/about-us"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#ff7522] to-[#e65e0d] hover:from-[#ff853d] hover:to-[#ff7522] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-xl shadow-orange-950/20 hover:scale-105 active:scale-95 transition-all cursor-pointer w-full sm:w-auto"
          >
            <span>Explore Manufacturing Tour</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
