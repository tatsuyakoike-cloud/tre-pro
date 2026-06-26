export const site = {
  name: "株式会社 INOTEC",
  shortName: "INOTEC",
  logoUrl: "https://inotec.jp/wp-content/uploads/2024/04/logo-1.png",
  tagline: ["住まいの“あと少し”を、", "技術で叶える。"],
  subCopy: [
    "新築住宅のオプション工事を通じて、",
    "暮らしの快適さと安心をつくる仕事。",
    "INOTECは、関東の住まいに向き合いながら、",
    "これからの会社を一緒につくる仲間を募集しています。",
  ],
  tel: "043-308-5835",
  telLink: "tel:0433085835",
  email: "info@inotec.jp",
  address: "〒260-0801 千葉県千葉市中央区仁戸名町141 仁戸名ベース B-2",
  representative: "井上順史",
  capital: "500万円",
  founded: "2024年3月15日",
  area: "千葉・埼玉を中心に関東近辺",
  officialUrl: "https://inotec.jp/",
  instagram: "https://www.instagram.com/",
};

export const navItems = [
  { id: "story", label: "会社について" },
  { id: "work", label: "仕事内容" },
  { id: "day", label: "1日の流れ" },
  { id: "environment", label: "働く環境" },
  { id: "career", label: "キャリア" },
  { id: "faq", label: "FAQ" },
  { id: "jobs", label: "募集要項" },
  { id: "corporate", label: "法人の方へ" },
  { id: "entry", label: "エントリー" },
];

export const heroCtas = [
  { href: "#jobs", label: "募集要項を見る", variant: "primary" as const },
  { href: "#entry", label: "カジュアル面談を予約", variant: "secondary" as const },
  { href: "#sns", label: "仕事の雰囲気を見る", variant: "outline" as const },
];

export const storyHighlights = [
  { value: "2024", label: "設立" },
  { value: "千葉・埼玉", label: "中心エリア" },
  { value: "8+", label: "施工カテゴリ" },
  { value: "関東近辺", label: "対応エリア" },
];

