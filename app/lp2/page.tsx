const stats = [
  { value: "120万+", label: "月間リーチ", sub: "支援アカウント合計" },
  { value: "+18,000", label: "フォロワー増", sub: "3ヶ月平均" },
  { value: "3.2倍", label: "問い合わせ数", sub: "運用開始後" },
];

const pains = [
  { icon: "📅", text: "投稿が続かない" },
  { icon: "💭", text: "何を投稿すればいいかわからない" },
  { icon: "📉", text: "フォロワーが増えない" },
  { icon: "🎬", text: "リールの作り方がわからない" },
  { icon: "📊", text: "分析や改善ができていない" },
  { icon: "😓", text: "運用担当者の負担が大きい" },
];

const services = [
  { icon: "🎯", title: "アカウント設計", text: "目的に合わせたプロフィール・導線設計" },
  { icon: "💡", title: "投稿企画", text: "月次カレンダーで継続的な発信を設計" },
  { icon: "📸", title: "フィード投稿制作", text: "ブランドに合ったビジュアルを制作" },
  { icon: "🎥", title: "リール動画企画", text: "伸びる構成でリールを企画・制作" },
  { icon: "✍️", title: "キャプション作成", text: "共感と行動を促す文章を作成" },
  { icon: "#️⃣", title: "ハッシュタグ設計", text: "リーチを最大化するタグ戦略" },
  { icon: "📈", title: "分析レポート", text: "インサイトをわかりやすく可視化" },
  { icon: "🔄", title: "改善提案", text: "データに基づく次の一手を提案" },
  { icon: "💬", title: "DM対応代行", text: "問い合わせ・予約導線をサポート" },
  { icon: "🎁", title: "キャンペーン設計", text: "集客・採用に効く企画を立案" },
];

const cases = [
  {
    industry: "飲食店",
    metric: "予約問い合わせ 2.4倍",
    period: "3ヶ月",
    detail:
      "リールで店舗の雰囲気を発信し、プロフィールから予約導線を設計。週3投稿で来店意欲の高いフォロワーを獲得しました。",
    gradient: "from-orange-400 to-pink-500",
  },
  {
    industry: "美容サロン",
    metric: "リール経由 月35件",
    period: "新規来店",
    detail:
      "施術ビフォーアフターのリールとストーリーズ連動で、指名予約が増加。地域ターゲットのハッシュタグ設計が奏功しました。",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    industry: "採用アカウント",
    metric: "20代応募 月8件",
    period: "0件→達成",
    detail:
      "社員の日常を見せるリールと採用ストーリーズで、若年層へのリーチを強化。応募フォームへの導線を最適化しました。",
    gradient: "from-fuchsia-500 to-violet-600",
  },
];

const reasons = [
  {
    num: "01",
    title: "投稿するだけでなく、導線設計まで支援",
    text: "プロフィール・ハイライト・CTAまで一貫設計し、フォローから問い合わせまでの導線を構築します。",
  },
  {
    num: "02",
    title: "業種ごとに勝ちパターンを設計",
    text: "飲食・美容・採用など業種別の成功パターンを活かし、貴社に最適な運用方針を提案します。",
  },
  {
    num: "03",
    title: "月次レポートで改善点を可視化",
    text: "リーチ・保存・プロフィールアクセスなどをレポート化。次に打つべき施策が明確になります。",
  },
  {
    num: "04",
    title: "企画・制作・分析をワンストップ対応",
    text: "企画から投稿制作、分析・改善まで一気通貫。社内リソースをかけずに運用を継続できます。",
  },
  {
    num: "05",
    title: "少人数企業でも始めやすい運用体制",
    text: "小規模店舗・個人事業主でも無理なく始められるプラン設計。まずは無料相談からご提案します。",
  },
];

const steps = [
  { num: 1, title: "無料相談", text: "課題・目標をヒアリング" },
  { num: 2, title: "現状アカウント診断", text: "強みと改善点を分析" },
  { num: 3, title: "運用方針・投稿設計", text: "勝ちパターンを設計" },
  { num: 4, title: "投稿制作・配信", text: "企画から投稿まで代行" },
  { num: 5, title: "分析・改善レポート", text: "データに基づき改善" },
];

