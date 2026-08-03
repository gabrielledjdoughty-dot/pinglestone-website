import type { Metadata } from 'next'
import StoryBlock from '@/components/about/StoryBlock'

export const metadata: Metadata = {
  title: 'About Sarah & David | Pinglestone Barn',
  description:
    'Meet Sarah and David, your hosts at Pinglestone Farm. They married in the barn in 2018 and began hosting weddings in 2024. Home to the Louis Pommery England vineyard.',
}

export default function AboutPage() {
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
            Sarah &amp; David
          </h1>
          <p className="font-jost font-light text-sm text-white/70 tracking-widest uppercase">
            Your hosts at Pinglestone
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-cream py-24 px-6">
        <div className="max-w-content mx-auto">
          <StoryBlock
            imageSrc="/images/about/sarah-david.png"
            imageAlt="Sarah, David and their daughters at Pinglestone Farm"
            ctaLabel="Get in Touch"
            ctaHref="/contact"
          >
            <div className="space-y-6 font-jost font-light text-base leading-relaxed text-charcoal">
              <p>
                David and Sarah live and work at Pinglestone, and married here in
                the barn in 2018. They now have two daughters growing up on the
                farm — a place they love and are proud to call home.
              </p>
              <p>
                Pinglestone is home to the award-winning Louis Pommery England
                label, made in partnership with Maison Pommery in Champagne.
                The vineyard and winery are part of the estate, part of the
                experience, and very much part of what makes the place feel
                unlike anywhere else.
              </p>
              <p className="font-cormorant font-light text-xl italic text-sage">
                We&rsquo;d love to show you around. Come and see for yourself.
              </p>
            </div>
          </StoryBlock>
        </div>
      </section>
    </>
  )
}
