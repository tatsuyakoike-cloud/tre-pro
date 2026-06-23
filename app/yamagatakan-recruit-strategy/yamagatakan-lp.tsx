import "./yamagatakan.css";

const heroBg = `linear-gradient(135deg, rgba(31, 58, 45, 0.88) 0%, rgba(28, 28, 28, 0.75) 45%, rgba(122, 30, 30, 0.55) 100%), url('/tre-pro/images/yamagatakan-hero.svg')`;

const summaryCards = [
  {
    label: "短期",
    text: "4ヶ月で最低1名の採用につながる状態を作る",
  },
  {
    label: "中長期",
    text: "求人媒体に依存せず、自社SNS・採用LPから応募が生まれる導線へ",
  },
  {
    label: "11月まで",
    text: "媒体契約終了前に、SNSと採用LPの土台を構築",
  },
  {
    label: "12月以降",
    text: "SNS主体の採用導線へ移行し、状況に応じて媒体も判断",
  },
];

const channels = [
  {
    title: "Instagram",
    role: "旅館ブランドの発信",
    text: "歴史・温泉・料理・季節感を静かに伝え、「ここで働く誇り」を醸成する。",
  },
  {
    title: "TikTok",
    role: "働く裏側の可視化",
    text: "堀内さんを軸に、日常・接遇・仕事内容を親しみやすく見せる。",
  },
  {
    title: "採用LP",
    role: "応募前の受け皿",
    text: "仕事・人・条件・応募方法を整理し、ミスマッチを減らす。",
  },
];

const timeline = [
  { phase: "4月", text: "再撮影・運用打合せ・SNS方針整理" },
  { phase: "5〜7月", text: "採用LP構成・投稿企画・素材整理" },
  { phase: "8月", text: "採用LP公開・アカウント整備" },
  { phase: "8〜11月", text: "発信開始・改善・半内製化準備" },
  { phase: "12月以降", text: "SNS主体の採用導線へ移行" },
];

const scopeIncluded = [
  "採用戦略・ターゲット・コンセプト設計",
  "Instagram / TikTok 方針・投稿企画",
  "採用LP構成・制作ディレクション",
  "月次改善・KPI確認・半内製化整理",
];

