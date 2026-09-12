import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Compass, Sliders, ArrowRight } from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      icon: ShieldCheck,
      title: "ISO-Certified Manufacturing",
      desc: "Our quality-focused manufacturing processes help maintain consistency, accuracy and dependable product performance.",
    },
    {
      icon: Compass,
      title: "Precision Engineering",
      desc: "Every laboratory glassware product is carefully designed and manufactured to support accurate measurement and reliable laboratory work.",
    },
    {
      icon: Sliders,
      title: "Custom Lab Glassware",
      desc: "We develop custom laboratory glassware based on specific sizes, designs and application requirements.",
    },
  ];

  return (
    <section className="py-10 sm:py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">
          {/* Left Column: Image matching live site */}
          <div className="lg:col-span-6">
            <div className="relative w-full aspect-[4/3] sm:aspect-[1.2/1] rounded-[16px] sm:rounded-[20px] overflow-hidden shadow-[0_0_10px_rgba(0,0,0,0.25)] sm:shadow-[0_0_10px_rgba(0,0,0,0.35)]">
              <Image
                src="/demo-2/images/about/about.png"
                alt="Precision Laboratory Glassware Manufacturer in India"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            <div>
              <p className="text-xs uppercase font-extrabold tracking-widest text-[#ff7522] mb-1.5 sm:mb-2">
                WHO WE ARE
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-[#001463] font-heading leading-snug">
                Precision Laboratory Glassware Manufacturer in India
              </h2>
            </div>

            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
              <p>
                Established in 1996, <strong className="text-gray-900 font-bold">Nikam Scientific</strong> is a trusted <strong className="text-gray-900 font-bold">laboratory glassware manufacturer in India</strong>, supplying precision laboratory glassware and scientific equipment for research laboratories, pharmaceutical companies, educational institutions and industrial facilities.
              </p>
              <p>
                From our specialized glassblowing manufacturing facility in Boisar, Maharashtra, we engineer low-expansion <strong className="text-gray-900 font-bold">Borosilicate 3.3 laboratory glassware</strong>, Class A volumetric apparatus, and custom turnkey industrial process units with reliable nationwide supply across India.
              </p>
            </div>

            {/* 3 Inline Feature Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 pt-1 sm:pt-2">
              {features.map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <div key={idx} className="space-y-1.5 sm:space-y-2">
                    <div className="flex items-center gap-2 text-[#ff7522]">
                      <Icon className="w-5 h-5 flex-shrink-0" />
                      <h4 className="text-sm font-bold text-gray-900 leading-tight">
                        {feat.title}
                      </h4>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="pt-2">
              <Link
                href="/about-us"
                className="btn-primary inline-flex items-center justify-center gap-2 py-3 px-7 text-xs uppercase font-bold tracking-wider w-full sm:w-auto"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
