import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'

import './globals.css'

import { cn } from '@/lib/utils'
import { Header } from '@/components/header'
import { ThemeProvider } from '@/components/theme-provider'

const fontSans = FontSans({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'Next.js Features',
  description:
    'View all Next.js features in one place with real-world examples',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <ThemeProvider
          themes={['light', 'dark']}
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="p-3 lg:p-4">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
