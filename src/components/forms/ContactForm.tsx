'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Button from '@/components/ui/Button'

const communities = [
  'Windsong Ranch',
  'Star Trail',
  'Whitley Place',
  'Gentle Creek Estates',
  "Tanner's Mill",
  'Lakes of Prosper',
  'Frontier Estates',
  'Prosper Trail',
  'Other / Prosper Area',
]

const serviceOptions = [
  'Driveway',
  'Patio',
  'Pool Deck',
  'Block Wall',
  'Foundation/Slab',
  'Commercial',
  'Other',
]

const referralSources = [
  'Google',
  'Facebook',
  'Referral',
  'Yard Sign',
  'Door Hanger',
  'Other',
]

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().regex(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email address'),
  community: z.string().min(1, 'Please select your community'),
  service: z.string().min(1, 'Please select a service'),
  description: z.string().min(20, 'Please provide at least 20 characters describing your project'),
  referral: z.string().optional(),
})

type ContactFormData = z.infer<typeof contactSchema>

type ContactFormProps = {
  preselectedCommunity?: string
}

export default function ContactForm({ preselectedCommunity }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      community: preselectedCommunity || '',
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Failed to submit')
      setSubmitted(true)
      setError(false)
    } catch {
      setError(true)
    }
  }

  if (submitted) {
    return (
      <div className="bg-accent/10 border border-accent/20 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-display font-semibold text-primary mb-2">Thank You!</h3>
        <p className="text-mid font-body">We&apos;ll be in touch within 1 business day!</p>
      </div>
    )
  }

  const inputClasses = 'w-full px-4 py-3 rounded-lg border border-border bg-white font-body text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors'
  const labelClasses = 'block text-sm font-display font-medium text-primary mb-1.5'
  const errorClasses = 'text-red-600 text-sm mt-1 font-body'

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 font-body text-sm">
          Something went wrong. Please try again or call us at (469) 535-9905.
        </div>
      )}

      <div>
        <label htmlFor="name" className={labelClasses}>Full Name</label>
        <input id="name" type="text" {...register('name')} className={inputClasses} placeholder="Your full name" />
        {errors.name && <p className={errorClasses}>{errors.name.message}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className={labelClasses}>Phone Number</label>
          <input id="phone" type="tel" {...register('phone')} className={inputClasses} placeholder="(469) 555-0123" />
          {errors.phone && <p className={errorClasses}>{errors.phone.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className={labelClasses}>Email Address</label>
          <input id="email" type="email" {...register('email')} className={inputClasses} placeholder="you@email.com" />
          {errors.email && <p className={errorClasses}>{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="community" className={labelClasses}>Community / Neighborhood</label>
          <select id="community" {...register('community')} className={inputClasses}>
            <option value="">Select your community</option>
            {communities.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          {errors.community && <p className={errorClasses}>{errors.community.message}</p>}
        </div>
        <div>
          <label htmlFor="service" className={labelClasses}>Service Needed</label>
          <select id="service" {...register('service')} className={inputClasses}>
            <option value="">Select a service</option>
            {serviceOptions.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          {errors.service && <p className={errorClasses}>{errors.service.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="description" className={labelClasses}>Project Description</label>
        <textarea id="description" rows={5} {...register('description')} className={inputClasses} placeholder="Tell us about your project — size, finish preferences, timeline, and any specific requirements." />
        {errors.description && <p className={errorClasses}>{errors.description.message}</p>}
      </div>

      <div>
        <label htmlFor="referral" className={labelClasses}>How did you hear about us? <span className="text-mid font-normal">(optional)</span></label>
        <select id="referral" {...register('referral')} className={inputClasses}>
          <option value="">Select one</option>
          {referralSources.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
      </div>

      <Button type="submit" variant="primary" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send My Request'}
      </Button>
    </form>
  )
}
