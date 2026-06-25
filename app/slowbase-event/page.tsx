import {
  augustImprovements,
  combinedSales,
  companyMeaning,
  decidedItems,
  finalVision,
  formatYen,
  futureRevenue,
  immediateRevenue,
  julyPoints,
  metrics,
  oneTimeSales,
  prepItems,
  risks,
  salesFlow,
  seramadePoints,
  slowbaseFees,
  subscriptionGrowth,
  summaryCards,
  toc,
} from "./content";

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
        <p className="mb-2 text-xs font-bold tracking-[0.2em] text-emerald-700">
          {kicker}
        </p>
      )}
      <h2 className="font-[family-name:var(--font-sb-serif)] text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-2xl text-sm leading-7 text-stone-600">
          {description}
        </p>
      )}
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <div>
          <p className="text-[0.65rem] font-bold tracking-[0.18em] text-emerald-700">
            SLOWBASE EVENT
          </p>
          <p className="text-sm font-bold text-stone-900">
            SERAMADE支援 事業提案資料
          </p>
        </div>
        <a
          href="https://github.com/tatsuyakoike-cloud/tre-pro/blob/main/docs/slowbase-event.md"
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full border border-stone-200 px-4 py-2 text-xs font-bold text-stone-600 transition hover:border-emerald-300 hover:text-emerald-800 sm:inline-flex"
        >
          Markdown版
        </a>
      </div>
    </header>
  );
}

