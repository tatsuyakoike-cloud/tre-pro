// =====================================================
// Instagram 採用運用ガイド
// docs/instagram-recruiting-strategy.md と同期
// =====================================================

const toc = [
  { id: "summary", label: "要点サマリー" },
  { id: "purpose", label: "目的" },
  { id: "premise", label: "前提" },
  { id: "platform", label: "TikTok vs Instagram" },
  { id: "flow", label: "ユーザーフロー" },
  { id: "features", label: "各機能の役割" },
  { id: "rules", label: "運用ルール" },
  { id: "cases", label: "事例" },
  { id: "staff", label: "スタッフ出演" },
  { id: "design", label: "全体設計" },
  { id: "simulation", label: "シミュレーション" },
  { id: "conclusion", label: "結論" },
];

const summaryItems = [
  { label: "TikTok", value: "見つけてもらう", sub: "新規認知・拡散" },
  { label: "Instagram", value: "信頼してもらう", sub: "理解促進・不安解消" },
  { label: "運用の本質", value: "導線設計", sub: "投稿数ではない" },
  { label: "採用の核心", value: "不安を減らす", sub: "応募前の信頼形成" },
];

const comparison = [
  ["主な役割", "新規認知・拡散", "理解促進・信頼形成"],
  ["ユーザー行動", "おすすめ欄で動画を見る", "プロフィールや過去投稿も確認"],
  ["強み", "知らない人に届きやすい", "情報を蓄積しやすい"],
  ["向いている内容", "スタッフ出演・あるある・トレンド", "仕事内容・制度・応募導線"],
  ["採用での役割", "興味を持たせる", "応募前の不安を下げる"],
];

const features = [
  {
    name: "リール",
    role: "新規認知の入口",
    color: "from-pink-500 to-orange-400",
    icon: "🎬",
    examples: [
      "未経験入社1年目のリアル",
      "現場職の朝はこんな感じ",
      "この仕事、実はこんな技術が必要",
    ],
  },
  {
    name: "フィード",
    role: "企業理解を深める",
    color: "from-purple-500 to-indigo-500",
    icon: "📋",
    examples: [
      "未経験から一人前になるまで",
      "資格取得支援について",
      "社員インタビュー",
    ],
  },
  {
    name: "ストーリー",
    role: "日常接点を作る",
    color: "from-amber-400 to-yellow-500",
    icon: "📱",
    examples: [
      "今日の現場",
      "新入社員の一言",
      "ストーリー限定 Q&A",
    ],
  },
  {
    name: "ハイライト",
    role: "情報整理・行動誘導",
    color: "from-rose-400 to-pink-500",
    icon: "⭐",
    examples: [
      "会社紹介 / 仕事内容",
      "未経験 OK / FAQ",
      "応募方法",
    ],
  },
  {
    name: "Web サイト",
    role: "コンバージョン",
    color: "from-slate-600 to-slate-800",
    icon: "🌐",
    examples: [
      "採用ページ / 募集要項",
      "エントリーフォーム",
      "詳細な制度説明",
    ],
  },
];

const rules = [
  {
    name: "リール",
    goal: "新規認知を取る",
    items: [
      "冒頭で興味を引く",
      "1 テーマ 1 動画",
      "ユーザーの関心起点で作る",
      "投稿後にプロフィールへ遷移したくなる設計",
    ],
  },
  {
    name: "フィード",
    goal: "理解と信頼を蓄積",
    items: [
      "サムネイルのトーン統一",
      "カテゴリごとに情報整理",
      "初見でも会社の特徴が分かる",
      "リールの受け皿にする",
    ],
  },
  {
    name: "ストーリー",
    goal: "日常接点を増やす",
    items: [
      "完成度よりリアル感",
      "日々の動きを見せる",
      "質問・アンケートで双方向性",
      "重要情報はハイライトに保存",
    ],
  },
  {
    name: "ハイライト",
    goal: "行動につなげる",
    items: [
      "初見ユーザーが迷わない構成",
      "採用サイトの簡易版として設計",
      "Web・応募フォームへの導線",
      "更新頻度を管理",
    ],
  },
];

