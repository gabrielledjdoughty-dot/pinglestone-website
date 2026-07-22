import type { Metadata } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CookieBanner from '@/components/CookieBanner'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-jost',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.pinglestone.com'),
  title: {
    default: 'Pinglestone Barn | Hampshire Wedding Venue',
    template: '%s | Pinglestone Barn',
  },
  description:
    'An exclusive Hampshire wedding venue set among vines on the banks of the River Arle, near Alresford. Up to 150 guests. Exclusive hire.',
  openGraph: {
    siteName: 'Pinglestone Barn',
    type: 'website',
    locale: 'en_GB',
    url: 'https://pinglestone.com',
    title: 'Pinglestone Barn | Hampshire Wedding Venue',
    description:
      'An exclusive Hampshire wedding venue set among vines on the banks of the River Arle, near Alresford. Up to 150 guests. Exclusive hire.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pinglestone Barn — Hampshire wedding venue',
      },
    ],
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
