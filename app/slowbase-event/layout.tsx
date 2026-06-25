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
  title: "SlowBase event｜SERAMADE支援 事業提案資料",
  description:
    "SERAMADE支援を起点に、売上につながる型をつくる。餅田農園のイベント出展施策とSlowBaseの新しい支援モデルの実証提案。",
  openGraph: {
    title: "SlowBase event｜SERAMADE支援 事業提案資料",
    description:
      "イベント出展を売上導線の実証に。単体販売・定期購入・SlowBase支援の全体像を整理した提案資料。",
    locale: "ja_JP",
    type: "article",
  },
};

export default function SlowBaseEventLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`${notoSerif.variable} ${notoSans.variable} min-h-full font-[family-name:var(--font-sb-sans)]`}>
      {children}
    </div>
  );
}
