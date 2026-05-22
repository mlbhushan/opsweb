import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SiteHeader } from "@/components/sections/site-header";
import { SiteFooter } from "@/components/sections/site-footer";
import { PageBanner } from "@/components/sections/page-banner";
import { Container } from "@/components/ui/container";
import { CareerForm } from "./career-form";
import { Globe, TrendingUp, Heart } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Apply - Careers",
  description:
    "Apply to join the OpsFlo team. We're building the execution layer for oilfield operations.",
  path: "/careers/apply",
});

const PERKS = [
  { icon: Globe, text: "Fully remote, India-based team" },
  { icon: TrendingUp, text: "High-growth environment with real impact" },
  { icon: Heart, text: "Competitive compensation and benefits" },
];

export default async function CareerApplyPage({
  searchParams,
}: {
  searchParams: Promise<{ role?: string }>;
}) {
  const { role } = await searchParams;

  return (
    <>
      <SiteHeader />
      <PageBanner title="Apply" />
      <main className="flex-1">
        <section className="section">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
              {/* Left: Context */}
              <div className="flex flex-col justify-center">
                <p className="eyebrow mb-4">Join Our Team</p>
                <h1 className="heading-lg">
                  Build software that{" "}
                  <span className="text-[var(--color-green-600)]">moves the real world.</span>
                </h1>
                <p className="mt-5 text-lg text-[var(--color-text-muted)] leading-relaxed">
                  At OpsFlo, your code powers field operations for hundreds of energy companies. 
                  Every feature you ship has measurable impact on revenue captured, jobs completed, and crews empowered.
                </p>

                <div className="mt-10 space-y-4">
                  {PERKS.map((p) => {
                    const Icon = p.icon;
                    return (
                      <div key={p.text} className="flex items-center gap-4">
                        <div className="h-10 w-10 shrink-0 rounded-xl bg-[var(--color-green-50)] flex items-center justify-center">
                          <Icon className="h-5 w-5 text-[var(--color-green-600)]" />
                        </div>
                        <span className="text-sm font-medium text-[var(--color-navy-900)]">
                          {p.text}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-12 p-6 rounded-2xl bg-[var(--color-navy-50)] border border-[var(--color-navy-100)]">
                  <p className="text-sm font-bold text-[var(--color-navy-900)] mb-1">
                    Our hiring process
                  </p>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                    Application review (3-5 days) → Intro call → Technical / domain interview → Team fit → Offer. 
                    We respect your time and move fast.
                  </p>
                </div>
              </div>

              {/* Right: Form */}
              <div className="relative">
                <div className="surface-card">
                  <CareerForm preselectedRole={role} />
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
