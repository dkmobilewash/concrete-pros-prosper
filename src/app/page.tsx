import type { Metadata } from 'next'
import Link from 'next/link'
import HeroSection from '@/components/sections/HeroSection'
import ServicesGrid from '@/components/sections/ServicesGrid'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import CTABanner from '@/components/sections/CTABanner'
import { ShieldCheck, ClipboardList, Calendar, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Concrete Contractors in Prosper TX | Driveways, Patios, Pool Decks & More',
  description: 'Top-rated concrete contractors in Prosper, TX. We pour driveways, patios, pool decks, retaining walls & foundations for Windsong Ranch, Star Trail, Whitley Place & all Prosper communities. Licensed & insured. Free estimates — call (469) 535-9905.',
  openGraph: {
    title: 'Concrete Pros Of Prosper — #1 Concrete Contractors in Prosper TX',
    description: 'Licensed concrete contractors serving Prosper\'s premier communities. Driveways, patios, pool decks, retaining walls & commercial concrete. Free estimates.',
    url: 'https://concreteprosofprosper.com',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Concrete Pros Of Prosper — Professional Concrete Work in Prosper TX' }],
  },
  alternates: {
    canonical: 'https://concreteprosofprosper.com',
  },
}

const trustBadges = [
  { icon: ShieldCheck, label: 'Licensed & Insured' },
  { icon: ClipboardList, label: 'Free Estimates' },
  { icon: Calendar, label: 'Serving Prosper Since 2010' },
  { icon: Star, label: '5-Star Google Rated' },
]

const communities = [
  { name: 'Windsong Ranch', href: '/service-areas/windsong-ranch' },
  { name: 'Star Trail', href: '/service-areas/star-trail' },
  { name: 'Whitley Place', href: '/service-areas/whitley-place' },
  { name: 'Gentle Creek Estates', href: '/service-areas/gentle-creek-estates' },
  { name: "Tanner's Mill", href: '/service-areas/tanners-mill' },
  { name: 'Lakes of Prosper', href: '/service-areas/lakes-of-prosper' },
  { name: 'Frontier Estates', href: '/service-areas/frontier-estates' },
  { name: 'Prosper Trail', href: '/service-areas/prosper-trail' },
]

export default function HomePage() {
  return (
    <>
      <HeroSection
        title="Prosper's Concrete Experts"
        subtitle="From custom driveways to pool decks — quality pours built for Prosper's premier communities."
        ctaText="Get a Free Estimate"
        ctaHref="/contact"
        secondaryCtaText="See Our Work"
        secondaryCtaHref="/gallery"
        imageSrc="/prosper-photos-named/hero-home.jpg"
        imageAlt="Professional concrete work in Prosper Texas"
        height="full"
      />

      <section className="bg-white border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustBadges.map((badge) => (
              <div key={badge.label} className="flex items-center gap-3 justify-center">
                <badge.icon className="w-6 h-6 text-accent flex-shrink-0" />
                <span className="font-display font-medium text-sm text-primary">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServicesGrid />
      <WhyChooseUs />
      <TestimonialsSection />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold font-display text-primary border-l-2 border-accent pl-4 mb-6">
            Serving Prosper&apos;s Premier Communities
          </h2>
          <p className="text-mid font-body mb-8 max-w-2xl">
            We know these neighborhoods because we work in them every week. From Windsong Ranch to Prosper Trail, we deliver concrete work that meets the standards your community expects.
          </p>
          <div className="flex flex-wrap gap-3">
            {communities.map((community) => (
              <Link
                key={community.href}
                href={community.href}
                className="bg-accent/10 text-accent border border-accent/20 rounded-full px-4 py-2 font-display font-medium text-sm hover:bg-accent hover:text-white transition-colors"
              >
                {community.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            '@id': 'https://concreteprosofprosper.com/#business',
            name: 'Concrete Pros Of Prosper',
            description: 'Licensed and insured concrete contractors serving Prosper, TX and surrounding communities. Specializing in driveways, patios, pool decks, retaining walls, foundations, and commercial concrete.',
            url: 'https://concreteprosofprosper.com',
            telephone: '(469) 535-9905',
            email: 'info@concreteprosofprosper.com',
            image: 'https://concreteprosofprosper.com/og-image.jpg',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Prosper',
              addressRegion: 'TX',
              postalCode: '75078',
              addressCountry: 'US',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 33.2362,
              longitude: -96.8011,
            },
            openingHoursSpecification: [
              { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '07:00', closes: '18:00' },
            ],
            areaServed: [
              { '@type': 'City', name: 'Prosper', containedInPlace: { '@type': 'State', name: 'Texas' } },
              { '@type': 'Place', name: 'Windsong Ranch' },
              { '@type': 'Place', name: 'Star Trail' },
              { '@type': 'Place', name: 'Whitley Place' },
              { '@type': 'Place', name: 'Gentle Creek Estates' },
              { '@type': 'Place', name: "Tanner's Mill" },
              { '@type': 'Place', name: 'Lakes of Prosper' },
              { '@type': 'Place', name: 'Frontier Estates' },
              { '@type': 'Place', name: 'Prosper Trail' },
            ],
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Concrete Services',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Concrete Driveways', url: 'https://concreteprosofprosper.com/services/driveways' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Concrete Patios', url: 'https://concreteprosofprosper.com/services/patios' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pool Decks', url: 'https://concreteprosofprosper.com/services/pool-decks' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Block Walls & Retaining Walls', url: 'https://concreteprosofprosper.com/services/block-walls' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Foundations & Slabs', url: 'https://concreteprosofprosper.com/services/foundations-slabs' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Concrete', url: 'https://concreteprosofprosper.com/services/commercial-concrete' } },
              ],
            },
            priceRange: '$$',
          }),
        }}
      />
    </>
  )
}
