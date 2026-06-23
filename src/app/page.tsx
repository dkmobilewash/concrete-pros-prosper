import type { Metadata } from 'next'
import Link from 'next/link'
import HeroSection from '@/components/sections/HeroSection'
import ServicesGrid from '@/components/sections/ServicesGrid'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import CTABanner from '@/components/sections/CTABanner'
import { ShieldCheck, ClipboardList, Calendar, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Concrete Pros Of Prosper | Driveways, Patios & More',
  description: "Prosper's trusted concrete contractors. We pour driveways, patios, pool decks, and more across Prosper's premier communities. Free estimates.",
  openGraph: {
    images: ['/og-image.jpg'],
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
        imageSrc="https://picsum.photos/seed/herohome/1920/1080"
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
            name: 'Concrete Pros Of Prosper',
            telephone: '(469) 535-9905',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Prosper',
              addressRegion: 'TX',
              postalCode: '75078',
              addressCountry: 'US',
            },
            areaServed: [
              'Prosper', 'Windsong Ranch', 'Star Trail', 'Whitley Place',
              'Gentle Creek Estates', "Tanner's Mill", 'Lakes of Prosper',
              'Frontier Estates', 'Prosper Trail',
            ],
            priceRange: '$$',
          }),
        }}
      />
    </>
  )
}
