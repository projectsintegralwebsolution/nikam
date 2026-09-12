import React from "react";
import Link from "next/link";
import { CheckCircle2, Award, Cpu, Globe2, ArrowRight } from "lucide-react";

export default function StandardsSection() {
  const standards = [
    {
      icon: Award,
      title: "Quality Control",
      desc: "Every product undergoes careful quality inspection for accuracy, durability and dependable performance.",
    },
    {
      icon: Cpu,
      title: "Advanced Manufacturing",
      desc: "Modern technology and skilled workmanship help us maintain precision at every manufacturing stage.",
    },
    {
      icon: Globe2,
      title: "International Standards",
      desc: "Our laboratory glassware is manufactured in line with applicable national and international quality standards.",
    },
  ];

  return (
    <section
      className="relative py-14 sm:py-20 lg:py-28 text-white overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: 'url("/demo-2/images/products/ChatGPT-Image-Sep-8-2026-04_19_37-PM.png")',
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      {/* 52% dark overlay matching live site Elementor section */}
      <div className="absolute inset-0 bg-black/55" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <p className="text-xs uppercase font-extrabold tracking-widest text-[#ff7522] mb-1.5 sm:mb-2">
            MANUFACTURING EXCELLENCE
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-heading tracking-tight">
            Manufactured with Precision. Trusted for Performance.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8">
          {standards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/15 hover:border-[#ff7522] hover:bg-black/60 transition-all duration-300 group"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 border border-white/20 text-[#ff7522] flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-[#ff7522] group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white font-heading mb-2 sm:mb-3 group-hover:text-[#ff7522] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10 sm:mt-12">
          <Link
            href="/about-us"
            className="btn-primary inline-flex items-center justify-center gap-2 py-3 px-8 text-xs uppercase font-bold tracking-wider w-full sm:w-auto"
          >
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
