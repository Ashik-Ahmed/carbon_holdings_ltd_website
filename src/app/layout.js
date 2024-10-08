import { Inter } from 'next/font/google'
import "./globals.css";
import Header from './components/Header'
import Footer from './components/Footer'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Head from 'next/head';
import Header2 from './components/Header2';
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Carbon Holdings Ltd',
  icons: {
    icon: '/chl-icon-logo.ico',
  },
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        <Header2 />
        {/* <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.main> */}
        <main>
          {children}
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  )
}