import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";

const notoSans = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-lpk-sans-loaded",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tatsuyakoike-cloud.github.io/tre-pro"),
  title: "トレプロ営業方針改善計画",
  description:
    "オフライン・オンライン2軸体制でLP経由リストの掘り起こしと営業基盤づくりを進める改善計画。",
  openGraph: {
    title: "トレプロ営業方針改善計画",
    description:
      "2軸営業体制、Tier設計、シミュレーション、7月・8月ロードマップ。",
    locale: "ja_JP",
    type: "article",
  },
};

export default function LpkSalesStrategyLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`${notoSans.variable} min-h-full`}>{children}</div>
  );
}
