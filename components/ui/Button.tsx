import Link from 'next/link'

type Variant = 'primary' | 'secondary' | 'ghost'

interface ButtonProps {
  variant?: Variant
  href?: string
  onClick?: () => void
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-sage text-white hover:bg-sage-dark border border-sage hover:border-sage-dark',
  secondary:
    'bg-transparent text-sage border border-sage hover:bg-sage hover:text-white',
  ghost:
    'bg-transparent text-white border border-white hover:bg-white hover:text-charcoal',
}

export default function Button({
  variant = 'primary',
  href,
  onClick,
  children,
  className = '',
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const base =
    'inline-block font-jost font-light tracking-widest uppercase text-xs px-8 py-4 transition-all duration-300'
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : ''
  const classes = `${base} ${variantClasses[variant]} ${disabledClasses} ${className}`

  if (href) {
    const isExternal = href.startsWith('http')
    return (
      <Link
        href={href}
        className={classes}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  )
}
