import type { Metadata } from 'next'
import PhotoGrid from '@/components/gallery/PhotoGrid'

export const metadata: Metadata = {
  title: 'Gallery | Pinglestone Barn, Hampshire',
  description:
    'Photos of Pinglestone Barn — the venue, grounds, vineyard, and on-site accommodation.',
}

// Replace placeholder photos with real ones when supplied by Dave.
// Organise into: barn exterior, barn interior, grounds/vineyard, river, accommodation, weddings
const placeholderPhotos = Array.from({ length: 12 }, (_, i) => ({
  src: '',
  alt: `Pinglestone Barn photo ${i + 1}`,
  placeholder: true as const,
}))

export default function GalleryPage() {
  return (
    <section className="bg-cream pt-40 pb-24 px-6">
      <div className="max-w-content mx-auto">
        <h1 className="font-cormorant font-light text-5xl md:text-6xl text-charcoal mb-4 text-center tracking-wide">
          Gallery
        </h1>
        <p className="font-jost font-light text-sm text-stone text-center mb-12 tracking-widest uppercase">
          The barn · The grounds · The vineyard · The river
        </p>
        <PhotoGrid photos={placeholderPhotos} />
      </div>
    </section>
  )
}
