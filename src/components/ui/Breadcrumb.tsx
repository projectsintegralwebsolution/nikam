import React from "react";
import Link from "next/link";
import { ChevronRight, Home, ShieldCheck } from "lucide-react";

interface BreadcrumbProps {
  title: string;
  subtitle?: string;
  bgImage?: string;
  items?: { label: string; href?: string }[];
}

export default function Breadcrumb({
  title,
  subtitle,
  bgImage = "/demo-2/images/banners/about-banner1.jpg",
  items = [],
}: BreadcrumbProps) {
  return (
    <div
      className="relative bg-[#021330] py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Classic Deep Navy Gradient Overlay for optimal contrast & high-end elegance */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#021330]/96 via-[#021330]/88 to-[#000E30]/92 backdrop-brightness-90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#ff7522]/15 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Category / Company Pill Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ff7522]/20 border border-[#ff7522]/40 text-[#ff7522] text-[11px] sm:text-xs font-black uppercase tracking-widest backdrop-blur-md mb-3 sm:mb-4 shadow-inner">
          <ShieldCheck className="w-3.5 h-3.5 text-[#ff7522]" />
          <span>NIKAM SCIENTIFIC • PRECISION LABORATORY GLASSWARE</span>
        </div>

        {/* High Contrast Crisp White Heading */}
        <h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white font-heading tracking-tight drop-shadow-md break-words !text-white leading-tight"
          style={{ color: "#ffffff" }}
        >
          {title}
        </h1>

        {subtitle && (
          <p className="text-slate-200 text-xs sm:text-sm md:text-base max-w-2xl mt-2 mb-4 font-normal leading-relaxed">
            {subtitle}
          </p>
        )}

        {items && items.length > 0 && (
          <div className="pt-3">
            <nav className="inline-flex flex-wrap items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-xs sm:text-sm text-slate-200 border border-white/20 shadow-md">
              <Link
                href="/"
                className="flex items-center gap-1.5 hover:text-[#ff7522] transition-colors font-medium"
              >
                <Home className="w-3.5 h-3.5 text-[#ff7522]" />
                <span>Home</span>
              </Link>

              {items.map((item, idx) => (
                <React.Fragment key={idx}>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="hover:text-[#ff7522] transition-colors font-medium text-slate-200"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-[#ff7522] font-bold">{item.label}</span>
                  )}
                </React.Fragment>
              ))}
            </nav>
          </div>
        )}
      </div>

      {/* Subtle bottom orange accent line */}
      <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-[#ff7522] via-[#ffca3b] to-transparent" />
    </div>
  );
}
