import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";

const notoSerif = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-iy-serif-loaded",
  display: "swap",
});

const notoSans = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-iy-sans-loaded",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tatsuyakoike-cloud.github.io/tre-pro"),
  title: "イトーヨーカ堂 新寝具事業 採用導線設計｜睡眠を支える仕事",
  description:
    "イトーヨーカ堂様向け。新寝具事業の採用における現状・課題・ロードマップを整理した採用導線設計提案資料。",
  openGraph: {
    title: "イトーヨーカ堂 新寝具事業 採用導線設計",
    description:
      "求人広告・SNS・採用LP・LINEをつなぎ、20店舗に必要な人材を条件に合う形で集める採用導線のご提案。",
    locale: "ja_JP",
    type: "website",
    images: ["/images/itoyokado-og.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "イトーヨーカ堂 採用導線設計",
    description: "睡眠を支える仕事。採用導線設計・ロードマップ。",
  },
};

export default function ItoyokadoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${notoSerif.variable} ${notoSans.variable} min-h-full`}>
      {children}
    </div>
  );
}
