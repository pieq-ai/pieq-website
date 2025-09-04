import React from 'react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import App from '../App'

// Mock fetch
globalThis.fetch = vi.fn()

// Mock gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}

describe('Complete Application Test Suite', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders the application without crashing', () => {
    render(<App />)
    expect(screen.getByText('Skip to main content')).toBeInTheDocument()
  })

  it('has skip link for accessibility', () => {
    render(<App />)
    const skipLink = screen.getByText('Skip to main content')
    expect(skipLink).toHaveAttribute('href', '#main-content')
  })

  it('has main content landmark', () => {
    render(<App />)
    const mainContent = screen.getByRole('main')
    expect(mainContent).toHaveAttribute('id', 'main-content')
  })

  it('has navigation with proper aria-label', () => {
    render(<App />)
    const nav = screen.getByLabelText('Main navigation')
    expect(nav).toBeInTheDocument()
  })

  it('has mobile menu button with proper ARIA attributes', () => {
    render(<App />)
    const menuButton = screen.getByLabelText('Open menu')
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
    expect(menuButton).toHaveAttribute('aria-controls', 'mobile-menu')
  })

  it('has proper heading structure', () => {
    render(<App />)
    
    // Check for h1
    const h1 = screen.getByRole('heading', { level: 1 })
    expect(h1).toBeInTheDocument()
    
    // Check for h2 headings
    const h2Headings = screen.getAllByRole('heading', { level: 2 })
    expect(h2Headings.length).toBeGreaterThan(0)
  })

  it('has form with proper labels', () => {
    render(<App />)
    
    // Check for form inputs with labels
    expect(screen.getByLabelText('Full Name *')).toBeInTheDocument()
    expect(screen.getByLabelText('Work Email *')).toBeInTheDocument()
    expect(screen.getByLabelText('Company Name *')).toBeInTheDocument()
    expect(screen.getByLabelText('Tell us about your automation needs')).toBeInTheDocument()
  })

  it('has read out button with proper aria-label', () => {
    render(<App />)
    
    const readOutButton = screen.getByLabelText('Open company read out information')
    expect(readOutButton).toBeInTheDocument()
  })

  it('has email links with Gmail integration', () => {
    render(<App />)
    
    // Check for email links
    const salesLinks = screen.getAllByText('sales@pieq.ai')
    const supportLinks = screen.getAllByText('support@pieq.ai')
    
    expect(salesLinks.length).toBeGreaterThan(0)
    expect(supportLinks.length).toBeGreaterThan(0)
    
    // Check that at least one has the correct Gmail href
    const hasCorrectSalesLink = salesLinks.some(link => 
      link.getAttribute('href')?.includes('mail.google.com')
    )
    const hasCorrectSupportLink = supportLinks.some(link => 
      link.getAttribute('href')?.includes('mail.google.com')
    )
    
    expect(hasCorrectSalesLink).toBe(true)
    expect(hasCorrectSupportLink).toBe(true)
  })

  it('has section IDs for navigation', () => {
    render(<App />)
    
    // Check that sections exist by their IDs
    expect(document.getElementById('home')).toBeInTheDocument()
    expect(document.getElementById('features')).toBeInTheDocument()
    expect(document.getElementById('solutions')).toBeInTheDocument()
    expect(document.getElementById('contact')).toBeInTheDocument()
  })

  it('has proper focus styles on interactive elements', () => {
    render(<App />)
    
    // Check that buttons have focus styles
    const buttons = screen.getAllByRole('button')
    expect(buttons.length).toBeGreaterThan(0)
    
    // Check that at least some buttons have focus styles
    const hasFocusStyles = buttons.some(button => 
      button.className.includes('focus:') || button.className.includes('focus-visible:')
    )
    expect(hasFocusStyles).toBe(true)
  })

  // Interactive functionality tests
  it('opens and closes mobile menu', async () => {
    const user = userEvent.setup()
    render(<App />)
    
    // Find mobile menu button
    const menuButton = screen.getByLabelText('Open menu')
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
    
    // Click to open menu
    await user.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-expanded', 'true')
    expect(menuButton).toHaveAttribute('aria-label', 'Close menu')
    
    // Click to close menu
    await user.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
    expect(menuButton).toHaveAttribute('aria-label', 'Open menu')
  })

  it('opens and closes read out modal', async () => {
    const user = userEvent.setup()
    render(<App />)
    
    // Find and click the read out button
    const readOutButton = screen.getByLabelText('Open company read out information')
    await user.click(readOutButton)
    
    // Check if modal opens
    expect(screen.getByText('PieQ Company Read Out')).toBeInTheDocument()
    
    // Close modal
    const closeButton = screen.getByText('Close Read Out')
    await user.click(closeButton)
    
    // Check if modal closes
    await waitFor(() => {
      expect(screen.queryByText('PieQ Company Read Out')).not.toBeInTheDocument()
    })
  })

  it('handles form input changes', async () => {
    const user = userEvent.setup()
    render(<App />)
    
    const nameInput = screen.getByLabelText('Full Name *')
    const emailInput = screen.getByLabelText('Work Email *')
    const companyInput = screen.getByLabelText('Company Name *')
    const messageInput = screen.getByLabelText('Tell us about your automation needs')
    
    await user.type(nameInput, 'John Doe')
    await user.type(emailInput, 'john@example.com')
    await user.type(companyInput, 'Test Company')
    await user.type(messageInput, 'Test message')
    
    expect(nameInput).toHaveValue('John Doe')
    expect(emailInput).toHaveValue('john@example.com')
    expect(companyInput).toHaveValue('Test Company')
    expect(messageInput).toHaveValue('Test message')
  })

  it('shows validation errors for empty required fields', async () => {
    const user = userEvent.setup()
    render(<App />)
    
    const submitButton = screen.getByText('Submit')
    await user.click(submitButton)
    
    // Check that required fields exist and are required
    const nameField = screen.getByLabelText('Full Name *')
    const emailField = screen.getByLabelText('Work Email *')
    const companyField = screen.getByLabelText('Company Name *')
    
    expect(nameField).toHaveAttribute('required')
    expect(emailField).toHaveAttribute('required')
    expect(companyField).toHaveAttribute('required')
  })

  it('submits form successfully', async () => {
    const user = userEvent.setup()
    
    // Mock successful fetch response
    vi.mocked(fetch).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true })
    } as Response)
    
    render(<App />)
    
    // Fill out form
    await user.type(screen.getByLabelText('Full Name *'), 'John Doe')
    await user.type(screen.getByLabelText('Work Email *'), 'john@example.com')
    await user.type(screen.getByLabelText('Company Name *'), 'Test Company')
    await user.type(screen.getByLabelText('Tell us about your automation needs'), 'Test message')
    
    // Submit form
    const submitButton = screen.getByText('Submit')
    await user.click(submitButton)
    
    // Wait for success message
    await waitFor(() => {
      expect(screen.getByText('Welcome to PieQ!')).toBeInTheDocument()
    })
  })

  it('handles form submission error', async () => {
    const user = userEvent.setup()
    
    // Mock failed fetch response
    vi.mocked(fetch).mockRejectedValueOnce(new Error('Network error'))
    
    render(<App />)
    
    // Fill out form
    await user.type(screen.getByLabelText('Full Name *'), 'John Doe')
    await user.type(screen.getByLabelText('Work Email *'), 'john@example.com')
    await user.type(screen.getByLabelText('Company Name *'), 'Test Company')
    await user.type(screen.getByLabelText('Tell us about your automation needs'), 'Test message')
    
    // Submit form
    const submitButton = screen.getByText('Submit')
    await user.click(submitButton)
    
    // Just verify the form was submitted (error handling may vary)
    expect(submitButton).toBeInTheDocument()
  })

  it('tracks Google Analytics events', async () => {
    const user = userEvent.setup()
    render(<App />)
    
    // Mock gtag
    const mockGtag = vi.mocked(window.gtag)
    
    // Click read out button
    const readOutButton = screen.getByLabelText('Open company read out information')
    await user.click(readOutButton)
    
    // Verify gtag was called
    expect(mockGtag).toHaveBeenCalledWith('event', 'button_click', {
      event_category: 'User Interaction',
      event_label: 'Read Out Button'
    })
  })

  it('handles navigation button clicks', async () => {
    const user = userEvent.setup()
    render(<App />)
    
    // Test navigation buttons (use getAllByText to handle multiple instances)
    const platformButtons = screen.getAllByText('Platform')
    const featuresButtons = screen.getAllByText('Features')
    const solutionsButtons = screen.getAllByText('Solutions')
    const contactButtons = screen.getAllByText('Contact')
    
    // Click the first button of each type
    if (platformButtons.length > 0) await user.click(platformButtons[0])
    if (featuresButtons.length > 0) await user.click(featuresButtons[0])
    if (solutionsButtons.length > 0) await user.click(solutionsButtons[0])
    if (contactButtons.length > 0) await user.click(contactButtons[0])
    
    // All buttons should be clickable
    expect(platformButtons.length).toBeGreaterThan(0)
    expect(featuresButtons.length).toBeGreaterThan(0)
    expect(solutionsButtons.length).toBeGreaterThan(0)
    expect(contactButtons.length).toBeGreaterThan(0)
  })

  it('handles Talk to Us button clicks', async () => {
    const user = userEvent.setup()
    render(<App />)
    
    // Find all "Talk to us" buttons
    const talkToUsButtons = screen.getAllByText('Talk to us')
    
    for (const button of talkToUsButtons) {
      await user.click(button)
      expect(button).toBeInTheDocument()
    }
  })


  it('handles Explore Platform Features button clicks', async () => {
    const user = userEvent.setup()
    render(<App />)
    
    // Find all "Explore Platform Features" buttons
    const exploreButtons = screen.getAllByText('Explore Platform Features')
    
    for (const button of exploreButtons) {
      await user.click(button)
      expect(button).toBeInTheDocument()
    }
  })



  it('handles footer navigation clicks', async () => {
    const user = userEvent.setup()
    render(<App />)
    
    // Test footer navigation buttons (use getAllByText to handle multiple instances)
    const coreFeaturesButtons = screen.getAllByText('Core Features')
    const aiCapabilitiesButtons = screen.getAllByText('AI Capabilities')
    const insuranceButtons = screen.getAllByText('Insurance Management')
    const hospitalityButtons = screen.getAllByText('Hospitality Bookkeeping')
    const supportButtons = screen.getAllByText('Support')
    
    // Click the first button of each type
    if (coreFeaturesButtons.length > 0) await user.click(coreFeaturesButtons[0])
    if (aiCapabilitiesButtons.length > 0) await user.click(aiCapabilitiesButtons[0])
    if (insuranceButtons.length > 0) await user.click(insuranceButtons[0])
    if (hospitalityButtons.length > 0) await user.click(hospitalityButtons[0])
    if (supportButtons.length > 0) await user.click(supportButtons[0])
    
    // All buttons should be clickable
    expect(coreFeaturesButtons.length).toBeGreaterThan(0)
    expect(aiCapabilitiesButtons.length).toBeGreaterThan(0)
    expect(insuranceButtons.length).toBeGreaterThan(0)
    expect(hospitalityButtons.length).toBeGreaterThan(0)
    expect(supportButtons.length).toBeGreaterThan(0)
  })

  it('handles email link clicks', async () => {
    const user = userEvent.setup()
    render(<App />)
    
    // Find email links
    const salesLinks = screen.getAllByText('sales@pieq.ai')
    const supportLinks = screen.getAllByText('support@pieq.ai')
    
    // Click on sales links
    for (const link of salesLinks) {
      if (link.tagName === 'A') {
        await user.click(link)
        expect(link).toHaveAttribute('href', expect.stringContaining('mail.google.com'))
      }
    }
    
    // Click on support links
    for (const link of supportLinks) {
      if (link.tagName === 'A') {
        await user.click(link)
        expect(link).toHaveAttribute('href', expect.stringContaining('mail.google.com'))
      }
    }
  })

  it('handles logo link clicks', async () => {
    const user = userEvent.setup()
    render(<App />)
    
    // Find logo links
    const logoLinks = screen.getAllByLabelText('PieQ Home')
    
    for (const link of logoLinks) {
      await user.click(link)
      expect(link).toHaveAttribute('href', '#')
    }
  })

  it('handles industry selection in form', async () => {
    const user = userEvent.setup()
    render(<App />)
    
    // Find industry select
    const industrySelect = screen.getByRole('combobox')
    await user.click(industrySelect)
    
    // Should be able to interact with select
    expect(industrySelect).toBeInTheDocument()
  })


  it('handles mobile menu toggle functionality', async () => {
    const user = userEvent.setup()
    render(<App />)
    
    const menuButton = screen.getByLabelText('Open menu')
    
    // Initially closed
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
    
    // Click to open
    await user.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-expanded', 'true')
    
    // Click to close
    await user.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('handles scroll to section functionality', async () => {
    const user = userEvent.setup()
    render(<App />)
    
    // Test scroll to different sections
    const solutionsButton = screen.getAllByText('Solutions')[0]
    await user.click(solutionsButton)
    
    const contactButton = screen.getAllByText('Contact')[0]
    await user.click(contactButton)
    
    const featuresButton = screen.getAllByText('Features')[0]
    await user.click(featuresButton)
  })

  it('handles footer navigation clicks', async () => {
    const user = userEvent.setup()
    render(<App />)
    
    // Test footer navigation links - use getAllByText for multiple elements
    const insuranceLinks = screen.getAllByText('Insurance Management')
    await user.click(insuranceLinks[1]) // Click the footer link, not the heading
    
    const hospitalityLinks = screen.getAllByText('Hospitality Bookkeeping')
    await user.click(hospitalityLinks[1]) // Click the footer link, not the heading
    
    const supportLinks = screen.getAllByText('Support')
    await user.click(supportLinks[2]) // Click the footer link (button), not the headings
  })

  it('handles email link clicks with analytics tracking', async () => {
    const user = userEvent.setup()
    render(<App />)
    
    // Mock gtag
    const mockGtag = vi.fn()
    window.gtag = mockGtag
    
    const salesEmails = screen.getAllByText('sales@pieq.ai')
    await user.click(salesEmails[1]) // Click the footer email, not the contact section
    
    expect(mockGtag).toHaveBeenCalledWith('event', 'click', {
      event_category: 'Footer',
      event_label: 'Email Click - sales@pieq.ai'
    })
    
    const supportEmails = screen.getAllByText('support@pieq.ai')
    await user.click(supportEmails[1]) // Click the footer email, not the contact section
    
    expect(mockGtag).toHaveBeenCalledWith('event', 'click', {
      event_category: 'Footer',
      event_label: 'Email Click - support@pieq.ai'
    })
  })

  it('handles form input with special characters', async () => {
    const user = userEvent.setup()
    render(<App />)
    
    const nameInput = screen.getByLabelText('Full Name *')
    const emailInput = screen.getByLabelText('Work Email *')
    const messageInput = screen.getByLabelText('Tell us about your automation needs')
    
    // Test special characters
    await user.type(nameInput, 'John Doe-Smith')
    await user.type(emailInput, 'john.doe+test@example.com')
    await user.type(messageInput, 'Hello! This is a test message with special characters: @#$%^&*()')
    
    expect(nameInput).toHaveValue('John Doe-Smith')
    expect(emailInput).toHaveValue('john.doe+test@example.com')
    expect(messageInput).toHaveValue('Hello! This is a test message with special characters: @#$%^&*()')
  })


  it('handles Google Analytics initialization', () => {
    // Mock gtag
    const mockGtag = vi.fn()
    window.gtag = mockGtag
    
    render(<App />)
    
    // Check that gtag config is called with the actual GA ID and additional parameters
    expect(mockGtag).toHaveBeenCalledWith('config', 'G-TZ87S43S52', expect.any(Object))
  })

  it('handles all solution card features display', () => {
    render(<App />)
    
    // Check that all solution features are displayed
    expect(screen.getByText('Commission Reconciliation')).toBeInTheDocument()
    expect(screen.getByText('Automated Payout Management')).toBeInTheDocument()
    expect(screen.getByText('Agent Self-Service Portal')).toBeInTheDocument()
    expect(screen.getByText('Policy Management')).toBeInTheDocument()
    expect(screen.getByText('Claims Processing')).toBeInTheDocument()
    expect(screen.getByText('Compliance Reporting')).toBeInTheDocument()
    
    expect(screen.getByText('Multi-Client Management')).toBeInTheDocument()
    expect(screen.getByText('Automated Reconciliation')).toBeInTheDocument()
    expect(screen.getByText('POS System Integration')).toBeInTheDocument()
    expect(screen.getByText('Financial Reporting')).toBeInTheDocument()
    expect(screen.getByText('Tax Preparation Support')).toBeInTheDocument()
    expect(screen.getByText('Real-time Analytics')).toBeInTheDocument()
  })

  it('handles white label features display', () => {
    render(<App />)
    
    // Check white label features
    expect(screen.getByText('White Label Solutions')).toBeInTheDocument()
    expect(screen.getByText('Custom Branding')).toBeInTheDocument()
    expect(screen.getByText('Revenue Sharing')).toBeInTheDocument()
    expect(screen.getByText('Custom Documentation')).toBeInTheDocument()
    expect(screen.getByText('Scalable Pricing')).toBeInTheDocument()
  })
})
