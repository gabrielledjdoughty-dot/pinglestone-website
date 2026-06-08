/**
 * @jest-environment node
 */
import { POST } from '@/app/api/contact/route'
import { NextRequest } from 'next/server'

jest.mock('resend', () => ({
  Resend: jest.fn().mockImplementation(() => ({
    emails: {
      send: jest.fn().mockResolvedValue({ id: 'mock-id', error: null }),
    },
  })),
}))

beforeAll(() => { process.env.RESEND_API_KEY = 'test-key' })
afterAll(() => { delete process.env.RESEND_API_KEY })

function makeRequest(body: Record<string, string>) {
  return new NextRequest('http://localhost/api/contact', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  })
}

describe('POST /api/contact', () => {
  it('returns 200 and success:true with valid data', async () => {
    const req = makeRequest({
      name: 'Jane Smith',
      partnerName: 'John Smith',
      email: 'jane@example.com',
      date: '2027-06-15',
      message: 'Hello there',
    })
    const res = await POST(req)
    const body = await res.json()
    expect(res.status).toBe(200)
    expect(body.success).toBe(true)
  })

  it('returns 400 when name is missing', async () => {
    const req = makeRequest({
      email: 'jane@example.com',
      date: '2027-06-15',
    })
    const res = await POST(req)
    const body = await res.json()
    expect(res.status).toBe(400)
    expect(body.error).toBeDefined()
  })

  it('returns 400 when email is missing', async () => {
    const req = makeRequest({ name: 'Jane', date: '2027-06-15' })
    const res = await POST(req)
    expect(res.status).toBe(400)
  })

  it('returns 400 when date is missing', async () => {
    const req = makeRequest({ name: 'Jane', email: 'jane@example.com' })
    const res = await POST(req)
    expect(res.status).toBe(400)
  })

  it('returns 400 when email format is invalid', async () => {
    const req = makeRequest({
      name: 'Jane',
      email: 'not-an-email',
      date: '2027-06-15',
    })
    const res = await POST(req)
    const body = await res.json()
    expect(res.status).toBe(400)
    expect(body.error).toMatch(/invalid email/i)
  })

  it('strips newlines from name to prevent header injection', async () => {
    const { Resend } = require('resend')
    const req = makeRequest({
      name: 'Jane\nBcc: attacker@evil.com',
      email: 'jane@example.com',
      date: '2027-06-15',
    })
    const res = await POST(req)
    expect(res.status).toBe(200)
    // Resend is instantiated inside the handler — get the most recent mock instance
    const mockInstance = Resend.mock.results[Resend.mock.results.length - 1].value
    const mockSend = mockInstance.emails.send as jest.Mock
    const callArgs = mockSend.mock.calls[mockSend.mock.calls.length - 1][0]
    expect(callArgs.subject).not.toContain('\n')
    expect(callArgs.subject).not.toContain('\r')
  })
})
