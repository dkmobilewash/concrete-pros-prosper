import Button from '@/components/ui/Button'

export default function CTABanner() {
  return (
    <section className="relative py-20 bg-accent clip-diagonal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-white">
          Ready to Start Your Concrete Project in Prosper?
        </h2>
        <p className="mt-4 text-lg text-white/90 font-body max-w-2xl mx-auto">
          Call us for a free, no-obligation estimate. We&apos;re local and we know these communities.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="tel:4695359905" variant="secondary" size="lg">
            Call (469) 535-9905
          </Button>
          <Button href="/contact" variant="outline-white" size="lg">
            Request a Quote
          </Button>
        </div>
      </div>
    </section>
  )
}
