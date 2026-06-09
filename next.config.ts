import type { NextConfig } from "next";

/**
 * GitHub Pages（プロジェクトサイト）のURL:
 *   https://tatsuyakoike-cloud.github.io/tre-pro/
 *
 * リポジトリ名が URL に入るのは GitHub の仕様です（削除不可）。
 * 各LPは app/ 配下のフォルダ名がパスになります:
 *   app/page.tsx      → /tre-pro/
 *   app/lp1/page.tsx  → /tre-pro/lp1/
 *   app/lp2/page.tsx  → /tre-pro/lp2/
 */
const repoName = "tre-pro";
const basePath = `/${repoName}`;

const nextConfig: NextConfig = {
  output: "export",
  // GitHub Pages（プロジェクトサイト）では /tre-pro/ がURLに必ず付く。
  // 開発時も同じパスで開けるよう、常に basePath を有効にする。
  basePath,
  assetPrefix: `${basePath}/`,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
