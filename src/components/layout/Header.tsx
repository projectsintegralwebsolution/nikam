"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { MAIN_NAV } from "@/data/navigation";
import { useQuoteModal } from "@/components/forms/QuoteModalContext";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const pathname = usePathname();
  const { openQuoteModal } = useQuoteModal();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`w-full transition-all duration-300 z-40 ${
          isScrolled
            ? "sticky top-0 bg-white/95 backdrop-blur-md shadow-[0_4px_20px_-2px_rgba(0,0,0,0.06)] border-b border-slate-100 py-1.5"
            : "relative bg-white py-2 border-b border-gray-100/80"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0 group py-0.5">
              <Image
                src="/demo-2/images/logo/ns-logo.png"
                alt="Nikam Scientific Co. - Laboratory Glassware Manufacturer"
                width={300}
                height={128}
                className="w-[165px] sm:w-[200px] md:w-[235px] lg:w-[260px] xl:w-[285px] h-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5">
              {MAIN_NAV.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href) ||
                      (item.children &&
                        item.children.some((c) => pathname === c.href));

                if (item.children) {
                  return (
                    <div
                      key={item.title}
                      className="relative group py-2"
                      onMouseEnter={() => setActiveDropdown(item.title)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button
                        className={`flex items-center gap-1 px-2 xl:px-2.5 py-1.5 font-heading text-[13px] xl:text-[14.5px] font-bold uppercase tracking-[0.5px] transition-colors cursor-pointer ${
                          isActive
                            ? "text-[#ff7522]"
                            : "text-slate-800 hover:text-[#ff7522]"
                        }`}
                      >
                        <span>{item.title}</span>
                        <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 text-gray-500 group-hover:text-[#ff7522]" />
                      </button>

                      {/* Dropdown Menu with Seamless Hover Bridge (pt-2) */}
                      <div className="absolute top-full left-0 pt-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0 z-50">
                        <div className="bg-white/98 backdrop-blur-md rounded-xl shadow-[0_16px_36px_rgba(0,0,0,0.12)] border border-slate-100/90 py-2 overflow-hidden ring-1 ring-black/5">
                          {item.children.map((child) => {
                            const isChildActive = pathname === child.href;
                            return (
                              <Link
                                key={child.href}
                                href={child.href}
                                className={`flex items-center justify-between px-5 py-2.5 text-[14px] xl:text-[14.5px] font-semibold transition-all duration-200 border-b border-gray-50 last:border-0 group/item ${
                                  isChildActive
                                    ? "text-[#ff7522] bg-orange-50/50 pl-6"
                                    : "text-[#222222] hover:text-[#ff7522] hover:bg-orange-50/40 hover:pl-6"
                                }`}
                              >
                                <span>{child.title}</span>
                                <span className="text-[#ff7522] opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all font-bold text-sm">
                                  &rsaquo;
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-2 xl:px-2.5 py-1.5 font-heading text-[13px] xl:text-[14.5px] font-bold uppercase tracking-[0.5px] transition-colors whitespace-nowrap ${
                      isActive
                        ? "text-[#ff7522]"
                        : "text-slate-800 hover:text-[#ff7522]"
                    }`}
                  >
                    {item.title}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Button & Mobile Toggle */}
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              <button
                onClick={() => openQuoteModal()}
                className="hidden lg:inline-flex items-center gap-2 px-4 xl:px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#ff7522] to-[#e65e0d] hover:from-[#ff853d] hover:to-[#ff7522] text-white text-xs xl:text-sm font-bold shadow-lg shadow-orange-950/15 transition-all hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap"
              >
                <Sparkles className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
                <span>Get Quotation</span>
              </button>

              {/* Mobile menu button with 44px min touch target */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 hover:text-[#ff7522] transition-colors flex items-center justify-center min-w-[44px] min-h-[44px] cursor-pointer"
                aria-label="Toggle navigation"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
