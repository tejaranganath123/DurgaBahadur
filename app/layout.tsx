import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { academies, academyPhone } from '@/lib/academies'

// Vercel sets VERCEL_PROJECT_PRODUCTION_URL automatically on deploy
export const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : 'http://localhost:3000'

const description =
  'Durga Bahadur — music director, composer and music teacher. Listen to Durga Bahadur film scores, compositions and live performances, and learn guitar, piano, production and voice at Artshala Music Academy in Dilsukhnagar and Attapur, Hyderabad — offline and online classes.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Durga Bahadur — Music Director & Artshala Music Academy, Hyderabad',
  description,
  keywords: ['Durga Bahadur', 'Durga Bahadur music', 'Durga Bahadur musical', 'Durga musical', 'Durga music', 'Durga Bahadur composer', 'Durga Bahadur music director', 'music director', 'film music director', 'composer', 'Artshala Academy', 'Artshala music academy', 'music academy', 'best music academy', 'music school', 'music classes', 'guitar classes', 'piano classes', 'vocal classes', 'music production course', 'music academy in Hyderabad', 'best music academy in Hyderabad', 'music academy in Dilsukhnagar', 'music classes in Dilsukhnagar', 'music academy in Attapur', 'music classes in Attapur', 'online music classes'],
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
              ...academies.map((a) => ({
                '@context': 'https://schema.org',
                '@type': 'MusicSchool',
                name: `Artshala Music Academy — ${a.area}`,
                founder: { '@type': 'Person', name: 'Durga Bahadur' },
                description: `Music academy in ${a.area}, Hyderabad by music director Durga Bahadur. Offline and online guitar, piano, music production and voice classes.`,
                url: `${siteUrl}/#academy`,
                hasMap: a.map,
                telephone: academyPhone,
                address: { '@type': 'PostalAddress', streetAddress: a.street, addressLocality: 'Hyderabad', addressRegion: 'Telangana', postalCode: a.pin, addressCountry: 'IN' },
              })),
            ]),
          }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
