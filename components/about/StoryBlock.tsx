import Image from 'next/image'
import Button from '@/components/ui/Button'

interface StoryBlockProps {
  imageSrc?: string
  imageAlt?: string
  children: React.ReactNode
  ctaLabel: string
  ctaHref: string
}

export default function StoryBlock({
  imageSrc,
  imageAlt = '',
  children,
  ctaLabel,
  ctaHref,
}: StoryBlockProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(135deg, #5C6B4A 0%, #3D4832 70%, #9B8E7E 100%)',
            }}
          />
        )}
      </div>
      {/* Text */}
      <div>
        {children}
        <div className="mt-8">
          <Button href={ctaHref}>{ctaLabel}</Button>
        </div>
      </div>
    </div>
  )
}
