import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import ServicesGrid from '@/components/sections/ServicesGrid'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import CTABanner from '@/components/sections/CTABanner'

export const metadata: Metadata = {
  title: 'Concrete Services in Prosper TX — Driveways, Patios, Pool Decks & More',
  description: 'Full-range concrete services in Prosper, TX — driveways, patios, pool decks, retaining walls, foundations & commercial flatwork. Licensed, insured & built for North Texas conditions. Free estimates — (469) 535-9905.',
  openGraph: {
    title: 'Concrete Services in Prosper TX | Concrete Pros Of Prosper',
    description: 'Driveways, patios, pool decks, retaining walls, foundations & commercial concrete. Licensed & insured. Free estimates.',
    url: 'https://concreteprosofprosper.com/services',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Concrete services in Prosper TX' }],
  },
  alternates: { canonical: 'https://concreteprosofprosper.com/services' },
}

export default function ServicesPage() {
  return (
    <>
      <HeroSection
        title="Professional Concrete Services in Prosper, TX"
        subtitle="From residential driveways to commercial parking lots — licensed, insured, and built for North Texas conditions."
        imageSrc="/prosper-photos-named/hero-services.jpg"
        imageAlt="Concrete services in Prosper Texas"
        height="medium"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-mid font-body leading-relaxed max-w-3xl">
            Concrete Pros Of Prosper delivers a full range of concrete services for homeowners and businesses across Prosper, TX and its surrounding communities. Whether you need a new driveway, a backyard patio, a pool deck built for Texas summers, or a commercial parking lot, our licensed and insured crews handle every project from estimate to final seal.
          </p>
        </div>
      </section>

      <ServicesGrid />
      <WhyChooseUs />
      <CTABanner />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Concrete Services in Prosper TX',
            description: 'Full-range concrete services offered by Concrete Pros Of Prosper.',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Concrete Driveways', url: 'https://concreteprosofprosper.com/services/driveways' },
              { '@type': 'ListItem', position: 2, name: 'Concrete Patios', url: 'https://concreteprosofprosper.com/services/patios' },
              { '@type': 'ListItem', position: 3, name: 'Pool Decks', url: 'https://concreteprosofprosper.com/services/pool-decks' },
              { '@type': 'ListItem', position: 4, name: 'Block Walls & Retaining Walls', url: 'https://concreteprosofprosper.com/services/block-walls' },
              { '@type': 'ListItem', position: 5, name: 'Foundations & Slabs', url: 'https://concreteprosofprosper.com/services/foundations-slabs' },
              { '@type': 'ListItem', position: 6, name: 'Commercial Concrete', url: 'https://concreteprosofprosper.com/services/commercial-concrete' },
            ],
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
              { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://concreteprosofprosper.com/services' },
            ],
          }),
        }}
      />
    </>
  )
}
