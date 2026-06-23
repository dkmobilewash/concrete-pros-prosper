import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import ContactForm from '@/components/forms/ContactForm'
import { Phone, Mail, Clock, MapPin, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us — Free Concrete Estimates in Prosper TX',
  description: 'Get a free concrete estimate in Prosper, TX. Call (469) 535-9905 or fill out our online form — we respond within 1 business day. Serving Windsong Ranch, Star Trail, Whitley Place & all Prosper communities.',
  openGraph: {
    title: 'Contact Concrete Pros Of Prosper | Free Estimates',
    description: 'Get a free concrete estimate. Call (469) 535-9905 or fill out our form. We respond within 1 business day.',
    url: 'https://concreteprosofprosper.com/contact',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Contact Concrete Pros Of Prosper for a free estimate' }],
  },
  alternates: { canonical: 'https://concreteprosofprosper.com/contact' },
}

const communities = [
  'Windsong Ranch', 'Star Trail', 'Whitley Place', 'Gentle Creek Estates',
  "Tanner's Mill", 'Lakes of Prosper', 'Frontier Estates', 'Prosper Trail',
]

export default function ContactPage() {
  return (
    <>
      <HeroSection
        title="Get Your Free Concrete Estimate"
        subtitle="Fill out the form below or give us a call. We respond to all inquiries within 1 business day."
        imageSrc="/prosper-photos-named/hero-contact.jpg"
        imageAlt="Contact Concrete Pros Of Prosper"
        height="short"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            <div className="md:col-span-3">
              <h2 className="text-2xl font-semibold font-display text-primary border-l-2 border-accent pl-4 mb-8">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>
            <div className="md:col-span-2">
              <h2 className="text-2xl font-semibold font-display text-primary border-l-2 border-accent pl-4 mb-8">
                Contact Information
              </h2>
              <div className="space-y-6">
                <a href="tel:4695359905" className="block bg-bg rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3">
                    <Phone className="w-6 h-6 text-accent" />
                    <span className="font-display font-semibold text-2xl text-primary">(469) 535-9905</span>
                  </div>
                  <p className="text-sm text-mid font-body mt-1 ml-9">Tap to call</p>
                </a>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-display font-medium text-primary">Email</p>
                      <a href="mailto:info@concreteprosofprosper.com" className="text-mid font-body text-sm hover:text-accent transition-colors">
                        info@concreteprosofprosper.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-display font-medium text-primary">Hours</p>
                      <p className="text-mid font-body text-sm">Mon–Sat 7:00am–6:00pm</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-display font-medium text-primary">Location</p>
                      <p className="text-mid font-body text-sm">Prosper, TX 75078</p>
                    </div>
                  </div>
                </div>

                <div className="bg-bg rounded-xl p-6 mt-6">
                  <h3 className="font-display font-semibold text-primary mb-3">Communities We Serve</h3>
                  <ul className="space-y-2">
                    {communities.map((c) => (
                      <li key={c} className="flex items-center gap-2 text-sm text-mid font-body">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-4 mt-4">
                  <p className="text-sm font-body text-primary">
                    We respond to all inquiries within 1 business day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl overflow-hidden h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53483.47893498!2d-96.84!3d33.24!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c3d5e8a7b3c1b%3A0x5a3c0e3c9f3b1a2b!2sProsper%2C%20TX%2075078!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Concrete Pros Of Prosper location map"
            />
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            '@id': 'https://concreteprosofprosper.com/#business',
            name: 'Concrete Pros Of Prosper',
            description: 'Licensed and insured concrete contractors in Prosper, TX. Free estimates for driveways, patios, pool decks, retaining walls & foundations.',
            url: 'https://concreteprosofprosper.com/contact',
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
            priceRange: '$$',
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
              { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://concreteprosofprosper.com/contact' },
            ],
          }),
        }}
      />
    </>
  )
}
