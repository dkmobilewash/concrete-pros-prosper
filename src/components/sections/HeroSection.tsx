import Image from 'next/image'
import Button from '@/components/ui/Button'
import { ChevronDown } from 'lucide-react'

type HeroSectionProps = {
  title: string
  subtitle: string
  ctaText?: string
  ctaHref?: string
  secondaryCtaText?: string
  secondaryCtaHref?: string
  imageSrc: string
  imageAlt: string
  height?: 'full' | 'medium' | 'short'
}

export default function HeroSection({
  title,
  subtitle,
  ctaText,
  ctaHref,
  secondaryCtaText,
  secondaryCtaHref,
  imageSrc,
  imageAlt,
  height = 'medium',
}: HeroSectionProps) {
  const heightClasses = {
    full: 'min-h-screen',
    medium: 'min-h-[500px]',
    short: 'min-h-[320px]',
  }

  return (
    <section className={`relative ${heightClasses[height]} flex items-center overflow-hidden`}>
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-primary/65" />
      <div className="absolute inset-0 concrete-texture pointer-events-none" />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight font-display text-white">
            {title}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 font-body max-w-2xl">
            {subtitle}
          </p>
          {(ctaText || secondaryCtaText) && (
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              {ctaText && ctaHref && (
                <Button href={ctaHref} variant="primary" size="lg">
                  {ctaText}
                </Button>
              )}
              {secondaryCtaText && secondaryCtaHref && (
                <Button href={secondaryCtaHref} variant="outline-white" size="lg">
                  {secondaryCtaText}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
      {height === 'full' && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <ChevronDown className="w-8 h-8 text-white animate-bounce" />
        </div>
      )}
    </section>
  )
}
