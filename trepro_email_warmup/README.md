# メールナーチャリング配信リスト設計（ウォームアップ試作）

過去リードを対象とした初回一斉メール配信の**要件定義・リスト定義**をまとめたWEB資料です。

## 内容

- 要件定義（目的・前提・リスク・包含/除外条件・優先順位）
- リスト定義（補助列・配信回割当・ステータス・CSV項目）
- 2日間5段階の配信ボリューム設計
- 保存フィルター定義と運用フロー

## ローカル確認

```bash
cd trepro_email_warmup
npx serve .
```

または `index.html` をブラウザで直接開いてください。

## GitHub Pages 公開

`main` ブランチへ push すると GitHub Actions がビルド・デプロイします。

**公開URL（push 後）:**

```text
https://tatsuyakoike-cloud.github.io/tre-pro/trepro_email_warmup/
```

### 更新の流れ

```bash
git add trepro_email_warmup scripts/prepare-pages.mjs
git commit -m "add: メールウォームアップ配信 要件定義・リスト定義"
git push origin main
```

## Vercel 公開（任意）

1. Vercel で New Project → リポジトリ `tre-pro` を選択
2. **Root Directory** を `trepro_email_warmup` に設定
3. Framework Preset: **Other** / Build Command: 空欄 / Output Directory: `.`
4. Deploy

## ファイル構成

```text
trepro_email_warmup/
├── index.html
├── vercel.json
├── README.md
└── assets/
    └── favicon.svg
```
