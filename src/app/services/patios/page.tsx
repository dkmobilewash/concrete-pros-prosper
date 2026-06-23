import type { Metadata } from 'next'
import { services } from '@/data/services'
import ServicePageLayout from '@/components/sections/ServicePageLayout'

const service = services.find(s => s.slug === 'patios')!

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
    url: 'https://concreteprosofprosper.com/services/patios',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Concrete patios in Prosper TX' }],
  },
  alternates: { canonical: 'https://concreteprosofprosper.com/services/patios' },
}

export default function PatiosPage() {
  return <ServicePageLayout service={service} />
}
