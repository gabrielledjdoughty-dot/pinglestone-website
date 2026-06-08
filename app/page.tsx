import Hero from '@/components/ui/Hero'
import NavTiles from '@/components/home/NavTiles'
import TestimonialBand from '@/components/home/TestimonialBand'
import Button from '@/components/ui/Button'
import Divider from '@/components/ui/Divider'

export default function HomePage() {
  return (
    <>
      <Hero
        headline={"Where Love Begins,\nAmong the Vines"}
        subhead="An exclusive Hampshire wedding venue on a working farm and vineyard, on the banks of the River Arle"
        ctaPrimary={{ label: 'Enquire About Your Wedding', href: '/contact' }}
        ctaSecondary={{ label: 'Explore the venue', href: '/weddings' }}
      />

      <NavTiles />

      {/* Introduction */}
      <section className="bg-cream py-24 px-6">
        <div className="max-w-[680px] mx-auto text-center">
          <Divider />
          <p className="font-jost font-light text-lg leading-relaxed text-charcoal">
            Nestled in the Hampshire countryside above Alresford, Pinglestone
            Barn is an exclusive wedding venue set on a working farm and
            vineyard on the banks of the River Arle. The barn is yours alone for
            the day — a rare, unhurried setting where the vines, the chalk
            stream and the Hampshire downland do most of the talking.
          </p>
        </div>
      </section>

      <TestimonialBand />

      {/* CTA Banner */}
      <section
        className="py-24 px-6 text-center bg-gold/10 border-t border-gold/30"
      >
        <div className="max-w-content mx-auto">
          <h2 className="font-cormorant font-light text-4xl md:text-5xl text-charcoal mb-6">
            Begin Your Story Here
          </h2>
          <p className="font-jost font-light text-lg text-stone mb-10 max-w-md mx-auto">
            We&rsquo;d love to hear about your plans. Get in touch to check
            availability or arrange a visit.
          </p>
          <Button href="/contact" variant="primary">
            Get in Touch
          </Button>
        </div>
      </section>
    </>
  )
}
