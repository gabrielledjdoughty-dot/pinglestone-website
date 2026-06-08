export interface NavLink {
  label: string
  href: string
  external?: boolean
}

export const navLinks: NavLink[] = [
  { label: 'Weddings', href: '/weddings' },
  { label: 'Accommodation', href: '/accommodation' },
  { label: 'Louis Pommery ↗', href: 'https://louispommeryengland.co.uk', external: true },
]
