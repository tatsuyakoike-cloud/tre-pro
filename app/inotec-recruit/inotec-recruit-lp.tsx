import "./inotec-recruit.css";
import { InotecHeader, InotecMobileNav } from "./inotec-client";
import { PcLines, renderText } from "./inotec-text";
import {
  site,
  navItems,
  heroCtas,
  sectionCopy,
  storyHighlights,
  workCategories,
  dayTimeline,
  environmentItems,
  careerSteps,
  stats,
  snsLinks,
  recruitFaq,
  jobs,
  corporateReasons,
  serviceCategories,
  workFlow,
  corporateFaq,
  images,
} from "./inotec-content";

function SectionHead({
  label,
  title,
  lead,
}: {
  label: string;
  title: string | readonly string[];
  lead?: string | readonly string[];
}) {
  return (
    <header className="inotec-section-head">
      <span className="inotec-section-label">{label}</span>
      <h2 className="inotec-h2 inotec-serif">{renderText(title)}</h2>
      {lead && <p className="inotec-lead">{renderText(lead)}</p>}
    </header>
  );
}

function CtaButton({
  href,
  label,
  variant,
}: {
  href: string;
  label: string;
  variant: "primary" | "secondary" | "outline";
}) {
  const cls =
    variant === "primary"
      ? "inotec-btn inotec-btn-primary"
      : variant === "secondary"
        ? "inotec-btn inotec-btn-secondary"
        : "inotec-btn inotec-btn-outline";
  return (
    <a href={href} className={cls}>
      {label}
    </a>
  );
}

