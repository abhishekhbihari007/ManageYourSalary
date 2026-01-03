import type { Metadata } from "next";

export const seoMeta: Record<string, { title: string; description: string }> = {
  "in-hand-salary": {
    title: "In-Hand Salary Calculator (India) – FY 2025-26",
    description:
      "Calculate your in-hand salary in India for FY 2025-26. Estimate take-home pay after tax, PF, and deductions using this free online salary calculator.",
  },

  "tax-regime-picker": {
    title: "Old vs New Tax Regime Calculator (India) – FY 2025-26",
    description:
      "Compare old vs new tax regime in India for FY 2025-26. Calculate tax savings and choose the right tax regime with this free tax comparison tool.",
  },

  "salary-growth-tracker": {
    title: "Salary Growth Calculator (India) – Track Income Over Time",
    description:
      "Track your salary growth over the years in India. Estimate future income, growth percentage, and job switch impact using this easy-to-use calculator.",
  },

  "offer-analyzer": {
    title: "Job Offer Comparison Calculator (India) – Compare CTC & Take-Home",
    description:
      "Compare job offers in India beyond CTC. Calculate real in-hand salary, fixed vs variable pay, and decide better offers using this free offer analyzer.",
  },

  "term-insurance": {
    title: "Term Insurance Calculator (India) – How Much Cover Do You Need?",
    description:
      "Calculate how much term insurance cover you need in India. Estimate ideal life cover based on income, age, and goals using this free calculator.",
  },

  "health-insurance": {
    title: "Health Insurance Calculator (India) – Coverage for You & Family",
    description:
      "Estimate how much health insurance coverage you need in India. Calculate ideal cover for individuals or families using this free health insurance calculator.",
  },

  "epf-calculator": {
    title: "EPF Calculator (India) – Track PF Balance & Growth",
    description:
      "Calculate EPF contributions and track PF balance growth in India. Estimate retirement corpus with increments using this free EPF calculator.",
  },

  "eps-pension": {
    title: "EPS Pension Calculator (India) – Estimate Monthly Pension",
    description:
      "Calculate your EPS pension in India after retirement. Estimate monthly pension amount and check eligibility using this free pension calculator.",
  },

  gratuity: {
    title: "Gratuity Calculator (India) – Check Eligibility & Amount",
    description:
      "Calculate gratuity amount in India based on salary and years of service. Check eligibility and tax rules using this free gratuity calculator.",
  },

  nps: {
    title: "NPS Calculator (India) – Estimate Retirement Wealth",
    description:
      "Calculate NPS returns and estimate retirement wealth in India. Compare NPS vs EPF and plan investments using this free NPS calculator.",
  },

  "retirement-planner": {
    title: "Retirement Planning Calculator (India) – How Much Is Enough?",
    description:
      "Plan your retirement in India and estimate how much money you need. Calculate retirement corpus based on salary and lifestyle using this free planner.",
  },

  "sip-calculator": {
    title: "SIP Calculator (India) – Calculate Mutual Fund Returns",
    description:
      "Calculate SIP returns and estimate long-term wealth creation. Compare SIP vs lump sum and grow investments using this free SIP calculator.",
  },

  "rd-calculator": {
    title: "RD Calculator (India) – Monthly Investment Returns",
    description:
      "Calculate recurring deposit returns in India. Estimate RD maturity amount, interest earned, and best tenure using this free RD calculator.",
  },

  "fd-calculator": {
    title: "FD Calculator (India) – Fixed Deposit Returns & Interest",
    description:
      "Calculate FD interest and maturity amount in India. Compare FD vs RD vs SIP and assess safety using this free FD calculator.",
  },

  "rent-vs-buy": {
    title: "Rent vs Buy House Calculator (India) – Which Is Better?",
    description:
      "Compare renting vs buying a house in India. Calculate long-term costs and savings to decide wisely using this free rent vs buy calculator.",
  },
};

/**
 * Route to SEO key mapping for calculators with different folder names
 */
const routeToSeoKey: Record<string, string> = {
  "tax-regime": "tax-regime-picker",
  "rent-vs-own": "rent-vs-buy",
};

/**
 * Get SEO metadata for a calculator page
 */
export function getCalculatorMetadata(calculatorKey: string): Metadata {
  // Check if there's a route alias mapping
  const seoKey = routeToSeoKey[calculatorKey] || calculatorKey;
  const meta = seoMeta[seoKey];
  
  if (!meta) {
    // Fallback metadata
    return {
      title: "Calculator - ManageYourSalary",
      description: "Free financial calculator for Indian professionals.",
    };
  }

  return {
    title: meta.title,
    description: meta.description,
    keywords: [
      calculatorKey,
      "calculator",
      "india",
      "financial calculator",
      "free calculator",
      "online calculator",
    ].join(", "),
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "website",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
  };
}

