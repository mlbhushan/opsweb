import type { Metadata } from "next";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import { SiteHeader } from "@/components/sections/site-header";
import { SiteFooter } from "@/components/sections/site-footer";
import { PageBanner } from "@/components/sections/page-banner";
import { Container } from "@/components/ui/container";
import { CTARow } from "@/components/ui/cta-row";

export const metadata: Metadata = buildMetadata({
  title: "Partners",
  description:
    "Join the OpsFlo partner ecosystem. Technology, implementation, and channel partners welcome.",
  path: "/partners",
});

const PARTNER_TYPES = [
  {
    title: "Technology Partners",
    description:
      "Integrate your product with OpsFlo to reach thousands of oilfield service companies. Access our APIs, sandbox environments, and co-marketing opportunities.",
    cta: "Become a Tech Partner",
  },
  {
    title: "Implementation Partners",
    description:
      "Certified OpsFlo implementation partners help customers deploy, configure, and optimize the platform for their unique workflows.",
    cta: "Apply as Implementer",
  },
  {
    title: "Channel Partners",
    description:
      "Resell and distribute OpsFlo to your network. Competitive margins, sales enablement, and dedicated partner success managers.",
    cta: "Join Channel Program",
  },
];

const PARTNER_LOGOS = [
  { name: "SAP", logo: "https://logo.clearbit.com/sap.com" },
  { name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com" },
  { name: "Salesforce", logo: "https://logo.clearbit.com/salesforce.com" },
  { name: "Oracle", logo: "https://logo.clearbit.com/oracle.com" },
  { name: "Slack", logo: "https://logo.clearbit.com/slack.com" },
  { name: "QuickBooks", logo: "https://logo.clearbit.com/quickbooks.intuit.com" },
];

export default function PartnersPage() {
  return (
    <>
      <SiteHeader />
      <PageBanner title="Partners" />
      <main className="flex-1">
        {/* Hero */}
        <section className="section gradient-mesh-hero text-center">
          <Container>
            <p className="eyebrow mb-4">Partners</p>
            <h1 className="heading-xl mx-auto max-w-3xl">
              Grow With OpsFlo
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-[var(--color-text-muted)]">
              Join the ecosystem powering the next generation of oilfield
              operations.
            </p>
          </Container>
        </section>

        {/* Partner types */}
        <section className="section">
          <Container className="max-w-5xl">
            <div className="grid gap-8 lg:grid-cols-3">
              {PARTNER_TYPES.map((pt) => (
                <div key={pt.title} className="surface-card flex flex-col">
                  <h3 className="text-lg font-bold text-[var(--color-navy-900)]">
                    {pt.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm text-[var(--color-text-muted)]">
                    {pt.description}
                  </p>
                  <a
                    href="/contact"
                    className="btn-pill-lime mt-6 inline-block text-center text-sm"
                  >
                    {pt.cta}
                  </a>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Logos */}
        <section className="section-tight bg-[var(--color-bg-secondary)]">
          <Container className="max-w-4xl text-center">
            <h2 className="heading-sm mb-8">Trusted Partner Ecosystem</h2>
            <div className="flex flex-wrap items-center justify-center gap-10">
              {PARTNER_LOGOS.map((p) => (
                <div
                  key={p.name}
                  className="relative h-10 w-24 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition"
                >
                  <Image
                    src={p.logo}
                    alt={p.name}
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="section text-center">
          <Container>
            <h2 className="heading-md">Ready to Partner?</h2>
            <p className="mx-auto mt-4 max-w-lg text-[var(--color-text-muted)]">
              Talk to our partnerships team about how we can grow together.
            </p>
            <CTARow
              primary={{ label: "Apply Now", href: "/contact" }}
              secondary={{ label: "View Integrations", href: "/integrations" }}
              className="mt-8 justify-center"
            />
          </Container>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
