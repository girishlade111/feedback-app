import type React from "react"
import type { Metadata } from "next"
import { Geist as GeistSans } from "next/font/google"
import "../globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"
import { SocialFooter } from "@/components/social-footer"

const geistSans = GeistSans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Privacy Policy - InsightFlow",
  description: "Privacy Policy for InsightFlow - AI-Powered Feedback Intelligence Platform",
}

export default function PrivacyLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={geistSans.className + " min-h-screen flex flex-col"}>
        <Suspense fallback={null}>
          <Analytics />
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
            <SocialFooter />
            <Toaster />
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  )
}