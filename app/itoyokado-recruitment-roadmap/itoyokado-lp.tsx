import type { ReactNode } from "react";
import "./itoyokado.css";
import {
  navItems,
  premiseItems,
  summaryTable,
  recruitmentBackground,
  recruitmentConditions,
  previousQuestions,
  challenges,
  concerns,
  proposalValues,
  funnelSteps,
  funnelPrinciples,
  siteSections,
  techStack,
  threeJsPolicy,
  uxPrinciples,
  phases,
  confirmItems,
  pitchSections,
  brandAppeal,
  closingQuote,
} from "./itoyokado-content";

const heroBg = `linear-gradient(180deg, #1e2d42 0%, #2c4a6e 42%, #3a5a7a 68%, #1a2535 100%)`;

function SectionHeader({
  num,
  eyebrow,
  title,
  lead,
}: {
  num?: string;
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <header className="iy-section-head">
      {num && <span className="iy-section-num">{num}</span>}
      <p className="iy-eyebrow">{eyebrow}</p>
      <h2 className="iy-h2 iy-serif">{title}</h2>
      {lead && <p className="iy-lead">{lead}</p>}
    </header>
  );
}

function Panel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`iy-panel${className ? ` ${className}` : ""}`}>{children}</div>;
}

function QuoteBlock({ text, center = false }: { text: string; center?: boolean }) {
  return (
    <blockquote className={`iy-quote${center ? " is-center" : ""}`}>
      {text.split("\n").map((line, i, arr) => (
        <span key={i}>
          {line}
          {i < arr.length - 1 && <br />}
        </span>
      ))}
    </blockquote>
  );
}

