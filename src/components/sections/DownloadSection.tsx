'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Section } from '@/components/ui/Section'

interface DownloadModalProps {
  isOpen: boolean
  onClose: () => void
}

const DownloadModal = ({ isOpen, onClose }: DownloadModalProps) => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simular envío (reemplazar con Formspree o similar)
    try {
      const response = await fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          subject: 'Solicitud de descarga - Guía Excel Estrategia Financiera',
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
      }
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
    }}>
      <div style={{
        backgroundColor: '#ffffff',
        padding: '48px',
        borderRadius: '0px',
        maxWidth: '500px',
        width: '90%',
        position: 'relative',
      }}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'none',
            border: 'none',
            fontSize: '24px',
            cursor: 'pointer',
            color: '#191c1d',
          }}
        >
          ×
        </button>

        {!isSubmitted ? (
          <>
            <h2 style={{
              fontFamily: 'var(--font-serif, Georgia, serif)',
              fontSize: '28px',
              fontWeight: '300',
              color: '#000c1e',
              marginBottom: '24px',
            }}>
              Descargar Guía Excel
            </h2>
            <p style={{
              fontFamily: 'var(--font-sans, Inter, sans-serif)',
              fontSize: '16px',
              color: '#191c1d',
              marginBottom: '32px',
              lineHeight: '1.5',
            }}>
              Introduce tus datos para descargar nuestra guía Excel de estrategia financiera.
            </p>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  fontFamily: 'var(--font-sans, Inter, sans-serif)',
                  fontSize: '14px',
                  color: '#191c1d',
                  marginBottom: '8px',
                }}>
                  Nombre
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #caced2',
                    borderRadius: '0px',
                    fontFamily: 'var(--font-sans, Inter, sans-serif)',
                    fontSize: '16px',
                  }}
                />
              </div>
              <div style={{ marginBottom: '32px' }}>
                <label style={{
                  display: 'block',
                  fontFamily: 'var(--font-sans, Inter, sans-serif)',
                  fontSize: '14px',
                  color: '#191c1d',
                  marginBottom: '8px',
                }}>
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #caced2',
                    borderRadius: '0px',
                    fontFamily: 'var(--font-sans, Inter, sans-serif)',
                    fontSize: '16px',
                  }}
                />
              </div>
              <Button variant="primary" style={{ width: '100%' }} disabled={isLoading}>
                {isLoading ? 'Enviando...' : 'Descargar Guía Excel'}
              </Button>
            </form>
          </>
        ) : (
          <>
            <h2 style={{
              fontFamily: 'var(--font-serif, Georgia, serif)',
              fontSize: '28px',
              fontWeight: '300',
              color: '#000c1e',
              marginBottom: '24px',
            }}>
              ¡Gracias!
            </h2>
            <p style={{
              fontFamily: 'var(--font-sans, Inter, sans-serif)',
              fontSize: '16px',
              color: '#191c1d',
              marginBottom: '32px',
              lineHeight: '1.5',
            }}>
              Hemos recibido tu solicitud. Haz clic abajo para descargar la guía Excel.
            </p>
            <a
              href="/guia-estrategia-financiera.xlsx"
              download
              style={{
                display: 'inline-block',
                backgroundColor: '#000c1e',
                color: '#ffffff',
                padding: '14px 28px',
                textDecoration: 'none',
                fontFamily: 'var(--font-sans, Inter, sans-serif)',
                fontSize: '16px',
                fontWeight: '600',
                borderRadius: '0px',
                transition: 'background-color 200ms linear',
              }}
            >
              Descargar Guía Excel
            </a>
          </>
        )}
      </div>
    </div>
  )
}

export const DownloadSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Section style={{ backgroundColor: '#f3f4f5', paddingTop: '96px', paddingBottom: '96px' }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center',
        }}>
          <div style={{
            fontFamily: 'var(--font-sans, Inter, sans-serif)',
            fontSize: '12px',
            color: '#e9c176',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: '32px',
          }}>
            RECURSO GRATUITO
          </div>
          <h2 style={{
            fontFamily: 'var(--font-serif, Georgia, serif)',
            fontSize: '48px',
            fontWeight: '300',
            color: '#000c1e',
            marginBottom: '40px',
            lineHeight: '1.1',
          }}>
            Guía Excel de Estrategia Financiera
          </h2>
          <p style={{
            fontFamily: 'var(--font-sans, Inter, sans-serif)',
            fontSize: '18px',
            color: '#191c1d',
            marginBottom: '56px',
            lineHeight: '1.6',
            opacity: 0.8,
          }}>
            Descarga nuestra plantilla Excel completa con modelos financieros, análisis de ratios y herramientas de planificación estratégica para tu empresa.
          </p>
          <Button variant="primary" onClick={() => setIsModalOpen(true)}>
            Descargar Guía Excel Gratuita
          </Button>
        </div>
      </Section>
      <DownloadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}