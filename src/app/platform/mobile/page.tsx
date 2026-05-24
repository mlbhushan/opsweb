import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { ModulePage, type ModulePageData } from "@/components/templates/module-page";

export const metadata: Metadata = buildMetadata({
  title: "Mobile App",
  description:
    "The OpsFlo mobile app puts the full platform in your crew's hands  -  inspections, tickets, work orders, and more  -  even offline.",
  path: "/platform/mobile",
});

const data: ModulePageData = {
  bannerTitle: "Mobile App",
  eyebrow: "Platform / Mobile App",
  headline: "Everything Your Crew Needs. **In Their Pocket**.",
  body: "The OpsFlo mobile app gives field crews instant access to job details, inspections, field tickets, and work orders  -  with an interface designed for gloved hands, bright sunlight, and zero connectivity.",
  heroImage: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1400&q=80",
  problem: {
    headline: "Desktop Software **Does Not Work** in the Field",
    points: [
      "Crews cannot use complex desktop interfaces while standing next to equipment in the rain.",
      "Consumer-grade apps lack the rugged, offline-capable design field work demands.",
      "Switching between multiple apps for different tasks wastes time and causes data gaps.",
      "Small text and dense forms lead to errors, frustration, and workarounds  -  usually paper.",
    ],
  },
  howItWorks: {
    headline: "How the **Mobile App** Works",
    steps: [
      {
        title: "Field-Optimized Interface",
        description:
          "Large touch targets, high-contrast design, and minimal typing. Built for gloved hands, bright sunlight, and quick data capture.",
      },
      {
        title: "All Workflows, One App",
        description:
          "Inspections, field tickets, work orders, safety checklists, and time tracking  -  all accessible from a single app with offline capability.",
      },
      {
        title: "Instant Sync & Notifications",
        description:
          "Push notifications for new assignments and schedule changes. Data syncs automatically in the background when connectivity is available.",
      },
    ],
  },
  capabilities: [
    "Native iOS and Android apps",
    "Full offline functionality",
    "Camera integration for photo evidence",
    "Digital signature capture",
    "GPS location and route tracking",
    "Push notifications for assignments and alerts",
    "Barcode and QR code scanning",
    "Voice-to-text notes for field observations",
  ],
  differentiator: {
    headline: "Designed for the **Roughneck**, Not the Office Worker",
    body: "Every screen, every button, and every workflow in the OpsFlo mobile app was designed and tested in actual field conditions  -  not a design studio. That is why crews actually use it.",
  },
};

export default function MobilePage() {
  return <ModulePage data={data} />;
}
