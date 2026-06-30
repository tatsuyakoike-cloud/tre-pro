export const navItems = [
  { id: "hero", label: "方針" },
  { id: "current-state", label: "現状" },
  { id: "ideal-state", label: "理想" },
  { id: "strategy", label: "戦略" },
  { id: "online", label: "オンライン" },
  { id: "roadmap", label: "ロードマップ" },
  { id: "foundation", label: "土台" },
  { id: "tier", label: "Tier" },
  { id: "operation", label: "運用" },
  { id: "kpi", label: "KPI" },
  { id: "roles", label: "役割" },
  { id: "next-action", label: "実行" },
];

export const heroSummaryCards = [
  {
    icon: "⚠",
    title: "現状",
    text: "LP・広告経由のCACが悪化し、広告単体では回復幅が限定的",
  },
  {
    icon: "🧭",
    title: "方針",
    text: "オフライン営業で短期売上を作り、オンラインで既存リストを資産化",
  },
  {
    icon: "✓",
    title: "直近実行",
    text: "7月第1週からリスト整理・Tier別メール配信・反応分析を開始",
  },
];

export const currentStateMessage = [
  "現在の課題は、単にアポ数や成約数が少ないことではなく、顧客獲得にかかるコストと、そこから回収できるLTVのバランスが悪化していることにある。",
  "広告施策は一定の改善余地があるものの、短期で大きな回復を狙うには、過去に接点を持った既存リストへの再アプローチを同時に進める必要がある。",
];

export const idealStateCards = [
  { area: "売上創出", state: "オフライン営業で短期受注を作る" },
  { area: "リスト活用", state: "LP経由・過去商談を営業資産化する" },
  { area: "再現性", state: "人が増えても同じ手順で動ける" },
  { area: "競争優位", state: "SNS運用代行ではなく採用支援領域で勝つ" },
  { area: "管理", state: "CAC・商談化率・受注率を見て改善する" },
  { area: "資料", state: "稟議・税理士・役員会でも使える資料を整える" },
];

export const strategyAxes = [
  {
    axis: "オフライン営業",
    owner: "橋口さん",
    purpose: "短期売上を作る",
    actions: "代理店、紹介、地方営業、訪問、クロージング",
  },
  {
    axis: "オンライン営業・仕組み化",
    owner: "小池",
    purpose: "既存リストを営業資産化する",
    actions: "LPリスト整理、Tier設計、メール配信、CRM/SFA/MA設計",
  },
];

export const onlineIdealState = [
  { item: "リスト管理", state: "LP経由・代理店経由・紹介経由が判別できる" },
  { item: "確度管理", state: "10%、20%、40%、60%の意味が統一されている" },
  { item: "優先順位", state: "決裁者接点、議事録の濃さ、失注理由で並べ替えられる" },
  { item: "配信", state: "Tierごとに送るコンテンツが変わる" },
  { item: "分析", state: "開封、クリック、返信、架電結果が見える" },
  { item: "商談化", state: "反応企業を優先的に営業が追える" },
  { item: "継続接点", state: "業界別ニュースやホワイトペーパーで接点を残す" },
  { item: "学習", state: "反応率・商談化率を次回施策に反映する" },
];

