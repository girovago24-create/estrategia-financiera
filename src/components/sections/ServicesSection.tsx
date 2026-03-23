export const ServicesSection = () => (
  <section style={{ backgroundColor: '#f3f4f5', paddingTop: '96px', paddingBottom: '96px', paddingLeft: '24px', paddingRight: '24px' }}>
    <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: '48px', maxWidth: '700px' }}>
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
          Nuestros Servicios
        </span>
        <h2 style={{
          fontFamily: 'var(--font-serif, Georgia, serif)',
          fontSize: '44px',
          fontWeight: '500',
          lineHeight: '1.4',
          color: '#000c1e',
        }}>
          Soluciones de estrategia financiera integradas.
        </h2>
      </div>

      {/* Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px' }}>
        {/* Card 1 */}
        <div style={{ backgroundColor: '#ffffff', padding: '32px', borderRadius: '0px' }}>
          <h3 style={{
            fontFamily: 'var(--font-sans, Inter, sans-serif)',
            fontSize: '22px',
            fontWeight: '600',
            marginBottom: '16px',
            color: '#000c1e',
          }}>
            Auditoría Financiera Integral
          </h3>
          <p style={{
            fontFamily: 'var(--font-sans, Inter, sans-serif)',
            fontSize: '16px',
            lineHeight: '1.6',
            color: '#191c1d',
            opacity: 0.75,
          }}>
            Análisis exhaustivo de tu estructura financiera, cumplimiento normativo y oportunidades de optimización fiscal.
          </p>
        </div>

        {/* Card 2 */}
        <div style={{ backgroundColor: '#ffffff', padding: '32px', borderRadius: '0px' }}>
          <h3 style={{
            fontFamily: 'var(--font-sans, Inter, sans-serif)',
            fontSize: '22px',
            fontWeight: '600',
            marginBottom: '16px',
            color: '#000c1e',
          }}>
            Restructuring Empresarial
          </h3>
          <p style={{
            fontFamily: 'var(--font-sans, Inter, sans-serif)',
            fontSize: '16px',
            lineHeight: '1.6',
            color: '#191c1d',
            opacity: 0.75,
          }}>
            Rediseño estratégico de tu operación, optimización de costos y reorganización financiera eficiente.
          </p>
        </div>

        {/* Card 3 */}
        <div style={{ backgroundColor: '#ffffff', padding: '32px', borderRadius: '0px' }}>
          <h3 style={{
            fontFamily: 'var(--font-sans, Inter, sans-serif)',
            fontSize: '22px',
            fontWeight: '600',
            marginBottom: '16px',
            color: '#000c1e',
          }}>
            Planificación Estratégica
          </h3>
          <p style={{
            fontFamily: 'var(--font-sans, Inter, sans-serif)',
            fontSize: '16px',
            lineHeight: '1.6',
            color: '#191c1d',
            opacity: 0.75,
          }}>
            Roadmap financiero personalizado con proyecciones de crecimiento, financiación y valor empresarial.
          </p>
        </div>
      </div>
    </div>
  </section>
)
