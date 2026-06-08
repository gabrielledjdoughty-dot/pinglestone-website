import Link from 'next/link'

const tiles = [
  { label: 'Weddings', href: '/weddings', external: false },
  { label: 'Accommodation', href: '/accommodation', external: false },
  {
    label: 'Louis Pommery',
    href: 'https://louispommeryengland.co.uk',
    external: true,
  },
]

export default function NavTiles() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 h-64 md:h-72">
      {tiles.map((tile) => (
        <Link
          key={tile.label}
          href={tile.href}
          className="relative flex items-center justify-center group overflow-hidden"
          {...(tile.external
            ? { target: '_blank', rel: 'noopener noreferrer' }
            : {})}
        >
          {/* Gradient background placeholder */}
          <div
            className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
            style={{
              background:
                'linear-gradient(135deg, #5C6B4A 0%, #3D4832 50%, #9B8E7E 100%)',
            }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
          {/* Label */}
          <span className="relative font-cormorant font-light text-white text-3xl tracking-wide">
            {tile.label}
            {tile.external && (
              <span className="font-jost text-sm ml-1 align-super">↗</span>
            )}
          </span>
        </Link>
      ))}
    </section>
  )
}
