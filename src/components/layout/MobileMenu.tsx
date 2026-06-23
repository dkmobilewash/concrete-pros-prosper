'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { X, ChevronDown, Phone } from 'lucide-react'

const serviceLinks = [
  { name: 'All Services', href: '/services' },
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

type MobileMenuProps = {
  open: boolean
  onClose: () => void
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const [servicesOpen, setServicesOpen] = useState(false)
  const [areasOpen, setAreasOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div
        ref={menuRef}
        className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-primary text-white overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between p-6">
          <a
            href="tel:4695359905"
            className="inline-flex items-center gap-2 bg-accent text-white px-4 py-2.5 rounded-full font-display font-medium hover:bg-accent-dark transition-colors"
          >
            <Phone className="w-5 h-5" />
            (469) 535-9905
          </a>
          <button onClick={onClose} className="p-2 text-white focus:outline-none focus:ring-2 focus:ring-accent rounded" aria-label="Close menu">
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="px-6 pb-8">
          <div className="border-b border-white/10 pb-4 mb-4">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center justify-between w-full py-3 font-display font-medium text-lg focus:outline-none"
            >
              Services
              <ChevronDown className={`w-5 h-5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {servicesOpen && (
              <div className="pl-4 space-y-1">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className="block py-2 font-display text-gray-300 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="border-b border-white/10 pb-4 mb-4">
            <button
              onClick={() => setAreasOpen(!areasOpen)}
              className="flex items-center justify-between w-full py-3 font-display font-medium text-lg focus:outline-none"
            >
              Service Areas
              <ChevronDown className={`w-5 h-5 transition-transform ${areasOpen ? 'rotate-180' : ''}`} />
            </button>
            {areasOpen && (
              <div className="pl-4 space-y-1">
                {areaLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className="block py-2 font-display text-gray-300 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/gallery" onClick={onClose} className="block py-3 font-display font-medium text-lg hover:text-accent transition-colors">
            Gallery
          </Link>
          <Link href="/contact" onClick={onClose} className="block py-3 font-display font-medium text-lg hover:text-accent transition-colors">
            Contact Us
          </Link>
        </nav>
      </div>
    </div>
  )
}
