import type { ReactNode } from "react";
import "./yamagatakan.css";
import {
  navItems,
  premiseItems,
  skillCriteria,
  summaryTable,
  essenceValues,
  essenceQuotes,
  marketPoints,
  marketInsights,
  challengeCycle,
  strengths,
  targetProfiles,
  targetAppeal,
  longTermTargets,
  channelRoles,
  instagramThemes,
  instagramTone,
  instagramCopies,
  tiktokNotes,
  tiktokPlans,
  recruitLpSections,
  scheduleRows,
  phaseGoals,
  pricingInfo,
  kpiFinal,
  kpiIntermediate,
  kpiQualitative,
  scopeIncluded,
  scopeExcluded,
  risks,
  decemberOptions,
  nextActionConfirm,
  meetingQuestions,
  closingQuotes,
} from "./yamagatakan-content";

const heroBg = `linear-gradient(180deg, #0a1410 0%, #142820 42%, #1a2e24 68%, #0f1814 100%)`;

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
    <header className="yk-section-head">
      {num && <span className="yk-section-num">{num}</span>}
      <p className="yk-eyebrow">{eyebrow}</p>
      <h2 className="yk-h2 yk-serif">{title}</h2>
      {lead && <p className="yk-lead">{lead}</p>}
    </header>
  );
}

function Panel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`yk-panel${className ? ` ${className}` : ""}`}>{children}</div>;
}

function QuoteBlock({ text, center = false }: { text: string; center?: boolean }) {
  return (
    <blockquote className={`yk-quote${center ? " is-center" : ""}`}>
      {text.split("\n").map((line, i, arr) => (
        <span key={i}>
          {line}
          {i < arr.length - 1 && <br />}
        </span>
      ))}
    </blockquote>
  );
}

function PricingSection() {
  const { period, regularTotal, specialTotal, regularMonthly, specialMonthly, discountAmount, discountRate, serviceLabel } = pricingInfo;

  return (
    <Panel className="yk-pricing-panel">
      <p className="yk-pricing-period">{period}</p>
      <p className="yk-pricing-service">{serviceLabel}</p>

      <div className="yk-pricing-compare">
        <div className="yk-pricing-row yk-pricing-row-regular">
          <span className="yk-pricing-row-label">通常価格</span>
          <span className="yk-pricing-row-value">
            <s>{regularTotal}万円</s>
            <small>（月{regularMonthly}万円換算）</small>
          </span>
        </div>

        <div className="yk-pricing-discount-badge" aria-label={`${discountAmount}万円、${discountRate}パーセントOFF`}>
          <span className="yk-pricing-discount-amount">{discountAmount}万円 OFF</span>
          <span className="yk-pricing-discount-rate">{discountRate}%</span>
        </div>

        <div className="yk-pricing-bar" aria-hidden="true">
          <div className="yk-pricing-bar-fill" style={{ width: `${discountRate}%` }} />
        </div>

        <div className="yk-pricing-row yk-pricing-row-special">
          <span className="yk-pricing-row-label">特別提案価格</span>
          <span className="yk-pricing-row-value">
            <strong>{specialTotal}</strong>
            <span className="yk-pricing-unit">万円</span>
            <small>（{period}）</small>
          </span>
        </div>

        <p className="yk-pricing-monthly">
          月額 <strong>{specialMonthly}万円</strong>
          <span className="yk-pricing-monthly-note">× 4ヶ月</span>
        </p>
      </div>

      <p className="yk-pricing-note">
        80万円は1名採用の費用ではなく、今後の採用単価を下げる<strong>自社採用導線づくり</strong>への投資としてご覧ください。
      </p>
    </Panel>
  );
}

