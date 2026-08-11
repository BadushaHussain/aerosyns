import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import '../styles/globals.css'
import { defaultSEO, generateMetadata } from '@/lib/seo'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CookieConsent from '@/components/CookieConsent'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
})

const outfit = Outfit({
    subsets: ['latin'],
    variable: '--font-outfit',
    display: 'swap',
})

export const metadata: Metadata = generateMetadata(defaultSEO)

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
            <head>
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
                <link rel="icon" type="image/svg+xml" href="/aerosyns-icon.svg" />
                <link rel="apple-touch-icon" href="/aerosyns-icon.svg" />
                <link rel="manifest" href="/site.webmanifest" />
                <meta name="theme-color" content="#0284c7" />
            </head>
            <body className="antialiased">
                <Navigation />
                <main className="min-h-screen">{children}</main>
                <Footer />
                <CookieConsent />
            </body>
        </html>
    )
}
