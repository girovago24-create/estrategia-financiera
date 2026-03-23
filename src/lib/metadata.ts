import type { Metadata } from 'next'
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from './constants'

export const defaultMetadata: Metadata = {
  title: {
    default: `${SITE_NAME} | Auditoría y Estrategia Financiera`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'auditoría financiera',
    'estrategia empresarial',
    'consultoría financiera',
    'pymes',
    'restructuring',
    'optimización financiera',
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Auditoría y Estrategia Financiera`,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Auditoría y Estrategia Financiera`,
    description: SITE_DESCRIPTION,
  },
  icons: {
    icon: '/favicon.ico',
  },
  metadataBase: new URL(SITE_URL),
}
