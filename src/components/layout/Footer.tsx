import Link from 'next/link'
import { CONTACT_EMAIL } from '@/lib/constants'

export const Footer = () => (
  <footer style={{
    backgroundColor: '#000c1e',
    color: '#ffffff',
    padding: '96px 24px',
  }}>
    <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
      {/* Sections */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '96px',
        marginBottom: '96px',
      }}>
        {/* Company */}
        <div>
          <h3 style={{
            fontFamily: 'var(--font-serif, Georgia, serif)',
            fontSize: '20px',
            fontWeight: '600',
            marginBottom: '24px',
          }}>
            EF Consultores
          </h3>
          <p style={{
            fontFamily: 'var(--font-sans, Inter, sans-serif)',
            fontSize: '14px',
            lineHeight: '1.6',
            opacity: 0.8,
          }}>
            Consultoría boutique de estrategia financiera para pymes.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p style={{
            fontFamily: 'var(--font-sans, Inter, sans-serif)',
            fontSize: '12px',
            fontWeight: '600',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '24px',
            color: '#e9c176',
          }}>
            Navegación
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Link href="/servicios" style={{
              fontFamily: 'var(--font-sans, Inter, sans-serif)',
              fontSize: '14px',
              color: '#ffffff',
              textDecoration: 'none',
              transition: 'color 200ms',
            }}>
              Servicios
            </Link>
          </div>
        </div>

        {/* Legal */}
        <div>
          <p style={{
            fontFamily: 'var(--font-sans, Inter, sans-serif)',
            fontSize: '12px',
            fontWeight: '600',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '24px',
            color: '#e9c176',
          }}>
            Legal
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Link href="/politica-privacidad" style={{
              fontFamily: 'var(--font-sans, Inter, sans-serif)',
              fontSize: '14px',
              color: '#ffffff',
              textDecoration: 'none',
              transition: 'color 200ms',
            }}>
              Política de privacidad
            </Link>
            <Link href="/aviso-legal" style={{
              fontFamily: 'var(--font-sans, Inter, sans-serif)',
              fontSize: '14px',
              color: '#ffffff',
              textDecoration: 'none',
              transition: 'color 200ms',
            }}>
              Aviso legal
            </Link>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: '1px', backgroundColor: '#ffffff', opacity: 0.2, marginBottom: '32px' }} />

      {/* Bottom */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }} className="flex flex-col md:flex-row md:justify-between md:items-center">
        <p style={{
          fontFamily: 'var(--font-sans, Inter, sans-serif)',
          fontSize: '12px',
          opacity: 0.7,
        }}>
          © {new Date().getFullYear()} EF Consultores. Todos los derechos reservados.
        </p>
        <p style={{
          fontFamily: 'var(--font-sans, Inter, sans-serif)',
          fontSize: '12px',
          opacity: 0.7,
        }}>
          <Link href={`mailto:${CONTACT_EMAIL}`} style={{
            color: '#ffffff',
            textDecoration: 'none',
            transition: 'color 200ms',
          }}>
            {CONTACT_EMAIL}
          </Link>
        </p>
      </div>
    </div>
  </footer>
)