const cases = [
  {
    title: "TDK 歴史みらい館",
    result: "半年で集客数 400〜500% 増",
    insight: "投稿媒体ではなく、回遊設計の中心として Instagram を活用",
    flow: [
      "リールで興味",
      "プロフィール",
      "フィードで理解",
      "ハイライト",
      "Web サイト",
      "来館",
    ],
  },
  {
    title: "Virtual Baba",
    result: "世界観の一貫性でファン化",
    insight: "個別投稿の伸びより、アカウント全体の世界観が重要",
    flow: [
      "リールで認知",
      "プロフィール",
      "過去投稿",
      "世界観理解",
      "ファン化",
    ],
  },
  {
    title: "砂建",
    result: "応募前の不安解消に特化",
    insight: "バズより「怖い・きつい・未経験不安」を先に潰す設計",
    flow: [
      "リール：雰囲気",
      "フィード：制度",
      "ハイライト：FAQ",
      "Web：応募",
    ],
  },
];

const simulations = [
  {
    title: "未経験採用を強化",
    items: [
      ["リール", "未経験で入社した社員の1日"],
      ["フィード", "一人前になるまでのステップ"],
      ["ストーリー", "今日の新人社員"],
      ["ハイライト", "未経験 OK"],
      ["Web", "未経験者向け募集要項"],
    ],
  },
  {
    title: "会社の雰囲気を伝える",
    items: [
      ["リール", "先輩後輩の会話・休憩中"],
      ["フィード", "社員紹介投稿"],
      ["ストーリー", "日常の一コマ"],
      ["ハイライト", "社員紹介・社内の雰囲気"],
      ["Web", "社員インタビュー"],
    ],
  },
  {
    title: "専門性を伝える",
    items: [
      ["リール", "足場工事・安全確認の流れ"],
      ["フィード", "仕事内容・技術を図解"],
      ["ストーリー", "現場での補足説明"],
      ["ハイライト", "仕事内容・安全への取り組み"],
      ["Web", "施工実績・事業紹介"],
    ],
  },
];

const checklist = [
  "SNS 投稿ではなく、ユーザー導線を設計する",
  "TikTok は認知、Instagram は理解・信頼形成に使う",
  "リールは入口 / フィードは理解 / ストーリーは接触 / ハイライトは整理",
  "Web サイト・採用ページまで含めて設計する",
  "スタッフ出演は有効だが、内輪ノリで終わらせない",
  "採用では「応募前の不安を減らす」ことが重要",
  "企業ごとの目的に応じて、見せる情報を変える",
];

function FlowSteps({ steps }: { steps: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {steps.map((step, i) => (
        <span key={step} className="flex items-center gap-2">
          <span className="rounded-lg bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90 backdrop-blur-sm">
            {step}
          </span>
          {i < steps.length - 1 && (
            <span className="text-white/40" aria-hidden="true">
              →
            </span>
          )}
        </span>
      ))}
    </div>
  );
}

function SectionHeading({
  id,
  kicker,
  title,
  description,
}: {
  id: string;
  kicker?: string;
  title: string;
  description?: string;
}) {
  return (
    <div id={id} className="scroll-mt-24">
      {kicker && (
        <p className="mb-2 text-xs font-bold tracking-[0.2em] text-fuchsia-600">
          {kicker}
        </p>
      )}
      <h2 className="text-2xl font-black tracking-tight text-neutral-950 sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-2xl text-sm leading-7 text-neutral-600">
          {description}
        </p>
      )}
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <div>
          <p className="text-[0.65rem] font-bold tracking-[0.18em] text-fuchsia-600">
            RECRUITING STRATEGY
          </p>
          <p className="text-sm font-black text-neutral-950">
            Instagram 採用運用ガイド
          </p>
        </div>
        <a
          href="https://github.com/tatsuyakoike-cloud/tre-pro/blob/main/docs/instagram-recruiting-strategy.md"
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full border border-neutral-200 px-4 py-2 text-xs font-bold text-neutral-600 transition hover:border-fuchsia-300 hover:text-fuchsia-700 sm:inline-flex"
        >
          GitHub で見る
        </a>
      </div>
    </header>
  );
}

