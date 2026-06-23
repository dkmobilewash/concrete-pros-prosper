import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import ServicesGrid from '@/components/sections/ServicesGrid'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import CTABanner from '@/components/sections/CTABanner'

export const metadata: Metadata = {
  title: 'Concrete Services in Prosper TX | Concrete Pros Of Prosper',
  description: 'Full-range concrete services in Prosper, TX — driveways, patios, pool decks, block walls, foundations, and commercial work. Licensed and insured.',
  openGraph: { images: ['/og-image.jpg'] },
  alternates: { canonical: 'https://concreteprosofprosper.com/services' },
}

export default function ServicesPage() {
  return (
    <>
      <HeroSection
        title="Professional Concrete Services in Prosper, TX"
        subtitle="From residential driveways to commercial parking lots — licensed, insured, and built for North Texas conditions."
        imageSrc="https://picsum.photos/seed/services/1920/800"
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
    </>
  )
}
