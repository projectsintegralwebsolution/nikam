import React from "react";
import Image from "next/image";
import { CLIENT_LOGOS } from "@/data/products";

export default function ClientCarousel() {
  return (
    <section className="py-16 bg-[#f8f9fa] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-xs uppercase font-extrabold tracking-widest text-[#ff7522] mb-2">
            Trusted Across Industries
          </p>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#121315] font-heading">
            More than 100 partners trust Nikam Scientific
          </h3>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-2.5 sm:gap-4 items-center justify-items-center">
          {CLIENT_LOGOS.map((client, idx) => (
            <div
              key={idx}
              className="w-full max-w-[130px] h-16 sm:h-20 bg-white rounded-xl border border-gray-100 p-2 sm:p-3 shadow-xs hover:shadow-md hover:border-orange-200 transition-all flex items-center justify-center grayscale hover:grayscale-0"
            >
              <div className="relative w-full h-full">
                <Image
                  src={client.image}
                  alt={client.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
