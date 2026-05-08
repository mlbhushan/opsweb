import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SiteHeader } from "@/components/sections/site-header";
import { SiteFooter } from "@/components/sections/site-footer";
import { PageBanner } from "@/components/sections/page-banner";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description: "OpsFlo terms of service. The agreement governing your use of our platform.",
  path: "/legal/terms",
});

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <PageBanner title="Terms of Service" />
      <main className="flex-1">
        <section className="section">
          <Container className="prose prose-neutral mx-auto max-w-3xl">
            <h1>Terms of Service</h1>
            <p className="text-sm text-[var(--text-muted)]">Last updated: January 2025</p>

            <h2>1. Acceptance of Terms</h2>
            <p>By accessing or using OpsFlo&apos;s services, you agree to be bound by these Terms of Service and our Privacy Policy.</p>

            <h2>2. Service Description</h2>
            <p>OpsFlo provides a cloud-based operations management platform for field service companies. Features include field execution management, inspections, ticketing, scheduling, and analytics.</p>

            <h2>3. Account Responsibilities</h2>
            <p>You are responsible for maintaining the security of your account credentials and for all activities that occur under your account.</p>

            <h2>4. Data Ownership</h2>
            <p>You retain ownership of all data you input into the platform. OpsFlo will not sell, share, or use your data for purposes other than providing the service.</p>

            <h2>5. Service Level</h2>
            <p>OpsFlo commits to 99.8% uptime for Professional and Enterprise plans. See our SLA for details.</p>

            <h2>6. Termination</h2>
            <p>Either party may terminate with 30 days written notice. Upon termination, we will export your data in a standard format within 30 days.</p>

            <h2>7. Limitation of Liability</h2>
            <p>OpsFlo&apos;s liability is limited to the fees paid in the 12 months preceding the claim.</p>

            <h2>8. Contact</h2>
            <p>For questions about these terms, contact us at legal@ops-flo.com.</p>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
