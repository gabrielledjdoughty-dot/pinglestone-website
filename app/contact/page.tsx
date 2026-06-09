import type { Metadata } from 'next'
import EnquiryForm from '@/components/contact/EnquiryForm'
import MapEmbed from '@/components/contact/MapEmbed'

export const metadata: Metadata = {
  title: 'Contact | Pinglestone Barn, Hampshire',
  description:
    'Get in touch with Pinglestone Barn to check availability or arrange a visit. We respond within 48 hours.',
}

export default function ContactPage() {
  const mapsKey = process.env.NEXT_PUBLIC_MAPS_KEY

  return (
    <section className="bg-cream pt-40 pb-24 px-6">
      <div className="max-w-content mx-auto">
        <h1 className="font-cormorant font-light text-5xl md:text-6xl text-charcoal mb-4 text-center tracking-wide">
          Get in Touch
        </h1>
        <p className="font-jost font-light text-base text-stone text-center mb-16 max-w-md mx-auto">
          We&rsquo;d love to hear about your plans and show you around
          Pinglestone.
        </p>

        {/* Contact strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16 text-center border-y border-gold/30 py-10">
          <div>
            <p className="font-jost font-light text-xs tracking-widest uppercase text-stone mb-2">Email</p>
            <a
              href="mailto:dw@pinglestone.com"
              className="font-jost font-light text-base text-charcoal hover:text-sage transition-colors"
            >
              dw@pinglestone.com
            </a>
          </div>
          <div>
            <p className="font-jost font-light text-xs tracking-widest uppercase text-stone mb-2">Phone</p>
            <a
              href="tel:07880883014"
              className="font-jost font-light text-base text-charcoal hover:text-sage transition-colors"
            >
              07880 883 014
            </a>
          </div>
          <div>
            <p className="font-jost font-light text-xs tracking-widest uppercase text-stone mb-2">WhatsApp</p>
            <a
              href="https://wa.me/447880883014"
              target="_blank"
              rel="noopener noreferrer"
              className="font-jost font-light text-base text-charcoal hover:text-sage transition-colors"
            >
              Message Us
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-cormorant font-light text-3xl text-charcoal mb-8">
              Send an Enquiry
            </h2>
            <EnquiryForm />
          </div>
          <div>
            <h2 className="font-cormorant font-light text-3xl text-charcoal mb-8">
              Where We Are
            </h2>
            <MapEmbed apiKey={mapsKey} />
          </div>
        </div>
      </div>
    </section>
  )
}
