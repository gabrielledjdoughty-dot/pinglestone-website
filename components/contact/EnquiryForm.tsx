'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Button from '@/components/ui/Button'

interface FormData {
  name: string
  partnerName: string
  email: string
  date: string
  message: string
}

export default function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setServerError('')
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    if (res.ok) {
      setSubmitted(true)
    } else {
      setServerError('Something went wrong. Please try again or email us directly.')
    }
  }

  if (submitted) {
    return (
      <div className="bg-sage-light p-10 text-center">
        <p className="font-cormorant font-light text-3xl text-sage mb-4">
          Thank you for your enquiry
        </p>
        <p className="font-jost font-light text-base text-stone">
          We&rsquo;ll be in touch within 48 hours.
        </p>
      </div>
    )
  }

  const inputClasses =
    'w-full border border-stone/40 bg-white px-4 py-3 font-jost font-light text-base text-charcoal placeholder:text-stone/60 focus:outline-none focus:border-sage transition-colors'
  const labelClasses =
    'block font-jost font-light text-xs tracking-widest uppercase text-stone mb-2'
  const errorClasses = 'mt-1 font-jost text-xs text-red-600'

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      <div>
        <label htmlFor="name" className={labelClasses}>
          Your Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Your name"
          className={inputClasses}
          {...register('name', { required: 'Your name is required' })}
        />
        {errors.name && (
          <p className={errorClasses}>{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="partnerName" className={labelClasses}>
          Partner&rsquo;s Name{' '}
          <span className="normal-case tracking-normal">(optional)</span>
        </label>
        <input
          id="partnerName"
          type="text"
          placeholder="Partner's name"
          className={inputClasses}
          {...register('partnerName')}
        />
      </div>

      <div>
        <label htmlFor="email" className={labelClasses}>
          Email Address
        </label>
        <input
          id="email"
          type="email"
          placeholder="you@example.com"
          className={inputClasses}
          {...register('email', {
            required: 'Email address is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Please enter a valid email address',
            },
          })}
        />
        {errors.email && (
          <p className={errorClasses}>{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="date" className={labelClasses}>
          Approximate Date
        </label>
        <input
          id="date"
          type="text"
          placeholder="e.g. June 2027"
          className={inputClasses}
          {...register('date', { required: 'Approximate date is required' })}
        />
        {errors.date && (
          <p className={errorClasses}>{errors.date.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          Message{' '}
          <span className="normal-case tracking-normal">(optional)</span>
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Tell us a little about your plans..."
          className={inputClasses}
          {...register('message')}
        />
      </div>

      {serverError && (
        <p className="font-jost text-sm text-red-600">{serverError}</p>
      )}

      <Button type="submit" variant="primary" disabled={isSubmitting}>
        {isSubmitting ? 'Sending…' : 'Send Enquiry'}
      </Button>
    </form>
  )
}