export const roadmapWeeks = [
  {
    week: "7月第1週",
    period: "7/1(水)〜7/5(日)",
    phase: "初動設計・配信開始",
    online: "リスト作成、Tier分類、Tier別メール配信、反応計測開始",
    offline: "代理店・紹介先の再整理、訪問候補の洗い出し",
    deliverables: "配信リスト、Tier分類表、初回配信ログ",
  },
  {
    week: "7月第2週",
    period: "7/6(月)〜7/12(日)",
    phase: "アポ獲得開始",
    online: "開封・クリック・返信分析、Tier1/2架電リスト作成、営業チームへ連携",
    offline: "アポ獲得、訪問打診、代理店経由の商談創出",
    deliverables: "アポ候補一覧、架電結果、商談予定",
  },
  {
    week: "7月第3週",
    period: "7/13(月)〜7/19(日)",
    phase: "商談実施",
    online: "反応企業の商談化、資料送付、未反応層への再配信設計",
    offline: "商談実施、地方営業、紹介経由クロージング",
    deliverables: "商談実施リスト、追加資料リスト",
  },
  {
    week: "7月第4週",
    period: "7/20(月)〜7/26(日)",
    phase: "クロージング強化",
    online: "Tier1/2-Aの個別追客、稟議・税理士向け資料整備",
    offline: "重点案件クロージング、条件調整",
    deliverables: "受注見込み一覧、クロージングリスト",
  },
  {
    week: "7月第5週",
    period: "7/27(月)〜7/31(金)",
    phase: "月次振り返り",
    online: "配信結果・商談化率・CAC仮集計、8月改善案作成",
    offline: "代理店成果・紹介成果の整理",
    deliverables: "7月振り返り、8月打ち手一覧",
  },
  {
    week: "8月第1週",
    period: "8/3(月)〜8/9(日)",
    phase: "改善配信",
    online: "7月反応データをもとに文面改善、Tier2/3再配信",
    offline: "7月商談の再訪問・再提案",
    deliverables: "改善版メール、再配信リスト",
  },
  {
    week: "8月第2週",
    period: "8/10(月)〜8/16(日)",
    phase: "商談増幅",
    online: "クリック・返信企業への架電、Tier昇格処理",
    offline: "地方・代理店経由の商談増加",
    deliverables: "追加アポ、Tier昇格一覧",
  },
  {
    week: "8月第3週",
    period: "8/17(月)〜8/23(日)",
    phase: "重点提案",
    online: "役員会・稟議・税理士向け資料の送付",
    offline: "高確度案件の提案・条件調整",
    deliverables: "重点提案資料、クロージング予定",
  },
  {
    week: "8月第4週",
    period: "8/24(月)〜8/30(日)",
    phase: "8月クロージング",
    online: "受注見込み先の最終追客、9月継続対象の整理",
    offline: "受注確定、代理店施策の振り返り",
    deliverables: "8月受注結果、9月移行リスト",
  },
  {
    week: "8月第5週",
    period: "8/31(月)",
    phase: "経営共有",
    online: "CAC・商談化率・受注率の整理",
    offline: "オフライン成果共有",
    deliverables: "9月以降の営業プロトタイプ提案",
  },
];

export const certaintyRules = [
  { rate: "60%", def: "具体提案・料金・導入時期が見えている", state: "クロージング対象" },
  { rate: "40%", def: "課題が明確で、再商談・訪問で前進する", state: "高優先商談化対象" },
  { rate: "20%", def: "過去接点があり、掘り起こしで再商談化余地あり", state: "掘り起こし重点対象" },
  { rate: "10%", def: "温度感は低いが接点維持価値あり", state: "ナーチャリング対象" },
  { rate: "0% / NG", def: "明確NG、電話NG、対象外", state: "ステイ" },
  { rate: "空白", def: "判断材料不足", state: "情報補完またはステイ" },
];

export const priorityAxes = [
  { axis: "決裁者接点", condition: "代表・役員・部長クラスと接触済み" },
  { axis: "議事録の濃さ", condition: "課題・予算・時期・懸念が残っている" },
  { axis: "失注理由", condition: "金額・他社・時期など再提案の切り口が明確" },
  { axis: "業界適合", condition: "建設、運送、警備、現場職などSNS採用と相性がよい" },
  { axis: "資料反応", condition: "開封・クリック・返信がある" },
  { axis: "次回行動", condition: "いつ何をするかNAが明確" },
];

export const lossReasons = [
  { reason: "金額", approach: "採用単価・長期コスト比較で再提案", material: "料金表、採用単価比較資料" },
  { reason: "他社決定", approach: "他社導入後の成果確認", material: "他社比較資料、事例集" },
  { reason: "時期未定", approach: "採用計画の確認", material: "会社資料、業界別レポート" },
  { reason: "稟議停止", approach: "社内説明の支援", material: "役員会・税理士向け資料" },
  { reason: "自然消滅", approach: "情報提供から接点復活", material: "ホワイトペーパー、事例集" },
  { reason: "不通", approach: "メール反応を見て架電", material: "ホワイトペーパー、会社資料" },
  { reason: "明確NG", approach: "ステイ", material: "送付しない" },
];

export const tierDefinitions = [
  { tier: "Tier 1", rate: "40%以上", purpose: "短期受注・商談化", action: "事例集＋料金表＋アポ打診" },
  { tier: "Tier 2", rate: "20%", purpose: "掘り起こし・再商談化", action: "会社資料＋アポ打診" },
  { tier: "Tier 3", rate: "10%", purpose: "接点維持・ナーチャリング", action: "ホワイトペーパー送付" },
  { tier: "Tier 4", rate: "それ以外", purpose: "ステイ", action: "何もしない" },
];

