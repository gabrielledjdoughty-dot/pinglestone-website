'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import MobileMenu from './MobileMenu'

const navLinks = [
  { label: 'Weddings', href: '/weddings' },
  { label: 'Accommodation', href: '/accommodation' },
  {
    label: 'Louis Pommery ↗',
    href: 'https://louispommeryengland.co.uk',
    external: true,
  },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
          scrolled ? 'bg-cream shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-content mx-auto px-6 md:px-10 flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className={`font-cormorant font-light text-2xl tracking-widest transition-colors ${
              scrolled ? 'text-charcoal' : 'text-white'
            }`}
          >
            Pinglestone
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-jost font-light text-xs tracking-widest uppercase transition-colors hover:text-sage ${
                  scrolled ? 'text-charcoal' : 'text-white'
                }`}
                {...(link.external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Hamburger */}
          <button
            className={`md:hidden flex flex-col gap-1.5 ${
              scrolled ? 'text-charcoal' : 'text-white'
            }`}
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <span className="block w-6 h-px bg-current" />
            <span className="block w-6 h-px bg-current" />
            <span className="block w-4 h-px bg-current" />
          </button>
        </div>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
