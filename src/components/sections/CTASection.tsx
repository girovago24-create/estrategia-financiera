import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export const CTASection = () => (
  <section style={{ backgroundColor: '#f3f4f5', paddingTop: '96px', paddingBottom: '96px', paddingLeft: '24px', paddingRight: '24px' }}>
    <div style={{ maxWidth: '896px', margin: '0 auto' }}>
      <span style={{ 
        fontSize: '12px', 
        fontWeight: '500', 
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: '#e9c176',
        display: 'block',
        marginBottom: '16px',
        fontFamily: 'var(--font-sans, Inter, sans-serif)'
      }}>
        Fase Beta
      </span>

      <h2 style={{
        fontFamily: 'var(--font-serif, Georgia, serif)',
        fontSize: '44px',
        fontWeight: '500',
        lineHeight: '1.4',
        color: '#000c1e',
        marginBottom: '24px',
      }}>
        Comienza tu transformación financiera.
      </h2>

      <p style={{
        fontFamily: 'var(--font-sans, Inter, sans-serif)',
        fontSize: '16px',
        lineHeight: '1.6',
        color: '#191c1d',
        marginBottom: '32px',
        opacity: 0.8,
      }}>
        Acceso exclusivo a nuestro programa de consultoría estratégica. Lugares limitados para la fase beta.
      </p>

      <Button variant="primary">
        <Link href="/contacto" style={{ textDecoration: 'none', color: 'inherit' }}>Solicitar consulta inicial</Link>
      </Button>
    </div>
  </section>
)
