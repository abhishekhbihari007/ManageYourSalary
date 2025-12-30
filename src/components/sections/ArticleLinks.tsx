"use client";

import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ArticleLink {
  title: string;
  href: string;
  category?: string;
}

interface ArticleLinksProps {
  articles?: ArticleLink[];
  calculatorType?: string; // e.g., "in-hand-salary", "epf", "tax-regime", etc.
}

// Calculator-specific article mappings
const calculatorArticles: Record<string, ArticleLink[]> = {
  "in-hand-salary": [
    {
      title: "Understanding Your Salary Structure: CTC vs In-Hand Salary",
      href: "/blog/understanding-your-salary-structure-ctc-vs-in-hand-salary",
      category: "Salary Management",
    },
    {
      title: "Tax Planning Strategies for Salaried Employees",
      href: "/blog/tax-planning-strategies-for-salaried-employees",
      category: "Tax Planning",
    },
    {
      title: "Maximizing Your Take-Home Salary: A Complete Guide",
      href: "/blog/maximizing-your-take-home-salary-complete-guide",
      category: "Financial Planning",
    },
  ],
  "tax-regime": [
    {
      title: "Old vs New Tax Regime 2024: Which One Should You Choose?",
      href: "/blog/old-vs-new-tax-regime-2024",
      category: "Tax Planning",
    },
    {
      title: "Tax Planning Strategies for Salaried Employees",
      href: "/blog/tax-planning-strategies-for-salaried-employees",
      category: "Tax Planning",
    },
    {
      title: "Maximizing Your Take-Home Salary: A Complete Guide",
      href: "/blog/maximizing-your-take-home-salary-complete-guide",
      category: "Financial Planning",
    },
  ],
  "epf": [
    {
      title: "EPF Calculator: Understanding Your Provident Fund Contributions",
      href: "/blog/epf-calculator-guide",
      category: "Retirement Planning",
    },
    {
      title: "EPF vs NPS: Which Retirement Scheme is Better for You?",
      href: "/blog/epf-vs-nps-which-is-better",
      category: "Retirement Planning",
    },
    {
      title: "Retirement Planning in India: How Much Do You Need?",
      href: "/blog/retirement-planning-india",
      category: "Retirement Planning",
    },
  ],
  "nps": [
    {
      title: "EPF vs NPS: Which Retirement Scheme is Better for You?",
      href: "/blog/epf-vs-nps-which-is-better",
      category: "Retirement Planning",
    },
    {
      title: "Retirement Planning in India: How Much Do You Need?",
      href: "/blog/retirement-planning-india",
      category: "Retirement Planning",
    },
    {
      title: "EPF Calculator: Understanding Your Provident Fund Contributions",
      href: "/blog/epf-calculator-guide",
      category: "Retirement Planning",
    },
  ],
  "gratuity": [
    {
      title: "Gratuity Calculator: How Much Will You Get?",
      href: "/blog/gratuity-calculator-explained",
      category: "Salary Management",
    },
    {
      title: "Understanding Your Salary Structure: CTC vs In-Hand Salary",
      href: "/blog/understanding-your-salary-structure-ctc-vs-in-hand-salary",
      category: "Salary Management",
    },
    {
      title: "How to Calculate Your In-Hand Salary: Complete Guide",
      href: "/blog/how-to-calculate-in-hand-salary",
      category: "Salary Management",
    },
  ],
  "retirement": [
    {
      title: "Retirement Planning in India: How Much Do You Need?",
      href: "/blog/retirement-planning-india",
      category: "Retirement Planning",
    },
    {
      title: "EPF vs NPS: Which Retirement Scheme is Better for You?",
      href: "/blog/epf-vs-nps-which-is-better",
      category: "Retirement Planning",
    },
    {
      title: "EPF Calculator: Understanding Your Provident Fund Contributions",
      href: "/blog/epf-calculator-guide",
      category: "Retirement Planning",
    },
  ],
  "term-insurance": [
    {
      title: "How Much Term Insurance Do You Really Need?",
      href: "/blog/term-insurance-coverage-calculator",
      category: "Insurance",
    },
    {
      title: "Insurance Planning: Complete Guide to Life and Health Insurance",
      href: "/blog/insurance-planning-complete-guide",
      category: "Insurance",
    },
    {
      title: "Health Insurance Planning: How Much Coverage Do You Need?",
      href: "/blog/health-insurance-planning-guide",
      category: "Insurance",
    },
  ],
  "health-insurance": [
    {
      title: "Health Insurance Planning: How Much Coverage Do You Need?",
      href: "/blog/health-insurance-planning-guide",
      category: "Insurance",
    },
    {
      title: "Insurance Planning: Complete Guide to Life and Health Insurance",
      href: "/blog/insurance-planning-complete-guide",
      category: "Insurance",
    },
    {
      title: "How Much Term Insurance Do You Really Need?",
      href: "/blog/term-insurance-coverage-calculator",
      category: "Insurance",
    },
  ],
  "salary-growth": [
    {
      title: "Salary Growth Calculator: Plan Your Career Earnings",
      href: "/blog/salary-growth-calculator-guide",
      category: "Career Planning",
    },
    {
      title: "Understanding Your Salary Structure: CTC vs In-Hand Salary",
      href: "/blog/understanding-your-salary-structure-ctc-vs-in-hand-salary",
      category: "Salary Management",
    },
    {
      title: "Maximizing Your Take-Home Salary: A Complete Guide",
      href: "/blog/maximizing-your-take-home-salary-complete-guide",
      category: "Financial Planning",
    },
  ],
  "offer-analyzer": [
    {
      title: "Job Offer Analyzer: How to Compare Multiple Offers",
      href: "/blog/offer-analyzer-comparing-job-offers",
      category: "Career Planning",
    },
    {
      title: "Understanding Your Salary Structure: CTC vs In-Hand Salary",
      href: "/blog/understanding-your-salary-structure-ctc-vs-in-hand-salary",
      category: "Salary Management",
    },
    {
      title: "Maximizing Your Take-Home Salary: A Complete Guide",
      href: "/blog/maximizing-your-take-home-salary-complete-guide",
      category: "Financial Planning",
    },
  ],
  "rd": [
    {
      title: "RD vs FD: Which Fixed Deposit Option is Better?",
      href: "/blog/rd-vs-fd-which-is-better",
      category: "Investment",
    },
    {
      title: "Maximizing Your Take-Home Salary: A Complete Guide",
      href: "/blog/maximizing-your-take-home-salary-complete-guide",
      category: "Financial Planning",
    },
    {
      title: "Retirement Planning in India: How Much Do You Need?",
      href: "/blog/retirement-planning-india",
      category: "Retirement Planning",
    },
  ],
  "fd": [
    {
      title: "RD vs FD: Which Fixed Deposit Option is Better?",
      href: "/blog/rd-vs-fd-which-is-better",
      category: "Investment",
    },
    {
      title: "Maximizing Your Take-Home Salary: A Complete Guide",
      href: "/blog/maximizing-your-take-home-salary-complete-guide",
      category: "Financial Planning",
    },
    {
      title: "Retirement Planning in India: How Much Do You Need?",
      href: "/blog/retirement-planning-india",
      category: "Retirement Planning",
    },
  ],
  "rent-vs-own": [
    {
      title: "Rent vs Own: Should You Buy a Home or Continue Renting?",
      href: "/blog/rent-vs-own-home-decision",
      category: "Financial Planning",
    },
    {
      title: "Maximizing Your Take-Home Salary: A Complete Guide",
      href: "/blog/maximizing-your-take-home-salary-complete-guide",
      category: "Financial Planning",
    },
    {
      title: "Tax Planning Strategies for Salaried Employees",
      href: "/blog/tax-planning-strategies-for-salaried-employees",
      category: "Tax Planning",
    },
  ],
  "eps": [
    {
      title: "EPF Calculator: Understanding Your Provident Fund Contributions",
      href: "/blog/epf-calculator-guide",
      category: "Retirement Planning",
    },
    {
      title: "EPF vs NPS: Which Retirement Scheme is Better for You?",
      href: "/blog/epf-vs-nps-which-is-better",
      category: "Retirement Planning",
    },
    {
      title: "Retirement Planning in India: How Much Do You Need?",
      href: "/blog/retirement-planning-india",
      category: "Retirement Planning",
    },
  ],
  "sip": [
    {
      title: "SIP Investment Guide 2024: Start Your Wealth Journey",
      href: "/blog/sip-investment-guide-2024",
      category: "Investment",
    },
    {
      title: "Maximizing Your Take-Home Salary: A Complete Guide",
      href: "/blog/maximizing-your-take-home-salary-complete-guide",
      category: "Financial Planning",
    },
    {
      title: "Retirement Planning in India: How Much Do You Need?",
      href: "/blog/retirement-planning-india",
      category: "Retirement Planning",
    },
  ],
};

