type BadgeProps = {
  children: React.ReactNode
  variant?: 'accent' | 'dark' | 'light'
}

export default function Badge({ children, variant = 'accent' }: BadgeProps) {
  const variants = {
    accent: 'bg-accent/10 text-accent border border-accent/20',
    dark: 'bg-primary text-white',
    light: 'bg-white text-primary border border-border',
  }

  return (
    <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-display font-medium ${variants[variant]}`}>
      {children}
    </span>
  )
}
