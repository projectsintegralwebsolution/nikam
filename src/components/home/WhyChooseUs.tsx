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
      className="py-16 sm:py-20 lg:py-26 overflow-hidden bg-cover bg-center relative"
      style={{
        backgroundColor: "#021330",
        backgroundImage: 'linear-gradient(180deg, rgba(2,19,48,0.92) 0%, rgba(0,14,48,0.96) 100%), url("/demo-2/images/banners/bg2.png")',
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ff7522]/20 border border-[#ff7522]/40 text-[#ff7522] text-[11px] sm:text-xs font-black uppercase tracking-widest backdrop-blur-md mb-3 shadow-inner">
            <span>WHY CHOOSE NIKAM SCIENTIFIC</span>
          </div>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-heading tracking-tight leading-tight !text-white drop-shadow-md"
            style={{ color: "#ffffff" }}
          >
            Why Laboratories Choose Nikam Scientific
          </h2>
        </div>

        {/* 6 Key Pillars Grid matching Screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {WHY_CHOOSE_US.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="why-card bg-white/[0.04] backdrop-blur-sm rounded-2xl p-6 sm:p-7 lg:p-8 border border-white/15 hover:border-[#ff7522]/60 hover:bg-white/[0.08] shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center group cursor-pointer"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.04)",
                  borderColor: "rgba(255, 255, 255, 0.15)",
                }}
              >
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-orange-100/90 border border-orange-200/80 text-[#ff7522] flex items-center justify-center mb-4 group-hover:bg-[#ff7522] group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-sm">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2]" />
                </div>
                <h3
                  className="why-card-title text-base sm:text-lg font-bold text-white group-hover:text-[#ff7522] group-hover:!text-[#ff7522] font-heading mb-2 transition-colors duration-200"
                >
                  {item.title}
                </h3>
                <p
                  className="why-card-desc text-xs sm:text-sm text-white leading-relaxed font-normal"
                  style={{ color: "#ffffff" }}
                >
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
