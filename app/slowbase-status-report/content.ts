export const toc = [
  { id: "axis", label: "1. SlowBaseの軸" },
  { id: "status", label: "2. 現状の整理" },
  { id: "example", label: "3. 既存顧客支援の一例" },
  { id: "simulation", label: "4. 売上シミュレーション" },
  { id: "subscription", label: "5. 定期購入" },
  { id: "subscription-growth", label: "6. 定期購入の伸び方" },
  { id: "combined", label: "7. 単体＋定期" },
  { id: "slowbase-view", label: "8. SlowBaseとして見たいこと" },
  { id: "walklog", label: "9. Walklogとの可能性" },
  { id: "next", label: "10. 次にやること" },
  { id: "summary", label: "11. まとめ" },
];

export const summaryCards = [
  {
    label: "SlowBaseの軸",
    value: "唯一無二の価値をあるべき姿に",
    sub: "自然 · 地域 · 生業 · 体験",
  },
  {
    label: "既存顧客の一例",
    value: "餅田農園 SERAMADE",
    sub: "Walklogイベント · SNS · EC",
  },
  {
    label: "初回実績",
    value: "5本販売",
    sub: "20,000円 · 定期購入実績もあり",
  },
  {
    label: "検証日程",
    value: "7/25 · 8/22",
    sub: "毎回50人前後",
  },
];

export const clientSupport = [
  "SNS運用支援",
  "ECでの販売支援",
  "商品の見せ方の整理",
  "販売導線の改善",
];

export const eventSchedule = ["7月25日", "8月22日"];

export const oneTimeSales = [
  { case: "5本 / 回", perEvent: 5, revenuePerEvent: 20000, annualRevenue: 240000 },
  { case: "10本 / 回", perEvent: 10, revenuePerEvent: 40000, annualRevenue: 480000 },
  { case: "20本 / 回", perEvent: 20, revenuePerEvent: 80000, annualRevenue: 960000 },
  { case: "50本 / 回", perEvent: 50, revenuePerEvent: 200000, annualRevenue: 2400000 },
];

export const subscriptionGrowth = [
  { month: "1ヶ月目", subscribers: 1, monthlyRevenue: 4000 },
  { month: "2ヶ月目", subscribers: 2, monthlyRevenue: 8000 },
  { month: "3ヶ月目", subscribers: 3, monthlyRevenue: 12000 },
  { month: "4ヶ月目", subscribers: 5, monthlyRevenue: 20000 },
  { month: "5ヶ月目", subscribers: 7, monthlyRevenue: 28000 },
  { month: "6ヶ月目", subscribers: 10, monthlyRevenue: 40000 },
  { month: "7ヶ月目", subscribers: 14, monthlyRevenue: 56000 },
  { month: "8ヶ月目", subscribers: 20, monthlyRevenue: 80000 },
  { month: "9ヶ月目", subscribers: 28, monthlyRevenue: 112000 },
  { month: "10ヶ月目", subscribers: 39, monthlyRevenue: 156000 },
  { month: "11ヶ月目", subscribers: 55, monthlyRevenue: 220000 },
  { month: "12ヶ月目", subscribers: 77, monthlyRevenue: 308000 },
];

export const combinedSales = [
  { case: "5本 / 回", oneTime: 240000, subscription: 1044000, total: 1284000 },
  { case: "10本 / 回", oneTime: 480000, subscription: 1044000, total: 1524000 },
  { case: "20本 / 回", oneTime: 960000, subscription: 1044000, total: 2004000 },
  { case: "50本 / 回", oneTime: 2400000, subscription: 1044000, total: 3444000 },
];

export const slowbaseFocus = [
  "既存顧客の商品がリアルイベントで受け入れられるか",
  "SNSの反応が販売につながるか",
  "QRコードからECやInstagramに流せるか",
  "単体購入だけでなく定期購入につながるか",
  "イベント後に改善点を見つけられるか",
  "その改善で次回の売上が上がるか",
];

export const futureFees = [
  "販促物制作費",
  "SNS運用費",
  "EC導線改善費",
  "イベント出品に関する運営支援費",
  "月次レポート費",
  "月次改善提案費",
];

export const walklogFuture = [
  "ECでの商品ページ設計",
  "商品説明文の整理",
  "SNSからECへの導線設計",
  "イベントからECへの導線設計",
  "出品ブランドの見せ方整理",
  "販売後のリピート導線",
];

export const julyPoints = [
  "何人が興味を持つか",
  "何人が試飲するか",
  "何本売れるか",
  "QRコードが読み込まれるか",
  "InstagramやECに流せるか",
  "定期購入につながるか",
];

export const augustImprovements = [
  "POPの見せ方",
  "商品説明の言葉",
  "QRコードの置き方",
  "SNS投稿内容",
  "ECへの誘導方法",
  "当日の声かけ",
  "イベント後のフォロー",
];

export function formatYen(value: number) {
  return `${value.toLocaleString("ja-JP")}円`;
}
