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
})
