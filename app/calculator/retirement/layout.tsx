import type { Metadata } from "next";
import { getCalculatorMetadata } from "@/lib/seo-meta";

export const metadata: Metadata = getCalculatorMetadata("retirement-planner");

export default function RetirementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

