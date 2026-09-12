import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, ShieldCheck } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { CLIENT_LOGOS } from "@/data/products";
import JsonLd from "@/components/seo/JsonLd";
import { CORE_PAGES_SEO, getClientsSchema } from "@/data/corePagesSeo";

export const metadata: Metadata = {
  title: CORE_PAGES_SEO.clients.title,
  description: CORE_PAGES_SEO.clients.description,
  keywords: CORE_PAGES_SEO.clients.supportiveKeywords,
  alternates: {
    canonical: CORE_PAGES_SEO.clients.canonical,
  },
  openGraph: {
    title: CORE_PAGES_SEO.clients.title,
    description: CORE_PAGES_SEO.clients.description,
    url: CORE_PAGES_SEO.clients.canonical,
    type: CORE_PAGES_SEO.clients.ogType,
    images: [
      {
        url: CORE_PAGES_SEO.clients.ogImage,
        width: 1200,
        height: 630,
        alt: "Nikam Scientific - Trusted Laboratory Glassware Supplier for Pharma & Industry",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: CORE_PAGES_SEO.clients.title,
    description: CORE_PAGES_SEO.clients.description,
    images: [CORE_PAGES_SEO.clients.ogImage],
  },
};

export default function OurClientsPage() {
  const sectors = [
    {
      title: "Pharmaceutical & Biotechnology",
      desc: "Supplying bulk analytical glassware, reaction kettles, and certified volumetric flasks to API and formulation units across India.",
    },
    {
      title: "Chemical & Petrochemical Industries",
      desc: "Corrosion-resistant borosilicate glass assemblies, heat exchangers, and distillation columns designed for hostile acids and solvents.",
    },
    {
      title: "Research & Development Laboratories",
      desc: "National research centers, CSIR institutions, and independent analytical testing laboratories.",
    },
    {
      title: "Universities & Technical Institutes",
      desc: "Equipping university chemistry departments, engineering colleges, and educational laboratories with robust, safe glassware.",
    },
  ];

  return (
    <>
      <JsonLd data={getClientsSchema()} />
      <Breadcrumb
        title="Our Clients"
        bgImage="/demo-2/images/banners/about-banner1.jpg"
      />

      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Title & Copy from Live Site */}
          <div className="max-w-4xl mb-14">
            <p className="text-xs uppercase font-extrabold tracking-widest text-[#ff7522] mb-2">
              Trusted Relationships. Proven Quality.
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#121315] font-heading mb-4">
              Our Valued Clients
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              As a trusted laboratory glassware supplier for pharma, chemical manufacturers, CSIR research laboratories, and educational institutions across India, Nikam Scientific Co. delivers certified Borosilicate 3.3 glassware, pilot plant assemblies, and custom scientific solutions backed by rigorous quality assurance and dependable nationwide delivery.
            </p>
          </div>

          {/* Authentic 18 Client Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6 mb-20">
            {CLIENT_LOGOS.map((client, idx) => (
              <div
                key={idx}
                className="h-28 bg-[#fbfbfb] rounded-xl border border-gray-200/80 p-4 shadow-2xs hover:shadow-md hover:border-orange-300 transition-all flex items-center justify-center group"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={client.image}
                    alt={client.name}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Industry Sectors Breakdown */}
          <div className="border-t border-gray-100 pt-16">
            <div className="max-w-3xl mb-12">
              <p className="text-xs uppercase font-extrabold tracking-widest text-[#ff7522] mb-2">
                APPLICATION DOMAINS
              </p>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#121315] font-heading">
                Client Sectors &amp; Supply Domains
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {sectors.map((sec, idx) => (
                <div
                  key={idx}
                  className="bg-[#f8f9fa] p-8 rounded-2xl border border-gray-100 flex items-start gap-4 hover:border-orange-200 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#ff7522] text-white flex items-center justify-center flex-shrink-0 mt-1">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#121315] font-heading mb-2">
                      {sec.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {sec.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 sm:mt-16 bg-[#021330] rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 text-white border-4 border-[#ff7522]/30 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="space-y-2 max-w-2xl text-center md:text-left">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-heading text-white">
                Partner with Nikam Scientific
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-300">
                Join our growing network of prestigious laboratories and industries across India. Contact our sales representatives today.
              </p>
            </div>
            <Link
              href="/contact-us"
              className="btn-primary py-3 px-6 sm:px-8 text-xs uppercase font-bold tracking-wider whitespace-nowrap w-full sm:w-auto text-center"
            >
              <span>Contact Our Experts</span>
              <ArrowRight className="w-4 h-4 ml-1 inline-block" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
