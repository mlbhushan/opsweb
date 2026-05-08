import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowLeft, ArrowRight, User, MessageCircle, Folder, Pin, Calendar, Search, Quote 
} from "lucide-react";
import { PortableText } from "@portabletext/react";
import { buildMetadata } from "@/lib/seo";
import { SiteHeader } from "@/components/sections/site-header";
import { SiteFooter } from "@/components/sections/site-footer";
import { PageBanner } from "@/components/sections/page-banner";
import { Container } from "@/components/ui/container";
import { sanityFetch } from "@/sanity/lib/fetch";
import { BLOG_POST_QUERY, BLOG_SLUGS_QUERY, BLOG_POSTS_QUERY } from "@/sanity/lib/queries";
import { getBlogPost, getAllBlogSlugs, BLOG_POSTS } from "@/lib/content/blog";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const sanityResult = await sanityFetch<{ slug: string }[]>({
    query: BLOG_SLUGS_QUERY,
    tags: ["blogPost"],
  });
  if (sanityResult.length > 0) {
    return sanityResult.map((p) => ({ slug: p.slug }));
  }
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const sanityPost = await sanityFetch<{ title: string; excerpt: string } | null>({
    query: BLOG_POST_QUERY,
    params: { slug },
    tags: ["blogPost"],
  });
  if (sanityPost) {
    return buildMetadata({ title: sanityPost.title, description: sanityPost.excerpt, path: `/blog/${slug}` });
  }
  const staticPost = getBlogPost(slug);
  if (!staticPost) return {};
  return buildMetadata({ title: staticPost.title, description: staticPost.excerpt, path: `/blog/${slug}` });
}

