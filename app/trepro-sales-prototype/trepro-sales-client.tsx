"use client";

import { useEffect, useId, useRef } from "react";
import kpiDataRaw from "./data/kpi.json";
import tierSummaryRaw from "./data/tier-summary.json";

type KpiJson = {
  cacComparison: { labels: string[]; data: number[]; unit: string; note: string };
  ltvComparison: { labels: string[]; data: number[]; unit: string };
  kpiCards: { label: string; value: string; note: string }[];
  weeklyTrend: {
    labels: string[];
    datasets: { label: string; data: (number | null)[]; unit?: string }[];
  };
  cacLtvRatio: {
    labels: string[];
    cac: (number | null)[];
    ltvCacRatio: (number | null)[];
    targetLine: number;
    unit: { cac: string; ratio: string };
  };
  funnel: {
    labels: string[];
    data: (number | null)[];
    status: string;
  };
};

type TierSummaryJson = {
  labels: string[];
  data: (number | null)[];
  status: string;
  note: string;
};

const kpiData = kpiDataRaw as KpiJson;
const tierSummary = tierSummaryRaw as TierSummaryJson;

type BarItem = { label: string; value: number; unit?: string };

export function MermaidDiagram({ chart }: { chart: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const id = useId().replace(/:/g, "");

  useEffect(() => {
    let cancelled = false;

    async function render() {
      const mermaid = (await import("mermaid")).default;
      mermaid.initialize({
        startOnLoad: false,
        theme: "neutral",
        securityLevel: "strict",
        fontFamily: '"Noto Sans JP", system-ui, sans-serif',
      });

      if (!ref.current || cancelled) return;

      try {
        const { svg } = await mermaid.render(`tp-mermaid-${id}`, chart);
        if (!cancelled && ref.current) {
          ref.current.innerHTML = svg;
        }
      } catch {
        if (ref.current) {
          ref.current.innerHTML = `<pre class="tp-mermaid-fallback">${chart}</pre>`;
        }
      }
    }

    render();
    return () => {
      cancelled = true;
    };
  }, [chart, id]);

  return <div ref={ref} className="tp-mermaid" />;
}

export function BarComparisonChart({
  title,
  items,
  maxValue,
  horizontal = false,
}: {
  title: string;
  items: BarItem[];
  maxValue: number;
  horizontal?: boolean;
}) {
  return (
    <div className="tp-chart">
      <h3 className="tp-chart-title">{title}</h3>
      <div className={`tp-bar-list${horizontal ? " is-horizontal" : ""}`}>
        {items.map((item) => {
          const width = Math.max(8, (item.value / maxValue) * 100);
          return (
            <div key={item.label} className="tp-bar-row">
              <div className="tp-bar-meta">
                <span>{item.label}</span>
                <strong>
                  {item.value}
                  {item.unit ?? ""}
                </strong>
              </div>
              <div className="tp-bar-track">
                <div className="tp-bar-fill" style={{ width: `${width}%` }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function KpiCardsFromJson() {
  return (
    <div className="tp-kpi-grid">
      {kpiData.kpiCards.map((card) => (
        <div key={card.label} className="tp-kpi-card">
          <p className="tp-kpi-label">{card.label}</p>
          <p className="tp-kpi-value">{card.value}</p>
          <p className="tp-kpi-note">{card.note}</p>
        </div>
      ))}
    </div>
  );
}

export function CacLtvCharts() {
  const cac = kpiData.cacComparison;
  const ltv = kpiData.ltvComparison;
  const cacMax = Math.max(...cac.data) * 1.1;
  const ltvMax = Math.max(...ltv.data) * 1.1;

  return (
    <div className="tp-chart-stack">
      <BarComparisonChart
        title="CAC比較"
        maxValue={cacMax}
        items={cac.labels.map((label, i) => ({
          label,
          value: cac.data[i],
          unit: cac.unit,
        }))}
      />
      <BarComparisonChart
        title="LTV期間比較"
        maxValue={ltvMax}
        horizontal
        items={ltv.labels.map((label, i) => ({
          label,
          value: ltv.data[i],
          unit: ltv.unit,
        }))}
      />
      <p className="tp-chart-note">{cac.note}</p>
    </div>
  );
}

export function TierDonutChart() {
  const hasData = tierSummary.data.every((v) => v !== null);
  const colors = ["#E64628", "#F07A5F", "#F4A698", "#E5E5E5"];

  if (!hasData) {
    return (
      <div className="tp-chart tp-chart-empty">
        <h3 className="tp-chart-title">Tier別件数</h3>
        <p className="tp-empty-state">{tierSummary.status}</p>
        <p className="tp-chart-note">{tierSummary.note}</p>
      </div>
    );
  }

  const total = tierSummary.data.reduce<number>((sum, v) => sum + (v ?? 0), 0);
  let offset = 0;

  return (
    <div className="tp-chart">
      <h3 className="tp-chart-title">Tier別件数</h3>
      <div className="tp-donut-wrap">
        <svg viewBox="0 0 42 42" className="tp-donut">
          <circle cx="21" cy="21" r="15.9" fill="transparent" stroke="#F7F7F7" strokeWidth="6" />
          {tierSummary.data.map((value, index) => {
            if (!value) return null;
            const pct = (value / total) * 100;
            const dash = `${pct} ${100 - pct}`;
            const el = (
              <circle
                key={tierSummary.labels[index]}
                cx="21"
                cy="21"
                r="15.9"
                fill="transparent"
                stroke={colors[index]}
                strokeWidth="6"
                strokeDasharray={dash}
                strokeDashoffset={String(25 - offset)}
              />
            );
            offset += pct;
            return el;
          })}
        </svg>
        <ul className="tp-donut-legend">
          {tierSummary.labels.map((label, index) => (
            <li key={label}>
              <span style={{ background: colors[index] }} />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function FunnelChart() {
  const labels = kpiData.funnel.labels;
  const hasData = kpiData.funnel.data.every((v) => v !== null);

  if (!hasData) {
    return (
      <div className="tp-chart tp-chart-empty">
        <h3 className="tp-chart-title">ファネル分析</h3>
        <p className="tp-empty-state">{kpiData.funnel.status}</p>
      </div>
    );
  }

  const numericData = kpiData.funnel.data.filter((v): v is number => v !== null);
  const max = Math.max(...numericData);

  return (
    <div className="tp-chart">
      <h3 className="tp-chart-title">ファネル分析</h3>
      <div className="tp-funnel">
        {labels.map((label, index) => {
          const value = kpiData.funnel.data[index];
          if (value === null) return null;
          const width = Math.max(30, (value / max) * 100);
          return (
            <div key={label} className="tp-funnel-step" style={{ width: `${width}%` }}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function WeeklyKpiChart() {
  const { labels, datasets } = kpiData.weeklyTrend;
  const hasData = datasets.some((d) => d.data.some((v) => v !== null));

  if (!hasData) {
    return (
      <div className="tp-chart tp-chart-empty">
        <h3 className="tp-chart-title">週次KPI推移</h3>
        <p className="tp-empty-state">集計中 — Excel集計後に data/kpi.json を更新してください</p>
      </div>
    );
  }

  return (
    <div className="tp-chart">
      <h3 className="tp-chart-title">週次KPI推移</h3>
      <div className="tp-weekly-table-wrap">
        <table className="tp-table">
          <thead>
            <tr>
              <th>指標</th>
              {labels.map((label) => (
                <th key={label}>{label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {datasets.map((dataset) => (
              <tr key={dataset.label}>
                <td>{dataset.label}</td>
                {dataset.data.map((value, index) => (
                  <td key={`${dataset.label}-${index}`}>{value ?? "—"}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function CacRatioChart() {
  const { labels, targetLine, unit } = kpiData.cacLtvRatio;
  const hasData =
    kpiData.cacLtvRatio.cac.some((v) => v !== null) ||
    kpiData.cacLtvRatio.ltvCacRatio.some((v) => v !== null);

  if (!hasData) {
    return (
      <div className="tp-chart tp-chart-empty">
        <h3 className="tp-chart-title">CACとLTV/CAC倍率</h3>
        <p className="tp-empty-state">
          集計中 — 目標ライン {targetLine}
          {unit.ratio}
        </p>
      </div>
    );
  }

  return (
    <div className="tp-chart">
      <h3 className="tp-chart-title">CACとLTV/CAC倍率</h3>
      <p className="tp-chart-note">
        目標ライン: LTV/CAC = {targetLine}
        {unit.ratio}
      </p>
      <div className="tp-weekly-table-wrap">
        <table className="tp-table">
          <thead>
            <tr>
              <th>週</th>
              <th>CAC（{unit.cac}）</th>
              <th>LTV/CAC（{unit.ratio}）</th>
            </tr>
          </thead>
          <tbody>
            {labels.map((label, index) => (
              <tr key={label}>
                <td>{label}</td>
                <td>{kpiData.cacLtvRatio.cac[index] ?? "—"}</td>
                <td>{kpiData.cacLtvRatio.ltvCacRatio[index] ?? "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
