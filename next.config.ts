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
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubPages ? `/${repoName}` : "",
  assetPrefix: isGithubPages ? `/${repoName}/` : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
