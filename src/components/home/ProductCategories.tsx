import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProductCategories() {
  const categories = [
    {
      id: "glassware",
      title: "Laboratory Glassware",
      desc: "Premium borosilicate glassware designed for accurate laboratory experiments and analysis.",
      image: "/demo-2/images/products/home.png",
      link: "/laboratory-glassware",
    },
    {
      id: "equipment",
      title: "Laboratory Equipment",
      desc: "Reliable laboratory equipment for research, testing and modern scientific applications.",
      image: "/demo-2/images/products/LE.png",
      link: "/laboratory-equipments",
    },
    {
      id: "industrial",
      title: "Industrial Process Equipment",
      desc: "Engineered equipment for industrial production, processing and quality-control applications.",
      image: "/demo-2/images/products/equip.png",
      link: "/industrial-processing-unit",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#f8f9fa] border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 3 Main Categories Grid matching Live Site Elementor Section 459b733 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-[18px] shadow-[0_0_10px_rgba(0,0,0,0.25)] sm:shadow-[0_0_10px_rgba(0,0,0,0.35)] hover:shadow-[0_0_16px_rgba(0,0,0,0.5)] p-5 sm:p-6 lg:p-7 flex flex-col justify-between text-center transition-all duration-300 group"
            >
              <div>
                {/* Category Image with Orange Border matching live site */}
                <div className="relative w-full aspect-[4/3] rounded-[18px] sm:rounded-[21px] border-2 border-[#FF7522] overflow-hidden mb-4 sm:mb-5 bg-white p-2">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="space-y-2.5 sm:space-y-3">
                  <h3 className="text-xl sm:text-[23px] lg:text-[25px] font-semibold text-gray-900 font-heading group-hover:text-[#ff7522] transition-colors leading-snug">
                    <Link href={cat.link}>{cat.title}</Link>
                  </h3>
                  <p className="text-sm sm:text-[15px] text-gray-800 font-normal leading-relaxed">
                    {cat.desc}
                  </p>
                </div>
              </div>

              {/* Bottom Action: Authentic #010E3A Navy Blue Button matching Live Site */}
              <div className="pt-5 sm:pt-6 mt-auto">
                <Link
                  href={cat.link}
                  className="inline-flex items-center justify-center gap-2 bg-[#010E3A] hover:bg-white hover:text-black text-white font-bold py-2.5 px-6 sm:px-8 rounded-md border border-[#000A20] shadow-[0_0_10px_rgba(1,4,17,0.45)] transition-all text-xs sm:text-sm uppercase tracking-wide cursor-pointer group/btn w-full sm:w-auto"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
