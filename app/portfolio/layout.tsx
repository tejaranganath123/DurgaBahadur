import type { Metadata } from 'next'
import { Barlow, Barlow_Condensed, Lora } from 'next/font/google'

// Scoped here so the home page keeps its own fonts and colours
const display = Barlow_Condensed({ subsets: ['latin'], weight: ['300', '400', '500'], variable: '--font-display' })
const serif = Lora({ subsets: ['latin'], style: 'italic', variable: '--font-serif' })
const body = Barlow({ subsets: ['latin'], weight: ['400', '500'] })

// Charcoal + muted gold palette, overriding the site tokens for this page only
const theme = {
  '--background': '#0b0b0b',
  '--foreground': '#f2efe9',
  '--card': '#161514',
  '--primary': '#b9a47c',
  '--primary-foreground': '#0b0b0b',
  '--muted-foreground': '#9c968c',
  '--border': '#2b2925',
} as React.CSSProperties

export const metadata: Metadata = {
  title: 'Durga Bahadur — Music Portfolio',
  description: 'Listen to music by Durga Bahadur, music director and composer — theme songs, dance numbers, love songs, sad songs and experimental tracks.',
  alternates: { canonical: '/portfolio' },
}

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <div style={theme} className={`${display.variable} ${serif.variable} ${body.className} text-foreground`}>{children}</div>
}
