import type { Metadata } from 'next'
import { DM_Sans, Poppins } from 'next/font/google'

// Scoped here so the home page keeps its own fonts
const display = Poppins({ subsets: ['latin'], weight: ['600', '700', '800'], variable: '--font-display' })
const body = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Durga Bahadur — Music Portfolio',
  description: 'Listen to music by Durga Bahadur, music director and composer — theme songs, dance numbers, love songs, sad songs and experimental tracks.',
  alternates: { canonical: '/portfolio' },
}

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <div className={`${display.variable} ${body.className}`}>{children}</div>
}
