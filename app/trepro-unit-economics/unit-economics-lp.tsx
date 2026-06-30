import type { ReactNode } from "react";
import "./unit-economics.css";
import metricsRaw from "./data/metrics.json";
import {
  navItems,
  heroCards,
  conclusionEndState,
  conclusionActions,
  currentChallenges,
  crisisMetrics,
  formulas,
  ueExamples,
  plainExplanation,
  aggregationFlow,
  aggregationTiming,
  costFormula,
  cacFormula,
  leadMetrics,
  aggregationNotes,
  endGoals,
  offlineStrategy,
  onlineStrategy,
  rationaleSections,
  callPlan,
  abTest,
  certaintyRules,
  tierDefinitions,
  tier2Details,
  roadmapWeeks,
  executiveSummary,
} from "./unit-economics-content";

type MetricsJson = {
  ltvPerDeal: number;
  totalCost: number;
  minRatio: number;
  targetRatio: number;
  currentDeals: number;
  minDealsFor10M: number;
  unit: string;
  note: string;
};

const metrics = metricsRaw as MetricsJson;

function SectionHead({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <header className="ue-section-head">
      <p className="ue-eyebrow">{eyebrow}</p>
      <h2 className="ue-h2">{title}</h2>
      {lead && <p className="ue-lead">{lead}</p>}
    </header>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="ue-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function DataTable({
  headers,
  rows,
  rowClass,
}: {
  headers: string[];
  rows: ReactNode[][];
  rowClass?: (index: number) => string | undefined;
}) {
  return (
    <div className="ue-table-wrap">
      <table className="ue-table">
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className={rowClass?.(index)}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SimulationTable() {
  const { ltvPerDeal, totalCost, minRatio, targetRatio, currentDeals, unit, note } =
    metrics;

  const rows = [1, 2, 3, 4, 5].map((deals) => {
    const ltvTotal = ltvPerDeal * deals;
    const ratio = ltvTotal / totalCost;
    return {
      deals,
      ltvTotal,
      ratio: `${ratio.toFixed(1)}倍`,
    };
  });

  return (
    <>
      <div className="ue-table-wrap">
        <table className="ue-table">
          <thead>
            <tr>
              <th>成約数（N件）</th>
              <th>LTV合計</th>
              <th>獲得コスト</th>
              <th>ユニットエコノミクス</th>
              <th>判定</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => {
              const ratioNum = row.deals;
              let rowClass = "";
              let judgment = "";
              if (row.deals === currentDeals) {
                rowClass = "is-current";
                judgment = "現状";
              } else if (ratioNum === minRatio) {
                rowClass = "is-min";
                judgment = `最低ライン（${minRatio}倍）`;
              } else if (ratioNum === targetRatio) {
                rowClass = "is-target";
                judgment = `目標ライン（${targetRatio}倍）`;
              } else if (ratioNum < minRatio) {
                judgment = "不足";
              } else {
                judgment = "達成";
              }
              return (
                <tr key={row.deals} className={rowClass || undefined}>
                  <td>{row.deals}件</td>
                  <td>
                    {row.ltvTotal.toLocaleString()}
                    {unit}
                  </td>
                  <td>
                    {totalCost.toLocaleString()}
                    {unit}
                  </td>
                  <td>{row.ratio}</td>
                  <td>{judgment}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="ue-note">
        前提：1社あたりLTV {ltvPerDeal}
        {unit}、獲得コスト総額 {totalCost}
        {unit}。{note}
      </p>
    </>
  );
}

function RoadmapSection() {
  return (
    <>
      <div className="ue-roadmap-desktop">
        <div className="ue-table-wrap">
          <table className="ue-table ue-roadmap-table">
            <thead>
              <tr>
                <th>週</th>
                <th>カテゴリ</th>
                <th>実行内容</th>
              </tr>
            </thead>
            <tbody>
              {roadmapWeeks.flatMap((week) =>
                week.items.map((item, index) => (
                  <tr key={`${week.week}-${item.category}`}>
                    {index === 0 ? (
                      <td rowSpan={week.items.length}>{week.week}</td>
                    ) : null}
                    <td>{item.category}</td>
                    <td>
                      <ul className="ue-list">
                        {item.lines.map((line) => (
                          <li key={line}>{line}</li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="ue-roadmap-mobile">
        {roadmapWeeks.map((week) => (
          <article key={week.week} className="ue-roadmap-card">
            <h3 className="ue-roadmap-week">{week.week}</h3>
            {week.items.map((item) => (
              <div key={item.category} className="ue-roadmap-block">
                <h4>{item.category}</h4>
                <BulletList items={item.lines} />
              </div>
            ))}
          </article>
        ))}
      </div>
    </>
  );
}

export default function UnitEconomicsLp() {
  return (
    <div className="ue-root">
      <header className="ue-header">
        <p className="ue-logo">TREPRO UNIT ECONOMICS</p>
        <nav className="ue-nav" aria-label="ページ内ナビ">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>
        <details className="ue-nav-mobile">
          <summary aria-label="メニューを開く">目次</summary>
          <div className="ue-nav-mobile-panel">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`}>
                {item.label}
              </a>
            ))}
          </div>
        </details>
      </header>

      <section className="ue-hero">
        <div className="ue-container">
          <p className="ue-kicker">EXECUTIVE SUMMARY</p>
          <h1 className="ue-hero-title">トレプロ営業方針・ユニットエコノミクス改善計画</h1>
          <p className="ue-hero-sub">
            営業方針を「感覚」ではなく、CAC・LTV・ユニットエコノミクスで判断できる状態にする。
          </p>
          <div className="ue-summary-grid">
            {heroCards.map((card) => (
              <div key={card.title} className="ue-summary-card">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="summary" className="ue-section scroll-mt-24">
        <div className="ue-container">
          <SectionHead eyebrow="CONCLUSION" title="8月末までに作る状態" />
          <div className="ue-panel">
            <BulletList items={conclusionEndState} />
          </div>
          <div className="ue-grid-2" style={{ marginTop: 16 }}>
            <div className="ue-panel">
              <h3>7月〜8月：オフライン営業</h3>
              <BulletList items={conclusionActions.offline} />
            </div>
            <div className="ue-panel">
              <h3>7月〜8月：オンライン営業</h3>
              <BulletList items={conclusionActions.online} />
            </div>
          </div>
          <div className="ue-panel" style={{ marginTop: 16 }}>
            <h3>共通</h3>
            <BulletList items={conclusionActions.common} />
          </div>
          <div className="ue-executive">
            <h3>社長向けサマリー</h3>
            <BulletList items={executiveSummary} />
          </div>
        </div>
      </section>

      <section id="current" className="ue-section is-soft scroll-mt-24">
        <div className="ue-container">
          <SectionHead eyebrow="CURRENT STATE" title="現状認識" />
          <div className="ue-panel">
            <h3>現在の課題</h3>
            <BulletList items={currentChallenges} />
          </div>
          <div style={{ marginTop: 20 }}>
            <h3 className="ue-h2" style={{ fontSize: "1.1rem", marginBottom: 16 }}>
              数字上の危機感
            </h3>
            <div className="ue-grid-3">
              {crisisMetrics.map((item) => (
                <div
                  key={item.label}
                  className={`ue-kpi-card${item.accent ? " is-alert" : ""}`}
                >
                  <p className="ue-kpi-label">{item.label}</p>
                  <p className="ue-kpi-value">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="ue" className="ue-section scroll-mt-24">
        <div className="ue-container">
          <SectionHead
            eyebrow="UNIT ECONOMICS"
            title="ユニットエコノミクスの考え方"
            lead="何件売れたかだけでなく、いくら使って、いくら返ってくるかで判断する。"
          />
          <div className="ue-formula-grid">
            {formulas.map((formula) => (
              <div key={formula.title} className="ue-formula-card">
                <h3>{formula.title}</h3>
                <code className="ue-formula-inline">{formula.expression}</code>
                {formula.sub && <p>{formula.sub}</p>}
              </div>
            ))}
          </div>
          <div style={{ marginTop: 24 }}>
            <h3 className="ue-h2" style={{ fontSize: "1.1rem", marginBottom: 16 }}>
              シミュレーション表
            </h3>
            <SimulationTable />
          </div>
          <div className="ue-grid-2" style={{ marginTop: 24 }}>
            <div className="ue-panel">
              <h3>誰でも分かる説明</h3>
              <BulletList items={plainExplanation} />
            </div>
            <div className="ue-panel">
              <h3>具体例</h3>
              <DataTable
                headers={["獲得コスト", "LTV合計", "倍率", "意味"]}
                rows={ueExamples.map((ex) => [ex.cost, ex.return, ex.ratio, ex.note])}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="aggregation" className="ue-section is-soft scroll-mt-24">
        <div className="ue-container">
          <SectionHead eyebrow="AGGREGATION" title="添付資料から反映する集計ロジック" />
          <div className="ue-panel">
            <h3>集計の全体像</h3>
            <BulletList items={aggregationFlow} />
          </div>
          <div style={{ marginTop: 16 }}>
            <DataTable
              headers={["タイミング", "種別"]}
              rows={aggregationTiming.map((row) => [row.timing, row.type])}
            />
          </div>
          <div className="ue-grid-2" style={{ marginTop: 16 }}>
            <div className="ue-formula-card">
              <h3>費用指標</h3>
              <code className="ue-formula-inline">{costFormula}</code>
            </div>
            <div className="ue-formula-card">
              <h3>CACの算出</h3>
              <code className="ue-formula-inline">{cacFormula}</code>
            </div>
          </div>
          <div className="ue-panel" style={{ marginTop: 16 }}>
            <h3>リード・成約指標</h3>
            <ul className="ue-tag-list">
              {leadMetrics.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="ue-panel" style={{ marginTop: 16 }}>
            <h3>運用上の注意</h3>
            <BulletList items={aggregationNotes} />
          </div>
        </div>
      </section>

      <section id="goal" className="ue-section scroll-mt-24">
        <div className="ue-container">
          <SectionHead eyebrow="GOAL" title="8月末の目標状態" />
          <div className="ue-panel">
            <BulletList items={endGoals} />
          </div>
        </div>
      </section>

      <section id="strategy" className="ue-section is-soft scroll-mt-24">
        <div className="ue-container">
          <SectionHead eyebrow="STRATEGY" title="営業戦略の二軸" />
          <div className="ue-split-strategy">
            <div className="ue-strategy-panel">
              <h3>オフライン営業</h3>
              <p className="ue-purpose">{offlineStrategy.purpose}</p>
              <h4 style={{ fontSize: 12, margin: "0 0 8px", color: "#666" }}>主な動き</h4>
              <BulletList items={offlineStrategy.actions} />
              <h4 style={{ fontSize: 12, margin: "16px 0 8px", color: "#666" }}>検証テーマ</h4>
              <BulletList items={offlineStrategy.themes} />
            </div>
            <div className="ue-strategy-panel">
              <h3>オンライン営業・仕組み化</h3>
              <p className="ue-purpose">{onlineStrategy.purpose}</p>
              <h4 style={{ fontSize: 12, margin: "0 0 8px", color: "#666" }}>主な動き</h4>
              <BulletList items={onlineStrategy.actions} />
              <h4 style={{ fontSize: 12, margin: "16px 0 8px", color: "#666" }}>検証テーマ</h4>
              <BulletList items={onlineStrategy.themes} />
            </div>
          </div>
        </div>
      </section>

      <section id="rationale" className="ue-section scroll-mt-24">
        <div className="ue-container">
          <SectionHead eyebrow="RATIONALE" title="施策の根拠" />
          {rationaleSections.map((section) => (
            <div key={section.title} className="ue-panel" style={{ marginTop: section === rationaleSections[0] ? 0 : 16 }}>
              <h3>{section.title}</h3>
              <BulletList items={section.points} />
            </div>
          ))}
        </div>
      </section>

      <section id="call-plan" className="ue-section is-soft scroll-mt-24">
        <div className="ue-container">
          <SectionHead eyebrow="CALL PLAN" title="架電計画" />
          <div className="ue-grid-2">
            <div className="ue-panel">
              <h3>目的</h3>
              <BulletList items={callPlan.purpose} />
              <p style={{ marginTop: 16, fontSize: 14 }}>
                <strong>期間：</strong>
                {callPlan.period}
                <br />
                <strong>目標：</strong>
                {callPlan.target}
              </p>
            </div>
            <div className="ue-panel">
              <h3>担当</h3>
              <BulletList items={callPlan.owners} />
            </div>
          </div>
          <div className="ue-grid-2" style={{ marginTop: 16 }}>
            <div className="ue-panel">
              <h3>対象</h3>
              <BulletList items={callPlan.targets} />
            </div>
            <div className="ue-panel">
              <h3>取得するデータ</h3>
              <BulletList items={callPlan.dataPoints} />
            </div>
          </div>
          <div className="ue-panel" style={{ marginTop: 16 }}>
            <h3>7月2週目中旬に確認すること</h3>
            <BulletList items={callPlan.midJulyChecks} />
          </div>
        </div>
      </section>

      <section id="ab-test" className="ue-section scroll-mt-24">
        <div className="ue-container">
          <SectionHead eyebrow="A/B TEST" title="代理店戦略：値引きABテスト" lead={abTest.purpose} />
          <div className="ue-panel">
            <h3>背景</h3>
            <BulletList items={abTest.background} />
          </div>
          <div className="ue-grid-2" style={{ marginTop: 16 }}>
            <div className="ue-panel">
              <h3>コントロール群</h3>
              <BulletList items={abTest.control} />
            </div>
            <div className="ue-panel">
              <h3>テスト群</h3>
              <BulletList items={abTest.test} />
            </div>
          </div>
          <div style={{ marginTop: 16 }}>
            <DataTable
              headers={["次の10件で見る指標"]}
              rows={abTest.metrics.map((m) => [m])}
            />
          </div>
          <div className="ue-panel" style={{ marginTop: 16 }}>
            <h3>判断基準</h3>
            <BulletList items={abTest.criteria} />
          </div>
        </div>
      </section>

      <section id="tier" className="ue-section is-soft scroll-mt-24">
        <div className="ue-container">
          <SectionHead eyebrow="TIER" title="確度定義とTier設計" />
          <DataTable
            headers={["成約角度", "定義", "対応"]}
            rows={certaintyRules.map((row) => [row.rate, row.def, row.action])}
          />
          <div style={{ marginTop: 24 }}>
            <DataTable
              headers={["Tier", "対象", "目的", "送付物", "追客"]}
              rows={tierDefinitions.map((row) => [
                row.tier,
                row.target,
                row.purpose,
                row.material,
                row.follow,
              ])}
            />
          </div>
          <div style={{ marginTop: 24 }}>
            <DataTable
              headers={["詳細Tier", "条件", "対応方針"]}
              rows={tier2Details.map((row) => [row.sub, row.condition, row.policy])}
            />
          </div>
        </div>
      </section>

      <section id="roadmap" className="ue-section scroll-mt-24">
        <div className="ue-container">
          <SectionHead
            eyebrow="ROADMAP"
            title="7月・8月ロードマップ"
            lead="PCは横長テーブル、スマホは週ごとの縦カードで表示。"
          />
          <RoadmapSection />
        </div>
      </section>

      <footer className="ue-footer">
        <div className="ue-container">
          <p>トレプロ営業方針・ユニットエコノミクス改善計画 — 社内共有用ドキュメント</p>
          <p className="ue-note">
            数値データは app/trepro-unit-economics/data/metrics.json を更新してください
          </p>
        </div>
      </footer>
    </div>
  );
}
