export const TestimonialSection = () => (
  <section style={{ backgroundColor: '#f8f9fa', paddingTop: '96px', paddingBottom: '96px', paddingLeft: '24px', paddingRight: '24px' }}>
    <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
      {/* Monolith */}
      <div style={{ 
        backgroundColor: '#000c1e', 
        color: '#ffffff', 
        padding: '96px',
        borderRadius: '0px',
        maxWidth: '1000px',
      }}>
        <span style={{ 
          fontSize: '12px', 
          fontWeight: '500', 
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#e9c176',
          display: 'block',
          marginBottom: '24px',
          fontFamily: 'var(--font-sans, Inter, sans-serif)'
        }}>
          Testimonio
        </span>

        <h2 style={{
          fontFamily: 'var(--font-serif, Georgia, serif)',
          fontSize: '56px',
          fontWeight: '300',
          lineHeight: '1.2',
          color: '#ffffff',
          marginBottom: '32px',
        }}>
          "Sin claridad financiera no hay estrategia real."
        </h2>

        <p style={{
          fontFamily: 'var(--font-sans, Inter, sans-serif)',
          fontSize: '16px',
          lineHeight: '1.6',
          color: '#ffffff',
          opacity: 0.9,
          marginBottom: '32px',
          maxWidth: '700px',
        }}>
          Después de trabajar con EF Consultores, entendemos realmente dónde están nuestras ineficiencias y cómo alcanzar nuestras metas de crecimiento. No fue un simple diagnóstico; fue una verdadera transformación estratégica.
        </p>

        <p style={{
          fontFamily: 'var(--font-sans, Inter, sans-serif)',
          fontSize: '16px',
          fontWeight: '600',
          color: '#e9c176',
        }}>
          CEO, Empresa de Tecnología (1.2M€)
        </p>
      </div>
    </div>
  </section>
)
