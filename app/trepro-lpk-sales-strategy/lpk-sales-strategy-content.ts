export const navItems = [
  { id: "policy", label: "方針" },
  { id: "current", label: "現状" },
  { id: "metrics", label: "数値" },
  { id: "simulation", label: "シミュレーション" },
  { id: "q4", label: "Q4" },
  { id: "strategy", label: "2軸" },
  { id: "tier", label: "Tier" },
  { id: "roadmap", label: "ロードマップ" },
  { id: "tactics", label: "施策" },
  { id: "decisions", label: "決定事項" },
];

export const heroCards = [
  {
    title: "2軸体制",
    text: "オフラインで短期売上、オンラインで既存リストの掘り起こしと仕組み化。",
  },
  {
    title: "判断基準",
    text: "総獲得コスト800万円に対し、LTV合計 ÷ 総獲得コストで3倍以上を最低ラインとする。",
  },
  {
    title: "8月末目標",
    text: "最低8社成約（2640万円・3.3倍）。目標は10〜13社で4〜5倍水準。",
  },
];

export const policyAxes = [
  {
    axis: "オフライン営業",
    purpose: "短期売上の創出",
    roles: "代理店、紹介、地方営業、飛び込み、訪問、クロージング",
  },
  {
    axis: "オンライン営業",
    purpose: "既存リストの再活用と仕組み化",
    roles: "LPKリスト整理、掘り起こし、メール配信、架電検証、ナーチャリング",
  },
];

export const policyRationale = [
  "LP広告の獲得効率が悪化しており、広告単体での回復には限界がある。",
  "過去に接点を持ったリストが残っているが、十分に営業資産として活用できていない。",
  "代理店・紹介・地方営業は短期の受注機会を作れる一方で、属人的になりやすい。",
  "オンライン側で、リスト・配信・架電・商談化の流れを作ることで、再現性のある営業基盤を作れる。",
  "7月・8月は、短期売上を作りながら、Q4に向けて継続的に商談が生まれる状態を作る期間とする。",
];

export const currentChallenges = [
  "LPKの獲得コストが上がっている。",
  "顧客の継続月数が以前より短くなり、LTVが下がっている。",
  "以前よりも、広告費をかけても利益が残りづらい構造になっている。",
  "現状のままでは、LPK施策が撤退ラインに入る可能性がある。",
  "そのため、7月・8月で既存リストの掘り起こしと営業体制の再設計を進める必要がある。",
];

export const metricsPremise = [
  { item: "総獲得コスト", value: "800万円", note: "LP広告・営業人件費・外注費・ツール費などを含めた施策全体のコスト" },
  { item: "目標倍率", value: "3.0倍以上", note: "撤退ラインを超える最低基準" },
  { item: "必要LTV合計", value: "2,400万円", note: "800万円 × 3.0倍" },
  { item: "1社あたりLTV目安", value: "330万円", note: "月額単価 × 想定継続月数で算出する期待値" },
  { item: "現状例のLTV合計", value: "900万円", note: "330万円 + 240万円 + 330万円" },
  { item: "現状例の倍率", value: "1.13倍", note: "900万円 ÷ 800万円", accent: true },
];

