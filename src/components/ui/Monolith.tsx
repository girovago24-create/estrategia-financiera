import type { ReactNode } from 'react'

interface MonolithProps {
  children: ReactNode
  className?: string
}

export const Monolith = ({ children, className = '' }: MonolithProps) => (
  <div className={`bg-primary text-white py-20 md:py-24 px-6 md:px-20 rounded-none ${className}`}>
    <div className="max-w-4xl mx-auto">{children}</div>
  </div>
)
