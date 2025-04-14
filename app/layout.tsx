import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/app/components/navBar'
import Footer from '@/app/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Movie Mania',
  description: 'Your go-to platform for movies.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="dark">
      <body className={`${inter.className} bg-black justify-center`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
