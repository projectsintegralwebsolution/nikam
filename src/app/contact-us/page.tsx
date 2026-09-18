import React from "react";
import type { Metadata } from "next";
import { Phone, Mail, MapPin, ShieldCheck, Clock } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ContactForm from "@/components/forms/ContactForm";
import { COMPANY_INFO } from "@/data/company";
import JsonLd from "@/components/seo/JsonLd";
import { CORE_PAGES_SEO, getContactSchema } from "@/data/corePagesSeo";

export const metadata: Metadata = {
  title: CORE_PAGES_SEO.contact.title,
  description: CORE_PAGES_SEO.contact.description,
  keywords: CORE_PAGES_SEO.contact.supportiveKeywords,
  alternates: {
    canonical: CORE_PAGES_SEO.contact.canonical,
  },
  openGraph: {
    title: CORE_PAGES_SEO.contact.title,
    description: CORE_PAGES_SEO.contact.description,
    url: CORE_PAGES_SEO.contact.canonical,
    type: CORE_PAGES_SEO.contact.ogType,
    images: [
      {
        url: CORE_PAGES_SEO.contact.ogImage,
        width: 1200,
        height: 630,
        alt: "Contact Nikam Scientific - Request Laboratory Glassware Quotation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: CORE_PAGES_SEO.contact.title,
    description: CORE_PAGES_SEO.contact.description,
    images: [CORE_PAGES_SEO.contact.ogImage],
  },
};

export default function ContactUsPage() {
  return (
    <>
      <JsonLd data={getContactSchema()} />
      <Breadcrumb
        title="Contact Us"
        bgImage="/demo-2/images/banners/about-banner1.jpg"
      />

      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Contact Info Cards */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <p className="text-xs uppercase font-extrabold tracking-widest text-[#ff7522] mb-2">
                  LET&apos;S CONNECT
                </p>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#121315] font-heading mb-4">
                  Get in Touch with Our Experts
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Looking to request a commercial quotation, discuss custom borosilicate glass fabrication, or source precision laboratory equipment in India? Connect directly with our manufacturing engineers and technical sales team at our Boisar (Maharashtra) facility. We offer fast quotation turnaround, custom drawing evaluation, and reliable nationwide dispatch.
                </p>
              </div>

              {/* Info Cards */}
              <div className="space-y-4">
                {/* Phone Numbers */}
                <div className="p-6 bg-[#f8f9fa] rounded-2xl border border-gray-100 flex items-start gap-4 hover:border-orange-200 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#ff7522] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-gray-400 tracking-wider">
                      Call Us Directly
                    </span>
                    <div className="mt-1 space-y-1">
                      <a
                        href="tel:+919422685973"
                        className="block text-base font-bold text-[#121315] hover:text-[#ff7522] transition-colors"
                      >
                        +91 9422685973
                      </a>
                      <a
                        href="tel:+919359366254"
                        className="block text-sm font-semibold text-gray-700 hover:text-[#ff7522] transition-colors"
                      >
                        +91 9359366254
                      </a>
                      <a
                        href="tel:+919923285673"
                        className="block text-sm font-semibold text-gray-700 hover:text-[#ff7522] transition-colors"
                      >
                        +91 9923285673
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email Addresses */}
                <div className="p-6 bg-[#f8f9fa] rounded-2xl border border-gray-100 flex items-start gap-4 hover:border-orange-200 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#ff7522] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-gray-400 tracking-wider">
                      Mail Inquiries
                    </span>
                    <div className="mt-1 space-y-1">
                      <a
                        href="mailto:nikamscientific@gmail.com"
                        className="block text-base font-bold text-[#121315] hover:text-[#ff7522] transition-colors"
                      >
                        nikamscientific@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="p-6 bg-[#f8f9fa] rounded-2xl border border-gray-100 flex items-start gap-4 hover:border-orange-200 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#ff7522] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-gray-400 tracking-wider">
                      Company Address
                    </span>
                    <h4 className="text-base font-bold text-[#121315] mt-0.5 mb-1">
                      Salvad, Boisar (W)
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      Unit No - 18, 19 &amp; 20, Jay Ambe Nagar, Shivaji Nagar, Dist. Palghar, Salvad - 401 504, Boisar (W), Maharashtra, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="p-5 bg-orange-50/70 border border-orange-200 rounded-xl flex items-center gap-3.5">
                <Clock className="w-5 h-5 text-[#ff7522] flex-shrink-0" />
                <div className="text-xs text-gray-700">
                  <strong className="text-gray-900 block font-semibold">
                    Business Hours
                  </strong>
                  Monday &ndash; Saturday: 9:00 AM &ndash; 6:30 PM (IST)
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7 bg-[#f8f9fa] p-5 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-gray-200 shadow-xs">
              <div className="mb-5 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-[#121315] font-heading">
                  Send Email Us
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  Send us a message and we will reply you within 3 hours by email.
                </p>
              </div>

              <ContactForm />
            </div>
          </div>

          {/* Full-width Interactive Google Map Embed */}
          <div className="mt-12 sm:mt-16 rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-gray-200 shadow-lg h-[280px] sm:h-[350px] md:h-[400px]">
            <iframe
              src="https://maps.google.com/maps?q=Nikam%20Scientific%20Co.%2C%20Unit%20No.%2020%2C%20Jay%20Ambe%20Nagar%2C%20MIDC%20Tarapur%2C%20Shivaji%20Nagar%2C%20Boisar%2C%20Salwad%2C%20Maharashtra%20401506&t=m&z=14&output=embed&iwloc=near"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Nikam Scientific Co. Location"
            />
          </div>
        </div>
      </section>
    </>
  );
}
