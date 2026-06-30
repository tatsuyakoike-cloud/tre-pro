import type { ReactNode } from "react";
import "./trepro-sales.css";
import {
  navItems,
  heroSummaryCards,
  currentStateMessage,
  idealStateCards,
  strategyAxes,
  onlineIdealState,
  roadmapWeeks,
  certaintyRules,
  priorityAxes,
  lossReasons,
  tierDefinitions,
  tier2Details,
  mailTierPolicy,
  mailStatuses,
  kpiDefinitions,
  roles,
  raciHeaders,
  raciRows,
  nextActions,
  mermaidCharts,
} from "./trepro-sales-content";
import {
  MermaidDiagram,
  KpiCardsFromJson,
  CacLtvCharts,
  TierDonutChart,
  FunnelChart,
  WeeklyKpiChart,
  CacRatioChart,
} from "./trepro-sales-client";

function SectionHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <header className="tp-section-head">
      <p className="tp-eyebrow">{eyebrow}</p>
      <h2 className="tp-h2">{title}</h2>
      {lead && <p className="tp-lead">{lead}</p>}
    </header>
  );
}

function DataTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: ReactNode[][];
}) {
  return (
    <div className="tp-table-wrap">
      <table className="tp-table">
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
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

export default function TreproSalesLp() {
  return (
    <div className="tp-root">
      <header className="tp-header">
        <p className="tp-logo">TREPRO SALES PROTOTYPE</p>
        <nav className="tp-nav" aria-label="ページ内ナビ">
          {navItems.slice(0, 8).map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>
        <details className="tp-nav-mobile">
          <summary aria-label="メニューを開く">目次</summary>
          <div className="tp-nav-mobile-panel">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`}>
                {item.label}
              </a>
            ))}
          </div>
        </details>
      </header>

      <section id="hero" className="tp-hero scroll-mt-24">
        <div className="tp-container">
          <p className="tp-hero-kicker">EXECUTIVE SUMMARY</p>
          <h1 className="tp-hero-title">トレプロ営業プロトタイプ構築方針</h1>
          <p className="tp-hero-sub">
            オフライン営業とオンライン仕組み化を両輪に、7月・8月で営業回復の型を作る
          </p>
          <p className="tp-hero-message">
            広告依存だけで新規獲得を続ける状態から、
            オフライン営業とオンライン営業を組み合わせ、
            既存リストを営業資産として活用する営業プロトタイプへ移行する。
          </p>
          <div className="tp-summary-grid">
            {heroSummaryCards.map((card) => (
              <div key={card.title} className="tp-summary-card">
                <div className="tp-summary-icon" aria-hidden="true">
                  {card.icon}
                </div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="current-state" className="tp-section scroll-mt-24">
        <div className="tp-container">
          <SectionHeader
            eyebrow="CURRENT STATE"
            title="現状認識 — CAC悪化とLTV低下"
            lead="獲得コストと回収のバランス悪化が、営業プロトタイプ構築の背景にある。"
          />
          <div className="tp-split">
            <div>
              <div className="tp-prose">
                {currentStateMessage.map((paragraph) => (
                  <p key={paragraph.slice(0, 20)}>{paragraph}</p>
                ))}
              </div>
              <KpiCardsFromJson />
            </div>
            <CacLtvCharts />
          </div>
          <div style={{ marginTop: 24 }}>
            <MermaidDiagram chart={mermaidCharts.deterioration} />
          </div>
        </div>
      </section>

      <section id="ideal-state" className="tp-section is-soft scroll-mt-24">
        <div className="tp-container">
          <SectionHeader
            eyebrow="IDEAL STATE"
            title="目指す営業体制"
            lead="広告費をかけ続けなくても、既存リストと営業プロセスで継続的に商談と受注を生み出す。"
          />
          <div className="tp-grid-3">
            {idealStateCards.map((card) => (
              <div key={card.area} className="tp-panel">
                <h3>{card.area}</h3>
                <p>{card.state}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 24 }}>
            <MermaidDiagram chart={mermaidCharts.idealModel} />
          </div>
        </div>
      </section>

      <section id="strategy" className="tp-section scroll-mt-24">
        <div className="tp-container">
          <SectionHeader
            eyebrow="STRATEGY"
            title="営業戦略の二軸"
            lead="オフラインとオンラインを対立させず、短期売上と中長期基盤を同時に作る。"
          />
          <DataTable
            headers={["軸", "主担当", "目的", "主な動き"]}
            rows={strategyAxes.map((row) => [row.axis, row.owner, row.purpose, row.actions])}
          />
          <div style={{ marginTop: 24 }}>
            <MermaidDiagram chart={mermaidCharts.twoLane} />
          </div>
        </div>
      </section>

      <section id="online" className="tp-section is-soft scroll-mt-24">
        <div className="tp-container">
          <SectionHeader
            eyebrow="ONLINE SALES"
            title="オンライン営業・マーケティングのあるべき姿"
            lead="既存リストを営業資産に変えるための仕組み。"
          />
          <DataTable
            headers={["項目", "あるべき状態"]}
            rows={onlineIdealState.map((row) => [row.item, row.state])}
          />
          <div className="tp-grid-2" style={{ marginTop: 24 }}>
            <MermaidDiagram chart={mermaidCharts.onlineFunnel} />
            <FunnelChart />
          </div>
        </div>
      </section>

      <section id="roadmap" className="tp-section scroll-mt-24">
        <div className="tp-container">
          <SectionHeader
            eyebrow="ROADMAP"
            title="7月・8月 週次ロードマップ"
            lead="7月第1週から週次で「何をするか」「誰が担当するか」「成果物は何か」を追える。"
          />
          <div className="tp-roadmap-cards">
            {roadmapWeeks.map((week) => (
              <article key={week.week} className="tp-roadmap-card">
                <div className="tp-roadmap-card-head">
                  <span className="tp-roadmap-week">{week.week}</span>
                  <span className="tp-roadmap-period">{week.period}</span>
                  <span className="tp-roadmap-phase">{week.phase}</span>
                </div>
                <dl>
                  <div>
                    <dt>オンライン営業</dt>
                    <dd>{week.online}</dd>
                  </div>
                  <div>
                    <dt>オフライン営業</dt>
                    <dd>{week.offline}</dd>
                  </div>
                  <div>
                    <dt>成果物</dt>
                    <dd>{week.deliverables}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
          <div className="tp-gantt-scroll" style={{ marginTop: 24 }}>
            <MermaidDiagram chart={mermaidCharts.gantt} />
          </div>
        </div>
      </section>

      <section id="foundation" className="tp-section is-soft scroll-mt-24">
        <div className="tp-container">
          <SectionHeader
            eyebrow="FOUNDATION"
            title="土台設計 — 確度・優先順位・失注理由"
          />
          <DataTable
            headers={["成約角度", "定義", "主な状態"]}
            rows={certaintyRules.map((row) => [row.rate, row.def, row.state])}
          />
          <div style={{ marginTop: 24 }}>
            <DataTable
              headers={["補助軸", "優先度が上がる条件"]}
              rows={priorityAxes.map((row) => [row.axis, row.condition])}
            />
          </div>
          <div style={{ marginTop: 24 }}>
            <DataTable
              headers={["失注理由", "再アプローチ方針", "送付すべき資料"]}
              rows={lossReasons.map((row) => [row.reason, row.approach, row.material])}
            />
          </div>
        </div>
      </section>

      <section id="tier" className="tp-section scroll-mt-24">
        <div className="tp-container">
          <SectionHeader
            eyebrow="TIER DESIGN"
            title="Tier設計"
            lead="成約角度と情報の濃さで優先度を整理し、配信対象を決める。"
          />
          <div className="tp-split">
            <div>
              <DataTable
                headers={["Tier", "成約角度", "目的", "初回アクション"]}
                rows={tierDefinitions.map((row) => [
                  row.tier,
                  row.rate,
                  row.purpose,
                  row.action,
                ])}
              />
              <div style={{ marginTop: 24 }}>
                <DataTable
                  headers={["詳細Tier", "条件", "対応方針"]}
                  rows={tier2Details.map((row) => [row.sub, row.condition, row.policy])}
                />
              </div>
            </div>
            <div>
              <div className="tp-matrix">{`縦軸：情報の濃さ・決裁者接点
高い ↑
     | Tier 2-A        Tier 1
     | Tier 2-B        Tier 1候補
     | Tier 3          Tier 2-C
低い +----------------------------→ 成約角度
       10%           20%        40%以上`}</div>
              <div style={{ marginTop: 24 }}>
                <TierDonutChart />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="operation" className="tp-section is-soft scroll-mt-24">
        <div className="tp-container">
          <SectionHeader
            eyebrow="OPERATION"
            title="メール配信・架電・商談運用"
          />
          <DataTable
            headers={["Tier", "配信目的", "送付物", "CTA"]}
            rows={mailTierPolicy.map((row) => [row.tier, row.purpose, row.material, row.cta])}
          />
          <div style={{ marginTop: 24 }}>
            <DataTable
              headers={["ステータス", "定義", "次アクション"]}
              rows={mailStatuses.map((row) => [row.status, row.def, row.next])}
            />
          </div>
          <div style={{ marginTop: 24 }}>
            <MermaidDiagram chart={mermaidCharts.mailSequence} />
          </div>
        </div>
      </section>

      <section id="kpi" className="tp-section scroll-mt-24">
        <div className="tp-container">
          <SectionHeader
            eyebrow="KPI"
            title="KPI / CAC管理"
            lead="週次で活動量・転換率・採算性を追い、改善に反映する。"
          />
          <DataTable
            headers={["KPI", "内容", "目的"]}
            rows={kpiDefinitions.map((row) => [row.kpi, row.content, row.purpose])}
          />
          <div className="tp-grid-2" style={{ marginTop: 24 }}>
            <WeeklyKpiChart />
            <CacRatioChart />
          </div>
        </div>
      </section>

      <section id="roles" className="tp-section is-soft scroll-mt-24">
        <div className="tp-container">
          <SectionHeader eyebrow="ROLES" title="役割分担" />
          <DataTable
            headers={["役割", "担当", "主な責任"]}
            rows={roles.map((row) => [row.role, row.owner, row.responsibility])}
          />
          <div style={{ marginTop: 24 }}>
            <DataTable headers={raciHeaders} rows={raciRows} />
            <p className="tp-lead" style={{ marginTop: 12 }}>
              A = Accountable / 最終責任 · R = Responsible / 実行責任 · C = Consulted / 相談 · I = Informed / 共有
            </p>
          </div>
        </div>
      </section>

      <section id="next-action" className="tp-section scroll-mt-24">
        <div className="tp-container">
          <SectionHeader
            eyebrow="NEXT ACTION"
            title="直近48時間の実行項目（7月第1週の初動）"
          />
          <DataTable
            headers={["優先度", "実行項目", "担当", "成果物"]}
            rows={nextActions.map((row) => [
              row.priority === "高" ? (
                <span className="tp-priority-high">{row.priority}</span>
              ) : (
                row.priority
              ),
              row.task,
              row.owner,
              row.deliverable,
            ])}
          />
        </div>
      </section>

      <footer className="tp-footer">
        <div className="tp-container">
          <p>トレプロ営業プロトタイプ構築方針 — 社内共有用ドキュメント</p>
          <p style={{ marginTop: 8 }}>
            KPIデータは <code>app/trepro-sales-prototype/data/</code> の JSON を更新してください
          </p>
        </div>
      </footer>
    </div>
  );
}
