import { Inter } from 'next/font/google'
import "./globals.css";
import { motion } from 'framer-motion'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        <Header />
        {/* <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.main> */}
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}