import { ShieldCheck, ClipboardList, Calendar, Star } from 'lucide-react'

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Licensed & Fully Insured',
    description: 'Full liability coverage and workers\' compensation on every project. Your property is protected.',
  },
  {
    icon: ClipboardList,
    title: 'Free Estimates',
    description: 'Detailed, no-obligation estimates for every project. Know your costs before any work begins.',
  },
  {
    icon: Calendar,
    title: 'Serving Prosper Since 2010',
    description: 'Over a decade of concrete work in Prosper\'s communities. We know the soil, the climate, and the standards.',
  },
  {
    icon: Star,
    title: '5-Star Google Rated',
    description: 'Consistently rated 5 stars by Prosper homeowners. Our reputation is built on quality and reliability.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold font-display text-primary border-l-2 border-accent pl-4 mb-12">
          Why Prosper Homeowners Choose Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason) => (
            <div key={reason.title} className="border-l-2 border-accent pl-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <reason.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold font-display text-primary">{reason.title}</h3>
              <p className="mt-2 text-mid font-body text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
