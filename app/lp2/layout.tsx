import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insta Growth Partner | Instagram運用代行・コンサルティング",
  description:
    "投稿制作から分析・改善まで、企業のInstagram運用をまるごと支援。集客・採用・ブランディングに効くアカウントへ育てます。",
};

export default function Lp2Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
