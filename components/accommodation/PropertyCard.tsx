import Button from '@/components/ui/Button'
import ImageCarousel from './ImageCarousel'

interface PropertyCardProps {
  name: string
  standfirst: string
  description: string
  features: string[]
  note: string
  ctaLabel: string
  ctaHref?: string
  airbnbHref?: string
  images: { src: string; alt: string }[]
  reversed?: boolean
  bgColor?: 'cream' | 'white'
}

export default function PropertyCard({
  name,
  standfirst,
  description,
  features,
  note,
  ctaLabel,
  ctaHref = '/contact',
  airbnbHref,
  images,
  reversed = false,
  bgColor = 'cream',
}: PropertyCardProps) {
  const bgClass = bgColor === 'white' ? 'bg-white' : 'bg-cream'
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-0 ${
        reversed ? 'md:[&>*:first-child]:order-last' : ''
      }`}
    >
      {/* Image carousel */}
      <ImageCarousel images={images} />

      {/* Content */}
      <div className={`${bgClass} p-6 sm:p-10 md:p-16 flex flex-col justify-center`}>
        <h2 className="font-cormorant font-light text-4xl text-charcoal mb-2">
          {name}
        </h2>
        <p className="font-jost font-light text-xs tracking-widest uppercase text-stone mb-6">
          {standfirst}
        </p>
        <p className="font-jost font-light text-base leading-relaxed text-charcoal mb-8">
          {description}
        </p>
        <ul className="space-y-2 mb-8">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-3 text-sm font-jost font-light text-stone">
              <span className="text-gold flex-shrink-0">✦</span>
              {f}
            </li>
          ))}
        </ul>
        <p className="font-jost font-light text-sm italic text-stone mb-6">{note}</p>
        <div className="flex flex-col sm:flex-row gap-3 items-start">
          <Button href={ctaHref}>{ctaLabel}</Button>
          {airbnbHref && (
            <a
              href={airbnbHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 border border-sage/30 text-sage font-jost font-light text-sm tracking-widest uppercase hover:bg-sage-light transition-colors"
            >
              View on Airbnb ↗︎
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
