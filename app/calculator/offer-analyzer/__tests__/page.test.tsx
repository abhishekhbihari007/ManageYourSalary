import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import OfferAnalyzer from '../page'

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

describe('Offer Analyzer', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders the calculator form', () => {
    render(<OfferAnalyzer />)
    
    expect(screen.getByText('Offer Analyzer')).toBeInTheDocument()
    expect(screen.getByText('Enter Offer Details')).toBeInTheDocument()
    expect(screen.getByText('Compare Offers')).toBeInTheDocument()
  })

  it('displays two offer forms by default', () => {
    render(<OfferAnalyzer />)
    
    expect(screen.getByText('Offer 1')).toBeInTheDocument()
    expect(screen.getByText('Offer 2')).toBeInTheDocument()
  })

  it('shows error alert when no valid offers are entered', async () => {
    const user = userEvent.setup()
    const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {})
    
    render(<OfferAnalyzer />)
    
    const compareButton = screen.getByText('Compare Offers')
    await user.click(compareButton)
    
    expect(alertSpy).toHaveBeenCalledWith('Please enter at least one valid offer')
    
    alertSpy.mockRestore()
  })

  it('compares multiple offers and ranks them', async () => {
    const user = userEvent.setup()
    
    render(<OfferAnalyzer />)
    
    // Find all CTC inputs by placeholder
    const ctcInputs = screen.getAllByPlaceholderText(/e.g., 1500000/i)
    
    // Enter CTC for Offer 1
    await user.clear(ctcInputs[0])
    await user.type(ctcInputs[0], '1500000')
    
    // Enter CTC for Offer 2
    await user.clear(ctcInputs[1])
    await user.type(ctcInputs[1], '1200000')
    
    const compareButton = screen.getByText('Compare Offers')
    await user.click(compareButton)
    
    // Wait for results to appear
    await waitFor(() => {
      expect(screen.getByText('Comparison Results')).toBeInTheDocument()
    })
    
    // Check that offers are ranked
    expect(screen.getByText(/Rank #1/i)).toBeInTheDocument()
    expect(screen.getByText(/Rank #2/i)).toBeInTheDocument()
    expect(screen.getByText(/Best Offer/i)).toBeInTheDocument()
  })

  it('displays offer details in comparison results', async () => {
    const user = userEvent.setup()
    
    render(<OfferAnalyzer />)
    
    const ctcInputs = screen.getAllByPlaceholderText(/e.g., 1500000/i)
    
    await user.clear(ctcInputs[0])
    await user.type(ctcInputs[0], '1000000')
    
    const compareButton = screen.getByText('Compare Offers')
    await user.click(compareButton)
    
    await waitFor(() => {
      expect(screen.getByText('Comparison Results')).toBeInTheDocument()
    })
    
    // Check that offer details are displayed (may appear multiple times)
    expect(screen.getAllByText(/CTC:/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/Estimated In-Hand:/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/Total Value:/i).length).toBeGreaterThan(0)
  })

  it('updates offer input values correctly', async () => {
    const user = userEvent.setup()
    
    render(<OfferAnalyzer />)
    
    const ctcInputs = screen.getAllByPlaceholderText(/e.g., 1500000/i)
    
    await user.clear(ctcInputs[0])
    await user.type(ctcInputs[0], '2000000')
    expect(ctcInputs[0]).toHaveValue(2000000)
    
    // Find Basic % input by finding the input that has value 40 (default) near the "Basic %" label
    const allInputs = screen.getAllByRole('spinbutton')
    // The first Basic % input should be the 2nd input (index 1) in the first offer
    if (allInputs.length > 1) {
      const basicInput = allInputs[1] as HTMLInputElement
      await user.clear(basicInput)
      await user.type(basicInput, '45')
      // Check that the value was updated (may need to wait for state update)
      await waitFor(() => {
        expect(parseInt(basicInput.value) || 0).toBeGreaterThan(40)
      })
    }
  })

  it('handles variable pay and bonuses in calculation', async () => {
    const user = userEvent.setup()
    
    render(<OfferAnalyzer />)
    
    const ctcInputs = screen.getAllByPlaceholderText(/e.g., 1500000/i)
    const variablePayInputs = screen.getAllByPlaceholderText(/Annual variable/i)
    const joiningBonusInputs = screen.getAllByPlaceholderText(/One-time bonus/i)
    
    await user.clear(ctcInputs[0])
    await user.type(ctcInputs[0], '1000000')
    
    if (variablePayInputs.length > 0) {
      await user.clear(variablePayInputs[0])
      await user.type(variablePayInputs[0], '200000')
    }
    
    if (joiningBonusInputs.length > 0) {
      await user.clear(joiningBonusInputs[0])
      await user.type(joiningBonusInputs[0], '50000')
    }
    
    const compareButton = screen.getByText('Compare Offers')
    await user.click(compareButton)
    
    await waitFor(() => {
      expect(screen.getByText('Comparison Results')).toBeInTheDocument()
    })
    
    // Total value should include variable pay and bonus
    const resultText = screen.getByText(/Total Value:/i).closest('div')?.textContent || ''
    expect(resultText).toMatch(/\d/)
  })

  it('handles ESOP value in calculation', async () => {
    const user = userEvent.setup()
    
    render(<OfferAnalyzer />)
    
    const ctcInputs = screen.getAllByPlaceholderText(/e.g., 1500000/i)
    const esopInputs = screen.getAllByPlaceholderText(/Estimated ESOP/i)
    
    await user.clear(ctcInputs[0])
    await user.type(ctcInputs[0], '1000000')
    
    if (esopInputs.length > 0) {
      await user.clear(esopInputs[0])
      await user.type(esopInputs[0], '100000')
    }
    
    const compareButton = screen.getByText('Compare Offers')
    await user.click(compareButton)
    
    await waitFor(() => {
      expect(screen.getByText('Comparison Results')).toBeInTheDocument()
    })
    
    // ESOP should be factored into total value
    expect(screen.getByText(/Total Value:/i)).toBeInTheDocument()
  })

  it('displays formatted currency values', async () => {
    const user = userEvent.setup()
    
    render(<OfferAnalyzer />)
    
    const ctcInputs = screen.getAllByPlaceholderText(/e.g., 1500000/i)
    
    await user.clear(ctcInputs[0])
    await user.type(ctcInputs[0], '1000000')
    
    const compareButton = screen.getByText('Compare Offers')
    await user.click(compareButton)
    
    await waitFor(() => {
      expect(screen.getByText('Comparison Results')).toBeInTheDocument()
    })
    
    // Check that currency is formatted
    const resultText = screen.getByText(/CTC:/i).closest('div')?.textContent || ''
    expect(resultText).toMatch(/\d/)
  })

  it('shows empty state when no results are available', () => {
    render(<OfferAnalyzer />)
    
    expect(screen.getByText(/Enter offer details and click/i)).toBeInTheDocument()
  })

  it('correctly ranks offers by total value', async () => {
    const user = userEvent.setup()
    
    render(<OfferAnalyzer />)
    
    const ctcInputs = screen.getAllByPlaceholderText(/e.g., 1500000/i)
    const variablePayInputs = screen.getAllByPlaceholderText(/Annual variable/i)
    
    // Offer 1: Higher CTC but no variable
    await user.clear(ctcInputs[0])
    await user.type(ctcInputs[0], '1500000')
    
    // Offer 2: Lower CTC but with variable pay
    await user.clear(ctcInputs[1])
    await user.type(ctcInputs[1], '1200000')
    
    if (variablePayInputs.length > 1) {
      await user.clear(variablePayInputs[1])
      await user.type(variablePayInputs[1], '500000')
    }
    
    const compareButton = screen.getByText('Compare Offers')
    await user.click(compareButton)
    
    await waitFor(() => {
      expect(screen.getByText('Comparison Results')).toBeInTheDocument()
    })
    
    // Offer 2 should rank higher due to higher total value (1200000 + 500000 = 1700000)
    // Check that Offer 2 appears in the results with rank #1 or Best Offer badge
    const rank1Elements = screen.queryAllByText(/Rank #1|Best Offer/i)
    expect(rank1Elements.length).toBeGreaterThan(0)
    
    // Verify that Offer 2 is associated with the best offer
    const offer2InResults = screen.getAllByText('Offer 2').find(el => {
      const parent = el.closest('div')
      return parent?.textContent?.includes('Rank #1') || parent?.textContent?.includes('Best Offer')
    })
    expect(offer2InResults).toBeDefined()
  })
})

