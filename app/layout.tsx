import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Tajawal } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700", "800"],
  display: "swap",
  variable: "--font-tajawal",
})

export const metadata: Metadata = {
  title: "أثر باقي - تلاوات قرآنية وتعليم",
  description: "موقع أثر باقي لتلاوات القرآن الكريم والتعليم",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" className={tajawal.variable}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </head>
      <body className={tajawal.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
