'use client'

import { useState } from 'react'
import Image from 'next/image'

const categories = ['All', 'Driveways', 'Patios', 'Pool Decks', 'Block Walls', 'Foundations', 'Commercial']

const galleryItems = [
  { src: '/prosper-photos-named/driveway-1.jpg', category: 'Driveways', alt: 'Completed concrete driveway in Prosper TX' },
  { src: '/prosper-photos-named/driveway-2.jpg', category: 'Driveways', alt: 'Stamped concrete driveway in Windsong Ranch' },
  { src: '/prosper-photos-named/driveway-3.jpg', category: 'Driveways', alt: 'Exposed aggregate driveway in Prosper' },
  { src: '/prosper-photos-named/patio-1.jpg', category: 'Patios', alt: 'Backyard concrete patio in Star Trail' },
  { src: '/prosper-photos-named/patio-2.jpg', category: 'Patios', alt: 'Stamped concrete patio in Prosper' },
  { src: '/prosper-photos-named/patios-hero.jpg', category: 'Patios', alt: 'Large entertainment patio in Lakes of Prosper' },
  { src: '/prosper-photos-named/pool-deck-1.jpg', category: 'Pool Decks', alt: 'Cool deck pool surround in Prosper TX' },
  { src: '/prosper-photos-named/pool-deck-2.jpg', category: 'Pool Decks', alt: 'Textured concrete pool deck in Whitley Place' },
  { src: '/prosper-photos-named/block-wall-1.jpg', category: 'Block Walls', alt: 'Retaining wall in Gentle Creek Estates' },
  { src: '/prosper-photos-named/block-wall-2.jpg', category: 'Block Walls', alt: 'Decorative block wall in Prosper' },
  { src: '/prosper-photos-named/foundation-1.jpg', category: 'Foundations', alt: 'Garage slab foundation pour in Frontier Estates' },
  { src: '/prosper-photos-named/foundation-2.jpg', category: 'Foundations', alt: 'Workshop slab in Prosper TX' },
  { src: '/prosper-photos-named/commercial-1.jpg', category: 'Commercial', alt: 'Commercial parking lot concrete in Prosper' },
  { src: '/prosper-photos-named/commercial-hero.jpg', category: 'Commercial', alt: 'Commercial concrete work in Prosper TX' },
]

export default function GalleryGrid() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All' ? galleryItems : galleryItems.filter(item => item.category === activeFilter)

  return (
    <section className="py-20 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 rounded-full font-display text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 ${
                activeFilter === cat
                  ? 'bg-accent text-white'
                  : 'bg-bg border border-border text-mid hover:border-accent hover:text-accent'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, index) => (
            <div key={index} className="group relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/50 transition-colors duration-300 flex items-end">
                <span className="text-white font-display font-medium p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
