import React from "react";
import Link from "next/link";
import { Phone, Mail, Clock, ShieldCheck, Facebook, Linkedin, Instagram, Youtube } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function TopBar() {
  return (
    <div className="bg-[#021330] text-white text-xs sm:text-[13px] border-b border-[#0b244d] py-2 px-4 relative z-30">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Left: Contact Information & Working Hours */}
        <div className="flex items-center flex-wrap justify-center md:justify-start gap-3 sm:gap-5 text-slate-300">
          {/* Phones */}
          <div className="flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-[#ff7522] shrink-0" />
            <span className="text-slate-300 hidden sm:inline">Call:</span>
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="font-semibold text-white hover:text-[#ff7522] transition-colors whitespace-nowrap"
            >
              {COMPANY_INFO.phone}
            </a>
            <span className="text-slate-500">/</span>
            <a
              href={`tel:${COMPANY_INFO.alternatePhoneRaw}`}
              className="font-semibold text-white hover:text-[#ff7522] transition-colors whitespace-nowrap"
            >
              {COMPANY_INFO.alternatePhone}
            </a>
          </div>

          {/* Email */}
          <div className="hidden sm:flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-[#ff7522] shrink-0" />
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="text-slate-300 hover:text-[#ff7522] transition-colors font-medium"
            >
              {COMPANY_INFO.email}
            </a>
          </div>

          {/* Working Hours */}
          <div className="hidden xl:flex items-center gap-1.5 text-slate-300 font-medium">
            <Clock className="w-3.5 h-3.5 text-[#ff7522] shrink-0" />
            <span>{COMPANY_INFO.workingHours}</span>
          </div>
        </div>

        {/* Right: Estd Badge & Socials */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Badge Pill matching reference site */}
          <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#ff7522]/15 border border-[#ff7522]/40 text-[#ff7522] text-[11px] font-bold tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-[#ff7522]" />
            <span>ESTD. 1996 • 30+ YEARS EXCELLENCE</span>
          </div>

          {/* Social Icons */}
          <div className="hidden sm:flex items-center gap-1.5">
            <a
              href={COMPANY_INFO.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 rounded-full bg-white/10 hover:bg-[#ff7522] text-white flex items-center justify-center transition-all duration-200 hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook className="w-3 h-3" />
            </a>
            <a
              href={COMPANY_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 rounded-full bg-white/10 hover:bg-[#ff7522] text-white flex items-center justify-center transition-all duration-200 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-3 h-3" />
            </a>
            <a
              href={COMPANY_INFO.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 rounded-full bg-white/10 hover:bg-[#ff7522] text-white flex items-center justify-center transition-all duration-200 hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="w-3 h-3" />
            </a>
            <a
              href={COMPANY_INFO.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 rounded-full bg-white/10 hover:bg-[#ff7522] text-white flex items-center justify-center transition-all duration-200 hover:scale-110"
              aria-label="YouTube"
            >
              <Youtube className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
