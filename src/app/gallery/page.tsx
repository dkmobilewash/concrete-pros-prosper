import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import GalleryGrid from '@/components/sections/GalleryGrid'
import CTABanner from '@/components/sections/CTABanner'

export const metadata: Metadata = {
  title: 'Concrete Project Gallery — Photos of Our Work in Prosper TX',
  description: "Browse photos of completed concrete projects across Prosper's communities — driveways, stamped patios, pool decks, retaining walls & commercial flatwork. See the quality before you call. (469) 535-9905.",
  openGraph: {
    title: 'Concrete Project Gallery | Concrete Pros Of Prosper',
    description: "Photos of completed driveways, patios, pool decks & more across Prosper's premier communities.",
    url: 'https://concreteprosofprosper.com/gallery',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Concrete project gallery — Prosper TX' }],
  },
  alternates: { canonical: 'https://concreteprosofprosper.com/gallery' },
}

export default function GalleryPage() {
  return (
    <>
      <HeroSection
        title="Our Work in Prosper's Communities"
        subtitle="Browse completed projects from driveways to commercial flatwork across Prosper's premier neighborhoods."
        imageSrc="/prosper-photos-named/hero-gallery.jpg"
        imageAlt="Concrete project gallery Prosper TX"
        height="short"
      />
      <GalleryGrid />
      <CTABanner />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Concrete Project Gallery — Concrete Pros Of Prosper',
            description: "Photos of completed concrete projects across Prosper's communities.",
            url: 'https://concreteprosofprosper.com/gallery',
            isPartOf: { '@type': 'WebSite', name: 'Concrete Pros Of Prosper', url: 'https://concreteprosofprosper.com' },
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://concreteprosofprosper.com' },
              { '@type': 'ListItem', position: 2, name: 'Gallery', item: 'https://concreteprosofprosper.com/gallery' },
            ],
          }),
        }}
      />
    </>
  )
}
