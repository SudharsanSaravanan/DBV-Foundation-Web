import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <title>DBV Foundation - Coimbatore</title>
        <meta name="description" content="" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
