import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SiteHeader } from "@/components/sections/site-header";
import { SiteFooter } from "@/components/sections/site-footer";
import { PageBanner } from "@/components/sections/page-banner";
import { SecurityContent } from "./security-content";

export const metadata: Metadata = buildMetadata({
  title: "Security & Compliance",
  description:
    "Enterprise-grade security, data encryption, and 99.95% uptime SLA. See how OpsFlo protects your oilfield data.",
  path: "/security",
});

export default function SecurityPage() {
  return (
    <>
      <SiteHeader />
      <PageBanner title="Security & Compliance" />
      <SecurityContent />
      <SiteFooter />
    </>
  );
}

