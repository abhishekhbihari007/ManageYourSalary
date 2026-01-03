import type { Metadata } from "next";
import { getCalculatorMetadata } from "@/lib/seo-meta";

export const metadata: Metadata = getCalculatorMetadata("epf-calculator");

export default function EPFLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

