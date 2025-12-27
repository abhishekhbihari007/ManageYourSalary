"use client";

import { useState } from "react";
import { PiggyBank, ArrowLeft, DollarSign, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function RDCalculator() {
  const [monthlyDeposit, setMonthlyDeposit] = useState<string>("5000");
  const [interestRate, setInterestRate] = useState<string>("6.5");
  const [tenure, setTenure] = useState<string>("5");
  const [result, setResult] = useState<{
    totalDeposited: number;
    maturityAmount: number;
    interestEarned: number;
    yearlyBreakdown: Array<{ year: number; deposited: number; maturity: number }>;
  } | null>(null);

  const calculateRD = () => {
    const deposit = parseFloat(monthlyDeposit);
    const rate = parseFloat(interestRate) / 100;
    const years = parseInt(tenure);
    const months = years * 12;

    if (!deposit || !rate || !years || deposit <= 0 || years <= 0) {
      alert("Please enter valid values");
      return;
    }

    const totalDeposited = deposit * months;
    
    const quarterlyRate = rate / 4;
    const quarters = years * 4;
    
    const maturityAmount = deposit * ((Math.pow(1 + quarterlyRate, quarters) - 1) / (1 - Math.pow(1 + quarterlyRate, -1/3)));
    const interestEarned = maturityAmount - totalDeposited;

    const yearlyBreakdown = [];
    let cumulativeDeposit = 0;
    let cumulativeMaturity = 0;

    for (let year = 1; year <= years; year++) {
      const yearQuarters = 4;
      const yearDeposit = deposit * 12;
      cumulativeDeposit += yearDeposit;
      
      const yearMaturity = deposit * ((Math.pow(1 + quarterlyRate, year * 4) - 1) / (1 - Math.pow(1 + quarterlyRate, -1/3)));
      cumulativeMaturity = yearMaturity;
      
      yearlyBreakdown.push({
        year,
        deposited: cumulativeDeposit,
        maturity: cumulativeMaturity,
      });
    }

    setResult({
      totalDeposited,
      maturityAmount,
      interestEarned,
      yearlyBreakdown,
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

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
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-success/10">
                <PiggyBank className="h-6 w-6 text-success" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-foreground">RD Calculator</h1>
                <p className="text-muted-foreground">Calculate your Recurring Deposit maturity amount</p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Enter RD Details</CardTitle>
                <CardDescription>Calculate your RD maturity amount and interest</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="deposit">Monthly Deposit (₹)</Label>
                  <Input
                    id="deposit"
                    type="number"
                    placeholder="5000"
                    value={monthlyDeposit}
                    onChange={(e) => setMonthlyDeposit(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="rate">Interest Rate (% per annum)</Label>
                  <Input
                    id="rate"
                    type="number"
                    placeholder="6.5"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                  />
                  <p className="text-xs text-muted-foreground">Typical RD rates: 5.5% - 7.5%</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tenure">Tenure (Years)</Label>
                  <Input
                    id="tenure"
                    type="number"
                    placeholder="5"
                    value={tenure}
                    onChange={(e) => setTenure(e.target.value)}
                  />
                </div>

                <Button onClick={calculateRD} className="w-full" size="lg">
                  <PiggyBank className="h-5 w-5" />
                  Calculate RD
                </Button>
              </CardContent>
            </Card>

            {result && (
              <Card>
                <CardHeader>
                  <CardTitle>RD Results</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-lg bg-success/10 p-4 border border-success/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Maturity Amount</span>
                      <DollarSign className="h-5 w-5 text-success" />
                    </div>
                    <p className="text-3xl font-bold text-success">{formatCurrency(result.maturityAmount)}</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-sm font-medium">Total Deposited</span>
                      <span className="font-semibold">{formatCurrency(result.totalDeposited)}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-sm font-medium">Interest Earned</span>
                      <span className="font-semibold text-success">{formatCurrency(result.interestEarned)}</span>
                    </div>
                    <div className="pt-2">
                      <p className="text-xs text-muted-foreground mb-2">Effective Return:</p>
                      <p className="text-lg font-bold text-success">
                        {((result.interestEarned / result.totalDeposited) * 100).toFixed(2)}%
                      </p>
                    </div>
                  </div>

                  {result.yearlyBreakdown.length > 0 && (
                    <div className="pt-4 border-t">
                      <h3 className="text-sm font-semibold mb-3">Yearly Breakdown</h3>
                      <div className="space-y-2 max-h-60 overflow-y-auto">
                        {result.yearlyBreakdown.map((item) => (
                          <div key={item.year} className="flex justify-between items-center text-sm">
                            <span>Year {item.year}</span>
                            <span className="font-medium">{formatCurrency(item.maturity)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

