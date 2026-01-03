import type { Metadata } from "next";
import { getCalculatorMetadata } from "@/lib/seo-meta";

export const metadata: Metadata = getCalculatorMetadata("term-insurance");

export default function TermInsuranceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

