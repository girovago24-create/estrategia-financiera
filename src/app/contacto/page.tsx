'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsSubmitting(true)

    try {
      // IMPORTANTE: Reemplaza 'YOUR_FORM_ID' con tu ID de Formspree
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', message: '' })
      } else {
        setError(
          'Hubo un error al enviar el formulario. Por favor, intenta nuevamente.'
        )
      }
    } catch (err) {
      setError(
        'Error de conexión. Por favor, verifica tu conexión e intenta de nuevo.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section style={{
        backgroundColor: '#000c1e',
        paddingTop: '120px',
        paddingBottom: '80px',
        paddingLeft: '24px',
        paddingRight: '24px',
      }}>
        <div style={{
          maxWidth: '900px',
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
            CONTACTA CON NOSOTROS
          </div>
          <h1 style={{
            fontFamily: 'var(--font-serif, Georgia, serif)',
            fontSize: '56px',
            fontWeight: '300',
            color: '#ffffff',
            marginBottom: '24px',
            lineHeight: '1.1',
          }}>
            Cuéntanos tu situación
          </h1>
          <p style={{
            fontFamily: 'var(--font-sans, Inter, sans-serif)',
            fontSize: '18px',
            color: '#ffffff',
            lineHeight: '1.6',
            opacity: 0.9,
          }}>
            Estamos aquí para entender tu negocio y diseñar la estrategia
            financiera y fiscal perfecta para ti. Completa el formulario y nos
            pondremos en contacto en breve.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section style={{
        backgroundColor: '#f3f4f5',
        paddingTop: '96px',
        paddingBottom: '96px',
        paddingLeft: '24px',
        paddingRight: '24px',
      }}>
        <div style={{
          maxWidth: '700px',
          margin: '0 auto',
        }}>
          {submitted ? (
            <div
              style={{
                backgroundColor: '#ffffff',
                padding: '64px 48px',
                textAlign: 'center',
                borderRadius: '0px',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-serif, Georgia, serif)',
                  fontSize: '48px',
                  fontWeight: '300',
                  color: '#000c1e',
                  marginBottom: '24px',
                }}
              >
                ¡Gracias!
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-sans, Inter, sans-serif)',
                  fontSize: '16px',
                  color: '#191c1d',
                  lineHeight: '1.6',
                  marginBottom: '32px',
                }}
              >
                Hemos recibido tu mensaje correctamente. Nuestro equipo revisará
                tu solicitud y nos pondremos en contacto contigo en las próximas
                24-48 horas.
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-sans, Inter, sans-serif)',
                  fontSize: '15px',
                  color: '#191c1d',
                  opacity: 0.75,
                }}
              >
                Mientras tanto, si tienes cualquier duda urgente, no dudes en
                escribirnos directamente a{' '}
                <strong>hola@estrategiafinanzas.es</strong>
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div
                style={{
                  backgroundColor: '#ffffff',
                  padding: '56px 48px',
                  borderRadius: '0px',
                }}
              >
                {/* Nombre y Apellidos */}
                <div style={{ marginBottom: '32px' }}>
                  <label
                    htmlFor="name"
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-sans, Inter, sans-serif)',
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#000c1e',
                      marginBottom: '12px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    Nombre y Apellidos
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Juan García López"
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      border: '1px solid #caced2',
                      borderRadius: '0px',
                      fontFamily: 'var(--font-sans, Inter, sans-serif)',
                      fontSize: '16px',
                      color: '#191c1d',
                      boxSizing: 'border-box',
                      transition: 'border-color 200ms',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#000c1e'
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#caced2'
                    }}
                  />
                </div>

                {/* Correo Electrónico */}
                <div style={{ marginBottom: '32px' }}>
                  <label
                    htmlFor="email"
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-sans, Inter, sans-serif)',
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#000c1e',
                      marginBottom: '12px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="juan@tuempresa.com"
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      border: '1px solid #caced2',
                      borderRadius: '0px',
                      fontFamily: 'var(--font-sans, Inter, sans-serif)',
                      fontSize: '16px',
                      color: '#191c1d',
                      boxSizing: 'border-box',
                      transition: 'border-color 200ms',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#000c1e'
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#caced2'
                    }}
                  />
                </div>

                {/* Mensaje */}
                <div style={{ marginBottom: '32px' }}>
                  <label
                    htmlFor="message"
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-sans, Inter, sans-serif)',
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#000c1e',
                      marginBottom: '12px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    Tu Situación
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Cuéntanos brevemente tu situación actual, los desafíos que enfrenta tu negocio y por qué te gustaría trabajar con nosotros..."
                    rows={6}
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      border: '1px solid #caced2',
                      borderRadius: '0px',
                      fontFamily: 'var(--font-sans, Inter, sans-serif)',
                      fontSize: '16px',
                      color: '#191c1d',
                      boxSizing: 'border-box',
                      resize: 'vertical',
                      transition: 'border-color 200ms',
                      lineHeight: '1.5',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#000c1e'
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = '#caced2'
                    }}
                  />
                  <p
                    style={{
                      fontFamily: 'var(--font-sans, Inter, sans-serif)',
                      fontSize: '13px',
                      color: '#191c1d',
                      opacity: 0.6,
                      marginTop: '8px',
                    }}
                  >
                    ¿Necesitas asesoramiento en financiación? ¿Optimización
                    fiscal? ¿Ambas cosas? Cuéntanos y diseñaremos la solución
                    perfecta.
                  </p>
                </div>

                {/* Error Message */}
                {error && (
                  <div
                    style={{
                      backgroundColor: '#fee2e2',
                      border: '1px solid #fecaca',
                      padding: '16px',
                      marginBottom: '32px',
                      borderRadius: '0px',
                    }}
                  >
                    <p
                      style={{
                        fontFamily: 'var(--font-sans, Inter, sans-serif)',
                        fontSize: '14px',
                        color: '#991b1b',
                      }}
                    >
                      {error}
                    </p>
                  </div>
                )}

                {/* Submit Button */}
                <Button
                  variant="primary"
                  style={{
                    width: '100%',
                    fontSize: '16px',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    opacity: isSubmitting ? 0.7 : 1,
                  }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Solicitud'}
                </Button>

                <p
                  style={{
                    fontFamily: 'var(--font-sans, Inter, sans-serif)',
                    fontSize: '12px',
                    color: '#191c1d',
                    opacity: 0.6,
                    marginTop: '24px',
                    textAlign: 'center',
                  }}
                >
                  Nos tomaremos en serio tu privacidad. Tu información será
                  tratada de forma segura y confidencial.
                </p>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section style={{
        backgroundColor: '#ffffff',
        paddingTop: '80px',
        paddingBottom: '80px',
        paddingLeft: '24px',
        paddingRight: '24px',
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
        }}>
          <div style={{
            marginBottom: '64px',
            textAlign: 'center',
          }}>
            <h2
              style={{
                fontFamily: 'var(--font-serif, Georgia, serif)',
                fontSize: '42px',
                fontWeight: '300',
                color: '#000c1e',
                marginBottom: '20px',
                lineHeight: '1.1',
              }}
            >
              Otras formas de contactarnos
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-sans, Inter, sans-serif)',
                fontSize: '16px',
                color: '#191c1d',
                opacity: 0.8,
              }}
            >
              Si prefieres contactarnos directamente por correo o teléfono,
              aquí estamos disponibles.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '48px',
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontFamily: 'var(--font-sans, Inter, sans-serif)',
                  fontSize: '12px',
                  color: '#e9c176',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: '16px',
                }}
              >
                CORREO ELECTRÓNICO
              </div>
              <a
                href="mailto:hola@estrategiafinanzas.es"
                style={{
                  fontFamily: 'var(--font-serif, Georgia, serif)',
                  fontSize: '24px',
                  fontWeight: '300',
                  color: '#000c1e',
                  textDecoration: 'none',
                  transition: 'color 200ms',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#e9c176'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#000c1e'
                }}
              >
                hola@estrategiafinanzas.es
              </a>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontFamily: 'var(--font-sans, Inter, sans-serif)',
                  fontSize: '12px',
                  color: '#e9c176',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: '16px',
                }}
              >
                TELÉFONO
              </div>
              <a
                href="tel:+34912345678"
                style={{
                  fontFamily: 'var(--font-serif, Georgia, serif)',
                  fontSize: '24px',
                  fontWeight: '300',
                  color: '#000c1e',
                  textDecoration: 'none',
                  transition: 'color 200ms',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#e9c176'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#000c1e'
                }}
              >
                +34 91 234 56 78
              </a>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontFamily: 'var(--font-sans, Inter, sans-serif)',
                  fontSize: '12px',
                  color: '#e9c176',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: '16px',
                }}
              >
                TIEMPO DE RESPUESTA
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-serif, Georgia, serif)',
                  fontSize: '18px',
                  fontWeight: '300',
                  color: '#000c1e',
                }}
              >
                24-48 horas hábiles
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