type SanityBlogPost = {
  _id: string; title: string; slug: string; category: string;
  author: string; date: string; readTime: string; excerpt: string;
  image: string | null; imageAlt: string | null; body: unknown[];
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  
  // Fetch current post
  const sanityPostPromise = sanityFetch<SanityBlogPost | null>({
    query: BLOG_POST_QUERY, params: { slug }, tags: ["blogPost"],
  });
  
  // Fetch all posts for sidebar/recent/prev/next
  const sanityPostsPromise = sanityFetch<any[]>({
    query: BLOG_POSTS_QUERY, tags: ["blogPost"],
  });

  const [sanityPost, sanityPosts] = await Promise.all([sanityPostPromise, sanityPostsPromise]);

  const post = sanityPost || getBlogPost(slug);
  if (!post) notFound();

  const allPosts = sanityPosts.length > 0 
    ? sanityPosts.map(p => ({
        slug: p.slug, title: p.title, category: p.category, 
        author: p.author, date: p.date, image: p.image || "/images/blog/placeholder.jpg"
      }))
    : BLOG_POSTS.map(p => ({
        slug: p.slug, title: p.title, category: p.category, 
        author: p.author, date: p.date, image: p.image
      }));

  const currentIndex = allPosts.findIndex(p => p.slug === slug);
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  
  const postImage = 'imageAlt' in post ? (post.image || "/images/blog/placeholder.jpg") : post.image;
  const postTitle = post.title;
  const postCategory = post.category;
  const postAuthor = post.author;
  const postDate = post.date;

  return (
    <>
      <SiteHeader />
      <PageBanner title="Blog Classic" />
      <main className="flex-1 bg-gray-50/30 py-16 md:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left Column (Main Content) */}
            <div className="lg:col-span-8 space-y-12">
              <article className="group overflow-hidden rounded-2xl bg-white shadow-[var(--shadow-sm)]">
                {postImage && (
                  <div className="relative aspect-[16/9] w-full overflow-hidden">
                    <Image
                      src={postImage}
                      alt={postTitle}
                      fill
                      className="object-cover transition duration-500"
                    />
                  </div>
                )}

                <div className="p-8 md:p-10">
                  <div className="mb-6 flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                    <span className="flex items-center gap-1.5">
                      <User className="size-4 text-[var(--color-green-600)]" />{" "}
                      {postAuthor || "Admin"}
                    </span>
                    <span className="text-[var(--color-gray-300)]">/</span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="size-4 text-[var(--color-green-600)]" />{" "}
                      {postDate}
                    </span>
                    <span className="text-[var(--color-gray-300)]">/</span>
                    <span className="flex items-center gap-1.5">
                      <MessageCircle className="size-4 text-[var(--color-green-600)]" /> 1 Comment
                    </span>
                    <span className="text-[var(--color-gray-300)]">/</span>
                    <span className="text-[var(--color-green-600)]">{postCategory}</span>
                  </div>

                  <h1 className="mb-8 text-3xl font-bold text-[var(--color-navy-950)] md:text-4xl">
                    {postTitle}
                  </h1>

                  <div className="prose prose-lg prose-slate max-w-none text-base text-[var(--color-gray-600)] selection:bg-[var(--color-green-500)] selection:text-white">
                    {sanityPost && sanityPost.body ? (
                      <PortableText value={sanityPost.body as never} />
                    ) : (
                      <>
                        <p className="mb-6 leading-relaxed">
                          In today's rapidly evolving construction and industrial sectors, adopting innovative technologies is crucial for efficiency, safety, and sustainability. From advanced machinery to smart automation, these trends are reshaping how factories and construction projects operate.
                        </p>
                        <p className="mb-8 leading-relaxed">
                          Explore the latest construction and industrial innovations, from smart machinery to sustainable practices, shaping the future of the industry.
                        </p>

                        <blockquote className="my-10 flex items-start gap-4 rounded-xl bg-gray-50/80 p-8 shadow-sm border border-gray-100">
                          <p className="text-xl font-medium italic leading-relaxed text-[var(--color-navy-950)]">
                            "Discover how modern construction and factory technologies are transforming the industry. From automation and robotics to sustainable materials, learn the strategies that boost efficiency, safety, and sustainability in industrial projects."
                            <span className="mt-6 block text-sm font-bold uppercase tracking-wider not-italic text-[var(--color-navy-600)]">
                              KAYLEY RAIN
                            </span>
                          </p>
                          <Quote className="size-16 shrink-0 fill-[var(--color-green-50)] text-[var(--color-green-500)] opacity-60" />
                        </blockquote>

                        <h2 className="mb-6 mt-12 text-2xl font-bold text-[var(--color-navy-950)]">
                          Key Industrial Trends Covered
                        </h2>
                        <p className="mb-6 leading-relaxed">
                          Explore practical insights, industry trends, and innovative solutions shaping modern construction and factory operations. Insights and solutions for modern construction projects and industrial operations.
                        </p>

                        <ul className="mb-10 space-y-3">
                          {[
                            "Practical tips and insights for modern construction projects.",
                            "Plan, monitor, and optimize projects using virtual replicas of sites or factories.",
                            "Use eco-friendly materials and energy-efficient designs for greener projects.",
                            "Improve efficiency and reduce manual errors with AI-driven factory systems.",
                            "Enhance safety and speed with modern equipment and automation."
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="mt-1 text-[var(--color-green-600)]">✓</span>
                              <span className="text-[var(--color-gray-600)]">{item}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="my-10 overflow-hidden rounded-xl">
                          <Image src="/images/services/services-3.jpg" alt="Secondary image" width={800} height={400} className="w-full object-cover" />
                        </div>

                        <h2 className="mb-6 mt-12 text-2xl font-bold text-[var(--color-navy-950)]">
                          Challenges in the Industry
                        </h2>
                        <p className="mb-6 leading-relaxed">
                          The construction and industrial sectors face a variety of complex challenges that can impact productivity, cost, and safety. Companies often struggle with labor shortages, skill gaps, and high turnover, which make project timelines harder to meet. Rising costs of materials and machinery put additional pressure on budgets, while maintaining safety standards in hazardous work environments remains a constant concern.
                        </p>
                        
                        {"body" in post && Array.isArray(post.body) && (post.body as string[]).map((paragraph, i) => {
                          if (paragraph.startsWith("## ")) return <h2 key={i} className="mt-10 mb-4 text-2xl font-bold text-[var(--color-navy-950)]">{paragraph.replace("## ", "")}</h2>;
                          return <p key={i} className="mb-4 leading-relaxed text-[var(--color-gray-600)]">{paragraph}</p>;
                        })}
                      </>
                    )}
                  </div>

                  {/* Tags */}
                  <div className="mt-12 flex items-center gap-4 border-t border-[var(--color-gray-200)] pt-8">
                    <span className="text-sm font-semibold text-[var(--color-gray-600)]">Tags:</span>
                    <div className="flex gap-2">
                      {["Construction", "Industry"].map((tag) => (
                        <Link
                          key={tag}
                          href={`/blog?tag=${tag}`}
                          className="rounded border border-[var(--color-gray-200)] px-3 py-1.5 text-xs font-semibold text-[var(--color-gray-600)] transition hover:border-[var(--color-navy-600)] hover:text-[var(--color-navy-600)]"
                        >
                          {tag}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Previous Post */}
                  {prevPost && (
                    <div className="mt-8 border-t border-[var(--color-gray-200)] pt-8">
                      <Link href={`/blog/${prevPost.slug}`} className="group inline-flex items-center gap-3">
                        <span className="flex size-10 items-center justify-center rounded-full bg-[var(--color-green-600)] text-white transition hover:bg-[var(--color-navy-600)]">
                          <ArrowLeft className="size-4" />
                        </span>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-navy-950)]">Previous</p>
                          <p className="mt-1 font-semibold text-[var(--color-navy-900)] transition group-hover:text-[var(--color-navy-600)]">{prevPost.title}</p>
                        </div>
                      </Link>
                    </div>
                  )}

                  {/* Comments Section */}
                  <div className="mt-16">
                    <h3 className="mb-8 text-2xl font-bold text-[var(--color-navy-950)]">
                      One Reply on "{postTitle}"
                    </h3>
                    
                    <div className="flex gap-4 rounded-xl border border-[var(--color-gray-200)] p-6 md:p-8">
                      <div className="size-16 shrink-0 overflow-hidden rounded-full bg-[var(--color-gray-200)]">
                        <div className="flex size-full items-center justify-center text-[var(--color-gray-400)]">
                          <User className="size-8" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="mb-2 flex items-center justify-between">
                          <h4 className="font-bold text-[var(--color-navy-950)]">Payton Morris</h4>
                          <span className="text-xs text-[var(--color-text-muted)]">December 4, 2025 at 7:13 am</span>
                        </div>
                        <p className="text-sm leading-relaxed text-[var(--color-gray-600)]">
                          Great insights! The construction and manufacturing sectors are evolving rapidly, and it's encouraging to see how technology, safety innovations, and sustainable practices are shaping the future of the industry. Your points on streamlining operations and improving project efficiency really resonate - especially as more companies adopt digital tools and automation to stay competitive. Looking forward to more content like this that highlights both challenges and forward-thinking solutions within the industrial landscape.
                        </p>
                        <button className="btn-pill-lime mt-4 inline-flex h-8 px-4 text-xs">
                          Reply
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Comment Form */}
                  <div className="mt-12 rounded-xl border border-[var(--color-gray-100)] bg-[var(--color-gray-50)] p-6 md:p-10">
                    <h3 className="mb-4 text-2xl font-bold text-[var(--color-navy-950)]">Leave a Reply</h3>
                    <p className="mb-8 text-sm text-[var(--color-text-muted)]">Your email address will not be published. Required fields are marked *</p>
                    
                    <form className="space-y-6">
                      <div>
                        <label className="mb-2 block text-sm font-medium text-[var(--color-gray-700)]">Comment *</label>
                        <textarea rows={5} className="w-full rounded-md border border-[var(--color-gray-200)] bg-white p-3 focus:border-[var(--color-green-500)] focus:outline-none focus:ring-1 focus:ring-[var(--color-green-500)]"></textarea>
                      </div>
                      <div className="grid gap-6 md:grid-cols-2">
                        <div>
                          <label className="mb-2 block text-sm font-medium text-[var(--color-gray-700)]">Name *</label>
                          <input type="text" className="w-full rounded-md border border-[var(--color-gray-200)] bg-white p-3 focus:border-[var(--color-green-500)] focus:outline-none focus:ring-1 focus:ring-[var(--color-green-500)]" />
                        </div>
                        <div>
                          <label className="mb-2 block text-sm font-medium text-[var(--color-gray-700)]">Email *</label>
                          <input type="email" className="w-full rounded-md border border-[var(--color-gray-200)] bg-white p-3 focus:border-[var(--color-green-500)] focus:outline-none focus:ring-1 focus:ring-[var(--color-green-500)]" />
                        </div>
                      </div>
                      <div>
                        <label className="mb-2 block text-sm font-medium text-[var(--color-gray-700)]">Website</label>
                        <input type="url" className="w-full rounded-md border border-[var(--color-gray-200)] bg-white p-3 focus:border-[var(--color-green-500)] focus:outline-none focus:ring-1 focus:ring-[var(--color-green-500)]" />
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" id="save-info" className="rounded border-[var(--color-gray-200)] text-[var(--color-green-600)] focus:ring-[var(--color-green-500)]" />
                        <label htmlFor="save-info" className="text-sm text-[var(--color-text-muted)]">Save my name, email, and website in this browser for the next time I comment.</label>
                      </div>
                      <button type="submit" className="btn-pill-lime mt-4 border-none py-3 h-auto">
                        Post Comment
                      </button>
                    </form>
                  </div>
                </div>
              </article>
            </div>

            {/* Right Column (Sidebar) - REUSED FROM LIST PAGE */}
            <div className="lg:col-span-4 space-y-10">
              {/* Search */}
              <div className="rounded-2xl bg-white p-8 shadow-[var(--shadow-sm)]">
                <form className="relative" action="/blog">
                  <input
                    name="q"
                    type="text"
                    placeholder="Search Here"
                    className="w-full rounded-md border border-[var(--color-gray-200)] bg-[var(--color-gray-50)] py-4 pl-5 pr-14 text-sm focus:border-[var(--color-green-500)] focus:outline-none focus:ring-1 focus:ring-[var(--color-green-500)]"
                  />
                  <button
                    type="submit"
                    className="absolute bottom-1 right-1 top-1 flex w-12 items-center justify-center rounded-md bg-[var(--color-navy-900)] text-white transition hover:bg-[var(--color-navy-800)]"
                  >
                    <Search className="size-5" />
                  </button>
                </form>
              </div>

              {/* Recent Articles */}
              <div className="rounded-2xl bg-white p-8 shadow-[var(--shadow-sm)]">
                <h3 className="mb-6 flex items-center gap-2 text-xl font-bold text-[var(--color-navy-950)]">
                  <Pin className="size-5 fill-[var(--color-navy-600)] text-[var(--color-navy-600)]" /> Recent
                  Articles
                </h3>
                <div className="flex flex-col gap-6">
                  {allPosts.slice(0, 3).map((recent) => (
                    <Link
                      key={recent.slug}
                      href={`/blog/${recent.slug}`}
                      className="group flex items-center gap-4"
                    >
                      <div className="relative size-20 shrink-0 overflow-hidden rounded-lg">
                        <Image
                          src={recent.image}
                          alt={recent.title}
                          fill
                          className="object-cover transition group-hover:scale-110"
                        />
                      </div>
                      <div>
                        <h4 className="line-clamp-2 text-sm font-bold text-[var(--color-navy-950)] transition group-hover:text-[var(--color-navy-600)]">
                          {recent.title}
                        </h4>
                        <p className="mt-1 text-xs font-medium text-[var(--color-text-muted)]">
                          {recent.date.toUpperCase()}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="rounded-2xl bg-white p-8 shadow-[var(--shadow-sm)]">
                <h3 className="mb-6 flex items-center gap-2 text-xl font-bold text-[var(--color-navy-950)]">
                  <Pin className="size-5 fill-[var(--color-navy-600)] text-[var(--color-navy-600)]" />{" "}
                  Categories
                </h3>
                <ul className="flex flex-col space-y-4">
                  {[
                    "Compliance",
                    "Construction",
                    "Engineers",
                    "Industry",
                    "Innovation",
                    "Production",
                  ].map((cat, i) => (
                    <li key={cat}>
                      <Link
                        href={`/blog?category=${cat}`}
                        className="group flex items-center justify-between text-sm font-semibold text-[var(--color-text-muted)] transition hover:text-[var(--color-navy-600)]"
                      >
                        <span className="flex items-center gap-3">
                          <Folder className="size-4 fill-[var(--color-green-300)] text-[var(--color-green-600)]" />{" "}
                          {cat}
                        </span>
                        <span className="text-[var(--color-gray-400)] group-hover:text-[var(--color-navy-600)]">
                          ({i + 1})
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Tag */}
              <div className="rounded-2xl bg-white p-8 shadow-[var(--shadow-sm)]">
                <h3 className="mb-6 flex items-center gap-2 text-xl font-bold text-[var(--color-navy-950)]">
                  <Pin className="size-5 fill-[var(--color-navy-600)] text-[var(--color-navy-600)]" /> Popular
                  Tag
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Architecture",
                    "Automation",
                    "Construction",
                    "Factory",
                    "Industrial",
                    "Industry",
                    "Planning",
                    "Robotics",
                    "Safety",
                  ].map((tag) => (
                    <Link
                      key={tag}
                      href={`/blog?tag=${tag}`}
                      className="rounded-full border border-[var(--color-gray-200)] bg-white px-4 py-2 text-xs font-semibold text-[var(--color-text-muted)] transition hover:border-[var(--color-navy-600)] hover:bg-[var(--color-navy-600)] hover:text-white"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}