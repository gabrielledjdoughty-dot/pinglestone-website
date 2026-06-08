import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, partnerName, email, date, message } = body

  if (!name?.trim()) {
    return NextResponse.json({ error: 'Name is required' }, { status: 400 })
  }
  if (!email?.trim()) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 })
  }
  if (!date?.trim()) {
    return NextResponse.json({ error: 'Date is required' }, { status: 400 })
  }

  const emailBody = `
New wedding enquiry from ${name}${partnerName ? ` & ${partnerName}` : ''}

Email: ${email}
Approximate date: ${date}
${message ? `\nMessage:\n${message}` : ''}
  `.trim()

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
