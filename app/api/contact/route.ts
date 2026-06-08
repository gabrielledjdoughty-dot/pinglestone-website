import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

function sanitize(value: string): string {
  return value.replace(/[\r\n]/g, ' ').trim()
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const rawName = String(body.name ?? '')
  const rawEmail = String(body.email ?? '')
  const rawDate = String(body.date ?? '')
  const rawPartnerName = String(body.partnerName ?? '')
  const rawMessage = String(body.message ?? '')

  if (!rawName.trim()) {
    return NextResponse.json({ error: 'Name is required' }, { status: 400 })
  }
  if (!rawEmail.trim()) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 })
  }
  if (!rawDate.trim()) {
    return NextResponse.json({ error: 'Date is required' }, { status: 400 })
  }

  // Length limits
  if (rawName.length > 200) {
    return NextResponse.json({ error: 'Name is too long' }, { status: 400 })
  }
  if (rawEmail.length > 254) {
    return NextResponse.json({ error: 'Email is too long' }, { status: 400 })
  }
  if (rawDate.length > 100) {
    return NextResponse.json({ error: 'Date is too long' }, { status: 400 })
  }
  if (rawMessage.length > 5000) {
    return NextResponse.json({ error: 'Message is too long' }, { status: 400 })
  }

  // Email format validation
  if (!EMAIL_REGEX.test(rawEmail.trim())) {
    return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
  }

  // Sanitize: strip newlines to prevent header injection
  const name = sanitize(rawName)
  const email = sanitize(rawEmail)
  const date = sanitize(rawDate)
  const partnerName = sanitize(rawPartnerName)
  const message = rawMessage.replace(/\r/g, '').trim()

  const emailBody = [
    `New wedding enquiry from ${name}${partnerName ? ` & ${partnerName}` : ''}`,
    '',
    `Email: ${email}`,
    `Approximate date: ${date}`,
    ...(message ? ['', 'Message:', message] : []),
  ].join('\n')

  const { error } = await resend.emails.send({
    from: process.env.FROM_EMAIL ?? 'noreply@pinglestone.com',
    to: 'dw@pinglestone.com',
    replyTo: email,
    subject: `New Wedding Enquiry from ${name}`,
    text: emailBody,
  })

  if (error) {
    console.error('Resend error:', error)
    return NextResponse.json(
      { error: 'Failed to send email. Please try again.' },
      { status: 500 }
    )
  }

  return NextResponse.json({ success: true })
}
