import type { Metadata } from 'next'
import MapEmbed from '@/components/contact/MapEmbed'

export const metadata: Metadata = {
  title: 'Contact | Pinglestone Barn, Hampshire',
  description:
    'Get in touch with Pinglestone Barn to check availability or arrange a visit. We respond within 48 hours.',
}

export default function ContactPage() {
  const mapsKey = process.env.NEXT_PUBLIC_MAPS_KEY

  return (
    <>
      {/* Page header */}
      <section
        className="relative pt-28 pb-16 md:pt-40 md:pb-24 px-6 text-center text-white"
        style={{
          background:
            'linear-gradient(135deg, #5C6B4A 0%, #3D4832 50%, #7A7D62 100%)',
        }}
      >
        <div className="relative z-10">
          <h1 className="font-cormorant font-light text-5xl md:text-7xl tracking-wide mb-4">
            Get in Touch
          </h1>
          <p className="font-jost font-light text-sm text-white/70 tracking-widest uppercase">
            We&rsquo;d love to hear about your plans
          </p>
        </div>
      </section>

      {/* Contact strip */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-content mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 text-center">
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
        </div>
      </section>

      {/* Map */}
      <section className="bg-cream py-24 px-6">
        <div className="max-w-content mx-auto max-w-2xl">
          <h2 className="font-cormorant font-light text-3xl text-charcoal mb-8 text-center">
            Where We Are
          </h2>
          <MapEmbed apiKey={mapsKey} />
        </div>
      </section>
    </>
  )
}
