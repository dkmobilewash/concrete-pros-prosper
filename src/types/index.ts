export type ServiceData = {
  slug: string
  name: string
  metaTitle: string
  metaDescription: string
  heroImage: string
  heroSubtitle: string
  intro: string[]
  benefits: string[]
  processSteps: {
    title: string
    description: string
  }[]
  faq: {
    question: string
    answer: string
  }[]
  relatedServices: string[]
}

export type LocationData = {
  community: string
  slug: string
  city: string
  county: string
  metaTitle: string
  metaDescription: string
  heroSubtitle: string
  intro: string[]
  nearbyAreas: string[]
  services: string[]
  testimonial: {
    quote: string
    name: string
    community: string
  }
  notableFeatures: string[]
}

export type Testimonial = {
  quote: string
  name: string
  community: string
  project: string
}