export default function InotecRecruitLp() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: site.name,
        url: site.officialUrl,
        telephone: site.tel,
        logo: site.logoUrl,
        address: {
          "@type": "PostalAddress",
          streetAddress: "千葉県千葉市中央区仁戸名町141 仁戸名ベース B-2",
          addressLocality: "千葉市中央区",
          addressRegion: "千葉県",
          postalCode: "260-0801",
          addressCountry: "JP",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: recruitFaq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };

  return (
    <div className="inotec-root">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <InotecHeader>
        <div className="inotec-header-inner">
          <a href="#" className="inotec-logo-link">
            <img
              src={site.logoUrl}
              alt={site.name}
              className="inotec-logo-img inotec-logo-img--white"
              width={467}
              height={58}
            />
          </a>

          <nav className="inotec-nav" aria-label="メインナビゲーション">
            {navItems.slice(0, 6).map((item) => (
              <a key={item.id} href={`#${item.id}`} className="inotec-nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="inotec-header-actions">
            <a href="#entry" className="inotec-header-cta">
              エントリー
            </a>
            <InotecMobileNav items={navItems} />
          </div>
        </div>
      </InotecHeader>

      <main>
        <section className="inotec-hero" aria-label="ファーストビュー">
          <div
            className="inotec-hero-bg"
            style={{ backgroundImage: `url(${images.hero})` }}
            role="img"
            aria-label="住宅工事の現場"
          />
          <div className="inotec-hero-overlay" aria-hidden="true" />
          <div className="inotec-hero-content">
            <p className="inotec-hero-label">採用・コーポレート</p>
            <h1 className="inotec-hero-title inotec-serif">
              <PcLines lines={[...site.tagline]} always />
            </h1>
            <p className="inotec-hero-lead">
              <PcLines lines={[...site.subCopy]} always />
            </p>
            <div className="inotec-cta-row">
              {heroCtas.map((cta) => (
                <CtaButton key={cta.label} {...cta} />
              ))}
            </div>
          </div>
        </section>

        <section id="story" className="inotec-section">
          <div className="inotec-container">
            <div className="inotec-story-grid">
              <div>
                <SectionHead
                  label={sectionCopy.story.label}
                  title={sectionCopy.story.title}
                  lead={sectionCopy.story.lead}
                />
                <p className="inotec-body">
                  <PcLines lines={[...sectionCopy.story.body]} />
                </p>
                <div className="inotec-highlight-grid">
                  {storyHighlights.map((value) => (
                    <span key={value} className="inotec-highlight-value">
                      {value}
                    </span>
                  ))}
                </div>
              </div>
              <img
                src={images.story}
                alt="新築住宅の外観"
                className="inotec-story-photo"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section id="work" className="inotec-section inotec-section-alt">
          <div className="inotec-container">
            <SectionHead {...sectionCopy.work} />
            <div className="inotec-work-bento">
              <div className="inotec-work-row inotec-work-row--3">
                {workCategories.slice(0, 3).map((cat) => (
                  <article key={cat.title} className="inotec-card">
                    <img src={cat.image} alt={cat.title} loading="lazy" />
                    <div className="inotec-card-body">
                      <p className="inotec-card-category">{cat.title}</p>
                      <h3 className="inotec-card-title">{cat.recruitLabel}</h3>
                      <p className="inotec-card-text">{cat.items.join(" / ")}</p>
                    </div>
                  </article>
                ))}
              </div>
              <div className="inotec-work-row inotec-work-row--2">
                {workCategories.slice(3).map((cat) => (
                  <article key={cat.title} className="inotec-card">
                    <img src={cat.image} alt={cat.title} loading="lazy" />
                    <div className="inotec-card-body">
                      <p className="inotec-card-category">{cat.title}</p>
                      <h3 className="inotec-card-title">{cat.recruitLabel}</h3>
                      <p className="inotec-card-text">{cat.items.join(" / ")}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="day" className="inotec-section inotec-section-alt">
          <div className="inotec-container">
            <SectionHead {...sectionCopy.day} />
            <div className="inotec-day-grid">
              {dayTimeline.map((item) => (
                <div key={item.time} className="inotec-day-panel">
                  <p className="inotec-day-time">{item.time}</p>
                  <h3 className="inotec-day-title">{item.title}</h3>
                  <p className="inotec-day-text">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="environment" className="inotec-section inotec-section-alt">
          <div className="inotec-container">
            <SectionHead {...sectionCopy.environment} />
            <div className="inotec-grid-2">
              {environmentItems.map((item) => (
                <div key={item.title} className="inotec-panel">
                  <h3 className="inotec-panel-title">{item.title}</h3>
                  <p className="inotec-panel-text">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="career" className="inotec-section inotec-section-soft">
          <div className="inotec-container">
            <SectionHead {...sectionCopy.career} />
            <div className="inotec-grid-2">
              {careerSteps.map((step) => (
                <div key={step.step} className="inotec-career-panel">
                  <p className="inotec-career-step">STEP {step.step}</p>
                  <h3 className="inotec-career-title">{step.title}</h3>
                  <p className="inotec-career-text">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="message" className="inotec-section inotec-message-section">
          <div className="inotec-container inotec-message-grid">
            <div className="inotec-message-photo-wrap">
              <img
                src={images.message}
                alt="代表メッセージ"
                className="inotec-message-photo"
                loading="lazy"
              />
            </div>
            <div>
              <SectionHead {...sectionCopy.message} />
              <blockquote className="inotec-quote" style={{ marginTop: "1.5rem" }}>
                <PcLines lines={[...sectionCopy.message.quote]} />
              </blockquote>
              <p
                className="inotec-body"
                style={{ marginTop: "1.75rem", fontWeight: 700, color: "var(--inotec-green)" }}
              >
                代表取締役　{site.representative}
              </p>
            </div>
          </div>
        </section>

        <section className="inotec-section inotec-section-alt">
          <div className="inotec-container">
            <SectionHead {...sectionCopy.data} />
            <div className="inotec-stat-grid">
              {stats.map((item) => (
                <div key={item.label} className="inotec-stat">
                  <p className="inotec-stat-value">
                    {item.value}
                    <span style={{ marginLeft: "0.25rem", fontSize: "1rem" }}>{item.unit}</span>
                  </p>
                  <p className="inotec-stat-label">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="sns" className="inotec-section">
          <div className="inotec-container">
            <SectionHead {...sectionCopy.sns} />
            <div style={{ display: "grid", gap: "0.75rem" }}>
              {snsLinks.map((link) =>
                link.comingSoon ? (
                  <div
                    key={link.name}
                    className="inotec-sns-banner is-static"
                    style={{ opacity: 0.85 }}
                  >
                    <div>
                      <p style={{ fontWeight: 700 }}>
                        {link.name}
                        <span className="inotec-tag" style={{ marginLeft: "0.5rem" }}>
                          準備中
                        </span>
                      </p>
                      <p className="inotec-card-text">{link.desc}</p>
                    </div>
                  </div>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="inotec-sns-banner"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div>
                      <p style={{ fontWeight: 700 }}>{link.name}</p>
                      <p className="inotec-card-text">{link.desc}</p>
                    </div>
                  </a>
                ),
              )}
            </div>
          </div>
        </section>

        <section id="faq" className="inotec-section inotec-section-alt">
          <div className="inotec-container" style={{ maxWidth: "48rem" }}>
            <SectionHead {...sectionCopy.faq} />
            <div className="inotec-faq">
              {recruitFaq.map((item) => (
                <details key={item.q}>
                  <summary>{item.q}</summary>
                  <p className="inotec-faq-answer">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="jobs" className="inotec-section">
          <div className="inotec-container">
            <SectionHead {...sectionCopy.jobs} />
            <div className="inotec-grid-3">
              {jobs.map((job) => (
                <article key={job.title} className="inotec-card inotec-card-body">
                  <p className="inotec-card-category">{job.type}</p>
                  <h3 className="inotec-card-title" style={{ fontSize: "1.125rem" }}>
                    {job.title}
                  </h3>
                  <p className="inotec-card-text" style={{ marginTop: "0.75rem" }}>
                    {job.summary}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "1rem" }}>
                    {job.tags.map((tag) => (
                      <span key={tag} className="inotec-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#entry"
                    className="inotec-btn inotec-btn-dark"
                    style={{ width: "100%", marginTop: "1.25rem" }}
                  >
                    この職種にエントリー
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="corporate" className="inotec-section">
          <div className="inotec-container">
            <SectionHead {...sectionCopy.corporate} />

            <div className="inotec-grid-3" style={{ marginBottom: "3rem" }}>
              {corporateReasons.map((reason) => (
                <div key={reason} className="inotec-corporate-panel">
                  {reason}
                </div>
              ))}
            </div>

            <h3 className="inotec-h2 inotec-serif" style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
              施工メニュー
            </h3>
            <div className="inotec-grid-3" style={{ marginBottom: "3rem" }}>
              {serviceCategories.map((cat) => (
                <div key={cat.title} className="inotec-corporate-panel">
                  <h4>{cat.title}</h4>
                  <p style={{ marginTop: "0.5rem" }}>{cat.items.join(" / ")}</p>
                </div>
              ))}
            </div>

            <h3 className="inotec-h2 inotec-serif" style={{ fontSize: "1.25rem", marginBottom: "1.25rem" }}>
              工事までの流れ
            </h3>
            <div className="inotec-grid-2" style={{ marginBottom: "3rem" }}>
              {workFlow.map((step) => (
                <div key={step.step} className="inotec-flow-step">
                  <span className="inotec-flow-num">{step.step}</span>
                  <div>
                    <h4 style={{ fontWeight: 700 }}>{step.title}</h4>
                    <p className="inotec-body" style={{ marginTop: "0.375rem" }}>
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="inotec-h2 inotec-serif" style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
              よくある質問（お客様向け）
            </h3>
            <div className="inotec-faq inotec-faq--light" style={{ maxWidth: "48rem" }}>
              {corporateFaq.map((item) => (
                <details key={item.q}>
                  <summary>{item.q}</summary>
                  <p className="inotec-faq-answer">{item.a}</p>
                </details>
              ))}
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "2.5rem" }}>
              <a
                href={site.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inotec-btn inotec-btn-primary"
              >
                公式サイトを見る
              </a>
              <a href={site.telLink} className="inotec-btn inotec-btn-dark">
                無料現地調査の相談 {site.tel}
              </a>
            </div>
          </div>
        </section>

        <section id="company" className="inotec-section inotec-section-alt">
          <div className="inotec-container">
            <SectionHead {...sectionCopy.company} />
            <div className="inotec-table-wrap">
              <table className="inotec-table">
                <tbody>
                  {[
                    ["社名", site.name],
                    ["所在地", site.address],
                    ["代表取締役", site.representative],
                    ["設立", site.founded],
                    ["資本金", site.capital],
                    ["事業内容", "住宅オプション工事 / リフォーム工事事業"],
                    ["対応エリア", site.area],
                    ["電話番号", site.tel],
                  ].map(([label, value]) => (
                    <tr key={label}>
                      <th>{label}</th>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="entry" className="inotec-section">
          <div className="inotec-container inotec-entry-grid">
            <div>
              <SectionHead {...sectionCopy.entry} />
              <div className="inotec-body" style={{ marginTop: "1.5rem" }}>
                <p>
                  <span style={{ fontWeight: 700 }}>電話：</span>
                  <a href={site.telLink} style={{ color: "var(--inotec-green)", textDecoration: "underline" }}>
                    {site.tel}
                  </a>
                </p>
                <p style={{ marginTop: "0.75rem" }}>
                  <span style={{ fontWeight: 700 }}>公式サイト：</span>
                  <a
                    href={site.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--inotec-green)", textDecoration: "underline" }}
                  >
                    inotec.jp
                  </a>
                </p>
              </div>
            </div>

            <form
              className="inotec-form inotec-panel"
              action={`mailto:${site.email}`}
              method="post"
              encType="text/plain"
            >
              <label>
                お名前 *
                <input type="text" name="name" required autoComplete="name" />
              </label>
              <div className="inotec-grid-2">
                <label>
                  電話番号 *
                  <input type="tel" name="tel" required autoComplete="tel" />
                </label>
                <label>
                  メールアドレス *
                  <input type="email" name="email" required autoComplete="email" />
                </label>
              </div>
              <label>
                希望職種
                <select name="job" defaultValue="">
                  <option value="" disabled>
                    選択してください
                  </option>
                  {jobs.map((job) => (
                    <option key={job.title} value={job.title}>
                      {job.title}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                経験の有無
                <select name="experience" defaultValue="未経験">
                  <option value="未経験">未経験</option>
                  <option value="経験あり">経験あり</option>
                </select>
              </label>
              <label>
                普通免許
                <select name="license" defaultValue="">
                  <option value="" disabled>
                    選択してください
                  </option>
                  <option value="あり">あり</option>
                  <option value="なし">なし</option>
                </select>
              </label>
              <label>
                自由記述
                <textarea name="message" rows={4} placeholder="見学希望、希望連絡方法など" />
              </label>
              <button type="submit" className="inotec-btn inotec-btn-dark" style={{ width: "100%" }}>
                送信する
              </button>
              <p style={{ fontSize: "0.75rem", lineHeight: 1.7, color: "var(--inotec-gray)" }}>
                ※ 送信ボタンを押すとメールソフトが起動します。フォーム送信機能は今後追加予定です。
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="inotec-footer">
        <div className="inotec-container inotec-entry-grid">
          <div>
            <img
              src={site.logoUrl}
              alt={site.name}
              className="inotec-logo-img inotec-logo-img--white"
              style={{ marginBottom: "1rem" }}
              width={467}
              height={58}
            />
            <p style={{ fontSize: "0.875rem", lineHeight: 1.75 }}>{site.address}</p>
            <p style={{ marginTop: "0.5rem", fontSize: "0.875rem" }}>
              TEL: <a href={site.telLink}>{site.tel}</a>
            </p>
          </div>
          <nav className="inotec-grid-2" aria-label="フッターナビ">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} style={{ fontSize: "0.875rem" }}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <p
          className="inotec-container"
          style={{
            marginTop: "2rem",
            paddingTop: "1.5rem",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            textAlign: "center",
            fontSize: "0.75rem",
            color: "rgba(255,255,255,0.5)",
          }}
        >
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
