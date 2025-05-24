import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TradeSmart AI - AI-Powered Trading Insights',
  description: 'Transform your trading strategy with advanced AI analysis and real-time market predictions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased bg-white text-gray-900 transition-colors duration-300`}>
        {children}
      </body>
    </html>
  )
}
