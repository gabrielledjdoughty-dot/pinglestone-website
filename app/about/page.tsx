import type { Metadata } from 'next'
import StoryBlock from '@/components/about/StoryBlock'

export const metadata: Metadata = {
  title: 'About Sarah & David | Pinglestone Barn',
}

export default function AboutPage() {
  return (
    <section className="bg-cream pt-40 pb-24 px-6">
      <div className="max-w-content mx-auto">
        <h1 className="font-cormorant font-light text-5xl md:text-6xl text-charcoal mb-16 text-center tracking-wide">
          Sarah &amp; David
        </h1>

        <StoryBlock
          imageSrc="/images/about/sarah-placeholder.jpg"
          imageAlt="Sarah and family at Pinglestone Farm"
          ctaLabel="Get in Touch"
          ctaHref="/contact"
        >
          <div className="space-y-6 font-jost font-light text-base leading-relaxed text-charcoal">
            <p>
              David and Sarah live and work at Pinglestone, and married here in
              the barn in 2018. They now have two daughters growing up on the
              farm — a place they love with the particular intensity of people
              who chose it, built something in it, and stayed.
            </p>
            <p>
              They began hosting weddings in 2024, inspired by a charity ball
              they threw at the venue, and the joy they felt watching other
              people fall in love with it. Hosting is personal to them: they are
              not a faceless company, and Pinglestone is not a wedding factory.
              Every couple who books gets their time, their attention, and a
              genuine welcome.
            </p>
            <p>
              Pinglestone is home to the award-winning Louis Pommery England
              label, made in partnership with the House of Pommery in Champagne.
              The vineyard is part of the estate, part of the experience, and
              very much part of what makes the place feel unlike anywhere else.
            </p>
            <p className="font-cormorant font-light text-xl italic text-sage">
              We&rsquo;d love to show you around. Come and see for yourself.
            </p>
          </div>
        </StoryBlock>
      </div>
    </section>
  )
}
