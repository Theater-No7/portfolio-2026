"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sidebar } from "@/components/portfolio/sidebar";
import { HeroSection } from "@/components/portfolio/hero-section";
import { WorksSection } from "@/components/portfolio/works-section";
import { AboutSection } from "@/components/portfolio/about-section";
import { ContactSection } from "@/components/portfolio/contact-section";
import { MobileNav } from "@/components/portfolio/mobile-nav";

export default function Portfolio() {
  // 初期セクションを "hero" に設定（SidebarとIDを合わせるため）
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      // 各セクションのID定義（HeroSectionのIDは"hero"である前提）
      const sections = ["hero", "works", "about", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#148E96] selection:text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#148E96]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-[#5eead4]/10 rounded-full blur-[100px]" />
        <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-[#148E96]/5 rounded-full blur-[80px]" />

        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Navigation Components */}
      {/* PC用: md以上で表示 (Sidebar内部で hidden md:flex 指定済み) */}
      <Sidebar activeSection={activeSection} onNavigate={scrollToSection} />

      {/* スマホ用: md未満で表示 (MobileNav内部で md:hidden 指定済み) */}
      <MobileNav />

      {/* Main Content */}
      {/* md:ml-64 に変更：タブレット以上でサイドバー分の余白を空ける */}
      <main className="relative z-10 md:ml-64 flex flex-col min-h-screen">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <HeroSection />
          <WorksSection />
          <AboutSection />
          <ContactSection />
        </motion.div>
      </main>

      {/* Scroll Progress Indicator */}
      <ScrollProgress />
    </div>
  );
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      // 0除算防止
      if (scrollHeight > 0) {
        setProgress((scrolled / scrollHeight) * 100);
      }
    };

    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <motion.div
      // サイドバーに合わせてプログレスバーの開始位置も調整 (md:left-64)
      className="fixed top-0 left-0 right-0 h-1 bg-white/5 z-50 md:left-64"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <motion.div
        className="h-full bg-gradient-to-r from-[#148E96] to-[#5eead4]"
        style={{ width: `${progress}%` }}
      />
    </motion.div>
  );
}