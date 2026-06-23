import type { Metadata } from 'next'
import { services } from '@/data/services'
import ServicePageLayout from '@/components/sections/ServicePageLayout'

const service = services.find(s => s.slug === 'foundations-slabs')!

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
    url: 'https://concreteprosofprosper.com/services/foundations-slabs',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Concrete foundations and slabs in Prosper TX' }],
  },
  alternates: { canonical: 'https://concreteprosofprosper.com/services/foundations-slabs' },
}

export default function FoundationsSlabsPage() {
  return <ServicePageLayout service={service} />
}
