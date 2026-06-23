import type { Metadata } from 'next'
import { services } from '@/data/services'
import ServicePageLayout from '@/components/sections/ServicePageLayout'

const service = services.find(s => s.slug === 'pool-decks')!

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
    url: 'https://concreteprosofprosper.com/services/pool-decks',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Pool deck concrete in Prosper TX' }],
  },
  alternates: { canonical: 'https://concreteprosofprosper.com/services/pool-decks' },
}

export default function PoolDecksPage() {
  return <ServicePageLayout service={service} />
}
