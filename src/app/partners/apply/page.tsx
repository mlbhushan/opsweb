import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SiteHeader } from "@/components/sections/site-header";
import { SiteFooter } from "@/components/sections/site-footer";
import { PageBanner } from "@/components/sections/page-banner";
import { Container } from "@/components/ui/container";
import { PartnerForm } from "./partner-form";
import { Code, Wrench, Network } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Partner Application",
  description:
    "Apply to become an OpsFlo partner. Technology, implementation, and channel partnership opportunities for the energy sector.",
  path: "/partners/apply",
});

const BENEFITS = [
  { icon: Code, text: "Full API access and sandbox environments" },
  { icon: Wrench, text: "Dedicated partner engineering support" },
  { icon: Network, text: "Co-marketing and revenue sharing" },
];

export default function PartnerApplyPage() {
  return (
    <>
      <SiteHeader />
      <PageBanner title="Partner Application" />
      <main className="flex-1">
        <section className="section">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
              {/* Left: Context */}
              <div className="flex flex-col justify-center">
                <p className="eyebrow mb-4">Partnerships</p>
                <h1 className="heading-lg">
                  Build with us.{" "}
                  <span className="text-[var(--color-green-600)]">Grow together.</span>
                </h1>
                <p className="mt-5 text-lg text-[var(--color-text-muted)] leading-relaxed">
                  Whether you build integrations, implement solutions, or resell to the energy sector, 
                  our partnership program is designed to accelerate mutual growth.
                </p>

                <div className="mt-10 space-y-4">
                  {BENEFITS.map((b) => {
                    const Icon = b.icon;
                    return (
                      <div key={b.text} className="flex items-center gap-4">
                        <div className="h-10 w-10 shrink-0 rounded-xl bg-[var(--color-green-50)] flex items-center justify-center">
                          <Icon className="h-5 w-5 text-[var(--color-green-600)]" />
                        </div>
                        <span className="text-sm font-medium text-[var(--color-navy-900)]">
                          {b.text}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-12 p-6 rounded-2xl bg-[var(--color-navy-50)] border border-[var(--color-navy-100)]">
                  <p className="text-sm font-bold text-[var(--color-navy-900)] mb-1">
                    What happens next?
                  </p>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                    Our team reviews every application within 3 business days. 
                    Qualified partners get a one-on-one onboarding call with our partnerships lead.
                  </p>
                </div>
              </div>

              {/* Right: Form */}
              <div className="relative">
                <div className="surface-card">
                  <PartnerForm />
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
