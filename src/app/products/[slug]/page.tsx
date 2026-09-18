import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, Phone, Mail, HelpCircle, ArrowRight, ShieldCheck, Clock, Award, Shield, Truck } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ProductCard from "@/components/ui/ProductCard";
import { PRODUCTS } from "@/data/products";
import { COMPANY_INFO } from "@/data/company";
import ProductDetailClient from "./ProductDetailClient";
import liveProductData from "@/data/live_product_content.json";
import JsonLd from "@/components/seo/JsonLd";
import ProductFaqSection from "@/components/seo/ProductFaqSection";
import {
  PRODUCT_SEO_DATA,
  getProductSchema,
  getProductBreadcrumbSchema,
  getFaqPageSchema,
} from "@/data/productSeoData";
import { SITE_URL } from "@/data/corePagesSeo";

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const product = PRODUCTS.find((p) => p.slug === params.slug);
  if (!product) return {};

  const seoData = PRODUCT_SEO_DATA[product.slug] || {
    focusKeyword: `${product.name} Manufacturer in India`,
    supportiveKeywords: [
      product.name,
      `${product.name} supplier`,
      "borosilicate 3.3 glassware",
      "scientific equipment India",
    ],
    title: `${product.name} Manufacturer in India`,
    description: `Buy high-precision ${product.name} manufactured by Nikam Scientific in India. ISO-certified Borosilicate 3.3 standards with nationwide delivery.`,
    faqs: [],
  };

  const canonicalUrl = `${SITE_URL}/products/${product.slug}`;
  const imageUrl = `${SITE_URL}${product.image}`;
  const cleanTitle = seoData.title.replace(/\s*\|\s*Nikam Scientific/gi, "");

  return {
    title: cleanTitle,
    description: seoData.description,
    keywords: [seoData.focusKeyword, ...seoData.supportiveKeywords],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${cleanTitle} | Nikam Scientific`,
      description: seoData.description,
      url: canonicalUrl,
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 800,
          height: 800,
          alt: `${product.name} - Nikam Scientific`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${cleanTitle} | Nikam Scientific`,
      description: seoData.description,
      images: [imageUrl],
    },
  };
}

