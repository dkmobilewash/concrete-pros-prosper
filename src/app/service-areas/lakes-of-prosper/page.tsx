import type { Metadata } from 'next'
import { locations } from '@/data/locations'
import LocationPageLayout from '@/components/sections/LocationPageLayout'

const location = locations.find(l => l.slug === 'lakes-of-prosper')!

export const metadata: Metadata = {
  title: location.metaTitle,
  description: location.metaDescription,
  openGraph: { images: ['/og-image.jpg'] },
  alternates: { canonical: `https://concreteprosofprosper.com/service-areas/${location.slug}` },
}

export default function LakesOfProsperPage() {
  return <LocationPageLayout location={location} />
}
