import type React from "react"
import { LanguageProvider } from "@/lib/language-context"
import { ThemeProvider } from "@/components/theme-provider"
import Sidebar from "@/components/sidebar"
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="light">
          <LanguageProvider>
            <div className="flex min-h-screen flex-col md:flex-row">
              <Sidebar />
              <div className="flex-1 overflow-auto pt-16 md:pt-0">{children}</div>
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'

export const metadata = {
      generator: 'v0.dev'
    };
