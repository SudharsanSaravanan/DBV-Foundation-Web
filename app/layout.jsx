import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

// ✅ Centralized SEO configuration
export const metadata = {
  title: {
    default: 'DBV Foundation - Coimbatore',
    template: '%s | DBV Foundation'
  },
  description:
    'DBV Foundation is a non-profit organization based in Coimbatore, India, dedicated to empowering communities through education, healthcare, and sustainable development initiatives.',
  keywords: [
    'DBV Foundation',
    'Coimbatore NGO',
    'Non-profit organization',
    'Charity',
    'Education support',
    'Community development',
    'Healthcare projects',
    'Social service'
  ],
  metadataBase: new URL('https://dbvfoundation.in'),
  openGraph: {
    title: 'DBV Foundation - Coimbatore',
    description:
      'Empowering communities through education, health, and sustainable development programs in Coimbatore.',
    url: 'https://dbvfoundation.in',
    siteName: 'DBV Foundation',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DBV Foundation Coimbatore',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DBV Foundation - Coimbatore',
    description:
      'DBV Foundation is dedicated to social welfare, education, and sustainable development in Coimbatore.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: 'https://dbvfoundation.in',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
