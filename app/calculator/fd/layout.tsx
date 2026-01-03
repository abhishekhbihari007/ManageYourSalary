import type { Metadata } from "next";
import { getCalculatorMetadata } from "@/lib/seo-meta";

export const metadata: Metadata = getCalculatorMetadata("fd-calculator");

export default function FDLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

