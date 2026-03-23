import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export const HeroSection = () => (
  <section style={{ backgroundColor: '#f8f9fa', paddingTop: '80px', paddingBottom: '80px', paddingLeft: '24px', paddingRight: '24px' }}>
    <div style={{ maxWidth: '896px', margin: '0 auto' }}>
      {/* Eyebrow */}
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
        Consultoría Financiera Boutique
      </span>

      {/* Main Headline */}
      <h1 style={{
        fontFamily: 'var(--font-serif, Georgia, serif)',
        fontSize: '56px',
        fontWeight: '300',
        lineHeight: '1.2',
        color: '#000c1e',
        marginBottom: '32px',
        maxWidth: '800px',
      }}>
        Estrategia financiera de precisión para tu empresa.
      </h1>

      {/* Subheading */}
      <p style={{
        fontFamily: 'var(--font-sans, Inter, sans-serif)',
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '1.6',
        color: '#191c1d',
        marginBottom: '48px',
        maxWidth: '800px',
        opacity: 0.8,
      }}>
        Auditoría integral, restructuring y optimización financiera y fiscal diseñados para pymes que buscan crecimiento financiero sostenible. Sin ruido. Sin compromiso.
      </p>

      {/* CTA Buttons */}
      <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
        <Button variant="primary">
          <Link href="/contacto" style={{ textDecoration: 'none', color: 'inherit' }}>Iniciar consulta</Link>
        </Button>
        <Button variant="secondary">
          <Link href="/servicios" style={{ textDecoration: 'none', color: 'inherit' }}>Ver servicios</Link>
        </Button>
      </div>
    </div>
  </section>
)