export const metricsNotes = [
  "800万円は、1社あたりのCACではなく、施策全体の総獲得コスト。",
  "成約数が増えるほど、1社あたりCACは下がる。",
  "3倍ラインを見る場合は、施策全体で LTV合計 ÷ 総獲得コスト を確認する。",
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

export const q4IdealState = [
  { area: "営業体制", state: "オフライン営業とオンライン営業が分かれ、それぞれの役割が明確になっている" },
  { area: "LPK", state: "既存リストの掘り起こしから商談・受注が生まれている" },
  { area: "数値管理", state: "成約数、LTV合計、総獲得コスト、倍率を施策別に確認できる" },
  { area: "リスト管理", state: "確度別・Tier別に営業対象が整理されている" },
  { area: "ナーチャリング", state: "メール配信、ホワイトペーパー、ウェビナー、LINE等で接点を継続できる" },
  { area: "営業資料", state: "料金表、事例集、稟議・税理士向け資料が使える状態になっている" },
  { area: "Q4準備", state: "9月以降、CRM・SFA・MAに接続できる営業運用が整理されている" },
];

export const offlineStrategy = {
  purpose: "短期の商談・受注を作る。",
  themes: [
    { theme: "代理店・紹介", content: "既存の代理店・紹介ルートを活用し、短期で受注可能性のある案件を進める" },
    { theme: "地方営業・飛び込み", content: "地方企業への直接営業、訪問、飛び込みを実施する" },
    { theme: "クロージング", content: "受注確度の高い案件を個別対応し、早期に契約へ進める" },
    { theme: "価格検証", content: "料金がボトルネックの案件に対し、値引き・初月無料などのABテストを行う" },
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
    { kpi: "施策別CAC", detail: "オフライン施策にかかったコストと受注数の関係" },
  ],
};

export const onlineStrategy = {
  purpose: "既存リストを再活用し、低コストで商談機会を作る。",
  themes: [
    { theme: "リスト整理", content: "LPK・過去商談リストを確度別に整理する" },
    { theme: "掘り起こし", content: "メール配信と架電で、過去接点から再商談化を狙う" },
    { theme: "ナーチャリング", content: "ホワイトペーパー、ウェビナー、LINE等で継続接点を作る" },
    { theme: "データ化", content: "配信反応、架電結果、商談化率を記録し、次のKPIを作る" },
    { theme: "仕組み化", content: "CRM・SFA・MAへ接続できる運用ルールを整える" },
  ],
  actions: [
    "LPKリストをTier1〜4に分類する。",
    "Tierごとに送付物を変える。",
    "メール配信後、開封・クリック・返信を確認する。",
    "反応企業を中心に架電する。",
    "最初の検証として、100件程度の架電データを作る。",
    "反応が薄い層にはホワイトペーパーやウェビナーで接点を継続する。",
    "今回の掘り起こし施策は、過去の商談受注率を前提にせず、新しく基準値を作る。",
  ],
  kpis: [
    { kpi: "配信数", detail: "Tier別のメール送付数" },
    { kpi: "開封数", detail: "メールが見られた件数" },
    { kpi: "クリック数", detail: "資料・リンクがクリックされた件数" },
    { kpi: "返信数", detail: "反応があった件数" },
    { kpi: "架電数", detail: "配信後に架電した件数" },
    { kpi: "接続数", detail: "電話がつながった件数" },
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

export const tierNotes = [
  "40%は、課題とネクストアクションが明確な状態とする。",
  "20%は、過去接点があり、再商談化の余地がある状態とする。",
  "10%は、すぐに商談化はしないが、情報提供を続ける価値がある状態とする。",
  "Tier4は、明確NG、電話NG、対象外、情報不足などを含む。",
];

export const tierApproaches = [
  { tier: "Tier 1", material: "事例集、料金表、アポ打診", call: "送付後に優先架電", next: "商談・クロージング" },
  { tier: "Tier 2", material: "会社資料、アポ打診", call: "反応企業を中心に架電", next: "商談化、またはTier1昇格" },
  { tier: "Tier 3", material: "ホワイトペーパー、業界情報", call: "クリック・返信があれば架電", next: "Tier2昇格" },
  { tier: "Tier 4", material: "送付しない", call: "原則架電しない", next: "ステイ" },
];

export const roadmapRows = [
  { period: "7月第1週", offline: "代理店・紹介・地方営業の対象整理", online: "リスト整理、Tier付与、初回メール配信" },
  { period: "7月第2週", offline: "高確度案件への訪問・クロージング開始", online: "配信反応の分析、架電検証、アポ獲得" },
  { period: "7月第3週", offline: "値引きあり/なしのABテスト開始", online: "商談実施、失注理由・反応データの記録" },
  { period: "7月第4週", offline: "受注見込み整理、価格検証の一次確認", online: "受注・商談結果をもとにKPI更新" },
  { period: "8月第1週", offline: "地方・代理店案件の追加展開", online: "ホワイトペーパー第2弾、ウェビナー準備" },
  { period: "8月第2週", offline: "クロージング強化", online: "ウェビナー・LINE等のナーチャリング開始" },
  { period: "8月第3週", offline: "受注確度の高い案件を集中対応", online: "反応企業への再架電、商談化" },
  { period: "8月第4週", offline: "Q4に向けた受注見込み整理", online: "施策別CAC・LTV・受注率を整理" },
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

export const pendingDecisions = [
  { item: "総獲得コスト", content: "800万円で固定して見るか、月次で変動させるか" },
  { item: "LTV", content: "1社330万円を標準値として扱うか" },
  { item: "目標成約数", content: "最低8社、目標10〜13社で置くか" },
  { item: "Tier反映", content: "Excel上のどの列にTierを追加するか" },
  { item: "配信対象", content: "Tier1〜3の対象企業をどこまで含めるか" },
  { item: "価格調整", content: "値引き・初月無料の適用条件をどうするか" },
  { item: "架電検証", content: "100件架電の対象と担当範囲" },
  { item: "9月以降", content: "CRM・SFA・MAに接続する項目" },
];
