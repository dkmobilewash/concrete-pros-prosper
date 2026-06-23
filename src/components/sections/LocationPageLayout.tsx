import Link from 'next/link'
import { CheckCircle, Star } from 'lucide-react'
import HeroSection from '@/components/sections/HeroSection'
import CTABanner from '@/components/sections/CTABanner'
import ContactForm from '@/components/forms/ContactForm'
import type { LocationData } from '@/types'

export default function LocationPageLayout({ location }: { location: LocationData }) {
  return (
    <>
      <HeroSection
        title={`Concrete Contractors Serving ${location.community}, Prosper TX`}
        subtitle={location.heroSubtitle}
        ctaText="Get a Free Estimate"
        ctaHref="/contact"
        secondaryCtaText="Call (469) 535-9905"
        secondaryCtaHref="tel:4695359905"
        imageSrc={`/prosper-photos-named/${location.slug}.jpg`}
        imageAlt={`Concrete services in ${location.community}, Prosper TX`}
        height="short"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {location.intro.map((paragraph, i) => (
            <p key={i} className="text-mid font-body leading-relaxed mb-6 max-w-4xl">{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="py-16 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold font-display text-primary border-l-2 border-accent pl-4 mb-10">
            Concrete Services in {location.community}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {location.services.map((service) => {
              const slugMap: Record<string, string> = {
                'Driveways': '/services/driveways',
                'Patios': '/services/patios',
                'Pool Decks': '/services/pool-decks',
                'Block Walls': '/services/block-walls',
                'Foundations & Slabs': '/services/foundations-slabs',
                'Commercial Concrete': '/services/commercial-concrete',
              }
              return (
                <Link
                  key={service}
                  href={slugMap[service] || '/services'}
                  className="flex items-center gap-3 bg-white rounded-xl p-4 hover:shadow-md transition-shadow border border-border"
                >
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="font-display font-medium text-primary">{service}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-accent/5 border border-accent/20 rounded-xl p-8">
            <h2 className="text-2xl font-semibold font-display text-primary mb-6">
              About {location.community}
            </h2>
            <ul className="space-y-3">
              {location.notableFeatures.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-mid font-body">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 bg-primary rounded-xl p-8 max-w-2xl mx-auto text-center">
            <div className="flex gap-1 justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-300 font-body leading-relaxed mb-6 text-lg">
              &ldquo;{location.testimonial.quote}&rdquo;
            </p>
            <p className="font-display font-semibold text-white">{location.testimonial.name}</p>
            <p className="text-sm text-gray-400 font-body">{location.testimonial.community}</p>
          </div>
        </div>
      </section>

      <section className="py-8 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-mid font-body text-sm text-center">
            We also serve {location.nearbyAreas.join(', ')}, and all of Prosper, TX.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold font-display text-primary border-l-2 border-accent pl-4 mb-10">
            Get a Free Estimate in {location.community}
          </h2>
          <div className="max-w-2xl">
            <ContactForm preselectedCommunity={location.community} />
          </div>
        </div>
      </section>

      <CTABanner />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://concreteprosofprosper.com' },
              { '@type': 'ListItem', position: 2, name: 'Service Areas', item: 'https://concreteprosofprosper.com/service-areas' },
              { '@type': 'ListItem', position: 3, name: location.community, item: `https://concreteprosofprosper.com/service-areas/${location.slug}` },
            ],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            '@id': 'https://concreteprosofprosper.com/#business',
            name: 'Concrete Pros Of Prosper',
            description: `Licensed concrete contractors serving ${location.community} in Prosper, TX. Driveways, patios, pool decks, retaining walls & foundations.`,
            url: `https://concreteprosofprosper.com/service-areas/${location.slug}`,
            telephone: '(469) 535-9905',
            email: 'info@concreteprosofprosper.com',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Prosper',
              addressRegion: 'TX',
              postalCode: '75078',
              addressCountry: 'US',
            },
            areaServed: {
              '@type': 'Place',
              name: `${location.community}, Prosper, TX`,
            },
            priceRange: '$$',
            openingHoursSpecification: [
              { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '07:00', closes: '18:00' },
            ],
            review: {
              '@type': 'Review',
              reviewBody: location.testimonial.quote,
              author: { '@type': 'Person', name: location.testimonial.name },
              reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
            },
          }),
        }}
      />
    </>
  )
}
