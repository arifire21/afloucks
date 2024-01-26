import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { CssVarsProvider } from '@mui/joy/styles';
import type { Viewport } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'A.F.Loucks Portfolio',
  description: 'Portfolio for professional work and projects [Next App]',
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <CssVarsProvider defaultMode="system">
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </CssVarsProvider>
  )
}
