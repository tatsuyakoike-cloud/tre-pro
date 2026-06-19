# 株式会社千葉工業様 SNS採用戦略提案 WEBスライドLP

社長プレゼン向けのWEBスライド形式提案資料です。ブラウザ閲覧・印刷/PDF化・Vercel公開に対応しています。

## 使い方

1. `index.html` をブラウザで開く
2. 右上の「印刷 / PDF化」ボタンから印刷またはPDF保存（A4横向き推奨）
3. VercelにデプロイしてURL共有

## ファイル構成

```text
trepro_chibakogyo/
├── index.html
├── styles.css
├── vercel.json
├── README.md
└── assets/
    ├── favicon.svg
    ├── og-image.svg
    └── logo.png        ← 任意（配置するとヘッダー・表紙に反映）
```

## ロゴ差し替え

`assets/logo.png` を配置するだけで、ヘッダーとファーストビューに自動反映されます。未配置の場合は TP マークが表示されます。

## トンマナ

- 白 / 黒 / ダークグレー / 朱色
- 1セクション = 1スライド = 1メッセージ
- 数字と結論を大きく表示
- 印刷時は A4 横向き（1スライド = 1ページ）

## GitHub Pages 公開（推奨）

このリポジトリは GitHub Actions で GitHub Pages に自動デプロイされます。

**公開URL（main ブランチ push 後）:**

```text
https://tatsuyakoike-cloud.github.io/tre-pro/trepro_chibakogyo/
```

### 初回セットアップ（リポジトリ設定）

1. GitHub リポジトリ `tre-pro` を開く
2. **Settings → Pages → Build and deployment**
3. **Source** を **GitHub Actions** に設定
4. `main` ブランチへ push すると `.github/workflows/deploy.yml` がビルド・デプロイを実行

### 更新の流れ

```bash
git add trepro_chibakogyo scripts/prepare-pages.mjs
git commit -m "update: 千葉工業向けWEBスライドLP"
git push origin main
```

push 後、Actions タブでデプロイ完了を確認してください（通常 1〜3 分）。

## Vercel 公開（任意）

GitHub 連携で Vercel にデプロイする場合:

1. [Vercel](https://vercel.com) で New Project → GitHub リポジトリ `tre-pro` を選択
2. **Root Directory** を `trepro_chibakogyo` に設定
3. Framework Preset: **Other** / Build Command: 空欄 / Output Directory: `.`
4. Deploy

## ローカル確認

```bash
cd trepro_chibakogyo
npx serve .
```

または `index.html` をブラウザで直接開いても確認できます。

## 印刷のコツ

- 用紙: A4 横向き
- 余白: デフォルトまたは最小
- 背景グラフィック: 有効（推奨）
