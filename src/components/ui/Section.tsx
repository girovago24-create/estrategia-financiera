import type { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  spacing?: 'sp-20' | 'sp-24'
  background?: 'surface' | 'surface-low' | 'surface-lowest'
  className?: string
}

export const Section = ({
  children,
  spacing = 'sp-24',
  background = 'surface',
  className = '',
}: SectionProps) => {
  const bgMap = {
    surface: 'bg-surface',
    'surface-low': 'bg-surface-low',
    'surface-lowest': 'bg-surface-lowest',
  }

  const spacingMap = {
    'sp-20': 'py-16 px-6 md:px-20',
    'sp-24': 'py-20 md:py-24 px-6 md:px-20',
  }

  return (
    <section className={`${bgMap[background]} ${spacingMap[spacing]} ${className}`}>
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  )
}
