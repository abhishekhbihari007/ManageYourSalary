"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";

interface BreadcrumbPath {
  label: string;
  href: string;
}

const getBreadcrumbs = (pathname: string): BreadcrumbPath[] => {
  const paths = pathname.split("/").filter(Boolean);
  const breadcrumbs: BreadcrumbPath[] = [{ label: "Home", href: "/" }];

  let currentPath = "";
  paths.forEach((path, index) => {
    currentPath += `/${path}`;
    
    // Format label
    let label = path
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    // Special cases
    if (path === "calculator") {
      label = "Calculators";
    } else if (path === "in-hand-salary") {
      label = "In-Hand Calculator";
    } else if (path === "tax-regime") {
      label = "Tax Regime Calculator";
    } else if (path === "term-insurance") {
      label = "Term Insurance Calculator";
    } else if (path === "health-insurance") {
      label = "Health Insurance Calculator";
    } else if (path === "blog") {
      label = "Articles";
    } else if (path === "learn") {
      label = "Beginner's Guide";
    }

    breadcrumbs.push({
      label,
      href: currentPath,
    });
  });

  return breadcrumbs;
};

export default function Breadcrumbs() {
  const pathname = usePathname();
  
  // Don't show breadcrumbs on home page
  if (pathname === "/") {
    return null;
  }

  const breadcrumbs = getBreadcrumbs(pathname);

  return (
    <Breadcrumb className="mb-6">
      <BreadcrumbList>
        {breadcrumbs.map((crumb, index) => {
          const isLast = index === breadcrumbs.length - 1;
          return (
            <div key={crumb.href} className="flex items-center">
              {index === 0 ? (
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href={crumb.href} className="flex items-center gap-1">
                      <Home className="h-4 w-4" />
                      <span className="sr-only">Home</span>
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
              ) : (
                <>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    {isLast ? (
                      <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink asChild>
                        <Link href={crumb.href}>{crumb.label}</Link>
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                </>
              )}
            </div>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

