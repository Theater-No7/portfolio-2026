"use client";

import { motion } from "framer-motion";
import { User, Briefcase, Mail, Info } from "lucide-react";

interface SidebarProps {
    activeSection: string;
    onNavigate: (section: string) => void;
}

const navItems = [
    { id: "hero", label: "Profile", icon: User }, // idを"profile"から"hero"等のセクションIDに合わせるとベターです
    { id: "works", label: "Works", icon: Briefcase },
    { id: "about", label: "About", icon: Info },
    { id: "contact", label: "Contact", icon: Mail },
];

export function Sidebar({ activeSection, onNavigate }: SidebarProps) {
    // MobileNavコンポーネントがモバイル表示を担当するため、
    // ここでのuseStateやハンバーガーメニューは不要になりました。

    return (
        <motion.aside
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            // 【重要】hidden md:flex を追加。スマホでは非表示、PC(md以上)でのみ表示
            className="hidden md:flex fixed left-0 top-0 h-full w-64 bg-[#0d0d0d]/90 backdrop-blur-2xl border-r border-white/10 z-40 flex-col"
        >
            {/* Logo Area */}
            <div className="p-6 border-b border-white/10">
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-3"
                >
                    {/* Logo Icon */}
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#148E96] to-[#0d5f66] flex items-center justify-center shadow-[0_0_15px_rgba(20,142,150,0.3)]">
                        <span className="text-xl font-bold text-white">7</span>
                    </div>
                    <div>
                        <h1 className="font-bold text-white tracking-tight">Leo Sato</h1>
                        <p className="text-xs text-gray-400">Design Engineer</p>
                    </div>
                </motion.div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4">
                <ul className="space-y-2">
                    {navItems.map((item, index) => {
                        const Icon = item.icon;
                        // activeSectionとitem.idが一致、または"profile"と"hero"の揺らぎを吸収
                        const isActive = activeSection === item.id || (activeSection === "hero" && item.id === "profile");

                        return (
                            <motion.li
                                key={item.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 * (index + 1) }}
                            >
                                <button
                                    onClick={() => onNavigate(item.id)}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group relative overflow-hidden
                    ${isActive
                                            ? "bg-[#148E96]/10 text-white"
                                            : "text-gray-400 hover:bg-white/5 hover:text-white"
                                        }`}
                                >
                                    {/* Active Indicator Line (Left) */}
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeIndicatorLine"
                                            className="absolute left-0 top-0 bottom-0 w-1 bg-[#148E96]"
                                        />
                                    )}

                                    <Icon
                                        className={`w-5 h-5 transition-colors ${isActive ? "text-[#148E96]" : "group-hover:text-[#148E96]"
                                            }`}
                                    />
                                    <span className="font-medium">{item.label}</span>

                                    {/* Active Dot (Right) */}
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeIndicatorDot"
                                            className="ml-auto w-1.5 h-1.5 rounded-full bg-[#148E96] shadow-[0_0_8px_#148E96]"
                                        />
                                    )}
                                </button>
                            </motion.li>
                        );
                    })}
                </ul>
            </nav>

            {/* Profile Summary Footer */}
            <div className="p-4 border-t border-white/10">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#148E96]/30 transition-colors"
                >
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#148E96] to-[#5eead4] flex items-center justify-center text-[#0a0a0a] font-bold text-xs">
                            LS
                        </div>
                        <div>
                            <p className="font-medium text-white text-sm">Leo Sato</p>
                            <div className="flex items-center gap-1.5">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#148E96] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#148E96]"></span>
                                </span>
                                <p className="text-[10px] text-[#148E96] font-medium">Available for work</p>
                            </div>
                        </div>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">
                        HCIとエンジニアリングの架け橋。
                    </p>
                </motion.div>
            </div>
        </motion.aside>
    );
}