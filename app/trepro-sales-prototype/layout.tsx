import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";

const notoSans = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-tp-sans-loaded",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tatsuyakoike-cloud.github.io/tre-pro"),
  title: "トレプロ営業プロトタイプ構築方針｜7月・8月の営業回復ロードマップ",
  description:
    "トレプロの営業活動を短期売上創出と中長期の仕組み化の両面から整理。現状認識、二軸戦略、週次ロードマップ、Tier設計、KPI管理をまとめた社内共有ドキュメント。",
  openGraph: {
    title: "トレプロ営業プロトタイプ構築方針",
    description:
      "オフライン営業とオンライン仕組み化を両輪に、7月・8月で営業回復の型を作る。",
    locale: "ja_JP",
    type: "article",
  },
};

export default function TreproSalesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`${notoSans.variable} min-h-full`}>{children}</div>
  );
}
