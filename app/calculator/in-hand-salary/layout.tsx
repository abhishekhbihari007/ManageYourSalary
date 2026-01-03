import type { Metadata } from "next";
import { getCalculatorMetadata } from "@/lib/seo-meta";

export const metadata: Metadata = getCalculatorMetadata("in-hand-salary");

export default function InHandSalaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

