import Image from 'next/image'

const testimonials = [
  {
    quote:
      "David and Sarah were the most incredibly welcoming hosts. It had such a relaxed feel — and what a bonus to stay in the cottage and the shepherd’s hut on site.",
    attribution: 'Married at Pinglestone, June 2024',
    photo: '/images/wedding-first-dance.png',
    photoAlt: 'First dance under the fairy lights at Pinglestone Barn',
  },
  {
    quote:
      'An utterly magical setting. We knew the moment we arrived it was the one. Our guests are still talking about it.',
    attribution: 'Married at Pinglestone, September 2023',
    photo: '/images/wedding-barn-portrait.png',
    photoAlt: 'Wedding couple at Pinglestone Barn',
  },
  {
    quote:
      'The vineyard, the river, the barn — it was everything we’d dreamed of. Truly an unhurried, perfect day.',
    attribution: 'Married at Pinglestone, July 2024',
    photo: '/images/wedding-field-portrait.png',
    photoAlt: 'Wedding couple in the meadow at Pinglestone',
  },
]

export default function TestimonialBand() {
  return (
    <section className="bg-sage py-12 md:py-20 px-6">
      <div className="max-w-content mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {testimonials.map((t, i) => (
          <div key={i} className="flex flex-col items-center text-center text-white">
            <div className="relative w-full aspect-[4/5] md:aspect-[3/4] overflow-hidden mb-8">
              <Image
                src={t.photo}
                alt={t.photoAlt}
                fill
                className="object-cover object-center md:object-top"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <p className="font-cormorant font-light text-xl leading-relaxed italic mb-4">
              &ldquo;{t.quote}&rdquo;
            </p>
            <p className="font-jost font-light text-xs tracking-widest uppercase text-white/70">
              — {t.attribution}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
