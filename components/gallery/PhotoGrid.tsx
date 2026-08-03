'use client'
import { useState, useCallback, useEffect, useRef } from 'react'
import Image from 'next/image'
import Lightbox from './Lightbox'

interface Photo {
  src: string
  alt: string
}

interface PhotoGridProps {
  photos: Photo[]
}

const BATCH_SIZE = 24

export default function PhotoGrid({ photos }: PhotoGridProps) {
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const sentinelRef = useRef<HTMLDivElement>(null)

  const visiblePhotos = photos.slice(0, visibleCount)
  const hasMore = visibleCount < photos.length

  useEffect(() => {
    const el = sentinelRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleCount((c) => Math.min(c + BATCH_SIZE, photos.length))
        }
      },
      { rootMargin: '400px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [photos.length, visibleCount])

  const handleClose = useCallback(() => setActiveIndex(null), [])

  const handlePrev = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : i === 0 ? photos.length - 1 : i - 1))
  }, [photos.length])

  const handleNext = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : i === photos.length - 1 ? 0 : i + 1))
  }, [photos.length])

  const activePhoto = activeIndex !== null ? photos[activeIndex] : null

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {visiblePhotos.map((photo, i) => (
          <button
            key={photo.src}
            className="relative aspect-[4/3] overflow-hidden group focus:outline-none bg-stone/10"
            onClick={() => setActiveIndex(i)}
            aria-label={photo.alt}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              loading={i < 8 ? 'eager' : 'lazy'}
              quality={60}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </button>
        ))}
      </div>

      {hasMore && (
        <div ref={sentinelRef} className="flex justify-center py-12">
          <div className="w-8 h-8 border-2 border-sage/30 border-t-sage rounded-full animate-spin" />
        </div>
      )}

      {activePhoto && activeIndex !== null && (
        <Lightbox
          src={activePhoto.src}
          alt={activePhoto.alt}
          onClose={handleClose}
          onPrev={photos.length > 1 ? handlePrev : undefined}
          onNext={photos.length > 1 ? handleNext : undefined}
          preloadSrcs={[
            photos[(activeIndex + 1) % photos.length]?.src,
            photos[(activeIndex - 1 + photos.length) % photos.length]?.src,
          ].filter(Boolean)}
        />
      )}
    </>
  )
}
