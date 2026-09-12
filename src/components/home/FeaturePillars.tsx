import React from "react";
import Link from "next/link";
import { ShieldCheck, Compass, Sliders, ArrowRight } from "lucide-react";

export default function FeaturePillars() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "ISO-Certified Manufacturing",
      desc: "Our quality-focused manufacturing processes help maintain consistency, accuracy, and dependable product performance across every batch.",
      link: "/about-us",
    },
    {
      icon: Compass,
      title: "Precision Engineering",
      desc: "Every laboratory glassware product is carefully designed and manufactured with calibrated tooling to support accurate scientific measurement.",
      link: "/laboratory-glassware",
    },
    {
      icon: Sliders,
      title: "Custom Lab Glassware",
      desc: "We develop tailored laboratory glassware and process assemblies based on specific sizes, tolerances, drawings, and application requirements.",
      link: "/contact-us",
    },
  ];

  return (
    <section className="relative -mt-10 lg:-mt-14 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pillars.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-xl p-8 shadow-xl border-b-4 border-[#ff7522] hover-lift flex flex-col justify-between group"
            >
              <div>
                <div className="w-14 h-14 rounded-lg bg-orange-50 text-[#ff7522] flex items-center justify-center mb-6 group-hover:bg-[#ff7522] group-hover:text-white transition-all duration-300">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#121315] font-heading mb-3 group-hover:text-[#ff7522] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              <Link
                href={item.link}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#121315] group-hover:text-[#ff7522] uppercase tracking-wider transition-colors"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 text-[#ff7522] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
