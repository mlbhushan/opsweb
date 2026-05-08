import type { Metadata } from "next";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import { SiteHeader } from "@/components/sections/site-header";
import { SiteFooter } from "@/components/sections/site-footer";
import { PageBanner } from "@/components/sections/page-banner";
import { ContactForm } from "./contact-form";
import { CONTACT } from "@/lib/content/contact";
import { Container } from "@/components/ui/container";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "See how OpsFlo ensures every field operation is completed, validated, and billed. Get a personalized 15-minute diagnostic.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <PageBanner title="Contact" />
      <main className="flex-1">
        <section className="section">
          <Container>
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Left: form */}
              <div>
                <p className="eyebrow mb-4">{CONTACT.eyebrow}</p>
                <h1 className="heading-lg">{CONTACT.headline}</h1>
                <p className="mt-4 text-[var(--color-text-muted)]">{CONTACT.body}</p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>

              {/* Right: expectations */}
              <div className="flex flex-col justify-center gap-6">
                {/* Trust image */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
                    alt="Field operations team using OpsFlo"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="surface-card">
                  <h3 className="text-lg font-semibold text-[var(--color-navy-900)]">
                    What to expect
                  </h3>
                  <ul className="mt-5 space-y-4">
                    {CONTACT.expectations.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-green-450)]" />
                        <span className="text-sm text-[var(--color-text-muted)]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="surface-card bg-[var(--color-bg-secondary)]">
                  <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-text-muted)]">
                    Trusted by
                  </p>
                  <p className="mt-2 text-2xl font-bold text-[var(--color-navy-900)]">
                    500+ field operations teams
                  </p>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                    across oilfield services, equipment rental, and fluid hauling
                  </p>
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
