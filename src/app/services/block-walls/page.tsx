import type { Metadata } from 'next'
import { services } from '@/data/services'
import ServicePageLayout from '@/components/sections/ServicePageLayout'

const service = services.find(s => s.slug === 'block-walls')!

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
    url: 'https://concreteprosofprosper.com/services/block-walls',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Block walls and retaining walls in Prosper TX' }],
  },
  alternates: { canonical: 'https://concreteprosofprosper.com/services/block-walls' },
}

export default function BlockWallsPage() {
  return <ServicePageLayout service={service} />
}
