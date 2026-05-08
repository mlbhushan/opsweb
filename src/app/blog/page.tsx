import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  User, MessageCircle, Folder, Pin, Calendar,
  Search, ArrowRight, ChevronRight, Tag,
} from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { SiteHeader } from "@/components/sections/site-header";
import { SiteFooter } from "@/components/sections/site-footer";
import { PageBanner } from "@/components/sections/page-banner";
import { Container } from "@/components/ui/container";
import { sanityFetch } from "@/sanity/lib/fetch";
import { BLOG_POSTS_QUERY } from "@/sanity/lib/queries";
import { BLOG_POSTS } from "@/lib/content/blog";

export const metadata: Metadata = buildMetadata({
  title: "Blog",
  description:
    "Insights on field operations, revenue optimization, predictive maintenance, and digital transformation for oilfield services companies.",
  path: "/blog",
});

type SanityPost = {
  _id: string;
  title: string;
  slug: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string | null;
  imageAlt: string | null;
};

const CATEGORY_COLORS: Record<string, string> = {
  "Revenue": "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Compliance": "bg-amber-50 text-amber-700 border-amber-200",
  "Maintenance": "bg-blue-50 text-blue-700 border-blue-200",
  "Operations": "bg-purple-50 text-purple-700 border-purple-200",
  "Industry": "bg-rose-50 text-rose-700 border-rose-200",
  "Innovation": "bg-indigo-50 text-indigo-700 border-indigo-200",
};

const CATEGORIES = [
  "Revenue",
  "Compliance",
  "Maintenance",
  "Operations",
  "Industry",
  "Innovation",
];

const TAGS = [
  "Field Ticketing",
  "Predictive Maintenance",
  "Revenue Leakage",
  "HSE",
  "Digital Transformation",
  "Inspections",
  "Billing",
  "Oilfield",
];

