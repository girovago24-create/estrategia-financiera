import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export const metadata = {
  title: 'Servicios | Estrategia & Finanzas',
  description: 'Descubre nuestros servicios de financiación bancaria y planificación fiscal para impulsar el crecimiento de tu negocio.',
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section style={{
        backgroundColor: '#ffffff',
        paddingTop: '120px',
        paddingBottom: '80px',
        paddingLeft: '24px',
        paddingRight: '24px',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          <div style={{
            marginBottom: '48px',
          }}>
            <div style={{
              fontFamily: 'var(--font-sans, Inter, sans-serif)',
              fontSize: '12px',
              color: '#e9c176',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '16px',
            }}>
              NUESTRAS SOLUCIONES
            </div>
            <h1 style={{
              fontFamily: 'var(--font-serif, Georgia, serif)',
              fontSize: '56px',
              fontWeight: '300',
              color: '#000c1e',
              marginBottom: '24px',
              lineHeight: '1.1',
              maxWidth: '800px',
            }}>
              Dos áreas de expertise. Una misión: tu crecimiento financiero.
            </h1>
            <p style={{
              fontFamily: 'var(--font-sans, Inter, sans-serif)',
              fontSize: '18px',
              color: '#191c1d',
              lineHeight: '1.6',
              maxWidth: '700px',
              opacity: 0.8,
            }}>
              En Estrategia & Finanzas nos especializamos en sentar las bases correctas para que tu negocio crezca con solidez. Contamos con expertos en financiación bancaria y planificación fiscal que trabajan unidos para potenciar tu empresa.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{
        backgroundColor: '#f3f4f5',
        paddingTop: '96px',
        paddingBottom: '96px',
        paddingLeft: '24px',
        paddingRight: '24px',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
            gap: '64px',
          }}>
            {/* Financiación Bancaria */}
            <div style={{
              backgroundColor: '#ffffff',
              padding: '56px',
              borderRadius: '0px',
            }}>
              <div style={{
                fontFamily: 'var(--font-sans, Inter, sans-serif)',
                fontSize: '12px',
                color: '#e9c176',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '20px',
              }}>
                ESPECIALIDAD 1
              </div>
              <h2 style={{
                fontFamily: 'var(--font-serif, Georgia, serif)',
                fontSize: '32px',
                fontWeight: '300',
                color: '#000c1e',
                marginBottom: '24px',
              }}>
                Financiación Bancaria
              </h2>
              <p style={{
                fontFamily: 'var(--font-sans, Inter, sans-serif)',
                fontSize: '16px',
                color: '#191c1d',
                lineHeight: '1.7',
                marginBottom: '32px',
              }}>
                Acceso a financiación estratégica que acelera tu crecimiento. Nuestros expertos en financiación bancaria domina los entresijos del sistema financiero para conseguir las mejores condiciones para tu empresa.
              </p>

              <div style={{ marginBottom: '32px' }}>
                <h3 style={{
                  fontFamily: 'var(--font-sans, Inter, sans-serif)',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#000c1e',
                  marginBottom: '16px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}>
                  Lo que conseguirás:
                </h3>
                <ul style={{
                  fontFamily: 'var(--font-sans, Inter, sans-serif)',
                  fontSize: '15px',
                  color: '#191c1d',
                  lineHeight: '1.8',
                  listStyle: 'none',
                  padding: '0',
                }}>
                  <li style={{ marginBottom: '12px' }}>
                    ✓ Negociación exitosa con entidades financieras
                  </li>
                  <li style={{ marginBottom: '12px' }}>
                    ✓ Términos y tasas optimizadas para tu empresa
                  </li>
                  <li style={{ marginBottom: '12px' }}>
                    ✓ Estrategia de financiación alineada con tu crecimiento
                  </li>
                  <li style={{ marginBottom: '12px' }}>
                    ✓ Acceso a líneas de crédito adecuadas para inversión
                  </li>
                  <li>
                    ✓ Fondos para impulsar tu expansión sin comprometer tu estructura
                  </li>
                </ul>
              </div>

              <p style={{
                fontFamily: 'var(--font-sans, Inter, sans-serif)',
                fontSize: '14px',
                color: '#191c1d',
                opacity: 0.75,
                fontStyle: 'italic',
              }}>
                Con la financiación adecuada, tu negocio puede crecer el doble. Nosotros nos encargamos de encontrarla.
              </p>
            </div>

            {/* Planificación Fiscal */}
            <div style={{
              backgroundColor: '#ffffff',
              padding: '56px',
              borderRadius: '0px',
            }}>
              <div style={{
                fontFamily: 'var(--font-sans, Inter, sans-serif)',
                fontSize: '12px',
                color: '#e9c176',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '20px',
              }}>
                ESPECIALIDAD 2
              </div>
              <h2 style={{
                fontFamily: 'var(--font-serif, Georgia, serif)',
                fontSize: '32px',
                fontWeight: '300',
                color: '#000c1e',
                marginBottom: '24px',
              }}>
                Planificación Fiscal
              </h2>
              <p style={{
                fontFamily: 'var(--font-sans, Inter, sans-serif)',
                fontSize: '16px',
                color: '#191c1d',
                lineHeight: '1.7',
                marginBottom: '32px',
              }}>
                Optimiza tu carga fiscal de forma legal y estructurada. Nuestro experto en planificación fiscal te ayuda a retener más del dinero que ganas, maximizando la rentabilidad de tu empresa.
              </p>

              <div style={{ marginBottom: '32px' }}>
                <h3 style={{
                  fontFamily: 'var(--font-sans, Inter, sans-serif)',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#000c1e',
                  marginBottom: '16px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}>
                  Lo que conseguirás:
                </h3>
                <ul style={{
                  fontFamily: 'var(--font-sans, Inter, sans-serif)',
                  fontSize: '15px',
                  color: '#191c1d',
                  lineHeight: '1.8',
                  listStyle: 'none',
                  padding: '0',
                }}>
                  <li style={{ marginBottom: '12px' }}>
                    ✓ Estrategia fiscal personalizada para tu estructura
                  </li>
                  <li style={{ marginBottom: '12px' }}>
                    ✓ Reducción legal de tu carga impositiva
                  </li>
                  <li style={{ marginBottom: '12px' }}>
                    ✓ Cumplimiento total de normativas fiscales
                  </li>
                  <li style={{ marginBottom: '12px' }}>
                    ✓ Planificación a largo plazo para maximizar beneficios
                  </li>
                  <li>
                    ✓ Asesoramiento proactivo ante cambios legislativos
                  </li>
                </ul>
              </div>

              <p style={{
                fontFamily: 'var(--font-sans, Inter, sans-serif)',
                fontSize: '14px',
                color: '#191c1d',
                opacity: 0.75,
                fontStyle: 'italic',
              }}>
                La excelencia fiscal no es suerte. Es estrategia. Y nosotros la diseñamos para ti.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section style={{
        backgroundColor: '#000c1e',
        paddingTop: '96px',
        paddingBottom: '96px',
        paddingLeft: '24px',
        paddingRight: '24px',
      }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          textAlign: 'center',
        }}>
          <div style={{
            fontFamily: 'var(--font-sans, Inter, sans-serif)',
            fontSize: '12px',
            color: '#e9c176',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: '24px',
          }}>
            LA DIFERENCIA DECISIVA
          </div>
          <h2 style={{
            fontFamily: 'var(--font-serif, Georgia, serif)',
            fontSize: '48px',
            fontWeight: '300',
            color: '#ffffff',
            marginBottom: '32px',
            lineHeight: '1.1',
          }}>
            Cuando financiación y fiscalidad trabajan juntas
          </h2>
          <p style={{
            fontFamily: 'var(--font-sans, Inter, sans-serif)',
            fontSize: '18px',
            color: '#ffffff',
            lineHeight: '1.7',
            marginBottom: '56px',
            opacity: 0.9,
          }}>
            No buscamos soluciones aisladas. Nuestros expertos colaboran para crear una estrategia integral donde cada decisión de financiación está optimizada fiscalmente, y cada movimiento fiscal maximiza tu capacidad de endeudamiento. El resultado: un negocio estructurado correctamente, con crecimiento acelerado y máxima rentabilidad.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '48px',
            marginBottom: '56px',
          }}>
            <div style={{
              padding: '32px',
              backgroundColor: 'rgba(233, 193, 118, 0.1)',
              borderLeft: '3px solid #e9c176',
            }}>
              <div style={{
                fontFamily: 'var(--font-serif, Georgia, serif)',
                fontSize: '28px',
                fontWeight: '300',
                color: '#e9c176',
                marginBottom: '12px',
              }}>
                +45%
              </div>
              <p style={{
                fontFamily: 'var(--font-sans, Inter, sans-serif)',
                fontSize: '14px',
                color: '#ffffff',
              }}>
                Incremento promedio en acceso a financiación con estrategia integral
              </p>
            </div>

            <div style={{
              padding: '32px',
              backgroundColor: 'rgba(233, 193, 118, 0.1)',
              borderLeft: '3px solid #e9c176',
            }}>
              <div style={{
                fontFamily: 'var(--font-serif, Georgia, serif)',
                fontSize: '28px',
                fontWeight: '300',
                color: '#e9c176',
                marginBottom: '12px',
              }}>
                20-30%
              </div>
              <p style={{
                fontFamily: 'var(--font-sans, Inter, sans-serif)',
                fontSize: '14px',
                color: '#ffffff',
              }}>
                Ahorro fiscal anual con planificación estructurada
              </p>
            </div>

            <div style={{
              padding: '32px',
              backgroundColor: 'rgba(233, 193, 118, 0.1)',
              borderLeft: '3px solid #e9c176',
            }}>
              <div style={{
                fontFamily: 'var(--font-serif, Georgia, serif)',
                fontSize: '28px',
                fontWeight: '300',
                color: '#e9c176',
                marginBottom: '12px',
              }}>
                100%
              </div>
              <p style={{
                fontFamily: 'var(--font-sans, Inter, sans-serif)',
                fontSize: '14px',
                color: '#ffffff',
              }}>
                Cumplimiento legal en todas nuestras estrategias
              </p>
            </div>
          </div>

          <Button variant="primary" style={{ fontSize: '16px' }}>
            <Link href="/contacto" style={{ textDecoration: 'none', color: 'inherit' }}>
              Solicitar consulta estratégica
            </Link>
          </Button>
        </div>
      </section>

      {/* How We Work Section */}
      <section style={{
        backgroundColor: '#ffffff',
        paddingTop: '96px',
        paddingBottom: '96px',
        paddingLeft: '24px',
        paddingRight: '24px',
      }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
        }}>
          <div style={{
            marginBottom: '64px',
            textAlign: 'center',
          }}>
            <div style={{
              fontFamily: 'var(--font-sans, Inter, sans-serif)',
              fontSize: '12px',
              color: '#e9c176',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '24px',
            }}>
              NUESTRO PROCESO
            </div>
            <h2 style={{
              fontFamily: 'var(--font-serif, Georgia, serif)',
              fontSize: '48px',
              fontWeight: '300',
              color: '#000c1e',
              marginBottom: '32px',
              lineHeight: '1.1',
            }}>
              Cómo trabajamos contigo
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '48px',
          }}>
            <div style={{
              padding: '40px 32px',
              backgroundColor: '#f3f4f5',
              textAlign: 'center',
            }}>
              <div style={{
                fontFamily: 'var(--font-serif, Georgia, serif)',
                fontSize: '48px',
                fontWeight: '300',
                color: '#e9c176',
                marginBottom: '16px',
              }}>
                01
              </div>
              <h3 style={{
                fontFamily: 'var(--font-sans, Inter, sans-serif)',
                fontSize: '18px',
                fontWeight: '600',
                color: '#000c1e',
                marginBottom: '16px',
              }}>
                Diagnosis integral
              </h3>
              <p style={{
                fontFamily: 'var(--font-sans, Inter, sans-serif)',
                fontSize: '14px',
                color: '#191c1d',
                lineHeight: '1.6',
              }}>
                Analizamos tu estructura financiera y fiscal actual para entender dónde estás y hacia dónde vamos.
              </p>
            </div>

            <div style={{
              padding: '40px 32px',
              backgroundColor: '#f3f4f5',
              textAlign: 'center',
            }}>
              <div style={{
                fontFamily: 'var(--font-serif, Georgia, serif)',
                fontSize: '48px',
                fontWeight: '300',
                color: '#e9c176',
                marginBottom: '16px',
              }}>
                02
              </div>
              <h3 style={{
                fontFamily: 'var(--font-sans, Inter, sans-serif)',
                fontSize: '18px',
                fontWeight: '600',
                color: '#000c1e',
                marginBottom: '16px',
              }}>
                Estrategia personalizada
              </h3>
              <p style={{
                fontFamily: 'var(--font-sans, Inter, sans-serif)',
                fontSize: '14px',
                color: '#191c1d',
                lineHeight: '1.6',
              }}>
                Diseñamos un plan integral de financiación y planificación fiscal alineado con tus objetivos de crecimiento.
              </p>
            </div>

            <div style={{
              padding: '40px 32px',
              backgroundColor: '#f3f4f5',
              textAlign: 'center',
            }}>
              <div style={{
                fontFamily: 'var(--font-serif, Georgia, serif)',
                fontSize: '48px',
                fontWeight: '300',
                color: '#e9c176',
                marginBottom: '16px',
              }}>
                03
              </div>
              <h3 style={{
                fontFamily: 'var(--font-sans, Inter, sans-serif)',
                fontSize: '18px',
                fontWeight: '600',
                color: '#000c1e',
                marginBottom: '16px',
              }}>
                Implementación y seguimiento
              </h3>
              <p style={{
                fontFamily: 'var(--font-sans, Inter, sans-serif)',
                fontSize: '14px',
                color: '#191c1d',
                lineHeight: '1.6',
              }}>
                Ejecutamos la estrategia y acompañamos cada paso, optimizando continuamente según los resultados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{
        backgroundColor: '#f3f4f5',
        paddingTop: '80px',
        paddingBottom: '80px',
        paddingLeft: '24px',
        paddingRight: '24px',
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center',
        }}>
          <h2 style={{
            fontFamily: 'var(--font-serif, Georgia, serif)',
            fontSize: '42px',
            fontWeight: '300',
            color: '#000c1e',
            marginBottom: '24px',
            lineHeight: '1.1',
          }}>
            ¿Listo para estructurar tu empresa correctamente?
          </h2>
          <p style={{
            fontFamily: 'var(--font-sans, Inter, sans-serif)',
            fontSize: '16px',
            color: '#191c1d',
            marginBottom: '48px',
            lineHeight: '1.6',
            opacity: 0.8,
          }}>
            Contáctanos para una consulta inicial donde analizaremos tu situación y te presentaremos una estrategia personalizada de financiación y planificación fiscal.
          </p>
          <Button variant="primary" style={{ fontSize: '16px' }}>
            <Link href="/contacto" style={{ textDecoration: 'none', color: 'inherit' }}>
              Agendar consulta
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}