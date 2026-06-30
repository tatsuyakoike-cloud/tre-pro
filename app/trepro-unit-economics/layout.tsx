import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";

const notoSans = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-ue-sans-loaded",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tatsuyakoike-cloud.github.io/tre-pro"),
  title: "トレプロ営業方針・ユニットエコノミクス改善計画",
  description:
    "CAC・LTV・ユニットエコノミクスで営業を判断する。8月末までの二軸営業、Tier設計、架電計画、値引きABテスト、7月・8月ロードマップ。",
  openGraph: {
    title: "トレプロ営業方針・ユニットエコノミクス改善計画",
    description: "感覚ではなく、LTV ÷ CAC で営業を判断する。最低3倍、目標5倍。",
    locale: "ja_JP",
    type: "article",
  },
};

export default function UnitEconomicsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`${notoSans.variable} min-h-full`}>{children}</div>
  );
}
