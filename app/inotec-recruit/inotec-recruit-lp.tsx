import "./inotec-recruit.css";
import { InotecHeader, InotecMobileNav } from "./inotec-client";
import {
  site,
  navItems,
  heroCtas,
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
  dark = false,
}: {
  label: string;
  title: string;
  lead?: string;
  dark?: boolean;
}) {
  return (
    <header className="inotec-section-head">
      <span className="inotec-section-label">{label}</span>
      <h2 className={`inotec-h2 inotec-serif${dark ? "" : ""}`}>{title}</h2>
      {lead && <p className="inotec-lead">{lead}</p>}
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
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <a href="#" className="flex min-w-0 items-center gap-3">
            <span className="inotec-logo-mark">IN</span>
            <span className="inotec-logo-text">
              {site.shortName}
              <span className="block text-[0.6875rem] font-medium opacity-80">採用・コーポレート</span>
            </span>
          </a>

          <nav className="hidden items-center gap-5 lg:flex" aria-label="メインナビゲーション">
            {navItems.slice(0, 6).map((item) => (
              <a key={item.id} href={`#${item.id}`} className="inotec-nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#entry"
              className="hidden rounded-full bg-white px-4 py-2 text-sm font-bold text-[#0f2f4f] transition hover:bg-[#e8f1f8] sm:inline-flex"
            >
              エントリー
            </a>
            <InotecMobileNav items={navItems} />
          </div>
        </div>
      </InotecHeader>

      <main>
        {/* Hero */}
        <section className="inotec-hero" aria-label="ファーストビュー">
          <div
            className="inotec-hero-bg"
            style={{ backgroundImage: `url(${images.hero})` }}
            role="img"
            aria-label="住宅工事の現場"
          />
          <div className="inotec-hero-overlay" aria-hidden="true" />
          <div className="inotec-hero-content inotec-fade-in">
            <p className="inotec-eyebrow">RECRUIT / CORPORATE</p>
            <h1 className="inotec-hero-title inotec-serif">{site.tagline}</h1>
            <p className="inotec-hero-lead">{site.subCopy}</p>
            <div className="inotec-cta-row">
              {heroCtas.map((cta) => (
                <CtaButton key={cta.label} {...cta} />
              ))}
            </div>
          </div>
        </section>

        {/* Story */}
        <section id="story" className="inotec-section">
          <div className="inotec-container">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <SectionHead
                  label="STORY"
                  title="まだ新しい会社だからこそ、つくれる未来がある。"
                  lead="2024年に設立したINOTECは、千葉・埼玉を中心に、新築住宅のオプション工事やリフォーム工事を手がけています。網戸やシャッター、カップボード、エアコン、収納、外構まで、暮らしに関わる幅広い工事を通じて、お客様の新生活を支えています。"
                />
                <p className="mt-4 text-[0.9375rem] leading-7 text-[#4a5568]">
                  これから会社の仕組みや文化を一緒につくっていく仲間を募集しています。歴史の長さより、これから一緒に成長していくフェーズであることが、INOTECの魅力です。
                </p>
                <div className="inotec-stat-grid mt-8">
                  {storyHighlights.map((item) => (
                    <div key={item.label} className="inotec-stat">
                      <p className="inotec-stat-value">{item.value}</p>
                      <p className="inotec-stat-label">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="overflow-hidden rounded-[1.25rem] shadow-[0_12px_40px_rgba(15,47,79,0.12)]">
                <img
                  src={images.story}
                  alt="新築住宅の外観"
                  className="h-full min-h-[280px] w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="inotec-section inotec-section-alt">
          <div className="inotec-container">
            <SectionHead
              label="WORK"
              title="暮らしが始まる前の住まいを、もっと快適に整える。"
              lead="新築住宅は引き渡し時点で完成しているように見えても、実際の暮らしに合わせた調整や追加工事が必要になることがあります。INOTECの仕事は、お客様の暮らしに必要な機能を加えていく仕事です。"
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {workCategories.map((cat) => (
                <article key={cat.title} className="inotec-card">
                  <img src={cat.image} alt={cat.title} loading="lazy" />
                  <div className="p-5">
                    <p className="text-xs font-bold tracking-wide text-[#1e4d7b]">{cat.title}</p>
                    <h3 className="mt-2 text-lg font-bold leading-snug">{cat.recruitLabel}</h3>
                    <p className="mt-3 text-sm leading-6 text-[#4a5568]">
                      {cat.items.join(" / ")}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Day timeline */}
        <section id="day" className="inotec-section">
          <div className="inotec-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionHead
                label="ONE DAY"
                title="1日の流れ"
                lead="現場仕事が初めての方でも、一日の流れがイメージしやすいよう整理しました。"
              />
              <img
                src={images.office}
                alt="オフィスでの打ち合わせ"
                className="mt-6 hidden rounded-[1.25rem] object-cover shadow-md lg:block lg:h-64 lg:w-full"
                loading="lazy"
              />
            </div>
            <div className="inotec-timeline">
              {dayTimeline.map((item) => (
                <div key={item.time} className="inotec-timeline-item">
                  <p className="inotec-timeline-time">{item.time}</p>
                  <h3 className="inotec-timeline-title">{item.title}</h3>
                  <p className="inotec-timeline-text">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Environment */}
        <section id="environment" className="inotec-section inotec-section-alt">
          <div className="inotec-container">
            <SectionHead
              label="ENVIRONMENT"
              title="働く環境"
              lead="給与・休日・福利厚生などの詳細は面談時にご案内します。ここでは、仕事のイメージが湧く情報を中心に掲載しています。"
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {environmentItems.map((item) => (
                <div key={item.title} className="inotec-card p-6">
                  <h3 className="text-lg font-bold text-[#1e4d7b]">{item.title}</h3>
                  <p className="mt-3 text-[0.9375rem] leading-7 text-[#4a5568]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Career */}
        <section id="career" className="inotec-section inotec-section-dark">
          <div className="inotec-container">
            <SectionHead
              dark
              label="CAREER"
              title="一つの技術だけで終わらない。住まい全体を見られる人材へ。"
              lead="未経験から始めて、幅広い商材に対応し、将来的には施工管理や営業など多様なキャリアへ広がれます。"
            />
            <div className="grid gap-4 md:grid-cols-2">
              {careerSteps.map((step) => (
                <div
                  key={step.step}
                  className="rounded-[1.25rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                >
                  <span className="text-sm font-bold tracking-widest text-white/60">
                    STEP {step.step}
                  </span>
                  <h3 className="mt-2 text-xl font-bold">{step.title}</h3>
                  <p className="mt-2 text-[0.9375rem] leading-7 text-white/80">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Message */}
        <section id="message" className="inotec-section">
          <div className="inotec-container grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div className="overflow-hidden rounded-[1.25rem]">
              <img
                src={images.message}
                alt="代表メッセージ"
                className="h-72 w-full object-cover lg:h-full lg:min-h-[320px]"
                loading="lazy"
              />
            </div>
            <div>
              <SectionHead
                label="MESSAGE"
                title="代表メッセージ"
                lead="「住まいのあと少し」を丁寧に整えることで、お客様の新生活を支える。それがINOTECの仕事です。"
              />
              <blockquote className="mt-4 border-l-4 border-[#1e4d7b] pl-5 text-[0.9375rem] leading-8 text-[#4a5568]">
                私たちは2024年にスタートしたばかりの会社です。だからこそ、一人ひとりの声が会社の形に直結します。未経験からでも、現場で学び、成長できる環境を整えています。一緒に、関東の住まいを支えるチームをつくりませんか。
              </blockquote>
              <p className="mt-4 text-sm font-bold text-[#1e4d7b]">
                代表取締役　{site.representative}
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="inotec-section inotec-section-alt">
          <div className="inotec-container">
            <SectionHead
              label="DATA"
              title="数字で見るINOTEC"
              lead="設立間もない会社だからこそ、事業データと対応範囲で信頼の輪郭をお伝えします。"
            />
            <div className="inotec-stat-grid">
              {stats.map((item) => (
                <div key={item.label} className="inotec-stat">
                  <p className="inotec-stat-value">
                    {item.value}
                    <span className="ml-1 text-base">{item.unit}</span>
                  </p>
                  <p className="inotec-stat-label">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SNS / Tech Blog */}
        <section id="sns" className="inotec-section">
          <div className="inotec-container">
            <SectionHead
              label="CONTENTS"
              title="Tech Blog / SNS"
              lead="現場のリアル、施工の工夫、住まいづくりの知識を発信。応募前に会社の雰囲気を感じていただけます。"
            />
            <div className="grid gap-4">
              {snsLinks.map((link) =>
                link.comingSoon ? (
                  <div key={link.name} className="inotec-sns-banner cursor-default opacity-80">
                    <div>
                      <p className="font-bold text-[#0f2f4f]">
                        {link.name}
                        <span className="ml-2 rounded bg-[#e8f1f8] px-2 py-0.5 text-xs text-[#1e4d7b]">
                          準備中
                        </span>
                      </p>
                      <p className="mt-1 text-sm text-[#4a5568]">{link.desc}</p>
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
                      <p className="font-bold text-[#0f2f4f]">{link.name}</p>
                      <p className="mt-1 text-sm text-[#4a5568]">{link.desc}</p>
                    </div>
                  </a>
                ),
              )}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="inotec-section inotec-section-alt">
          <div className="inotec-container max-w-3xl">
            <SectionHead
              label="FAQ"
              title="よくある質問（採用）"
              lead="応募前の不安を解消するため、よくいただく質問をまとめました。"
            />
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

        {/* Jobs */}
        <section id="jobs" className="inotec-section">
          <div className="inotec-container">
            <SectionHead
              label="RECRUIT"
              title="募集要項"
              lead="職種ごとの詳細条件・給与・休日は面談時にご案内します。まずは気になる職種からエントリーください。"
            />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {jobs.map((job) => (
                <article key={job.title} className="inotec-card flex flex-col p-6">
                  <p className="text-xs font-bold text-[#1e4d7b]">{job.type}</p>
                  <h3 className="mt-2 text-xl font-bold">{job.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-[#4a5568]">{job.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[#e8f1f8] px-3 py-1 text-xs font-bold text-[#1e4d7b]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href="#entry" className="inotec-btn inotec-btn-secondary mt-5 w-full">
                    この職種にエントリー
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Corporate */}
        <section id="corporate" className="inotec-section inotec-section-dark">
          <div className="inotec-container">
            <SectionHead
              dark
              label="CORPORATE"
              title="新築住宅のオプション工事を、もっと分かりやすく、安心に。"
              lead="千葉・埼玉を中心に、関東近辺の住宅オプション工事・リフォーム工事に対応。お客様・取引先の方もこちらをご覧ください。"
            />

            <div className="mb-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {corporateReasons.map((reason) => (
                <div
                  key={reason}
                  className="rounded-[1rem] border border-white/10 bg-white/5 px-5 py-4 text-[0.9375rem] leading-7"
                >
                  {reason}
                </div>
              ))}
            </div>

            <h3 className="mb-4 text-xl font-bold">施工メニュー</h3>
            <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {serviceCategories.map((cat) => (
                <div
                  key={cat.title}
                  className="rounded-[1rem] border border-white/10 bg-white/5 p-5"
                >
                  <h4 className="font-bold">{cat.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-white/75">{cat.items.join(" / ")}</p>
                </div>
              ))}
            </div>

            <h3 className="mb-6 text-xl font-bold">工事までの流れ</h3>
            <div className="mb-12 grid gap-5 md:grid-cols-2">
              {workFlow.map((step) => (
                <div key={step.step} className="inotec-flow-step">
                  <span className="inotec-flow-num">{step.step}</span>
                  <div>
                    <h4 className="font-bold">{step.title}</h4>
                    <p className="mt-1 text-sm leading-6 text-white/75">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="mb-4 text-xl font-bold">よくある質問（お客様向け）</h3>
            <div className="inotec-faq max-w-3xl">
              {corporateFaq.map((item) => (
                <details key={item.q}>
                  <summary className="text-[#0f2f4f]">{item.q}</summary>
                  <p className="inotec-faq-answer">{item.a}</p>
                </details>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={site.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inotec-btn inotec-btn-primary"
              >
                公式サイトを見る
              </a>
              <a href={`${site.telLink}`} className="inotec-btn inotec-btn-outline">
                無料現地調査の相談 {site.tel}
              </a>
            </div>
          </div>
        </section>

        {/* Company info */}
        <section id="company" className="inotec-section inotec-section-alt">
          <div className="inotec-container">
            <SectionHead label="COMPANY" title="会社概要" />
            <div className="overflow-hidden rounded-[1.25rem] border border-[#e2e8f0] bg-white">
              <table className="w-full text-left text-sm">
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
                    <tr key={label} className="border-b border-[#e2e8f0] last:border-0">
                      <th className="w-36 bg-[#f7f9fc] px-5 py-4 font-bold text-[#1e4d7b]">
                        {label}
                      </th>
                      <td className="px-5 py-4 leading-7 text-[#4a5568]">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Entry */}
        <section id="entry" className="inotec-section">
          <div className="inotec-container grid gap-10 lg:grid-cols-2">
            <div>
              <SectionHead
                label="ENTRY"
                title="エントリー / カジュアル面談"
                lead="応募・見学・カジュアル面談・協力会社のご相談はこちらから。折り返しご連絡いたします。"
              />
              <div className="mt-6 space-y-3 text-sm">
                <p>
                  <span className="font-bold">電話：</span>
                  <a href={site.telLink} className="text-[#1e4d7b] underline">
                    {site.tel}
                  </a>
                </p>
                <p>
                  <span className="font-bold">公式サイト：</span>
                  <a
                    href={site.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1e4d7b] underline"
                  >
                    inotec.jp
                  </a>
                </p>
              </div>
            </div>

            <form
              className="inotec-form rounded-[1.25rem] border border-[#e2e8f0] bg-white p-6 shadow-[0_12px_40px_rgba(15,47,79,0.06)]"
              action={`mailto:${site.email}`}
              method="post"
              encType="text/plain"
            >
              <label>
                お名前 *
                <input type="text" name="name" required autoComplete="name" />
              </label>
              <div className="grid gap-4 sm:grid-cols-2">
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
              <button type="submit" className="inotec-btn inotec-btn-secondary w-full">
                送信する
              </button>
              <p className="text-xs leading-6 text-[#718096]">
                ※ 送信ボタンを押すとメールソフトが起動します。フォーム送信機能は今後追加予定です。
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="inotec-footer">
        <div className="inotec-container grid gap-8 md:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-lg font-bold text-white">{site.name}</p>
            <p className="mt-2 text-sm leading-7">{site.address}</p>
            <p className="mt-2 text-sm">
              TEL:{" "}
              <a href={site.telLink}>{site.tel}</a>
            </p>
          </div>
          <nav className="grid grid-cols-2 gap-2 text-sm" aria-label="フッターナビ">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <p className="inotec-container mt-8 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
