import type { Metadata } from "next";
import { getCalculatorMetadata } from "@/lib/seo-meta";

export const metadata: Metadata = getCalculatorMetadata("gratuity");

export default function GratuityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

