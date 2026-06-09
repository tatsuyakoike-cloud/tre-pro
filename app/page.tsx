const images = {
  logo: "https://golf-no-mikata.com/wp-content/themes/golf-no-mikata/img/top/about-img.png",
  facility:
    "https://golf-no-mikata.com/wp-content/themes/golf-no-mikata/img/underlayer/higobashi-feature-img-1.png",
  camera:
    "https://golf-no-mikata.com/wp-content/themes/golf-no-mikata/img/underlayer/higobashi-feature-img-2.png",
  trackman:
    "https://golf-no-mikata.com/wp-content/themes/golf-no-mikata/img/underlayer/higobashi-feature-img-3.png",
  monitor:
    "https://golf-no-mikata.com/wp-content/themes/golf-no-mikata/img/underlayer/personal-lesson-img-19.png",
};

const quickBenefits = [
  { label: "完全個室", sub: "人目ゼロで集中できる" },
  { label: "手ぶらOK", sub: "クラブ・シューズ貸出" },
  { label: "無料体験", sub: "まずは気軽にお試し" },
];

const benefits = [
  {
    num: "01",
    title: "完全個室",
    text: "他の人と隣り合わない完全個室。周りを気にせず、自分のペースで打てます。",
    image: images.facility,
    imageAlt: "完全個室の設備",
  },
  {
    num: "02",
    title: "映像＆データ分析",
    text: "スイングを多角度で録画・数値化。何を直すべきか、すぐに分かります。",
    image: images.camera,
    imageAlt: "映像で確認",
  },
  {
    num: "03",
    title: "手ぶらで通える",
    text: "クラブ・シューズ・手袋はレンタル可。気軽に来て、そのまま打てます。",
    image: images.trackman,
    imageAlt: "設備・レンタル",
  },
  {
    num: "04",
    title: "マンツーマン対応",
    text: "初心者からスコアアップまで、目標に合わせて最適な練習を提案します。",
    image: images.monitor,
    imageAlt: "マンツーマン対応",
  },
];

const targets = [
  {
    badge: "初心者",
    title: "はじめての方",
    text: "基礎からやさしくスタート",
    accent: "#a3e635",
    pattern: "⛳",
  },
  {
    badge: "接待",
    title: "仕事で必要な方",
    text: "コンペ・接待前の準備に",
    accent: "#86efac",
    pattern: "🏌",
  },
  {
    badge: "上達",
    title: "スコアを伸ばしたい",
    text: "100切り・90切りを目指す",
    accent: "#bef264",
    pattern: "📈",
  },
];

const steps = [
  { num: 1, title: "ヒアリング", text: "目標・悩みを確認", image: images.facility, imageAlt: "個室でヒアリング" },
  { num: 2, title: "スイング確認", text: "現状を映像で把握", image: images.camera, imageAlt: "映像でスイング確認" },
  { num: 3, title: "課題整理", text: "データで分かりやすく", image: images.trackman, imageAlt: "データで課題整理" },
  { num: 4, title: "練習プラン", text: "最適な通い方を提案", image: images.monitor, imageAlt: "練習プランの提案" },
];

