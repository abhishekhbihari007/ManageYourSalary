import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Blog - ManageYourSalary | Financial Planning Tips & Guides",
  description: "Read our blog for financial planning tips, tax saving strategies, investment guides, and salary management advice for Indian professionals.",
  keywords: "financial planning blog, tax saving tips, investment guides, salary management, personal finance india",
};

const blogPosts = [
  {
    slug: "understanding-your-salary-structure-ctc-vs-in-hand-salary",
    title: "Understanding Your Salary Structure: CTC vs In-Hand Salary",
    excerpt: "Learn how to break down your CTC and calculate your actual take-home salary. Understand deductions, exemptions, and tax implications.",
    category: "Salary Management",
    date: "2024-01-15",
    readTime: "6 min read",
    featured: true,
  },
  {
    slug: "tax-planning-strategies-for-salaried-employees",
    title: "Tax Planning Strategies for Salaried Employees",
    excerpt: "A comprehensive guide to help you decide between Old and New Tax Regime for FY 2024-25. Compare tax savings, understand deductions, and make an informed choice.",
    category: "Tax Planning",
    date: "2024-01-14",
    readTime: "8 min read",
    featured: true,
  },
  {
    slug: "maximizing-your-take-home-salary-complete-guide",
    title: "Maximizing Your Take-Home Salary: A Complete Guide",
    excerpt: "Discover strategies to maximize your in-hand salary through smart tax planning, salary structure optimization, and investment decisions.",
    category: "Financial Planning",
    date: "2024-01-13",
    readTime: "7 min read",
    featured: true,
  },
  {
    slug: "old-vs-new-tax-regime-2024",
    title: "Old vs New Tax Regime 2024: Which One Should You Choose?",
    excerpt: "A comprehensive guide to help you decide between Old and New Tax Regime for FY 2024-25. Compare tax savings, understand deductions, and make an informed choice.",
    category: "Tax Planning",
    date: "2024-01-12",
    readTime: "8 min read",
    featured: false,
  },
  {
    slug: "epf-vs-nps-which-is-better",
    title: "EPF vs NPS: Which Retirement Scheme is Better for You?",
    excerpt: "Compare EPF and NPS to understand their differences, benefits, and which one suits your retirement planning goals better.",
    category: "Retirement Planning",
    date: "2024-01-10",
    readTime: "10 min read",
    featured: false,
  },
  {
    slug: "how-to-calculate-in-hand-salary",
    title: "How to Calculate Your In-Hand Salary: Complete Guide",
    excerpt: "Learn how to break down your CTC and calculate your actual take-home salary. Understand deductions, exemptions, and tax implications.",
    category: "Salary Management",
    date: "2024-01-05",
    readTime: "6 min read",
    featured: false,
  },
  {
    slug: "term-insurance-coverage-calculator",
    title: "How Much Term Insurance Do You Really Need?",
    excerpt: "Calculate the right term insurance coverage for your family. Understand factors like income replacement, debts, and dependents.",
    category: "Insurance",
    date: "2024-01-01",
    readTime: "7 min read",
    featured: false,
  },
  {
    slug: "health-insurance-planning-guide",
    title: "Health Insurance Planning: How Much Coverage Do You Need?",
    excerpt: "Learn how to choose the right health insurance coverage for yourself and your family. Understand factors like city, medical costs, and family size.",
    category: "Insurance",
    date: "2023-12-30",
    readTime: "6 min read",
    featured: false,
  },
  {
    slug: "epf-calculator-guide",
    title: "EPF Calculator: Understanding Your Provident Fund Contributions",
    excerpt: "Learn how EPF contributions work, calculate your retirement corpus, and understand the benefits of EPF for your financial future.",
    category: "Retirement Planning",
    date: "2023-12-28",
    readTime: "8 min read",
    featured: false,
  },
  {
    slug: "gratuity-calculator-explained",
    title: "Gratuity Calculator: How Much Will You Get?",
    excerpt: "Understand how gratuity is calculated, eligibility criteria, and when you can claim your gratuity amount.",
    category: "Salary Management",
    date: "2023-12-27",
    readTime: "5 min read",
    featured: false,
  },
  {
    slug: "retirement-planning-india",
    title: "Retirement Planning in India: How Much Do You Need?",
    excerpt: "Plan your retirement corpus with our comprehensive guide. Understand inflation, calculate required savings, and start planning today.",
    category: "Retirement Planning",
    date: "2023-12-25",
    readTime: "12 min read",
    featured: false,
  },
  {
    slug: "salary-growth-calculator-guide",
    title: "Salary Growth Calculator: Plan Your Career Earnings",
    excerpt: "Project your future salary based on annual increments and understand how salary growth impacts your long-term financial goals.",
    category: "Salary Management",
    date: "2023-12-24",
    readTime: "6 min read",
    featured: false,
  },
  {
    slug: "offer-analyzer-comparing-job-offers",
    title: "Job Offer Analyzer: How to Compare Multiple Offers",
    excerpt: "Learn how to compare job offers beyond just CTC. Understand the true value of each offer including benefits, growth potential, and work-life balance.",
    category: "Career Planning",
    date: "2023-12-23",
    readTime: "7 min read",
    featured: false,
  },
  {
    slug: "rd-vs-fd-which-is-better",
    title: "RD vs FD: Which Fixed Deposit Option is Better?",
    excerpt: "Compare Recurring Deposits and Fixed Deposits to understand their differences, returns, and which one suits your investment goals.",
    category: "Investment",
    date: "2023-12-22",
    readTime: "8 min read",
    featured: false,
  },
  {
    slug: "rent-vs-own-home-decision",
    title: "Rent vs Own: Should You Buy a Home or Continue Renting?",
    excerpt: "Make an informed decision about buying a home versus renting. Calculate the financial implications and understand when each option makes sense.",
    category: "Financial Planning",
    date: "2023-12-21",
    readTime: "9 min read",
    featured: false,
  },
  {
    slug: "credit-score-guide",
    title: "Credit Score Guide: How to Improve and Maintain Your Score",
    excerpt: "Learn how credit scores are calculated, factors that affect your score, and tips to improve your credit score for better loan approvals.",
    category: "Financial Planning",
    date: "2023-12-20",
    readTime: "10 min read",
    featured: false,
  },
  {
    slug: "insurance-planning-complete-guide",
    title: "Insurance Planning: Complete Guide to Life and Health Insurance",
    excerpt: "Understand which insurance you need, how much coverage is enough, and common mistakes to avoid when buying insurance policies.",
    category: "Insurance",
    date: "2023-12-19",
    readTime: "11 min read",
    featured: false,
  },
  {
    slug: "sip-investment-guide-2024",
    title: "SIP Investment Guide 2024: Start Your Wealth Journey",
    excerpt: "Everything you need to know about Systematic Investment Plans (SIPs). Learn how to start, choose funds, and maximize returns.",
    category: "Investment",
    date: "2023-12-18",
    readTime: "9 min read",
    featured: false,
  },
];

const categories = ["All", "Tax Planning", "Retirement Planning", "Salary Management", "Insurance", "Investment", "Financial Planning", "Career Planning"];

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-gradient-to-b from-background to-muted/20 pt-16">
        <div className="container py-8 md:py-12">
          <Link href="/" className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">Financial Planning Blog</h1>
            <p className="text-xl text-muted-foreground">
              Expert tips, guides, and insights to help you manage your salary and build wealth
            </p>
          </div>

          {featuredPosts.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">Featured Articles</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {featuredPosts.map((post) => (
                  <Card key={post.slug} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary">{post.category}</Badge>
                      </div>
                      <CardTitle className="text-xl">
                        <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                          {post.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="line-clamp-2">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(post.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {post.readTime}
                        </div>
                      </div>
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-2 mt-4 text-sm text-primary hover:underline"
                      >
                        Read more <ArrowRight className="h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}

          <section>
            <h2 className="text-2xl font-semibold mb-6">All Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post) => (
                <Card key={post.slug} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">{post.category}</Badge>
                    </div>
                    <CardTitle className="text-lg">
                      <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                        {post.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                    >
                      Read more <ArrowRight className="h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}





