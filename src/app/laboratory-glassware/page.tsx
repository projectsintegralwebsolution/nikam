import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Award, Shield, Truck } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ProductCard from "@/components/ui/ProductCard";
import JsonLd from "@/components/seo/JsonLd";
import ProductFaqSection from "@/components/seo/ProductFaqSection";
import { PRODUCTS } from "@/data/products";
import {
  CATEGORY_SEO_DATA,
  getCategorySchema,
  getCategoryBreadcrumbSchema,
  getFaqPageSchema,
} from "@/data/productSeoData";
import { SITE_URL } from "@/data/corePagesSeo";

const catData = CATEGORY_SEO_DATA["laboratory-glassware"];

export const metadata: Metadata = {
  title: catData.title,
  description: catData.description,
  keywords: [catData.focusKeyword, ...catData.supportiveKeywords],
  alternates: {
    canonical: `${SITE_URL}/laboratory-glassware`,
  },
  openGraph: {
    title: `${catData.title} | Nikam Scientific`,
    description: catData.description,
    url: `${SITE_URL}/laboratory-glassware`,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/banners/glassware-banner.jpg`,
        width: 1200,
        height: 630,
        alt: "Laboratory Glassware Manufacturer in India - Nikam Scientific",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${catData.title} | Nikam Scientific`,
    description: catData.description,
    images: [`${SITE_URL}/images/banners/glassware-banner.jpg`],
  },
};

export default function LaboratoryGlasswarePage() {
  const glasswareProducts = PRODUCTS.filter((p) => p.category === "glassware");

  const trustPillars = [
    {
      title: "30+ Years of Experience",
      desc: "Specialized glassblowing and scientific apparatus fabrication.",
      icon: Clock,
    },
    {
      title: "ISO-Certified Manufacturing",
      desc: "Conforming to ISO 3585, DIN 12217 & Class A standards.",
      icon: Award,
    },
    {
      title: "Strict Quality Control",
      desc: "Optical inspection, thermal strain testing, and polariscope verification.",
      icon: Shield,
    },
    {
      title: "Nationwide Safe Delivery",
      desc: "Reinforced cellular packaging for zero transit breakage across India.",
      icon: Truck,
    },
  ];

  const categorySchema = getCategorySchema(
    "laboratory-glassware",
    catData.title,
    catData.description,
    glasswareProducts.map((p) => ({ name: p.name, slug: p.slug }))
  );

  const breadcrumbSchema = getCategoryBreadcrumbSchema(
    catData.categoryName,
    "laboratory-glassware"
  );

  const faqSchema = getFaqPageSchema(catData.faqs);

  return (
    <>
      <JsonLd data={[categorySchema, breadcrumbSchema, faqSchema]} />

      <Breadcrumb
        title="Laboratory Glassware"
        subtitle="Precision Engineered Borosilicate 3.3 Scientific Glassware for Chemical, Pharma & Research Labs"
        bgImage="/images/banners/glassware-banner.jpg"
        items={[{ label: "Laboratory Glassware" }]}
      />

      <section className="py-12 sm:py-16 lg:py-24 bg-[#fbfbfb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* SEO Intro Section */}
          <div className="max-w-4xl mb-8 sm:mb-12">
            <p className="text-xs uppercase font-extrabold tracking-widest text-[#ff7522] mb-2">
              B2B SCIENTIFIC GLASSWARE MANUFACTURER
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#121315] font-heading mb-3 sm:mb-4">
              Precision Engineered Borosilicate 3.3 Glassware
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed mb-4">
              Nikam Scientific Co. is a trusted Indian manufacturer and bulk supplier of high-precision{" "}
              <strong>Borosilicate 3.3 laboratory glassware</strong>. Engineered with exceptional thermal shock
              resistance and hydrolytic durability, our portfolio caters to quality control departments,
              pharmaceutical testing facilities, government testing institutes, and university research laboratories
              across India.
            </p>
            <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
              From certified Class A volumetric equipment including{" "}
              <Link href="/products/measuring-volumetric-flasks" className="text-[#ff7522] font-semibold hover:underline">
                volumetric flasks
              </Link>
              ,{" "}
              <Link href="/products/pipettes" className="text-[#ff7522] font-semibold hover:underline">
                pipettes
              </Link>
              , and{" "}
              <Link href="/products/burettes" className="text-[#ff7522] font-semibold hover:underline">
                burettes
              </Link>{" "}
              to custom-blown{" "}
              <Link href="/products/distillation-apparatus" className="text-[#ff7522] font-semibold hover:underline">
                distillation apparatus
              </Link>{" "}
              and durable{" "}
              <Link href="/products/beakers" className="text-[#ff7522] font-semibold hover:underline">
                laboratory beakers
              </Link>
              , every piece is calibrated to rigorous international standards. Explore our verified{" "}
              <Link href="/our-work" className="text-[#ff7522] font-semibold hover:underline">
                calibration processes
              </Link>{" "}
              or request formal quotations for institutional supply.
            </p>
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
            {glasswareProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* 4 Trust Pillars */}
          <div className="mt-16 sm:mt-20 pt-12 sm:pt-16 border-t border-gray-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {trustPillars.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs flex flex-col items-start gap-3"
                  >
                    <div className="w-10 h-10 rounded-lg bg-orange-100 text-[#ff7522] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#121315] text-sm mb-1">
                        {p.title}
                      </h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 4 Bespoke FAQs */}
          <div className="mt-12 sm:mt-16">
            <ProductFaqSection
              title="Frequently Asked Questions About Laboratory Glassware"
              subtitle="EXPERT MANUFACTURING INSIGHTS"
              faqs={catData.faqs}
            />
          </div>

          {/* Call to Action Bar */}
          <div className="mt-12 sm:mt-16 bg-[#021330] rounded-2xl p-6 sm:p-8 lg:p-10 text-white border-4 border-[#ff7522]/30 flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6">
            <div className="space-y-1 text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                Looking for Custom Scientific Glassware or Bulk Orders?
              </h3>
              <p className="text-xs sm:text-sm text-gray-300">
                Contact Nikam Scientific for custom fabrication drawings, institutional rate contracts, and rapid quotes.
              </p>
            </div>
            <Link
              href="/contact-us"
              className="btn-primary py-3 px-6 text-xs uppercase font-bold tracking-wider whitespace-nowrap w-full sm:w-auto text-center"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4 ml-1 inline-block" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
