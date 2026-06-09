import type { Metadata } from 'next'
import PhotoGrid from '@/components/gallery/PhotoGrid'

export const metadata: Metadata = {
  title: 'Gallery | Pinglestone Barn, Hampshire',
  description:
    'Photos of Pinglestone Barn — the venue, grounds, vineyard, and on-site accommodation.',
}

const realPhotos = [
  { src: '/images/wedding-first-dance.png', alt: 'First dance under the fairy lights', placeholder: false as const },
  { src: '/images/wedding-barn-portrait.png', alt: 'Wedding couple at Pinglestone Barn', placeholder: false as const },
  { src: '/images/wedding-field-portrait.png', alt: 'Wedding couple in the meadow', placeholder: false as const },
]

const placeholderPhotos = Array.from({ length: 9 }, (_, i) => ({
  src: '',
  alt: `Pinglestone Barn photo ${i + 4}`,
  placeholder: true as const,
}))

const allPhotos = [...realPhotos, ...placeholderPhotos]

export default function GalleryPage() {
  return (
    <>
      {/* Page header */}
      <section
        className="relative pt-40 pb-24 px-6 text-center text-white"
        style={{
          background:
            'linear-gradient(135deg, #5C6B4A 0%, #3D4832 50%, #9B8E7E 100%)',
        }}
      >
        <div className="relative z-10">
          <h1 className="font-cormorant font-light text-5xl md:text-7xl tracking-wide mb-4">
            Gallery
          </h1>
          <p className="font-jost font-light text-sm text-white/70 tracking-widest uppercase">
            The barn · The grounds · The vineyard · The river
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-cream py-24 px-6">
        <div className="max-w-content mx-auto">
          <PhotoGrid photos={allPhotos} />
        </div>
      </section>
    </>
  )
}
