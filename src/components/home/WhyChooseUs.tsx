import React from "react";
import {
  Clock,
  ShieldCheck,
  CheckCircle,
  Cpu,
  Truck,
  Headphones,
} from "lucide-react";
import { WHY_CHOOSE_US } from "@/data/products";

export default function WhyChooseUs() {
  const icons = [
    Clock,
    ShieldCheck,
    CheckCircle,
    Cpu,
    Truck,
    Headphones,
  ];

  return (
    <section
      className="py-14 sm:py-20 lg:py-24 overflow-hidden bg-cover bg-center"
      style={{
        backgroundColor: "#123687",
        backgroundImage: 'url("/demo-2/images/banners/bg2.png")',
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <p className="text-xs uppercase font-medium tracking-widest text-white mb-1.5 sm:mb-2">
            WHY CHOOSE NIKAM SCIENTIFIC
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-[30px] font-extrabold text-white font-heading tracking-tight">
            Why Laboratories Choose Nikam Scientific
          </h2>
        </div>

        {/* 6 Key Pillars Grid with White Rounded Cards matching Live Site */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {WHY_CHOOSE_US.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="bg-white/98 backdrop-blur-xs rounded-2xl p-6 sm:p-7 lg:p-8 shadow-[0_8px_24px_-4px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_35px_-6px_rgba(0,0,0,0.25)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center group border border-white/40"
              >
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-orange-50/90 border border-orange-200/80 text-[#ff7522] flex items-center justify-center mb-4 group-hover:bg-[#ff7522] group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-2xs">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2]" />
                </div>
                <h3
                  className="text-base sm:text-lg font-bold text-[#121315] font-heading mb-2 !text-[#121315] group-hover:text-[#ff7522] transition-colors"
                  style={{ color: "#121315" }}
                >
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
