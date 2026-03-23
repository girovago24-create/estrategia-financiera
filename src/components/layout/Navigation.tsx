'use client'

import { useState } from 'react'
import Link from 'next/link'

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      backgroundColor: 'rgba(248, 249, 250, 0.95)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(202, 206, 210, 0.2)',
    }}>
      <div style={{
        maxWidth: '1440px',
        margin: '0 auto',
        padding: '0 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '80px',
      }}>
        {/* Logo */}
        <Link href="/" style={{
          fontFamily: 'var(--font-serif, Georgia, serif)',
          fontSize: '28px',
          fontWeight: '600',
          color: '#000c1e',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
        }}>
          <div style={{
            padding: '8px',
            backgroundColor: '#e9c176',
            borderRadius: '0px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '40px',
            height: '40px',
            fontSize: '20px',
            fontWeight: 'bold',
          }}>
            ↗
          </div>
          <span>Estrategia & Finanzas</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex" style={{
          gap: '32px',
          alignItems: 'center',
        }}>
          <Link href="/servicios" style={{
            fontSize: '16px',
            color: '#191c1d',
            textDecoration: 'none',
            fontFamily: 'var(--font-sans, Inter, sans-serif)',
            transition: 'color 200ms',
          }}>
            Servicios
          </Link>
          <div style={{
            width: '1px',
            height: '24px',
            backgroundColor: '#caced2',
          }} />
          <Link href="/contacto" style={{
            fontSize: '16px',
            color: '#191c1d',
            textDecoration: 'none',
            fontFamily: 'var(--font-sans, Inter, sans-serif)',
            transition: 'color 200ms',
          }}>
            Contactar
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            padding: '8px 0px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            opacity: 0.7,
            transition: 'opacity 200ms',
            alignItems: 'center',
            justifyContent: 'center',
            width: '44px',
            height: '44px',
          }}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
        >
          <div style={{ width: '24px', height: '2px', backgroundColor: '#000c1e' }} />
          <div style={{ width: '24px', height: '2px', backgroundColor: '#000c1e' }} />
          <div style={{ width: '24px', height: '2px', backgroundColor: '#000c1e' }} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div style={{
          borderTop: '1px solid #caced2',
          backgroundColor: '#f8f9fa',
          padding: '24px 24px 24px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        }} className="md:hidden">
          <Link href="/servicios" style={{
            fontSize: '18px',
            color: '#191c1d',
            textDecoration: 'none',
            fontFamily: 'var(--font-sans, Inter, sans-serif)',
          }}>
            Servicios
          </Link>
          <div style={{
            width: '100%',
            height: '1px',
            backgroundColor: '#caced2',
          }} />
          <Link href="/contacto" style={{
            fontSize: '18px',
            color: '#191c1d',
            textDecoration: 'none',
            fontFamily: 'var(--font-sans, Inter, sans-serif)',
          }}>
            Contactar
          </Link>
        </div>
      )}
    </nav>
  )
}