import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="bg-cream min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="font-cormorant font-light text-7xl md:text-9xl text-sage mb-4">
          404
        </h1>
        <p className="font-jost font-light text-lg text-charcoal mb-2">
          This page doesn&rsquo;t exist.
        </p>
        <p className="font-jost font-light text-sm text-stone mb-10">
          You may have followed an old link or typed the address incorrectly.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3 border border-sage text-sage font-jost font-light text-sm tracking-widest uppercase hover:bg-sage hover:text-white transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </section>
  )
}
