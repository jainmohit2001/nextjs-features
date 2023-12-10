import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'

import './globals.css'

import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

import { cn } from '@/lib/utils'
import { Header } from '@/components/header'
import { SideNav } from '@/components/side-nav'
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
        className={cn('bg-background font-sans antialiased', fontSans.variable)}
      >
        <SpeedInsights />
        <Analytics />
        <ThemeProvider
          themes={['light', 'dark']}
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex h-full flex-1">
            <SideNav />
            <div className="w-full p-3 lg:p-4">{children}</div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
