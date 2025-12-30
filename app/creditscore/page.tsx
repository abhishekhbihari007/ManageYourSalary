"use client";

import { CreditCard, TrendingUp, Shield, CheckCircle, AlertCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function CreditScorePage() {
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
                <CreditCard className="h-6 w-6 text-primary" />
              </div>
              <h1 className="text-3xl font-bold text-foreground">Credit Score</h1>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Understand and improve your credit score to unlock better financial opportunities
            </p>
          </div>

          {/* Info Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  What is Credit Score?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  A credit score is a 3-digit number (300-900) that represents your creditworthiness. 
                  Higher scores indicate better credit health and help you get loans at lower interest rates.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Why It Matters
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Lenders use your credit score to determine loan eligibility and interest rates. 
                  A good score (750+) can save you lakhs in interest over time.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  How to Improve
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Pay bills on time, keep credit utilization low, maintain a healthy credit mix, 
                  and avoid too many credit inquiries.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Credit Score Ranges */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Credit Score Ranges</CardTitle>
              <CardDescription>Understanding where you stand</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg bg-success/10 border border-success/20">
                  <div>
                    <p className="font-semibold text-success">750 - 900 (Excellent)</p>
                    <p className="text-sm text-muted-foreground">Best interest rates, easy loan approval</p>
                  </div>
                  <CheckCircle className="h-6 w-6 text-success" />
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-primary/10 border border-primary/20">
                  <div>
                    <p className="font-semibold text-primary">700 - 749 (Good)</p>
                    <p className="text-sm text-muted-foreground">Good rates, likely approval</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-accent/10 border border-accent/20">
                  <div>
                    <p className="font-semibold text-accent">650 - 699 (Fair)</p>
                    <p className="text-sm text-muted-foreground">Moderate rates, may need co-signer</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-destructive/10 border border-destructive/20">
                  <div>
                    <p className="font-semibold text-destructive">300 - 649 (Poor)</p>
                    <p className="text-sm text-muted-foreground">High rates, difficult approval</p>
                  </div>
                  <AlertCircle className="h-6 w-6 text-destructive" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* How is credit score calculated */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>How is credit score calculated?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                A credit score is calculated by credit bureaus using your past and current credit behaviour. It reflects how responsibly you manage borrowed money over time. While the exact calculation method is proprietary and differs slightly across bureaus, all credit scores are based on a common set of factors related to repayment history, credit usage, and borrowing patterns.
              </p>
              
              <div className="space-y-3">
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <h3 className="font-semibold mb-2 text-sm text-foreground">Payment History</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    The most important factor in calculating a credit score is your payment history. This includes whether you pay your loan EMIs and credit card bills on time. Late payments, missed EMIs, defaults, or settled accounts can significantly reduce your score, while consistent on-time payments help build a strong credit profile.
                  </p>
                </div>

                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <h3 className="font-semibold mb-2 text-sm text-foreground">Credit Utilisation</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Another major factor is credit utilisation, which measures how much of your available credit you are using. Using a large portion of your credit limit, especially above 30%, can negatively impact your score as it signals higher credit dependency. Keeping credit usage low and well within limits reflects better financial discipline.
                  </p>
                </div>

                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <h3 className="font-semibold mb-2 text-sm text-foreground">Length of Credit History</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    The length of your credit history also plays an important role. Credit bureaus look at how long you have been using credit and the age of your oldest active account. A longer credit history generally improves your score, which is why closing old credit cards or long-standing loan accounts may sometimes reduce it.
                  </p>
                </div>

                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <h3 className="font-semibold mb-2 text-sm text-foreground">Credit Mix</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Credit mix is also considered while calculating your score. A healthy balance of secured loans, such as home or car loans, and unsecured credit, like personal loans and credit cards, indicates that you can manage different types of credit responsibly. Relying heavily on only one type of credit may limit your score potential.
                  </p>
                </div>

                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <h3 className="font-semibold mb-2 text-sm text-foreground">Credit Enquiries</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Finally, credit enquiries influence your score. Each time you apply for a loan or credit card, lenders make a hard enquiry on your credit report. Multiple enquiries in a short period can lower your score, as it suggests higher borrowing risk. However, checking your own credit score is a soft enquiry and does not affect your score.
                  </p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mt-4">
                Overall, credit scores are dynamic and change as your credit behaviour changes. Regular on-time payments, low credit utilisation, and responsible borrowing habits can improve your score over time, typically within three to six months. Credit scores may vary slightly across different bureaus, but the underlying factors used to calculate them remain largely the same.
              </p>
            </CardContent>
          </Card>

          {/* Advantages of Maintaining a Good Credit Score */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Advantages of Maintaining a Good Credit Score</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Higher loan approval chances</p>
                    <p>Lenders are more likely to approve your loan applications when you have a good credit score.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Lower interest rates</p>
                    <p>A strong credit score can help you get loans and credit cards at lower interest rates, reducing overall borrowing costs.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Better credit card offers</p>
                    <p>You become eligible for premium credit cards with higher limits, rewards, and exclusive benefits.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Faster loan processing</p>
                    <p>Good credit scores often lead to quicker approvals with minimal documentation.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Higher credit limits</p>
                    <p>Banks are more willing to offer higher loan amounts and increased credit card limits.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Pre-approved offers</p>
                    <p>You may receive pre-approved loans and credit card offers based on your credit profile.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Improved financial credibility</p>
                    <p>A good credit score reflects responsible financial behaviour and builds trust with lenders.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Greater financial flexibility</p>
                    <p>Easier access to credit helps you manage emergencies and plan long-term financial goals confidently.</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Factors That Affect Your Credit Score */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Factors That Affect Your Credit Score</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <AlertCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Payment history</p>
                    <p>Timely payment of loan EMIs and credit card bills has the biggest impact on your credit score. Late payments, missed EMIs, defaults, or settlements can significantly reduce your score.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Credit utilisation</p>
                    <p>This refers to how much of your available credit limit you use. High credit usage, especially above 30% of your limit, can negatively affect your score.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Length of credit history</p>
                    <p>Credit bureaus consider how long you have been using credit. Older and well-maintained accounts generally improve your credit score, while closing old accounts may lower it.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Credit mix</p>
                    <p>Having a healthy balance of secured loans (like home or car loans) and unsecured credit (like personal loans and credit cards) shows responsible credit management.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Credit enquiries</p>
                    <p>Every time you apply for a loan or credit card, lenders make a hard enquiry on your credit report. Multiple enquiries in a short period can reduce your score.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Number of active accounts</p>
                    <p>Managing too many loans or credit cards at the same time can increase risk perception and impact your score negatively.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Loan defaults and settlements</p>
                    <p>Accounts marked as defaulted or settled have a strong negative impact and can stay on your credit report for several years.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Errors in credit report</p>
                    <p>Incorrect personal details, wrong loan statuses, or unrecognized accounts can also affect your credit score if not corrected.</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Tips to Improve Your Credit Score */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Tips to Improve Your Credit Score</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Pay all EMIs and credit card bills on time</p>
                    <p>Timely payments have the biggest positive impact on your credit score. Even a single missed payment can reduce your score.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Keep credit utilisation low</p>
                    <p>Try to use less than 30% of your total credit limit. High credit usage signals financial stress and negatively affects your score.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Avoid multiple loan or credit card applications</p>
                    <p>Applying for several loans or cards in a short period leads to multiple credit enquiries, which can lower your score.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Maintain old credit accounts</p>
                    <p>Older accounts help build a longer credit history. Avoid closing old credit cards unless absolutely necessary.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Use a healthy mix of credit</p>
                    <p>Balance secured loans (home or car loans) with unsecured credit (credit cards or personal loans) to show responsible borrowing behaviour.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Clear overdue amounts quickly</p>
                    <p>If you have missed payments or dues, clear them as soon as possible to limit long-term damage.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Check your credit report regularly</p>
                    <p>Review your credit report for errors such as incorrect balances or unknown accounts and get them corrected promptly.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Avoid loan settlements if possible</p>
                    <p>Settling a loan for less than the due amount can hurt your credit score more than closing it fully.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Limit credit card usage</p>
                    <p>Spread expenses across cards if needed and avoid maxing out any single card.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Be patient and consistent</p>
                    <p>Credit score improvement takes time. With disciplined credit behaviour, positive changes usually reflect within 3–6 months.</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Who maintains credit score */}
          <Card>
            <CardHeader>
              <CardTitle>Who maintains credit score</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                In India, credit scores are maintained by credit bureaus, which are authorized organizations that collect and manage individuals&apos; credit information from banks and financial institutions.
              </p>

              <div>
                <h3 className="font-semibold mb-3 text-base text-foreground">Credit Bureaus in India</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  The Reserve Bank of India (RBI) has licensed four credit bureaus to maintain credit records and generate credit scores:
                </p>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">TransUnion CIBIL</p>
                      <p>The most widely used credit bureau in India. Most banks and lenders refer to CIBIL scores for loan and credit card approvals.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Experian India</p>
                      <p>An international credit bureau that provides credit reports and scores used by many banks and NBFCs.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Equifax India</p>
                      <p>Collects and maintains credit data and is used by several financial institutions.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">CRIF High Mark</p>
                      <p>Commonly used for retail loans, microfinance, and NBFC lending.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-semibold mb-2 text-sm text-foreground">How They Maintain Your Credit Score</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  These credit bureaus receive data regularly from banks, NBFCs, and credit card companies about your loans, credit cards, repayments, and defaults. Based on this information, they calculate and update your credit score periodically. While the score may vary slightly between bureaus, the underlying credit behaviour used to calculate it remains largely the same.
                </p>
                <p className="text-sm font-medium text-foreground mt-3">
                  Important: You do not &quot;maintain&quot; your credit score yourself—your financial behaviour does. Credit bureaus only record and calculate it based on the data reported by lenders.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