export default function YamagatakanLp() {
  return (
    <div className="yk-root">
      <header className="yk-header">
        <p className="yk-logo">山県館 採用戦略提案</p>
        <nav className="yk-nav" aria-label="ページ内ナビ">
          <a href="#summary">概要</a>
          <a href="#strategy">施策</a>
          <a href="#schedule">スケジュール</a>
          <a href="#pricing">費用</a>
        </nav>
        <a href="#contact" className="yk-header-cta">
          相談する
        </a>
      </header>

      <section className="yk-hero">
        <div
          className="yk-hero-bg"
          aria-hidden="true"
          style={{ backgroundImage: heroBg }}
        />
        <div className="yk-hero-inner">
          <p className="yk-hero-client">川浦温泉 山県館 御中</p>
          <h1 className="yk-hero-title yk-serif">
            五百年の湯を、
            <br />
            次の担い手へ。
          </h1>
          <p className="yk-hero-sub">
            採用は、募集ではなく「継承」。
            <br />
            山県館の歴史・温泉・おもてなしを、SNSと採用LPで見える形にするご提案です。
          </p>
          <div className="yk-hero-actions">
            <a href="#summary" className="yk-cta yk-cta-primary">
              提案内容を見る
            </a>
            <a href="#contact" className="yk-cta yk-cta-secondary">
              相談する
            </a>
          </div>
        </div>
      </section>

      <section id="summary" className="yk-section">
        <div className="yk-inner">
          <p className="yk-eyebrow">SUMMARY</p>
          <h2 className="yk-h2 yk-serif">今回の提案の核</h2>
          <p className="yk-lead">
            求人媒体だけでは、五百年の湯と山県館らしいおもてなしは伝わりにくい。
            SNSで「働く意味と空気感」を日常発信し、採用LPで応募まで受け止める。
          </p>
          <div className="yk-cards">
            {summaryCards.map((item) => (
              <div key={item.label} className="yk-card">
                <p className="yk-card-label">{item.label}</p>
                <p className="yk-card-text">{item.text}</p>
              </div>
            ))}
          </div>
          <blockquote className="yk-quote">
            ただ働く場所ではなく、
            <br />
            日本のおもてなしを、日々の所作から学べる場所。
          </blockquote>
        </div>
      </section>

      <section className="yk-section is-alt">
        <div className="yk-inner">
          <p className="yk-eyebrow">BACKGROUND</p>
          <h2 className="yk-h2 yk-serif">なぜ、今SNS採用か</h2>
          <div className="yk-two-col">
            <div>
              <p className="yk-lead">
                月15万円規模の媒体費がかかっても応募が来ず、採用単価80万円で早期離職——
                掲載を止めると露出も止まる構造から脱却する必要があります。
              </p>
            </div>
            <div>
              <ul className="yk-list">
                <li>武田信玄公ゆかりの歴史ある湯宿という独自性</li>
                <li>接遇品質を理解し、定着する人材との接点づくり</li>
                <li>11月の媒体契約終了前に、自社導線の土台を作る</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="strategy" className="yk-section">
        <div className="yk-inner">
          <p className="yk-eyebrow">STRATEGY</p>
          <h2 className="yk-h2 yk-serif">3つの接点で採用導線を設計</h2>
          <div className="yk-cards is-3">
            {channels.map((item) => (
              <div key={item.title} className="yk-card">
                <p className="yk-card-label">{item.title}</p>
                <p className="yk-card-text">
                  <strong>{item.role}</strong>
                  <br />
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="schedule" className="yk-section is-alt">
        <div className="yk-inner">
          <p className="yk-eyebrow">SCHEDULE</p>
          <h2 className="yk-h2 yk-serif">4ヶ月集中フェーズの流れ</h2>
          <ul className="yk-timeline">
            {timeline.map((item) => (
              <li key={item.phase}>
                <strong>{item.phase}</strong>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="pricing" className="yk-section">
        <div className="yk-inner">
          <p className="yk-eyebrow">PRICING</p>
          <h2 className="yk-h2 yk-serif">費用設計</h2>
          <div className="yk-table-wrap">
            <table className="yk-table">
              <thead>
                <tr>
                  <th>項目</th>
                  <th className="num">通常</th>
                  <th className="num">特別提案</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>採用戦略・SNS運用・採用LP・伴走（4ヶ月）</td>
                  <td className="num">200万円</td>
                  <td className="num highlight">80万円</td>
                </tr>
                <tr>
                  <td>月額換算</td>
                  <td className="num">50万円</td>
                  <td className="num highlight">20万円</td>
                </tr>
              </tbody>
            </table>
          </div>
          <blockquote className="yk-quote">
            80万円は1名採用の費用ではなく、
            <br />
            今後の採用単価を下げる「自社採用導線づくり」への投資として捉えてください。
          </blockquote>
        </div>
      </section>

      <section className="yk-section is-alt">
        <div className="yk-inner">
          <p className="yk-eyebrow">SCOPE</p>
          <h2 className="yk-h2 yk-serif">支援範囲</h2>
          <ul className="yk-list">
            {scopeIncluded.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="yk-lead" style={{ marginTop: 20, fontSize: "0.84rem" }}>
            追加撮影・広告配信・フォーム/LINE実装・12月以降の運用は別途ご相談となります。
          </p>
        </div>
      </section>

      <section id="contact" className="yk-section is-dark yk-cta-strip">
        <div className="yk-inner">
          <p className="yk-eyebrow">NEXT STEP</p>
          <h2 className="yk-h2 yk-serif">
            求人媒体に依存する採用から、
            <br />
            山県館自身の言葉で人が集まる採用へ。
          </h2>
          <p className="yk-lead">
            その土台を、まずは4ヶ月で作ります。
          </p>
          <div className="yk-hero-actions" style={{ justifyContent: "center" }}>
            <a href="#contact" className="yk-cta yk-cta-primary">
              採用導線の設計を相談する
            </a>
          </div>
        </div>
      </section>

      <footer className="yk-footer">
        山県館 採用戦略提案資料
      </footer>
    </div>
  );
}
