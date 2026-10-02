export const SITE = {
  name: "Leo Sato",
  role: "UX Planner / Prototyper",
  email: "theater.no7@gmail.com",
  coconala: "https://coconala.com/users/5551464",
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
    price: "80,000円〜",
    summary: "1ページ完結のLPを、構成設計から実装まで一気通貫で。",
    features: ["ヒアリング・構成設計", "デザイン＋実装", "レスポンシブ対応", "公開後の軽微な修正1回"],
  },
  {
    id: "site",
    name: "小規模サイト制作",
    price: "150,000円〜",
    summary: "〜5ページ程度のコーポレート／サービスサイト。Next.jsで高速に。",
    features: ["サイトマップ設計", "Next.js + TypeScript 実装", "SEO基本設定", "お問い合わせフォーム"],
  },
  {
    id: "improve",
    name: "既存サイトの改善",
    price: "50,000円〜",
    summary: "表示速度・導線・スマホ対応など、既存サイトの課題を調査して改善。",
    features: ["現状分析レポート", "改善提案", "改修実装"],
  },
] as const;
