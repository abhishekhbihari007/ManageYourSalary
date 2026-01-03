import type { Metadata } from "next";
import { getCalculatorMetadata } from "@/lib/seo-meta";

export const metadata: Metadata = getCalculatorMetadata("nps");

export default function NPSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

