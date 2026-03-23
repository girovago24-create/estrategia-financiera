import type { ReactNode } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  children: ReactNode
}

export const Button = ({
  variant = 'primary',
  className = '',
  children,
  ...props
}: ButtonProps) => {
  if (variant === 'primary') {
    return (
      <button
        style={{
          backgroundColor: '#000c1e',
          color: '#ffffff',
          padding: '14px 28px',
          border: 'none',
          borderRadius: '0px',
          fontWeight: '600',
          fontSize: '16px',
          cursor: 'pointer',
          transition: 'background-color 200ms linear',
        }}
        className={`hover:opacity-90 ${className}`}
        {...props}
      >
        {children}
      </button>
    )
  }

  return (
    <button
      style={{
        backgroundColor: 'transparent',
        color: '#000c1e',
        padding: '14px 28px',
        border: '1px solid #caced2',
        borderRadius: '0px',
        fontWeight: '600',
        fontSize: '16px',
        cursor: 'pointer',
        transition: 'all 200ms linear',
      }}
      className={`hover:bg-opacity-10 hover:bg-gray-400 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