export default function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = PRODUCTS.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  const liveData = (liveProductData as Record<string, any>)[params.slug];
  const mainDescription = liveData?.paragraphs?.[0] || product.description;

  // Related products from the same category
  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.slug !== product.slug
  ).slice(0, 3);

  const categoryHref =
    product.category === "glassware"
      ? "/laboratory-glassware"
      : product.category === "equipment"
      ? "/laboratory-equipments"
      : "/industrial-processing-unit";

  const bannerBg =
    product.category === "equipment"
      ? "/images/banners/laboratory-equipments-banner.jpg"
      : product.category === "industrial"
      ? "/images/banners/industrial-banner.png"
      : "/images/banners/glassware-banner.jpg";

  const trustPillars = [
    { title: "30+ Years of Experience", desc: "Three decades of specialized manufacturing expertise.", icon: Clock },
    { title: "ISO-Certified Manufacturing", desc: "Certified, quality-controlled precision processes.", icon: Award },
    { title: "Strict Quality Control", desc: "Multi-point optical and dimensional inspection.", icon: Shield },
    { title: "Fast Delivery", desc: "Reliable production and nationwide timely dispatch.", icon: Truck },
  ];

  const seoData = PRODUCT_SEO_DATA[product.slug];
  const categorySlug =
    product.category === "glassware"
      ? "laboratory-glassware"
      : product.category === "equipment"
      ? "laboratory-equipments"
      : "industrial-processing-unit";

  const productSchema = seoData ? getProductSchema(product, seoData) : null;
  const breadcrumbSchema = getProductBreadcrumbSchema(
    product.name,
    product.slug,
    product.categoryName,
    categorySlug
  );
  const faqSchema = seoData && seoData.faqs.length > 0 ? getFaqPageSchema(seoData.faqs) : null;
  const schemasToInject = [productSchema, breadcrumbSchema, faqSchema].filter(Boolean);

  return (
    <>
      {schemasToInject.length > 0 && (
        <JsonLd data={schemasToInject as Record<string, unknown>[]} />
      )}
      <Breadcrumb
        title={product.name}
        subtitle={product.shortDesc}
        bgImage={bannerBg}
        items={[
          { label: product.categoryName, href: categoryHref },
          { label: product.name },
        ]}
      />

      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            {/* Left: Product Image (Sticky Column that stays fixed while right column scrolls) */}
            <div className="lg:col-span-6 relative">
              <div className="sticky-product-column space-y-5">
                <div className="relative w-full aspect-square bg-[#f8f9fa] rounded-2xl overflow-hidden border border-gray-200 shadow-md p-6 sm:p-8 flex items-center justify-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4 sm:p-6"
                    priority
                  />
                  <Link
                    href={categoryHref}
                    className="absolute top-4 left-4 bg-[#121315] text-[#ffca3b] text-xs font-bold px-3 py-1.5 rounded-md hover:bg-[#ff7522] hover:text-white transition-colors"
                  >
                    {product.categoryName}
                  </Link>
                </div>

                {/* Quality Guarantee Box */}
                <div className="p-4 sm:p-5 bg-orange-50/70 border border-orange-100 rounded-xl flex items-center gap-3.5 sm:gap-4">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-[#ff7522] text-white flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="text-xs text-gray-700">
                    <div className="font-bold text-[#121315] text-sm">
                      Nikam Scientific Certified Quality
                    </div>
                    <span>
                      Manufactured to IS / ISO standards with inspection certificate available on request. View our verified{" "}
                      <Link href="/our-work" className="text-[#ff7522] font-semibold hover:underline">
                        calibration standards
                      </Link>{" "}
                      or request compliance reports.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Details & Quote Trigger */}
            <div className="lg:col-span-6 space-y-5 sm:space-y-6">
              <div>
                <p className="text-xs uppercase font-extrabold tracking-widest text-[#ff7522] mb-1">
                  <Link href={categoryHref} className="hover:underline">
                    {product.categoryName}
                  </Link>
                </p>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#121315] font-heading">
                  {product.name}
                </h1>
              </div>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {mainDescription}
              </p>

              {/* Client component for interactive quote button */}
              <ProductDetailClient productName={product.name} />

              {/* Key Features List */}
              <div className="pt-4 border-t border-gray-100">
                <h3 className="text-base sm:text-lg font-bold text-[#121315] font-heading mb-3 sm:mb-4">
                  Key Product Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  {product.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-[#ff7522] flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specifications Table */}
              {product.specs && product.specs.length > 0 && (
                <div className="pt-5 sm:pt-6 border-t border-gray-100">
                  <h3 className="text-base sm:text-lg font-bold text-[#121315] font-heading mb-3 sm:mb-4">
                    Technical Specifications
                  </h3>
                  <div className="border border-gray-200 rounded-lg overflow-x-auto w-full text-xs sm:text-sm">
                    <table className="w-full text-left border-collapse min-w-[280px]">
                      <tbody>
                        {product.specs.map((s, idx) => (
                          <tr
                            key={idx}
                            className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}
                          >
                            <td className="p-2.5 sm:p-3 font-semibold text-gray-700 border-b border-gray-200 w-1/3">
                              {s.label}
                            </td>
                            <td className="p-2.5 sm:p-3 text-gray-900 border-b border-gray-200">
                              {s.value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Applications */}
              {product.applications && product.applications.length > 0 && (
                <div className="pt-6 border-t border-gray-100">
                  <h3 className="text-lg font-bold text-[#121315] font-heading mb-3">
                    Target Applications
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                    {product.applications.map((app, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff7522]" />
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Authentic Live Q&A and FAQ Content */}
              {liveData?.paragraphs && liveData.paragraphs.length > 1 && (
                <div className="pt-6 border-t border-gray-100 space-y-4">
                  <h3 className="text-lg font-bold text-[#121315] font-heading">
                    Technical Insights &amp; Manufacturing Notes
                  </h3>
                  <div className="space-y-3">
                    {liveData.paragraphs.slice(1, 6).map((para: string, idx: number) => (
                      <div key={idx} className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                        <div className="font-semibold text-xs uppercase tracking-wider text-[#ff7522] mb-1">
                          Product Insight #{idx + 1}
                        </div>
                        <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                          {para}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* 4 Trust Pillars matching Live Site Product Page */}
          <div className="mt-20 pt-16 border-t border-gray-100">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {trustPillars.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div
                    key={idx}
                    className="bg-[#f8f9fa] p-6 rounded-2xl border border-gray-100 flex flex-col items-start gap-3"
                  >
                    <div className="w-10 h-10 rounded-lg bg-orange-100 text-[#ff7522] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#021330] text-sm mb-1">
                        {p.title}
                      </h4>
                      <p className="text-xs text-gray-600">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 4 FAQs at the bottom of the page */}
          {seoData && seoData.faqs && seoData.faqs.length > 0 && (
            <ProductFaqSection faqs={seoData.faqs} productName={product.name} />
          )}

          {/* Call to Action Bar */}
          <div className="mt-10 sm:mt-12 bg-[#021330] rounded-2xl p-6 sm:p-8 lg:p-10 text-white border-4 border-[#ff7522]/30 flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6">
            <div className="space-y-1 text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                Need Precision {product.name} for Your Laboratory?
              </h3>
              <p className="text-xs sm:text-sm text-gray-300">
                Contact Nikam Scientific for product details, technical assistance and competitive quotations.
              </p>
            </div>
            <Link
              href="/contact-us"
              className="btn-primary py-3 px-6 text-xs uppercase font-bold tracking-wider whitespace-nowrap w-full sm:w-auto text-center"
            >
              <span>Contact Our Experts</span>
              <ArrowRight className="w-4 h-4 ml-1 inline-block" />
            </Link>
          </div>

          {/* Related Products Grid */}
          {relatedProducts.length > 0 && (
            <div className="mt-20 pt-16 border-t border-gray-200">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <div className="section-subtitle">Our Popular Products</div>
                  <h3 className="text-2xl font-bold text-[#121315] font-heading">
                    More from {product.categoryName}
                  </h3>
                </div>
                <Link
                  href={categoryHref}
                  className="text-xs font-bold text-[#ff7522] hover:underline flex items-center gap-1"
                >
                  <span>View All</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProducts.map((rel) => (
                  <ProductCard key={rel.id} product={rel} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
