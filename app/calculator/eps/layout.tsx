import type { Metadata } from "next";
import { getCalculatorMetadata } from "@/lib/seo-meta";

export const metadata: Metadata = getCalculatorMetadata("eps-pension");

export default function EPSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

