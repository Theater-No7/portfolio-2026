import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono, Noto_Sans_JP } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const _geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const _geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });
const _notoSansJP = Noto_Sans_JP({ subsets: ["latin"], variable: "--font-noto-jp", weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "Leo Sato | Design Engineer",
  description: "HCI研究とエンジニアリングの架け橋となるポートフォリオサイト。",
  openGraph: {
    title: "Leo Sato | Design Engineer",
    description: "HCI研究とエンジニアリングの架け橋となるポートフォリオサイト。",
    url: "https://leosato.dev", // ←取得したドメインを入れる
    siteName: "Leo Sato Portfolio",
    images: [
      {
        url: "/og-image.png", // ←後で作る画像（1200x630px）
        width: 1200,
        height: 630,
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={`${_geist.variable} ${_notoSansJP.variable} font-sans antialiased bg-[#0a0a0a] text-white`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
