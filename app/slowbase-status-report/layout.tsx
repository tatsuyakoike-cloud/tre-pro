import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";

const notoSerif = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-sb-serif",
  display: "swap",
});

const notoSans = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sb-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tatsuyakoike-cloud.github.io/tre-pro"),
  title: "SlowBase 現状報告｜既存顧客の支援から、SlowBaseの次の形を探る",
  description:
    "SlowBaseの現状整理と方向性。新規事業の状況、既存顧客支援（SERAMADE）の事例、売上シミュレーション、次の検証ステップをまとめた資料。",
  openGraph: {
    title: "SlowBase 現状報告",
    description:
      "既存顧客の支援から、SlowBaseの次の形を探る。SlowBaseの軸と売上導線の実証。",
    locale: "ja_JP",
    type: "article",
  },
};

export default function SlowBaseStatusReportLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`${notoSerif.variable} ${notoSans.variable} min-h-full font-[family-name:var(--font-sb-sans)]`}>
      {children}
    </div>
  );
}
