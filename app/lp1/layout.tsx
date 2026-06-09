import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LP1 | BeeTruck 採用（テスト）",
  description: "テスト公開用の採用LPです。",
};

export default function Lp1Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
