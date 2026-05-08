import { SiteHeader } from "@/components/sections/site-header";
import { SiteFooter } from "@/components/sections/site-footer";
import { PageBanner } from "@/components/sections/page-banner";
import { Container } from "@/components/ui/container";
import { CTARow } from "@/components/ui/cta-row";
import { Stat } from "@/components/ui/stat";
import Image from "next/image";

export type PainSolutionPageData = {
  bannerTitle?: string;
  eyebrow: string;
  headline: string;
  body: string;
  heroImage?: string;
  stats: { value: string; label: string }[];
  problem: { headline: string; body: string };
  solution: { headline: string; steps: { title: string; description: string }[] };
  outcomes: { headline: string; items: string[] };
};

export function PainSolutionPage({ data }: { data: PainSolutionPageData }) {
  return (
    <>
      <SiteHeader />
      {data.bannerTitle && (
        <PageBanner title={data.bannerTitle} />
      )}
      <main className="flex-1">
        {/* Hero */}
        <section className="section gradient-mesh-hero text-center">
          <Container>
            <p className="eyebrow mb-4">{data.eyebrow}</p>
            <h1 className="heading-xl mx-auto max-w-3xl">{data.headline}</h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-[var(--color-text-muted)]">
              {data.body}
            </p>
            {data.heroImage && (
              <div className="image-frame-hero relative mx-auto mt-12 aspect-[16/9] max-w-4xl">
                <Image
                  src={data.heroImage}
                  alt={data.headline}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </Container>
        </section>

        {/* Stats */}
        <section className="section-tight bg-[var(--color-bg-navy-tint)]">
          <Container>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {data.stats.map((s) => (
                <Stat key={s.label} value={s.value} label={s.label} />
              ))}
            </div>
          </Container>
        </section>

        {/* Problem */}
        <section className="section">
          <Container className="max-w-3xl">
            <h2 className="heading-lg">{data.problem.headline}</h2>
            <p className="mt-4 leading-relaxed text-[var(--color-text-muted)]">
              {data.problem.body}
            </p>
          </Container>
        </section>

        {/* Solution */}
        <section className="section bg-[var(--color-bg-secondary)]">
          <Container>
            <h2 className="heading-lg text-center">{data.solution.headline}</h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {data.solution.steps.map((step, i) => (
                <div key={step.title} className="surface-card">
                  <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-green-100)] text-xs font-bold text-[var(--color-green-700)]">
                    {i + 1}
                  </span>
                  <h3 className="text-base font-semibold text-[var(--color-navy-900)]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Outcomes */}
        <section className="section">
          <Container className="max-w-3xl text-center">
            <h2 className="heading-md">{data.outcomes.headline}</h2>
            <ul className="mt-8 space-y-3">
              {data.outcomes.items.map((item) => (
                <li key={item} className="text-[var(--color-text-muted)]">{item}</li>
              ))}
            </ul>
          </Container>
        </section>

        {/* CTA */}
        <section className="section-tight text-center">
          <Container>
            <h2 className="heading-md">See the Impact for Your Operations</h2>
            <CTARow
              primary={{ label: "Get a Revenue Diagnostic", href: "/contact" }}
              secondary={{ label: "View Platform", href: "/platform" }}
              className="mt-8 justify-center"
            />
          </Container>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
