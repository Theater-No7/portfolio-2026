import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono, Noto_Sans_JP } from 'next/font/google' // ←Noto Sans JPを追加
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-jp",
  weight: ["400", "500", "700"],
  display: "swap",
});

const TEMP_DOMAIN = "https://theater-no7-portfolio-2026.vercel.app";

export const metadata: Metadata = {

  metadataBase: new URL(TEMP_DOMAIN), // ←これを設定するとOGP画像が正しく認識されます
  title: {
    default: "Leo Sato | Design Engineer",
    template: "%s | Leo Sato"
  },
  description: "HCI研究とエンジニアリングの架け橋となるポートフォリオサイト。",
  openGraph: {
    title: "Leo Sato | Design Engineer",
    description: "HCI研究とエンジニアリングの架け橋となるポートフォリオサイト。",
    url: TEMP_DOMAIN,
    siteName: "Leo Sato Portfolio",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/og-image.png", // publicフォルダに画像を置く前提
        width: 1200,
        height: 630,
        alt: "Leo Sato Portfolio Cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leo Sato | Design Engineer",
    description: "HCI研究とエンジニアリングの架け橋となるポートフォリオサイト。",
    // images: ["/og-image.png"], // 自動で継承されますが一応
  },
  icons: {
    icon: "/favicon.ico", // publicフォルダのアイコン
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={`${geist.variable} ${geistMono.variable} ${notoSansJP.variable} font-sans antialiased bg-[#0a0a0a] text-white selection:bg-[#148E96] selection:text-white`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}