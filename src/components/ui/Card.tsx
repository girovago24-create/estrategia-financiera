import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
}

export const Card = ({ children, className = '' }: CardProps) => (
  <div className={`bg-white rounded-none p-8 ${className}`}>
    {children}
  </div>
)

interface CardGridProps {
  children: ReactNode
  cols?: 1 | 2 | 3
  gap?: 'sp-10' | 'sp-20' | 'sp-24'
  className?: string
}

export const CardGrid = ({
  children,
  cols = 3,
  gap = 'sp-20',
  className = '',
}: CardGridProps) => {
  const colsMap = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  }

  const gapMap = {
    'sp-10': 'gap-10',
    'sp-20': 'gap-16',
    'sp-24': 'gap-20',
  }

  return (
    <div className={`grid ${colsMap[cols]} ${gapMap[gap]} ${className}`}>
      {children}
    </div>
  )
}
