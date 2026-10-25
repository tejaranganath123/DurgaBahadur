import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

// Vercel sets VERCEL_PROJECT_PRODUCTION_URL automatically on deploy
export const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : 'http://localhost:3000'

const description =
  'Durga Bahadur — music director, composer and music teacher. Listen to Durga Bahadur film scores, compositions and live performances, and learn guitar, piano, production and voice at Artshala, his music academy.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Durga Bahadur — Music Director, Composer & Music Academy | Artshala',
  description,
  keywords: ['Durga Bahadur', 'Durga Bahadur music', 'Durga Bahadur musical', 'Durga musical', 'Durga music', 'Durga Bahadur composer', 'Durga Bahadur music director', 'music director', 'film music director', 'composer', 'Artshala Academy', 'Artshala music academy', 'music academy', 'best music academy', 'music school', 'music classes', 'guitar classes', 'piano classes', 'vocal classes', 'music production course'],
  alternates: { canonical: '/' },
  verification: { google: 'NhOTuQCjhzckz5ipc9yv9HgACa6vc5M_jOnWf33qUB0' },
  openGraph: {
    title: 'Durga Bahadur — Music Director & Composer',
    description,
    url: '/',
    siteName: 'Durga Bahadur',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Durga Bahadur — Music Director & Composer', description },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'Person',
                name: 'Durga Bahadur',
                alternateName: ['Durga Musical', 'Durga Bahadur Musical'],
                jobTitle: ['Music Director', 'Composer', 'Music Teacher'],
                url: siteUrl,
              },
              {
                '@context': 'https://schema.org',
                '@type': 'MusicSchool',
                name: 'Artshala Music Academy',
                founder: { '@type': 'Person', name: 'Durga Bahadur' },
                description: 'Music academy by music director Durga Bahadur offering guitar, piano, music production and voice classes.',
                url: `${siteUrl}/#academy`,
              },
            ]),
          }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
