import type { Metadata } from "next";
import {
  ShieldCheck,
  Lock,
  Server,
  FileCheck,
  Globe,
  Clock,
} from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { SiteHeader } from "@/components/sections/site-header";
import { SiteFooter } from "@/components/sections/site-footer";
import { PageBanner } from "@/components/sections/page-banner";
import { Container } from "@/components/ui/container";
import { CTARow } from "@/components/ui/cta-row";

export const metadata: Metadata = buildMetadata({
  title: "Security & Compliance",
  description:
    "Enterprise-grade security, SOC 2 compliance, and 99.95% uptime SLA. See how OpsFlo protects your oilfield data.",
  path: "/security",
});

const CERTIFICATIONS = [
  {
    icon: ShieldCheck,
    title: "SOC 2 Type II",
    description:
      "Independently audited controls for security, availability, and confidentiality.",
  },
  {
    icon: Lock,
    title: "AES-256 Encryption",
    description:
      "Data encrypted at rest and in transit with AES-256 and TLS 1.3.",
  },
  {
    icon: Server,
    title: "99.95% Uptime SLA",
    description:
      "Redundant infrastructure across multiple availability zones with guaranteed uptime.",
  },
  {
    icon: FileCheck,
    title: "OSHA & EPA Compliance",
    description:
      "Built-in compliance workflows for occupational safety and environmental regulations.",
  },
  {
    icon: Globe,
    title: "Data Residency",
    description:
      "Choose where your data lives. North American data centers with optional geo-fencing.",
  },
  {
    icon: Clock,
    title: "Automated Backups",
    description:
      "Point-in-time recovery with automated daily backups and 30-day retention.",
  },
];

const SECURITY_FEATURES = [
  "Role-based access control (RBAC) with granular permissions",
  "Single sign-on (SSO) via SAML 2.0 and OpenID Connect",
  "Multi-factor authentication (MFA) for all user accounts",
  "Audit logging with tamper-proof event records",
  "API authentication via OAuth 2.0 with scoped tokens",
  "Vulnerability scanning and penetration testing (annual)",
  "Incident response plan with 1-hour acknowledgment SLA",
  "Data loss prevention (DLP) policies for sensitive fields",
];

export default function SecurityPage() {
  return (
    <>
      <SiteHeader />
      <PageBanner title="Security & Compliance" />
      <main className="flex-1">
        {/* Hero */}
        <section className="section gradient-mesh-navy text-center">
          <Container>
            <p className="eyebrow mb-4 justify-center">
              Security & Compliance
            </p>
            <h1 className="heading-xl mx-auto max-w-3xl">
              Enterprise-Grade Security for the Energy Sector
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-[var(--text-muted)]">
              Your operational data is protected by industry-leading security
              controls, compliance certifications, and a dedicated security
              team.
            </p>
          </Container>
        </section>

        {/* Certifications grid */}
        <section className="section">
          <Container className="max-w-5xl">
            <h2 className="heading-md mb-10 text-center">
              Certifications & Standards
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {CERTIFICATIONS.map((cert) => {
                const Icon = cert.icon;
                return (
                  <div key={cert.title} className="surface-card">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--brand-lime)]/15">
                      <Icon className="h-6 w-6 text-[var(--brand-navy)]" />
                    </div>
                    <h3 className="text-base font-semibold text-[var(--text-strong)]">
                      {cert.title}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--text-muted)]">
                      {cert.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Security features list */}
        <section className="section bg-[var(--surface-muted)]">
          <Container className="max-w-3xl">
            <h2 className="heading-md mb-8 text-center">
              Platform Security Features
            </h2>
            <ul className="space-y-4">
              {SECURITY_FEATURES.map((feat) => (
                <li key={feat} className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-[var(--brand-lime)]" />
                  <span className="text-[var(--text-muted)]">{feat}</span>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        {/* Data architecture */}
        <section className="section">
          <Container className="max-w-3xl text-center">
            <h2 className="heading-md">Data Architecture</h2>
            <p className="mx-auto mt-4 max-w-xl text-[var(--text-muted)]">
              OpsFlo runs on a multi-tenant architecture with strict tenant
              isolation. Each customer dataset is logically separated with
              row-level security and encrypted with dedicated keys.
            </p>
          </Container>
        </section>

        {/* CTA */}
        <section className="section-tight bg-[var(--brand-navy-deep)] text-center">
          <Container>
            <h2 className="heading-md text-white">
              Questions About Security?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/70">
              Our team is happy to walk through our security posture, share
              audit reports, and discuss your specific compliance requirements.
            </p>
            <CTARow
              primary={{ label: "Talk to Security Team", href: "/contact" }}
              secondary={{ label: "Download Security Brief", href: "/contact" }}
              className="mt-8 justify-center"
            />
          </Container>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
