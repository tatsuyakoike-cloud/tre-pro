export const navItems = [
  { id: "policy", label: "方針" },
  { id: "current", label: "現状" },
  { id: "metrics", label: "数値" },
  { id: "simulation", label: "シミュレーション" },
  { id: "strategy", label: "2軸" },
  { id: "tier", label: "Tier" },
  { id: "roadmap", label: "ロードマップ" },
  { id: "tactics", label: "施策" },
];

export const policyAxesTable = [
  {
    area: "オフライン営業",
    roles: "代理店・紹介・地方営業・飛び込み・訪問・クロージング",
    purpose: "短期で商談と受注を作る",
  },
  {
    area: "オンライン営業",
    roles: "LP経由リストの整理・掘り起こし・配信・架電・ナーチャリング",
    purpose: "既存リストを営業資産化し、再現性のある商談創出を作る",
  },
];

export const policyRationale =
  "この2軸で進める理由は、LP広告の獲得効率が悪化している中で、広告単体の改善だけに依存せず、短期の受注創出と中長期の営業基盤づくりを同時に進める必要があるためである。";

export const augustEndState = [
  { item: "営業体制", state: "オフライン営業とオンライン営業の役割が明確になっている" },
  { item: "LP経由", state: "既存リストから商談・受注が生まれている" },
  { item: "数値管理", state: "成約数、LTV合計、総獲得コスト、倍率を確認できる" },
  { item: "リスト管理", state: "確度別・Tier別に営業対象が整理されている" },
  { item: "ナーチャリング", state: "メール、ホワイトペーパー、ウェビナー、LINE等で継続接点を作れている" },
  { item: "Q4準備", state: "9月以降、CRM・SFA・MAへ接続できる運用ルールが整理されている" },
];

export const currentChallengesTable = [
  { issue: "LP経由の獲得コスト悪化", content: "広告費をかけても、以前より効率よく顧客獲得できていない" },
  { issue: "LTVの低下", content: "顧客の継続期間が短くなり、1社あたりの将来売上が下がっている" },
  { issue: "広告依存の限界", content: "広告改善だけで短期的に大きく回復する見込みが立ちづらい" },
  { issue: "既存リストの未活用", content: "過去接点・商談履歴がある企業を十分に掘り起こせていない" },
  { issue: "営業ルールの未整備", content: "確度、優先順位、失注理由、次回アクションの管理が統一されていない" },
];

export const responsePolicy = [
  "オフライン営業では、代理店・紹介・地方営業・飛び込みを活用し、短期の受注機会を作る。",
  "オンライン営業では、LP経由の既存リストを整理し、掘り起こし施策を新たに企画・実行する。",
  "これまでの商談受注率を前提に置きすぎず、今回の掘り起こし施策で新しい基準値を作る。",
  "施策ごとに、成約数・LTV合計・総獲得コスト・倍率を確認する。",
];

export const metricsPremise = [
  { item: "総獲得コスト", value: "800万円", note: "LP広告・営業人件費・外注費・ツール費などを含めた施策全体のコスト" },
  { item: "目標倍率", value: "3.0倍以上", note: "撤退ラインを超える最低基準" },
  { item: "必要LTV合計", value: "2,400万円", note: "800万円 × 3.0倍" },
  { item: "1社あたりLTV目安", value: "330万円", note: "月額単価 × 想定継続月数で算出する期待値" },
  { item: "現状例のLTV合計", value: "900万円", note: "330万円 + 240万円 + 330万円" },
  { item: "現状例の倍率", value: "1.13倍", note: "900万円 ÷ 800万円", accent: true },
];

export const metricsProvisionalNote = [
  "以下の数字は、現時点での仮置きである。",
  "確定値ではなく、シミュレーション上の目標値として、まずはこの水準を目指す。",
];

export const metricsNotes = [
  "800万円は、1社あたりのCACではなく、施策全体の総獲得コストとして仮置きする。",
  "2,400万円は、総獲得コスト800万円に対して3倍を達成するために必要なLTV合計。",
  "330万円は、1社あたりのLTV目安として置く。",
  "900万円は、例として3社分のLTVを合計した数字。",
  "今後、実績が出次第、総獲得コスト・LTV・必要成約数は更新する。",
];