export const tier2Details = [
  { sub: "Tier 2-A", condition: "決裁者接点あり、議事録詳細、再提案余地あり", policy: "送付後すぐ架電。商談化したらTier1へ昇格" },
  { sub: "Tier 2-B", condition: "担当者接点あり、情報はあるが決裁・時期が不明", policy: "開封・クリック後に架電。情報補完を優先" },
  { sub: "Tier 2-C", condition: "20%だが進捗・メモが薄い", policy: "メール反応を確認。TLTV/議事録で再判定" },
];

export const mailTierPolicy = [
  { tier: "Tier 1", purpose: "アポ化・クロージング", material: "1枚画像の事例集、料金表", cta: "アポ打診" },
  { tier: "Tier 2", purpose: "再商談化", material: "会社資料", cta: "アポ打診" },
  { tier: "Tier 3", purpose: "接点維持", material: "ホワイトペーパー", cta: "資料確認・興味確認" },
  { tier: "Tier 4", purpose: "ステイ", material: "送らない", cta: "なし" },
];

export const mailStatuses = [
  { status: "未送付", def: "まだ送っていない", next: "配信対象に入れる" },
  { status: "送付済", def: "メール送信済み", next: "開封確認" },
  { status: "開封", def: "メール開封あり", next: "Tierに応じて架電候補" },
  { status: "クリック", def: "資料クリックあり", next: "優先架電" },
  { status: "返信", def: "返信あり", next: "即アポ調整" },
  { status: "不通", def: "架電したがつながらない", next: "再架電 or メール再送" },
  { status: "商談化", def: "アポ獲得済み", next: "商談担当へ引き継ぎ" },
  { status: "失注", def: "明確にNG", next: "失注理由を記録" },
];

export const kpiDefinitions = [
  { kpi: "配信数", content: "Tier別に送った件数", purpose: "活動量確認" },
  { kpi: "開封率", content: "開封数 / 配信数", purpose: "件名・対象精度確認" },
  { kpi: "クリック率", content: "クリック数 / 配信数", purpose: "コンテンツ関心度確認" },
  { kpi: "返信率", content: "返信数 / 配信数", purpose: "アポ化可能性確認" },
  { kpi: "架電接続率", content: "接続数 / 架電数", purpose: "電話リスト精度確認" },
  { kpi: "アポ率", content: "アポ数 / 架電数", purpose: "営業効率確認" },
  { kpi: "商談化率", content: "商談数 / 配信数", purpose: "リスト活用効率確認" },
  { kpi: "受注率", content: "受注数 / 商談数", purpose: "クロージング確認" },
  { kpi: "CAC", content: "営業・マーケ費用 / 新規獲得数", purpose: "採算性確認" },
  { kpi: "LTV/CAC", content: "LTV / CAC", purpose: "継続判断" },
];

export const roles = [
  { role: "全体方針・経営判断", owner: "金山さん", responsibility: "投資判断、重要案件判断、全体確認" },
  { role: "オフライン営業", owner: "橋口さん", responsibility: "代理店、紹介、地方営業、短期売上創出" },
  { role: "オンライン営業・仕組み化", owner: "小池", responsibility: "リスト活用、配信設計、Tier設計、CRM/SFA/MA接続" },
  { role: "新規営業担当2名", owner: "新メンバー", responsibility: "Tier2/3への一次接触、架電、情報補完" },
  { role: "配信・運用補助", owner: "森谷さん等", responsibility: "配信準備、リスト整理、反応抽出、入力補助" },
];

export const raciHeaders = ["タスク", "金山", "橋口", "小池", "新規営業2名", "運用補助"];
export const raciRows = [
  ["全体方針決定", "A", "C", "R", "I", "I"],
  ["オフライン営業設計", "C", "A/R", "C", "I", "I"],
  ["リスト整理", "I", "C", "A/R", "R", "R"],
  ["Tier定義", "C", "C", "A/R", "I", "I"],
  ["メール配信設計", "I", "C", "A/R", "C", "R"],
  ["架電実行", "I", "C", "A", "R", "I"],
  ["商談実施", "C", "R", "R", "C", "I"],
  ["クロージング", "A", "R", "R", "I", "I"],
  ["KPI集計", "I", "C", "A/R", "C", "R"],
];

