import Image from 'next/image'
import Button from '@/components/ui/Button'

interface PropertyCardProps {
  name: string
  standfirst: string
  description: string
  features: string[]
  note: string
  ctaLabel: string
  images: { src: string; alt: string }[]
  reversed?: boolean
}

export default function PropertyCard({
  name,
  standfirst,
  description,
  features,
  note,
  ctaLabel,
  images,
  reversed = false,
}: PropertyCardProps) {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-0 ${
        reversed ? 'md:[&>*:first-child]:order-last' : ''
      }`}
    >
      {/* Image */}
      <div className="relative h-80 md:h-auto min-h-[400px] overflow-hidden">
        {images[0] ? (
          <Image
            src={images[0].src}
            alt={images[0].alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(135deg, #5C6B4A 0%, #3D4832 50%, #9B8E7E 100%)',
            }}
          />
        )}
      </div>

      {/* Content */}
      <div className="bg-cream p-10 md:p-16 flex flex-col justify-center">
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
        <div>
          <Button href="/contact">{ctaLabel}</Button>
        </div>
      </div>
    </div>
  )
}
