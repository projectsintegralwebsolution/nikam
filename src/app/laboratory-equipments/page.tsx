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

const catData = CATEGORY_SEO_DATA["laboratory-equipments"];

export const metadata: Metadata = {
  title: catData.title,
  description: catData.description,
  keywords: [catData.focusKeyword, ...catData.supportiveKeywords],
  alternates: {
    canonical: `${SITE_URL}/laboratory-equipments`,
  },
  openGraph: {
    title: `${catData.title} | Nikam Scientific`,
    description: catData.description,
    url: `${SITE_URL}/laboratory-equipments`,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/banners/laboratory-equipments-banner.jpg`,
        width: 1200,
        height: 630,
        alt: "Laboratory Equipments Manufacturer in India - Nikam Scientific",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${catData.title} | Nikam Scientific`,
    description: catData.description,
    images: [`${SITE_URL}/images/banners/laboratory-equipments-banner.jpg`],
  },
};

export default function LaboratoryEquipmentsPage() {
  const equipmentProducts = PRODUCTS.filter((p) => p.category === "equipment");

  const trustPillars = [
    {
      title: "30+ Years of Experience",
      desc: "Decades of engineering robust scientific and benchtop instruments.",
      icon: Clock,
    },
    {
      title: "ISO-Certified Manufacturing",
      desc: "Built under strict electrical and PID thermal safety standards.",
      icon: Award,
    },
    {
      title: "1-Year Full Warranty",
      desc: "Comprehensive warranty with readily available replacement spares.",
      icon: Shield,
    },
    {
      title: "Nationwide Support & Dispatch",
      desc: "Rapid delivery and technical support across all Indian industrial hubs.",
      icon: Truck,
    },
  ];

  const categorySchema = getCategorySchema(
    "laboratory-equipments",
    catData.title,
    catData.description,
    equipmentProducts.map((p) => ({ name: p.name, slug: p.slug }))
  );

  const breadcrumbSchema = getCategoryBreadcrumbSchema(
    catData.categoryName,
    "laboratory-equipments"
  );

  const faqSchema = getFaqPageSchema(catData.faqs);

  return (
    <>
      <JsonLd data={[categorySchema, breadcrumbSchema, faqSchema]} />

      <Breadcrumb
        title="Laboratory Equipments"
        subtitle="High-Precision Heating, Stirring & Analytical Benchtop Instruments for Research & Industrial Labs"
        bgImage="/images/banners/laboratory-equipments-banner.jpg"
        items={[{ label: "Laboratory Equipments" }]}
      />

      <section className="py-12 sm:py-16 lg:py-24 bg-[#fbfbfb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* SEO Intro Section */}
          <div className="max-w-4xl mb-8 sm:mb-12">
            <p className="text-xs uppercase font-extrabold tracking-widest text-[#ff7522] mb-2">
              SCIENTIFIC BENCHTOP INSTRUMENTS MANUFACTURER
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#121315] font-heading mb-3 sm:mb-4">
              Reliable Laboratory Equipment for Scientific Excellence
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed mb-4">
              Nikam Scientific Co. manufactures and supplies robust, high-performance{" "}
              <strong>Laboratory Equipment</strong> engineered for demanding chemical synthesis, biological sample
              preparation, and pharmaceutical quality control. Every benchtop unit is designed to provide stable
              temperature regulation, uniform agitation, and dependable long-term operation.
            </p>
            <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
              Explore our core instruments including forced-air{" "}
              <Link href="/products/laboratory-ovens" className="text-[#ff7522] font-semibold hover:underline">
                laboratory ovens
              </Link>
              , constant temperature{" "}
              <Link href="/products/lab-water-bath" className="text-[#ff7522] font-semibold hover:underline">
                lab water baths
              </Link>
              , refrigerated{" "}
              <Link href="/products/bod-incubator" className="text-[#ff7522] font-semibold hover:underline">
                BOD incubators
              </Link>
              , and heavy-duty steam{" "}
              <Link href="/products/autoclave" className="text-[#ff7522] font-semibold hover:underline">
                autoclaves
              </Link>
              . All units integrate seamlessly with our standard{" "}
              <Link href="/laboratory-glassware" className="text-[#ff7522] font-semibold hover:underline">
                borosilicate glassware
              </Link>{" "}
              for turnkey laboratory installations. Review our verified{" "}
              <Link href="/our-work" className="text-[#ff7522] font-semibold hover:underline">
                calibration standards
              </Link>{" "}
              or contact us for educational and industrial bulk quotations.
            </p>
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {equipmentProducts.map((product) => (
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
              title="Frequently Asked Questions About Laboratory Equipments"
              subtitle="TECHNICAL & PROCUREMENT GUIDANCE"
              faqs={catData.faqs}
            />
          </div>

          {/* Call to Action Bar */}
          <div className="mt-12 sm:mt-16 bg-[#021330] rounded-2xl p-6 sm:p-8 lg:p-10 text-white border-4 border-[#ff7522]/30 flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6">
            <div className="space-y-1 text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                Equipping a New Laboratory or Need Equipment Spares?
              </h3>
              <p className="text-xs sm:text-sm text-gray-300">
                Contact our instrumentation engineers for technical specifications, product compatibility, and formal RFQ quotes.
              </p>
            </div>
            <Link
              href="/contact-us"
              className="btn-primary py-3 px-6 text-xs uppercase font-bold tracking-wider whitespace-nowrap w-full sm:w-auto text-center"
            >
              <span>Get Equipment Quotation</span>
              <ArrowRight className="w-4 h-4 ml-1 inline-block" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
