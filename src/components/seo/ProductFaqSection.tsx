"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export interface FAQItem {
  q: string;
  a: string;
}

interface ProductFaqSectionProps {
  title?: string;
  subtitle?: string;
  faqs: FAQItem[];
  productName?: string;
}

export default function ProductFaqSection({
  title,
  subtitle = "FREQUENTLY ASKED QUESTIONS",
  faqs,
  productName,
}: ProductFaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const sectionHeading = title || (productName ? `Frequently Asked Questions About ${productName}` : "Frequently Asked Questions");

  return (
    <section className="mt-16 pt-12 border-t border-gray-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-10">
          <p className="text-xs uppercase font-extrabold tracking-widest text-[#ff7522] mb-2 flex items-center justify-center gap-1.5">
            <HelpCircle className="w-4 h-4 text-[#ff7522]" />
            <span>{subtitle}</span>
          </p>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#001463] font-heading tracking-tight">
            {sectionHeading}
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 mt-2 max-w-2xl mx-auto">
            Technical, calibration, and procurement answers directly from our manufacturing and quality assurance team.
          </p>
        </div>

        <div className="space-y-3.5 sm:space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-white border-orange-200 shadow-sm"
                    : "bg-[#fbfbfb] border-gray-200/80 hover:border-gray-300"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left px-5 sm:px-6 py-4 sm:py-4.5 flex items-center justify-between gap-4 cursor-pointer select-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-[#121315] font-heading leading-snug">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "bg-[#ff7522] text-white rotate-180"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-4 sm:pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100/80">
                    <div
                      dangerouslySetInnerHTML={{ __html: faq.a }}
                      className="prose prose-sm max-w-none text-gray-600 [&_a]:text-[#ff7522] [&_a]:font-semibold [&_a]:underline hover:[&_a]:text-[#001463]"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
