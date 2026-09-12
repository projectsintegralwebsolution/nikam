import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram, Youtube } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function TopBar() {
  return (
    <div
      className="text-[#030303] text-xs sm:text-[14px] md:text-[15px] py-1.5 sm:py-2.5 border-b border-gray-300 relative z-30 bg-cover bg-center"
      style={{
        backgroundColor: "#EAEAEA",
        backgroundImage: 'url("/demo-2/images/products/Untitled-design-1.png")',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-1.5 sm:gap-2">
        {/* Left: Contact Info */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-6 font-heading text-xs sm:text-[14px] md:text-[15px]">
          <a
            href="tel:+919359366254"
            className="flex items-center gap-1.5 hover:text-[#ff7522] transition-colors font-medium text-gray-900"
          >
            <Phone className="w-3.5 h-3.5 text-[#ff7522] fill-[#ff7522] flex-shrink-0" />
            <span className="whitespace-nowrap">+91 9359366254</span>
          </a>
          <a
            href="mailto:info@nikamscientific.com"
            className="flex items-center gap-1.5 hover:text-[#ff7522] transition-colors font-medium text-gray-900"
          >
            <Mail className="w-3.5 h-3.5 text-[#ff7522] fill-[#ff7522] flex-shrink-0" />
            <span className="whitespace-nowrap">info@nikamscientific.com</span>
          </a>
        </div>

        {/* Right: Social Media Links */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={COMPANY_INFO.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white shadow-xs border border-gray-200 flex items-center justify-center text-[#1877F2] hover:bg-[#1877F2] hover:text-white hover:scale-110 transition-all duration-200"
            aria-label="Facebook"
          >
            <Facebook className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </a>
          <a
            href={COMPANY_INFO.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white shadow-xs border border-gray-200 flex items-center justify-center text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white hover:scale-110 transition-all duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </a>
          <a
            href={COMPANY_INFO.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white shadow-xs border border-gray-200 flex items-center justify-center text-[#C13584] hover:bg-[#C13584] hover:text-white hover:scale-110 transition-all duration-200"
            aria-label="Instagram"
          >
            <Instagram className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </a>
          <a
            href={COMPANY_INFO.socials.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white shadow-xs border border-gray-200 flex items-center justify-center text-[#FF0000] hover:bg-[#FF0000] hover:text-white hover:scale-110 transition-all duration-200"
            aria-label="YouTube"
          >
            <Youtube className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