export const workCategories = [
  {
    title: "窓まわり",
    recruitLabel: "暮らしの安全性・快適性を支える仕事",
    items: ["網戸", "シャッター", "面格子", "カーテンレール", "ブラインド"],
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "キッチンまわり",
    recruitLabel: "新生活の使いやすさを整える仕事",
    items: ["食洗器", "カップボード", "キッチンライト"],
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "電気・エアコン",
    recruitLabel: "住まいのインフラを支える仕事",
    items: ["TVアンテナ", "コンセント増設", "エアコン工事", "照明"],
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "収納・造作",
    recruitLabel: "暮らしに合わせて形にする仕事",
    items: ["枕棚", "可動棚", "グルニエ", "室内手すり"],
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "外構・庭まわり",
    recruitLabel: "第一印象と生活動線を整える仕事",
    items: ["テラス屋根", "ウッドデッキ", "カーポート", "フェンス"],
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
];

export const dayTimeline = [
  { time: "08:00", title: "出社・集合", text: "当日の現場を確認し、必要な部材・工具を準備します。" },
  { time: "09:00", title: "現場へ移動", text: "千葉・埼玉を中心に、戸建住宅の現場へ向かいます。" },
  { time: "09:30", title: "施工前確認", text: "お客様や現場の状態を確認し、安全に作業を進めます。" },
  { time: "10:00", title: "工事開始", text: "網戸、収納、エアコンなど、当日の施工内容に取り組みます。" },
  { time: "12:00", title: "お昼休憩", text: "現場近くまたは車内で休憩。無理のないペースで進めます。" },
  { time: "13:00", title: "施工・確認", text: "仕上がりを確認しながら、丁寧に作業を続けます。" },
  { time: "16:00", title: "片付け・報告", text: "現場を清掃し、完了内容を報告して帰社または退勤。" },
];

export const environmentItems = [
  {
    title: "勤務地",
    text: "千葉・埼玉を中心とした関東近辺の戸建住宅現場。事務所は千葉市中央区にあります。",
  },
  {
    title: "現場体制",
    text: "先輩スタッフと一緒に現場へ。最初は補助から始め、少しずつ一人で任せられる工程へ。",
  },
  {
    title: "服装・道具",
    text: "動きやすい作業着。必要な工具は会社で用意。安全第一で現場に向かいます。",
  },
  {
    title: "未経験サポート",
    text: "専門用語より、実際の作業を見ながら覚えるスタイル。応募前の見学・相談も歓迎です。",
  },
];

export const careerSteps = [
  { step: "01", title: "未経験から現場を覚える", text: "先輩と一緒に補助作業からスタート。" },
  { step: "02", title: "一人で現場を任される", text: "網戸や収納など、得意分野を広げていきます。" },
  { step: "03", title: "複数商材に対応", text: "窓・キッチン・外構など、幅広い工事を担当。" },
  { step: "04", title: "リーダー・管理者へ", text: "施工管理、営業、協力会社管理などへ広がる道も。" },
];

export const stats = [
  { value: "2024", unit: "年", label: "設立" },
  { value: "8", unit: "カテゴリ", label: "施工対応" },
  { value: "2", unit: "県", label: "中心エリア" },
  { value: "50+", unit: "項目", label: "対応工事" },
];

export const snsLinks = [
  { name: "Tech Blog", desc: "施工の工夫、現場のリアル、住まいづくりの知識を発信中。", href: "#", comingSoon: true },
  { name: "Instagram", desc: "現場の雰囲気や施工の様子を写真で発信。", href: site.instagram, comingSoon: false },
  { name: "YouTube", desc: "1日の流れや仕事のイメージを動画で確認。", href: "#", comingSoon: true },
];

export const recruitFaq = [
  {
    q: "未経験でも応募できますか？",
    a: "はい。最初は先輩と一緒に現場で補助から始めます。見学・カジュアル面談も歓迎です。",
  },
  {
    q: "必要な資格はありますか？",
    a: "職種により異なります。施工スタッフは未経験歓迎。普通自動車免許がある方は現場移動で活躍しやすいです。",
  },
  {
    q: "どのエリアの現場が多いですか？",
    a: "千葉県・埼玉県を中心に、関東近辺の戸建住宅現場が中心です。",
  },
  {
    q: "残業や休日について教えてください。",
    a: "詳細は職種・繁忙期により異なります。面談時に具体的な働き方をご説明します。",
  },
  {
    q: "女性でも働けますか？",
    a: "はい。事務職・現場サポートなど、幅広いポジションで活躍できます。",
  },
  {
    q: "協力会社としての応募はできますか？",
    a: "はい。施工パートナーとしてのご相談も受け付けています。エントリーフームよりご連絡ください。",
  },
];

export const jobs = [
  {
    title: "施工スタッフ",
    type: "正社員・パート",
    summary: "新築住宅のオプション工事（網戸、収納、エアコン、外構など）の施工業務。",
    tags: ["未経験歓迎", "普通免許歓迎"],
  },
  {
    title: "施工管理",
    type: "正社員",
    summary: "現場の工程管理、安全確認、協力会社との調整、品質チェック。",
    tags: ["経験者優遇", "現場リーダー"],
  },
  {
    title: "現場サポート",
    type: "正社員・パート",
    summary: "部材準備、現場補助、清掃、お客様対応のサポート。",
    tags: ["未経験歓迎", "事務経験活かせる"],
  },
  {
    title: "一般事務",
    type: "正社員・パート",
    summary: "見積り補助、スケジュール管理、電話・メール対応、書類作成。",
    tags: ["週休相談可", "PC基本操作"],
  },
  {
    title: "営業・顧客対応",
    type: "正社員",
    summary: "お問い合わせ対応、現地調査同行、見積り提案、既存顧客フォロー。",
    tags: ["コミュニケーション重視"],
  },
  {
    title: "協力会社募集",
    type: "業務委託",
    summary: "住宅オプション工事に対応できる協力会社・個人事業主の方を募集しています。",
    tags: ["千葉・埼玉", "継続案件"],
  },
];

export const corporateReasons = [
  "窓・キッチン・外構まで、新築オプション工事を幅広く対応",
  "無料現地調査・お見積り相談で、依頼前の不安を解消",
  "複数工事をまとめてご相談いただけるワンストップ体制",
  "千葉・埼玉を中心に、関東近辺の戸建住宅に対応",
  "LIXIL、YKK AP、Panasonic など各種メーカー取り扱い",
];

export const serviceCategories = [
  {
    title: "窓まわり",
    items: ["網戸", "シャッター", "面格子", "カーテンレール", "ブラインド"],
  },
  {
    title: "キッチン・洗面",
    items: ["食洗器", "カップボード", "物干し金具", "三面鏡"],
  },
  {
    title: "電気・エアコン",
    items: ["TVアンテナ", "コンセント増設", "エアコン工事", "照明"],
  },
  {
    title: "コーティング",
    items: ["フロアコーティング", "水まわりコーティング"],
  },
  {
    title: "収納・造作",
    items: ["枕棚", "可動棚", "グルニエ", "室内手すり"],
  },
  {
    title: "外構・庭",
    items: ["テラス屋根", "ウッドデッキ", "カーポート", "フェンス"],
  },
];

export const workFlow = [
  { step: "01", title: "お問い合わせ", text: "お電話・Webフォーム・LINEでご相談ください。" },
  { step: "02", title: "現地調査・打ち合わせ", text: "無料で現地を確認し、ご要望をお伺いします。" },
  { step: "03", title: "お見積り作成", text: "見積り自体は無料。内容を丁寧にご説明します。" },
  { step: "04", title: "工事内容の確定", text: "内容・日程をすり合わせ、発注いただきます。" },
  { step: "05", title: "部材発注", text: "メーカー取り寄せ品のため、納期は約2〜3週間前後。" },
  { step: "06", title: "工事・完了確認", text: "お立ち会いのうえ施工。仕上がりを一緒に確認します。" },
];

export const corporateFaq = [
  { q: "見積りは無料ですか？", a: "はい。お見積り自体は無料です。まずはお気軽にご相談ください。" },
  { q: "千葉県以外でも依頼できますか？", a: "千葉・埼玉を中心に、関東近辺にも対応しています。エリアはお問い合わせ時にご確認ください。" },
  { q: "複数工事をまとめて依頼できますか？", a: "はい。網戸、収納、外構など、まとめてご相談いただけます。" },
  { q: "部材の納期はどれくらいですか？", a: "メーカー取り寄せ品のため、ご注文後おおむね2〜3週間前後が目安です。" },
];

export const sectionCopy = {
  story: {
    label: "会社について",
    title: ["まだ新しい会社だからこそ、", "つくれる未来がある。"],
    lead: [
      "2024年に設立したINOTECは、千葉・埼玉を中心に、",
      "新築住宅のオプション工事やリフォーム工事を手がけています。",
      "網戸やシャッター、カップボード、エアコン、収納、外構まで、",
      "暮らしに関わる幅広い工事を通じて、お客様の新生活を支えています。",
    ],
    body: [
      "これから会社の仕組みや文化を一緒につくっていく仲間を募集しています。",
      "歴史の長さより、これから一緒に成長していくフェーズであることが、",
      "INOTECの魅力です。",
    ],
  },
  work: {
    label: "仕事内容",
    title: ["暮らしが始まる前の住まいを、", "もっと快適に整える。"],
    lead: [
      "新築住宅は引き渡し時点で完成しているように見えても、",
      "実際の暮らしに合わせた調整や追加工事が必要になることがあります。",
      "INOTECの仕事は、お客様の暮らしに必要な機能を加えていく仕事です。",
    ],
  },
  day: {
    label: "1日の流れ",
    title: "1日の流れ",
    lead: [
      "現場仕事が初めての方でも、",
      "一日の流れがイメージしやすいよう整理しました。",
    ],
  },
  environment: {
    label: "働く環境",
    title: "働く環境",
    lead: [
      "給与・休日・福利厚生などの詳細は面談時にご案内します。",
      "ここでは、仕事のイメージが湧く情報を中心に掲載しています。",
    ],
  },
  career: {
    label: "キャリア",
    title: ["一つの技術だけで終わらない。", "住まい全体を見られる人材へ。"],
    lead: [
      "未経験から始めて、幅広い商材に対応し、",
      "将来的には施工管理や営業など多様なキャリアへ広がれます。",
    ],
  },
  message: {
    label: "代表メッセージ",
    title: "代表メッセージ",
    lead: [
      "「住まいのあと少し」を丁寧に整えることで、",
      "お客様の新生活を支える。それがINOTECの仕事です。",
    ],
    quote: [
      "私たちは2024年にスタートしたばかりの会社です。",
      "だからこそ、一人ひとりの声が会社の形に直結します。",
      "未経験からでも、現場で学び、成長できる環境を整えています。",
      "一緒に、関東の住まいを支えるチームをつくりませんか。",
    ],
  },
  data: {
    label: "数字で見るINOTEC",
    title: "数字で見るINOTEC",
    lead: [
      "設立間もない会社だからこそ、",
      "事業データと対応範囲で信頼の輪郭をお伝えします。",
    ],
  },
  sns: {
    label: "Tech Blog / SNS",
    title: "Tech Blog / SNS",
    lead: [
      "現場のリアル、施工の工夫、住まいづくりの知識を発信。",
      "応募前に会社の雰囲気を感じていただけます。",
    ],
  },
  faq: {
    label: "よくある質問",
    title: "よくある質問（採用）",
    lead: "応募前の不安を解消するため、よくいただく質問をまとめました。",
  },
  jobs: {
    label: "募集要項",
    title: "募集要項",
    lead: [
      "職種ごとの詳細条件・給与・休日は面談時にご案内します。",
      "まずは気になる職種からエントリーください。",
    ],
  },
  corporate: {
    label: "法人の方へ",
    title: ["新築住宅のオプション工事を、", "もっと分かりやすく、安心に。"],
    lead: [
      "千葉・埼玉を中心に、関東近辺の住宅オプション工事・リフォーム工事に対応。",
      "お客様・取引先の方もこちらをご覧ください。",
    ],
  },
  company: {
    label: "会社概要",
    title: "会社概要",
  },
  entry: {
    label: "エントリー",
    title: ["エントリー /", "カジュアル面談"],
    lead: [
      "応募・見学・カジュアル面談・協力会社のご相談はこちらから。",
      "折り返しご連絡いたします。",
    ],
  },
} as const;

export const images = {
  hero:
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80",
  story:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  message:
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
  office:
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
};
