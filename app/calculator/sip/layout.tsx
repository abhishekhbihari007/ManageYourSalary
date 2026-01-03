import type { Metadata } from "next";
import { getCalculatorMetadata } from "@/lib/seo-meta";

export const metadata: Metadata = getCalculatorMetadata("sip-calculator");

export default function SIPLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