// Default articles - fallback if calculator type not found
const defaultArticles: ArticleLink[] = [
  {
    title: "Understanding Your Salary Structure: CTC vs In-Hand Salary",
    href: "/blog/understanding-your-salary-structure-ctc-vs-in-hand-salary",
    category: "Salary Management",
  },
  {
    title: "Tax Planning Strategies for Salaried Employees",
    href: "/blog/tax-planning-strategies-for-salaried-employees",
    category: "Tax Planning",
  },
  {
    title: "Maximizing Your Take-Home Salary: A Complete Guide",
    href: "/blog/maximizing-your-take-home-salary-complete-guide",
    category: "Financial Planning",
  },
];

const ArticleLinks = ({ articles, calculatorType }: ArticleLinksProps) => {
  // Use calculator-specific articles if calculatorType is provided, otherwise use provided articles or defaults
  const selectedArticles = articles || (calculatorType && calculatorArticles[calculatorType]) || defaultArticles;
  const displayArticles = selectedArticles.slice(0, 3);

  return (
    <Card className="mt-6">
      <CardContent className="pt-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            Related Articles
          </h3>
          <Link href="/blog">
            <Button variant="outline" size="sm" className="gap-2">
              View All
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="space-y-3">
          {displayArticles.map((article, index) => (
            <Link
              key={index}
              href={article.href}
              className="block p-3 rounded-lg border border-border hover:bg-muted/50 hover:border-primary/20 transition-colors group"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  {article.category && (
                    <span className="text-xs text-muted-foreground mb-1 block">
                      {article.category}
                    </span>
                  )}
                  <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ArticleLinks;

