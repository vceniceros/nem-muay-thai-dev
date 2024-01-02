import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../assets/css/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nen muay thai',
  description: 'esta es la pagina web oficial de NEN muay thai',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
