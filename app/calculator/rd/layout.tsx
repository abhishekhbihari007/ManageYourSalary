import type { Metadata } from "next";
import { getCalculatorMetadata } from "@/lib/seo-meta";

export const metadata: Metadata = getCalculatorMetadata("rd-calculator");

export default function RDLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

