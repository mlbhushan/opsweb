import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SiteHeader } from "@/components/sections/site-header";
import { SiteFooter } from "@/components/sections/site-footer";
import { PageBanner } from "@/components/sections/page-banner";
import { PartnersContent } from "./partners-content";

export const metadata: Metadata = buildMetadata({
  title: "Partners",
  description:
    "Join the OpsFlo partner ecosystem. Technology, implementation, and channel partners welcome.",
  path: "/partners",
});

export default function PartnersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <PageBanner title="Partners" />
      <PartnersContent />
      <SiteFooter />
    </div>
  );
}