export default function YamagatakanLp() {
  return (
    <div className="yk-root">
      <header className="yk-header">
        <p className="yk-logo">山県館 採用戦略提案</p>
        <nav className="yk-nav" aria-label="ページ内ナビ">
          {navItems.slice(0, 8).map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>
        <details className="yk-nav-mobile">
          <summary aria-label="メニューを開く">目次</summary>
          <div className="yk-nav-mobile-panel">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`}>
                {item.label}
              </a>
            ))}
          </div>
        </details>
      </header>

      {/* 01 Hero */}
      <section className="yk-hero yk-slide">
        <div
          className="yk-hero-bg"
          aria-hidden="true"
          style={{ backgroundImage: heroBg }}
        />
        <div className="yk-hero-inner">
          <p className="yk-hero-client">川浦温泉 山県館 御中</p>
          <p className="yk-hero-tag">採用戦略提案資料</p>
          <h1 className="yk-hero-title yk-serif">
            五百年の湯を、
            <br />
            次の担い手へ。
          </h1>
          <p className="yk-hero-sub">
            山県館の歴史・温泉・おもてなしを、採用の力に変えるためのSNS採用戦略。
          </p>
        </div>
      </section>

      {/* 02 Executive Summary */}
      <section id="summary" className="yk-section yk-slide">
        <div className="yk-inner">
          <SectionHeader
            num="01"
            eyebrow="EXECUTIVE SUMMARY"
            title="採用は、募集ではなく「継承」である。"
            lead="山県館様の採用において本当に伝えるべきものは、給与条件や勤務時間だけではない。五百年にわたり受け継がれてきた川浦の湯、武田信玄公ゆかりの歴史、山あいの旅館でお客様を迎える所作——だからこそSNSと採用LPで、働く意味や空気感を日常的に見える形にしていく必要がある。"
          />

          <Panel>
            <div className="yk-table-wrap">
              <table className="yk-table">
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

          <Panel className="yk-subsection-panel yk-panel-body">
            <h3 className="yk-h3 yk-serif">提案の前提</h3>
            <ul className="yk-list">
              {premiseItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Panel>

          <Panel className="yk-subsection-panel yk-panel-body">
            <h3 className="yk-h3 yk-serif">採用対象の設計軸</h3>
            <p className="yk-panel-lead">
              国籍ではなく、<strong>接遇スキル・文化理解・日本語コミュニケーション力</strong>で設計する。
            </p>
            <ul className="yk-list">
              {skillCriteria.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Panel>
        </div>
      </section>

      {/* 03 Essence */}
      <section id="essence" className="yk-section is-alt yk-slide">
        <div className="yk-inner">
          <SectionHeader
            num="02"
            eyebrow="ESSENCE"
            title="山県館様は「条件」だけで選ばれる職場ではない"
            lead="一般的な採用では条件が比較されるが、山県館様の場合、それだけで勝負すると都市部のホテルや大手宿泊施設と比較されやすくなる。採用で伝えるべき価値は、条件面だけではなく、以下のような独自性である。"
          />
          <Panel>
            <ul className="yk-check-list">
              {essenceValues.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Panel>
          <div className="yk-quote-grid">
            {essenceQuotes.map((q) => (
              <QuoteBlock key={q} text={q} />
            ))}
          </div>
        </div>
      </section>

      {/* 04 Market */}
      <section id="market" className="yk-section yk-slide">
        <div className="yk-inner">
          <SectionHeader
            num="03"
            eyebrow="MARKET"
            title="宿泊業界の採用は難化している"
            lead="需要の回復と人手不足が同時に進む中、採用前の理解促進が定着率を左右する。"
          />
          <div className="yk-cards yk-cards-panel is-3">
            {marketPoints.map((item) => (
              <div key={item.title} className="yk-card">
                <p className="yk-card-label">{item.title}</p>
                <p className="yk-card-text">{item.text}</p>
              </div>
            ))}
          </div>
          <Panel className="yk-subsection-panel yk-panel-body">
            <h3 className="yk-h3 yk-serif">山県館様における示唆</h3>
            <p className="yk-panel-lead">
              SNSと採用LPを使って、以下を候補者に伝える必要がある。
            </p>
            <ul className="yk-tags yk-tags-left">
              {marketInsights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Panel>
        </div>
      </section>

      {/* 05 Challenges */}
      <section id="challenges" className="yk-section is-alt yk-slide">
        <div className="yk-inner">
          <SectionHeader
            num="04"
            eyebrow="CHALLENGES"
            title="現状課題の整理"
            lead="月15万円規模の媒体費がかかっても十分な採用成果が出ておらず、採用単価80万円で早期離職した事例もある。"
          />
          <div className="yk-two-col yk-two-col-panel">
            <Panel>
              <h3 className="yk-h3 yk-serif">採用コストの悪循環</h3>
              <ol className="yk-cycle">
                {challengeCycle.map((step, i) => (
                  <li key={step}>
                    <span className="yk-cycle-num">{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </Panel>
            <Panel>
              <h3 className="yk-h3 yk-serif">自社の採用資産が残っていない</h3>
              <p className="yk-lead">
                求人媒体は掲載を止めると露出も止まる。SNSや採用LPは運用を続けることで投稿・動画・導線が蓄積し、自社の採用資産になる。11月の契約終了前に、12月以降も継続できる自社導線を今のうちに作る必要がある。
              </p>
              <h3 className="yk-h3 yk-serif yk-h3-spaced">山県館様らしさが伝わりきっていない</h3>
              <ul className="yk-list">
                {strengths.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Panel>
          </div>
        </div>
      </section>

      {/* Highlight */}
      <section className="yk-section is-dark yk-highlight-strip yk-slide-compact">
        <div className="yk-inner">
          <p className="yk-eyebrow">PROPOSAL</p>
          <h2 className="yk-h2 yk-serif">
            掲載を止めたら消える媒体ではなく、
            <br />
            残り続ける<strong>採用資産</strong>を作る。
          </h2>
        </div>
      </section>

      {/* 06 Target */}
      <section id="target" className="yk-section yk-slide">
        <div className="yk-inner">
          <SectionHeader
            num="05"
            eyebrow="TARGET"
            title="採用ターゲット設計"
            lead="短期では接遇品質の理解がある候補者を優先。中長期では母集団を広げる余地を残す。"
          />
          <div className="yk-two-col yk-two-col-panel">
            <Panel>
              <h3 className="yk-h3 yk-serif">短期ターゲット</h3>
              <p className="yk-h3-sub">主な人物像</p>
              <ul className="yk-list">
                {targetProfiles.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Panel>
            <Panel>
              <h3 className="yk-h3 yk-serif">中長期ターゲット</h3>
              <ul className="yk-list">
                {longTermTargets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Panel>
          </div>
          <Panel className="yk-subsection-panel">
            <div className="yk-table-wrap">
              <table className="yk-table">
              <thead>
                <tr>
                  <th>候補者の関心</th>
                  <th>打ち出す内容</th>
                </tr>
              </thead>
              <tbody>
                {targetAppeal.map((row) => (
                  <tr key={row.interest}>
                    <th>{row.interest}</th>
                    <td>{row.content}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </Panel>
        </div>
      </section>

      {/* 07 Concept */}
      <section id="concept" className="yk-section is-enji yk-slide">
        <div className="yk-inner yk-concept-inner">
          <p className="yk-eyebrow">CONCEPT</p>
          <h2 className="yk-concept-title yk-serif">五百年の湯を、次の担い手へ。</h2>
          <p className="yk-concept-lead">
            山県館様の採用は、単なる求人ではない。
            <br />
            お客様に選ばれてきた歴史を、次の時代へ受け継ぐ仲間を探す活動である。
          </p>
          <div className="yk-concept-copies">
            <div>
              <p className="yk-concept-label">サブコピー</p>
              <QuoteBlock text="武田信玄公ゆかりの湯宿で、\n日本のおもてなしを、日々の所作から学ぶ。" />
            </div>
            <div>
              <p className="yk-concept-label">補助コピー</p>
              <QuoteBlock text="山県館で働くことは、\nお客様の旅の記憶に、静かに寄り添うこと。" />
            </div>
          </div>
        </div>
      </section>

      {/* 08 Channels */}
      <section id="channels" className="yk-section is-alt yk-slide">
        <div className="yk-inner">
          <SectionHeader
            num="06"
            eyebrow="CHANNELS"
            title="採用導線の全体設計"
            lead="4つの接点で、認知から応募までを設計する。"
          />
          <Panel className="yk-flow-panel">
            <div className="yk-flow">
            <div className="yk-flow-item">
              <strong>Instagram</strong>
              <span>歴史・温泉・料理・自然・旅館ブランド</span>
            </div>
            <div className="yk-flow-arrow" aria-hidden="true">↓</div>
            <div className="yk-flow-item">
              <strong>TikTok</strong>
              <span>働く人・日常・スタッフの空気感</span>
            </div>
            <div className="yk-flow-arrow" aria-hidden="true">↓</div>
            <div className="yk-flow-item is-accent">
              <strong>採用LP</strong>
              <span>仕事内容・人・条件・応募導線</span>
            </div>
            <div className="yk-flow-note">11月まで：求人媒体を短期応募獲得チャネルとして併用</div>
            </div>
          </Panel>
          <Panel>
            <div className="yk-table-wrap">
              <table className="yk-table">
              <thead>
                <tr>
                  <th>チャネル</th>
                  <th>役割</th>
                  <th>発信内容</th>
                  <th>目的</th>
                </tr>
              </thead>
              <tbody>
                {channelRoles.map((row) => (
                  <tr key={row.channel}>
                    <th>{row.channel}</th>
                    <td>{row.role}</td>
                    <td>{row.content}</td>
                    <td>{row.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </Panel>
        </div>
      </section>

      {/* 09 Instagram */}
      <section id="instagram" className="yk-section yk-slide">
        <div className="yk-inner">
          <SectionHeader
            num="07"
            eyebrow="INSTAGRAM"
            title="旅館公式としてのブランド発信"
            lead="採用色を前面に出しすぎず、山県館様の世界観を丁寧に伝える。候補者が見たときに「ここで働くことに誇りを持てそう」と感じられる状態を作る。"
          />
          <Panel>
            <div className="yk-table-wrap">
              <table className="yk-table">
              <thead>
                <tr>
                  <th>テーマ</th>
                  <th>内容例</th>
                </tr>
              </thead>
              <tbody>
                {instagramThemes.map((row) => (
                  <tr key={row.theme}>
                    <th>{row.theme}</th>
                    <td>{row.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </Panel>
          <div className="yk-two-col yk-two-col-panel">
            <Panel>
              <h3 className="yk-h3 yk-serif">投稿トーン</h3>
              <ul className="yk-list">
                {instagramTone.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Panel>
            <Panel>
              <h3 className="yk-h3 yk-serif">投稿コピー例</h3>
              {instagramCopies.map((copy) => (
                <QuoteBlock key={copy} text={copy} />
              ))}
            </Panel>
          </div>
        </div>
      </section>

      {/* 10 TikTok */}
      <section id="tiktok" className="yk-section is-alt yk-slide">
        <div className="yk-inner">
          <SectionHeader
            num="08"
            eyebrow="TIKTOK"
            title="採用の裏側を、親しみやすく伝える"
            lead="Instagramが旅館の美しい表側を担う一方で、TikTokは働く裏側・人柄・日常を伝える。堀内さんを軸にしつつ、個人に依存しすぎない設計とする。"
          />
          <div className="yk-subsection">
            <h3 className="yk-h3 yk-serif">運用上の注意</h3>
            <ul className="yk-list">
              {tiktokNotes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <Panel>
            <div className="yk-table-wrap">
              <table className="yk-table">
              <thead>
                <tr>
                  <th>企画名</th>
                  <th>内容</th>
                  <th>狙い</th>
                </tr>
              </thead>
              <tbody>
                {tiktokPlans.map((row) => (
                  <tr key={row.name}>
                    <th>{row.name}</th>
                    <td>{row.content}</td>
                    <td>{row.goal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </Panel>
        </div>
      </section>

      {/* 11 Recruit LP */}
      <section id="recruit-lp" className="yk-section yk-slide">
        <div className="yk-inner">
          <SectionHeader
            num="09"
            eyebrow="RECRUIT LP"
            title="採用LP戦略"
            lead="SNSで興味を持った人が、仕事内容・職場の雰囲気・応募条件を確認できる受け皿。応募前の不安を減らし、ミスマッチを防ぐ。"
          />
          <Panel>
            <ol className="yk-numbered">
              {recruitLpSections.map((item, i) => (
                <li key={item}>
                  <span className="yk-numbered-num">{String(i + 1).padStart(2, "0")}</span>
                  {item}
                </li>
              ))}
            </ol>
          </Panel>
        </div>
      </section>

      {/* 12 Schedule */}
      <section id="schedule" className="yk-section is-alt yk-slide">
        <div className="yk-inner">
          <SectionHeader
            num="10"
            eyebrow="SCHEDULE"
            title="7月〜10月のスケジュール"
            lead="7月に設計と準備、8月に制作と発信準備、9月から本格運用。10月までの4ヶ月間で自社採用導線を整える。"
          />
          <Panel>
            <div className="yk-table-wrap">
              <table className="yk-table yk-table-schedule">
              <thead>
                <tr>
                  <th>時期</th>
                  <th>フェーズ</th>
                  <th>実施内容</th>
                  <th>目的</th>
                </tr>
              </thead>
              <tbody>
                {scheduleRows.map((row) => (
                  <tr key={row.period}>
                    <th>{row.period}</th>
                    <td>{row.phase}</td>
                    <td>{row.content}</td>
                    <td>{row.goal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </Panel>
          <Panel className="yk-subsection-panel">
            <h3 className="yk-h3 yk-serif">7月〜10月のゴール</h3>
            <ul className="yk-check-list is-compact">
              {phaseGoals.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Panel>
        </div>
      </section>

      {/* 13 KPI */}
      <section id="kpi" className="yk-section yk-slide">
        <div className="yk-inner">
          <SectionHeader
            num="11"
            eyebrow="KPI"
            title="成果指標の設計"
            lead="短期の採用数だけでなく、定着可能性と自社資産の蓄積を見る。"
          />
          <Panel className="yk-subsection-panel">
            <h3 className="yk-h3 yk-serif yk-h3-centered">最終KPI</h3>
            <div className="yk-cards is-4 yk-cards-panel">
              {kpiFinal.map((item) => (
                <div key={item.kpi} className="yk-card">
                  <p className="yk-card-label">{item.kpi}</p>
                  <p className="yk-card-text">{item.target}</p>
                </div>
              ))}
            </div>
          </Panel>
          <Panel className="yk-subsection-panel">
            <div className="yk-table-wrap">
              <table className="yk-table">
              <thead>
                <tr>
                  <th>項目</th>
                  <th>見る指標</th>
                </tr>
              </thead>
              <tbody>
                {kpiIntermediate.map((row) => (
                  <tr key={row.item}>
                    <th>{row.item}</th>
                    <td>{row.metrics}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </Panel>
          <Panel className="yk-subsection-panel">
            <h3 className="yk-h3 yk-serif yk-h3-centered">質的指標</h3>
            <ul className="yk-tags yk-tags-centered">
              {kpiQualitative.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Panel>
        </div>
      </section>

      {/* 14 Pricing */}
      <section id="pricing" className="yk-section is-alt yk-slide">
        <div className="yk-inner">
          <SectionHeader
            num="12"
            eyebrow="PRICING"
            title="費用設計"
            lead="単なる値引きではなく、山県館様の採用課題に対してまず土台を作るための導入価格です。"
          />
          <PricingSection />
          <QuoteBlock text="掲載を止めたら消える求人媒体ではなく、\n投稿・動画・採用LPとして残り続ける採用資産を作る。" center />
        </div>
      </section>

      {/* 15 Scope */}
      <section id="scope" className="yk-section yk-slide">
        <div className="yk-inner">
          <SectionHeader
            num="13"
            eyebrow="SCOPE"
            title="支援範囲"
          />
          <div className="yk-two-col yk-two-col-panel">
            <Panel>
              <h3 className="yk-h3 yk-serif">含まれる業務</h3>
              <ul className="yk-check-list is-compact">
                {scopeIncluded.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Panel>
            <Panel>
              <h3 className="yk-h3 yk-serif">別途相談事項</h3>
              <ul className="yk-list">
                {scopeExcluded.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Panel>
          </div>
        </div>
      </section>

      {/* 16 Risks */}
      <section id="risks" className="yk-section is-alt yk-slide">
        <div className="yk-inner">
          <SectionHeader
            num="14"
            eyebrow="RISKS"
            title="リスクと対応方針"
          />
          <div className="yk-cards yk-cards-panel">
            {risks.map((item) => (
              <div key={item.title} className="yk-card">
                <p className="yk-card-label">{item.title}</p>
                <p className="yk-card-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 17 December options */}
      <section id="options" className="yk-section yk-slide">
        <div className="yk-inner">
          <SectionHeader
            num="15"
            eyebrow="OPTIONS"
            title="12月以降の選択肢"
            lead="11月で求人媒体の契約が終了した後、状況に応じて判断する。"
          />
          <Panel>
            <div className="yk-table-wrap">
              <table className="yk-table">
              <thead>
                <tr>
                  <th>選択肢</th>
                  <th>内容</th>
                  <th>判断基準</th>
                </tr>
              </thead>
              <tbody>
                {decemberOptions.map((row) => (
                  <tr key={row.option}>
                    <th>{row.option}</th>
                    <td>{row.content}</td>
                    <td>{row.criteria}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </Panel>
        </div>
      </section>

      {/* 18 Next Action */}
      <section id="next" className="yk-section is-dark yk-slide">
        <div className="yk-inner">
          <SectionHeader
            num="16"
            eyebrow="NEXT ACTION"
            title="提案前に確定したい事項"
          />
          <div className="yk-two-col yk-two-col-panel">
            <Panel>
              <ul className="yk-list yk-list-light">
                {nextActionConfirm.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Panel>
            <Panel>
              <h3 className="yk-h3 yk-serif yk-light">初回打合せで確認する質問</h3>
              <ol className="yk-meeting-list">
                {meetingQuestions.map((q, i) => (
                  <li key={q}>
                    <span>{i + 1}</span>
                    {q}
                  </li>
                ))}
              </ol>
            </Panel>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="yk-section is-enji yk-slide-compact yk-closing">
        <div className="yk-inner yk-closing-inner">
          {closingQuotes.map((q) => (
            <QuoteBlock key={q} text={q} center />
          ))}
        </div>
      </section>

      <footer className="yk-footer">
        <p>山県館 採用戦略提案資料</p>
        <p className="yk-footer-sub">川浦温泉 山県館様 御中</p>
      </footer>
    </div>
  );
}
