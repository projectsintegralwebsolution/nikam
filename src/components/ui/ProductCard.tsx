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
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-orange-100 transition-all duration-300 flex flex-col justify-between overflow-hidden group">
      <div>
        {/* Product Image */}
        <div className="relative h-48 sm:h-52 md:h-56 w-full bg-gray-50 overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-3.5 sm:p-4 group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3 bg-[#121315]/85 backdrop-blur-xs text-[#ffca3b] text-[10.5px] sm:text-[11px] font-bold px-2.5 py-1 rounded">
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
          className="text-xs font-bold text-[#121315] hover:text-[#ff7522] flex items-center gap-1 transition-colors"
        >
          <span>View Details</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>

        <button
          onClick={() => openQuoteModal(product.name)}
          className="text-xs font-bold bg-orange-50 text-[#ff7522] hover:bg-[#ff7522] hover:text-white px-3 py-1.5 rounded transition-all cursor-pointer"
        >
          Inquire
        </button>
      </div>
    </div>
  );
}
