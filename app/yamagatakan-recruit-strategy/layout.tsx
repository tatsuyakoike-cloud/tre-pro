import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";

const notoSerif = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-yk-serif-loaded",
  display: "swap",
});

const notoSans = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-yk-sans-loaded",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tatsuyakoike-cloud.github.io/tre-pro"),
  title: "山県館 採用戦略提案｜五百年の湯を、次の担い手へ。",
  description:
    "川浦温泉 山県館様向け。歴史・温泉・おもてなしを採用の力に変えるSNS採用戦略のご提案資料。",
  openGraph: {
    title: "山県館 採用戦略提案｜五百年の湯を、次の担い手へ。",
    description:
      "川浦温泉 山県館様向け。SNSと採用LPで自社採用導線を構築する採用戦略提案。",
    locale: "ja_JP",
    type: "website",
    images: ["/images/yamagatakan-og.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "山県館 採用戦略提案",
    description: "五百年の湯を、次の担い手へ。",
  },
};

export default function YamagatakanLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${notoSerif.variable} ${notoSans.variable} h-[100dvh] overflow-hidden`}
    >
      {children}
    </div>
  );
}
