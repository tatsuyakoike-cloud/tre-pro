import type { ReactNode } from "react";
import "./lpk-sales-strategy.css";
import {
  navItems,
  heroCards,
  policyAxes,
  policyRationale,
  currentChallenges,
  metricsPremise,
  metricsNotes,
  simulationRows,
  augustTargets,
  q4IdealState,
  offlineStrategy,
  onlineStrategy,
  tierDefinitions,
  tierNotes,
  tierApproaches,
  roadmapRows,
  abTestPolicy,
  crmMeasures,
  pendingDecisions,
} from "./lpk-sales-strategy-content";

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
    <header className="lpk-section-head">
      <p className="lpk-eyebrow">{eyebrow}</p>
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

function SimulationSection() {
  return (
    <>
      <div className="lpk-table-desktop-only">
        <DataTable
          headers={["成約数", "LTV合計", "1社あたりCAC", "LTV/CAC倍率", "判定"]}
          rows={simulationRows.map((row) => [
            `${row.deals}社`,
            `${row.ltvTotal.toLocaleString()}万円`,
            `${row.cacPerDeal}万円`,
            `${row.ratio.toFixed(2)}倍`,
            row.judgment,
          ])}
          rowClass={(index) => {
            const highlight = simulationRows[index].highlight;
            if (highlight === "min") return "is-min";
            if (highlight === "good") return "is-good";
            if (highlight === "target") return "is-target";
            if (simulationRows[index].judgment === "ほぼ到達") return "is-near";
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
              <dt>1社CAC</dt>
              <dd>{row.cacPerDeal}万円</dd>
              <dt>倍率</dt>
              <dd>{row.ratio.toFixed(2)}倍</dd>
              <dt>判定</dt>
              <dd>{row.judgment}</dd>
            </dl>
          </article>
        ))}
      </div>

      <div className="lpk-target-cards">
        {augustTargets.map((target) => (
          <div key={target.label} className="lpk-target-card">
            <p className="lpk-kpi-label">{target.label}</p>
            <p className="lpk-kpi-value">{target.value}</p>
          </div>
        ))}
      </div>
    </>
  );
}

function StrategyPanel({
  variant,
  title,
  data,
}: {
  variant: "offline" | "online";
  title: string;
  data: typeof offlineStrategy;
}) {
  return (
    <div className={`lpk-strategy-panel is-${variant}`}>
      <h3>{title}</h3>
      <p className="lpk-purpose">{data.purpose}</p>

      <p className="lpk-subhead">中心テーマ</p>
      <DataTable
        headers={["テーマ", "内容"]}
        rows={data.themes.map((t) => [t.theme, t.content])}
      />

      <p className="lpk-subhead">実行内容</p>
      <BulletList items={data.actions} />

      <p className="lpk-subhead">見るKPI</p>
      <DataTable
        headers={["KPI", "確認内容"]}
        rows={data.kpis.map((k) => [k.kpi, k.detail])}
      />
    </div>
  );
}

