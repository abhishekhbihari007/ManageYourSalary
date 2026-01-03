import type { Metadata } from "next";
import { getCalculatorMetadata } from "@/lib/seo-meta";

export const metadata: Metadata = getCalculatorMetadata("offer-analyzer");

export default function OfferAnalyzerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

