"use client";

import React from "react";
import { Phone, Mail, ArrowRight } from "lucide-react";
import { useQuoteModal } from "@/components/forms/QuoteModalContext";
import { COMPANY_INFO } from "@/data/company";

export default function ProductDetailClient({
  productName,
}: {
  productName: string;
}) {
  const { openQuoteModal } = useQuoteModal();

  return (
    <div className="p-4 sm:p-6 bg-gray-50 border border-gray-200 rounded-xl space-y-3 sm:space-y-4">
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
        <button
          onClick={() => openQuoteModal(productName)}
          className="btn-primary flex-1 py-3 sm:py-3.5 px-4 text-xs uppercase font-bold tracking-wider cursor-pointer text-center"
        >
          <span>Request a Quote for {productName}</span>
          <ArrowRight className="w-4 h-4 ml-1 inline-block" />
        </button>

        <a
          href={`tel:${COMPANY_INFO.phoneRaw}`}
          className="btn-secondary py-3 sm:py-3.5 px-5 sm:px-6 text-xs uppercase font-bold tracking-wider flex items-center justify-center gap-2"
        >
          <Phone className="w-4 h-4 text-[#ff7522]" />
          <span>Call Sales</span>
        </a>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] sm:text-xs text-gray-500 pt-1">
        <span>Direct Phone: <strong className="text-gray-800">{COMPANY_INFO.phone}</strong></span>
        <span>Email: <strong className="text-gray-800">{COMPANY_INFO.email}</strong></span>
      </div>
    </div>
  );
}
