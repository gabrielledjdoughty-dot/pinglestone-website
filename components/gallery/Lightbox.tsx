'use client'
import { useEffect, useCallback, useState } from 'react'

interface LightboxProps {
  src: string
  alt: string
  onClose: () => void
  onPrev?: () => void
  onNext?: () => void
  preloadSrcs?: string[]
}

export default function Lightbox({ src, alt, onClose, onPrev, onNext, preloadSrcs = [] }: LightboxProps) {
  const [loaded, setLoaded] = useState(false)

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft' && onPrev) onPrev()
      if (e.key === 'ArrowRight' && onNext) onNext()
    },
    [onClose, onPrev, onNext],
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [handleKey])

  useEffect(() => {
    setLoaded(false)
  }, [src])

  useEffect(() => {
    preloadSrcs.forEach((s) => {
      const img = new window.Image()
      img.src = s
    })
  }, [preloadSrcs])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Photo lightbox"
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Close */}
      <button
        className="absolute top-6 right-6 z-20 text-white text-3xl leading-none hover:text-white/70 transition-colors"
        onClick={onClose}
        aria-label="Close"
        autoFocus
      >
        ✕
      </button>

      {/* Previous */}
      {onPrev && (
        <button
          className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/30 hover:bg-white/40 text-white flex items-center justify-center transition-colors"
          onClick={(e) => { e.stopPropagation(); onPrev() }}
          aria-label="Previous photo"
        >
          <svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 12L6 8L10 4" />
          </svg>
        </button>
      )}

      {/* Image */}
      <div
        className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          </div>
        )}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className={`max-w-full max-h-[90vh] object-contain transition-opacity duration-200 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setLoaded(true)}
        />
      </div>

      {/* Next */}
      {onNext && (
        <button
          className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/30 hover:bg-white/40 text-white flex items-center justify-center transition-colors"
          onClick={(e) => { e.stopPropagation(); onNext() }}
          aria-label="Next photo"
        >
          <svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 4L10 8L6 12" />
          </svg>
        </button>
      )}
    </div>
  )
}
