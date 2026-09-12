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

const catData = CATEGORY_SEO_DATA["industrial-processing-unit"];

export const metadata: Metadata = {
  title: catData.title,
  description: catData.description,
  keywords: [catData.focusKeyword, ...catData.supportiveKeywords],
  alternates: {
    canonical: `${SITE_URL}/industrial-processing-unit`,
  },
  openGraph: {
    title: `${catData.title} | Nikam Scientific`,
    description: catData.description,
    url: `${SITE_URL}/industrial-processing-unit`,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/banners/industrial-banner.png`,
        width: 1200,
        height: 630,
        alt: "Industrial Processing Units Manufacturer in India - Nikam Scientific",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${catData.title} | Nikam Scientific`,
    description: catData.description,
    images: [`${SITE_URL}/images/banners/industrial-banner.png`],
  },
};

export default function IndustrialProcessingUnitPage() {
  const industrialProducts = PRODUCTS.filter((p) => p.category === "industrial");

  const trustPillars = [
    {
      title: "30+ Years of Experience",
      desc: "Specialized in large-diameter borosilicate process equipment engineering.",
      icon: Clock,
    },
    {
      title: "ISO-Certified Manufacturing",
      desc: "Designed to ISO standards with virgin PTFE gaskets and SS structure.",
      icon: Award,
    },
    {
      title: "Hydrostatic & Vacuum Tested",
      desc: "100% leak-tested under full vacuum and operating head pressures.",
      icon: Shield,
    },
    {
      title: "Turnkey Site Commissioning",
      desc: "Skid-mounted fabrication, nationwide site assembly, and supervision.",
      icon: Truck,
    },
  ];

  const categorySchema = getCategorySchema(
    "industrial-processing-unit",
    catData.title,
    catData.description,
    industrialProducts.map((p) => ({ name: p.name, slug: p.slug }))
  );

  const breadcrumbSchema = getCategoryBreadcrumbSchema(
    catData.categoryName,
    "industrial-processing-unit"
  );

  const faqSchema = getFaqPageSchema(catData.faqs);

  return (
    <>
      <JsonLd data={[categorySchema, breadcrumbSchema, faqSchema]} />

      <Breadcrumb
        title="Industrial Processing Unit"
        subtitle="Turnkey Borosilicate 3.3 Glass Pilot Plants, Evaporators & Reaction Units for Chemical & Pharma Plants"
        bgImage="/images/banners/industrial-banner.png"
        items={[{ label: "Industrial Processing Unit" }]}
      />

      <section className="py-12 sm:py-16 lg:py-24 bg-[#fbfbfb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* SEO Intro Section */}
          <div className="max-w-4xl mb-8 sm:mb-12">
            <p className="text-xs uppercase font-extrabold tracking-widest text-[#ff7522] mb-2">
              INDUSTRIAL BOROSILICATE GLASS PLANTS &amp; PILOT UNITS
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#121315] font-heading mb-3 sm:mb-4">
              Turnkey Industrial Glass Processing Systems &amp; Assemblies
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed mb-4">
              Nikam Scientific Co. designs, fabricates, and installs heavy-duty{" "}
              <strong>Borosilicate 3.3 Industrial Glass Processing Units</strong> for specialty chemical synthesis,
              pharmaceutical active ingredient recovery, solvent distillation, and pilot research plants across India.
              Glass process plants offer unmatched corrosion resistance, transparent process observation, and clean-in-place hygiene.
            </p>
            <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
              Our engineering catalog encompasses modular{" "}
              <Link href="/products/pipeline-components" className="text-[#ff7522] font-semibold hover:underline">
                glass pipeline components
              </Link>
              , spherical and cylindrical{" "}
              <Link href="/products/vessels" className="text-[#ff7522] font-semibold hover:underline">
                reaction vessels
              </Link>
              , high-efficiency coil{" "}
              <Link href="/products/heat-exchangers" className="text-[#ff7522] font-semibold hover:underline">
                heat exchangers
              </Link>
              , and fractional{" "}
              <Link href="/products/column-components" className="text-[#ff7522] font-semibold hover:underline">
                column components
              </Link>
              . Each assembly is supplied with SS304/SS316 tubular framework, PTFE gaskets, and safety relief valves.
              Learn more about our{" "}
              <Link href="/our-work" className="text-[#ff7522] font-semibold hover:underline">
                custom engineering capabilities
              </Link>{" "}
              or contact our project engineering team for plant layout consultation.
            </p>
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {industrialProducts.map((product) => (
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
              title="Frequently Asked Questions About Industrial Glass Units"
              subtitle="ENGINEERING & PILOT PLANT EXPERTISE"
              faqs={catData.faqs}
            />
          </div>

          {/* Call to Action Bar */}
          <div className="mt-12 sm:mt-16 bg-[#021330] rounded-2xl p-6 sm:p-8 lg:p-10 text-white border-4 border-[#ff7522]/30 flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6">
            <div className="space-y-1 text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                Planning a Pilot Plant or Industrial Glass Assembly?
              </h3>
              <p className="text-xs sm:text-sm text-gray-300">
                Submit your process schematics, capacity requirements, and plant dimensions for a comprehensive engineering proposal.
              </p>
            </div>
            <Link
              href="/contact-us"
              className="btn-primary py-3 px-6 text-xs uppercase font-bold tracking-wider whitespace-nowrap w-full sm:w-auto text-center"
            >
              <span>Consult an Engineer</span>
              <ArrowRight className="w-4 h-4 ml-1 inline-block" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
