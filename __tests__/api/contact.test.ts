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
    // The resend singleton is created at module load time with the top-level mock.
    // Access the send spy that was already installed by the module-level jest.mock.
    const { Resend } = require('resend')
    const mockInstance = Resend.mock.results[0].value
    const mockSend = mockInstance.emails.send as jest.Mock

    const req = makeRequest({
      name: 'Jane\nBcc: attacker@evil.com',
      email: 'jane@example.com',
      date: '2027-06-15',
    })
    const res = await POST(req)
    expect(res.status).toBe(200)
    const callArgs = mockSend.mock.calls[mockSend.mock.calls.length - 1][0]
    // The newline must be gone (that's the injection vector); the text after it
    // may survive as a harmless literal string, which is acceptable.
    expect(callArgs.subject).not.toContain('\n')
    expect(callArgs.subject).not.toContain('\r')
  })
})
