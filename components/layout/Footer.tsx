import Link from 'next/link'

const pageLinks = [
  { label: 'Weddings', href: '/weddings' },
  { label: 'Accommodation', href: '/accommodation' },
  { label: 'About', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
]

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms' },
]

export default function Footer() {
  return (
    <footer className="bg-sage-dark text-white py-16">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <p className="font-cormorant font-light text-2xl tracking-widest mb-4">
              Pinglestone
            </p>
            <p className="font-jost font-light text-sm leading-relaxed text-white/70">
              Pinglestone Farm, Old Alresford<br />
              Hampshire, SO24 9TB
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col gap-3">
            {pageLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-jost font-light text-sm text-white/80 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Contact */}
          <div className="flex flex-col gap-3 font-jost font-light text-sm text-white/80">
            <a
              href="mailto:dw@pinglestone.com"
              className="hover:text-white transition-colors"
            >
              dw@pinglestone.com
            </a>
            <a
              href="tel:07880883014"
              className="hover:text-white transition-colors"
            >
              07880 883 014
            </a>
            <a
              href="https://wa.me/447880883014"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              WhatsApp
            </a>
            <a
              href="https://instagram.com/pinglestonebarn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              @pinglestonebarn
            </a>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-jost font-light text-xs text-white/50">
            © Pinglestone 2026
          </p>
          <div className="flex gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-jost font-light text-xs text-white/50 hover:text-white/80 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
