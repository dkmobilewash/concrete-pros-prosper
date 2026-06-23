type SectionHeadingProps = {
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
}

export default function SectionHeading({ title, subtitle, centered = false, light = false }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className={`text-3xl md:text-4xl font-semibold font-display ${centered ? '' : 'border-l-2 border-accent pl-4'} ${light ? 'text-white' : 'text-primary'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg ${light ? 'text-gray-300' : 'text-mid'} font-body max-w-2xl ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
