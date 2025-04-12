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
  modal,
}: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-black justify-center`}
      >
        <div className="sticky top-0 z-50">
          <NavBar />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  )
}
