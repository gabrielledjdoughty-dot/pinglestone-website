export interface NavLink {
  label: string
  href: string
  external?: boolean
}

export const navLinks: NavLink[] = [
  { label: 'Weddings', href: '/weddings' },
  { label: 'Accommodation', href: '/accommodation' },
  { label: 'About', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Louis Pommery', href: '/louis-pommery' },
]
