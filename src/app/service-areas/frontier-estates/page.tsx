import type { Metadata } from 'next'
import { locations } from '@/data/locations'
import LocationPageLayout from '@/components/sections/LocationPageLayout'

const location = locations.find(l => l.slug === 'frontier-estates')!

export const metadata: Metadata = {
  title: location.metaTitle,
  description: location.metaDescription,
  openGraph: { images: ['/og-image.jpg'] },
  alternates: { canonical: `https://concreteprosofprosper.com/service-areas/${location.slug}` },
}

export default function FrontierEstatesPage() {
  return <LocationPageLayout location={location} />
}
