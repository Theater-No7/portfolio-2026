export const SITE = {
  name: "Leo Sato",
  role: "UX Planner / Prototyper",
  email: "theater.no7@gmail.com",
  coconala: "https://coconala.com/services/4434991",
  x: "https://x.com/Theater_No7",
  github: "https://github.com/Theater-No7",
  note: "https://note.com/theater_no7",
  booth: "https://theater-no7.booth.pm/",
  pixiv: "https://www.pixiv.net/users/123734674",
} as const;

export const SERVICES = [
  {
    id: "lp",
    name: "ランディングページ制作",
    price: "30,000円〜",
    summary: "1ページのLPを、構成設計からデザイン・実装まで。",
    features: ["ヒアリング・構成案1案", "デザイン＋実装", "PC・スマホ・タブレット対応", "基本的なSEO設定", "完成案への軽微な修正1回"],
    note: "文章・画像はご提供いただく想定です。\nフォーム・原稿作成・公開設定は別料金。\n内容と分量を確認してお見積りします。",
  },
  {
    id: "site",
    name: "小規模サイト制作",
    price: "150,000円〜",
    summary: "〜5ページ程度のコーポレート／サービスサイト。Next.jsで高速に。",
    features: ["サイトマップ設計", "Next.js + TypeScript 実装", "SEO基本設定", "お問い合わせフォーム"],
    note: undefined,
  },
  {
    id: "improve",
    name: "既存サイトの改善",
    price: "50,000円〜",
    summary: "表示速度・導線・スマホ対応など、既存サイトの課題を調査して改善。",
    features: ["現状分析レポート", "改善提案", "改修実装"],
    note: undefined,
  },
] as const;
