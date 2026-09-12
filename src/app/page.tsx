import React from "react";
import type { Metadata } from "next";
import HeroBanner from "@/components/home/HeroBanner";
import AboutSection from "@/components/home/AboutSection";
import ProductCategories from "@/components/home/ProductCategories";
import IndustriesSection from "@/components/home/IndustriesSection";
import StandardsSection from "@/components/home/StandardsSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import HomeContactSection from "@/components/home/HomeContactSection";
import ClientCarousel from "@/components/home/ClientCarousel";
import JsonLd from "@/components/seo/JsonLd";
import { CORE_PAGES_SEO, getHomeSchema } from "@/data/corePagesSeo";

export const metadata: Metadata = {
  title: {
    absolute: CORE_PAGES_SEO.home.title,
  },
  description: CORE_PAGES_SEO.home.description,
  keywords: CORE_PAGES_SEO.home.supportiveKeywords,
  alternates: {
    canonical: CORE_PAGES_SEO.home.canonical,
  },
  openGraph: {
    title: CORE_PAGES_SEO.home.title,
    description: CORE_PAGES_SEO.home.description,
    url: CORE_PAGES_SEO.home.canonical,
    type: CORE_PAGES_SEO.home.ogType,
    images: [
      {
        url: CORE_PAGES_SEO.home.ogImage,
        width: 1200,
        height: 630,
        alt: "Nikam Scientific - Laboratory Glassware Manufacturer in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: CORE_PAGES_SEO.home.title,
    description: CORE_PAGES_SEO.home.description,
    images: [CORE_PAGES_SEO.home.ogImage],
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={getHomeSchema()} />
      <HeroBanner />
      <AboutSection />
      <ProductCategories />
      <IndustriesSection />
      <StandardsSection />
      <WhyChooseUs />
      <HomeContactSection />
      <ClientCarousel />
    </>
  );
}
