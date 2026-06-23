import Link from 'next/link'
import { CheckCircle, ChevronDown, Phone } from 'lucide-react'
import HeroSection from '@/components/sections/HeroSection'
import CTABanner from '@/components/sections/CTABanner'
import type { ServiceData } from '@/types'
import { services } from '@/data/services'

export default function ServicePageLayout({ service }: { service: ServiceData }) {
  const relatedServicesData = service.relatedServices
    .map(slug => services.find(s => s.slug === slug))
    .filter(Boolean) as ServiceData[]

  return (
    <>
      <HeroSection
        title={service.name}
        subtitle={service.heroSubtitle}
        ctaText="Get a Free Estimate"
        ctaHref="/contact"
        secondaryCtaText="Call (469) 535-9905"
        secondaryCtaHref="tel:4695359905"
        imageSrc={service.heroImage}
        imageAlt={`${service.name} in Prosper TX`}
        height="medium"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {service.intro.map((paragraph, i) => (
                <p key={i} className="text-mid font-body leading-relaxed mb-6">{paragraph}</p>
              ))}
            </div>
            <div>
              <div className="bg-bg border-l-4 border-accent rounded-xl p-6 sticky top-24">
                <h3 className="font-display font-semibold text-xl text-primary mb-3">Get a Free Quote</h3>
                <p className="text-mid font-body text-sm mb-4">Ready to start your {service.name.toLowerCase()} project in Prosper?</p>
                <a
                  href="tel:4695359905"
                  className="flex items-center gap-2 bg-accent text-white px-4 py-3 rounded-lg font-display font-semibold justify-center hover:bg-accent-dark transition-colors mb-3"
                >
                  <Phone className="w-5 h-5" />
                  (469) 535-9905
                </a>
                <Link
                  href="/contact"
                  className="block text-center border-2 border-primary text-primary px-4 py-3 rounded-lg font-display font-semibold hover:bg-primary hover:text-white transition-colors"
                >
                  Request a Quote Online
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold font-display text-primary border-l-2 border-accent pl-4 mb-10">
            Benefits
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.benefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-mid font-body">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold font-display text-primary border-l-2 border-accent pl-4 mb-10">
            Our Process
          </h2>
          <div className="space-y-8">
            {service.processSteps.map((step, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-display font-bold">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold font-display text-primary">{step.title}</h3>
                  <p className="mt-2 text-mid font-body leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold font-display text-primary border-l-2 border-accent pl-4 mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 max-w-3xl">
            {service.faq.map((item, i) => (
              <details key={i} className="group bg-white rounded-xl border border-border">
                <summary className="flex items-center justify-between cursor-pointer px-6 py-4 font-display font-semibold text-primary list-none">
                  {item.question}
                  <ChevronDown className="w-5 h-5 text-mid transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-4">
                  <p className="text-mid font-body leading-relaxed">{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {relatedServicesData.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-semibold font-display text-primary border-l-2 border-accent pl-4 mb-10">
              Related Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedServicesData.map((related) => (
                <Link key={related.slug} href={`/services/${related.slug}`} className="block bg-bg rounded-xl p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold font-display text-primary">{related.name}</h3>
                  <p className="mt-2 text-mid font-body text-sm">{related.heroSubtitle}</p>
                  <span className="mt-3 inline-flex text-accent font-display font-medium text-sm">Learn More →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: service.faq.map(item => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
              },
            })),
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: service.name,
            description: service.metaDescription,
            provider: {
              '@type': 'LocalBusiness',
              '@id': 'https://concreteprosofprosper.com/#business',
              name: 'Concrete Pros Of Prosper',
              telephone: '(469) 535-9905',
            },
            areaServed: {
              '@type': 'City',
              name: 'Prosper',
              containedInPlace: { '@type': 'State', name: 'Texas' },
            },
            url: `https://concreteprosofprosper.com/services/${service.slug}`,
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
              { '@type': 'ListItem', position: 3, name: service.name, item: `https://concreteprosofprosper.com/services/${service.slug}` },
            ],
          }),
        }}
      />
    </>
  )
}
