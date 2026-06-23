import type { Metadata } from 'next'
import { locations } from '@/data/locations'
import LocationPageLayout from '@/components/sections/LocationPageLayout'

const location = locations.find(l => l.slug === 'tanners-mill')!

export const metadata: Metadata = {
  title: location.metaTitle,
  description: location.metaDescription,
  openGraph: {
    title: location.metaTitle,
    description: location.metaDescription,
    url: `https://concreteprosofprosper.com/service-areas/${location.slug}`,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: `Concrete contractors serving ${location.community}, Prosper TX` }],
  },
  alternates: { canonical: `https://concreteprosofprosper.com/service-areas/${location.slug}` },
}

export default function TannersMillPage() {
  return <LocationPageLayout location={location} />
}
