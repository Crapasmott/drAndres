import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dr. Andrés Pérez Nieto',
  description: 'International Plastic Surgeon',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}