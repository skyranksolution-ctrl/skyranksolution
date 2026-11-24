import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogsData } from "@/data/blogs";
import { constructMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArticleSchema } from "@/lib/schema/jsonld";
import {
  Calendar,
  Clock,
  User,
  CheckCircle2,
  BookOpen,
} from "lucide-react";

export async function generateStaticParams() {
  return blogsData.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogsData.find((p) => p.slug === slug);
  if (!post) return {};

  return constructMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogsData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogsData
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  return (
    <>
      <ArticleSchema
        title={post.title}
        description={post.metaDescription}
        url={`/blog/${post.slug}`}
        publishedAt={post.publishedAt}
        updatedAt={post.updatedAt}
        authorName={post.author.name}
      />

      <Breadcrumbs
        items={[
          { label: "Blog", href: "/blog" },
          { label: post.title, href: `/blog/${post.slug}` },
        ]}
      />

      {/* Article Header */}
      <header className="py-16 md:py-20 bg-slate-950 text-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4 text-xs font-semibold">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full uppercase tracking-wider">
              {post.category}
            </span>
            <span className="text-slate-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-4 border-t border-slate-800">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-blue-600/30 text-blue-400 flex items-center justify-center font-bold">
                <User className="w-4 h-4" />
              </div>
              <div>
                <p className="font-bold text-slate-200">{post.author.name}</p>
                <p className="text-[10px] text-slate-400">{post.author.role}</p>
              </div>
            </div>

            <span className="text-slate-700">•</span>

            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>Published: {post.publishedAt}</span>
            </div>

            <span className="text-slate-700">•</span>

            <div className="flex items-center gap-1.5">
              <span>Updated: {post.updatedAt}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Article Body + Sidebar Layout */}
      <section className="py-16 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8 space-y-10">
              {/* Excerpt Lead */}
              <div className="p-6 bg-slate-50 border-l-4 border-blue-600 rounded-r-xl text-base text-slate-700 font-medium leading-relaxed italic">
                {post.excerpt}
              </div>

              {/* Sections */}
              {post.contentSections.map((sec) => (
                <section key={sec.id} id={sec.id} className="space-y-4 scroll-mt-24">
                  <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight pt-2 border-b border-slate-100 pb-2">
                    {sec.heading}
                  </h2>
                  {sec.paragraphs.map((p, i) => (
                    <p key={i} className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      {p}
                    </p>
                  ))}
                  {sec.bullets && sec.bullets.length > 0 && (
                    <ul className="space-y-2 pt-2">
                      {sec.bullets.map((b, bi) => (
                        <li key={bi} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-1" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              {/* Tags */}
              <div className="pt-8 border-t border-slate-200">
                <p className="text-xs uppercase tracking-wider font-bold text-slate-500 mb-3">Topic Tags</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Article Footer CTA */}
              <div className="p-8 bg-slate-900 text-white rounded-2xl space-y-4">
                <h3 className="text-xl font-bold">Need This Implemented on Your Website?</h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  Our team can inspect your codebase, identify Core Web Vitals hurdles, and formulate an actionable roadmap.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Link
                    href="/seo-audit"
                    className="px-5 py-3 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-500 text-xs sm:text-sm text-center"
                  >
                    Get Free SEO Audit
                  </Link>
                  <Link
                    href="/talk-to-expert"
                    className="px-5 py-3 rounded-xl font-semibold text-slate-200 border border-slate-700 hover:bg-slate-800 text-xs sm:text-sm text-center"
                  >
                    Talk to an Expert
                  </Link>
                </div>
              </div>
            </div>

            {/* Sticky Sidebar: Table of Contents & Related Posts */}
            <aside className="lg:col-span-4 space-y-8">
              {/* Table of Contents */}
              <div className="sticky top-28 bg-slate-50 border border-slate-200 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-200">
                  <BookOpen className="w-4 h-4 text-blue-600" />
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                    Table of Contents
                  </h3>
                </div>
                <nav className="space-y-2 text-xs">
                  {post.tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block text-slate-600 hover:text-blue-600 transition-colors line-clamp-1 py-1"
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Related Posts */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 pb-2 border-b border-slate-200">
                  Related Insights
                </h3>
                <div className="space-y-4">
                  {relatedPosts.map((rp) => (
                    <div key={rp.slug} className="space-y-1">
                      <span className="text-[10px] font-bold text-blue-600 uppercase">{rp.category}</span>
                      <h4 className="text-xs font-bold text-slate-900 hover:text-blue-600 leading-snug">
                        <Link href={`/blog/${rp.slug}`}>{rp.title}</Link>
                      </h4>
                      <p className="text-[11px] text-slate-500">{rp.readTime}</p>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