export const simulationRows = [
  { deals: 3, ltvTotal: 990, cacPerDeal: 267, ratio: 1.24, judgment: "不足" },
  { deals: 4, ltvTotal: 1320, cacPerDeal: 200, ratio: 1.65, judgment: "不足" },
  { deals: 5, ltvTotal: 1650, cacPerDeal: 160, ratio: 2.06, judgment: "不足" },
  { deals: 6, ltvTotal: 1980, cacPerDeal: 133, ratio: 2.48, judgment: "不足" },
  { deals: 7, ltvTotal: 2310, cacPerDeal: 114, ratio: 2.89, judgment: "ほぼ到達" },
  { deals: 8, ltvTotal: 2640, cacPerDeal: 100, ratio: 3.30, judgment: "最低ライン達成", highlight: "min" },
  { deals: 10, ltvTotal: 3300, cacPerDeal: 80, ratio: 4.13, judgment: "良好", highlight: "good" },
  { deals: 13, ltvTotal: 4290, cacPerDeal: 62, ratio: 5.36, judgment: "目標水準", highlight: "target" },
];

export const augustTargets = [
  { label: "最低目標", value: "8社成約" },
  { label: "最低LTV合計", value: "2,640万円" },
  { label: "最低倍率", value: "3.30倍" },
  { label: "目標水準", value: "10〜13社成約" },
  { label: "目標倍率", value: "4.0〜5.0倍台" },
];

export const offlineStrategy = {
  purpose: "短期の商談・受注を作る。",
  themes: [
    { theme: "代理店・紹介", content: "既存の代理店・紹介ルートを活用し、受注可能性の高い案件を進める" },
    { theme: "地方営業・飛び込み", content: "地方企業への直接営業、訪問、飛び込みを実施する" },
    { theme: "クロージング", content: "高確度案件を個別対応し、早期に契約へ進める" },
    { theme: "価格検証", content: "料金がボトルネックの案件で、値引き・初月無料等を限定検証する" },
  ],
  actions: [
    "代理店・紹介経由のホットリードを整理する。",
    "地方案件・飛び込み対象を抽出する。",
    "高確度案件は訪問・個別提案・クロージングを優先する。",
    "料金が主な失注理由になっている案件では、値引きあり提案を限定的に検証する。",
    "値引きは通常化せず、受注率・LTV・CACへの影響を確認する。",
  ],
  kpis: [
    { kpi: "接触数", detail: "代理店・紹介・地方営業で接触した企業数" },
    { kpi: "商談数", detail: "実際に商談化した件数" },
    { kpi: "受注数", detail: "契約に至った件数" },
    { kpi: "平均LTV", detail: "受注1社あたりの期待LTV" },
    { kpi: "値引き有無別受注率", detail: "値引きあり・なしで受注率に差が出るか" },
    { kpi: "施策別CAC", detail: "施策にかかったコストと受注数の関係" },
  ],
};

export const onlineStrategy = {
  purpose: "既存リストを再活用し、低コストで商談機会を作る。",
  themes: [
    { theme: "リスト整理", content: "LP経由・過去商談リストを確度別に整理する" },
    { theme: "掘り起こし", content: "メール配信と架電で、過去接点から再商談化を狙う" },
    { theme: "ナーチャリング", content: "ホワイトペーパー、ウェビナー、LINE等で継続接点を作る" },
    { theme: "データ化", content: "配信反応、架電結果、商談化率を記録し、次のKPIを作る" },
    { theme: "仕組み化", content: "CRM・SFA・MAへ接続できる運用ルールを整える" },
  ],
  actionRows: [
    { task: "リスト整理", content: "LP経由リストをTier1〜4に分類する", assignee: "小池・その他メンバー" },
    { task: "メール配信", content: "Tierごとに送付物を変える", assignee: "小池・その他メンバー" },
    { task: "反応分析", content: "開封・クリック・返信を確認する", assignee: "小池・その他メンバー" },
    { task: "架電検証", content: "反応企業を中心に架電し、初期データを作る", assignee: "小池・その他メンバー" },
    { task: "ナーチャリング", content: "ホワイトペーパー、ウェビナー、LINEで接点を継続する", assignee: "小池・その他メンバー" },
    { task: "運用整備", content: "CRM・SFA・MA接続を前提に項目を整理する", assignee: "小池・その他メンバー" },
  ],
  kpis: [
    { kpi: "配信数", detail: "Tier別のメール送付数" },
    { kpi: "開封数", detail: "メールが見られた件数" },
    { kpi: "クリック数", detail: "資料・リンクがクリックされた件数" },
    { kpi: "返信数", detail: "反応があった件数" },
    { kpi: "架電数", detail: "配信後に架電した件数" },
    { kpi: "アポ数", detail: "アポイント化した件数" },
    { kpi: "商談数", detail: "実際に商談化した件数" },
    { kpi: "受注数", detail: "契約に至った件数" },
    { kpi: "施策別CAC", detail: "オンライン施策にかかったコストと受注数の関係" },
  ],
};

