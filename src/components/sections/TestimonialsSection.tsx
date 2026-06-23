import { Star } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { testimonials } from '@/data/testimonials'

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="What Our Neighbors Are Saying" centered light />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/5 rounded-xl border border-white/10 p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 font-body leading-relaxed mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
              <div>
                <p className="font-display font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-gray-400 font-body">{testimonial.community}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
