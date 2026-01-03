import type { Metadata } from "next";
import { getCalculatorMetadata } from "@/lib/seo-meta";

export const metadata: Metadata = getCalculatorMetadata("rent-vs-own");

export default function RentVsOwnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

