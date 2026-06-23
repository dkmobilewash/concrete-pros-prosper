import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import GalleryGrid from '@/components/sections/GalleryGrid'
import CTABanner from '@/components/sections/CTABanner'

export const metadata: Metadata = {
  title: 'Concrete Project Gallery | Concrete Pros Of Prosper',
  description: "Browse photos of our completed concrete projects across Prosper's communities — driveways, patios, pool decks, block walls, and more.",
  openGraph: { images: ['/og-image.jpg'] },
  alternates: { canonical: 'https://concreteprosofprosper.com/gallery' },
}

export default function GalleryPage() {
  return (
    <>
      <HeroSection
        title="Our Work in Prosper's Communities"
        subtitle="Browse completed projects from driveways to commercial flatwork across Prosper's premier neighborhoods."
        imageSrc="https://picsum.photos/seed/gallery/1920/800"
        imageAlt="Concrete project gallery Prosper TX"
        height="short"
      />
      <GalleryGrid />
      <CTABanner />
    </>
  )
}
