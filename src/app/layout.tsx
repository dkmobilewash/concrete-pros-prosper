import type { Metadata } from 'next'
import { Oswald, Inter } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import './globals.css'

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://concreteprosofprosper.com'),
  title: {
    default: 'Concrete Pros Of Prosper | Concrete Contractors in Prosper TX',
    template: '%s | Concrete Pros Of Prosper',
  },
  description: 'Licensed concrete contractors in Prosper, TX. Driveways, patios, pool decks, retaining walls, foundations & commercial concrete. Serving Windsong Ranch, Star Trail, Whitley Place & all Prosper communities. Free estimates — (469) 535-9905.',
  keywords: ['concrete contractor Prosper TX', 'concrete driveway Prosper', 'stamped concrete Prosper TX', 'concrete patio Prosper', 'pool deck contractor Prosper', 'retaining wall Prosper TX', 'concrete foundation Prosper', 'commercial concrete Prosper TX', 'Windsong Ranch concrete', 'Star Trail concrete'],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    siteName: 'Concrete Pros Of Prosper',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Concrete Pros Of Prosper — Licensed Concrete Contractors in Prosper TX' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Concrete Pros Of Prosper | Concrete Contractors in Prosper TX',
    description: 'Licensed concrete contractors in Prosper, TX. Driveways, patios, pool decks & more. Free estimates — (469) 535-9905.',
    images: ['/og-image.jpg'],
  },
  verification: {},
  alternates: { canonical: 'https://concreteprosofprosper.com' },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-bg text-primary font-body antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