const faqs = [
  {
    q: "初心者でも大丈夫ですか？",
    a: "はい。基礎から分かりやすくご案内します。",
  },
  {
    q: "手ぶらで行けますか？",
    a: "クラブ・シューズ・手袋のレンタルがあります。",
  },
  {
    q: "人目が気になるのですが…",
    a: "完全個室なので、周りを気にせず練習できます。",
  },
  {
    q: "無料体験では何をしますか？",
    a: "ヒアリング・スイング確認・課題整理を行います。",
  },
];

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#2d6a1f]/10 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-3">
          <img src={images.logo} alt="ゴルフのミカタ" className="h-8 w-auto" />
        </a>

        <nav className="hidden items-center gap-7 text-sm font-bold text-neutral-600 md:flex">
          <a href="#benefit" className="hover:text-[#3d8020]">特徴</a>
          <a href="#flow" className="hover:text-[#3d8020]">体験の流れ</a>
          <a href="#faq" className="hover:text-[#3d8020]">FAQ</a>
        </nav>

        <a
          href="#contact"
          className="rounded-full bg-[#2d6a1f] px-8 py-2 text-xs font-black text-white transition hover:bg-[#245516] sm:px-12 sm:py-3 sm:text-sm"
        >
          無料体験
        </a>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative flex min-h-svh items-center justify-center overflow-hidden text-white">
      {/* 背景グラデーション */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(155deg, #233c14 0%, #2d6a1f 45%, #3d8b28 100%)",
        }}
      />
      {/* 背景画像（ゴルフコース・透明度高め） */}
      <img
        src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=1920&q=80"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-luminosity"
      />
      {/* 芝生テクスチャ（ドット） */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #86efac 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* ライムグロー */}
      <div
        className="absolute right-0 top-0 h-[480px] w-[480px] blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(163,230,53,0.1) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-4 py-24 text-center">
        <div className="mb-8 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-bold tracking-[0.22em] text-lime-200 backdrop-blur-sm">
          完全個室 &middot; 手ぶらOK &middot; データ分析
        </div>

        <h1 className="mb-5 text-[2rem] font-black leading-tight tracking-tight sm:text-5xl lg:text-7xl">
          <span className="block">スコアが上がれば、</span>
          <span className="block">景色が変わる。</span>
        </h1>

        <p className="mx-auto mb-10 max-w-sm text-base font-medium text-white/75 sm:text-lg">
          インドアゴルフスタジオ
          <br />
          マンツーマンレッスン
        </p>

        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="#contact"
            className="min-w-[220px] rounded-full bg-lime-400 px-8 py-4 text-sm font-black text-neutral-950 transition hover:bg-lime-300"
          >
            無料体験を予約する
          </a>
          <a
            href="#benefit"
            className="min-w-[180px] rounded-full border border-white/30 bg-white/10 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            特徴を見る
          </a>
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-3 gap-4">
          {quickBenefits.map((item) => (
            <div
              key={item.label}
              className="rounded-[1.5rem] border border-white/15 bg-white/10 p-5 text-center backdrop-blur-md"
            >
              <p className="text-base font-black sm:text-xl">{item.label}</p>
              <p className="mt-1.5 text-[0.65rem] leading-5 text-white/70 sm:text-xs">
                {item.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitSection() {
  return (
    <section id="benefit" className="bg-[#edf7e6] px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-bold tracking-[0.22em] text-[#3d8020]">
            FEATURES
          </p>
          <h2 className="text-3xl font-black leading-tight text-neutral-950 sm:text-5xl">
            選ばれる4つの理由
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {benefits.map((item) => (
            <div
              key={item.num}
              className="overflow-hidden rounded-[1.75rem] border border-[#c5e8b0] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="h-44 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6 text-center">
                <div className="mb-2 text-3xl font-black text-[#4a9e2a]">
                  {item.num}
                </div>
                <h3 className="mb-2 text-lg font-black text-neutral-950">
                  {item.title}
                </h3>
                <p className="text-sm leading-7 text-neutral-600">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaStrip() {
  return (
    <section
      className="relative overflow-hidden px-4 py-16 text-white"
      style={{
        background:
          "linear-gradient(135deg, #2d6a1f 0%, #3d8b28 50%, #4fa832 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #bbf7d0 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <p className="mb-2 text-xs font-bold tracking-[0.22em] text-lime-300">
          FREE TRIAL
        </p>
        <h2 className="mb-6 text-3xl font-black leading-tight sm:text-4xl">
          まずは無料体験で試してみてください。
        </h2>
        <a
          href="#contact"
          className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-lime-400 px-8 py-4 text-sm font-black text-neutral-950 transition hover:bg-lime-300"
        >
          無料体験を予約する
        </a>
      </div>
    </section>
  );
}

function StepsSection() {
  return (
    <section id="flow" className="overflow-hidden bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-bold tracking-[0.22em] text-[#3d8020]">
            HOW IT WORKS
          </p>
          <h2 className="text-3xl font-black leading-tight text-neutral-950 sm:text-5xl">
            無料体験はシンプル。
          </h2>
        </div>
      </div>

      {/* スワイプ対応カルーセル */}
      <div className="hide-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-3 sm:gap-5 lg:mx-auto lg:max-w-6xl lg:overflow-visible lg:pb-0">
        {steps.map((step, index) => (
          <div
            key={step.num}
            className="relative flex min-w-[72%] shrink-0 snap-start flex-col sm:min-w-[42%] lg:min-w-0 lg:flex-1"
          >
            {/* デスクトップ矢印 */}
            {index < steps.length - 1 && (
              <div className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 items-center justify-center text-xl font-black text-[#4a9e2a] lg:flex">
                →
              </div>
            )}

            <div className="overflow-hidden rounded-[1.75rem] border border-[#c5e8b0] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="relative h-44 overflow-hidden">
                <img
                  src={step.image}
                  alt={step.imageAlt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
                <div className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#2d6a1f] text-sm font-black text-white shadow-md">
                  {step.num}
                </div>
              </div>
              <div className="p-5">
                <p className="text-[0.6rem] font-black tracking-[0.22em] text-[#4a9e2a]">
                  STEP 0{step.num}
                </p>
                <p className="mt-1 text-base font-black text-neutral-950">
                  {step.title}
                </p>
                <p className="mt-1 text-xs leading-5 text-neutral-500">
                  {step.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-3 text-center text-xs text-neutral-400 lg:hidden">
        スワイプして全ステップを確認できます
      </p>

      <div className="mt-10 px-4 text-center">
        <a
          href="#contact"
          className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-[#2d6a1f] px-8 py-4 text-sm font-black text-white transition hover:bg-[#245516]"
        >
          無料体験を申し込む
        </a>
      </div>
    </section>
  );
}

function TargetSection() {
  return (
    <section
      className="px-4 py-16 text-white sm:py-24"
      style={{
        background:
          "linear-gradient(155deg, #3a7d20 0%, #52a82e 55%, #65c038 100%)",
      }}
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-bold tracking-[0.22em] text-lime-300">
            FOR YOU
          </p>
          <h2 className="text-3xl font-black leading-tight sm:text-5xl">
            こんな方におすすめ
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {targets.map((item) => (
            <div
              key={item.title}
              className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/10 backdrop-blur-sm transition hover:bg-white/15"
            >
              <div
                className="flex h-40 items-center justify-center"
                style={{
                  background: `radial-gradient(circle at 60% 40%, ${item.accent}22 0%, transparent 65%), linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)`,
                }}
              >
                <span className="text-6xl opacity-60">{item.pattern}</span>
              </div>
              <div className="p-7 text-center">
                <div className="mb-3 inline-flex rounded-full bg-lime-400 px-4 py-1.5 text-sm font-black text-neutral-950">
                  {item.badge}
                </div>
                <h3 className="mb-2 text-2xl font-black">{item.title}</h3>
                <p className="text-sm leading-7 text-white/70">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section id="faq" className="bg-[#edf7e6] px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-bold tracking-[0.22em] text-[#3d8020]">
            FAQ
          </p>
          <h2 className="text-3xl font-black leading-tight text-neutral-950 sm:text-5xl">
            よくある質問
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-[1.5rem] border border-[#c5e8b0] bg-white p-6"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold text-neutral-950 sm:text-base">
                {faq.q}
                <span className="shrink-0 text-2xl text-[#3d8020] transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-sm leading-7 text-neutral-600">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="bg-white px-4 py-16 sm:py-24">
      <div
        className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] shadow-xl"
        style={{
          background: "linear-gradient(145deg, #2a5c1a 0%, #3d8028 100%)",
        }}
      >
        <div className="grid lg:grid-cols-2">
          <div className="p-8 text-center text-white sm:p-10 lg:p-14 lg:text-left">
            <p className="mb-3 text-xs font-bold tracking-[0.22em] text-lime-300">
              CONTACT
            </p>
            <h2 className="mb-5 text-2xl font-black leading-tight sm:text-4xl">
              まずは無料体験から。
            </h2>
            <p className="text-sm leading-8 text-white/70">
              迷ったら体験から。今の自分に合う練習の進め方を確認できます。
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {["完全個室", "手ぶらOK", "初心者も安心", "データ分析"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/10 bg-white/10 py-3 text-center text-sm font-bold"
                  >
                    {item}
                  </div>
                )
              )}
            </div>

            <div
              className="mt-8 flex h-36 items-center justify-center overflow-hidden rounded-[1.5rem]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(163,230,53,0.12) 100%)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <p className="text-4xl font-black tracking-tight text-white/20">
                GOLF NO MIKATA
              </p>
            </div>
          </div>

          <div className="bg-white p-8 text-center sm:p-10 lg:p-14">
            <img
              src={images.logo}
              alt="ゴルフのミカタ"
              className="mx-auto mb-5 h-10 w-auto"
            />
            <h3 className="mb-2 text-2xl font-black text-neutral-950">
              無料体験のご相談
            </h3>
            <p className="text-sm leading-7 text-neutral-500">
              お気軽にご連絡ください。
            </p>

            <div className="mt-8 space-y-3">
              <a
                href="https://golf-no-mikata.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full bg-lime-400 px-6 py-4 text-sm font-black text-neutral-950 transition hover:bg-lime-300"
              >
                無料体験に申し込む
              </a>
              <a
                href="tel:09067575623"
                className="inline-flex w-full items-center justify-center rounded-full border border-neutral-200 bg-white px-6 py-4 text-sm font-bold text-neutral-950 transition hover:bg-[#edf7e6]"
              >
                電話で問い合わせる
              </a>
              <a
                href="https://www.instagram.com/golf_no_mikata?igsh=ZHo4ZnF5OWJzNmI5&utm_source=q"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full border border-neutral-200 bg-white px-6 py-4 text-sm font-bold text-neutral-950 transition hover:bg-[#edf7e6]"
              >
                Instagramを見る
              </a>
            </div>

            <div className="mt-7 rounded-[1.25rem] bg-[#edf7e6] p-5">
              <p className="text-sm font-black text-neutral-950">
                ゴルフのミカタ
              </p>
              <p className="mt-1 text-xs leading-6 text-neutral-500">
                初心者からスコアアップを目指す方まで、気軽に通えるインドアゴルフスタジオです。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#2d6a1f]/10 bg-white px-4 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 text-center text-sm text-neutral-400">
        <img src={images.logo} alt="ゴルフのミカタ" className="h-8 w-auto" />
        <p>© GOLF NO MIKATA. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen scroll-smooth bg-white text-neutral-950">
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
      <Header />
      <HeroSection />
      <BenefitSection />
      <CtaStrip />
      <StepsSection />
      <TargetSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
