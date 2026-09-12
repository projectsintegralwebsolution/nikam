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
            ? "sticky top-0 bg-white shadow-md py-1.5"
            : "relative bg-white py-2 border-b border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0">
              <Image
                src="/demo-2/images/logo/ns-logo.png"
                alt="Nikam Scientific"
                width={200}
                height={85}
                className="w-[130px] sm:w-[155px] md:w-[170px] lg:w-[185px] xl:w-[195px] h-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-0.5 xl:gap-2">
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
                        className={`flex items-center gap-1 px-2 xl:px-3 py-1.5 font-heading text-[13.5px] xl:text-[15.5px] font-semibold uppercase tracking-[0.4px] xl:tracking-[1.1px] transition-colors cursor-pointer ${
                          isActive
                            ? "text-[#ff7522]"
                            : "text-[#121315] hover:text-[#ff7522]"
                        }`}
                      >
                        <span>{item.title}</span>
                        <ChevronDown className="w-3.5 h-3.5 xl:w-4 xl:h-4 transition-transform duration-200 group-hover:rotate-180 text-gray-500 group-hover:text-[#ff7522]" />
                      </button>

                      {/* Dropdown Menu with Seamless Hover Bridge (pt-2) */}
                      <div className="absolute top-full left-0 pt-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0 z-50">
                        <div className="bg-white rounded-[10px] shadow-[0_12px_32px_rgba(0,0,0,0.14)] border border-gray-100 py-2 overflow-hidden">
                          {item.children.map((child) => {
                            const isChildActive = pathname === child.href;
                            return (
                              <Link
                                key={child.href}
                                href={child.href}
                                className={`flex items-center justify-between px-5 py-2.5 text-[14.5px] xl:text-[15px] font-semibold transition-all duration-200 border-b border-gray-50 last:border-0 group/item ${
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
                    className={`px-2 xl:px-3 py-1.5 font-heading text-[13.5px] xl:text-[15.5px] font-semibold uppercase tracking-[0.4px] xl:tracking-[1.1px] transition-colors whitespace-nowrap ${
                      isActive
                        ? "text-[#ff7522]"
                        : "text-[#121315] hover:text-[#ff7522]"
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
                className="hidden lg:inline-flex btn-primary text-xs xl:text-sm uppercase tracking-wider font-bold py-2 xl:py-2.5 px-3.5 xl:px-5 rounded-[6px] shadow-xs hover:shadow-md cursor-pointer transition-all whitespace-nowrap"
              >
                <span>Get A Quote</span>
                <ArrowRight className="w-3.5 h-3.5 xl:w-4 xl:h-4 ml-1.5" />
              </button>

              {/* Mobile menu button with 44px min touch target */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2.5 rounded-lg text-gray-800 hover:text-[#ff7522] hover:bg-gray-100 transition-colors flex items-center justify-center min-w-[44px] min-h-[44px]"
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
