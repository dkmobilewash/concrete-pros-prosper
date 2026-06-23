import type { Metadata } from 'next'
import { services } from '@/data/services'
import ServicePageLayout from '@/components/sections/ServicePageLayout'

const service = services.find(s => s.slug === 'block-walls')!

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  openGraph: { images: ['/og-image.jpg'] },
  alternates: { canonical: 'https://concreteprosofprosper.com/services/block-walls' },
}

export default function BlockWallsPage() {
  return <ServicePageLayout service={service} />
}
