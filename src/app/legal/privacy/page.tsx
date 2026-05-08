import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SiteHeader } from "@/components/sections/site-header";
import { SiteFooter } from "@/components/sections/site-footer";
import { PageBanner } from "@/components/sections/page-banner";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "OpsFlo privacy policy. How we collect, use, and protect your data.",
  path: "/legal/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <PageBanner title="Privacy Policy" />
      <main className="flex-1">
        <section className="section">
          <Container className="prose prose-neutral mx-auto max-w-3xl">
            <h1>Privacy Policy</h1>
            <p className="text-sm text-[var(--text-muted)]">Last updated: January 2025</p>

            <h2>1. Information We Collect</h2>
            <p>We collect information you provide directly (name, email, company) when you request a demo, contact us, or subscribe to communications. We also collect usage data automatically through cookies and analytics.</p>

            <h2>2. How We Use Your Information</h2>
            <p>We use your information to provide and improve our services, respond to inquiries, send relevant communications, and ensure the security of our platform.</p>

            <h2>3. Data Security</h2>
            <p>We implement industry-standard security measures including 256-bit encryption at rest and in transit, SOC 2 Type II compliance, and role-based access controls.</p>

            <h2>4. Data Retention</h2>
            <p>We retain your personal information only as long as necessary to fulfill the purposes for which it was collected or as required by law.</p>

            <h2>5. Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal information. Contact us at privacy@ops-flo.com to exercise these rights.</p>

            <h2>6. Contact</h2>
            <p>For questions about this policy, contact us at privacy@ops-flo.com.</p>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
