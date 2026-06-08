import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import EnquiryForm from '@/components/contact/EnquiryForm'

global.fetch = jest.fn()

describe('EnquiryForm', () => {
  beforeEach(() => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => ({ success: true }),
    })
  })

  afterEach(() => jest.clearAllMocks())

  it('shows validation errors when required fields are empty on submit', async () => {
    render(<EnquiryForm />)
    fireEvent.click(screen.getByRole('button', { name: /send enquiry/i }))
    await waitFor(() => {
      expect(screen.getByText(/your name is required/i)).toBeInTheDocument()
      expect(screen.getByText(/email address is required/i)).toBeInTheDocument()
      expect(screen.getByText(/approximate date is required/i)).toBeInTheDocument()
    })
  })

  it('shows error for invalid email format', async () => {
    render(<EnquiryForm />)
    await userEvent.type(screen.getByLabelText(/your name/i), 'Jane')
    await userEvent.type(screen.getByLabelText(/email address/i), 'not-an-email')
    await userEvent.type(screen.getByLabelText(/approximate date/i), 'June 2027')
    fireEvent.click(screen.getByRole('button', { name: /send enquiry/i }))
    await waitFor(() => {
      expect(screen.getByText(/please enter a valid email/i)).toBeInTheDocument()
    })
  })

  it('submits form and shows success message with valid data', async () => {
    render(<EnquiryForm />)
    await userEvent.type(screen.getByLabelText(/your name/i), 'Jane Smith')
    await userEvent.type(screen.getByLabelText(/email address/i), 'jane@example.com')
    await userEvent.type(screen.getByLabelText(/approximate date/i), 'June 2027')
    fireEvent.click(screen.getByRole('button', { name: /send enquiry/i }))
    await waitFor(() => {
      expect(screen.getByText(/thank you/i)).toBeInTheDocument()
    })
    expect(global.fetch).toHaveBeenCalledWith(
      '/api/contact',
      expect.objectContaining({ method: 'POST' })
    )
  })

  it('shows error message if API call fails', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      json: async () => ({ error: 'Server error' }),
    })
    render(<EnquiryForm />)
    await userEvent.type(screen.getByLabelText(/your name/i), 'Jane')
    await userEvent.type(screen.getByLabelText(/email address/i), 'jane@example.com')
    await userEvent.type(screen.getByLabelText(/approximate date/i), 'June 2027')
    fireEvent.click(screen.getByRole('button', { name: /send enquiry/i }))
    await waitFor(() => {
      expect(screen.getByText(/something went wrong/i)).toBeInTheDocument()
    })
  })
})
