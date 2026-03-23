import type { ReactNode } from 'react'

interface TypographyProps {
  children: ReactNode
  className?: string
}

export const DisplayLarge = ({ children, className = '' }: TypographyProps) => (
  <h1 className={`font-serif text-display-lg font-light leading-tight text-primary ${className}`}>
    {children}
  </h1>
)

export const HeadlineMedium = ({ children, className = '' }: TypographyProps) => (
  <h2 className={`font-serif text-headline-md font-medium leading-snug text-primary ${className}`}>
    {children}
  </h2>
)

export const TitleLarge = ({ children, className = '' }: TypographyProps) => (
  <h3 className={`font-sans text-title-lg font-semibold leading-snug text-primary ${className}`}>
    {children}
  </h3>
)

export const BodyLarge = ({ children, className = '' }: TypographyProps) => (
  <p className={`font-sans text-body-lg font-normal leading-relaxed text-on-surface ${className}`}>
    {children}
  </p>
)

export const LabelMedium = ({ children, className = '' }: TypographyProps) => (
  <span className={`font-sans text-label-md font-medium uppercase tracking-widest text-tertiary-accent ${className}`}>
    {children}
  </span>
)

export const Eyebrow = ({ children, className = '' }: TypographyProps) => (
  <LabelMedium className={`block mb-4 ${className}`}>
    {children}
  </LabelMedium>
)
