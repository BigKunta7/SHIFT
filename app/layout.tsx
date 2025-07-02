import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Chatbot } from "@/components/layout/Chatbot"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "SHIFT - L'excellence du design web pour votre croissance.",
  description:
    "Sites web haute performance, design premium et expérience utilisateur inégalée. Transformez vos visiteurs en clients fidèles.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="!scroll-smooth">
      <body className={cn("min-h-screen bg-slate-50 font-sans antialiased text-slate-800", inter.variable)}>
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  )
}
