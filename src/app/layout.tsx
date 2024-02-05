import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Metacube | Free2Play on Starknet',
  description: 'Metacube is a Massive Multiplayer Free2Play Event game on Starknet. Compete with thousands of players, own the assets you collect, and conquer the Metacube.',
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
