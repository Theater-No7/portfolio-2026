"use client";

import { motion, Variants } from "framer-motion";
import { ExternalLink, Sparkles, BookOpen, Palette, Layers } from "lucide-react";
import Image from "next/image"; // ← 追加

const projects = [
    {
        id: 1,
        title: "Crolla",
        description:
            "Webコンテンツを自動同期・管理するAIツール。複数のプラットフォーム間での情報更新をスマートに自動化します。",
        image: "/projects/crolla.png", // ← public/projects/crolla.png が読み込まれます
        tags: ["TypeScript", "Next.js", "Firebase", "OpenAI", "HCI"],
        link: "https://crolla.web.app/",
        icon: Sparkles,
    },
    {
        id: 2,
        title: "Kalua",
        description:
            "飲食店のマニュアル管理・教育コストを削減するSaaS。現場のオペレーションを考慮したUI設計で、トレーニング効率を向上させます。",
        image: "/projects/kalua.png", // ← public/projects/kalua.png が読み込まれます
        tags: ["TypeScript", "React", "Tailwind", "Firebase", "UX Research"],
        link: "https://kalua-app.vercel.app/",
        icon: BookOpen,
    },
    {
        id: 3,
        title: "Neon Icon Set",
        description:
            "サイバーパンクな世界観を意識したネオン風アプリアイコンセット。光の拡散や色彩設計にこだわり、視認性と没入感を両立させました。",
        image: "/projects/neon-logo.png", // ※ publicフォルダにこの名前で画像を置いてください
        tags: ["Graphic Design", "Illustrator", "Photoshop", "Neon Art"],
        link: "https://www.pixiv.net/", // ← Pixivやインスタの投稿URLに書き換えてください
        icon: Palette,
    },
    {
        id: 4,
        title: "Mobile Widgets",
        description:
            "ホーム画面を彩るウィジェットのUIデザイン。情報の優先順位を整理し、小さな領域でも直感的に情報が伝わるレイアウトを設計しました。",
        image: "/projects/widget-ui.png", // ※ publicフォルダにこの名前で画像を置いてください
        tags: ["UI Design", "Figma", "Mobile App", "Widget"],
        link: "https://twitter.com/", // ← XやBehanceなどのURLに書き換えてください
        icon: Layers,
    },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

export function WorksSection() {
    return (
        <section id="works" className="min-h-screen py-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-px flex-1 max-w-12 bg-gradient-to-r from-transparent to-[#148E96]" />
                        <span className="text-[#5eead4] text-sm font-medium uppercase tracking-wider">
                            Portfolio
                        </span>
                        <div className="h-px flex-1 max-w-12 bg-gradient-to-l from-transparent to-[#148E96]" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">
                        Featured{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#148E96] to-[#5eead4]">
                            Works
                        </span>
                    </h2>
                    <p className="mt-4 text-gray-400 max-w-2xl">
                        デザイン思考と技術実装を融合させた、代表的なプロジェクト。
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-8"
                >
                    {projects.map((project) => {
                        const Icon = project.icon;
                        return (
                            <motion.article
                                key={project.id}
                                variants={itemVariants}
                                className="group relative flex flex-col h-full"
                            >
                                <div className="relative flex flex-col h-full rounded-2xl bg-[#0d0d0d]/80 backdrop-blur-xl border border-white/10 overflow-hidden transition-all duration-500 hover:border-[#148E96]/50 hover:shadow-[0_0_30px_-5px_rgba(20,142,150,0.3)]">

                                    {/* 🖼️ 画像表示エリア */}
                                    <div className="relative h-80 w-full overflow-hidden bg-gray-900">
                                        {/* Next.js Image Component */}
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />

                                        {/* Overlay (画像を少し暗くして文字を見やすくする) */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent opacity-80" />

                                        {/* 右上のアイコン (アクセント) */}
                                        <div className="absolute top-4 right-4 p-2 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 text-[#5eead4]">
                                            <Icon className="w-5 h-5" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex flex-col flex-1 p-6 space-y-4">
                                        <div className="flex items-start justify-between">
                                            <h3 className="text-xl font-bold text-white group-hover:text-[#5eead4] transition-colors">
                                                {project.title}
                                            </h3>
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-[#5eead4] hover:bg-[#148E96]/20 transition-all"
                                                aria-label={`Visit ${project.title}`}
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                            </a>
                                        </div>

                                        <p className="text-sm text-gray-400 leading-relaxed flex-1">
                                            {project.description}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 pt-2">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-3 py-1 text-xs font-medium rounded-full bg-[#148E96]/10 text-[#5eead4] border border-[#148E96]/20"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.article>
                        );
                    })}
                </motion.div>

                {/* More Projects Teaser */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-12 text-center"
                >
                    <p className="text-gray-500 text-sm">
                        その他のプロジェクトは準備中...
                    </p>
                </motion.div>
            </div>
        </section>
    );
}