"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight, Award, FlaskConical, Users, Building2 } from "lucide-react";
import { useQuoteModal } from "@/components/forms/QuoteModalContext";
import { COMPANY_INFO } from "@/data/company";

const SLIDES = [
  {
    id: 1,
    image: "/images/banners/hero-slide-1.png",
    alt: "Nikam Scientific Precision Laboratory Glassware",
    link: "/laboratory-glassware",
  },
  {
    id: 2,
    image: "/images/banners/hero-slide-2.png",
    alt: "Nikam Scientific Laboratory Equipments & Scientific Solutions",
    link: "/contact-us",
  },
  {
    id: 3,
    image: "/images/banners/hero-slide-3.png",
    alt: "Nikam Scientific Custom Glassware Solutions Tailored to Your Needs",
    link: "/our-work",
  },
];

export default function HeroBanner() {
  const { openQuoteModal } = useQuoteModal();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <div className="relative w-full bg-[#121315]">
      {/* Full-width Image Carousel matching the live site */}
      <div
        className="relative w-full overflow-hidden aspect-[16/10] sm:aspect-[16/9] md:aspect-[1829/860] max-h-[750px] min-h-[220px] sm:min-h-[280px] md:min-h-[340px] select-none group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {SLIDES.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide
                ? "opacity-100 z-10"
                : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={idx === 0}
                className="object-cover object-center"
              />
            </div>
          </div>
        ))}

        {/* Carousel Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-black/50 hover:bg-[#ff7522] text-white border border-white/20 flex items-center justify-center transition-all cursor-pointer opacity-80 group-hover:opacity-100 backdrop-blur-xs"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-black/50 hover:bg-[#ff7522] text-white border border-white/20 flex items-center justify-center transition-all cursor-pointer opacity-80 group-hover:opacity-100 backdrop-blur-xs"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </button>

        {/* Floating Quick Action CTA Strip on Slide */}
        <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-10 z-30 hidden sm:flex items-center gap-3">
          <button
            onClick={() => openQuoteModal()}
            className="btn-primary py-2 sm:py-2.5 md:py-3 px-4 sm:px-5 md:px-6 text-xs uppercase tracking-wider font-bold shadow-xl shadow-black/40 cursor-pointer"
          >
            <span>Request a Quote</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>

        {/* Carousel Bullets / Dots */}
        <div className="absolute bottom-2 sm:bottom-4 md:bottom-5 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1.5 sm:gap-2">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentSlide
                  ? "w-6 sm:w-8 bg-[#ff7522]"
                  : "w-2 sm:w-2.5 bg-white/60 hover:bg-white"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* 4-Box Stats Counter Floating Cards Matching Section 6a49276 on Live Site */}
      <div className="bg-gradient-to-b from-slate-50/50 to-white pt-8 sm:pt-10 md:pt-12 pb-6 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">
            {COMPANY_INFO.stats.map((st, idx) => {
              const icons = [Award, FlaskConical, Users, Building2];
              const Icon = icons[idx];
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-4 sm:p-5 lg:p-6 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_32px_-8px_rgba(255,117,34,0.18)] hover:-translate-y-1 transition-all duration-300 flex flex-col sm:flex-row items-center justify-center text-center sm:text-left gap-3 sm:gap-4 group/stat relative overflow-hidden"
                >
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-orange-50 border border-orange-100/80 flex items-center justify-center text-[#ff7522] flex-shrink-0 group-hover/stat:bg-[#ff7522] group-hover/stat:text-white group-hover/stat:scale-105 transition-all duration-300 shadow-xs">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2]" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl lg:text-3xl font-black text-[#121315] group-hover/stat:text-[#ff7522] transition-colors font-heading leading-tight">
                      {st.value}{st.suffix}
                    </div>
                    <div className="text-[10px] sm:text-xs lg:text-[12.5px] font-bold text-slate-700 uppercase font-sans tracking-wide mt-0.5">
                      {st.label}
                    </div>
                  </div>
                  {/* Subtle bottom accent glow on hover */}
                  <div className="absolute bottom-0 inset-x-0 h-0.5 bg-transparent group-hover/stat:bg-gradient-to-r group-hover/stat:from-[#ff7522] group-hover/stat:to-[#ffca3b] transition-all duration-300" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
