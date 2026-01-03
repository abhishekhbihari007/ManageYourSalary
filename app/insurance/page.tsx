"use client";

import { Shield, Heart, Home, Car, AlertCircle, CheckCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function InsurancePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-gradient-to-b from-background to-muted/20">
        <div className="container py-8 md:py-12">
          {/* Back Button */}
          <Link href="/" className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          {/* Header */}
          <div className="mb-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h1 className="text-3xl font-bold text-foreground">Insurance Planning</h1>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Protect yourself and your loved ones with the right insurance coverage
            </p>
          </div>

          {/* Insurance Types */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6">Types</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/10">
                    <Shield className="h-5 w-5 text-destructive" />
                  </div>
                  <CardTitle>Life Insurance</CardTitle>
                </div>
                <CardDescription>Protect your family&apos;s financial future</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                    <span>Coverage: 10-20x annual income</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                    <span>Term insurance for pure protection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                    <span>Whole life for savings component</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Heart className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Health Insurance</CardTitle>
                </div>
                <CardDescription>Coverage for medical emergencies</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                    <span>Individual: ₹5-10 lakhs coverage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                    <span>Family floater: ₹10-20 lakhs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                    <span>Top-up plans for higher coverage</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                    <Home className="h-5 w-5 text-accent" />
                  </div>
                  <CardTitle>Home Insurance</CardTitle>
                </div>
                <CardDescription>Protect your property and belongings</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                    <span>Structure coverage: Full value</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                    <span>Contents coverage: 20-30% of value</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                    <span>Protection against natural disasters</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success/10">
                    <Car className="h-5 w-5 text-success" />
                  </div>
                  <CardTitle>Motor Insurance</CardTitle>
                </div>
                <CardDescription>Mandatory coverage for vehicles</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                    <span>Third-party: Mandatory by law</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                    <span>Comprehensive: Full coverage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                    <span>No-claim bonus benefits</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            </div>
          </div>

          {/* Why Insurance Planning Matters */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Why Insurance Planning Matters</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Insurance planning helps protect you and your family from unexpected financial risks such as medical emergencies, accidents, loss of income, or damage to property. Without adequate insurance, even a single unforeseen event can disrupt long-term financial goals and savings. Proper insurance planning ensures financial stability, peace of mind, and the ability to handle emergencies without relying on loans or selling assets.
              </p>
            </CardContent>
          </Card>

          {/* Which Insurance Do You Need */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Which Insurance Do You Need?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Choosing the right insurance depends on your life stage, income, and responsibilities. Not everyone needs every type of insurance, but having the right mix is important.
              </p>
              
              <div className="space-y-4">
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <h3 className="font-semibold mb-2 text-sm text-foreground">For Salaried Individuals</h3>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Life Insurance (term plan for income protection)</li>
                    <li>Health Insurance (individual or employer + personal cover)</li>
                    <li>Motor Insurance (mandatory if you own a vehicle)</li>
                  </ul>
                </div>

                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <h3 className="font-semibold mb-2 text-sm text-foreground">For Families</h3>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Life Insurance with higher coverage</li>
                    <li>Family floater health insurance</li>
                    <li>Home insurance if you own a house</li>
                  </ul>
                </div>

                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <h3 className="font-semibold mb-2 text-sm text-foreground">For Self-Employed or Freelancers</h3>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Health insurance with a top-up plan</li>
                    <li>Term life insurance</li>
                    <li>Optional income protection plans</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Common Insurance Mistakes to Avoid */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Common Insurance Mistakes to Avoid</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Many people buy insurance without proper understanding. Avoid these common mistakes:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <AlertCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span>Buying insurance only for tax savings</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span>Choosing very low coverage to reduce premiums</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span>Relying only on employer-provided health insurance</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span>Not reviewing or updating policies after major life events</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span>Ignoring policy exclusions and claim conditions</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* How Much Insurance Coverage Is Enough */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>How Much Insurance Coverage Is Enough?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Having insurance is important, but having adequate coverage matters even more.
              </p>
              
              <div className="space-y-3">
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <h3 className="font-semibold mb-2 text-sm text-foreground">Life Insurance:</h3>
                  <p className="text-sm text-muted-foreground">
                    Coverage should be around 10–20 times your annual income to support your family&apos;s future expenses.
                  </p>
                </div>

                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <h3 className="font-semibold mb-2 text-sm text-foreground">Health Insurance:</h3>
                  <p className="text-sm text-muted-foreground">
                    At least ₹5–10 lakh for individuals and ₹10–20 lakh for families, depending on city and medical costs.
                  </p>
                </div>

                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <h3 className="font-semibold mb-2 text-sm text-foreground">Home Insurance:</h3>
                  <p className="text-sm text-muted-foreground">
                    Coverage should match the full reconstruction value of your property, not the market price.
                  </p>
                </div>

                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <h3 className="font-semibold mb-2 text-sm text-foreground">Motor Insurance:</h3>
                  <p className="text-sm text-muted-foreground">
                    A comprehensive policy along with mandatory third-party coverage is recommended for better protection.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Important Tips */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Insurance Planning Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Buy Early</p>
                    <p className="text-sm text-muted-foreground">Premiums are lower when you&apos;re younger and healthier</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Review Regularly</p>
                    <p className="text-sm text-muted-foreground">Update coverage as life circumstances change</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Compare Policies</p>
                    <p className="text-sm text-muted-foreground">Shop around for best coverage and premiums</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Read Fine Print</p>
                    <p className="text-sm text-muted-foreground">Understand exclusions and claim procedures</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Protection Planning Tools */}
          <Card>
            <CardHeader>
              <CardTitle>Protection Planning Tools</CardTitle>
              <CardDescription>Use our calculators to determine your insurance needs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <Link href="/calculator/term-insurance">
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-destructive/10">
                          <Shield className="h-6 w-6 text-destructive" />
                        </div>
                        <CardTitle>Term Insurance Calculator</CardTitle>
                      </div>
                      <CardDescription>Calculate how much term insurance coverage you need based on your income, expenses, and financial goals.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full">Calculate Term Insurance</Button>
                    </CardContent>
                  </Card>
                </Link>
                <Link href="/calculator/health-insurance">
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                          <Heart className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle>Health Insurance Calculator</CardTitle>
                      </div>
                      <CardDescription>Determine the right health insurance coverage amount for you and your family based on medical costs and needs.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full">Calculate Health Insurance</Button>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

