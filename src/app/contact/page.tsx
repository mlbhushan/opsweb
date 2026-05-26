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
        <section className="section relative overflow-hidden bg-white">
          {/* Premium Background decorative elements */}
          <div className="absolute inset-0 pointer-events-none gradient-mesh-hero opacity-70"></div>
          <div className="absolute -top-40 -right-40 w-[30rem] h-[30rem] rounded-full bg-[var(--color-green-100)] opacity-40 blur-[100px] mix-blend-multiply"></div>
          <div className="absolute top-1/3 -left-20 w-[24rem] h-[24rem] rounded-full bg-[var(--color-navy-100)] opacity-50 blur-[100px] mix-blend-multiply"></div>

          <Container className="relative z-10">
            <div className="grid gap-16 lg:grid-cols-12 lg:gap-12 items-start">
              {/* Left: form (takes 7 columns) */}
              <div className="lg:col-span-7 flex flex-col gap-10 animate-fade-up">
                <div className="max-w-2xl">
                  <p className="eyebrow mb-5 inline-flex items-center gap-2 rounded-full bg-[var(--color-green-50)] px-4 py-1.5 border border-[var(--color-green-100)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-green-500)] animate-pulse"></span>
                    {CONTACT.eyebrow}
                  </p>
                  <h1 className="heading-xl bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-navy-950)] to-[var(--color-navy-600)] pb-2">{CONTACT.headline}</h1>
                  <p className="mt-5 text-[var(--color-text-muted)] body-lg leading-relaxed">
                    {CONTACT.body}
                  </p>
                </div>
                
                <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] p-8 md:p-10 border border-white/60 shadow-[0_8px_40px_-12px_rgba(8,65,130,0.1)] relative">
                  <div className="absolute inset-0 rounded-[2rem] border border-white/80 pointer-events-none"></div>
                  <ContactForm />
                </div>
              </div>

              {/* Right: expectations (takes 5 columns) */}
              <div className="lg:col-span-5 flex flex-col gap-8 lg:sticky lg:top-32 animate-fade-up" style={{ animationDelay: '150ms' }}>
                {/* Trust image with modern treatment */}
                <div className="relative aspect-[4/3] rounded-[2rem] group overflow-hidden shadow-2xl shadow-navy-900/10 border border-[var(--color-gray-100)]">
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy-950)]/80 via-[var(--color-navy-900)]/20 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-90"></div>
                  <Image
                    src="https://res.cloudinary.com/dmghhstx4/image/upload/v1779799690/pexels-alshreef-36673118_peasic.jpg"
                    alt="Field operations team using OpsFlo"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute bottom-8 left-8 right-8 z-20 transform transition-transform duration-500 group-hover:-translate-y-1">
                     <p className="text-white/80 text-xs font-bold uppercase tracking-widest mb-2">Trusted Worldwide</p>
                     <p className="text-white text-xl font-medium leading-tight">Join 500+ field operations teams across the industry</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[var(--color-navy-50)]/50 to-white backdrop-blur-md rounded-[2rem] p-8 border border-[var(--color-navy-100)] shadow-lg shadow-navy-900/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <h3 className="text-xl font-semibold text-[var(--color-navy-900)] flex items-center gap-2">
                    What to expect
                  </h3>
                  <ul className="mt-6 space-y-5">
                    {CONTACT.expectations.map((item) => (
                      <li key={item} className="flex items-start gap-4 group">
                        <div className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-white shadow-sm border border-[var(--color-green-100)] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:border-[var(--color-green-200)] group-hover:shadow-md">
                          <CheckCircle2 className="h-4 w-4 text-[var(--color-green-500)]" />
                        </div>
                        <span className="text-[var(--color-text-secondary)] leading-relaxed font-medium transition-colors group-hover:text-[var(--color-navy-900)]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
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
