import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SiteHeader } from "@/components/sections/site-header";
import { SiteFooter } from "@/components/sections/site-footer";
import { PageBanner } from "@/components/sections/page-banner";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = buildMetadata({
  title: "Service Level Agreement",
  description: "OpsFlo SLA. Our commitment to uptime, performance, and support response times.",
  path: "/legal/sla",
});

export default function SlaPage() {
  return (
    <>
      <SiteHeader />
      <PageBanner title="Service Level Agreement" />
      <main className="flex-1">
        <section className="section">
          <Container className="prose prose-neutral mx-auto max-w-3xl">
            <h1>Service Level Agreement (SLA)</h1>
            <p className="text-sm text-[var(--text-muted)]">Last updated: January 2025</p>

            <h2>1. Uptime Commitment</h2>
            <p>OpsFlo guarantees 99.8% monthly uptime for all Professional and Enterprise plans. Uptime is measured excluding scheduled maintenance windows (communicated 72 hours in advance).</p>

            <h2>2. Performance Standards</h2>
            <ul>
              <li>API response time: &lt;200ms (p95)</li>
              <li>Dashboard load time: &lt;2 seconds</li>
              <li>Mobile app sync: &lt;5 seconds on reconnection</li>
            </ul>

            <h2>3. Support Response Times</h2>
            <table>
              <thead>
                <tr><th>Severity</th><th>Starter</th><th>Professional</th><th>Enterprise</th></tr>
              </thead>
              <tbody>
                <tr><td>Critical (service down)</td><td>4 hours</td><td>1 hour</td><td>15 minutes</td></tr>
                <tr><td>High (major feature impaired)</td><td>8 hours</td><td>4 hours</td><td>1 hour</td></tr>
                <tr><td>Normal</td><td>24 hours</td><td>8 hours</td><td>4 hours</td></tr>
              </tbody>
            </table>

            <h2>4. Service Credits</h2>
            <p>If monthly uptime falls below 99.8%, customers receive service credits: 10% credit for 99.0–99.8%, 25% credit for 95.0–99.0%, 50% credit for below 95.0%.</p>

            <h2>5. Exclusions</h2>
            <p>The SLA does not apply to: scheduled maintenance, force majeure events, customer-caused issues, or beta/preview features.</p>

            <h2>6. Contact</h2>
            <p>For SLA-related inquiries, contact support@ops-flo.com.</p>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
