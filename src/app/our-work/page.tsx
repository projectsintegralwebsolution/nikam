import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Wrench } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import JsonLd from "@/components/seo/JsonLd";
import WorkVideoShowcase from "@/components/work/WorkVideoShowcase";
import { CORE_PAGES_SEO, getWorkSchema } from "@/data/corePagesSeo";

export const metadata: Metadata = {
  title: CORE_PAGES_SEO.work.title,
  description: CORE_PAGES_SEO.work.description,
  keywords: CORE_PAGES_SEO.work.supportiveKeywords,
  alternates: {
    canonical: CORE_PAGES_SEO.work.canonical,
  },
  openGraph: {
    title: CORE_PAGES_SEO.work.title,
    description: CORE_PAGES_SEO.work.description,
    url: CORE_PAGES_SEO.work.canonical,
    type: CORE_PAGES_SEO.work.ogType,
    images: [
      {
        url: CORE_PAGES_SEO.work.ogImage,
        width: 1200,
        height: 630,
        alt: "Custom Glassware Fabrication & Turnkey Installations - Nikam Scientific",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: CORE_PAGES_SEO.work.title,
    description: CORE_PAGES_SEO.work.description,
    images: [CORE_PAGES_SEO.work.ogImage],
  },
};

export default function OurWorkPage() {
  const primaryGallery = [
    {
      src: "/demo-2/images/work/img-2.jpeg",
      title: "High-Purity Glass Reaction Assembly",
      desc: "Complete borosilicate pilot plant reaction setup with overhead stirrer and reflux condenser.",
    },
    {
      src: "/demo-2/images/work/img-3.jpeg",
      title: "Industrial Column & Piping System",
      desc: "Modular industrial glass pipeline installation engineered for corrosive solvent transfer.",
    },
    {
      src: "/demo-2/images/work/img-4.jpeg",
      title: "Precision Flame Glass Forming",
      desc: "Specialized glassblowing lathe operation crafting heavy-wall borosilicate fittings.",
    },
  ];

  const secondaryGallery = [
    {
      src: "/demo-2/images/work/whatsapp-1.jpeg",
      title: "Industrial Glass Distillation Rig",
      desc: "Turnkey distillation column with vacuum-jacketed silvered insulation.",
    },
    {
      src: "/demo-2/images/work/whatsapp-2.jpeg",
      title: "Chemical Process Vessel Installation",
      desc: "Spherical reaction kettle mounted on powder-coated structural steel framework.",
    },
    {
      src: "/demo-2/images/work/whatsapp-3.jpeg",
      title: "Multi-Neck Pilot Plant Setup",
      desc: "Custom multi-port synthesis vessel designed for pharmaceutical API development.",
    },
    {
      src: "/demo-2/images/work/img-1.jpeg",
      title: "Turnkey Laboratory Glass Assembly",
      desc: "End-to-end scientific laboratory glass apparatus installation and pressure testing.",
    },
  ];

  return (
    <>
      <JsonLd data={getWorkSchema()} />
      <Breadcrumb
        title="Our Work"
        bgImage="/demo-2/images/banners/about-banner1.jpg"
      />

      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Title & Description matching live site */}
          <div className="max-w-4xl mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#121315] font-heading mb-4">
              Turning Expertise into Measurable Results
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              From bespoke scientific glassblowing to turnkey borosilicate pilot plants and industrial glass pipeline installations across India, Nikam Scientific Co. transforms technical CAD drawings into high-performance chemical apparatus. Explore our completed project installations, custom reaction vessels (up to 200L), and precision glass fabrication lathe work.
            </p>
          </div>

          {/* Primary Photo Gallery (3 Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {primaryGallery.map((item, idx) => (
              <div
                key={idx}
                className="group bg-[#f8f9fa] rounded-2xl overflow-hidden border-2 border-black/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative w-full aspect-[4/3] bg-black/5 overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <h3 className="text-lg font-bold text-[#121315] font-heading mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Secondary Photo Gallery (4 Columns) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {secondaryGallery.map((item, idx) => (
              <div
                key={idx}
                className="group bg-[#f8f9fa] rounded-2xl overflow-hidden border-2 border-black/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative w-full aspect-[3/4] bg-black/5 overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <h3 className="text-base font-bold text-[#121315] font-heading mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 6 Video Showcase Section with Popup Modal */}
          <WorkVideoShowcase />

          {/* Custom Fabrication CTA */}
          <div className="mt-16 bg-[#021330] rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 text-white border-2 border-[#ff7522]/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff7522]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="space-y-3 max-w-2xl text-center md:text-left relative z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ff7522]/20 border border-[#ff7522]/40 text-[#ff7522] text-[11px] font-bold uppercase tracking-wider">
                <span>Tailored Glassware Engineering</span>
              </div>
              <h3
                className="text-xl sm:text-2xl lg:text-3xl font-black font-heading !text-white leading-tight"
                style={{ color: "#ffffff" }}
              >
                Have a Custom Glassware Drawing or Specification?
              </h3>
              <p
                className="text-xs sm:text-sm md:text-base text-slate-200 leading-relaxed font-normal"
                style={{ color: "#e2e8f0" }}
              >
                Our engineering team fabricates specialized borosilicate and quartz items according to your exact CAD sketches, technical blueprints, or physical samples.
              </p>
            </div>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#ff7522] to-[#e65e0d] hover:from-[#ff853d] hover:to-[#ff7522] text-white text-xs sm:text-sm uppercase font-bold tracking-wider whitespace-nowrap w-full sm:w-auto text-center shadow-xl shadow-orange-950/25 hover:scale-105 active:scale-95 transition-all cursor-pointer relative z-10"
            >
              <span>Submit Custom Drawing</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