export default function LpkSalesStrategyLp() {
  return (
    <div className="lpk-root">
      <header className="lpk-header">
        <p className="lpk-logo">TREPRO LPK SALES</p>
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

      <section className="lpk-hero">
        <div className="lpk-container">
          <p className="lpk-kicker">LPK SALES STRATEGY</p>
          <h1 className="lpk-hero-title">
            トレプロ営業方針・LPKユニットエコノミクス改善計画
          </h1>
          <p className="lpk-hero-sub">
            7月・8月で、オフライン営業とオンライン営業の2軸体制を立ち上げ、Q4に向けてLPKの回復モデルを作る。
          </p>
          <div className="lpk-summary-grid">
            {heroCards.map((card) => (
              <div key={card.title} className="lpk-summary-card">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="policy" className="lpk-section scroll-mt-24">
        <div className="lpk-container">
          <SectionHead
            eyebrow="POLICY"
            title="全体方針"
            lead="オフラインで短期売上、オンラインで既存リストの再活用と仕組み化。"
          />

          <div className="lpk-axis-visual" aria-label="2軸営業体制">
            <div className="lpk-axis-pillar is-offline">
              <div className="lpk-axis-icon" aria-hidden="true">
                1
              </div>
              <h3>{policyAxes[0].axis}</h3>
              <p>
                <strong>{policyAxes[0].purpose}</strong>
                <br />
                {policyAxes[0].roles}
              </p>
            </div>
            <span className="lpk-axis-connector" aria-hidden="true">
              ＋
            </span>
            <div className="lpk-axis-pillar is-online">
              <div className="lpk-axis-icon" aria-hidden="true">
                2
              </div>
              <h3>{policyAxes[1].axis}</h3>
              <p>
                <strong>{policyAxes[1].purpose}</strong>
                <br />
                {policyAxes[1].roles}
              </p>
            </div>
          </div>

          <div className="lpk-spacer" />
          <div className="lpk-panel">
            <h3>なぜ2軸で進めるのか</h3>
            <BulletList items={policyRationale} />
          </div>
        </div>
      </section>

      <section id="current" className="lpk-section is-soft scroll-mt-24">
        <div className="lpk-container">
          <SectionHead eyebrow="CURRENT STATE" title="現状認識" />
          <div className="lpk-panel">
            <h3>現状の課題</h3>
            <BulletList items={currentChallenges} />
          </div>
        </div>
      </section>

      <section id="metrics" className="lpk-section scroll-mt-24">
        <div className="lpk-container">
          <SectionHead
            eyebrow="METRICS"
            title="LPKの数値前提"
            lead="施策全体の総獲得コスト800万円を基準に、LTV合計 ÷ 総獲得コストで判断する。"
          />
          <div className="lpk-kpi-grid">
            {metricsPremise.map((item) => (
              <div
                key={item.item}
                className={`lpk-kpi-card${item.accent ? " is-alert" : ""}`}
              >
                <p className="lpk-kpi-label">{item.item}</p>
                <p className="lpk-kpi-value">{item.value}</p>
                <p className="lpk-kpi-note">{item.note}</p>
              </div>
            ))}
          </div>
          <div className="lpk-panel" style={{ marginTop: 20 }}>
            <h3>注意点</h3>
            <BulletList items={metricsNotes} />
          </div>
        </div>
      </section>

      <section id="simulation" className="lpk-section is-soft scroll-mt-24">
        <div className="lpk-container">
          <SectionHead
            eyebrow="SIMULATION"
            title="シミュレーション"
            lead="1社あたりLTV330万円・総獲得コスト800万円を前提とした成約数別の試算。"
          />
          <SimulationSection />
          <p className="lpk-note">
            8社成約で最低ライン（3.3倍）達成。目標は10〜13社で4〜5倍水準。
          </p>
        </div>
      </section>

      <section id="q4" className="lpk-section scroll-mt-24">
        <div className="lpk-container">
          <SectionHead
            eyebrow="Q4 VISION"
            title="Q4に向けた理想状態"
            lead="8月末時点で作る状態"
          />
          <div className="lpk-q4-grid">
            {q4IdealState.map((item) => (
              <article key={item.area} className="lpk-q4-card">
                <h3>{item.area}</h3>
                <p>{item.state}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="strategy" className="lpk-section is-soft scroll-mt-24">
        <div className="lpk-container">
          <SectionHead eyebrow="STRATEGY" title="営業戦略の2軸" />
          <div className="lpk-split-strategy">
            <StrategyPanel
              variant="offline"
              title="オフライン営業"
              data={offlineStrategy}
            />
            <StrategyPanel
              variant="online"
              title="オンライン営業"
              data={onlineStrategy}
            />
          </div>
        </div>
      </section>

      <section id="tier" className="lpk-section scroll-mt-24">
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

          <div className="lpk-panel" style={{ marginTop: 20 }}>
            <h3>補足</h3>
            <BulletList items={tierNotes} />
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

      <section id="roadmap" className="lpk-section is-soft scroll-mt-24">
        <div className="lpk-container">
          <SectionHead
            eyebrow="ROADMAP"
            title="7月・8月ロードマップ"
            lead="PCは横長テーブル、スマホは週ごとの縦カードで表示。"
          />

          <div className="lpk-roadmap-desktop">
            <DataTable
              className="lpk-roadmap-table"
              headers={["時期", "オフライン営業", "オンライン営業"]}
              rows={roadmapRows.map((row) => [
                row.period,
                row.offline,
                row.online,
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
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="tactics" className="lpk-section scroll-mt-24">
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

      <section id="decisions" className="lpk-section is-soft scroll-mt-24">
        <div className="lpk-container">
          <SectionHead eyebrow="DECISIONS" title="直近で決めること" />
          <DataTable
            headers={["項目", "決める内容"]}
            rows={pendingDecisions.map((row) => [row.item, row.content])}
          />
        </div>
      </section>

      <footer className="lpk-footer">
        <div className="lpk-container">
          <p>トレプロ営業方針・LPKユニットエコノミクス改善計画 — 社内共有用ドキュメント</p>
          <p className="lpk-note">
            元資料: trepro_lpk_sales_strategy.md / 数値: app/trepro-lpk-sales-strategy/data/metrics.json
          </p>
        </div>
      </footer>
    </div>
  );
}
