import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "iReBin, weWin - Nottingham's Smart Recycling Community",
  description:
    "Join Nottingham's innovative recycling community. Track your impact, earn rewards, and compete with neighbors through our iTwin-powered platform.",
  keywords: "recycling, Nottingham, community, rewards, sustainability, iTwin, smart bins",
  authors: [{ name: "iReBin, weWin Team" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#22c55e",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">{children}</body>
    </html>
  )
}