const faqs = [
  {
    q: "Instagram初心者でも依頼できますか？",
    a: "はい、問題ありません。アカウント開設から運用設計・投稿制作まで、初心者の方でも安心してお任せいただける体制です。現状のフォロワー数や投稿数に関わらずご相談ください。",
  },
  {
    q: "投稿素材がなくても大丈夫ですか？",
    a: "大丈夫です。お持ちの写真・動画が少ない場合でも、撮影のポイントをご案内したり、素材の整理・編集からサポートします。素材がなくても始められるプランをご提案します。",
  },
  {
    q: "どれくらいで効果が出ますか？",
    a: "業種や投稿頻度により異なりますが、多くのクライアント様で運用開始から2〜3ヶ月でリーチや問い合わせの変化を実感いただいています。まずは現状診断で、貴社に合った目安をお伝えします。",
  },
  {
    q: "採用目的でも使えますか？",
    a: "はい、採用専用アカウントの運用実績もございます。社員の日常を見せるリールやストーリーズで、応募意欲の高い若年層へのリーチ強化が可能です。",
  },
  {
    q: "料金はどれくらいですか？",
    a: "投稿本数・リール制作の有無・DM対応範囲などにより異なります。無料相談時にご要望をお伺いし、最適なプランとお見積りをご提示します。まずはお気軽にご相談ください。",
  },
];

