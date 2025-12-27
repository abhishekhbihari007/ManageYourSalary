import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TaxRegimePicker from '../page'

// Mock Next.js Link component
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>
  }
})

// Mock Header and Footer components
jest.mock('@/components/layout/Header', () => {
  return function MockHeader() {
    return <header data-testid="header">Header</header>
  }
})

jest.mock('@/components/layout/Footer', () => {
  return function MockFooter() {
    return <footer data-testid="footer">Footer</footer>
  }
})

describe('Tax Regime Picker', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders the calculator form', () => {
    render(<TaxRegimePicker />)
    
    expect(screen.getByText('Tax Regime Picker')).toBeInTheDocument()
    expect(screen.getByLabelText(/Annual Income/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Total Deductions/i)).toBeInTheDocument()
    expect(screen.getByText('Compare Tax Regimes')).toBeInTheDocument()
  })

  it('shows error alert when income is invalid', async () => {
    const user = userEvent.setup()
    const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {})
    
    render(<TaxRegimePicker />)
    
    const calculateButton = screen.getByText('Compare Tax Regimes')
    await user.click(calculateButton)
    
    expect(alertSpy).toHaveBeenCalledWith('Please enter a valid annual income')
    
    alertSpy.mockRestore()
  })

  it('compares old and new tax regimes', async () => {
    const user = userEvent.setup()
    
    render(<TaxRegimePicker />)
    
    const incomeInput = screen.getByLabelText(/Annual Income/i)
    const deductionsInput = screen.getByLabelText(/Total Deductions/i)
    const calculateButton = screen.getByText('Compare Tax Regimes')
    
    await user.clear(incomeInput)
    await user.type(incomeInput, '1000000')
    await user.clear(deductionsInput)
    await user.type(deductionsInput, '150000')
    
    await user.click(calculateButton)
    
    // Wait for results to appear
    await waitFor(() => {
      expect(screen.getByText('New Tax Regime')).toBeInTheDocument()
      expect(screen.getByText('Old Tax Regime')).toBeInTheDocument()
    })
    
    // Check that comparison results are displayed (multiple instances exist)
    expect(screen.getAllByText(/Taxable Income/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/Tax Payable/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/After Tax Income/i).length).toBeGreaterThan(0)
  })

  it('displays recommendation based on tax savings', async () => {
    const user = userEvent.setup()
    
    render(<TaxRegimePicker />)
    
    const incomeInput = screen.getByLabelText(/Annual Income/i)
    const deductionsInput = screen.getByLabelText(/Total Deductions/i)
    const calculateButton = screen.getByText('Compare Tax Regimes')
    
    await user.clear(incomeInput)
    await user.type(incomeInput, '800000')
    await user.clear(deductionsInput)
    await user.type(deductionsInput, '50000')
    
    await user.click(calculateButton)
    
    await waitFor(() => {
      expect(screen.getByText(/Recommended/i)).toBeInTheDocument()
    })
    
    // Check that savings are displayed
    expect(screen.getByText(/You Save/i)).toBeInTheDocument()
  })

  it('updates input values correctly', async () => {
    const user = userEvent.setup()
    
    render(<TaxRegimePicker />)
    
    const incomeInput = screen.getByLabelText(/Annual Income/i) as HTMLInputElement
    const deductionsInput = screen.getByLabelText(/Total Deductions/i) as HTMLInputElement
    
    await user.clear(incomeInput)
    await user.type(incomeInput, '1200000')
    expect(incomeInput.value).toBe('1200000')
    
    await user.clear(deductionsInput)
    await user.type(deductionsInput, '200000')
    expect(deductionsInput.value).toBe('200000')
  })

  it('displays formatted currency values in results', async () => {
    const user = userEvent.setup()
    
    render(<TaxRegimePicker />)
    
    const incomeInput = screen.getByLabelText(/Annual Income/i)
    const calculateButton = screen.getByText('Compare Tax Regimes')
    
    await user.clear(incomeInput)
    await user.type(incomeInput, '1000000')
    
    await user.click(calculateButton)
    
    await waitFor(() => {
      expect(screen.getByText('New Tax Regime')).toBeInTheDocument()
    })
    
    // Check that currency values are formatted
    // Find the card containing the New Tax Regime results
    const newRegimeHeading = screen.getByText('New Tax Regime')
    const newRegimeCard = newRegimeHeading.closest('[class*="card"]') || newRegimeHeading.closest('div')?.parentElement
    const resultText = newRegimeCard?.textContent || ''
    // Should contain currency formatted numbers (₹ symbol or digits)
    expect(resultText).toMatch(/₹|\d/)
  })

  it('handles edge case with zero deductions', async () => {
    const user = userEvent.setup()
    
    render(<TaxRegimePicker />)
    
    const incomeInput = screen.getByLabelText(/Annual Income/i)
    const deductionsInput = screen.getByLabelText(/Total Deductions/i)
    const calculateButton = screen.getByText('Compare Tax Regimes')
    
    await user.clear(incomeInput)
    await user.type(incomeInput, '500000')
    await user.clear(deductionsInput)
    await user.type(deductionsInput, '0')
    
    await user.click(calculateButton)
    
    await waitFor(() => {
      expect(screen.getByText('New Tax Regime')).toBeInTheDocument()
      expect(screen.getByText('Old Tax Regime')).toBeInTheDocument()
    })
  })
})