function Sidebar() {
  return (
    <nav aria-label="目次" className="hidden lg:block lg:w-56 lg:shrink-0">
      <div className="sticky top-24">
        <p className="mb-3 text-[0.65rem] font-bold tracking-[0.18em] text-stone-400">
          目次
        </p>
        <ul className="space-y-0.5 border-l border-stone-200">
          {toc.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="block border-l-2 border-transparent py-1 pl-3 text-[0.72rem] font-medium leading-5 text-stone-500 transition hover:border-emerald-500 hover:text-emerald-800"
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

function DataTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: (string | number)[][];
}) {
  return (
    <div className="mt-6 overflow-x-auto rounded-2xl border border-stone-200 bg-white">
      <table className="w-full min-w-[480px] text-left text-sm">
        <thead>
          <tr className="border-b border-stone-100 bg-stone-50">
            {headers.map((header) => (
              <th
                key={header}
                className="px-4 py-3 font-bold text-stone-500 last:text-right"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={index}
              className="border-b border-stone-100 last:border-0"
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className={`px-4 py-3 text-stone-700 ${cellIndex > 0 ? "text-right tabular-nums" : "font-medium"}`}
                >
                  {typeof cell === "number" ? formatYen(cell) : cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function BarChart({
  title,
  description,
  data,
  valueKey,
  labelKey,
  maxValue,
}: {
  title: string;
  description: string;
  data: Record<string, string | number>[];
  valueKey: string;
  labelKey: string;
  maxValue: number;
}) {
  return (
    <div className="mt-6 rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50/80 to-white p-6">
      <h3 className="text-base font-bold text-stone-900">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-stone-600">{description}</p>
      <div className="mt-6 space-y-4">
        {data.map((item) => {
          const value = item[valueKey] as number;
          const label = item[labelKey] as string;
          const width = Math.max(8, (value / maxValue) * 100);
          return (
            <div key={label}>
              <div className="mb-1.5 flex items-baseline justify-between gap-3 text-sm">
                <span className="font-medium text-stone-700">{label}</span>
                <span className="shrink-0 font-bold tabular-nums text-emerald-800">
                  {formatYen(value)}
                </span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-stone-100">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-emerald-600 to-emerald-400"
                  style={{ width: `${width}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function StackedBarChart() {
  const maxTotal = 2712000;
  return (
    <div className="mt-6 rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50/80 to-white p-6">
      <h3 className="text-base font-bold text-stone-900">
        単体販売と定期購入を合わせた年間売上イメージ
      </h3>
      <p className="mt-2 text-sm leading-7 text-stone-600">
        イベント当日の単体販売に、毎月1名ずつ定期購入者が増える想定を加えた年間売上イメージ。
      </p>
      <div className="mt-6 space-y-5">
        {combinedSales.map((item) => {
          const oneTimeWidth = (item.oneTime / maxTotal) * 100;
          const subWidth = (item.subscription / maxTotal) * 100;
          return (
            <div key={item.case}>
              <div className="mb-1.5 flex items-baseline justify-between gap-3 text-sm">
                <span className="font-medium text-stone-700">{item.case}</span>
                <span className="shrink-0 font-bold tabular-nums text-emerald-800">
                  {formatYen(item.total)}
                </span>
              </div>
              <div className="flex h-4 overflow-hidden rounded-full bg-stone-100">
                <div
                  className="h-full bg-emerald-600"
                  style={{ width: `${oneTimeWidth}%` }}
                  title={`単体: ${formatYen(item.oneTime)}`}
                />
                <div
                  className="h-full bg-amber-400"
                  style={{ width: `${subWidth}%` }}
                  title={`定期: ${formatYen(item.subscription)}`}
                />
              </div>
              <div className="mt-1 flex gap-4 text-[0.7rem] text-stone-500">
                <span>単体 {formatYen(item.oneTime)}</span>
                <span>定期 {formatYen(item.subscription)}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-5 flex flex-wrap gap-4 text-xs text-stone-600">
        <span className="inline-flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-600" />
          単体販売
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          定期購入（312,000円/年）
        </span>
      </div>
    </div>
  );
}

function LineChartMini() {
  const maxRevenue = 48000;
  const points = subscriptionGrowth.map((item, index) => {
    const x = (index / (subscriptionGrowth.length - 1)) * 100;
    const y = 100 - (item.monthlyRevenue / maxRevenue) * 100;
    return `${x},${y}`;
  });
  const polyline = points.join(" ");

  return (
    <div className="mt-6 rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50/80 to-white p-6">
      <h3 className="text-base font-bold text-stone-900">
        定期購入が積み上がるときの月間売上イメージ
      </h3>
      <p className="mt-2 text-sm leading-7 text-stone-600">
        毎月1名ずつ定期購入者が増えた場合、月間売上がどのように積み上がるかを示した試算。
      </p>
      <div className="mt-6 rounded-xl border border-stone-100 bg-white p-4">
        <svg viewBox="0 0 100 100" className="h-48 w-full" preserveAspectRatio="none">
          {[0, 25, 50, 75, 100].map((y) => (
            <line
              key={y}
              x1="0"
              y1={y}
              x2="100"
              y2={y}
              stroke="#e7e5e4"
              strokeWidth="0.5"
            />
          ))}
          <polyline
            fill="none"
            stroke="#059669"
            strokeWidth="1.5"
            strokeLinejoin="round"
            points={polyline}
          />
          {subscriptionGrowth.map((item, index) => {
            const x = (index / (subscriptionGrowth.length - 1)) * 100;
            const y = 100 - (item.monthlyRevenue / maxRevenue) * 100;
            return (
              <circle key={item.month} cx={x} cy={y} r="1.2" fill="#059669" />
            );
          })}
        </svg>
        <div className="mt-3 flex justify-between text-[0.65rem] text-stone-500">
          <span>1ヶ月目</span>
          <span>6ヶ月目</span>
          <span>12ヶ月目（48,000円/月）</span>
        </div>
      </div>
      <p className="mt-4 rounded-xl bg-white px-4 py-3 text-sm leading-7 text-stone-700">
        1年目の合計売上は{" "}
        <strong className="font-bold text-emerald-800">312,000円</strong>
        。翌年以降も継続すれば、さらに積み上がります。
      </p>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 space-y-2.5">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3 rounded-xl border border-stone-100 bg-white px-4 py-3 text-sm leading-7 text-stone-700"
        >
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function FlowSteps({ steps }: { steps: string[] }) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-2">
      {steps.map((step, index) => (
        <span key={step} className="flex items-center gap-2">
          <span className="rounded-lg bg-emerald-700 px-3 py-1.5 text-xs font-medium text-white">
            {index + 1}. {step}
          </span>
          {index < steps.length - 1 && (
            <span className="text-stone-300" aria-hidden="true">
              →
            </span>
          )}
        </span>
      ))}
    </div>
  );
}

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-6 space-y-4 text-sm leading-8 text-stone-700">
      {children}
    </div>
  );
}

export default function SlowBaseEventPage() {
  return (
    <main className="min-h-screen scroll-smooth bg-stone-50 text-stone-900">
      <Header />

      <section className="relative overflow-hidden border-b border-stone-200 bg-white">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            background:
              "radial-gradient(circle at 15% 40%, #059669 0%, transparent 45%), radial-gradient(circle at 85% 20%, #a8a29e 0%, transparent 40%), radial-gradient(circle at 70% 85%, #84cc16 0%, transparent 35%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="mb-4 inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-bold text-emerald-800">
            SERAMADE支援 · イベント出展 · 売上導線の実証
          </p>
          <h1 className="max-w-3xl font-[family-name:var(--font-sb-serif)] text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
            売上につながる型を、
            <span className="text-emerald-700"> 小さく実証する</span>
          </h1>
          <p className="mt-2 text-lg font-medium text-stone-600 sm:text-xl">
            SlowBase event — SERAMADE支援 事業提案資料
          </p>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-stone-600 sm:text-base">
            餅田農園の SERAMADE を、Walklog「よりみちYoga」イベントで出展。
            単なる設置ではなく、販売・定期購入・SlowBase支援の全体像を第三者にも伝わる形で整理した資料です。
          </p>
        </div>
      </section>

      <div className="mx-auto flex max-w-6xl gap-10 px-4 py-12 sm:px-6 sm:py-16">
        <Sidebar />

        <article className="min-w-0 flex-1 space-y-16 sm:space-y-20">
          <section id="intro" className="scroll-mt-24">
            <SectionHeading
              id="intro-heading"
              kicker="OVERVIEW"
              title="このページで伝えたいこと"
            />
            <div className="mt-6 rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-stone-50 p-6 sm:p-8">
              <Prose>
                <p>
                  今回の SERAMADE 支援は、単なるイベント出展ではありません。
                  餅田農園にとっては SERAMADE の売上を伸ばす機会、SlowBase
                  にとっては撮影だけに頼らない仕事をつくる実証です。
                </p>
                <p>
                  まずは小さく始めて、売上が出るか、定期購入につながるか、毎月続けられる形にできるかを見ていきます。
                  その結果をもとに、餅田農園に対してイベント出展費用や運営支援費をいただける状態を作りたいです。
                </p>
              </Prose>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {summaryCards.map((card) => (
                <div
                  key={card.label}
                  className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm"
                >
                  <p className="text-xs font-bold text-emerald-700">
                    {card.label}
                  </p>
                  <p className="mt-1 text-xl font-bold text-stone-900">
                    {card.value}
                  </p>
                  <p className="mt-1 text-xs text-stone-500">{card.sub}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="conclusion" className="scroll-mt-24">
            <SectionHeading
              id="conclusion-heading"
              kicker="CONCLUSION"
              title="1. まず結論"
            />
            <Prose>
              <p>
                今の SlowBase にとって、今回の SERAMADE 支援は進める価値があります。
                既存顧客である餅田農園の売上を伸ばしながら、SlowBase
                としても新しい仕事の形を作れる可能性があるためです。
              </p>
              <p>
                これまで SlowBase では、ドローン撮影や映像制作を入口にした仕事が中心でした。
                撮影案件は常に安定して発生するものではなく、撮影をしたからといって必ずその後の運用支援や追加案件につながるとも限りません。
              </p>
              <p className="font-bold text-emerald-900">
                今回の SERAMADE 支援は、商品やブランドの売上に近いところまで関わる仕事を作るための実証案件です。
              </p>
            </Prose>
          </section>

          <section id="seramade" className="scroll-mt-24">
            <SectionHeading
              id="seramade-heading"
              kicker="SERAMADE"
              title="2. SERAMADEについて"
              description="自然由来の商品、地域性、農業、健康、美容といった要素を持つ餅田農園のブランド。"
            />
            <Prose>
              <p>
                ここで大事なのは、SERAMADE の商品をただ紹介することではありません。
                イベントに来た人に、以下をわかりやすく伝えることです。
              </p>
            </Prose>
            <BulletList items={seramadePoints} />
            <p className="mt-4 text-sm leading-7 text-stone-600">
              そこまで設計できれば、単なる出展ではなく、売上につながる導線になります。
            </p>
          </section>

          <section id="decided" className="scroll-mt-24">
            <SectionHeading
              id="decided-heading"
              kicker="SCHEDULE"
              title="3. 今回決まっていること"
            />
            <Prose>
              <p>
                Walklog 社が運営する「よりみちYoga」というイベントに、SERAMADE
                の商品を出させていただける流れができています。
              </p>
            </Prose>
            <BulletList items={decidedItems} />
            <p className="mt-4 rounded-xl border border-stone-100 bg-white px-4 py-3 text-sm leading-7 text-stone-600">
              樋高さんは元 Amazon 出身で EC の知見もあります。Walklog
              側でも EC を作っていく予定があるため、リアルイベントから EC
              販売につなげる動きにも広げられる可能性があります。
            </p>
          </section>

          <section id="goal" className="scroll-mt-24">
            <SectionHeading
              id="goal-heading"
              kicker="GOAL"
              title="4. この施策でやりたいこと"
              description="イベントに商品を置くのではなく、SERAMADEが売れる流れを作ること。"
            />
            <FlowSteps steps={salesFlow} />
          </section>

          <section id="simulation" className="scroll-mt-24">
            <SectionHeading
              id="simulation-heading"
              kicker="REVENUE"
              title="5. 餅田農園としての売上シミュレーション"
              description="ドリンク1本4,000円。月1回イベント出展（年12回）での試算。"
            />
            <DataTable
              headers={[
                "1回あたりの販売本数",
                "1回あたり売上",
                "年間売上（12回）",
              ]}
              rows={oneTimeSales.map((row) => [
                `${row.perEvent}本`,
                row.revenuePerEvent,
                row.annualRevenue,
              ])}
            />
            <BarChart
              title="SERAMADE イベント経由の年間売上イメージ"
              description="ドリンク単価4,000円、月1回・年間12回出展した場合。定期購入やEC経由の追加購入は含まず、イベント当日の単体販売のみで試算。"
              data={oneTimeSales}
              valueKey="annualRevenue"
              labelKey="case"
              maxValue={2400000}
            />
            <Prose>
              <p>
                まずは5本でも売れれば1回20,000円。月1回続けば年間240,000円。
                10本で480,000円、20本で960,000円、50本で2,400,000円です。
              </p>
              <p>
                最初から50本を狙うより、5本→10本→20本と改善していくのが現実的です。
                毎回50人前後が来るイベントで50本売れる状態まで作れれば、餅田農園にとって大きな販売機会になります。
              </p>
            </Prose>
          </section>

          <section id="subscription" className="scroll-mt-24">
            <SectionHeading
              id="subscription-heading"
              kicker="SUBSCRIPTION"
              title="7. 定期購入が取れると、もっと強い"
            />
            <Prose>
              <p>
                この施策で大事なのは、当日売上だけではありません。
                定期購入が取れれば、売上は積み上がります。
              </p>
              <p>
                SERAMADE のドリンクが月1本購入されると、1人あたりの年間売上は{" "}
                <strong className="font-bold text-emerald-800">48,000円</strong>
                （4,000円 × 12ヶ月）です。
              </p>
              <p>
                見るべきなのは、その日に何本売れたかだけではなく、継続購入につながるお客様を作れるかどうかです。
              </p>
            </Prose>
            <LineChartMini />
          </section>

          <section id="combined" className="scroll-mt-24">
            <SectionHeading
              id="combined-heading"
              kicker="COMBINED"
              title="9. 単体販売と定期購入を合わせた売上イメージ"
            />
            <DataTable
              headers={[
                "ケース",
                "単体販売（年間）",
                "定期購入（年間）",
                "合計年間売上",
              ]}
              rows={combinedSales.map((row) => [
                row.case,
                row.oneTime,
                row.subscription,
                row.total,
              ])}
            />
            <StackedBarChart />
            <Prose>
              <p>
                20本売れる状態までいけば、定期購入込みで年間1,272,000円。
                50本売れる状態までいけば、定期購入込みで年間2,712,000円です。
              </p>
            </Prose>
          </section>

          <section id="slowbase-fee" className="scroll-mt-24">
            <SectionHeading
              id="slowbase-fee-heading"
              kicker="SLOWBASE"
              title="10. 売上が見えれば、SlowBaseの仕事にもなる"
            />
            <Prose>
              <p>
                最初は実証として進めます。イベントを通じて餅田農園側の売上が上がることを見せられれば、SlowBase
                としてもイベント出展に関わる費用をいただきやすくなります。
              </p>
              <p>
                大事なのは、最初から大きく請求することではありません。
                まずは「このイベントに出ると売上が上がる」という状態を作ることです。
              </p>
            </Prose>
            <BulletList items={slowbaseFees} />
          </section>

          <section id="revenue-points" className="scroll-mt-24">
            <SectionHeading
              id="revenue-points-heading"
              kicker="REVENUE MODEL"
              title="11. SlowBase側の収益化ポイント"
            />
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-stone-200 bg-white p-6">
                <p className="text-xs font-bold tracking-wider text-emerald-700">
                  すぐに発生しそうな仕事
                </p>
                <BulletList items={immediateRevenue} />
              </div>
              <div className="rounded-2xl border border-stone-200 bg-white p-6">
                <p className="text-xs font-bold tracking-wider text-stone-500">
                  Walklog EC 連携で広がる可能性
                </p>
                <BulletList items={futureRevenue} />
              </div>
            </div>
          </section>

          <section id="metrics" className="scroll-mt-24">
            <SectionHeading
              id="metrics-heading"
              kicker="METRICS"
              title="12. 毎回見る数字"
              description="感覚だけで進めないため、毎回記録する指標。"
            />
            <div className="mt-6 overflow-x-auto rounded-2xl border border-stone-200 bg-white">
              <table className="w-full min-w-[560px] text-left text-sm">
                <thead>
                  <tr className="border-b border-stone-100 bg-stone-50">
                    <th className="px-4 py-3 font-bold text-stone-500">項目</th>
                    <th className="px-4 py-3 font-bold text-stone-500">
                      見る理由
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {metrics.map((row) => (
                    <tr
                      key={row.item}
                      className="border-b border-stone-100 last:border-0"
                    >
                      <td className="px-4 py-3 font-medium text-stone-800">
                        {row.item}
                      </td>
                      <td className="px-4 py-3 text-stone-600">{row.reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="schedule" className="scroll-mt-24">
            <SectionHeading
              id="schedule-heading"
              kicker="VALIDATION"
              title="13. 7月25日と8月22日でやること"
            />
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-6">
                <p className="text-sm font-bold text-emerald-800">7月25日</p>
                <p className="mt-1 text-xs text-stone-500">最初の実証</p>
                <BulletList items={julyPoints} />
              </div>
              <div className="rounded-2xl border border-stone-200 bg-white p-6">
                <p className="text-sm font-bold text-stone-900">8月22日</p>
                <p className="mt-1 text-xs text-stone-500">
                  7月の結果をもとに改善
                </p>
                <BulletList items={augustImprovements} />
              </div>
            </div>
          </section>

          <section id="prep" className="scroll-mt-24">
            <SectionHeading
              id="prep-heading"
              kicker="PREPARATION"
              title="14. 直近で準備するもの"
            />
            <BulletList items={prepItems} />
            <p className="mt-4 text-sm leading-7 text-stone-600">
              できるだけ型化し、小池が毎回全部やるのではなく、西さんでも回せるようにすることが大事です。
            </p>
          </section>

          <section id="risk" className="scroll-mt-24">
            <SectionHeading
              id="risk-heading"
              kicker="RISK"
              title="15. この施策のリスク"
            />
            <ul className="mt-6 space-y-2">
              {risks.map((risk) => (
                <li
                  key={risk}
                  className="rounded-xl border border-amber-100 bg-amber-50/60 px-4 py-3 text-sm leading-7 text-stone-700"
                >
                  {risk}
                </li>
              ))}
            </ul>
          </section>

          <section id="meaning" className="scroll-mt-24">
            <SectionHeading
              id="meaning-heading"
              kicker="WHY NOW"
              title="16. 会社として進める意味"
            />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {companyMeaning.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-stone-200 bg-white p-5"
                >
                  <p className="font-bold text-stone-900">{item.title}</p>
                  <p className="mt-2 text-sm leading-7 text-stone-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section id="vision" className="scroll-mt-24">
            <SectionHeading
              id="vision-heading"
              kicker="VISION"
              title="17. 最終的に作りたい形"
            />
            <FlowSteps steps={finalVision} />
          </section>

          <section id="closing" className="scroll-mt-24">
            <SectionHeading
              id="closing-heading"
              kicker="CLOSING"
              title="18. 最後に"
            />
            <div className="mt-6 rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-700 to-emerald-900 p-6 text-white sm:p-8">
              <Prose>
                <p className="text-white/90">
                  今回の SERAMADE 支援は、単なるイベント出展ではありません。
                  餅田農園にとっては SERAMADE の売上を上げる機会、SlowBase
                  にとっては撮影以外の仕事を作る実証です。
                </p>
                <p className="text-white/90">
                  まずは7月25日と8月22日のイベントで、販売本数、QR
                  読み込み、EC 流入、定期購入を見ます。
                </p>
              </Prose>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  { label: "5本", value: "2万円/回" },
                  { label: "10本", value: "4万円/回" },
                  { label: "20本", value: "8万円/回" },
                  { label: "50本", value: "20万円/回" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-white/15 bg-white/10 p-4 text-center"
                  >
                    <p className="text-lg font-bold">{item.label}</p>
                    <p className="mt-1 text-xs text-white/70">{item.value}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm leading-8 text-white/85">
                月1回続ければ、年間では24万円〜240万円の売上インパクト。定期購入が取れれば、さらに積み上がります。
                まずは餅田農園の売上を上げ、その実績をもとに SlowBase
                の支援価値を見せる——その流れが作れれば、双方にとって良い仕事になります。
              </p>
            </div>
          </section>
        </article>
      </div>

      <footer className="border-t border-stone-200 bg-white px-4 py-10">
        <div className="mx-auto max-w-6xl text-center text-xs text-stone-400">
          <p>SlowBase event — SERAMADE支援 事業提案資料</p>
          <p className="mt-1">
            Web版: /tre-pro/slowbase-event/ ·{" "}
            <a
              href="https://github.com/tatsuyakoike-cloud/tre-pro/blob/main/docs/slowbase-event.md"
              className="underline hover:text-emerald-700"
              target="_blank"
              rel="noreferrer"
            >
              Markdown版
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
