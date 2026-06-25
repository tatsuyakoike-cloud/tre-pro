import {
  augustImprovements,
  combinedSales,
  eventSchedule,
  formatYen,
  futureFees,
  julyPoints,
  metrics,
  oneTimeSales,
  seramadeSupport,
  slowbaseFocus,
  subscriptionGrowth,
  summaryCards,
  toc,
  walklogFuture,
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
            SLOWBASE REPORT
          </p>
          <p className="text-sm font-bold text-stone-900">
            SeraMade案件 現状報告
          </p>
        </div>
        <a
          href="https://github.com/tatsuyakoike-cloud/tre-pro/blob/main/docs/slowbase-seramade-report.md"
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
                className="px-4 py-3 font-bold text-stone-500 last:text-right [&:not(:first-child)]:text-right"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className="border-b border-stone-100 last:border-0">
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

function LineChartMini() {
  const maxRevenue = 48000;
  const points = subscriptionGrowth.map((item, index) => {
    const x = (index / (subscriptionGrowth.length - 1)) * 100;
    const y = 100 - (item.monthlyRevenue / maxRevenue) * 100;
    return `${x},${y}`;
  });

  return (
    <div className="mt-6 rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50/80 to-white p-6">
      <h3 className="text-base font-bold text-stone-900">
        定期購入者が毎月1人増えた場合の月間売上
      </h3>
      <div className="mt-6 rounded-xl border border-stone-100 bg-white p-4">
        <svg viewBox="0 0 100 100" className="h-48 w-full" preserveAspectRatio="none">
          {[0, 25, 50, 75, 100].map((y) => (
            <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="#e7e5e4" strokeWidth="0.5" />
          ))}
          <polyline
            fill="none"
            stroke="#059669"
            strokeWidth="1.5"
            strokeLinejoin="round"
            points={points.join(" ")}
          />
        </svg>
        <div className="mt-3 flex justify-between text-[0.65rem] text-stone-500">
          <span>1ヶ月目</span>
          <span>6ヶ月目</span>
          <span>12ヶ月目（48,000円/月）</span>
        </div>
      </div>
      <p className="mt-4 rounded-xl bg-white px-4 py-3 text-sm leading-7 text-stone-700">
        1年目の定期購入売上合計は{" "}
        <strong className="font-bold text-emerald-800">312,000円</strong>。
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

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-6 space-y-4 text-sm leading-8 text-stone-700">{children}</div>
  );
}

export default function SlowBaseSeramadeReportPage() {
  return (
    <main className="min-h-screen scroll-smooth bg-stone-50 text-stone-900">
      <Header />

      <section className="relative overflow-hidden border-b border-stone-200 bg-white">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            background:
              "radial-gradient(circle at 15% 40%, #059669 0%, transparent 45%), radial-gradient(circle at 85% 20%, #a8a29e 0%, transparent 40%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="mb-4 inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-bold text-emerald-800">
            現状報告 · SeraMade · 売上導線の検証
          </p>
          <h1 className="max-w-3xl font-[family-name:var(--font-sb-serif)] text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
            SeraMade案件の
            <span className="text-emerald-700"> 現状と方向性</span>
          </h1>
          <p className="mt-2 text-lg font-medium text-stone-600 sm:text-xl">
            SlowBase event — 現状報告資料（slim版）
          </p>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-stone-600 sm:text-base">
            イベント運営ではなく、既存顧客の価値を売上につながる形にできるかを見る取り組み。
            初回実績・今後の検証・SlowBaseとしての考え方を整理した資料です。
          </p>
        </div>
      </section>

      <div className="mx-auto flex max-w-6xl gap-10 px-4 py-12 sm:px-6 sm:py-16">
        <Sidebar />

        <article className="min-w-0 flex-1 space-y-16 sm:space-y-20">
          <div className="grid gap-4 sm:grid-cols-2">
            {summaryCards.map((card) => (
              <div
                key={card.label}
                className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm"
              >
                <p className="text-xs font-bold text-emerald-700">{card.label}</p>
                <p className="mt-1 text-lg font-bold leading-snug text-stone-900">
                  {card.value}
                </p>
                <p className="mt-1 text-xs text-stone-500">{card.sub}</p>
              </div>
            ))}
          </div>

          <section id="axis" className="scroll-mt-24">
            <SectionHeading id="axis-heading" kicker="PHILOSOPHY" title="1. SlowBaseの軸" />
            <blockquote className="mt-6 rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-stone-50 p-6 sm:p-8">
              <p className="font-[family-name:var(--font-sb-serif)] text-xl font-bold leading-relaxed text-stone-900 sm:text-2xl">
                唯一無二の価値を
                <br />
                あるべき姿に
              </p>
              <Prose>
                <p>
                  まだ言葉になっていない魅力がある。まだ誰にも見せていない景色がある。
                  SlowBaseは、自然・地域・生業・体験の中にある価値を見つけて、伝わる形に整えて、成果につなげていく会社です。
                </p>
                <p className="font-bold text-emerald-900">
                  前提として、SlowBaseはイベント運営会社ではありません。
                  今回のSeraMadeの話も、既存顧客の中にある価値を、売上につながる形にできるかを見る取り組みです。
                </p>
              </Prose>
            </blockquote>
          </section>

          <section id="status" className="scroll-mt-24">
            <SectionHeading id="status-heading" kicker="STATUS" title="2. 現状の整理" />
            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-stone-200 bg-white p-6">
                <h3 className="font-bold text-stone-900">2-1. 新規事業の状況</h3>
                <Prose>
                  <p>
                    お酒関連の支援や撮影営業を進めていますが、現時点では大きく進んでいるとは言いづらい状況です。
                    「撮影を取れば、その後の仕事も広がる」と考えすぎるのは少し危ないと思っています。
                  </p>
                </Prose>
              </div>
              <div className="rounded-2xl border border-emerald-100 bg-emerald-50/40 p-6">
                <h3 className="font-bold text-stone-900">2-2. 今後の方向性</h3>
                <Prose>
                  <p>
                    現実的なヒントとして見たいのが、SeraMadeの事例です。すでに以下の支援を行っています。
                  </p>
                </Prose>
                <BulletList items={seramadeSupport} />
                <p className="mt-4 text-sm leading-7 text-stone-700">
                  ヨガイベントへの協賛が出てきましたが、見たいのはイベントそのものではなく、
                  <strong className="font-bold text-emerald-900">
                    SeraMadeの商品が、リアルな接点を通じて売上につながるか
                  </strong>
                  です。
                </p>
              </div>
            </div>
          </section>

          <section id="seramade" className="scroll-mt-24">
            <SectionHeading id="seramade-heading" kicker="SERAMADE" title="3. SeraMadeの現状" />
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-stone-200 bg-white p-6">
                <h3 className="font-bold text-stone-900">3-1. ヨガイベントへの協賛</h3>
                <Prose>
                  <p>
                    Walklog社のヨガイベントに協賛し、青パパイヤドリンクなどを出品。
                    健康・美容・体のケアに関心がある人が集まり、商品との相性は悪くありません。
                  </p>
                </Prose>
                <div className="mt-4 flex flex-wrap gap-2">
                  {eventSchedule.map((date) => (
                    <span
                      key={date}
                      className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800"
                    >
                      {date}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-xs text-stone-500">毎回50人前後 · 小さく検証するにはちょうど良い</p>
              </div>
              <div className="rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-700 to-emerald-900 p-6 text-white">
                <h3 className="font-bold">3-2. 反応と実績</h3>
                <p className="mt-4 text-4xl font-bold tabular-nums">5本</p>
                <p className="mt-1 text-sm text-white/80">単体販売 · 20,000円</p>
                <Prose>
                  <p className="text-white/85">
                    SNS上で反応あり。過去にはイベントをきっかけに定期購入につながった実績も。
                    大事なのは、イベントをきっかけに購入や定期購入につながる流れを作れるかです。
                  </p>
                </Prose>
              </div>
            </div>
          </section>

          <section id="simulation" className="scroll-mt-24">
            <SectionHeading
              id="simulation-heading"
              kicker="REVENUE"
              title="4. 売上シミュレーション"
              description="ドリンク1本4,000円。月1回イベント（年12回）の試算。"
            />
            <DataTable
              headers={["1回あたり販売本数", "1回あたり売上", "年間売上（月1回）"]}
              rows={oneTimeSales.map((row) => [
                `${row.perEvent}本`,
                row.revenuePerEvent,
                row.annualRevenue,
              ])}
            />
            <BarChart
              title="SeraMade イベント経由の年間売上"
              description="5本→10本→20本と改善していけば、餅田農園側の売上に効いてくる可能性があります。"
              data={oneTimeSales}
              valueKey="annualRevenue"
              labelKey="case"
              maxValue={2400000}
            />
          </section>

          <section id="subscription" className="scroll-mt-24">
            <SectionHeading id="subscription-heading" kicker="SUBSCRIPTION" title="5. 定期購入が取れるとさらに大きい" />
            <Prose>
              <p>
                当日の販売本数だけではなく、定期購入につながるかが一番見たいポイントです。
                月1本購入で1人あたり年間{" "}
                <strong className="font-bold text-emerald-800">48,000円</strong>。
              </p>
            </Prose>
            <LineChartMini />
          </section>

          <section id="combined" className="scroll-mt-24">
            <SectionHeading id="combined-heading" kicker="COMBINED" title="7. 単体販売と定期購入を合わせた場合" />
            <DataTable
              headers={["ケース", "単体販売（年間）", "定期購入（年間）", "合計年間売上"]}
              rows={combinedSales.map((row) => [
                row.case,
                row.oneTime,
                row.subscription,
                row.total,
              ])}
            />
            <BarChart
              title="単体販売と定期購入を合わせた年間売上"
              description="20本で1,272,000円、50本で2,712,000円。SeraMadeの販促施策として続ける意味が出てきます。"
              data={combinedSales.map((row) => ({
                case: row.case,
                total: row.total,
              }))}
              valueKey="total"
              labelKey="case"
              maxValue={2712000}
            />
          </section>

          <section id="slowbase-view" className="scroll-mt-24">
            <SectionHeading id="slowbase-view-heading" kicker="SLOWBASE" title="8. SlowBaseとして見たいこと" />
            <BulletList items={slowbaseFocus} />
            <p className="mt-4 text-sm leading-7 text-stone-600">
              結果が出れば支援価値を見せやすくなり、将来的に以下の費用をいただく流れも作りやすくなります。
            </p>
            <BulletList items={futureFees} />
            <p className="mt-4 rounded-xl border border-emerald-100 bg-emerald-50/50 px-4 py-3 text-sm font-bold text-emerald-900">
              イベントをやることが目的ではなく、イベントをきっかけに売上につながる導線を作れるかを見ることが目的です。
            </p>
          </section>

          <section id="walklog" className="scroll-mt-24">
            <SectionHeading id="walklog-heading" kicker="WALKLOG" title="9. Walklogとの今後の可能性" />
            <Prose>
              <p>
                Walklog代表の樋高さんは元Amazon出身でECの知見あり。Walklog側でもECを作っていく予定のため、以下の領域に広がる可能性があります。
              </p>
            </Prose>
            <BulletList items={walklogFuture} />
          </section>

          <section id="next" className="scroll-mt-24">
            <SectionHeading id="next-heading" kicker="NEXT" title="10. 次にやること" />
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-6">
                <p className="text-sm font-bold text-emerald-800">7月25日 — 出してみる回</p>
                <BulletList items={julyPoints} />
              </div>
              <div className="rounded-2xl border border-stone-200 bg-white p-6">
                <p className="text-sm font-bold text-stone-900">8月22日 — 改善する回</p>
                <BulletList items={augustImprovements} />
              </div>
            </div>
          </section>

          <section id="metrics" className="scroll-mt-24">
            <SectionHeading id="metrics-heading" kicker="METRICS" title="11. 毎回記録する数字" />
            <div className="mt-6 overflow-x-auto rounded-2xl border border-stone-200 bg-white">
              <table className="w-full min-w-[560px] text-left text-sm">
                <thead>
                  <tr className="border-b border-stone-100 bg-stone-50">
                    <th className="px-4 py-3 font-bold text-stone-500">項目</th>
                    <th className="px-4 py-3 font-bold text-stone-500">見る理由</th>
                  </tr>
                </thead>
                <tbody>
                  {metrics.map((row) => (
                    <tr key={row.item} className="border-b border-stone-100 last:border-0">
                      <td className="px-4 py-3 font-medium text-stone-800">{row.item}</td>
                      <td className="px-4 py-3 text-stone-600">{row.reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="summary" className="scroll-mt-24">
            <SectionHeading id="summary-heading" kicker="SUMMARY" title="12. まとめ" />
            <div className="mt-6 rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-700 to-emerald-900 p-6 text-white sm:p-8">
              <Prose>
                <p className="text-white/90">
                  SlowBaseはイベント運営会社ではありません。SeraMade支援も、イベントを運営するための話ではありません。
                  SNS運用、EC販売支援、リアルイベントでの反応を見ながら、売上につながる導線を作れるかを試す取り組みです。
                </p>
                <p className="text-white/90">
                  お酒の支援や撮影営業から大きく案件が広がっているわけではないからこそ、
                  今すでに動いているSeraMadeの事例から、SlowBaseが今後目指す方向のヒントを見つけたいです。
                </p>
              </Prose>
              <p className="mt-6 text-sm font-bold leading-8 text-lime-200">
                SeraMadeの売上を上げる → 支援価値を見せる → 販促・SNS・EC・月次改善支援として費用をいただける。
                この流れが作れれば、撮影だけに頼らない仕事の形が見えてきます。
              </p>
            </div>
          </section>
        </article>
      </div>

      <footer className="border-t border-stone-200 bg-white px-4 py-10">
        <div className="mx-auto max-w-6xl text-center text-xs text-stone-400">
          <p>SlowBase event — SeraMade案件 現状報告（slim版）</p>
          <p className="mt-1">
            Web版: /tre-pro/slowbase-seramade-report/ ·{" "}
            <a
              href="https://github.com/tatsuyakoike-cloud/tre-pro/blob/main/docs/slowbase-seramade-report.md"
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
