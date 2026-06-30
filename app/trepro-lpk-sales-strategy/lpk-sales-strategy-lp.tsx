import type { ReactNode } from "react";
import "./lpk-sales-strategy.css";
import {
  navItems,
  policyAxesTable,
  policyRationale,
  augustEndState,
  currentChallengesTable,
  responsePolicy,
  keyMetrics,
  metricsPremise,
  metricsProvisionalNote,
  metricsTaxBasis,
  metricsDefinitions,
  metricsNotes,
  simulationRows,
  augustTargets,
  offlineStrategy,
  onlineStrategy,
  tierDefinitions,
  tierCertaintyRules,
  tierApproaches,
  roadmapRows,
  roadmapAssignees,
  abTestPolicy,
  crmMeasures,
} from "./lpk-sales-strategy-content";

function SectionHead({
  eyebrow,
  title,
  lead,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
}) {
  return (
    <header className="lpk-section-head">
      {eyebrow && <p className="lpk-eyebrow">{eyebrow}</p>}
      <h2 className="lpk-h2">{title}</h2>
      {lead && <p className="lpk-lead">{lead}</p>}
    </header>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="lpk-list">
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
  className,
}: {
  headers: string[];
  rows: ReactNode[][];
  rowClass?: (index: number) => string | undefined;
  className?: string;
}) {
  return (
    <div className="lpk-table-wrap">
      <table className={`lpk-table${className ? ` ${className}` : ""}`}>
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

function formatRatio(ratio: number) {
  return Number.isInteger(ratio) ? `${ratio.toFixed(1)}倍` : `${ratio.toFixed(2)}倍`;
}

function SimulationSection() {
  return (
    <>
      <h3 className="lpk-subsection-title">
        CAC約700万円、1社あたりLTV330万円で試算
      </h3>
      <div className="lpk-table-desktop-only">
        <DataTable
          headers={["成約数", "LTV合計", "LTV/CAC倍率", "判定"]}
          rows={simulationRows.map((row) => [
            `${row.deals}社`,
            `${row.ltvTotal.toLocaleString()}万円`,
            formatRatio(row.ratio),
            row.judgment,
          ])}
          rowClass={(index) => {
            const highlight = simulationRows[index].highlight;
            if (highlight === "min") return "is-min";
            if (highlight === "good") return "is-good";
            if (highlight === "target") return "is-target";
            return undefined;
          }}
        />
      </div>

      <div className="lpk-mobile-cards">
        {simulationRows.map((row) => (
          <article
            key={row.deals}
            className={`lpk-sim-card${row.highlight ? ` is-${row.highlight}` : ""}`}
          >
            <p className="lpk-sim-card-head">{row.deals}社成約</p>
            <dl className="lpk-sim-card-grid">
              <dt>LTV合計</dt>
              <dd>{row.ltvTotal.toLocaleString()}万円</dd>
              <dt>LTV/CAC</dt>
              <dd>{formatRatio(row.ratio)}</dd>
              <dt>判定</dt>
              <dd>{row.judgment}</dd>
            </dl>
          </article>
        ))}
      </div>

      <h3 className="lpk-subsection-title">8月末までの目標水準</h3>
      <div className="lpk-target-cards">
        {augustTargets.map((target) => (
          <div
            key={target.label}
            className={`lpk-target-card${target.primary ? " is-primary" : ""}`}
          >
            <p className="lpk-kpi-label">{target.label}</p>
            <p className="lpk-kpi-value">{target.value}</p>
          </div>
        ))}
      </div>
    </>
  );
}

function OfflineStrategyPanel() {
  return (
    <div className="lpk-strategy-panel is-offline">
      <h3>オフライン営業</h3>
      <p className="lpk-purpose">{offlineStrategy.purpose}</p>

      <p className="lpk-subhead">重点テーマ</p>
      <DataTable
        headers={["テーマ", "内容"]}
        rows={offlineStrategy.themes.map((t) => [t.theme, t.content])}
      />

      <p className="lpk-subhead">実行内容</p>
      <BulletList items={offlineStrategy.actions} />

      <p className="lpk-subhead">見るKPI</p>
      <DataTable
        headers={["KPI", "確認内容"]}
        rows={offlineStrategy.kpis.map((k) => [k.kpi, k.detail])}
      />
    </div>
  );
}

function OnlineStrategyPanel() {
  return (
    <div className="lpk-strategy-panel is-online">
      <h3>オンライン営業</h3>
      <p className="lpk-purpose">{onlineStrategy.purpose}</p>

      <p className="lpk-subhead">重点テーマ</p>
      <DataTable
        headers={["テーマ", "内容"]}
        rows={onlineStrategy.themes.map((t) => [t.theme, t.content])}
      />

      <p className="lpk-subhead">実行内容</p>
      <DataTable
        headers={["実行項目", "内容", "担当者"]}
        rows={onlineStrategy.actionRows.map((row) => [
          row.task,
          row.content,
          row.assignee,
        ])}
      />

      <p className="lpk-subhead">見るKPI</p>
      <DataTable
        headers={["KPI", "確認内容"]}
        rows={onlineStrategy.kpis.map((k) => [k.kpi, k.detail])}
      />
    </div>
  );
}

export default function LpkSalesStrategyLp() {
  return (
    <div className="lpk-root">
      <header className="lpk-header">
        <p className="lpk-logo">TREPRO SALES STRATEGY</p>
        <nav className="lpk-nav" aria-label="ページ内ナビ">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>
        <details className="lpk-nav-mobile">
          <summary aria-label="メニューを開く">目次</summary>
          <div className="lpk-nav-mobile-panel">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`}>
                {item.label}
              </a>
            ))}
          </div>
        </details>
      </header>

      <section id="policy" className="lpk-hero scroll-mt-24">
        <div className="lpk-container">
          <h1 className="lpk-hero-title">トレプロ営業方針改善計画</h1>

          <div className="lpk-hero-policy">
            <SectionHead
              title="全体方針"
              lead="今後の営業活動は、オフライン営業とオンライン営業の2軸で進める。"
            />

            <DataTable
              headers={["領域", "役割", "目的"]}
              rows={policyAxesTable.map((row) => [
                row.area,
                row.roles,
                row.purpose,
              ])}
            />

            <p className="lpk-policy-text">{policyRationale}</p>

            <div className="lpk-panel" style={{ marginTop: 24 }}>
              <h3>7月・8月は、Q4に向けて以下の状態を作る</h3>
              <DataTable
                headers={["項目", "8月末時点で作る状態"]}
                rows={augustEndState.map((row) => [row.item, row.state])}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="current" className="lpk-section is-soft scroll-mt-24">
        <div className="lpk-container">
          <SectionHead eyebrow="CURRENT STATE" title="現状認識" />

          <h3 className="lpk-subsection-title">現状の課題</h3>
          <DataTable
            headers={["課題", "内容"]}
            rows={currentChallengesTable.map((row) => [row.issue, row.content])}
          />

          <div className="lpk-panel" style={{ marginTop: 24 }}>
            <h3>今回の対応方針</h3>
            <BulletList items={responsePolicy} />
          </div>
        </div>
      </section>

      <section id="metrics" className="lpk-section scroll-mt-24">
        <div className="lpk-container">
          <SectionHead eyebrow="METRICS" title="LP経由の数値前提" />

          <div className="lpk-key-metrics" aria-label="主要指標">
            {keyMetrics.map((item) => (
              <div
                key={item.label}
                className={`lpk-key-metric${item.accent ? " is-accent" : ""}`}
              >
                <p className="lpk-key-metric-label">{item.label}</p>
                <p className="lpk-key-metric-value">{item.value}</p>
                <p className="lpk-key-metric-note">{item.note}</p>
              </div>
            ))}
          </div>

          <h3 className="lpk-subsection-title">数値の位置づけ</h3>
          <div className="lpk-panel lpk-panel-provisional">
            <BulletList items={metricsProvisionalNote} />
          </div>

          <p className="lpk-tax-callout">{metricsTaxBasis}</p>

          <DataTable
            headers={["項目", "数値", "説明"]}
            rows={metricsPremise.map((item) => [
              item.item,
              item.value,
              item.note,
            ])}
            rowClass={(index) =>
              metricsPremise[index].accent ? "is-alert-row" : undefined
            }
          />

          <h3 className="lpk-subsection-title">LTV・CAC・ユニットエコノミクスの整理</h3>
          <DataTable
            headers={["指標", "定義", "今回の扱い"]}
            rows={metricsDefinitions.map((row) => [
              row.indicator,
              row.definition,
              row.usage,
            ])}
          />

          <div className="lpk-panel" style={{ marginTop: 20 }}>
            <h3>補足</h3>
            <BulletList items={metricsNotes} />
          </div>
        </div>
      </section>

      <section id="simulation" className="lpk-section is-soft scroll-mt-24">
        <div className="lpk-container">
          <SectionHead eyebrow="SIMULATION" title="シミュレーション" />
          <SimulationSection />
        </div>
      </section>

      <section id="strategy" className="lpk-section scroll-mt-24">
        <div className="lpk-container">
          <SectionHead eyebrow="STRATEGY" title="営業戦略の2軸" />
          <div className="lpk-split-strategy">
            <OfflineStrategyPanel />
            <OnlineStrategyPanel />
          </div>
        </div>
      </section>

      <section id="tier" className="lpk-section is-soft scroll-mt-24">
        <div className="lpk-container">
          <SectionHead eyebrow="TIER" title="Tier定義" />

          <div className="lpk-tier-ladder" aria-label="Tier一覧">
            <div className="lpk-tier-badge t1">
              Tier 1
              <span>40%+</span>
            </div>
            <div className="lpk-tier-badge t2">
              Tier 2
              <span>20%</span>
            </div>
            <div className="lpk-tier-badge t3">
              Tier 3
              <span>10%</span>
            </div>
            <div className="lpk-tier-badge t4">
              Tier 4
              <span>その他</span>
            </div>
          </div>

          <DataTable
            headers={["Tier", "対象", "目的", "主なアクション"]}
            rows={tierDefinitions.map((row) => [
              row.tier,
              row.target,
              row.purpose,
              row.action,
            ])}
          />

          <div style={{ marginTop: 20 }}>
            <h3 className="lpk-subsection-title">補足</h3>
            <DataTable
              headers={["確度", "定義"]}
              rows={tierCertaintyRules.map((row) => [row.rate, row.definition])}
            />
          </div>

          <div style={{ marginTop: 28 }}>
            <SectionHead eyebrow="APPROACH" title="Tier別アプローチ" />
            <DataTable
              headers={["Tier", "送付内容", "架電方針", "次の状態"]}
              rows={tierApproaches.map((row) => [
                row.tier,
                row.material,
                row.call,
                row.next,
              ])}
            />
          </div>
        </div>
      </section>

      <section id="roadmap" className="lpk-section scroll-mt-24">
        <div className="lpk-container">
          <SectionHead
            eyebrow="ROADMAP"
            title="7月・8月ロードマップ"
            lead="PCは横長テーブル、スマホは週ごとの縦カードで表示。"
          />

          <div className="lpk-roadmap-desktop">
            <DataTable
              className="lpk-roadmap-table"
              headers={["時期", "オフライン営業", "オンライン営業", "オンライン担当"]}
              rows={roadmapRows.map((row) => [
                row.period,
                row.offline,
                row.online,
                row.onlineAssignee,
              ])}
            />
          </div>

          <div className="lpk-roadmap-mobile">
            {roadmapRows.map((row) => (
              <article key={row.period} className="lpk-roadmap-card">
                <h3 className="lpk-roadmap-week">{row.period}</h3>
                <div className="lpk-roadmap-block">
                  <h4>オフライン営業</h4>
                  <p>{row.offline}</p>
                </div>
                <div className="lpk-roadmap-block">
                  <h4>オンライン営業</h4>
                  <p>{row.online}</p>
                </div>
                <div className="lpk-roadmap-block">
                  <h4>オンライン担当</h4>
                  <p>{row.onlineAssignee}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="lpk-assignee-panel">
            <h3>担当振り分け</h3>
            <ul className="lpk-assignee-list">
              {roadmapAssignees.map((item) => (
                <li key={item.role}>
                  <span className="lpk-assignee-role">{item.role}</span>
                  <span className="lpk-assignee-name">{item.assignee}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="tactics" className="lpk-section is-soft scroll-mt-24">
        <div className="lpk-container">
          <SectionHead
            eyebrow="TACTICS"
            title="価格調整・ABテスト"
            lead="料金がボトルネックになっている案件で、価格調整が受注率に与える影響を確認する。"
          />
          <DataTable
            headers={["項目", "内容"]}
            rows={abTestPolicy.map((row) => [row.item, row.content])}
          />

          <div style={{ marginTop: 48 }}>
            <SectionHead
              eyebrow="NURTURING"
              title="CRM・ナーチャリング"
              lead="メール配信だけで終わらせず、継続的に接点を持つ導線を作る。"
            />
            <DataTable
              headers={["施策", "目的"]}
              rows={crmMeasures.map((row) => [row.measure, row.purpose])}
            />
          </div>
        </div>
      </section>

      <footer className="lpk-footer">
        <div className="lpk-container">
          <p>トレプロ営業方針改善計画 — 社内共有用ドキュメント</p>
          <p className="lpk-note">
            元資料: trepro_sales_improvement_plan.md（最新版） / 数値: app/trepro-lpk-sales-strategy/data/metrics.json
          </p>
        </div>
      </footer>
    </div>
  );
}
