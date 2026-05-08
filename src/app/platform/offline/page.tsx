import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { ModulePage, type ModulePageData } from "@/components/templates/module-page";

export const metadata: Metadata = buildMetadata({
  title: "Offline-First Architecture",
  description:
    "Built for where cell towers don't reach. OpsFlo works fully offline and syncs when connectivity returns  -  zero data loss.",
  path: "/platform/offline",
});

const data: ModulePageData = {
  bannerTitle: "Offline-First Mode",
  eyebrow: "Platform / Offline-First",
  headline: "Built for Where Cell Towers Don\u2019t Reach",
  body: "OpsFlo\u2019s offline-first architecture ensures field crews can complete inspections, submit tickets, capture photos, and execute every workflow  -  even in the most remote locations. Data syncs automatically when connectivity returns.",
  heroImage: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1400&q=80",
  problem: {
    headline: "No Signal Should Never Mean No Work",
    points: [
      "Remote oilfield locations often have zero cellular coverage  -  making cloud-only tools useless.",
      "Crews resort to paper when apps fail offline, creating data gaps and re-entry work.",
      "Partial connectivity causes data corruption, lost submissions, and duplicate entries.",
      "Offline workarounds mean the office never has a real-time picture of field operations.",
    ],
  },
  howItWorks: {
    headline: "How Offline-First Works",
    steps: [
      {
        title: "Local-First Data Storage",
        description:
          "All forms, checklists, job data, and reference materials are stored locally on the device. Crews work without any connectivity dependency.",
      },
      {
        title: "Conflict-Free Sync",
        description:
          "When connectivity returns, data syncs automatically with intelligent conflict resolution. No manual uploads, no duplicate records.",
      },
      {
        title: "Full Feature Parity Offline",
        description:
          "Every feature works offline  -  inspections, field tickets, photos, signatures, GPS capture. Nothing is degraded.",
      },
    ],
  },
  capabilities: [
    "Full feature parity in offline mode",
    "Automatic background sync on reconnection",
    "Intelligent conflict resolution",
    "Local photo and signature storage",
    "Offline GPS coordinate capture",
    "Pre-cached reference data (rate cards, procedures, asset info)",
    "Sync status indicators for supervisors",
    "Bandwidth-optimized data transfer",
  ],
  differentiator: {
    headline: "Offline Is Not a Fallback. It\u2019s the Default.",
    body: "Most field apps treat offline as an afterthought. OpsFlo was designed offline-first from day one  -  because in oilfield operations, reliable connectivity is the exception, not the rule.",
  },
};

export default function OfflinePage() {
  return <ModulePage data={data} />;
}
