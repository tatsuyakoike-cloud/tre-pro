export const toc = [
  { id: "axis", label: "1. SlowBaseの軸" },
  { id: "status", label: "2. 現状の整理" },
  { id: "seramade", label: "3. SeraMadeの現状" },
  { id: "simulation", label: "4. 売上シミュレーション" },
  { id: "subscription", label: "5. 定期購入" },
  { id: "combined", label: "7. 単体＋定期" },
  { id: "slowbase-view", label: "8. SlowBaseとして見たいこと" },
  { id: "walklog", label: "9. Walklogとの可能性" },
  { id: "next", label: "10. 次にやること" },
  { id: "metrics", label: "11. 記録する数字" },
  { id: "summary", label: "12. まとめ" },
];

export const summaryCards = [
  {
    label: "SlowBaseの軸",
    value: "唯一無二の価値をあるべき姿に",
    sub: "イベント運営会社ではない",
  },
  {
    label: "実績（初回）",
    value: "5本販売",
    sub: "20,000円 · 定期購入実績もあり",
  },
  {
    label: "検証日程",
    value: "7/25 · 8/22",
    sub: "Walklog「よりみちYoga」月1回継続可能",
  },
  {
    label: "見るポイント",
    value: "売上導線の実証",
    sub: "SNS · EC · イベント · 定期購入",
  },
];

export const seramadeSupport = [
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
  { month: "4ヶ月目", subscribers: 4, monthlyRevenue: 16000 },
  { month: "5ヶ月目", subscribers: 5, monthlyRevenue: 20000 },
  { month: "6ヶ月目", subscribers: 6, monthlyRevenue: 24000 },
  { month: "7ヶ月目", subscribers: 7, monthlyRevenue: 28000 },
  { month: "8ヶ月目", subscribers: 8, monthlyRevenue: 32000 },
  { month: "9ヶ月目", subscribers: 9, monthlyRevenue: 36000 },
  { month: "10ヶ月目", subscribers: 10, monthlyRevenue: 40000 },
  { month: "11ヶ月目", subscribers: 11, monthlyRevenue: 44000 },
  { month: "12ヶ月目", subscribers: 12, monthlyRevenue: 48000 },
];

export const combinedSales = [
  { case: "5本 / 回", oneTime: 240000, subscription: 312000, total: 552000 },
  { case: "10本 / 回", oneTime: 480000, subscription: 312000, total: 792000 },
  { case: "20本 / 回", oneTime: 960000, subscription: 312000, total: 1272000 },
  { case: "50本 / 回", oneTime: 2400000, subscription: 312000, total: 2712000 },
];

export const slowbaseFocus = [
  "SeraMadeの商品がリアルイベントで受け入れられるか",
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

export const metrics = [
  { item: "来場者数", reason: "どれくらい接点を作れたか" },
  { item: "試飲数", reason: "商品に興味を持ってもらえたか" },
  { item: "販売本数", reason: "その場で購入された数" },
  { item: "売上金額", reason: "餅田農園への売上貢献" },
  { item: "QRコード読み込み数", reason: "ECやSNSへの導線が機能したか" },
  { item: "Instagramフォロー数", reason: "継続接点が作れたか" },
  { item: "EC流入数", reason: "イベントから購入ページへ送れたか" },
  { item: "定期購入件数", reason: "継続売上につながったか" },
  { item: "イベント後の問い合わせ数", reason: "後追いの反応があったか" },
  { item: "次回購入見込み", reason: "次回改善の材料" },
];

export function formatYen(value: number) {
  return `${value.toLocaleString("ja-JP")}円`;
}