function Sidebar() {
  return (
    <nav
      aria-label="目次"
      className="hidden lg:block lg:w-52 lg:shrink-0"
    >
      <div className="sticky top-24">
        <p className="mb-3 text-[0.65rem] font-bold tracking-[0.18em] text-neutral-400">
          目次
        </p>
        <ul className="space-y-1 border-l border-neutral-200">
          {toc.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="block border-l-2 border-transparent py-1 pl-3 text-xs font-medium text-neutral-500 transition hover:border-fuchsia-400 hover:text-fuchsia-700"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default function InstagramRecruitingStrategyPage() {
  return (
    <main className="min-h-screen scroll-smooth bg-neutral-50 text-neutral-950">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-neutral-200 bg-white">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            background:
              "radial-gradient(circle at 20% 50%, #ec4899 0%, transparent 50%), radial-gradient(circle at 80% 20%, #f97316 0%, transparent 40%), radial-gradient(circle at 60% 80%, #a855f7 0%, transparent 40%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="mb-4 inline-flex rounded-full border border-fuchsia-200 bg-fuchsia-50 px-4 py-1.5 text-xs font-bold text-fuchsia-700">
            TikTok との違い · 機能設計 · 事例から見る運用ロジック
          </p>
          <h1 className="max-w-3xl text-3xl font-black leading-tight tracking-tight sm:text-5xl">
            Instagram 採用運用の
            <span className="bg-gradient-to-r from-fuchsia-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              {" "}
              考え方
            </span>
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base">
            企業が採用目的で Instagram を活用する際の設計指針。
            投稿数ではなくユーザー導線を設計し、応募前の不安を減らすための採用メディアとして活用する方法を整理しています。
          </p>
        </div>
      </section>

      <div className="mx-auto flex max-w-6xl gap-10 px-4 py-12 sm:px-6 sm:py-16">
        <Sidebar />

        <article className="min-w-0 flex-1 space-y-16 sm:space-y-20">
          {/* Summary */}
          <section id="summary" className="scroll-mt-24">
            <SectionHeading
              id="summary-heading"
              kicker="SUMMARY"
              title="要点サマリー"
            />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {summaryItems.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm"
                >
                  <p className="text-xs font-bold text-fuchsia-600">
                    {item.label}
                  </p>
                  <p className="mt-1 text-xl font-black text-neutral-950">
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs text-neutral-500">{item.sub}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Purpose */}
          <section id="purpose" className="scroll-mt-24">
            <SectionHeading
              id="purpose-heading"
              kicker="PURPOSE"
              title="このドキュメントの目的"
              description="Instagram と TikTok の役割の違い、各機能の使い分け、3 つの事例から見える共通構造、企業アカウント運用の判断基準を整理します。"
            />
          </section>

          {/* Premise */}
          <section id="premise" className="scroll-mt-24">
            <SectionHeading
              id="premise-heading"
              kicker="PREMISE"
              title="SNS 運用は「投稿」が目的ではない"
            />
            <div className="mt-6 rounded-2xl border border-fuchsia-200 bg-gradient-to-br from-fuchsia-50 to-orange-50 p-6 sm:p-8">
              <p className="text-sm leading-7 text-neutral-700">
                リールの本数、ストーリーの更新頻度、フォロワー数——
                議論は具体施策に寄りがちですが、SNS の目的は
                <strong className="font-bold text-neutral-950">
                  来館・購買・問い合わせ・採用応募・ファン化
                </strong>
                といった最終行動につなげることです。
              </p>
              <p className="mt-4 text-sm font-bold text-fuchsia-800">
                SNS は導線設計の一部。単体で完結させない。
              </p>
            </div>
          </section>

          {/* Platform comparison */}
          <section id="platform" className="scroll-mt-24">
            <SectionHeading
              id="platform-heading"
              kicker="PLATFORM"
              title="TikTok vs Instagram"
              description="どちらも短尺動画を使えますが、プラットフォームとしての役割は異なります。"
            />
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-neutral-200 bg-white p-6">
                <p className="text-xs font-bold tracking-wider text-neutral-400">
                  TIKTOK
                </p>
                <p className="mt-2 text-lg font-black">見つけてもらう場所</p>
                <p className="mt-2 text-sm leading-7 text-neutral-600">
                  おすすめ欄中心の発見型。新規認知・拡散・話題化に強い。企業理解の蓄積や応募前の不安解消は弱め。
                </p>
              </div>
              <div className="rounded-2xl border border-fuchsia-200 bg-gradient-to-br from-fuchsia-50 to-white p-6">
                <p className="text-xs font-bold tracking-wider text-fuchsia-600">
                  INSTAGRAM
                </p>
                <p className="mt-2 text-lg font-black">信頼してもらう場所</p>
                <p className="mt-2 text-sm leading-7 text-neutral-600">
                  プロフィール→フィード→ハイライト→Web への回遊設計に強い。世界観の蓄積、採用情報の整理、応募導線に向く。
                </p>
              </div>
            </div>

            <div className="mt-6 overflow-x-auto rounded-2xl border border-neutral-200 bg-white">
              <table className="w-full min-w-[540px] text-left text-sm">
                <thead>
                  <tr className="border-b border-neutral-100 bg-neutral-50">
                    <th className="px-4 py-3 font-bold text-neutral-500">項目</th>
                    <th className="px-4 py-3 font-bold text-neutral-500">TikTok</th>
                    <th className="px-4 py-3 font-bold text-fuchsia-700">Instagram</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map(([label, tiktok, instagram]) => (
                    <tr key={label} className="border-b border-neutral-100 last:border-0">
                      <td className="px-4 py-3 font-medium text-neutral-700">{label}</td>
                      <td className="px-4 py-3 text-neutral-600">{tiktok}</td>
                      <td className="px-4 py-3 text-neutral-600">{instagram}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Flow */}
          <section id="flow" className="scroll-mt-24">
            <SectionHeading
              id="flow-heading"
              kicker="FLOW"
              title="Instagram 運用の本質 — ユーザーフロー"
            />
            <div className="mt-6 space-y-4">
              <div className="rounded-2xl bg-neutral-900 p-6 text-white sm:p-8">
                <p className="mb-4 text-xs font-bold tracking-wider text-white/50">
                  一般フロー
                </p>
                <FlowSteps
                  steps={["認知", "興味関心", "理解", "信頼", "行動"]}
                />
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-fuchsia-600 to-orange-500 p-6 text-white sm:p-8">
                <p className="mb-4 text-xs font-bold tracking-wider text-white/70">
                  採用フロー
                </p>
                <FlowSteps
                  steps={[
                    "企業を知る",
                    "気になる",
                    "仕事を理解",
                    "働くイメージ",
                    "応募",
                  ]}
                />
              </div>
            </div>
          </section>

          {/* Features */}
          <section id="features" className="scroll-mt-24">
            <SectionHeading
              id="features-heading"
              kicker="FEATURES"
              title="各機能の役割と使い分け"
              description="各機能がどの段階を担うのかを設計する。"
            />
            <div className="mt-6 space-y-4">
              {features.map((f) => (
                <div
                  key={f.name}
                  className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm"
                >
                  <div
                    className={`bg-gradient-to-r ${f.color} px-5 py-4 text-white`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl" aria-hidden="true">
                        {f.icon}
                      </span>
                      <div>
                        <p className="text-lg font-black">{f.name}</p>
                        <p className="text-sm text-white/80">{f.role}</p>
                      </div>
                    </div>
                  </div>
                  <ul className="divide-y divide-neutral-100 px-5 py-2">
                    {f.examples.map((ex) => (
                      <li
                        key={ex}
                        className="py-2.5 text-sm text-neutral-600 before:mr-2 before:text-fuchsia-400 before:content-['·']"
                      >
                        {ex}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Rules */}
          <section id="rules" className="scroll-mt-24">
            <SectionHeading
              id="rules-heading"
              kicker="RULES"
              title="運用ルールの基本設計"
            />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {rules.map((r) => (
                <div
                  key={r.name}
                  className="rounded-2xl border border-neutral-200 bg-white p-5"
                >
                  <p className="text-xs font-bold text-fuchsia-600">{r.name}</p>
                  <p className="mt-1 font-black text-neutral-950">{r.goal}</p>
                  <ul className="mt-3 space-y-1.5">
                    {r.items.map((item) => (
                      <li
                        key={item}
                        className="text-xs leading-6 text-neutral-600 before:mr-1.5 before:text-fuchsia-400 before:content-['✓']"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Cases */}
          <section id="cases" className="scroll-mt-24">
            <SectionHeading
              id="cases-heading"
              kicker="CASE STUDIES"
              title="事例から見る共通構造"
            />
            <div className="mt-6 space-y-5">
              {cases.map((c) => (
                <div
                  key={c.title}
                  className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <h3 className="text-lg font-black text-neutral-950">
                      {c.title}
                    </h3>
                    <span className="rounded-full bg-fuchsia-50 px-3 py-1 text-xs font-bold text-fuchsia-700">
                      {c.result}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-neutral-600">
                    {c.insight}
                  </p>
                  <div className="mt-4 rounded-xl bg-neutral-900 p-4">
                    <FlowSteps steps={c.flow} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Staff */}
          <section id="staff" className="scroll-mt-24">
            <SectionHeading
              id="staff-heading"
              kicker="STAFF APPEARANCE"
              title="スタッフ出演の使い分け"
              description="TikTok でも Instagram でも活用すべき。ただし使い方を変える。"
            />
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-neutral-200 bg-white p-5">
                <p className="text-xs font-bold text-neutral-400">TikTok</p>
                <p className="mt-1 font-black">興味を持たせるコンテンツ</p>
                <p className="mt-2 text-sm text-neutral-600">
                  親近感・拡散・トレンド。単発でも機能する。
                </p>
              </div>
              <div className="rounded-2xl border border-fuchsia-200 bg-fuchsia-50 p-5">
                <p className="text-xs font-bold text-fuchsia-600">Instagram</p>
                <p className="mt-1 font-black">信頼を蓄積する素材</p>
                <p className="mt-2 text-sm text-neutral-600">
                  リール→フィード→ハイライト→採用ページの導線に組み込む。
                </p>
              </div>
            </div>
          </section>

          {/* Design */}
          <section id="design" className="scroll-mt-24">
            <SectionHeading
              id="design-heading"
              kicker="FRAMEWORK"
              title="Instagram 運用の全体設計"
            />
            <div className="mt-6 space-y-2">
              {[
                ["1. 認知を取る", "リール — 社員出演・現場の迫力・仕事の意外性"],
                ["2. 興味を深める", "プロフィール・フィード — 投稿一覧の統一感"],
                ["3. 理解を促進", "フィード — 仕事内容・社員紹介・制度"],
                ["4. 不安を解消", "ハイライト — FAQ・未経験向け・1日の流れ"],
                ["5. 行動につなげる", "Web — 採用ページ・エントリーフォーム"],
              ].map(([step, detail]) => (
                <div
                  key={step}
                  className="flex gap-4 rounded-xl border border-neutral-200 bg-white px-4 py-3"
                >
                  <p className="shrink-0 text-sm font-black text-fuchsia-600">
                    {step}
                  </p>
                  <p className="text-sm text-neutral-600">{detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Simulation */}
          <section id="simulation" className="scroll-mt-24">
            <SectionHeading
              id="simulation-heading"
              kicker="SIMULATION"
              title="具体的なシミュレーション"
            />
            <div className="mt-6 grid gap-5 lg:grid-cols-3">
              {simulations.map((sim) => (
                <div
                  key={sim.title}
                  className="rounded-2xl border border-neutral-200 bg-white p-5"
                >
                  <h3 className="font-black text-neutral-950">{sim.title}</h3>
                  <dl className="mt-4 space-y-2">
                    {sim.items.map(([func, content]) => (
                      <div key={func} className="text-xs">
                        <dt className="font-bold text-fuchsia-600">{func}</dt>
                        <dd className="mt-0.5 leading-5 text-neutral-600">
                          {content}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
            </div>
          </section>

          {/* Conclusion */}
          <section id="conclusion" className="scroll-mt-24">
            <SectionHeading
              id="conclusion-heading"
              kicker="CONCLUSION"
              title="最終結論"
            />
            <div className="mt-6 rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-800 p-8 text-center text-white">
              <p className="text-2xl font-black sm:text-3xl">
                TikTok = 見つけてもらう
              </p>
              <p className="mt-2 bg-gradient-to-r from-fuchsia-400 to-orange-400 bg-clip-text text-2xl font-black sm:text-3xl">
                Instagram = 信頼してもらう
              </p>
              <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-white/70">
                スタッフ出演や社内の雰囲気コンテンツは Instagram でも有効。
                ただし単発の動画で終わらせず、フィード・ストーリー・ハイライト・Web まで含めた導線に組み込む。
              </p>
            </div>

            <ul className="mt-6 space-y-2">
              {checklist.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-700"
                >
                  <span className="mt-0.5 shrink-0 text-fuchsia-500" aria-hidden="true">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-8 rounded-2xl border border-fuchsia-200 bg-fuchsia-50 p-6 text-center text-sm font-bold leading-7 text-fuchsia-900">
              Instagram を「バズらせる SNS」ではなく、
              <br className="hidden sm:block" />
              応募前に安心してもらうための採用メディアとして設計する。
            </p>
          </section>
        </article>
      </div>

      <footer className="border-t border-neutral-200 bg-white px-4 py-8 text-center text-xs text-neutral-400">
        <p>Instagram 採用運用ガイド · 最終更新 2026年6月</p>
      </footer>
    </main>
  );
}
