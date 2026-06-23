'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Phone, ChevronDown, Menu } from 'lucide-react'
import MobileMenu from './MobileMenu'

const serviceLinks = [
  { name: 'Concrete Services', href: '/services' },
  { name: 'Driveways', href: '/services/driveways' },
  { name: 'Patios', href: '/services/patios' },
  { name: 'Pool Decks', href: '/services/pool-decks' },
  { name: 'Block Walls', href: '/services/block-walls' },
  { name: 'Foundations & Slabs', href: '/services/foundations-slabs' },
  { name: 'Commercial Concrete', href: '/services/commercial-concrete' },
]

const areaLinks = [
  { name: 'Windsong Ranch', href: '/service-areas/windsong-ranch' },
  { name: 'Star Trail', href: '/service-areas/star-trail' },
  { name: 'Whitley Place', href: '/service-areas/whitley-place' },
  { name: 'Gentle Creek Estates', href: '/service-areas/gentle-creek-estates' },
  { name: "Tanner's Mill", href: '/service-areas/tanners-mill' },
  { name: 'Lakes of Prosper', href: '/service-areas/lakes-of-prosper' },
  { name: 'Frontier Estates', href: '/service-areas/frontier-estates' },
  { name: 'Prosper Trail', href: '/service-areas/prosper-trail' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [areasOpen, setAreasOpen] = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)
  const areasRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
      if (areasRef.current && !areasRef.current.contains(e.target as Node)) {
        setAreasOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-primary/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex-shrink-0">
            <span className="font-display font-bold text-2xl text-white">
              Concrete Pros{' '}
              <span className="text-accent text-lg font-medium">Of Prosper</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <div ref={servicesRef} className="relative">
              <button
                onClick={() => { setServicesOpen(!servicesOpen); setAreasOpen(false) }}
                className="flex items-center gap-1 text-white font-display font-medium hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary rounded"
              >
                Services <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-border py-2">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setServicesOpen(false)}
                      className="block px-4 py-2.5 font-display text-sm text-primary hover:text-accent hover:bg-bg transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div ref={areasRef} className="relative">
              <button
                onClick={() => { setAreasOpen(!areasOpen); setServicesOpen(false) }}
                className="flex items-center gap-1 text-white font-display font-medium hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary rounded"
              >
                Service Areas <ChevronDown className={`w-4 h-4 transition-transform ${areasOpen ? 'rotate-180' : ''}`} />
              </button>
              {areasOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-border p-4">
                  <div className="grid grid-cols-2 gap-1">
                    {areaLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setAreasOpen(false)}
                        className="block px-3 py-2.5 font-display text-sm text-primary hover:text-accent hover:bg-bg rounded-lg transition-colors"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/gallery" className="text-white font-display font-medium hover:text-accent transition-colors">
              Gallery
            </Link>
            <Link href="/contact" className="text-white font-display font-medium hover:text-accent transition-colors">
              Contact Us
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="tel:4695359905"
              className="hidden sm:inline-flex items-center gap-2 bg-accent text-white px-4 py-2 rounded-full font-display font-medium text-sm hover:bg-accent-dark transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            >
              <Phone className="w-4 h-4" />
              (469) 535-9905
            </a>
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden text-white p-2 focus:outline-none focus:ring-2 focus:ring-accent rounded"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  )
}
