import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import InHandSalaryCalculator from '../page'

// Mock Next.js Link component
jest.mock('next/link', () => {
  const MockLink = ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>
  }
  MockLink.displayName = 'MockLink'
  return MockLink
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

describe('In-Hand Salary Calculator', () => {
  beforeEach(() => {
    // Clear any previous state
    jest.clearAllMocks()
  })

  it('renders the calculator form', () => {
    render(<InHandSalaryCalculator />)
    
    expect(screen.getByText('In-Hand Salary Calculator')).toBeInTheDocument()
    expect(screen.getByLabelText(/Annual CTC/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Basic Salary Percentage/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/HRA Percentage/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Your Age/i)).toBeInTheDocument()
    expect(screen.getByText('Calculate Salary')).toBeInTheDocument()
  })

  it('shows error alert when CTC is invalid', async () => {
    const user = userEvent.setup()
    const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {})
    
    render(<InHandSalaryCalculator />)
    
    const calculateButton = screen.getByText('Calculate Salary')
    await user.click(calculateButton)
    
    expect(alertSpy).toHaveBeenCalledWith('Please enter a valid CTC')
    
    alertSpy.mockRestore()
  })

  it('calculates in-hand salary for new tax regime', async () => {
    const user = userEvent.setup()
    
    render(<InHandSalaryCalculator />)
    
    // Fill in the form
    const ctcInput = screen.getByLabelText(/Annual CTC/i)
    const basicInput = screen.getByLabelText(/Basic Salary Percentage/i)
    const hraInput = screen.getByLabelText(/HRA Percentage/i)
    const ageInput = screen.getByLabelText(/Your Age/i)
    const calculateButton = screen.getByText('Calculate Salary')
    
    await user.clear(ctcInput)
    await user.type(ctcInput, '1000000')
    await user.clear(basicInput)
    await user.type(basicInput, '40')
    await user.clear(hraInput)
    await user.type(hraInput, '50')
    await user.clear(ageInput)
    await user.type(ageInput, '30')
    
    // Ensure new tax regime is selected
    const regimeSelect = screen.getByLabelText(/Tax Regime/i)
    expect(regimeSelect).toHaveValue('new')
    
    await user.click(calculateButton)
    
    // Wait for results to appear
    await waitFor(() => {
      expect(screen.getByText('Salary Breakdown')).toBeInTheDocument()
    })
    
    // Check that results are displayed
    expect(screen.getByText(/Monthly In-Hand Salary/i)).toBeInTheDocument()
    expect(screen.getByText(/Gross Salary/i)).toBeInTheDocument()
    expect(screen.getAllByText(/Basic Salary/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/HRA/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/Deductions/i).length).toBeGreaterThan(0)
  })

  it('calculates in-hand salary for old tax regime', async () => {
    const user = userEvent.setup()
    
    render(<InHandSalaryCalculator />)
    
    // Fill in the form
    const ctcInput = screen.getByLabelText(/Annual CTC/i)
    const basicInput = screen.getByLabelText(/Basic Salary Percentage/i)
    const hraInput = screen.getByLabelText(/HRA Percentage/i)
    const ageInput = screen.getByLabelText(/Your Age/i)
    const regimeSelect = screen.getByLabelText(/Tax Regime/i)
    const calculateButton = screen.getByText('Calculate Salary')
    
    await user.clear(ctcInput)
    await user.type(ctcInput, '1000000')
    await user.clear(basicInput)
    await user.type(basicInput, '40')
    await user.clear(hraInput)
    await user.type(hraInput, '50')
    await user.clear(ageInput)
    await user.type(ageInput, '30')
    
    // Select old tax regime
    await user.selectOptions(regimeSelect, 'old')
    expect(regimeSelect).toHaveValue('old')
    
    await user.click(calculateButton)
    
    // Wait for results to appear
    await waitFor(() => {
      expect(screen.getByText('Salary Breakdown')).toBeInTheDocument()
    })
    
    // Check that results are displayed
    expect(screen.getByText(/Monthly In-Hand Salary/i)).toBeInTheDocument()
  })

  it('updates input values correctly', async () => {
    const user = userEvent.setup()
    
    render(<InHandSalaryCalculator />)
    
    const ctcInput = screen.getByLabelText(/Annual CTC/i) as HTMLInputElement
    const basicInput = screen.getByLabelText(/Basic Salary Percentage/i) as HTMLInputElement
    
    await user.clear(ctcInput)
    await user.type(ctcInput, '1500000')
    expect(ctcInput.value).toBe('1500000')
    
    await user.clear(basicInput)
    await user.type(basicInput, '45')
    expect(basicInput.value).toBe('45')
  })

  it('displays formatted currency values', async () => {
    const user = userEvent.setup()
    
    render(<InHandSalaryCalculator />)
    
    const ctcInput = screen.getByLabelText(/Annual CTC/i)
    const calculateButton = screen.getByText('Calculate Salary')
    
    await user.clear(ctcInput)
    await user.type(ctcInput, '1000000')
    
    await user.click(calculateButton)
    
    await waitFor(() => {
      expect(screen.getByText('Salary Breakdown')).toBeInTheDocument()
    })
    
    // Check that currency is formatted (should contain numbers)
    const resultContainer = screen.getByText(/Monthly In-Hand Salary/i).closest('div')?.parentElement
    const resultText = resultContainer?.textContent || ''
    // Should contain currency formatted numbers
    expect(resultText).toMatch(/\d/)
  })
})