export default async function BlogPage() {
  const sanityPosts = await sanityFetch<SanityPost[]>({
    query: BLOG_POSTS_QUERY,
    tags: ["blogPost"],
  });

  const posts =
    sanityPosts.length > 0
      ? sanityPosts.map((p) => ({
          slug: p.slug,
          title: p.title,
          category: p.category,
          author: p.author,
          date: p.date,
          readTime: p.readTime || "",
          excerpt: p.excerpt,
          image: p.image || "/images/blog/placeholder.jpg",
        }))
      : BLOG_POSTS.map((p) => ({
          slug: p.slug,
          title: p.title,
          category: p.category,
          author: p.author,
          date: p.date,
          readTime: p.readTime,
          excerpt: p.excerpt,
          image: p.image,
        }));

  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <>
      <SiteHeader />
      <PageBanner title="Blog" />

      <main className="flex-1 bg-white">

        {/* ── HERO ── */}
        <section className="relative overflow-hidden border-b border-[var(--color-gray-200)]">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />
          <div className="pointer-events-none absolute right-0 bottom-0 h-[360px] w-[360px] translate-x-1/4 translate-y-1/4 rounded-full bg-[var(--color-green-500)]/8 blur-[80px]" />

          <Container className="relative z-10 py-16 md:py-20">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-navy-800)]/15 bg-white px-4 py-2 shadow-[var(--shadow-xs)]">
              <span className="flex size-2 rounded-full bg-[var(--color-green-500)]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-navy-900)]">
                Insights & Ideas
              </span>
            </div>

            <h1
              className="mb-4 text-5xl font-black uppercase leading-[0.92] tracking-tighter md:text-7xl"
              style={{ fontFamily: "'TASA Orbiter', sans-serif" }}
            >
              <span className="text-[var(--color-green-500)]">Field Ops</span>
              <br />
              <span className="text-[var(--color-navy-950)]">Intelligence.</span>
            </h1>
            <p className="max-w-xl text-base font-light leading-relaxed text-[var(--color-gray-600)] md:text-lg">
              Practical insights on revenue recovery, predictive maintenance, HSE compliance, and digital transformation for oilfield services operations leaders.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => {
                const style = CATEGORY_COLORS[cat] ?? "bg-gray-50 text-gray-600 border-gray-200";
                return (
                  <Link
                    key={cat}
                    href={`/blog?category=${cat}`}
                    className={`inline-flex items-center gap-1.5 rounded-sm border px-3 py-1.5 text-xs font-bold uppercase tracking-wide transition-all hover:opacity-80 ${style}`}
                  >
                    {cat}
                  </Link>
                );
              })}
            </div>
          </Container>
        </section>

        {/* ── MAIN CONTENT + SIDEBAR ── */}
        <section className="py-16 md:py-24 bg-[var(--color-gray-50)]/40">
          <Container>
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">

              {/* ── MAIN (posts) ── */}
              <div className="lg:col-span-8 space-y-10">

                {/* Featured post */}
                {featured && (
                  <div>
                    <div className="mb-6 flex items-center gap-3">
                      <span className="h-4 w-4 shrink-0 block bg-[var(--color-green-500)]" />
                      <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-gray-500)]">
                        Latest Post
                      </span>
                      <div className="h-px flex-1 bg-[var(--color-gray-200)]" />
                    </div>

                    <article className="group overflow-hidden border-2 border-[var(--color-navy-950)] bg-white shadow-[6px_6px_0px_0px_var(--color-green-500)] transition-shadow hover:shadow-[8px_8px_0px_0px_var(--color-green-500)]">
                      <Link href={`/blog/${featured.slug}`}>
                        <div className="relative aspect-[16/8] overflow-hidden">
                          <Image
                            src={featured.image}
                            alt={featured.title}
                            fill
                            className="object-cover transition duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy-950)]/60 to-transparent" />
                          {featured.category && (
                            <div className="absolute bottom-5 left-5">
                              <span className={`inline-block rounded-sm border px-3 py-1 text-xs font-bold uppercase tracking-wide ${CATEGORY_COLORS[featured.category] ?? "bg-white text-gray-700 border-gray-200"}`}>
                                {featured.category}
                              </span>
                            </div>
                          )}
                        </div>

                        <div className="p-7 md:p-9">
                          <div className="mb-4 flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-wider text-[var(--color-gray-400)]">
                            <span className="flex items-center gap-1.5">
                              <User className="size-3.5 text-[var(--color-green-600)]" />
                              {featured.author || "OpsFlo Team"}
                            </span>
                            <span className="text-[var(--color-gray-300)]">/</span>
                            <span className="flex items-center gap-1.5">
                              <Calendar className="size-3.5 text-[var(--color-green-600)]" />
                              {featured.date}
                            </span>
                            {featured.readTime && (
                              <>
                                <span className="text-[var(--color-gray-300)]">/</span>
                                <span>{featured.readTime}</span>
                              </>
                            )}
                          </div>

                          <h2
                            className="mb-4 text-2xl font-black uppercase leading-tight tracking-tight text-[var(--color-navy-950)] transition-colors group-hover:text-[var(--color-navy-700)] md:text-3xl"
                            style={{ fontFamily: "'TASA Orbiter', sans-serif" }}
                          >
                            {featured.title}
                          </h2>
                          <p className="mb-6 text-sm font-light leading-relaxed text-[var(--color-gray-500)]">
                            {featured.excerpt}
                          </p>

                          <div className="inline-flex items-center gap-2 bg-[var(--color-navy-950)] px-5 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors group-hover:bg-[var(--color-green-500)] group-hover:text-[var(--color-navy-950)]">
                            Read Article
                            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>
                      </Link>
                    </article>
                  </div>
                )}

                {/* All posts */}
                {rest.length > 0 && (
                  <div>
                    <div className="mb-6 flex items-center gap-3">
                      <span className="h-4 w-4 shrink-0 block bg-[var(--color-navy-950)]" />
                      <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-gray-500)]">
                        All Posts
                      </span>
                      <div className="h-px flex-1 bg-[var(--color-gray-200)]" />
                    </div>

                    <div className="space-y-0 border-t-2 border-l-2 border-[var(--color-navy-950)]">
                      {rest.map((post) => (
                        <article
                          key={post.slug}
                          className="group overflow-hidden border-r-2 border-b-2 border-[var(--color-navy-950)] bg-white transition-colors hover:bg-[var(--color-navy-950)]"
                        >
                          <Link href={`/blog/${post.slug}`} className="flex gap-0">
                            {/* Image */}
                            <div className="relative hidden w-40 shrink-0 sm:block">
                              <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover transition duration-500 group-hover:scale-105"
                              />
                            </div>

                            {/* Content */}
                            <div className="flex-1 p-6 md:p-7">
                              <div className="mb-3 flex flex-wrap items-center gap-3">
                                {post.category && (
                                  <span className={`rounded-sm border px-2 py-0.5 text-xs font-bold uppercase tracking-wide ${CATEGORY_COLORS[post.category] ?? "bg-gray-50 text-gray-700 border-gray-200"}`}>
                                    {post.category}
                                  </span>
                                )}
                                <span className="flex items-center gap-1 text-xs font-medium text-[var(--color-gray-400)] group-hover:text-[var(--color-gray-500)] transition-colors">
                                  <Calendar className="size-3" /> {post.date}
                                </span>
                                {post.readTime && (
                                  <span className="text-xs text-[var(--color-gray-400)] group-hover:text-[var(--color-gray-500)] transition-colors">
                                    {post.readTime}
                                  </span>
                                )}
                              </div>

                              <h3
                                className="mb-2 text-lg font-black uppercase leading-tight tracking-tight text-[var(--color-navy-950)] group-hover:text-white transition-colors"
                                style={{ fontFamily: "'TASA Orbiter', sans-serif" }}
                              >
                                {post.title}
                              </h3>
                              <p className="mb-4 line-clamp-2 text-sm font-light leading-relaxed text-[var(--color-gray-500)] group-hover:text-[var(--color-gray-300)] transition-colors">
                                {post.excerpt}
                              </p>

                              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-[var(--color-navy-700)] group-hover:text-[var(--color-green-400)] transition-colors">
                                <User className="size-3.5" />
                                {post.author || "OpsFlo Team"}
                              </div>
                            </div>

                            <div className="flex items-center px-4">
                              <ArrowRight className="size-5 text-[var(--color-gray-300)] group-hover:text-[var(--color-green-400)] transition-colors" />
                            </div>
                          </Link>
                        </article>
                      ))}
                    </div>
                  </div>
                )}

                {/* Inline CTA */}
                <div className="border border-[var(--color-gray-200)] bg-[var(--color-green-50)] p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-green-700)] mb-1">
                      Want more than reading?
                    </p>
                    <h3
                      className="text-xl font-black uppercase tracking-tight text-[var(--color-navy-950)]"
                      style={{ fontFamily: "'TASA Orbiter', sans-serif" }}
                    >
                      Apply These Ideas to Your Operation
                    </h3>
                    <p className="mt-1 text-sm font-light text-[var(--color-gray-600)]">
                      15 minutes with our team takes any topic from this blog and maps it to your specific workflow.
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="group shrink-0 inline-flex items-center gap-3 bg-[var(--color-navy-950)] px-6 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-[var(--color-green-500)] hover:text-[var(--color-navy-950)]"
                  >
                    Book a Demo
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* ── SIDEBAR ── */}
              <aside className="lg:col-span-4 space-y-8">

                {/* Search */}
                <div className="bg-white border border-[var(--color-gray-200)] p-8">
                  <form className="relative" action="/blog">
                    <input
                      name="q"
                      type="text"
                      placeholder="Search articles..."
                      className="w-full border-2 border-[var(--color-gray-200)] bg-[var(--color-gray-50)] py-4 pl-5 pr-14 text-sm font-light focus:border-[var(--color-navy-950)] focus:outline-none transition-colors"
                    />
                    <button
                      type="submit"
                      className="absolute bottom-2 right-2 top-2 flex w-12 items-center justify-center bg-[var(--color-navy-950)] text-white transition-colors hover:bg-[var(--color-green-500)] hover:text-[var(--color-navy-950)]"
                    >
                      <Search className="size-5" />
                    </button>
                  </form>
                </div>

                {/* CTA card */}
                <div className="bg-[var(--color-navy-950)] p-8 border-2 border-[var(--color-navy-950)] shadow-[6px_6px_0px_0px_var(--color-green-500)]">
                  <h3
                    className="mb-2 text-xl font-black uppercase tracking-tighter text-white leading-tight"
                    style={{ fontFamily: "'TASA Orbiter', sans-serif" }}
                  >
                    Calculate Your Revenue Gap
                  </h3>
                  <p className="mb-5 text-sm font-light leading-relaxed text-[var(--color-gray-400)]">
                    See how much revenue your operation is leaving unbilled every month.
                  </p>
                  <Link
                    href="/roi-calculator"
                    className="group mb-2 flex w-full items-center justify-between bg-[var(--color-green-500)] px-5 py-4 text-sm font-bold uppercase tracking-wider text-[var(--color-navy-950)] transition-colors hover:bg-[var(--color-green-400)]"
                  >
                    Try ROI Calculator
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                {/* Recent articles */}
                <div className="bg-white border border-[var(--color-gray-200)] p-8">
                  <h3 className="mb-6 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[var(--color-navy-950)]">
                    <Pin className="size-4 fill-[var(--color-navy-600)] text-[var(--color-navy-600)]" />
                    Recent Articles
                  </h3>
                  <div className="flex flex-col gap-5">
                    {posts.slice(0, 4).map((post) => (
                      <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="group flex items-center gap-4"
                      >
                        <div className="relative size-16 shrink-0 overflow-hidden border border-[var(--color-gray-200)]">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover transition group-hover:scale-110"
                          />
                        </div>
                        <div>
                          <h4 className="line-clamp-2 text-sm font-bold uppercase leading-tight text-[var(--color-navy-950)] transition-colors group-hover:text-[var(--color-navy-600)]" style={{ fontFamily: "'TASA Orbiter', sans-serif" }}>
                            {post.title}
                          </h4>
                          <p className="mt-1 text-xs font-medium text-[var(--color-gray-400)]">
                            {post.date}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Categories */}
                <div className="bg-white border border-[var(--color-gray-200)] p-8">
                  <h3 className="mb-6 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[var(--color-navy-950)]">
                    <Folder className="size-4 text-[var(--color-navy-600)]" />
                    Categories
                  </h3>
                  <ul className="flex flex-col space-y-1">
                    {CATEGORIES.map((cat, i) => {
                      const style = CATEGORY_COLORS[cat] ?? "bg-gray-50 text-gray-700 border-gray-200";
                      return (
                        <li key={cat}>
                          <Link
                            href={`/blog?category=${cat}`}
                            className="group flex items-center justify-between px-4 py-2.5 text-sm font-medium text-[var(--color-gray-600)] transition-all hover:bg-[var(--color-gray-50)] hover:text-[var(--color-navy-900)]"
                          >
                            <div className="flex items-center gap-3">
                              <span className={`rounded-sm border px-1.5 py-0.5 text-xs font-bold ${style}`}>
                                {cat}
                              </span>
                            </div>
                            <ChevronRight className="size-3.5 text-[var(--color-gray-300)] transition-transform group-hover:translate-x-0.5" />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Tags */}
                <div className="bg-white border border-[var(--color-gray-200)] p-8">
                  <h3 className="mb-5 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[var(--color-navy-950)]">
                    <Tag className="size-4 text-[var(--color-navy-600)]" />
                    Popular Topics
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {TAGS.map((tag) => (
                      <Link
                        key={tag}
                        href={`/blog?tag=${tag}`}
                        className="rounded-none border-2 border-[var(--color-gray-200)] bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-[var(--color-gray-500)] transition-colors hover:border-[var(--color-navy-950)] hover:bg-[var(--color-navy-950)] hover:text-white"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Guides cross-link */}
                <div className="bg-[var(--color-green-50)] border border-[var(--color-green-200)] p-8">
                  <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[var(--color-green-700)]">
                    Go deeper
                  </p>
                  <h4
                    className="mb-3 text-lg font-black uppercase tracking-tight text-[var(--color-navy-950)]"
                    style={{ fontFamily: "'TASA Orbiter', sans-serif" }}
                  >
                    Guides & Whitepapers
                  </h4>
                  <p className="mb-4 text-sm font-light text-[var(--color-gray-600)]">
                    In-depth playbooks and frameworks behind the ideas in this blog.
                  </p>
                  <Link
                    href="/resources/guides"
                    className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-[var(--color-navy-950)] underline underline-offset-4 transition-colors hover:text-[var(--color-navy-700)]"
                  >
                    View All Guides
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </aside>
            </div>
          </Container>
        </section>

        {/* ── BOTTOM CTA ── */}
        <section className="relative overflow-hidden border-t border-[var(--color-gray-200)] bg-[var(--color-navy-950)] py-20">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />
          <Container className="relative z-10">
            <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <h2
                  className="text-4xl font-black uppercase leading-[0.92] tracking-tighter md:text-5xl"
                  style={{ fontFamily: "'TASA Orbiter', sans-serif" }}
                >
                  <span className="text-[var(--color-green-500)]">From Reading</span>
                  <br />
                  <span className="text-white">To Results.</span>
                </h2>
                <p className="mt-5 text-base font-light leading-relaxed text-[var(--color-gray-400)]">
                  The insights in this blog have helped companies recover millions in unbilled revenue. See what they look like applied to your specific operation.
                </p>
              </div>
              <div className="flex w-full flex-col gap-3 lg:w-auto">
                <Link
                  href="/contact"
                  className="group flex items-center justify-between bg-[var(--color-green-500)] px-7 py-5 text-sm font-bold uppercase tracking-wide text-[var(--color-navy-950)] transition-colors hover:bg-[var(--color-green-400)]"
                >
                  <span>Get a Revenue Diagnostic</span>
                  <ArrowRight className="ml-8 size-5 transition-transform group-hover:translate-x-2" />
                </Link>
                <Link
                  href="/resources/guides"
                  className="group flex items-center justify-between border border-[var(--color-navy-700)] px-7 py-4 text-sm font-semibold uppercase tracking-wide text-[var(--color-gray-300)] transition-colors hover:border-[var(--color-gray-500)] hover:text-white"
                >
                  <span>Download a Guide</span>
                  <ArrowRight className="ml-8 size-5 transition-transform group-hover:translate-x-2" />
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
