import Image from 'next/image'
import Link from 'next/link'
import SectionHeading from '@/components/ui/SectionHeading'

const services = [
  { name: 'Driveways', slug: 'driveways', image: 'https://picsum.photos/seed/driveways/800/600', description: 'Custom concrete driveways with broom finish, exposed aggregate, or stamped patterns. Built for Prosper\'s curb appeal standards.' },
  { name: 'Patios', slug: 'patios', image: 'https://picsum.photos/seed/patios/800/600', description: 'Extend your outdoor living space with a concrete patio that handles Texas weather and matches your home\'s style.' },
  { name: 'Pool Decks', slug: 'pool-decks', image: 'https://picsum.photos/seed/pooldecks/800/600', description: 'Slip-resistant, cool-to-the-touch pool deck surfaces built for Prosper\'s long swimming season.' },
  { name: 'Block Walls', slug: 'block-walls', image: 'https://picsum.photos/seed/blockwalls/800/600', description: 'Retaining walls, privacy walls, and landscape walls engineered for North Texas terrain and drainage.' },
  { name: 'Foundations & Slabs', slug: 'foundations-slabs', image: 'https://picsum.photos/seed/foundations/800/600', description: 'Engineered foundations and slabs designed specifically for North Texas expansive clay soils.' },
  { name: 'Commercial Concrete', slug: 'commercial-concrete', image: 'https://picsum.photos/seed/commercial/800/600', description: 'Parking lots, sidewalks, ADA ramps, and warehouse slabs for Prosper\'s growing commercial corridor.' },
]

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Our Concrete Services" subtitle="Full-range residential and commercial concrete services for Prosper and surrounding communities." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`} className="group">
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border-t-3 border-accent">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold font-display text-primary">{service.name}</h3>
                  <p className="mt-2 text-mid font-body text-sm leading-relaxed">{service.description}</p>
                  <span className="mt-4 inline-flex items-center text-accent font-display font-medium text-sm">
                    Learn More →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
