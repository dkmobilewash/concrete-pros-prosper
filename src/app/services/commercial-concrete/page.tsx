import type { Metadata } from 'next'
import { services } from '@/data/services'
import ServicePageLayout from '@/components/sections/ServicePageLayout'

const service = services.find(s => s.slug === 'commercial-concrete')!

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
    url: 'https://concreteprosofprosper.com/services/commercial-concrete',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Commercial concrete services in Prosper TX' }],
  },
  alternates: { canonical: 'https://concreteprosofprosper.com/services/commercial-concrete' },
}

export default function CommercialConcretePage() {
  return <ServicePageLayout service={service} />
}
