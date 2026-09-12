"use client";

import React, { useState } from "react";
import Link from "next/link";
import { X, ChevronDown, Phone, Mail, ArrowRight } from "lucide-react";
import { MAIN_NAV } from "@/data/navigation";
import { COMPANY_INFO } from "@/data/company";
import { useQuoteModal } from "@/components/forms/QuoteModalContext";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { openQuoteModal } = useQuoteModal();
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  if (!isOpen) return null;

  const toggleSubmenu = (title: string) => {
    setOpenSubmenu(openSubmenu === title ? null : title);
  };

  const handleQuoteClick = () => {
    onClose();
    openQuoteModal();
  };

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-[310px] sm:max-w-xs bg-white shadow-2xl z-50 flex flex-col justify-between overflow-y-auto transform transition-transform duration-300 ease-in-out">
        <div>
          {/* Header */}
          <div className="p-4 border-b border-gray-100 flex items-center justify-between">
            <span className="text-sm font-bold uppercase tracking-wider text-gray-800 font-heading">
              Menu
            </span>
            <button
              onClick={onClose}
              className="min-w-[44px] min-h-[44px] rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-100 flex items-center justify-center transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="py-3 px-2 space-y-1">
            {MAIN_NAV.map((item) => {
              if (item.children) {
                const isOpen = openSubmenu === item.title;
                return (
                  <div key={item.title} className="border-b border-gray-50">
                    <button
                      onClick={() => toggleSubmenu(item.title)}
                      className="w-full flex items-center justify-between px-4 py-3.5 text-[15.5px] font-bold uppercase tracking-wider text-gray-900 hover:text-[#ff7522] transition-colors"
                    >
                      <span>{item.title}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-[#ff7522]" : "text-gray-400"
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="pl-4 pr-2 pb-2 space-y-1 bg-gray-50/70 rounded-md">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={onClose}
                            className="block px-3 py-2.5 text-[14px] font-semibold text-gray-700 hover:text-[#ff7522] hover:bg-white rounded transition-colors"
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="block px-4 py-3.5 text-[15.5px] font-bold uppercase tracking-wider text-gray-900 hover:text-[#ff7522] hover:bg-gray-50 rounded transition-colors border-b border-gray-50"
                >
                  {item.title}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Bottom Contact info & CTA */}
        <div className="p-4 bg-gray-50 border-t border-gray-100 space-y-3">
          <button
            onClick={handleQuoteClick}
            className="w-full btn-primary text-sm uppercase font-bold py-3.5 flex items-center justify-center gap-2"
          >
            <span>Request a Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <div className="pt-2 text-sm text-gray-700 space-y-2">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex items-center gap-2 text-gray-800 hover:text-[#ff7522]"
            >
              <Phone className="w-4 h-4 text-[#ff7522]" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="flex items-center gap-2 text-gray-800 hover:text-[#ff7522]"
            >
              <Mail className="w-4 h-4 text-[#ff7522]" />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