export const tierDefinitions = [
  { tier: "Tier 1", target: "成約角度40%以上", purpose: "商談化・クロージング", action: "アポ打診、事例集、料金表、架電、訪問" },
  { tier: "Tier 2", target: "成約角度20%", purpose: "掘り起こし・再商談化", action: "会社資料、アポ打診、反応後架電" },
  { tier: "Tier 3", target: "成約角度10%", purpose: "中長期ナーチャリング", action: "ホワイトペーパー、業界情報、ウェビナー案内" },
  { tier: "Tier 4", target: "それ以外", purpose: "ステイ", action: "原則アプローチしない" },
];

export const tierCertaintyRules = [
  { rate: "40%以上", definition: "課題とネクストアクションが明確な状態" },
  { rate: "20%", definition: "過去接点があり、再商談化の余地がある状態" },
  { rate: "10%", definition: "すぐに商談化はしないが、情報提供を続ける価値がある状態" },
  { rate: "その他", definition: "明確NG、電話NG、対象外、情報不足など" },
];

export const tierApproaches = [
  { tier: "Tier 1", material: "事例集、料金表、アポ打診", call: "送付後に優先架電", next: "商談・クロージング" },
  { tier: "Tier 2", material: "会社資料、アポ打診", call: "反応企業を中心に架電", next: "商談化、またはTier1昇格" },
  { tier: "Tier 3", material: "ホワイトペーパー、業界情報", call: "クリック・返信があれば架電", next: "Tier2昇格" },
  { tier: "Tier 4", material: "送付しない", call: "原則架電しない", next: "ステイ" },
];

export const roadmapRows = [
  { period: "7月第1週", offline: "代理店・紹介・地方営業の対象整理", online: "リスト整理、Tier付与、初回メール配信", onlineAssignee: "小池・その他メンバー" },
  { period: "7月第2週", offline: "高確度案件への訪問・クロージング開始", online: "配信反応の分析、架電検証、アポ獲得", onlineAssignee: "小池・その他メンバー" },
  { period: "7月第3週", offline: "値引きあり/なしのABテスト開始", online: "商談実施、失注理由・反応データの記録", onlineAssignee: "小池・その他メンバー" },
  { period: "7月第4週", offline: "受注見込み整理、価格検証の一次確認", online: "受注・商談結果をもとにKPI更新", onlineAssignee: "小池・その他メンバー" },
  { period: "8月第1週", offline: "地方・代理店案件の追加展開", online: "ホワイトペーパー第2弾、ウェビナー準備", onlineAssignee: "小池・その他メンバー" },
  { period: "8月第2週", offline: "クロージング強化", online: "ウェビナー・LINE等のナーチャリング開始", onlineAssignee: "小池・その他メンバー" },
  { period: "8月第3週", offline: "受注確度の高い案件を集中対応", online: "反応企業への再架電、商談化", onlineAssignee: "小池・その他メンバー" },
  { period: "8月第4週", offline: "Q4に向けた受注見込み整理", online: "施策別CAC・LTV・受注率を整理", onlineAssignee: "小池・その他メンバー" },
];

export const roadmapAssignees = [
  { role: "オフライン営業", assignee: "橋口" },
  { role: "オンライン営業", assignee: "小池・その他メンバー" },
  { role: "全体調整", assignee: "必要に応じて都度整理" },
];

export const abTestPolicy = [
  { item: "対象", content: "代理店・地方営業経由の高温度案件" },
  { item: "検証内容", content: "値引きあり提案と通常提案の比較" },
  { item: "施策例", content: "初月無料、期間限定、先着枠、地方限定条件" },
  { item: "比較指標", content: "受注率、平均単価、LTV、CAC、リードタイム" },
  { item: "注意点", content: "値引きは通常化せず、検証施策として扱う" },
];

export const crmMeasures = [
  { measure: "メール配信", purpose: "Tier別に接点を再開する" },
  { measure: "ホワイトペーパー", purpose: "温度感の低い層に情報提供する" },
  { measure: "ウェビナー", purpose: "採用広報・SNS採用の考え方をまとめて伝える" },
  { measure: "LINEコミュニティ", purpose: "継続的にSNS採用の情報を届ける" },
  { measure: "CRM/SFA/MA", purpose: "配信・架電・商談・受注を一元管理する" },
];
