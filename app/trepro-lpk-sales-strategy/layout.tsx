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
  title: "トレプロ営業方針・LPKユニットエコノミクス改善計画",
  description:
    "7月・8月でオフライン・オンライン2軸体制を立ち上げ、Q4に向けてLPKの回復モデルを作る。総獲得コスト800万円、最低8社成約。",
  openGraph: {
    title: "トレプロ営業方針・LPKユニットエコノミクス改善計画",
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
