const goldGradient =
  "linear-gradient(135deg, #fbbf24 0%, #f59e0b 45%, #d97706 100%)";

const stats = [
  { value: "2.4倍", label: "3ヶ月で応募数", sub: "支援事例" },
  { value: "80万", label: "月間リーチ", sub: "採用アカウント" },
  { value: "100本+", label: "採用動画", sub: "制作実績" },
];

const pains = [
  "求人広告を出しても応募が来ない",
  "若い人材に会社の魅力が伝わらない",
  "現場の雰囲気や人柄を見せられていない",
  "SNSを始めたいが、何を投稿すればいいかわからない",
];

const services = [
  {
    num: "01",
    title: "採用SNS設計",
    text: "誰に、何を、どの順番で届けるかを設計します。",
  },
  {
    num: "02",
    title: "ショート動画企画",
    text: "TikTok・Instagram Reels向けの採用動画を企画します。",
  },
  {
    num: "03",
    title: "投稿制作・運用",
    text: "現場の魅力が伝わる投稿を継続的に制作します。",
  },
  {
    num: "04",
    title: "分析・改善",
    text: "数値を見ながら、応募につながる見せ方へ改善します。",
  },
];

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6">
        <a href="#" className="flex items-center gap-2.5">
          <div
            className="flex h-9 w-9 items-center justify-center rounded-lg text-[0.6rem] font-black tracking-tighter text-black shadow-lg"
            style={{ background: goldGradient }}
          >
            SNS
          </div>
          <div>
            <p className="text-sm font-black leading-tight tracking-wide text-white sm:text-base">
              SNS RECRUIT BOOST
            </p>
            <p className="text-[0.65rem] font-bold text-zinc-500">
              採用SNS支援サービス
            </p>
          </div>
        </a>
        <a
          href="#contact"
          className="rounded-full px-5 py-2.5 text-xs font-black text-black shadow-lg transition hover:brightness-110 sm:px-6 sm:py-3 sm:text-sm"
          style={{ background: goldGradient }}
        >
          無料相談する
        </a>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(251,191,36,0.5) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full opacity-15 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(245,158,11,0.4) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-px w-[120%] -translate-x-1/2 opacity-20"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(251,191,36,0.6), transparent)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-10">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-xs font-bold text-amber-300">
            <span className="inline-block h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
            SNSで採用を変える
          </div>

          <h1 className="mt-6 text-[1.65rem] font-black leading-tight tracking-tight text-white sm:text-4xl md:text-[2.75rem]">
            採用は、
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: goldGradient }}
            >
              求人票だけではもう届かない。
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-sm font-bold leading-7 text-zinc-400 sm:text-base">
            SNSで会社の魅力を伝え、応募したくなる接点をつくる。
            <br className="hidden sm:block" />
            採用広報・ショート動画・運用設計まで、SNS採用をまるごと支援します。
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-black text-black shadow-xl transition hover:brightness-110 sm:text-base"
              style={{ background: goldGradient }}
            >
              無料で相談する
            </a>
            <a
              href="#why"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-black text-white backdrop-blur-sm transition hover:border-amber-500/40 hover:bg-white/10 sm:text-base"
            >
              採用SNSの事例を見る
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/60 p-5 backdrop-blur-sm"
              >
                <div
                  className="absolute inset-x-0 top-0 h-px"
                  style={{ background: goldGradient }}
                />
                <p
                  className="text-2xl font-black tracking-tight sm:text-3xl"
                  style={{
                    backgroundImage: goldGradient,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-black text-white">
                  {stat.label}
                </p>
                <p className="mt-0.5 text-xs text-zinc-500">{stat.sub}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-[0.65rem] leading-5 text-zinc-600 sm:text-xs lg:text-left">
            ※成果を保証するものではありません
          </p>

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50 p-4 backdrop-blur-sm">
            <div className="flex items-center gap-3 border-b border-white/10 pb-3">
              <div
                className="h-10 w-10 rounded-full"
                style={{ background: goldGradient }}
              />
              <div>
                <p className="text-xs font-black text-white">
                  recruit_official
                </p>
                <p className="text-[0.65rem] text-zinc-500">採用広報アカウント</p>
              </div>
            </div>
            <div className="mt-3 space-y-2">
              {[
                "from-amber-500/40 to-yellow-600/20",
                "from-zinc-700/60 to-amber-900/30",
                "from-yellow-500/30 to-zinc-800/50",
              ].map((gradient, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 rounded-xl border border-white/5 bg-gradient-to-r ${gradient} p-3`}
                >
                  <div className="h-12 w-8 shrink-0 rounded-md bg-black/40" />
                  <div className="min-w-0 flex-1 space-y-1.5">
                    <div className="h-2 w-3/4 rounded-full bg-white/20" />
                    <div className="h-2 w-1/2 rounded-full bg-white/10" />
                  </div>
                  <span className="text-[0.6rem] font-bold text-amber-400/80">
                    Reels
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhySection() {
  return (
    <section
      id="why"
      className="border-t border-white/5 bg-zinc-950/80 px-4 py-16 sm:px-6 sm:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-amber-500">
            WHY SNS
          </p>
          <h2 className="mt-3 text-2xl font-black text-white sm:text-4xl">
            なぜ、SNS採用が必要なのか。
          </h2>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {pains.map((pain) => (
            <div
              key={pain}
              className="flex items-start gap-4 rounded-2xl border border-white/10 bg-black/40 p-5 transition hover:border-amber-500/30 hover:bg-zinc-900/60"
            >
              <span
                className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-black text-black"
                style={{ background: goldGradient }}
              >
                !
              </span>
              <p className="text-sm font-black leading-6 text-zinc-200 sm:text-base">
                {pain}
              </p>
            </div>
          ))}
        </div>

        <div
          className="mt-10 overflow-hidden rounded-2xl border border-amber-500/20 p-6 sm:p-8"
          style={{
            background:
              "linear-gradient(135deg, rgba(251,191,36,0.08) 0%, rgba(0,0,0,0.4) 50%, rgba(245,158,11,0.05) 100%)",
          }}
        >
          <p className="text-sm font-bold leading-8 text-zinc-300 sm:text-base">
            求職者は、応募前に会社のリアルを見ています。
            <br />
            SNSで職場の空気、人、働き方を伝えることで、応募前の不安を減らし、
            興味を応募へつなげます。
          </p>
        </div>
      </div>
    </section>
  );
}

function ServiceSection() {
  return (
    <section
      id="service"
      className="px-4 py-16 sm:px-6 sm:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-amber-500">
            SERVICE
          </p>
          <h2 className="mt-3 text-2xl font-black text-white sm:text-4xl">
            サービス内容
          </h2>
          <p className="mt-3 text-sm font-bold text-zinc-500">
            採用SNSを、設計から運用・改善までまるごと支援
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-white/10 bg-zinc-900/40 p-6 transition hover:border-amber-500/30 hover:bg-zinc-900/70"
            >
              <span
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-xs font-black text-black"
                style={{ background: goldGradient }}
              >
                {service.num}
              </span>
              <h3 className="mt-4 text-base font-black text-white sm:text-lg">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section id="contact" className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="relative overflow-hidden rounded-3xl border border-amber-500/20 shadow-2xl">
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-30 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(251,191,36,0.6) 0%, transparent 70%)",
            }}
          />
          <div
            className="relative p-8 text-center sm:p-12"
            style={{
              background:
                "linear-gradient(160deg, rgba(251,191,36,0.15) 0%, rgba(9,9,11,0.95) 45%, rgba(0,0,0,1) 100%)",
            }}
          >
            <p className="text-xs font-bold tracking-[0.2em] text-amber-400">
              CONTACT
            </p>
            <h2 className="mt-4 text-2xl font-black leading-tight text-white sm:text-4xl">
              採用に、SNSという武器を。
            </h2>
            <p className="mt-4 text-sm font-bold leading-7 text-zinc-400 sm:text-base">
              まずは、今の採用課題やSNS活用状況をお聞かせください。
              <br className="hidden sm:block" />
              貴社に合う採用SNSの見せ方を一緒に整理します。
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#"
                className="w-full rounded-full px-8 py-4 text-sm font-black text-black shadow-xl transition hover:brightness-110 sm:w-auto sm:text-base"
                style={{ background: goldGradient }}
              >
                無料相談する
              </a>
              <a
                href="#"
                className="w-full rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-black text-white transition hover:border-amber-500/40 hover:bg-white/10 sm:w-auto sm:text-base"
              >
                まずは話を聞いてみる
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-4 py-8 text-center">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-black text-white">SNS RECRUIT BOOST</p>
        <p className="mt-1 text-xs text-zinc-500">
          採用SNS設計・ショート動画・運用支援
        </p>
        <p className="mt-4 text-xs text-zinc-600">
          © SNS Recruit Boost. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default function Lp3Page() {
  return (
    <main className="min-h-screen scroll-smooth bg-black text-white">
      <div className="border-b border-amber-500/20 bg-zinc-900 px-4 py-2 text-center text-xs font-bold text-amber-300">
        公開URL: /tre-pro/lp3/ —{" "}
        <a
          href="https://tatsuyakoike-cloud.github.io/tre-pro/lp3/"
          className="underline hover:text-amber-200"
          target="_blank"
          rel="noreferrer"
        >
          GitHub Pages で開く
        </a>
      </div>
      <Header />
      <HeroSection />
      <WhySection />
      <ServiceSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
