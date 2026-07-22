import Image from 'next/image'
import Button from './Button'

interface HeroProps {
  headline: string
  subhead?: string
  ctaPrimary?: { label: string; href: string }
  ctaSecondary?: { label: string; href: string }
  imageSrc?: string
  imageAlt?: string
  /** 'sage' = green-tinted overlay, 'bw' = desaturated black & white */
  heroStyle?: 'sage' | 'bw'
}

export default function Hero({
  headline,
  subhead,
  ctaPrimary,
  ctaSecondary,
  imageSrc,
  imageAlt = '',
  heroStyle,
}: HeroProps) {
  // CSS filter for B&W treatment
  const imageClassName = [
    'object-cover',
    heroStyle === 'bw' ? 'grayscale brightness-90 contrast-110' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <section className="relative h-screen min-h-[500px] md:min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background */}
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className={imageClassName}
          sizes="100vw"
        />
      ) : (
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, #5C6B4A 0%, #3D4832 50%, #7A7D62 100%)',
          }}
        />
      )}
      {/* Overlay — sage green tint or standard dark */}
      {heroStyle === 'sage' ? (
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(92, 107, 74, 0.45)' }}
        />
      ) : (
        <div className="absolute inset-0 bg-black/35" />
      )}

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6">
        <h1
          className="font-cormorant font-light text-4xl sm:text-5xl md:text-7xl leading-tight tracking-wide mb-6 whitespace-pre-line"
        >
          {headline}
        </h1>
        {subhead && (
          <p className="font-jost font-light text-lg md:text-xl leading-relaxed mb-10 max-w-xl mx-auto opacity-90">
            {subhead}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {ctaPrimary && (
            <Button variant="primary" href={ctaPrimary.href}>
              {ctaPrimary.label}
            </Button>
          )}
          {ctaSecondary && (
            <Button variant="ghost" href={ctaSecondary.href}>
              {ctaSecondary.label}
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
