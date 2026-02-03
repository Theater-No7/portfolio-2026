"use client"

import { useState, useEffect } from "react"
import { Menu, X, User, Briefcase, Info, Mail } from "lucide-react"
import { cn } from "@/lib/utils"

// ナビゲーション項目（Sidebarと同じもの）
const navItems = [
    { name: "Profile", icon: User, href: "#hero" },
    { name: "Works", icon: Briefcase, href: "#works" },
    { name: "About", icon: Info, href: "#about" },
    { name: "Contact", icon: Mail, href: "#contact" },
]

export function MobileNav() {
    const [isOpen, setIsOpen] = useState(false)

    // メニューが開いている時は背景スクロールを禁止する
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [isOpen])

    // リンクをクリックしたら閉じる
    const handleLinkClick = (href: string) => {
        setIsOpen(false)
        const element = document.querySelector(href)
        element?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <>
            {/* 1. ハンバーガーボタン (スマホのみ表示: md:hidden) */}
            <button
                onClick={() => setIsOpen(true)}
                className="fixed top-4 right-4 z-50 md:hidden p-3 rounded-full bg-[#148E96]/10 text-[#148E96] ring-1 ring-[#148E96]/50 backdrop-blur-sm transition-all active:scale-95 hover:bg-[#148E96]/20"
                aria-label="Menu"
            >
                <Menu className="w-6 h-6" />
            </button>

            {/* 2. オーバーレイ背景 (メニューが開いている時だけ表示) */}
            <div
                className={cn(
                    "fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden",
                    isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}
                onClick={() => setIsOpen(false)}
            />

            {/* 3. スライドメニュー本体 */}
            <div
                className={cn(
                    "fixed top-0 right-0 z-50 h-full w-[280px] bg-[#0d0d0d] border-l border-white/10 shadow-2xl transition-transform duration-300 ease-in-out md:hidden",
                    isOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <div className="flex flex-col h-full p-6">
                    {/* 閉じるボタン */}
                    <div className="flex justify-end mb-8">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-2 text-gray-400 hover:text-white transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    {/* ロゴ */}
                    <div className="mb-10 px-2">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#148E96] to-[#0d5f66] flex items-center justify-center text-white font-bold text-xl mb-4 shadow-[0_0_15px_rgba(20,142,150,0.3)]">
                            7
                        </div>
                        <h2 className="text-xl font-bold text-white tracking-tight">Leo Sato</h2>
                        <p className="text-xs text-gray-400 mt-1">Design Engineer</p>
                    </div>

                    {/* ナビゲーションリンク */}
                    <nav className="flex-1 space-y-2">
                        {navItems.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => handleLinkClick(item.href)}
                                className="flex items-center gap-4 w-full px-4 py-3 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all group"
                            >
                                <item.icon className="w-5 h-5 text-[#148E96] group-hover:text-[#5eead4] transition-colors" />
                                {item.name}
                            </button>
                        ))}
                    </nav>

                    {/* フッター */}
                    <div className="mt-auto pt-6 border-t border-white/10 text-xs text-gray-600">
                        © 2026 Leo Sato
                    </div>
                </div>
            </div>
        </>
    )
}