"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ProductItem } from "@/data/products";
import { useQuoteModal } from "@/components/forms/QuoteModalContext";

interface ProductCardProps {
  product: ProductItem;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { openQuoteModal } = useQuoteModal();

  return (
    <div className="bg-white rounded-2xl border border-slate-100/90 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_32px_-6px_rgba(0,0,0,0.12),0_4px_12px_rgba(255,117,34,0.1)] hover:border-orange-200/80 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden group">
      <div>
        {/* Product Image */}
        <div className="relative h-48 sm:h-52 md:h-56 w-full bg-gradient-to-b from-slate-50/80 to-white overflow-hidden border-b border-slate-100/60">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-3.5 sm:p-4 group-hover:scale-108 transition-transform duration-500 ease-out"
          />
          <div className="absolute top-3 left-3 bg-[#121315]/90 backdrop-blur-md text-[#ffca3b] text-[10.5px] sm:text-[11px] font-bold px-3 py-1 rounded-full shadow-xs border border-white/10">
            {product.categoryName}
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6">
          <h3 className="text-base sm:text-lg font-bold text-[#121315] font-heading group-hover:text-[#ff7522] transition-colors mb-2">
            <Link href={`/${product.slug}`}>
              {product.name}
            </Link>
          </h3>
          <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed mb-3 sm:mb-4">
            {product.shortDesc}
          </p>

          {/* Key features bullets */}
          {product.features && product.features.length > 0 && (
            <ul className="space-y-1.5 mb-4 sm:mb-5">
              {product.features.slice(0, 3).map((feat, idx) => (
                <li key={idx} className="flex items-center gap-2 text-xs text-gray-600">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#ff7522] flex-shrink-0" />
                  <span className="truncate">{feat}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Card Action Buttons */}
      <div className="p-4 sm:p-6 pt-0 border-t border-gray-50 flex items-center justify-between gap-2 mt-auto">
        <Link
          href={`/${product.slug}`}
          className="text-xs font-bold text-[#121315] hover:text-[#ff7522] flex items-center gap-1 transition-colors group/link"
        >
          <span>View Details</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
        </Link>

        <button
          onClick={() => openQuoteModal(product.name)}
          className="text-xs font-bold bg-orange-50 border border-orange-200/50 text-[#ff7522] hover:bg-[#ff7522] hover:text-white px-3.5 py-1.5 rounded-lg shadow-2xs hover:shadow-xs transition-all duration-200 cursor-pointer"
        >
          Inquire
        </button>
      </div>
    </div>
  );
}
