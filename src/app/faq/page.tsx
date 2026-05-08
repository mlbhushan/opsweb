import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SiteHeader } from "@/components/sections/site-header";
import { SiteFooter } from "@/components/sections/site-footer";
import { PageBanner } from "@/components/sections/page-banner";
import { FAQClient } from "./faq-client";

export const metadata: Metadata = buildMetadata({
  title: "FAQ",
  description:
    "Frequently asked questions about OpsFlo — implementation timelines, offline capabilities, integrations, security, pricing, and ROI expectations.",
  path: "/faq",
});

export default function FAQPage() {
  return (
    <>
      <SiteHeader />
      <PageBanner title="FAQ" />
      <main className="flex-1 bg-white">
        <FAQClient />
      </main>
      <SiteFooter />
    </>
  );
}
