'use client'
import { useState } from 'react'

const faqs = [
  {
    q: 'How many guests can Pinglestone accommodate?',
    a: 'Up to 150 for a seated dinner and dancing.',
  },
  {
    q: 'Is Pinglestone available for exclusive hire?',
    a: 'Yes — when you book Pinglestone, the entire farm and barn are yours for the day.',
  },
  {
    q: 'Do you hold a civil ceremony licence?',
    a: "We don't hold a civil ceremony licence, but many couples choose a humanist or celebrant-led blessing here on site — including at our beautiful spot by the river — and arrange their legal ceremony separately at a register office.",
  },
  {
    q: 'Is there parking on site?',
    a: 'Yes — ample on-site parking for all guests.',
  },
  {
    q: 'Can we have fireworks or live music?',
    a: 'Live music is very welcome. Fireworks are not permitted on site. Music finishes at 11pm.',
  },
  {
    q: 'Do you have a list of recommended suppliers?',
    a: "We work with a trusted group of local florists, photographers and musicians. Get in touch and we'll share our full preferred supplier list.",
  },
  {
    q: 'Who manages the catering?',
    a: 'Our catering partner is The Little Kitchen Company — specialists in wedding catering using seasonal Hampshire produce.',
  },
]

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="divide-y divide-sage/20">
      {faqs.map((faq, i) => (
        <div key={i}>
          <button
            className="w-full flex justify-between items-center py-5 text-left"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="font-cormorant font-light text-xl text-charcoal pr-4">
              {faq.q}
            </span>
            <span
              className="text-gold flex-shrink-0 text-xl transition-transform duration-200"
              style={{ transform: open === i ? 'rotate(45deg)' : 'rotate(0)' }}
            >
              +
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              open === i ? 'max-h-96 pb-5' : 'max-h-0'
            }`}
          >
            <p className="font-jost font-light text-base leading-relaxed text-stone">
              {faq.a}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
