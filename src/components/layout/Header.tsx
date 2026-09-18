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
        className={`w-full transition-all duration-300 sticky top-0 z-50 bg-white border-b border-gray-100 ${
          isScrolled
            ? "shadow-[0_4px_20px_-2px_rgba(0,0,0,0.08)] py-1.5 sm:py-2"
            : "py-2 sm:py-3"
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
                className={`w-auto object-contain transition-all duration-300 group-hover:scale-[1.02] ${
                  isScrolled
                    ? "h-[56px] sm:h-[62px] lg:h-[68px] xl:h-[74px]"
                    : "h-[64px] sm:h-[74px] lg:h-[84px] xl:h-[90px]"
                }`}
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
                        className={`flex items-center gap-1 px-2 xl:px-2.5 py-1.5 font-heading text-[13px] xl:text-[14px] font-bold uppercase tracking-[0.5px] transition-colors cursor-pointer ${
                          isActive
                            ? "text-[#ff7522]"
                            : "text-[#021330] hover:text-[#ff7522]"
                        }`}
                      >
                        <span>{item.title}</span>
                        <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 text-gray-500 group-hover:text-[#ff7522]" />
                      </button>

                      {/* Dropdown Menu - 100% Solid Opaque Background & High Contrast */}
                      <div className="absolute top-full left-0 pt-2 w-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0 z-[100]">
                        <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.25)] border-2 border-gray-100 overflow-hidden ring-1 ring-black/10">
                          <div className="py-2">
                            {item.children.map((child) => {
                              const isChildActive = pathname === child.href;
                              return (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className={`flex items-center justify-between px-5 py-2.5 text-[13.5px] xl:text-[14px] font-bold transition-all duration-150 border-b border-gray-100/70 last:border-0 group/item ${
                                    isChildActive
                                      ? "!text-[#ff7522] bg-orange-50/80 pl-6"
                                      : "!text-[#021330] hover:!text-[#ff7522] hover:bg-orange-50/60 hover:pl-6"
                                  }`}
                                  style={{ color: isChildActive ? "#ff7522" : "#021330" }}
                                >
                                  <span className="font-bold">{child.title}</span>
                                  <span className="text-[#ff7522] opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all font-extrabold text-base">
                                    &rsaquo;
                                  </span>
                                </Link>
                              );
                            })}
                          </div>
                          {item.title === "Products" && (
                            <div className="p-2 bg-slate-50 border-t border-gray-100">
                              <Link
                                href="/laboratory-glassware"
                                className="flex items-center justify-between px-3 py-2 text-xs font-extrabold uppercase tracking-wider text-[#ff7522] hover:text-[#e65e0d] hover:bg-orange-50/80 rounded-lg transition-colors"
                              >
                                <span>View Complete Product Catalog</span>
                                <ArrowRight className="w-3.5 h-3.5 ml-1" />
                              </Link>
                            </div>
                          )}
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
                className="hidden lg:inline-flex items-center gap-1.5 px-3.5 xl:px-4 py-2 rounded-xl bg-gradient-to-r from-[#ff7522] to-[#e65e0d] hover:from-[#ff853d] hover:to-[#ff7522] text-white text-xs xl:text-[13px] font-bold shadow-md shadow-orange-950/15 transition-all hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap"
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
