# ManageYourSalary - Financial Planning Platform

A comprehensive salary management and financial planning platform designed specifically for Indian professionals. Calculate your in-hand salary, optimize taxes, plan for retirement, and make informed financial decisions with our suite of free calculators.

## 🚀 Features

### 12 Free Financial Calculators

1. **In-Hand Salary Calculator** - Calculate your take-home salary after all deductions (EPF, ESIC, taxes)
2. **Tax Regime Picker** - Compare old vs new tax regime and find the best option for you
3. **Salary Growth Tracker** - Project your salary growth over the years
4. **Offer Analyzer** - Compare multiple job offers side by side
5. **EPF Accumulator** - Project your Employee Provident Fund growth trajectory
6. **Gratuity Estimator** - Calculate your gratuity amount at retirement
7. **NPS Wealth Builder** - Plan your National Pension System contributions
8. **Retirement Planner** - Chart your path to financial freedom
9. **SIP Growth Calculator** - See the power of consistent investing
10. **RD Calculator** - Calculate your Recurring Deposit maturity amount and returns
11. **FD Calculator** - Calculate your Fixed Deposit maturity amount with compound interest
12. **Rent vs Own Analyzer** - Make informed decisions about buying vs renting

### Key Highlights

- ✅ **Zero Signup Required** - Start using calculators instantly
- ✅ **Instant Results** - Real-time calculations
- ✅ **Updated for FY 2024-25** - All tax rates and policies are current
- ✅ **Modern UI** - Beautiful, responsive design with 3D animations
- ✅ **Mobile Friendly** - Works seamlessly on all devices

## 🛠️ Technologies

This project is built with modern web technologies:

- **Next.js 14** (App Router) - React framework
- **TypeScript** - Type-safe development
- **React 18** - UI library
- **shadcn-ui** - Beautiful UI component library
- **Tailwind CSS** - Utility-first styling
- **Three.js & React Three Fiber** - 3D graphics and animations
- **GSAP** - Advanced animations
- **Radix UI** - Accessible component primitives
- **React Query** - Data fetching and caching

## 📋 Prerequisites

- Node.js 18+ and npm installed
- [Install Node.js with nvm](https://github.com/nvm-sh/nvm#installing-and-updating) (recommended)

## 🚀 Getting Started

### Installation

```sh
# Step 1: Clone the repository
git clone https://github.com/abhishekhbihari007/MoneyCalculator.git

# Step 2: Navigate to the project directory
cd salary-wise-main

# Step 3: Install dependencies
npm install

# Step 4: Start the development server
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🧮 Calculator Details

All calculators are fully functional and updated with current government policies:

### Tax Calculations (FY 2024-25)
- **New Tax Regime**: Standard deduction of ₹75,000
- **Old Tax Regime**: Standard deduction of ₹50,000
- Updated tax slabs for both regimes
- 4% cess included in all calculations

### EPF & Benefits
- **EPF Interest Rate**: 8.25% (FY 2024-25)
- **EPF Cap**: ₹1,800/month (12% of basic, capped)
- **ESIC**: 0.75% for salaries up to ₹21,000/month
- **Gratuity**: Maximum cap of ₹20 lakhs

### Investment Calculators
- SIP calculator with compound interest
- RD calculator with monthly deposit calculations
- FD calculator with quarterly/monthly/yearly compounding
- NPS calculator (60% lump sum, 40% annuity)
- Retirement planning with inflation adjustment
- Rent vs Own analysis with EMI calculations

## 📁 Project Structure

```
salary-wise-main/
├── app/
│   ├── calculator/          # All calculator pages
│   │   ├── in-hand-salary/
│   │   ├── tax-regime/
│   │   ├── epf/
│   │   └── ...
│   ├── page.tsx            # Homepage
│   └── layout.tsx          # Root layout
├── src/
│   ├── components/
│   │   ├── sections/       # Page sections
│   │   ├── layout/         # Header, Footer
│   │   ├── ui/             # shadcn components
│   │   └── neural-network-hero.tsx  # 3D hero background
│   └── hooks/              # Custom React hooks
└── public/                 # Static assets
```

## 🎨 Key Components

- **Hero Section** - Animated 3D neural network background
- **Calculator Grid** - Categorized calculator showcase
- **Info Section** - Feature highlights
- **Data Simplification** - Visual data representation
- **Financial Personality** - Personalized financial planning
- **Blog Preview** - Latest financial articles

## 🌐 Deployment

This project can be deployed to any platform that supports Next.js:

- **Vercel** (recommended) - `vercel deploy`
- **Netlify** - Connect your Git repository
- **AWS Amplify** - Connect your Git repository

### Environment Variables

No environment variables required for basic functionality.

## 🎯 Project Milestones

See [MILESTONES.md](./MILESTONES.md) for detailed milestone breakdown.

### Quick Status
- ✅ **Milestone 1**: Salary & Tax Calculators - **COMPLETE** (32 tests passing)
- 🚧 **Milestone 2**: Retirement & Investment Calculators - In Progress
- 📋 **Milestone 3**: Smart Decision Tools & Advanced Features - Pending
- 📋 **Milestone 4**: Production Ready & Deployment - Pending

## 📝 Recent Updates

- ✅ **Milestone 1 Complete**: All 4 salary & tax calculators implemented with 32 passing tests
- ✅ Updated all tax rates for FY 2024-25
- ✅ Updated EPF interest rate to 8.25%
- ✅ Fixed tax calculation logic in all calculators
- ✅ Added standard deduction for new tax regime
- ✅ Improved calculator accuracy and compliance
- ✅ Enhanced UI with 3D animations
- ✅ Added dropdown navigation for calculators
- ✅ Cleaned up code comments for better readability
- ✅ Comprehensive testing framework setup (Jest + React Testing Library)

## 🤝 Contributing

This is a private project. For contributions or suggestions, please contact the repository owner.

## 📄 License

Private - All rights reserved

## 🔗 Links

- **GitHub Repository**: [MoneyCalculator](https://github.com/abhishekhbihari007/MoneyCalculator)

---

Built with ❤️ for Indian professionals

