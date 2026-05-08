import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import ROICalculatorClient from "./client";

export const metadata: Metadata = buildMetadata({
  title: "ROI Calculator",
  description:
    "Calculate your revenue at risk and see what OpsFlo can recover for your field operations.",
  path: "/roi-calculator",
});

export default function ROICalculatorPage() {
  return <ROICalculatorClient />;
}
