import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist as GeistSans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"
import { SocialFooter } from "@/components/social-footer"

const geistSans = GeistSans({ subsets: ["latin"] })

const siteConfig = {
  name: "InsightFlow",
  description: "AI-Powered Feedback Intelligence Platform - Collect, manage, and analyze user feedback efficiently with real-time updates, advanced analytics, and modern responsive design.",
  url: "https://insightflow.vercel.app",
  ogImage: "/og-image.png",
  twitter: "@girishlade111",
  author: "Girish Lade",
  email: "admin@ladestack.in",
  keywords: [
    "feedback app",
    "feedback management",
    "customer feedback",
    "product feedback",
    "feature requests",
    "feedback software",
    "user feedback",
    "analytics dashboard",
    "feedback tool",
    "customer insights",
    "AI feedback",
    "Supabase",
    "Next.js",
  ],
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  author: {
    name: siteConfig.author,
    url: "https://ladestack.in",
  },
  creator: siteConfig.author,
  publisher: siteConfig.name,
  generator: "v0.dev",
  
  applicationName: siteConfig.name,
  referrer: "origin-when-cross-origin",
  
  keywords: siteConfig.keywords,
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  alternates: {
    canonical: siteConfig.url,
    languages: {
      en: siteConfig.url,
    },
  },
  
  icons: {
    icon: [
      { url: "/logo.svg", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: {
      default: siteConfig.name,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - AI-Powered Feedback Intelligence Platform`,
      },
    ],
    authors: [{ name: siteConfig.author, url: "https://ladestack.in" }],
    author: siteConfig.author,
    publisher: siteConfig.name,
  },
  
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: siteConfig.twitter,
    images: [siteConfig.ogImage],
  },
  
  facebook: {
    appId: "",
  },
  
  verification: {
    google: "",
    yandex: "",
   bing: "",
  },
}

export default function RootLayout({
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