export const nextActions = [
  { priority: "高", task: "アポ進捗シートのリスト抽出", owner: "小池", deliverable: "LP / D / 紹介の分類リスト" },
  { priority: "高", task: "確度10/20/40/60の件数集計", owner: "小池", deliverable: "確度別件数表" },
  { priority: "高", task: "Tier1〜4の仮分類", owner: "小池", deliverable: "Tier分類済みリスト" },
  { priority: "高", task: "Tier別メール文面・送付物準備", owner: "小池 / 運用補助", deliverable: "メールテンプレート" },
  { priority: "高", task: "Tier1へ事例集＋料金表送付", owner: "小池 / 新規営業", deliverable: "配信ログ" },
  { priority: "高", task: "Tier2へ会社資料送付", owner: "小池 / 新規営業", deliverable: "配信ログ" },
  { priority: "中", task: "Tier3へホワイトペーパー送付", owner: "小池 / 運用補助", deliverable: "配信ログ" },
  { priority: "中", task: "反応計測方法の確認", owner: "小池 / 配信担当", deliverable: "開封・クリック確認手順" },
  { priority: "中", task: "オフライン営業候補整理", owner: "橋口さん", deliverable: "代理店・訪問候補一覧" },
];

export const mermaidCharts = {
  deterioration: `flowchart TD
  A[広告費を投下] --> B[LPリード獲得]
  B --> C{有効リードか}
  C -->|有効| D[商談化]
  C -->|低品質/未接続| E[CAC悪化]
  D --> F{継続期間}
  F -->|短期化| G[LTV低下]
  E --> H[Unit Economics悪化]
  G --> H
  H --> I[LP・広告施策の撤退ライン接近]
  I --> J[既存リスト活用と営業プロトタイプ構築が必要]`,
  idealModel: `flowchart LR
  A[既存リスト] --> B[確度整理]
  B --> C[Tier分類]
  C --> D[メール配信]
  D --> E[反応分析]
  E --> F[架電・アポ化]
  F --> G[商談]
  G --> H[クロージング]
  H --> I[受注]
  I --> J[結果をCRM/SFAへ反映]
  J --> B`,
  twoLane: `flowchart TB
  subgraph OFF[オフライン営業]
    O1[代理店開拓]
    O2[紹介ルート開拓]
    O3[地方営業・訪問]
    O4[高確度案件のクロージング]
  end
  subgraph ON[オンライン営業・仕組み化]
    N1[LPリスト整理]
    N2[Tier分類]
    N3[メール配信]
    N4[反応分析]
    N5[架電・商談化]
    N6[CRM/SFA/MAへ接続]
  end
  OFF --> R[7月・8月の売上回復]
  ON --> R
  R --> S[9月以降の再現性ある営業基盤]`,
  onlineFunnel: `flowchart TD
  A[既存リスト] --> B[確度・失注理由を整理]
  B --> C[Tier別に配信対象を決定]
  C --> D[Tier別コンテンツ配信]
  D --> E[開封・クリック・返信を取得]
  E --> F{反応あり?}
  F -->|あり| G[架電・アポ打診]
  F -->|なし| H[次回配信またはステイ]
  G --> I[商談化]
  I --> J[受注/失注]
  J --> K[結果をリストへ反映]`,
  gantt: `gantt
  title 7月・8月 営業プロトタイプ構築ロードマップ
  dateFormat  YYYY-MM-DD
  axisFormat  %m/%d
  section オンライン営業
  リスト作成・Tier分類        :a1, 2026-07-01, 5d
  Tier別メール配信            :a2, 2026-07-02, 4d
  反応分析・架電リスト化       :a3, 2026-07-06, 7d
  商談化・資料送付             :a4, 2026-07-13, 10d
  7月振り返り・改善案          :a5, 2026-07-27, 5d
  8月改善配信                 :a6, 2026-08-03, 7d
  重点追客・クロージング支援   :a7, 2026-08-17, 14d
  section オフライン営業
  代理店・紹介先整理           :b1, 2026-07-01, 5d
  アポ獲得開始                 :b2, 2026-07-06, 7d
  訪問・地方営業               :b3, 2026-07-13, 14d
  クロージング強化             :b4, 2026-07-20, 14d
  8月商談増幅                 :b5, 2026-08-03, 14d
  8月最終クロージング          :b6, 2026-08-17, 14d
  section 経営共有
  7月中間共有                  :c1, 2026-07-15, 1d
  7月月次共有                  :c2, 2026-07-31, 1d
  8月中間共有                  :c3, 2026-08-17, 1d
  8月末共有                    :c4, 2026-08-31, 1d`,
  mailSequence: `sequenceDiagram
  participant List as Excel/CRMリスト
  participant Mail as メール配信
  participant Analyze as 反応分析
  participant Sales as 営業担当
  participant CRM as CRM/SFA
  List->>Mail: Tier別に配信対象を渡す
  Mail->>Analyze: 開封・クリック・返信データを返す
  Analyze->>Sales: 架電優先リストを作成
  Sales->>CRM: 架電結果・商談化を入力
  CRM->>List: Tier・NAを更新`,
};
