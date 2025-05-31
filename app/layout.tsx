import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL("https://cyberethixbd.com"),
  title: {
    default: "Cyber Ethix BD - Cybersecurity Knowledge & Ethical Hacking",
    template: "%s | Cyber Ethix BD",
  },
  description:
    "Leading cybersecurity platform in Bangladesh offering security blogs, hacker tools, and comprehensive courses in ethical hacking and cybersecurity.",
  keywords: [
    "cybersecurity",
    "ethical hacking",
    "security blog",
    "hacker tools",
    "cybersecurity courses",
    "Bangladesh",
    "penetration testing",
  ],
  authors: [{ name: "Cyber Ethix BD", url: "https://cyberethixbd.com" }],
  creator: "Cyber Ethix BD",
  publisher: "Cyber Ethix BD",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cyberethixbd.com",
    siteName: "Cyber Ethix BD",
    title: "Cyber Ethix BD - Cybersecurity Knowledge & Ethical Hacking",
    description:
      "Leading cybersecurity platform in Bangladesh offering security blogs, hacker tools, and comprehensive courses.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cyber Ethix BD - Cybersecurity Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyber Ethix BD - Cybersecurity Knowledge & Ethical Hacking",
    description:
      "Leading cybersecurity platform in Bangladesh offering security blogs, hacker tools, and comprehensive courses.",
    images: ["/og-image.jpg"],
    creator: "@cyberethixbd",
  },
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
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#10b981" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
