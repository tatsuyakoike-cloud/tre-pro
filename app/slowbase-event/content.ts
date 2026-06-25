export const toc = [
  { id: "intro", label: "このページで伝えたいこと" },
  { id: "conclusion", label: "1. まず結論" },
  { id: "seramade", label: "2. SERAMADEについて" },
  { id: "decided", label: "3. 今回決まっていること" },
  { id: "goal", label: "4. この施策でやりたいこと" },
  { id: "simulation", label: "5. 売上シミュレーション" },
  { id: "subscription", label: "7. 定期購入の強み" },
  { id: "combined", label: "9. 単体＋定期の合算" },
  { id: "slowbase-fee", label: "10. SlowBaseの仕事" },
  { id: "revenue-points", label: "11. 収益化ポイント" },
  { id: "metrics", label: "12. 毎回見る数字" },
  { id: "schedule", label: "13. 7月・8月の検証" },
  { id: "prep", label: "14. 直近で準備するもの" },
  { id: "risk", label: "15. リスク" },
  { id: "meaning", label: "16. 会社としての意味" },
  { id: "vision", label: "17. 最終的に作りたい形" },
  { id: "closing", label: "18. 最後に" },
];

export const summaryCards = [
  {
    label: "対象ブランド",
    value: "SERAMADE",
    sub: "餅田農園が展開する自然由来ブランド",
  },
  {
    label: "実証イベント",
    value: "よりみちYoga",
    sub: "7/25・8/22 から月1回の継続可能性",
  },
  {
    label: "商品単価",
    value: "4,000円 / 本",
    sub: "ドリンク1本あたり",
  },
  {
    label: "SlowBaseの位置づけ",
    value: "売上に近い支援",
    sub: "撮影以外の販促・導線・運用の実証",
  },
];

export const seramadePoints = [
  "何の商品なのか",
  "どんな人に合うのか",
  "なぜ良いのか",
  "どこで買えるのか",
  "続けるとどう良いのか",
];

export const decidedItems = [
  "7月25日にSERAMADEのドリンクを設置",
  "8月22日も設置予定",
  "今後も月1回のイベントで継続できる可能性あり",
  "毎回50人前後が来場するイベント",
  "チラシ、POP、QR導線、SNS投稿などを型化できそう",
  "Walklog代表の樋高さんと、今後の連携について話す機会がある",
];

export const salesFlow = [
  "イベントでSERAMADEを知ってもらう",
  "試飲やPOPで商品の魅力を伝える",
  "QRコードでECやInstagramへ誘導する",
  "単体購入につなげる",
  "できれば定期購入につなげる",
  "結果を見て次回の見せ方を改善する",
];

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

export const slowbaseFees = [
  "イベント出展運営費",
  "チラシ制作費",
  "POP制作費",
  "QR導線設計費",
  "SNS告知文作成費",
  "イベント後レポート作成費",
  "EC導線改善費",
  "月次運用費",
];

export const immediateRevenue = [
  "イベント用チラシ作成",
  "商品説明POP作成",
  "ポスター作成",
  "SNS告知文作成",
  "QRコード導線の設計",
  "イベント後の反応まとめ",
  "次回改善案の作成",
];

export const futureRevenue = [
  "商品ページの構成整理",
  "商品説明文の作成",
  "購入導線の改善",
  "イベント参加者からECへの誘導",
  "SNSからECへの導線設計",
  "ブランドごとの見せ方整理",
  "商品写真や動画の活用",
  "購入後のリピート導線設計",
];

export const metrics = [
  { item: "来場者数", reason: "何人に接点を作れたかを見る" },
  { item: "試飲数", reason: "商品に興味を持ってもらえた数を見る" },
  { item: "販売本数", reason: "その場の売上を見る" },
  { item: "売上金額", reason: "餅田農園側への売上貢献を見る" },
  { item: "QRコード読み込み数", reason: "ECやInstagramへの導線が機能したかを見る" },
  { item: "Instagramフォロー数", reason: "継続接点が作れたかを見る" },
  { item: "EC流入数", reason: "イベントから購入ページへ送れたかを見る" },
  { item: "定期購入件数", reason: "継続売上につながったかを見る" },
  { item: "イベント後の問い合わせ数", reason: "後追いの反応を見る" },
  { item: "次回購入の見込み", reason: "次回改善の材料にする" },
];

export const julyPoints = [
  "参加者がSERAMADEに興味を持つか",
  "どの説明が伝わりやすいか",
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

export const prepItems = [
  "SERAMADE紹介チラシ",
  "商品説明POP",
  "QRコード付き購入導線",
  "Instagram誘導導線",
  "イベント告知文",
  "当日の簡易チェックリスト",
  "イベント後のレポートフォーマット",
  "Walklog訪問時に話す「SlowBaseでできること」資料",
];

export const risks = [
  "初回から大きく売れるとは限らない",
  "SERAMADE単体では継続単価が小さい可能性がある",
  "Walklog側の外注ニーズはまだ確定していない",
  "EC領域は樋高さん側にも知見があるため、SlowBaseの役割を明確にする必要がある",
  "小池が入りすぎると属人的になる",
  "西さんに任せるにはマニュアル化が必要",
];

export const companyMeaning = [
  {
    title: "撮影以外の仕事を作れる",
    text: "撮影案件が動かない時期でも、販促物、SNS、導線設計、イベント運用で仕事を作れます。",
  },
  {
    title: "既存顧客から始められる",
    text: "完全な新規開拓ではないため、小さく始めて検証できます。",
  },
  {
    title: "顧客の売上に近いところで関われる",
    text: "SERAMADEの販売本数や定期購入数で、成果が見えやすいです。",
  },
  {
    title: "月次運用にしやすい",
    text: "イベントが毎月あるため、単発ではなく継続支援に変えやすいです。",
  },
  {
    title: "Walklog側の仕事に広がる可能性",
    text: "イベント運営、販促、EC導線など、SERAMADE以外の仕事に広がる可能性があります。",
  },
  {
    title: "SlowBaseの方向性と合っている",
    text: "自然、地域、健康、農業、体験を扱うため、今後のネイチャー産業支援の実績にしやすいです。",
  },
];

export const finalVision = [
  "SERAMADEをイベントに出す",
  "チラシ、POP、QR導線を整える",
  "イベントで売上を作る",
  "定期購入につなげる",
  "餅田農園側の売上が上がる",
  "SlowBaseの支援価値が見える",
  "イベント出展費用や運営費をいただける",
  "Walklog側のEC・販促支援にも広げる",
  "他の自然・地域・健康系ブランドにも横展開する",
];

export function formatYen(value: number) {
  return `${value.toLocaleString("ja-JP")}円`;
}
