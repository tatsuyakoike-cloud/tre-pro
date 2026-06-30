This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## ドキュメント

| タイトル | Markdown | Web |
|---------|----------|-----|
| Instagram 採用運用ガイド | [docs/instagram-recruiting-strategy.md](docs/instagram-recruiting-strategy.md) | [/tre-pro/instagram-recruiting-strategy/](https://tatsuyakoike-cloud.github.io/tre-pro/instagram-recruiting-strategy/) |
| SlowBase event（SERAMADE支援） | [docs/slowbase-event.md](docs/slowbase-event.md) | [/tre-pro/slowbase-event/](https://tatsuyakoike-cloud.github.io/tre-pro/slowbase-event/) |
| SlowBase SeraMade 現状報告（slim） | [docs/slowbase-seramade-report.md](docs/slowbase-seramade-report.md) | [/tre-pro/slowbase-seramade-report/](https://tatsuyakoike-cloud.github.io/tre-pro/slowbase-seramade-report/) |
| SlowBase 現状報告 | [docs/slowbase-status-report.md](docs/slowbase-status-report.md) | [/tre-pro/slowbase-status-report/](https://tatsuyakoike-cloud.github.io/tre-pro/slowbase-status-report/) |
| トレプロ営業プロトタイプ構築方針 | [trepro_sales_web_requirements.md](trepro_sales_web_requirements.md) | [/tre-pro/trepro-sales-prototype/](https://tatsuyakoike-cloud.github.io/tre-pro/trepro-sales-prototype/) |
| トレプロ UE改善計画 | [trepro_sales_unit_economics_plan.md](trepro_sales_unit_economics_plan.md) | [/tre-pro/trepro-unit-economics/](https://tatsuyakoike-cloud.github.io/tre-pro/trepro-unit-economics/) |
| トレプロ LPK営業方針 | [trepro_lpk_sales_strategy.md](trepro_lpk_sales_strategy.md) | [/tre-pro/trepro-lpk-sales-strategy/](https://tatsuyakoike-cloud.github.io/tre-pro/trepro-lpk-sales-strategy/) |

## トレプロ UE改善計画 — ローカル起動・公開

```bash
npm install
npm run dev
# → http://localhost:3000/tre-pro/trepro-unit-economics/
```

公開 URL: [https://tatsuyakoike-cloud.github.io/tre-pro/trepro-unit-economics/](https://tatsuyakoike-cloud.github.io/tre-pro/trepro-unit-economics/)

数値は `app/trepro-unit-economics/data/metrics.json` を更新後、`main` に push すると GitHub Pages に反映されます。

## トレプロ LPK営業方針 — ローカル起動・公開

```bash
npm install
npm run dev
# → http://localhost:3000/tre-pro/trepro-lpk-sales-strategy/
```

公開 URL: [https://tatsuyakoike-cloud.github.io/tre-pro/trepro-lpk-sales-strategy/](https://tatsuyakoike-cloud.github.io/tre-pro/trepro-lpk-sales-strategy/)

元資料は `trepro_lpk_sales_strategy.md`。数値は `app/trepro-lpk-sales-strategy/data/metrics.json` を更新後、`main` に push すると GitHub Pages に反映されます。

## トレプロ営業プロトタイプ — ローカル起動・公開

### ローカル開発

```bash
npm install
npm run dev
```

ブラウザで [http://localhost:3000/tre-pro/trepro-sales-prototype/](http://localhost:3000/tre-pro/trepro-sales-prototype/) を開く。

### ビルド（GitHub Pages 用）

```bash
npm run build
```

静的ファイルは `out/` に出力される。`trepro-sales-prototype` ページは `out/trepro-sales-prototype/index.html` に生成される。

### GitHub Pages 公開手順

1. 変更を `main` ブランチに push する
2. GitHub リポジトリの **Settings → Pages** で Source が **GitHub Actions** になっていることを確認
3. `.github/workflows/deploy.yml` が push 時に自動ビルド・デプロイする
4. 公開 URL: [https://tatsuyakoike-cloud.github.io/tre-pro/trepro-sales-prototype/](https://tatsuyakoike-cloud.github.io/tre-pro/trepro-sales-prototype/)

### KPI データの更新

数値データは JSON で管理している。Excel 集計後に以下を更新する。

- `app/trepro-sales-prototype/data/kpi.json` — CAC/LTV、週次KPI、ファネル
- `app/trepro-sales-prototype/data/tier-summary.json` — Tier別件数

更新後に `npm run build` で再ビルドし、`main` に push する。

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
