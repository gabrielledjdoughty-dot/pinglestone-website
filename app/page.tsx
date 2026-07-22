import type { Metadata } from 'next'
import Image from 'next/image'
import Hero from '@/components/ui/Hero'
import SectionHeading from '@/components/ui/SectionHeading'
import Divider from '@/components/ui/Divider'
import Button from '@/components/ui/Button'
import InclusionsList from '@/components/weddings/InclusionsList'
import TestimonialBand from '@/components/home/TestimonialBand'
import FAQAccordion from '@/components/weddings/FAQAccordion'
import FadeIn from '@/components/ui/FadeIn'

export const metadata: Metadata = {
  title: 'Pinglestone Barn | Hampshire Wedding Venue',
  description:
    'Pinglestone Barn — a beautiful Hampshire wedding venue set among vines on the banks of the River Arle, near Alresford. Exclusive hire, on-site accommodation, and English sparkling wine from our own vineyard. Up to 150 guests.',
}

export default function HomePage() {
  return (
    <>
      <Hero
        headline="A Hampshire Wedding Unlike Any Other"
        ctaPrimary={{ label: 'Enquire Now', href: '/contact' }}
        ctaSecondary={{ label: 'Explore', href: '#pinglestone-barn' }}
        imageSrc="/images/hero.jpg"
        imageAlt="Pinglestone Barn medieval timber frame and oak beams"
        heroStyle="sage"
      />

      {/* Opening */}
      <section className="bg-cream py-24 px-6">
        <div className="max-w-content mx-auto">
          <FadeIn>
          <div className="max-w-3xl">
            <Divider />
            <p className="font-jost font-light text-lg leading-relaxed text-charcoal">
              Pinglestone is a working farm and vineyard set in the chalk
              downland above Alresford, where the River Arle runs clear and
              cold through banks of wild watercress. At its heart stands the
              barn — ancient, oak-framed, and fairy-lit — exclusively yours
              for the day. The surrounding vines produce award-winning English
              sparkling wine under the Louis Pommery label. Unhurried and rare,
              it is the sort of place that feels genuinely discovered.
            </p>
          </div>
          </FadeIn>
        </div>
      </section>

      {/* Inclusions */}
      <section id="pinglestone-barn" className="py-24 px-6 bg-white">
        <div className="max-w-content mx-auto">
          <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Photo */}
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/pinglestone-barn.png"
                alt="Aerial view of Pinglestone Barn and vineyard, Hampshire"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Text */}
            <div>
              <SectionHeading
                heading="Pinglestone Barn"
                standfirst="Exclusive hire · Up to 150 guests"
              />
              <div className="mt-12">
                <InclusionsList />
                <p className="font-jost font-light text-sm italic text-stone mt-8">
                  For full pricing and availability, please get in touch.
                </p>
                <div className="mt-6">
                  <Button href="/contact">Enquire Now</Button>
                </div>
              </div>
            </div>
          </div>
          </FadeIn>
        </div>
      </section>

      {/* Setting */}
      <section className="py-24 px-6 bg-sage-light">
        <div className="max-w-content mx-auto">
          <FadeIn>
          <div className="max-w-3xl">
            <SectionHeading heading="Alresford, Hampshire" />
            <p className="mt-6 font-jost font-light text-lg leading-relaxed text-charcoal">
              The farm sits above the Georgian market town of Alresford — one of
              Hampshire&rsquo;s most charming small towns, with independent shops,
              riverside walks and excellent restaurants within a ten-minute stroll.
              London Waterloo is under an hour by train, and Winchester is twelve
              minutes by car. Plenty of taxi firms operate in the area.
            </p>
          </div>
          </FadeIn>
        </div>
      </section>

      {/* Vineyard */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-content mx-auto">
          <FadeIn>
          <div className="max-w-3xl">
            <SectionHeading heading="Sparkling on Your Doorstep" />
            <p className="mt-6 font-jost font-light text-lg leading-relaxed text-charcoal">
              Pinglestone is home to one of Hampshire&rsquo;s most exciting young
              vineyards, grown in partnership with Maison Pommery to produce
              Louis Pommery — a multiple award-winning English sparkling wine of
              genuine distinction. Your guests can raise a glass knowing it was
              grown and made right here, on the very hillside surrounding the barn.
            </p>
            <a
              href="https://www.louispommery.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 font-jost font-light text-sm text-sage border-b border-sage hover:text-sage-dark transition-colors"
            >
              Discover Louis Pommery England ↗︎
            </a>
          </div>
          </FadeIn>
        </div>
      </section>

      {/* Catering */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-content mx-auto">
          <FadeIn>
          <div className="max-w-3xl">
            <SectionHeading heading="Food That Does Justice to the Day" />
            <p className="mt-6 font-jost font-light text-lg leading-relaxed text-charcoal">
              Our exclusive catering partner, The Little Kitchen Company,
              specialises in weddings and brings a wonderful approach to seasonal
              Hampshire produce — elegant, relaxed, and utterly delicious. Their
              experienced team works closely with each couple to shape every
              detail, from the canap&eacute;s to the final course.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mt-6">
              <a
                href="https://thelittlekitchencompany.com"
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap font-jost font-light text-sm text-sage border-b border-sage hover:text-sage-dark transition-colors self-start"
              >
                thelittlekitchencompany.com ↗︎
              </a>
              <a
                href="https://www.instagram.com/thelittlekitchencompany/"
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap font-jost font-light text-sm text-sage border-b border-sage hover:text-sage-dark transition-colors self-start"
              >
                @thelittlekitchencompany ↗︎
              </a>
            </div>
          </div>
          </FadeIn>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialBand />

      {/* FAQ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-content mx-auto">
          <FadeIn>
          <div className="max-w-3xl">
            <SectionHeading heading="Frequently Asked Questions" />
            <div className="mt-12">
              <FAQAccordion />
            </div>
          </div>
          </FadeIn>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-sage py-24 px-6 text-center text-white">
        <div className="max-w-content mx-auto">
          <h2 className="font-cormorant font-light text-4xl md:text-5xl mb-4">
            Begin Your Story Here
          </h2>
          <p className="font-jost font-light text-lg mb-10 text-white/80">
            We&rsquo;d love to hear about your plans.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center items-center">
            <Button href="/contact" variant="ghost">
              Get in Touch
            </Button>
            <a
              href="mailto:dw@pinglestone.com"
              className="font-jost font-light text-sm text-white/80 hover:text-white underline"
            >
              dw@pinglestone.com
            </a>
            <a
              href="tel:07880883014"
              className="font-jost font-light text-sm text-white/80 hover:text-white"
            >
              07880 883 014
            </a>
            <a
              href="https://wa.me/447880883014"
              target="_blank"
              rel="noopener noreferrer"
              className="font-jost font-light text-sm text-white/80 hover:text-white underline"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
