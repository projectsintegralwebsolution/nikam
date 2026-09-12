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
                className="bg-white rounded-[16px] sm:rounded-[20px] p-5 sm:p-7 lg:p-8 shadow-[0_0_10px_rgba(0,0,0,0.25)] sm:shadow-[0_0_10px_rgba(0,0,0,0.4)] hover:shadow-[0_0_16px_rgba(0,0,0,0.6)] transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-[#ff7522] text-[#ff7522] flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-[#ff7522] group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <h3
                  className="text-base sm:text-lg font-bold text-[#121315] font-heading mb-1.5 sm:mb-2 !text-[#121315]"
                  style={{ color: "#121315" }}
                >
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
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
