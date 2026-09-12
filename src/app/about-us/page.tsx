import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Target,
  Eye,
  Compass,
  Flame,
  Wrench,
  CheckCheck,
  Shield,
  Award,
  Sparkles,
  HeartHandshake,
} from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { CLIENT_LOGOS } from "@/data/products";
import JsonLd from "@/components/seo/JsonLd";
import { CORE_PAGES_SEO, getAboutSchema } from "@/data/corePagesSeo";

export const metadata: Metadata = {
  title: CORE_PAGES_SEO.about.title,
  description: CORE_PAGES_SEO.about.description,
  keywords: CORE_PAGES_SEO.about.supportiveKeywords,
  alternates: {
    canonical: CORE_PAGES_SEO.about.canonical,
  },
  openGraph: {
    title: CORE_PAGES_SEO.about.title,
    description: CORE_PAGES_SEO.about.description,
    url: CORE_PAGES_SEO.about.canonical,
    type: CORE_PAGES_SEO.about.ogType,
    images: [
      {
        url: CORE_PAGES_SEO.about.ogImage,
        width: 1200,
        height: 630,
        alt: "About Nikam Scientific - Scientific Glassware Manufacturing Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: CORE_PAGES_SEO.about.title,
    description: CORE_PAGES_SEO.about.description,
    images: [CORE_PAGES_SEO.about.ogImage],
  },
};

export default function AboutUsPage() {
  const journeyMilestones = [
    {
      year: "1996",
      desc: "Our precision laboratory glassware manufacturing journey began with a commitment to quality.",
    },
    {
      year: "2005",
      desc: "Expanded our manufacturing capabilities and introduced a wider laboratory product range.",
    },
    {
      year: "2012",
      desc: "Strengthened our quality systems and improved precision across manufacturing processes.",
    },
    {
      year: "2018",
      desc: "Introduced modern technology and advanced product calibration capabilities.",
    },
    {
      year: "2026",
      desc: "Continuing to support laboratories and industries with dependable scientific glassware solutions.",
    },
  ];

  const facilitySteps = [
    {
      step: "01",
      title: "GLASS FORMING",
      desc: "High-precision glass forming by experienced craftspeople using proven manufacturing techniques.",
      image: "/demo-2/images/about/facility-1.png",
    },
    {
      step: "02",
      title: "PRODUCT CALIBRATION",
      desc: "Each product is carefully calibrated to support accurate and consistent laboratory measurements.",
      image: "/demo-2/images/about/facility-2.png",
    },
    {
      step: "03",
      title: "QUALITY INSPECTION",
      desc: "Every item undergoes detailed inspection to ensure reliability, consistency and performance.",
      image: "/demo-2/images/about/facility-3.png",
    },
  ];

  const coreValues = [
    {
      title: "QUALITY",
      desc: "We follow consistent standards throughout every stage of the manufacturing process.",
      icon: Award,
    },
    {
      title: "INTEGRITY",
      desc: "We build lasting relationships through honest communication and responsible business practices.",
      icon: HeartHandshake,
    },
    {
      title: "INNOVATION",
      desc: "We continuously improve our products, techniques and manufacturing capabilities.",
      icon: Sparkles,
    },
    {
      title: "COMMITMENT",
      desc: "We understand customer requirements and provide responsive, dependable product support.",
      icon: Shield,
    },
  ];

  return (
    <>
      <JsonLd data={getAboutSchema()} />
      <Breadcrumb
        title="About Us"
        bgImage="/demo-2/images/banners/about-banner1.jpg"
      />

      {/* SECTION 1: OUR STORY */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Column: Authentic Live Image */}
            <div className="lg:col-span-6">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                <Image
                  src="/demo-2/images/about/about-1.png"
                  alt="Built Through Experience, Precision and Trust"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Column: Story Content */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <p className="text-xs uppercase font-extrabold tracking-widest text-[#ff7522] mb-2">
                  OUR STORY
                </p>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#121315] font-heading leading-tight">
                  Built Through Experience, Precision and Trust
                </h2>
              </div>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Established in 1996, Nikam Scientific is a trusted scientific glassware manufacturing company in India committed to precision, quality and dependable performance. From our specialized glassblowing manufacturing facility in Boisar, Palghar (Maharashtra), our skilled craftspeople and calibration specialists engineer low-expansion Borosilicate 3.3 laboratory apparatus and custom industrial process equipment compliant with ISO and DIN standards for research laboratories, pharmaceutical companies, and academic institutions across India.
              </p>

              <ul className="space-y-3 pt-2">
                <li className="flex items-center gap-3 text-sm sm:text-base font-semibold text-[#121315]">
                  <span className="w-5 h-5 rounded-full bg-orange-100 text-[#ff7522] flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </span>
                  <span>Precision laboratory glassware manufacturing</span>
                </li>
                <li className="flex items-center gap-3 text-sm sm:text-base font-semibold text-[#121315]">
                  <span className="w-5 h-5 rounded-full bg-orange-100 text-[#ff7522] flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </span>
                  <span>Experienced technicians and skilled craftspeople</span>
                </li>
                <li className="flex items-center gap-3 text-sm sm:text-base font-semibold text-[#121315]">
                  <span className="w-5 h-5 rounded-full bg-orange-100 text-[#ff7522] flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </span>
                  <span>Consistent quality and accuracy standards</span>
                </li>
              </ul>

              <div className="pt-4">
                <Link
                  href="/laboratory-glassware"
                  className="btn-primary inline-flex items-center gap-2 py-3 px-7 text-xs uppercase font-bold tracking-wider"
                >
                  <span>Explore Our Products</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHAT GUIDES US */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#f8f9fa] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-xs uppercase font-extrabold tracking-widest text-[#ff7522] mb-2">
              WHAT GUIDES US
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#121315] font-heading">
              Our Mission, Vision and Purpose
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-gray-200/80 shadow-xs hover:shadow-lg transition-all text-center">
              <div className="w-14 h-14 rounded-2xl bg-orange-50 text-[#ff7522] mx-auto flex items-center justify-center mb-6">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-extrabold text-[#121315] font-heading mb-3 uppercase tracking-wide">
                OUR MISSION
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To manufacture reliable scientific glassware that supports accurate laboratory testing, research and analysis.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-gray-200/80 shadow-xs hover:shadow-lg transition-all text-center">
              <div className="w-14 h-14 rounded-2xl bg-orange-50 text-[#ff7522] mx-auto flex items-center justify-center mb-6">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-extrabold text-[#121315] font-heading mb-3 uppercase tracking-wide">
                OUR VISION
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To become a trusted laboratory glassware provider known for precision, quality and customer satisfaction.
              </p>
            </div>

            {/* Purpose */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-gray-200/80 shadow-xs hover:shadow-lg transition-all text-center">
              <div className="w-14 h-14 rounded-2xl bg-orange-50 text-[#ff7522] mx-auto flex items-center justify-center mb-6">
                <Compass className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-extrabold text-[#121315] font-heading mb-3 uppercase tracking-wide">
                OUR PURPOSE
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To help laboratories work confidently with accurate, durable and dependable scientific products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: OUR JOURNEY */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#021330] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-xs uppercase font-extrabold tracking-widest text-[#ff7522] mb-2">
              OUR JOURNEY
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
              Three Decades of Scientific Manufacturing
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {journeyMilestones.map((m, idx) => (
              <div
                key={idx}
                className="bg-[#051c42] p-6 rounded-2xl border border-white/10 hover:border-[#ff7522] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#ff7522] font-heading mb-3">
                    {m.year}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {m.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                  Milestone #{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: OUR CRAFTSMANSHIP */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left: Content */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <p className="text-xs uppercase font-extrabold tracking-widest text-[#ff7522] mb-2">
                  OUR CRAFTSMANSHIP
                </p>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#121315] font-heading leading-tight">
                  People Behind Every Precise Product
                </h2>
              </div>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Our skilled glassblowers, technicians and quality professionals work with dedication to create precise, durable and consistent scientific glassware. From careful glass forming to final inspection, every product reflects practical experience, technical knowledge and attention to detail.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-5 rounded-xl bg-[#f8f9fa] border border-gray-100 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-orange-50 text-[#ff7522] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Flame className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#121315] font-heading mb-1">
                      Skilled Glassblowers
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Master artisans shaping high-grade borosilicate glass with uniform wall thickness and stress-relieved annealing.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-[#f8f9fa] border border-gray-100 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-orange-50 text-[#ff7522] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#121315] font-heading mb-1">
                      Experienced Technicians
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Precision calibration and assembly technicians ensuring every dimension adheres strictly to ISO and DIN tolerances.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-[#f8f9fa] border border-gray-100 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-orange-50 text-[#ff7522] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#121315] font-heading mb-1">
                      Dedicated Quality Team
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Rigorous multi-stage optical, thermal shock, and volumetric accuracy testing ensuring zero-defect scientific supplies.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Craftsmanship Image */}
            <div className="lg:col-span-6">
              <div className="relative w-full h-[360px] sm:h-[440px] lg:h-[480px] rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                <Image
                  src="/demo-2/images/about/craftsmanship.jpeg"
                  alt="Nikam Scientific Skilled Craftsmanship and Glassblowing"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: MANUFACTURING FACILITY */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#f8f9fa] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-xs uppercase font-extrabold tracking-widest text-[#ff7522] mb-2">
              MANUFACTURING FACILITY
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#121315] font-heading mb-3">
              Inside Our Manufacturing Facility
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Explore the skilled processes, specialised equipment and careful workmanship behind our laboratory glassware.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facilitySteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-xs hover:shadow-lg transition-all flex flex-col"
              >
                <div className="relative w-full aspect-[16/9] bg-gray-100">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-[#ff7522] text-white text-xs font-extrabold px-2.5 py-1 rounded">
                    {step.step}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-extrabold text-[#121315] font-heading mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: OUR CORE VALUES */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-xs uppercase font-extrabold tracking-widest text-[#ff7522] mb-2">
              OUR CORE VALUES
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#121315] font-heading">
              The Principles That Define Us
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#f8f9fa] p-8 rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-md transition-all text-center flex flex-col items-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-orange-50 text-[#ff7522] flex items-center justify-center mb-5">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-extrabold text-[#121315] font-heading mb-2">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 7: OUR CLIENTS & CTA */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#f8f9fa] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-xs uppercase font-extrabold tracking-widest text-[#ff7522] mb-2">
              OUR CLIENTS
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#121315] font-heading">
              Trusted by Laboratories and Industries Across India
            </h2>
          </div>

          {/* Client Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6 mb-16">
            {CLIENT_LOGOS.map((client, idx) => (
              <div
                key={idx}
                className="h-24 bg-white rounded-xl border border-gray-200/80 p-3 shadow-2xs hover:shadow-md hover:border-orange-200 transition-all flex items-center justify-center"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={client.image}
                    alt={client.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="bg-[#021330] rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 text-white border-4 border-[#ff7522]/30 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="space-y-2 max-w-2xl text-center md:text-left">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-heading text-white">
                Looking for Reliable Laboratory Solutions?
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-300">
                Partner with Nikam Scientific Co. for premium laboratory glassware, scientific equipment, and customized solutions designed to meet your exact requirements.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0 w-full sm:w-auto">
              <Link
                href="/contact-us"
                className="btn-primary py-3 px-6 sm:px-8 text-xs uppercase font-bold tracking-wider whitespace-nowrap w-full sm:w-auto text-center"
              >
                <span>Contact Our Experts</span>
                <ArrowRight className="w-4 h-4 ml-1 inline-block" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
