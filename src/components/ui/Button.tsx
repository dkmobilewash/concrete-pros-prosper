import Link from 'next/link'

type ButtonProps = {
  children: React.ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'outline-white' | 'outline-dark'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  type?: 'button' | 'submit'
  onClick?: () => void
  disabled?: boolean
}

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  onClick,
  disabled = false,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-display font-semibold tracking-wide transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2'

  const variants = {
    primary: 'bg-accent text-white hover:bg-accent-dark',
    secondary: 'bg-primary text-white hover:bg-deep',
    'outline-white': 'border-2 border-white text-white hover:bg-white hover:text-primary',
    'outline-dark': 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`

  if (href) {
    if (href.startsWith('tel:')) {
      return <a href={href} className={classes}>{children}</a>
    }
    return <Link href={href} className={classes}>{children}</Link>
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}
