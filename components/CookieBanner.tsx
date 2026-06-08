'use client'
import { useState, useEffect } from 'react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-charcoal text-white px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <p className="font-jost font-light text-sm leading-relaxed max-w-xl">
        We use cookies to improve your experience. By continuing you agree to
        our{' '}
        <a href="/privacy-policy" className="underline hover:text-gold">
          Privacy Policy
        </a>
        .
      </p>
      <div className="flex gap-3 flex-shrink-0">
        <button
          onClick={decline}
          className="font-jost font-light text-xs tracking-widest uppercase px-5 py-2 border border-white/40 hover:border-white transition-colors"
        >
          Decline
        </button>
        <button
          onClick={accept}
          className="font-jost font-light text-xs tracking-widest uppercase px-5 py-2 bg-sage hover:bg-sage-dark transition-colors"
        >
          Accept
        </button>
      </div>
    </div>
  )
}
