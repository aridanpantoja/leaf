import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { Navbar } from '@/components/navbar'
import { siteConfig } from '@/config'
import { Footer } from '@/components/footer'
import { ThemeProvider } from '@/components/theme/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body
        className={cn(
          'relative flex h-full w-full flex-col antialiased',
          inter.className,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <Navbar />
          <main className="my-16 flex grow flex-col">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
