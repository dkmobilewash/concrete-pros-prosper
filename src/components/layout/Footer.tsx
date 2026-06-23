import Link from 'next/link'
import { Phone, Mail, Clock, MapPin } from 'lucide-react'

const serviceLinks = [
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

export default function Footer() {
  return (
    <footer className="bg-deep text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="font-display font-bold text-xl mb-2">
              Concrete Pros <span className="text-accent">Of Prosper</span>
            </h3>
            <p className="text-sm text-gray-400 font-body mb-4">Prosper&apos;s Trusted Concrete Contractors</p>
            <p className="text-sm text-gray-400 font-body leading-relaxed">
              Licensed and insured, serving Prosper and surrounding communities with quality concrete work since 2010.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-accent transition-colors font-body">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Communities Served</h4>
            <ul className="space-y-2.5">
              {areaLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-accent transition-colors font-body">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-400 font-body">Prosper, TX 75078</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <a href="tel:4695359905" className="text-sm text-gray-400 hover:text-accent transition-colors font-body">
                  (469) 535-9905
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <a href="mailto:info@concreteprosofprosper.com" className="text-sm text-gray-400 hover:text-accent transition-colors font-body">
                  info@concreteprosofprosper.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-400 font-body">Mon-Sat 7:00am-6:00pm</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 font-body">
            &copy; {new Date().getFullYear()} Concrete Pros Of Prosper. All Rights Reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="text-sm text-gray-500 hover:text-accent transition-colors font-body">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-sm text-gray-500 hover:text-accent transition-colors font-body">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
