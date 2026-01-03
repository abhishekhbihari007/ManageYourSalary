import type { Metadata } from "next";
import { getCalculatorMetadata } from "@/lib/seo-meta";

export const metadata: Metadata = getCalculatorMetadata("health-insurance");

export default function HealthInsuranceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

