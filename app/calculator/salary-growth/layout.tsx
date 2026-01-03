import type { Metadata } from "next";
import { getCalculatorMetadata } from "@/lib/seo-meta";

export const metadata: Metadata = getCalculatorMetadata("salary-growth-tracker");

export default function SalaryGrowthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

