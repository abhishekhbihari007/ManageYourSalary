import type { Metadata } from "next";
import { getCalculatorMetadata } from "@/lib/seo-meta";

export const metadata: Metadata = getCalculatorMetadata("tax-regime");

export default function TaxRegimeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

