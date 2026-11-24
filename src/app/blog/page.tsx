import type { Metadata } from "next";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { blogsData } from "@/data/blogs";
import { Clock, Calendar, ArrowRight } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "SEO Insights & Digital Marketing Blog | SkyRank Solution",
  description: "Read in-depth guides and technical articles on Core Web Vitals, AI-Powered SEO, Local Map Pack optimization, E-commerce search architecture, and white-hat link building.",
  path: "/blog",
});

export default function BlogIndexPage() {
  const categories = [
    "All Categories",
    "Technical SEO",
    "AI SEO",
    "Local SEO",
    "Website Optimization",
    "Link Building",
    "Content Marketing",
  ];

  return (
    <>
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }]} />

      <section className="py-16 md:py-24 bg-slate-950 text-white text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-400/20">
            SEO Knowledge Base
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-4 mb-4">
            Search Engineering & Digital Marketing Insights
          </h1>
          <p className="text-base text-slate-300 leading-relaxed">
            Actionable, research-backed guides written by senior SEO strategists. Master algorithm updates, Core Web Vitals, and intent-driven organic growth.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Categories Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 text-xs font-medium no-scrollbar">
            {categories.map((cat, i) => (
              <span
                key={cat}
                className={`px-3.5 py-1.5 rounded-full whitespace-nowrap cursor-pointer transition-colors ${
                  i === 0
                    ? "bg-blue-600 text-white font-bold"
                    : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogsData.map((post) => (
              <article
                key={post.slug}
                className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
              >
                <div className="p-7">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                    <span className="font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-slate-900 mb-3 leading-snug hover:text-blue-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <p className="text-xs text-slate-600 leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-600"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-7 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div className="text-slate-500 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{post.publishedAt}</span>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                  >
                    <span>Read Article</span>
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
