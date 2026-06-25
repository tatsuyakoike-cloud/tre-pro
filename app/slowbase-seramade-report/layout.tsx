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
  title: "SlowBase event｜SeraMade案件 現状報告",
  description:
    "SeraMade案件の現状報告と、今後の事業の考え方。SlowBaseの軸、イベント実績、売上シミュレーション、次の検証ステップを整理した資料。",
  openGraph: {
    title: "SlowBase event｜SeraMade案件 現状報告",
    description:
      "既存顧客の価値を売上につながる形にできるか。SeraMade支援の現状とSlowBaseの方向性。",
    locale: "ja_JP",
    type: "article",
  },
};

export default function SlowBaseSeramadeReportLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`${notoSerif.variable} ${notoSans.variable} min-h-full font-[family-name:var(--font-sb-sans)]`}>
      {children}
    </div>
  );
}
