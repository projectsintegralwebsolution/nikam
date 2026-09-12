import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, User, Clock, ArrowLeft, ArrowRight, Share2 } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { BLOG_POSTS } from "@/data/products";

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Breadcrumb
        title={post.title}
        subtitle={`${post.date} | By ${post.author}`}
        items={[{ label: "Blogs", href: "/blogs" }, { label: "Article" }]}
      />

      <article className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#ff7522] hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </Link>

          {/* Article Header Meta */}
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-gray-500 pb-6 border-b border-gray-100 mb-8">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#ff7522]" />
              <span>{post.date}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-[#ff7522]" />
              <span>{post.author}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#ff7522]" />
              <span>{post.readTime}</span>
            </span>
            <span className="bg-orange-100 text-[#ff7522] px-3 py-1 rounded-full text-xs font-bold">
              {post.category}
            </span>
          </div>

          {/* Article Featured Image */}
          <div className="relative h-56 sm:h-80 md:h-96 w-full bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 mb-8 sm:mb-10 p-4 sm:p-6 flex items-center justify-center">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-contain p-6"
              priority
            />
          </div>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6 text-sm sm:text-base">
            <p className="text-lg text-gray-800 font-medium leading-relaxed">
              {post.excerpt}
            </p>

            <h3 className="text-2xl font-bold text-[#121315] font-heading mt-8">
              The Science of Quality Laboratory Manufacturing
            </h3>
            <p>
              In analytical chemistry and pharmaceutical testing, volumetric accuracy and chemical inertness are non-negotiable parameters. Minor imperfections or leaching from lower grade soda-lime glass can distort spectral baselines, catalyze unwanted degradation, or invalidate months of clinical trials.
            </p>

            <h4 className="text-xl font-bold text-[#121315] font-heading mt-6">
              Thermal and Hydrolytic Resistance
            </h4>
            <p>
              Borosilicate 3.3 glass features a high proportion of silica (approx. 81%) and boric oxide (approx. 13%), yielding an extremely low linear coefficient of thermal expansion of approximately 3.3 × 10⁻⁶ K⁻¹. This allows it to withstand extreme temperature differentials and direct flame heating without cracking.
            </p>

            <div className="p-6 bg-orange-50 border-l-4 border-[#ff7522] rounded-r-xl my-8">
              <p className="font-semibold text-gray-900 m-0">
                &ldquo;Every piece of laboratory glassware manufactured at Nikam Scientific is stress-relieved in automated annealing lehrs to eliminate residual thermal stress.&rdquo;
              </p>
            </div>

            <h4 className="text-xl font-bold text-[#121315] font-heading mt-6">
              Maintenance and Preserving Calibration
            </h4>
            <p>
              To maintain Class A certification across decades of use, volumetric instruments must never be subjected to temperatures exceeding 250°C during cleaning, nor exposed to concentrated hydrofluoric acid or hot concentrated phosphoric acid.
            </p>
          </div>

          {/* CTA Banner */}
          <div className="mt-16 p-8 bg-[#021330] rounded-2xl text-white text-center">
            <h3 className="text-2xl font-bold font-heading mb-2 text-white">
              Have Technical Questions Regarding Glassware Selection?
            </h3>
            <p className="text-gray-300 text-sm max-w-xl mx-auto mb-6">
              Our engineering team provides comprehensive consultation on glass specifications, joint sizes, and custom setups.
            </p>
            <Link href="/contact-us" className="btn-primary">
              <span>Consult Our Technical Team</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
