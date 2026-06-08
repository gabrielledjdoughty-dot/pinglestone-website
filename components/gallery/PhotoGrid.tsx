'use client'
import { useState } from 'react'
import Lightbox from './Lightbox'

interface Photo {
  src: string
  alt: string
  placeholder?: boolean
}

interface PhotoGridProps {
  photos: Photo[]
}

export default function PhotoGrid({ photos }: PhotoGridProps) {
  const [active, setActive] = useState<Photo | null>(null)

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {photos.map((photo, i) => (
          <button
            key={i}
            className="relative aspect-[4/3] overflow-hidden group focus:outline-none"
            onClick={() => !photo.placeholder && setActive(photo)}
            aria-label={photo.alt}
          >
            {photo.placeholder ? (
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  background:
                    'linear-gradient(135deg, #5C6B4A 0%, #3D4832 60%, #9B8E7E 100%)',
                }}
              >
                <p className="font-jost font-light text-xs text-white/60 tracking-widest uppercase text-center px-4">
                  Photo coming soon
                </p>
              </div>
            ) : (
              <>
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${photo.src})` }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </>
            )}
          </button>
        ))}
      </div>

      {active && (
        <Lightbox
          src={active.src}
          alt={active.alt}
          onClose={() => setActive(null)}
        />
      )}
    </>
  )
}
