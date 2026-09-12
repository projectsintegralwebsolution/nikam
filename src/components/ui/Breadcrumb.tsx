import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

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
      className="relative bg-[#121315] py-10 sm:py-16 md:py-20 lg:py-24 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Zero dark overlay - Authentic bright background image as on live site */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-wide mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)] break-words">
          {title}
        </h1>

        {subtitle && (
          <p className="text-white text-xs sm:text-sm md:text-base max-w-2xl mb-4 font-medium drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]">
            {subtitle}
          </p>
        )}

        {items && items.length > 0 && (
          <nav className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 bg-black/50 backdrop-blur-xs rounded-md text-xs sm:text-sm text-gray-100 border border-white/20">
            <Link
              href="/"
              className="flex items-center gap-1 hover:text-[#ff7522] transition-colors"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>

            {items.map((item, idx) => (
              <React.Fragment key={idx}>
                <ChevronRight className="w-3.5 h-3.5 text-gray-300" />
                {item.href ? (
                  <Link
                    href={item.href}
                    className="hover:text-[#ff7522] transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-[#ff7522] font-semibold">{item.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}
      </div>
    </div>
  );
}
