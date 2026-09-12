"use client";

import React, { useEffect } from "react";
import { X, Sparkles } from "lucide-react";
import { useQuoteModal } from "./QuoteModalContext";
import ContactForm from "./ContactForm";

export default function QuoteModal() {
  const { isOpen, productCategory, closeQuoteModal } = useQuoteModal();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeQuoteModal();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeQuoteModal]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={closeQuoteModal}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden z-10 animate-scaleUp max-h-[92dvh] sm:max-h-[90vh] flex flex-col border border-white/20 ring-1 ring-black/10">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#121315] to-[#1e2023] text-white p-5 sm:p-6 border-b-4 border-[#ff7522] flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-[#ff7522] text-xs font-bold uppercase tracking-wider mb-0.5 sm:mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Nikam Scientific Fast Quote</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white font-heading">
              Request a Custom Quote
            </h3>
          </div>
          <button
            onClick={closeQuoteModal}
            className="w-9 h-9 sm:w-8 sm:h-8 rounded-full bg-white/10 hover:bg-[#ff7522] flex items-center justify-center text-white transition-colors cursor-pointer min-w-[36px] min-h-[36px]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto">
          <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-5">
            Fill out the form below with your required specifications, capacities, or custom dimensions. Our technical team will respond with a tailored quotation within 3 hours.
          </p>
          <ContactForm
            initialCategory={productCategory}
            onSuccess={closeQuoteModal}
            compact={true}
          />
        </div>
      </div>
    </div>
  );
}
