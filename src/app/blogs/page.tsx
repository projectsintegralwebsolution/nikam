import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { BLOG_POSTS } from "@/data/products";
import JsonLd from "@/components/seo/JsonLd";
import { CORE_PAGES_SEO, getBlogsSchema } from "@/data/corePagesSeo";

export const metadata: Metadata = {
  title: CORE_PAGES_SEO.blogs.title,
  description: CORE_PAGES_SEO.blogs.description,
  keywords: CORE_PAGES_SEO.blogs.supportiveKeywords,
  alternates: {
    canonical: CORE_PAGES_SEO.blogs.canonical,
  },
  openGraph: {
    title: CORE_PAGES_SEO.blogs.title,
    description: CORE_PAGES_SEO.blogs.description,
    url: CORE_PAGES_SEO.blogs.canonical,
    type: CORE_PAGES_SEO.blogs.ogType,
    images: [
      {
        url: CORE_PAGES_SEO.blogs.ogImage,
        width: 1200,
        height: 630,
        alt: "Nikam Scientific - Scientific Glassware Blog & Technical Knowledge Base",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: CORE_PAGES_SEO.blogs.title,
    description: CORE_PAGES_SEO.blogs.description,
    images: [CORE_PAGES_SEO.blogs.ogImage],
  },
};

export default function BlogsPage() {
  return (
    <>
      <JsonLd data={getBlogsSchema()} />
      <Breadcrumb
        title="Blogs"
        bgImage="/demo-2/images/banners/about-banner1.jpg"
      />

      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10 sm:mb-12">
            <p className="text-xs uppercase font-extrabold tracking-widest text-[#ff7522] mb-2">
              TECHNICAL INSIGHTS & KNOWLEDGE
            </p>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#121315] font-heading mb-3">
              Scientific Glassware Guides & Engineering Insights
            </h1>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Explore technical articles, calibration best practices, and material science guides on Borosilicate 3.3 laboratory glassware and chemical process scaleup authored by Nikam Scientific specialists.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md hover-lift flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 sm:h-56 w-full bg-gray-100 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-contain p-3.5 sm:p-4 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-[#ff7522] text-white text-xs font-bold px-3 py-1 rounded-md shadow">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-5 sm:p-6">
                    <div className="flex items-center gap-3 sm:gap-4 text-xs text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#ff7522]" />
                        <span>{post.date}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#ff7522]" />
                        <span>{post.readTime}</span>
                      </span>
                    </div>

                    <h2 className="text-base sm:text-lg font-bold text-[#121315] font-heading group-hover:text-[#ff7522] transition-colors line-clamp-2 mb-3">
                      <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
                    </h2>

                    <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-5 sm:p-6 pt-0 border-t border-gray-50 mt-auto">
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="text-xs font-bold text-[#ff7522] flex items-center gap-1.5 hover:gap-2 transition-all"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
