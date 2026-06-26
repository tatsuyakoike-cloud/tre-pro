import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";

const notoSans = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-inotec-sans",
  display: "swap",
});

const notoSerif = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-inotec-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tatsuyakoike-cloud.github.io/tre-pro"),
  title: "株式会社INOTEC 採用サイト｜新築住宅オプション工事スタッフ募集",
  description:
    "千葉・埼玉を中心に新築住宅オプション工事を行う株式会社INOTECの採用サイト。施工スタッフ、事務、現場サポートなど、暮らしを支える仕事に挑戦する仲間を募集しています。",
  openGraph: {
    title: "株式会社INOTEC 採用サイト",
    description:
      "住まいの“あと少し”を、技術で叶える。新築住宅オプション工事の施工スタッフ・事務・協力会社を募集しています。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "株式会社INOTEC 採用サイト",
    description: "千葉・埼玉中心の住宅オプション工事会社。未経験歓迎の施工スタッフを募集。",
  },
};

export default function InotecRecruitLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      lang="ja"
      className={`${notoSans.variable} ${notoSerif.variable} min-h-full`}
    >
      {children}
    </div>
  );
}
