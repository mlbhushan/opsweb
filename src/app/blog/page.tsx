import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  User, MessageCircle, Folder, Pin, Calendar,
  Search, ArrowRight, ChevronRight, Tag,
  Briefcase, FileText, PlayCircle,
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
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[var(--color-navy-200)] bg-white px-5 py-2 shadow-sm">
              <span className="flex size-2 rounded-full bg-[var(--color-green-500)] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-navy-950)]">
                Insights & Ideas
              </span>
            </div>

            <h1
              className="mb-4 text-5xl font-black uppercase leading-[0.92] tracking-tighter md:text-7xl text-balance"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
            >
              <span className="text-[var(--color-green-500)]">Field Ops</span>
              <br />
              <span className="text-[var(--color-navy-950)]">Intelligence.</span>
            </h1>
            <p className="max-w-xl text-base font-medium leading-relaxed text-[var(--color-gray-600)] md:text-lg">
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
                      <span className="h-4 w-4 shrink-0 block bg-[var(--color-green-500)] rounded-sm" />
                      <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-gray-500)]">
                        Latest Post
                      </span>
                    </div>

                    <article className="group overflow-hidden rounded-[24px] border border-[var(--color-gray-200)] bg-white shadow-lg shadow-[var(--color-navy-900)]/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[var(--color-green-400)]">
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
                            className="mb-4 text-2xl font-extrabold leading-tight tracking-tight text-[var(--color-navy-950)] transition-colors group-hover:text-[var(--color-green-700)] md:text-3xl"
                            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                          >
                            {featured.title}
                          </h2>
                          <p className="mb-6 text-base font-medium leading-relaxed text-[var(--color-gray-600)]">
                            {featured.excerpt}
                          </p>

                          <div className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-navy-950)] px-6 py-3.5 text-sm font-bold tracking-widest text-white transition-all shadow-sm group-hover:bg-[var(--color-green-500)] group-hover:text-[var(--color-navy-950)] group-hover:shadow-md group-hover:-translate-y-0.5 uppercase">
                            Read Article
                            <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
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
                      <span className="h-4 w-4 shrink-0 block bg-[var(--color-navy-950)] rounded-sm" />
                      <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-gray-500)]">
                        All Posts
                      </span>
                    </div>

                    <div className="space-y-4">
                      {rest.map((post) => (
                        <article
                          key={post.slug}
                          className="group overflow-hidden rounded-[24px] border border-[var(--color-gray-200)] bg-white transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-[var(--color-navy-900)]/5 hover:-translate-y-1 hover:border-[var(--color-green-400)]"
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
                                className="mb-2 text-xl font-bold leading-tight tracking-tight text-[var(--color-navy-950)] transition-colors group-hover:text-[var(--color-green-700)]"
                                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                              >
                                {post.title}
                              </h3>
                              <p className="mb-4 line-clamp-2 text-sm font-medium leading-relaxed text-[var(--color-gray-500)] transition-colors">
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
                <div className="rounded-[24px] border border-[var(--color-green-200)] bg-[var(--color-green-50)] p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md transition-colors duration-500 hover:border-[var(--color-green-300)]">
                  <div>
                    <p className="text-xs font-bold tracking-widest text-[var(--color-green-700)] mb-1 uppercase">
                      Want more than reading?
                    </p>
                    <h3
                      className="text-xl font-bold tracking-tight text-[var(--color-navy-950)]"
                      style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                    >
                      Apply These Ideas to Your Operation
                    </h3>
                    <p className="mt-2 text-sm font-medium text-[var(--color-gray-600)]">
                      15 minutes with our team takes any topic from this blog and maps it to your specific workflow.
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="group/cta shrink-0 inline-flex items-center gap-3 rounded-xl bg-[var(--color-navy-950)] px-6 py-4 text-sm font-bold tracking-widest text-white transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:bg-[var(--color-green-500)] hover:text-[var(--color-navy-950)] uppercase"
                  >
                    Book a Demo
                    <ArrowRight className="size-5 transition-transform group-hover/cta:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* ── SIDEBAR ── */}
              <aside className="lg:col-span-4 space-y-6">

                {/* Search */}
                <div className="rounded-[24px] bg-white border border-[var(--color-gray-200)] p-8 shadow-sm hover:border-[var(--color-green-300)] transition-colors duration-500">
                  <form className="relative" action="/blog">
                    <input
                      name="q"
                      type="text"
                      placeholder="Search articles..."
                      className="w-full rounded-xl border border-[var(--color-gray-200)] bg-[var(--color-gray-50)] py-4 pl-5 pr-14 text-sm font-medium focus:border-[var(--color-green-400)] focus:bg-white focus:outline-none transition-all shadow-sm focus:ring-4 focus:ring-[var(--color-green-500)]/10"
                    />
                    <button
                      type="submit"
                      className="absolute bottom-1.5 right-1.5 top-1.5 flex w-12 items-center justify-center rounded-lg bg-[var(--color-navy-950)] text-white transition-all shadow-sm hover:bg-[var(--color-green-500)] hover:text-[var(--color-navy-950)]"
                    >
                      <Search className="size-5" />
                    </button>
                  </form>
                </div>

                {/* CTA card */}
                <div className="rounded-[24px] bg-white border border-[var(--color-gray-200)] p-8 shadow-xl shadow-[var(--color-navy-900)]/5 relative overflow-hidden group">
                  <div className="absolute right-0 top-0 w-32 h-32 bg-[radial-gradient(ellipse_at_center,_var(--color-green-500)_0%,_transparent_70%)] opacity-10 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none translate-x-1/3 -translate-y-1/3" />
                  <div className="relative z-10">
                    <h3
                      className="mb-2 text-2xl font-extrabold tracking-tight text-[var(--color-navy-950)] leading-tight"
                      style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                    >
                      Calculate Your Revenue Gap
                    </h3>
                    <p className="mb-8 text-sm font-medium leading-relaxed text-[var(--color-gray-600)]">
                      See how much revenue your operation is leaving unbilled every month.
                    </p>
                    <Link
                      href="/roi-calculator"
                      className="group/cta flex w-full items-center justify-between rounded-xl bg-[var(--color-navy-950)] px-5 py-4 text-sm font-bold tracking-wider text-white transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:bg-[var(--color-green-500)] hover:text-[var(--color-navy-950)] uppercase"
                    >
                      Try ROI Calculator
                      <ArrowRight className="size-4 transition-transform group-hover/cta:translate-x-1" />
                    </Link>
                  </div>
                </div>

                {/* Recent articles */}
                <div className="rounded-[24px] bg-white border border-[var(--color-gray-200)] p-8 shadow-sm hover:border-[var(--color-green-300)] transition-colors duration-500">
                  <h3 className="mb-6 flex items-center gap-2 text-sm font-bold tracking-widest text-[var(--color-navy-950)] uppercase">
                    <Pin className="size-4 fill-[var(--color-green-500)] text-[var(--color-green-500)]" />
                    Recent Articles
                  </h3>
                  <div className="flex flex-col gap-5">
                    {posts.slice(0, 4).map((post) => (
                      <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="group flex items-center gap-4"
                      >
                        <div className="relative size-16 shrink-0 overflow-hidden rounded-xl border border-[var(--color-gray-200)] shadow-sm">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover transition duration-500 group-hover:scale-110"
                          />
                        </div>
                        <div>
                          <h4 className="line-clamp-2 text-sm font-bold leading-tight text-[var(--color-navy-950)] transition-colors group-hover:text-[var(--color-green-700)]" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                            {post.title}
                          </h4>
                          <p className="mt-1 text-xs font-medium text-[var(--color-gray-500)]">
                            {post.date}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Categories */}
                <div className="rounded-[24px] bg-white border border-[var(--color-gray-200)] p-8 shadow-sm hover:border-[var(--color-green-300)] transition-colors duration-500">
                  <h3 className="mb-6 flex items-center gap-2 text-sm font-bold tracking-widest text-[var(--color-navy-950)] uppercase">
                    <Folder className="size-4 text-[var(--color-green-500)]" />
                    Categories
                  </h3>
                  <ul className="flex flex-col space-y-1">
                    {CATEGORIES.map((cat, i) => {
                      const style = CATEGORY_COLORS[cat] ?? "bg-[var(--color-gray-50)] text-[var(--color-gray-700)] border-[var(--color-gray-200)]";
                      return (
                        <li key={cat}>
                          <Link
                            href={`/blog?category=${cat}`}
                            className="group/link flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium text-[var(--color-gray-600)] transition-all hover:bg-[var(--color-gray-50)] hover:text-[var(--color-navy-900)]"
                          >
                            <div className="flex items-center gap-3">
                              <span className={`rounded-sm border px-1.5 py-0.5 text-xs font-bold ${style}`}>
                                {cat}
                              </span>
                            </div>
                            <ChevronRight className="size-4 text-[var(--color-gray-300)] transition-transform group-hover/link:translate-x-1 group-hover/link:text-[var(--color-green-500)]" />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Tags */}
                <div className="rounded-[24px] bg-white border border-[var(--color-gray-200)] p-8 shadow-sm hover:border-[var(--color-green-300)] transition-colors duration-500">
                  <h3 className="mb-5 flex items-center gap-2 text-sm font-bold tracking-widest text-[var(--color-navy-950)] uppercase">
                    <Tag className="size-4 text-[var(--color-green-500)]" />
                    Popular Topics
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {TAGS.map((tag) => (
                      <Link
                        key={tag}
                        href={`/blog?tag=${tag}`}
                        className="rounded-xl border border-[var(--color-gray-200)] bg-white px-3 py-1.5 text-xs font-bold tracking-wide text-[var(--color-gray-500)] transition-colors hover:border-[var(--color-green-400)] hover:bg-[var(--color-green-50)] hover:text-[var(--color-green-700)] uppercase shadow-sm"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Explore More Resources */}
                <div className="rounded-[24px] bg-[var(--color-gray-50)] border border-[var(--color-gray-200)] p-8 relative overflow-hidden transition-colors duration-500 group">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-[var(--color-gray-200)] group-hover:bg-[var(--color-green-500)] transition-colors duration-500" />
                  <div className="pl-2">
                    <p className="mb-2 text-xs font-bold tracking-widest text-[var(--color-green-600)] uppercase">
                      Go Deeper
                    </p>
                    <h4
                      className="mb-6 text-lg font-bold tracking-tight text-[var(--color-navy-950)]"
                      style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                    >
                      More Resources
                    </h4>
                    
                    <ul className="flex flex-col space-y-4">
                      {/* Case Studies */}
                      <li>
                        <Link href="/case-studies" className="group/res flex items-start gap-4">
                          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white border border-[var(--color-gray-200)] shadow-sm group-hover/res:border-[var(--color-green-200)] group-hover/res:bg-[var(--color-green-50)] transition-colors">
                            <Briefcase className="size-4 text-[var(--color-navy-950)] group-hover/res:text-[var(--color-green-600)]" />
                          </div>
                          <div>
                            <h5 className="text-sm font-bold text-[var(--color-navy-950)] group-hover/res:text-[var(--color-green-700)] transition-colors" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                              Case Studies
                            </h5>
                            <p className="mt-1 text-xs font-medium text-[var(--color-gray-500)]">
                              Real-world ROI and success stories.
                            </p>
                          </div>
                        </Link>
                      </li>

                      {/* Guides & Whitepapers */}
                      <li>
                        <Link href="/resources/guides" className="group/res flex items-start gap-4">
                          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white border border-[var(--color-gray-200)] shadow-sm group-hover/res:border-[var(--color-green-200)] group-hover/res:bg-[var(--color-green-50)] transition-colors">
                            <FileText className="size-4 text-[var(--color-navy-950)] group-hover/res:text-[var(--color-green-600)]" />
                          </div>
                          <div>
                            <h5 className="text-sm font-bold text-[var(--color-navy-950)] group-hover/res:text-[var(--color-green-700)] transition-colors" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                              Guides & Whitepapers
                            </h5>
                            <p className="mt-1 text-xs font-medium text-[var(--color-gray-500)]">
                              In-depth playbooks for operations.
                            </p>
                          </div>
                        </Link>
                      </li>

                      {/* Webinars */}
                      <li>
                        <Link href="/resources/webinars" className="group/res flex items-start gap-4">
                          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white border border-[var(--color-gray-200)] shadow-sm group-hover/res:border-[var(--color-green-200)] group-hover/res:bg-[var(--color-green-50)] transition-colors">
                            <PlayCircle className="size-4 text-[var(--color-navy-950)] group-hover/res:text-[var(--color-green-600)]" />
                          </div>
                          <div>
                            <h5 className="text-sm font-bold text-[var(--color-navy-950)] group-hover/res:text-[var(--color-green-700)] transition-colors" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                              On-Demand Webinars
                            </h5>
                            <p className="mt-1 text-xs font-medium text-[var(--color-gray-500)]">
                              Expert sessions and product demos.
                            </p>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
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
                  className="text-4xl font-extrabold leading-[0.92] tracking-tighter md:text-5xl text-balance"
                  style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                >
                  <span className="text-[var(--color-green-500)]">From Reading</span>
                  <br />
                  <span className="text-white">To Results.</span>
                </h2>
                <p className="mt-6 text-base font-medium leading-relaxed text-[var(--color-gray-400)]">
                  The insights in this blog have helped companies recover millions in unbilled revenue. See what they look like applied to your specific operation.
                </p>
              </div>
              <div className="flex w-full flex-col gap-3 lg:w-[380px]">
                <Link
                  href="/contact"
                  className="group/cta flex w-full items-center justify-between rounded-xl bg-[var(--color-green-500)] px-6 py-5 text-sm font-bold tracking-widest text-[var(--color-navy-950)] transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:bg-[var(--color-green-400)] uppercase"
                >
                  <span>Get a Revenue Diagnostic</span>
                  <ArrowRight className="size-5 transition-transform group-hover/cta:translate-x-1" />
                </Link>
                <Link
                  href="/resources/guides"
                  className="group/cta2 flex w-full items-center justify-between rounded-xl border border-[var(--color-navy-700)] bg-[var(--color-navy-950)] px-6 py-5 text-sm font-bold tracking-widest text-white transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:bg-[var(--color-navy-900)] uppercase"
                >
                  <span>Download a Guide</span>
                  <ArrowRight className="size-5 transition-transform group-hover/cta2:translate-x-1" />
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
