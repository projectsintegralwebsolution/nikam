import React from "react";
import { Pill, FlaskConical, Microscope, GraduationCap, Apple, Leaf } from "lucide-react";
import { INDUSTRIES_SERVED } from "@/data/products";

export default function IndustriesSection() {
  const iconMap: Record<string, any> = {
    Pill,
    FlaskConical,
    Microscope,
    GraduationCap,
    Apple,
    Leaf,
  };

  return (
    <section className="py-14 sm:py-20 lg:py-24" style={{ backgroundColor: "#B7CDFA73" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <p className="text-xs uppercase font-extrabold tracking-widest text-[#ff7522] mb-1.5 sm:mb-2">
            INDUSTRIES WE SERVE
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#001463] font-heading tracking-tight">
            Reliable Scientific Solutions for Diverse Industries
          </h2>
        </div>

        {/* 6 Industry Cards Matching Live Site */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-5 lg:gap-6">
          {INDUSTRIES_SERVED.map((item, idx) => {
            const Icon = iconMap[item.icon] || FlaskConical;
            return (
              <div
                key={idx}
                className="bg-white rounded-[16px] sm:rounded-[20px] p-4 sm:p-5 lg:p-6 shadow-[0_0_10px_rgba(0,0,0,0.08)] sm:shadow-[0_0_10px_rgba(0,0,0,0.12)] hover:shadow-[0_0_15px_rgba(0,0,0,0.2)] transition-all duration-300 flex flex-col items-center justify-center text-center group"
              >
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full border-2 border-[#ff7522] text-[#ff7522] flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-[#ff7522] group-hover:text-white transition-all duration-300">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-xs sm:text-sm lg:text-base font-semibold text-gray-900 leading-tight">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
