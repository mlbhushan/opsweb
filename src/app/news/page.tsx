import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SiteHeader } from "@/components/sections/site-header";
import { SiteFooter } from "@/components/sections/site-footer";
import { PageBanner } from "@/components/sections/page-banner";
import { Container } from "@/components/ui/container";
import { CTARow } from "@/components/ui/cta-row";
import { sanityFetch } from "@/sanity/lib/fetch";
import { NEWS_QUERY } from "@/sanity/lib/queries";

export const metadata: Metadata = buildMetadata({
  title: "Press & News",
  description:
    "The latest announcements, product updates, and industry news from OpsFlo.",
  path: "/news",
});

const STATIC_NEWS = [
  { date: "June 2025", title: "OpsFlo Raises $12M Series A to Expand AI-Powered Field Operations", excerpt: "Funding led by Energy Ventures will accelerate product development and expand the team across North America.", tag: "Funding" },
  { date: "May 2025", title: "OpsFlo Launches Predictive Maintenance Module for Oilfield Assets", excerpt: "New module uses IoT sensor data and machine learning to predict equipment failures up to 72 hours before they occur.", tag: "Product" },
  { date: "April 2025", title: "OpsFlo Named a Top 10 Energy Tech Startup by Oil & Gas Investor", excerpt: "Annual ranking recognizes companies transforming energy operations through technology and innovation.", tag: "Recognition" },
  { date: "March 2025", title: "OpsFlo Achieves SOC 2 Type II Certification", excerpt: "Independent audit confirms enterprise-grade security controls across the OpsFlo platform.", tag: "Security" },
  { date: "February 2025", title: "Partnership: OpsFlo and OpenInvoice Streamline Field Ticketing", excerpt: "New integration enables one-click ticket submission to the OpenInvoice network from any OpsFlo mobile device.", tag: "Partnership" },
];

type SanityNews = {
  _id: string;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  tag: string;
};

export default async function NewsPage() {
  const sanityNews = await sanityFetch<SanityNews[]>({
    query: NEWS_QUERY,
    tags: ["newsItem"],
  });

  const items = sanityNews.length > 0
    ? sanityNews.map((n) => ({ date: n.date, title: n.title, excerpt: n.excerpt, tag: n.tag }))
    : STATIC_NEWS;

  return (
    <>
      <SiteHeader />
      <PageBanner title="Press & News" />
      <main className="flex-1">
        <section className="section gradient-mesh-navy text-center">
          <Container>
            <p className="eyebrow mb-4 justify-center">Press & News</p>
            <h1 className="heading-xl mx-auto max-w-3xl">Latest From OpsFlo</h1>
            <p className="mx-auto mt-5 max-w-xl text-lg text-[var(--text-muted)]">
              Product launches, partnerships, and company milestones.
            </p>
          </Container>
        </section>

        <section className="section">
          <Container className="max-w-3xl">
            <div className="space-y-8">
              {items.map((item) => (
                <article key={item.title} className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] p-6">
                  <div className="flex items-center gap-3 text-xs">
                    <span className="rounded-full bg-[var(--brand-lime)]/15 px-2.5 py-0.5 font-semibold text-[var(--brand-navy)]">{item.tag}</span>
                    <span className="text-[var(--text-muted)]">{item.date}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-[var(--text-strong)]">{item.title}</h3>
                  <p className="mt-2 text-sm text-[var(--text-muted)]">{item.excerpt}</p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="section bg-[var(--surface-muted)] text-center">
          <Container>
            <h2 className="heading-md">Media Inquiries</h2>
            <p className="mx-auto mt-4 max-w-lg text-[var(--text-muted)]">
              For press inquiries, interview requests, or media kits, reach out to our communications team.
            </p>
            <CTARow primary={{ label: "Contact Press Team", href: "/contact" }} secondary={{ label: "About OpsFlo", href: "/about" }} className="mt-8 justify-center" />
          </Container>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}