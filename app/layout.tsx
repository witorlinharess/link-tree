import '../styles/globals.css'
import type { Metadata } from 'next'

const SITE_URL = process.env.SITE_URL || 'https://witorlinhares.com'
const SITE_NAME = 'Witor Linhares | Dev Full Stack'

export const metadata: Metadata = {
  title: SITE_NAME,
  description: 'Dev Full Stack — Links úteis e contato',
  metadataBase: new URL(SITE_URL),
  applicationName: 'Witor Linktree',
  viewport: 'width=device-width,initial-scale=1',
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: SITE_NAME,
    description: 'Dev Full Stack — Links úteis e contato',
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: `${SITE_URL}/witor-linhares.webp`,
        width: 1200,
        height: 630,
        alt: 'Witor Linhares',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: 'Dev Full Stack — Links úteis e contato',
    images: [`${SITE_URL}/witor-linhares.webp`],
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
    other: [
      { rel: 'manifest', url: '/site.webmanifest' },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="site-root">

          <div className="site-content">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
