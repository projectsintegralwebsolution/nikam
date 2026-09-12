"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
  ArrowRight,
  Send,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { FOOTER_PRODUCTS, FOOTER_USEFUL_LINKS } from "@/data/navigation";
import { useQuoteModal } from "@/components/forms/QuoteModalContext";

export default function Footer() {
  return (
    <footer
      className="text-white border-t-4 border-[#ff7522] pt-14 pb-8"
      style={{
        background: "radial-gradient(at center center, #012274 26%, #000E30 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Column 1: Logo & Social Media Badges */}
          <div className="space-y-5 sm:space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/demo-2/images/logo/ns-logo.png"
                alt="Nikam Scientific"
                width={280}
                height={120}
                className="w-[190px] sm:w-[230px] lg:w-[280px] h-auto object-contain"
              />
            </Link>
            <div className="flex items-center gap-2.5 sm:gap-3 pt-1">
              <a
                href={COMPANY_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center text-[#FF7522] hover:bg-[#FF7522] hover:text-white transition-all shadow-md"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5 fill-[#FF7522] hover:fill-white transition-colors" />
              </a>
              <a
                href={COMPANY_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center text-[#FF7522] hover:bg-[#FF7522] hover:text-white transition-all shadow-md"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 fill-[#FF7522] hover:fill-white transition-colors" />
              </a>
              <a
                href={COMPANY_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center text-[#FF7522] hover:bg-[#FF7522] hover:text-white transition-all shadow-md"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF7522] hover:text-white transition-colors" />
              </a>
              <a
                href={COMPANY_INFO.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center text-[#FF7522] hover:bg-[#FF7522] hover:text-white transition-all shadow-md"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4 sm:w-5 sm:h-5 fill-[#FF7522] hover:fill-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Column 2: Useful Links */}
          <div>
            <h3 className="text-[#FF7522] text-[19px] sm:text-[21px] lg:text-[22px] font-bold font-heading uppercase leading-[28px] sm:leading-[30px] mb-4 sm:mb-5 tracking-wide">
              Useful Links
            </h3>
            <ul className="space-y-2.5 sm:space-y-3 text-[14.5px] sm:text-[16px] font-medium">
              <li>
                <Link href="/" className="text-white hover:text-[#68A8E4] transition-colors block py-0.5">
                  HOME
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-white hover:text-[#68A8E4] transition-colors block py-0.5">
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link href="/our-clients" className="text-white hover:text-[#68A8E4] transition-colors block py-0.5">
                  OUR CLIENTS
                </Link>
              </li>
              <li>
                <Link href="/our-work" className="text-white hover:text-[#68A8E4] transition-colors block py-0.5">
                  OUR WORK
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-white hover:text-[#68A8E4] transition-colors block py-0.5">
                  BLOGS
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-white hover:text-[#68A8E4] transition-colors block py-0.5">
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Products & Contact Us */}
          <div>
            <h3 className="text-[#FF7522] text-[19px] sm:text-[21px] lg:text-[22px] font-bold font-heading uppercase leading-[28px] sm:leading-[30px] mb-3 sm:mb-4 tracking-wide">
              Our Products
            </h3>
            <ul className="space-y-2 sm:space-y-2.5 text-[14.5px] sm:text-[16px] font-medium">
              <li>
                <Link href="/laboratory-glassware" className="text-white hover:text-[#68A8E4] transition-colors block py-0.5">
                  Laboratory Glassware
                </Link>
              </li>
              <li>
                <Link href="/laboratory-equipments" className="text-white hover:text-[#68A8E4] transition-colors block py-0.5">
                  Laboratory Equipments
                </Link>
              </li>
              <li>
                <Link href="/industrial-processing-unit" className="text-white hover:text-[#68A8E4] transition-colors block py-0.5">
                  Industrial Processing Unit
                </Link>
              </li>
            </ul>

            <h3 className="text-[#FF7522] text-[19px] sm:text-[21px] lg:text-[22px] font-bold font-heading uppercase leading-[28px] sm:leading-[30px] mt-6 sm:mt-7 mb-2.5 sm:mb-3 tracking-wide">
              Contact Us
            </h3>
            <div className="space-y-2 text-[14.5px] sm:text-[16px] font-medium">
              <a
                href="tel:+919422685973"
                className="text-white hover:text-[#FF7522] transition-colors block py-0.5"
              >
                Call Us: +91 9422685973
              </a>
              <a
                href="mailto:info@nikamscientific.com"
                className="text-white hover:text-[#FF7522] transition-colors block py-0.5 break-words"
              >
                Mail: info@nikamscientific.com
              </a>
            </div>
          </div>

          {/* Column 4: Company Address */}
          <div>
            <h3 className="text-[#FF7522] text-[19px] sm:text-[21px] lg:text-[22px] font-bold font-heading uppercase leading-[28px] sm:leading-[30px] mb-4 sm:mb-5 tracking-wide">
              Company Address
            </h3>
            <p className="text-white text-[14px] sm:text-[16px] leading-[24px] sm:leading-[28px] font-normal">
              Unit No - 18, 19 & 20, Jay Ambe Nagar, Shivaji Nagar, Dist. Palghar, Salvad - 401 504, Boisar (W), Maharashtra, India
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mt-10 sm:mt-12 mb-6" />

        {/* Bottom Copyright Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left text-xs sm:text-[14px] md:text-[15px] text-white">
          <div>
            Copyright © 2026 Nikam Scientific All Rights Reserved
          </div>
          <div>
            Developed By{" "}
            <a
              href="https://integralwebsolution.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#FF7522] underline font-medium transition-colors"
            >
              Integral Web Solution
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
