import type { Metadata } from 'next'
import PhotoGrid from '@/components/gallery/PhotoGrid'

export const metadata: Metadata = {
  title: 'Gallery | Pinglestone Barn, Hampshire',
  description:
    'Photos of Pinglestone Barn — the venue, grounds, vineyard, and on-site accommodation.',
}

const photos = Array.from({ length: 187 }, (_, i) => ({
  src: `/images/gallery/gallery-${String(i + 1).padStart(3, '0')}.jpg`,
  alt: `Pinglestone Barn photo ${i + 1}`,
}))

export default function GalleryPage() {
  return (
    <>
      {/* Page header */}
      <section
        className="relative pt-28 pb-16 md:pt-40 md:pb-24 px-6 text-center text-white"
        style={{
          background:
            'linear-gradient(135deg, #5C6B4A 0%, #3D4832 50%, #7A7D62 100%)',
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
      <section className="bg-white py-24 px-6">
        <div className="max-w-content mx-auto">
          <PhotoGrid photos={photos} />
        </div>
      </section>
    </>
  )
}