const igGradient =
  "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)";

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-pink-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6">
        <a href="#" className="flex items-center gap-2.5">
          <div
            className="flex h-9 w-9 items-center justify-center rounded-xl text-sm font-black text-white shadow-md"
            style={{ background: igGradient }}
          >
            IG
          </div>
          <div>
            <p className="text-sm font-black leading-tight text-slate-900 sm:text-base">
              Insta Growth Partner
            </p>
            <p className="text-[0.65rem] font-bold text-slate-400">
              Instagram運用代行
            </p>
          </div>
        </a>
        <a
          href="#contact"
          className="rounded-full px-5 py-2.5 text-xs font-black text-white shadow-lg transition hover:opacity-90 sm:px-6 sm:py-3 sm:text-sm"
          style={{ background: igGradient }}
        >
          無料相談する
        </a>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14">
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full opacity-20 blur-3xl"
        style={{ background: igGradient }}
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-10 h-56 w-56 rounded-full opacity-15 blur-3xl"
        style={{
          background:
            "linear-gradient(135deg, #833AB4 0%, #C13584 50%, #E1306C 100%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-50 px-4 py-2 text-xs font-bold text-pink-700">
          <span
            className="inline-block h-2 w-2 rounded-full"
            style={{ background: igGradient }}
          />
          集客・採用・ブランディングに対応
        </div>

        <h1 className="mt-6 text-[1.75rem] font-black leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
          Instagram運用を、
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: igGradient }}
          >
            成果につながる集客導線へ。
          </span>
        </h1>

        <p className="mt-5 max-w-xl text-sm font-bold leading-7 text-slate-600 sm:text-base">
          投稿制作から分析・改善まで、企業のInstagram運用をまるごと支援。
          <br className="hidden sm:block" />
          集客・採用・ブランディングに効くアカウントへ育てます。
        </p>

        <a
          href="#contact"
          className="mt-8 inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-black text-white shadow-xl transition hover:opacity-90 sm:text-base"
          style={{ background: igGradient }}
        >
          無料相談する
        </a>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative overflow-hidden rounded-2xl border border-pink-100 bg-white p-6 shadow-sm"
            >
              <div
                className="absolute inset-x-0 top-0 h-1"
                style={{ background: igGradient }}
              />
              <p
                className="text-3xl font-black tracking-tight sm:text-4xl"
                style={{
                  backgroundImage: igGradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-black text-slate-800">
                {stat.label}
              </p>
              <p className="mt-0.5 text-xs text-slate-400">{stat.sub}</p>
            </div>
          ))}
        </div>

        <p className="mt-4 text-center text-[0.65rem] leading-5 text-slate-400 sm:text-xs">
          ※数値は支援事例の一例です。結果を保証するものではありません。
        </p>

        <div className="mt-10 flex justify-center">
          <div className="relative w-full max-w-xs overflow-hidden rounded-3xl border border-pink-100 bg-gradient-to-br from-pink-50 via-white to-purple-50 p-4 shadow-lg sm:max-w-sm">
            <div className="flex items-center gap-3 border-b border-pink-100 pb-3">
              <div
                className="h-10 w-10 rounded-full"
                style={{ background: igGradient }}
              />
              <div>
                <p className="text-xs font-black text-slate-800">
                  your_brand_official
                </p>
                <p className="text-[0.65rem] text-slate-400">ビジネスアカウント</p>
              </div>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-1">
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-md"
                  style={{
                    background:
                      i % 3 === 0
                        ? "linear-gradient(135deg, #f9a8d4, #c084fc)"
                        : i % 3 === 1
                          ? "linear-gradient(135deg, #fb923c, #f472b6)"
                          : "linear-gradient(135deg, #a78bfa, #f472b6)",
                    opacity: 0.7 + (i % 3) * 0.1,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PainSection() {
  return (
    <section className="bg-gradient-to-b from-pink-50/80 to-white px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-pink-500">
            PROBLEMS
          </p>
          <h2 className="mt-3 text-2xl font-black text-slate-900 sm:text-4xl">
            こんなお悩み、ありませんか？
          </h2>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {pains.map((pain) => (
            <div
              key={pain.text}
              className="flex items-center gap-4 rounded-2xl border border-pink-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-pink-50 text-xl">
                {pain.icon}
              </span>
              <p className="text-sm font-black text-slate-800">{pain.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionSection() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div
          className="overflow-hidden rounded-3xl p-8 text-white sm:p-12"
          style={{ background: igGradient }}
        >
          <p className="text-xs font-bold tracking-[0.2em] text-white/80">
            SOLUTION
          </p>
          <h2 className="mt-4 text-2xl font-black leading-tight sm:text-4xl">
            Instagram運用を、
            <br />
            設計から改善までまるごと支援します
          </h2>
          <p className="mt-5 max-w-2xl text-sm font-bold leading-7 text-white/90 sm:text-base">
            投稿を続けるだけでは成果は出ません。アカウント設計・コンテンツ企画・
            リール制作・分析改善まで一気通貫でサポートし、集客・採用・ブランディング
            それぞれの目的に合わせた「成果の出る運用」へ導きます。
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              { label: "集客", desc: "来店・予約・問い合わせを増やす" },
              { label: "採用", desc: "応募意欲の高い人材にリーチ" },
              { label: "ブランド", desc: "認知と信頼を積み上げる" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/20 bg-white/15 p-5 backdrop-blur-sm"
              >
                <p className="text-lg font-black">{item.label}</p>
                <p className="mt-1 text-xs font-bold text-white/80">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceSection() {
  return (
    <section
      id="service"
      className="bg-slate-50 px-4 py-16 sm:px-6 sm:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-pink-500">
            SERVICE
          </p>
          <h2 className="mt-3 text-2xl font-black text-slate-900 sm:text-4xl">
            サービス内容
          </h2>
          <p className="mt-3 text-sm font-bold text-slate-500">
            企画から運用・改善まで、必要な支援をワンストップで提供
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-pink-200 hover:shadow-md"
            >
              <span className="text-2xl">{service.icon}</span>
              <h3 className="mt-3 text-base font-black text-slate-900">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseSection() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-pink-500">
            RESULTS
          </p>
          <h2 className="mt-3 text-2xl font-black text-slate-900 sm:text-4xl">
            支援実績・事例
          </h2>
        </div>

        <div className="mt-10 space-y-5">
          {cases.map((item) => (
            <div
              key={item.industry}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="grid md:grid-cols-[1fr_2fr]">
                <div
                  className={`flex flex-col justify-center bg-gradient-to-br ${item.gradient} p-8 text-white`}
                >
                  <p className="text-xs font-bold tracking-wider text-white/80">
                    {item.industry}
                  </p>
                  <p className="mt-2 text-3xl font-black sm:text-4xl">
                    {item.metric}
                  </p>
                  <p className="mt-1 text-sm font-bold text-white/80">
                    {item.period}
                  </p>
                </div>
                <div className="p-6 sm:p-8">
                  <p className="text-sm leading-7 text-slate-600">
                    {item.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-slate-400">
          ※一例であり、成果を保証するものではありません。
        </p>
      </div>
    </section>
  );
}

function ReasonSection() {
  return (
    <section className="bg-gradient-to-b from-white to-pink-50/50 px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-pink-500">
            WHY US
          </p>
          <h2 className="mt-3 text-2xl font-black text-slate-900 sm:text-4xl">
            選ばれる理由
          </h2>
        </div>

        <div className="mt-10 space-y-4">
          {reasons.map((reason) => (
            <div
              key={reason.num}
              className="flex gap-5 rounded-2xl border border-pink-100 bg-white p-6 shadow-sm sm:items-center"
            >
              <div
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-lg font-black text-white"
                style={{ background: igGradient }}
              >
                {reason.num}
              </div>
              <div>
                <h3 className="text-base font-black text-slate-900 sm:text-lg">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {reason.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FlowSection() {
  return (
    <section id="flow" className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-pink-500">
            FLOW
          </p>
          <h2 className="mt-3 text-2xl font-black text-slate-900 sm:text-4xl">
            支援の流れ
          </h2>
        </div>

        <div className="hide-scrollbar mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 sm:gap-5 lg:overflow-visible">
          {steps.map((step, index) => (
            <div
              key={step.num}
              className="relative min-w-[72%] shrink-0 snap-start sm:min-w-[42%] lg:min-w-0 lg:flex-1"
            >
              {index < steps.length - 1 && (
                <div className="absolute -right-2 top-1/2 z-10 hidden -translate-y-1/2 text-xl font-black text-pink-400 lg:block">
                  →
                </div>
              )}
              <div className="h-full rounded-2xl border border-pink-100 bg-white p-6 shadow-sm">
                <div
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-black text-white"
                  style={{ background: igGradient }}
                >
                  {step.num}
                </div>
                <p className="mt-1 text-[0.65rem] font-black tracking-[0.15em] text-pink-500">
                  STEP 0{step.num}
                </p>
                <h3 className="mt-2 text-base font-black text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm text-slate-500">{step.text}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-3 text-center text-xs text-slate-400 lg:hidden">
          スワイプして全ステップを確認できます
        </p>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section id="faq" className="bg-slate-50 px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-pink-500">
            FAQ
          </p>
          <h2 className="mt-3 text-2xl font-black text-slate-900 sm:text-4xl">
            よくある質問
          </h2>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-2xl border border-slate-200 bg-white p-5 sm:p-6"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-black text-slate-900 sm:text-base">
                {faq.q}
                <span className="shrink-0 text-2xl text-pink-500 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-sm leading-7 text-slate-600">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <div
          className="overflow-hidden rounded-3xl shadow-2xl"
          style={{ background: igGradient }}
        >
          <div className="p-8 text-center text-white sm:p-12">
            <p className="text-xs font-bold tracking-[0.2em] text-white/80">
              CONTACT
            </p>
            <h2 className="mt-4 text-2xl font-black leading-tight sm:text-4xl">
              まずは無料で
              <br />
              Instagram運用を相談する
            </h2>
            <p className="mt-4 text-sm font-bold text-white/85">
              現状の課題や目標をお聞かせください。最適な運用プランをご提案します。
            </p>
          </div>

          <div className="bg-white p-6 sm:p-10">
            <form className="space-y-4" action="#">
              <div>
                <label className="mb-1.5 block text-xs font-bold text-slate-600">
                  会社名・店舗名
                </label>
                <input
                  type="text"
                  placeholder="例）株式会社サンプル"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-pink-300 focus:ring-2 focus:ring-pink-100"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-bold text-slate-600">
                  お名前
                </label>
                <input
                  type="text"
                  placeholder="例）山田 太郎"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-pink-300 focus:ring-2 focus:ring-pink-100"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-bold text-slate-600">
                  メールアドレス
                </label>
                <input
                  type="email"
                  placeholder="例）info@example.com"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-pink-300 focus:ring-2 focus:ring-pink-100"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-bold text-slate-600">
                  ご相談内容（任意）
                </label>
                <textarea
                  rows={3}
                  placeholder="集客強化 / 採用アカウント運用 など"
                  className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-pink-300 focus:ring-2 focus:ring-pink-100"
                />
              </div>
              <a
                href="#"
                className="flex w-full items-center justify-center rounded-full py-4 text-sm font-black text-white shadow-lg transition hover:opacity-90 sm:text-base"
                style={{ background: igGradient }}
              >
                無料相談する
              </a>
            </form>

            <div className="mt-5 text-center">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-green-400 bg-green-50 px-6 py-3 text-sm font-black text-green-700 transition hover:bg-green-100"
              >
                <span className="text-lg">💬</span>
                LINEで相談する
              </a>
            </div>

            <p className="mt-5 text-center text-[0.65rem] leading-5 text-slate-400">
              ※フォームはデモ表示です。実際のお問い合わせは担当者よりご連絡ください。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-pink-100 bg-white px-4 py-8 text-center">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-black text-slate-800">
          Insta Growth Partner
        </p>
        <p className="mt-1 text-xs text-slate-400">
          Instagram運用代行・コンサルティング
        </p>
        <p className="mt-4 text-xs text-slate-400">
          © Insta Growth Partner. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default function Lp2Page() {
  return (
    <main className="min-h-screen scroll-smooth bg-white text-slate-900">
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
      <Header />
      <HeroSection />
      <PainSection />
      <SolutionSection />
      <ServiceSection />
      <CaseSection />
      <ReasonSection />
      <FlowSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
