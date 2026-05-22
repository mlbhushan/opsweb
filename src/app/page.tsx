import { SiteHeader } from "@/components/sections/site-header";
import { SiteFooter } from "@/components/sections/site-footer";
import { Hero } from "@/components/sections/hero";
import { AllInOnePlatform } from "@/components/sections/home/all-in-one-platform";
import { PainStrip } from "@/components/sections/home/pain-strip";
import { CoreWorkflow } from "@/components/sections/home/core-workflow";
import { OutcomesGrid } from "@/components/sections/home/outcomes-grid";
import { ServicesCarousel } from "@/components/sections/home/services-carousel";
import { PlatformBento } from "@/components/sections/home/platform-bento";
import { AiIntelligence } from "@/components/sections/home/ai-intelligence";
import { PositioningWedge } from "@/components/sections/home/positioning-wedge";
import { CaseStudies } from "@/components/sections/home/case-studies";
import { SocialProof } from "@/components/sections/home/social-proof";
import { IntegrationsStrip } from "@/components/sections/home/integrations-strip";
import { RecentBlogs } from "@/components/sections/home/recent-blogs";
import { FinalCTA } from "@/components/sections/home/final-cta";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <AllInOnePlatform />
        <PainStrip />
        <CoreWorkflow />
        <OutcomesGrid />
        <ServicesCarousel />
        <PlatformBento />
        <AiIntelligence />
        <PositioningWedge />
        <CaseStudies />
        <SocialProof />
        <IntegrationsStrip />
        <RecentBlogs />
        <FinalCTA />
      </main>
      <SiteFooter />
    </>
  );
}