export default function ItoyokadoLp() {
  return (
    <div className="iy-root">
      <header className="iy-header">
        <p className="iy-logo">イトーヨーカ堂 採用導線設計</p>
        <nav className="iy-nav" aria-label="ページ内ナビ">
          {navItems.slice(0, 8).map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>
        <details className="iy-nav-mobile">
          <summary aria-label="メニューを開く">目次</summary>
          <div className="iy-nav-mobile-panel">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`}>
                {item.label}
              </a>
            ))}
          </div>
        </details>
      </header>

      <section className="iy-hero iy-slide">
        <div className="iy-hero-bg" aria-hidden="true" style={{ backgroundImage: heroBg }} />
        <div className="iy-hero-waves" aria-hidden="true">
          <div className="iy-wave iy-wave-1" />
          <div className="iy-wave iy-wave-2" />
        </div>
        <div className="iy-hero-inner">
          <p className="iy-hero-client">イトーヨーカ堂 御中</p>
          <p className="iy-hero-tag">新寝具事業 採用導線設計・ロードマップ</p>
          <h1 className="iy-hero-title iy-serif">
            睡眠を支える
            <br />
            仕事へ。
          </h1>
          <p className="iy-hero-sub">
            認知度と信頼性を採用の力に変え、20店舗それぞれに必要な人材を条件に合う形で集める採用基盤を設計する。
          </p>
        </div>
      </section>

      <section id="summary" className="iy-section iy-slide">
        <div className="iy-inner">
          <SectionHeader
            num="01"
            eyebrow="OVERVIEW"
            title="採用動画制作ではなく、採用導線設計の提案"
            lead="今回は、単にSNS動画を制作する提案ではありません。求人広告、SNS、採用LP、公式LINE、店舗別管理をつなぎ、応募から面接までの導線を整えることで、条件に合う方を効率的に集める採用基盤を作る提案です。"
          />
          <Panel>
            <div className="iy-table-wrap">
              <table className="iy-table">
                <thead>
                  <tr>
                    <th>項目</th>
                    <th>方針</th>
                  </tr>
                </thead>
                <tbody>
                  {summaryTable.map((row) => (
                    <tr key={row.item}>
                      <th>{row.item}</th>
                      <td>{row.policy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Panel>
          <Panel className="iy-subsection-panel iy-panel-body">
            <h3 className="iy-h3 iy-serif">本資料の位置づけ</h3>
            <ul className="iy-list">
              {premiseItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Panel>
        </div>
      </section>

      <section id="background" className="iy-section is-alt iy-slide">
        <div className="iy-inner">
          <SectionHeader
            num="02"
            eyebrow="BACKGROUND"
            title="前回のお打ち合わせで確認した内容"
            lead="新寝具事業の立ち上げに伴う採用計画と、先方からいただいた主な質問を整理しています。"
          />
          <div className="iy-two-col iy-two-col-panel">
            <Panel>
              <h3 className="iy-h3 iy-serif">採用背景</h3>
              <ul className="iy-list">
                {recruitmentBackground.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Panel>
            <Panel>
              <h3 className="iy-h3 iy-serif">採用条件</h3>
              <ul className="iy-list">
                {recruitmentConditions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Panel>
          </div>
          <Panel className="iy-subsection-panel">
            <h3 className="iy-h3 iy-serif">前回いただいた主な質問</h3>
            <ul className="iy-tags iy-tags-left">
              {previousQuestions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Panel>
        </div>
      </section>

      <section id="challenges" className="iy-section iy-slide">
        <div className="iy-inner">
          <SectionHeader
            num="03"
            eyebrow="CHALLENGES"
            title="現時点での課題感"
            lead="応募数を増やすだけでは不十分。各店舗に必要な時間帯で働ける方を、面接前に整理できる状態を作ることが重要です。"
          />
          <div className="iy-cards iy-cards-panel">
            {challenges.map((item) => (
              <div key={item.title} className="iy-card">
                <p className="iy-card-label">{item.title}</p>
                <ul className="iy-list iy-list-compact">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <p className="iy-card-text">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="iy-section is-dark iy-highlight-strip iy-slide-compact">
        <div className="iy-inner">
          <p className="iy-eyebrow">PROPOSAL THEME</p>
          <h2 className="iy-h2 iy-serif">
            ネームバリューを応募に変える
            <br />
            <strong>採用導線の整備</strong>
          </h2>
        </div>
      </section>

      <section id="concerns" className="iy-section is-alt iy-slide">
        <div className="iy-inner">
          <SectionHeader
            num="04"
            eyebrow="CONCERNS"
            title="推測される先方の懸念点"
            lead="SNSの見栄えよりも、最終的に必要人数を確保できるか。社内説明できるKPI設計が重要です。"
          />
          <div className="iy-cards iy-cards-panel">
            {concerns.map((item) => (
              <div key={item.title} className="iy-card">
                <p className="iy-card-label">{item.title}</p>
                <p className="iy-card-text">{item.text}</p>
                {item.kpis.length > 0 && (
                  <ul className="iy-tags iy-tags-left">
                    {item.kpis.map((kpi) => (
                      <li key={kpi}>{kpi}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="proposal" className="iy-section iy-slide">
        <div className="iy-inner">
          <SectionHeader
            num="05"
            eyebrow="PROPOSAL"
            title="提案の中心テーマ"
            lead="採用数に近いKPIを管理しながら、仕事の魅力をビジュアルで伝え、応募前に条件確認を行います。"
          />
          <Panel>
            <ul className="iy-check-list">
              {proposalValues.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Panel>
          <Panel className="iy-subsection-panel">
            <h3 className="iy-h3 iy-serif">西川ブランド・寝具事業の見せ方</h3>
            <ul className="iy-list">
              {brandAppeal.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Panel>
          <QuoteBlock
            text="今回は、単にSNS動画を制作する提案ではありません。\n求人広告、SNS、採用LP、公式LINE、店舗別管理をつなぎ、\n応募から面接までの導線を整える採用基盤を作る提案です。"
          />
        </div>
      </section>

      <section id="funnel" className="iy-section is-enji iy-slide">
        <div className="iy-inner">
          <SectionHeader
            num="06"
            eyebrow="FUNNEL"
            title="採用導線の全体像"
            lead="各入口から採用LPへ集約し、条件確認・店舗別振り分け・面接設定まで一気通貫で設計します。"
          />
          <Panel className="iy-flow-panel">
            <div className="iy-flow">
              {funnelSteps.map((step, i) => (
                <div key={step.label}>
                  {i > 0 && i !== 4 && (
                    <div className="iy-flow-arrow" aria-hidden="true">
                      ↓
                    </div>
                  )}
                  {i === 4 && (
                    <div className="iy-flow-arrow" aria-hidden="true">
                      ↓
                    </div>
                  )}
                  <div className={`iy-flow-item${step.accent ? " is-accent" : ""}`}>
                    <strong>{step.label}</strong>
                    <span>{step.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </Panel>
          <Panel className="iy-subsection-panel">
            <h3 className="iy-h3 iy-serif iy-light">導線設計の考え方</h3>
            <ul className="iy-check-list is-compact iy-list-light">
              {funnelPrinciples.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Panel>
        </div>
      </section>

      <section id="site" className="iy-section is-alt iy-slide">
        <div className="iy-inner">
          <SectionHeader
            num="07"
            eyebrow="WEB SITE"
            title="Web公開サイトの構成案"
            lead="採用候補者に対して、新寝具事業の仕事内容・魅力・働き方・応募導線を直感的に伝えます。文字主体ではなく、写真・動画・グラフィックを中心に構成します。"
          />
          <div className="iy-cards iy-cards-panel">
            {siteSections.map((section) => (
              <div key={section.title} className="iy-card">
                <p className="iy-card-label">{section.title}</p>
                <p className="iy-card-text iy-card-purpose">目的：{section.purpose}</p>
                <ul className="iy-list iy-list-compact">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tech" className="iy-section iy-slide">
        <div className="iy-inner">
          <SectionHeader
            num="08"
            eyebrow="TECHNOLOGY"
            title="技術仕様"
            lead="Next.jsベースのレスポンシブ採用LP。Three.jsはファーストビュー等で限定的に活用し、UI/UXを最優先します。"
          />
          <div className="iy-two-col iy-two-col-panel">
            <Panel>
              <h3 className="iy-h3 iy-serif">基本構成</h3>
              <ul className="iy-list">
                {techStack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Panel>
            <Panel>
              <h3 className="iy-h3 iy-serif">UI/UX方針</h3>
              <ul className="iy-list">
                {uxPrinciples.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Panel>
          </div>
          <Panel className="iy-subsection-panel">
            <h3 className="iy-h3 iy-serif">Three.jsの活用方針</h3>
            <p className="iy-panel-lead">{threeJsPolicy.purpose}</p>
            <div className="iy-two-col">
              <div>
                <p className="iy-h3-sub">活用箇所</p>
                <ul className="iy-list">
                  {threeJsPolicy.uses.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="iy-h3-sub">注意点</p>
                <ul className="iy-list">
                  {threeJsPolicy.notes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Panel>
        </div>
      </section>

      <section id="roadmap" className="iy-section is-alt iy-slide">
        <div className="iy-inner">
          <SectionHeader
            num="09"
            eyebrow="ROADMAP"
            title="ロードマップ"
            lead="Phase 0の現状整理から、Phase 6の店舗別採用最適化まで、段階的に採用基盤を構築します。"
          />
          <div className="iy-roadmap">
            {phases.map((phase, i) => (
              <Panel key={phase.id} className="iy-roadmap-item">
                <div className="iy-roadmap-head">
                  <span className="iy-roadmap-id">{phase.id}</span>
                  <div>
                    <h3 className="iy-h3 iy-serif">{phase.name}</h3>
                    <p className="iy-roadmap-purpose">{phase.purpose}</p>
                  </div>
                </div>
                <ul className="iy-list iy-list-compact">
                  {phase.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {i < phases.length - 1 && (
                  <div className="iy-roadmap-arrow" aria-hidden="true">
                    ↓
                  </div>
                )}
              </Panel>
            ))}
          </div>
        </div>
      </section>

      <section id="confirm" className="iy-section iy-slide">
        <div className="iy-inner">
          <SectionHeader
            num="10"
            eyebrow="CONFIRM"
            title="次回確認すべき事項"
            lead="採用計画・勤務条件・ターゲット・運用体制・素材・判断基準について、提案前に確定したい項目です。"
          />
          <div className="iy-cards iy-cards-panel is-2">
            {Object.entries(confirmItems).map(([key, items]) => {
              const labels: Record<string, string> = {
                recruitment: "採用計画",
                conditions: "勤務条件",
                target: "採用ターゲット",
                operation: "運用体制",
                assets: "素材・表現",
                criteria: "判断基準",
              };
              return (
                <div key={key} className="iy-card">
                  <p className="iy-card-label">{labels[key]}</p>
                  <ul className="iy-list iy-list-compact">
                    {items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="pitch" className="iy-section is-dark iy-slide">
        <div className="iy-inner">
          <SectionHeader
            num="11"
            eyebrow="PITCH"
            title="商談での伝え方"
          />
          <div className="iy-cards iy-cards-panel">
            {pitchSections.map((section) => (
              <div key={section.label} className="iy-card iy-card-dark">
                <p className="iy-card-label">{section.label}</p>
                <p className="iy-card-text">{section.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="iy-section is-enji iy-slide-compact iy-closing">
        <div className="iy-inner iy-closing-inner">
          <QuoteBlock text={closingQuote} center />
        </div>
      </section>

      <footer className="iy-footer">
        <p>イトーヨーカ堂 新寝具事業 採用導線設計・ロードマップ</p>
        <p className="iy-footer-sub">イトーヨーカ堂 御中</p>
      </footer>
    </div>
  );
}
