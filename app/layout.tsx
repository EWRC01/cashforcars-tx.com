import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://cashforcars.example.com"),
  title: "Cash for Cars - We Buy Any Car, Any Condition",
  description:
    "Get instant cash for your car. Same-day pickup, free towing, licensed and insured. We buy cars in any condition.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
