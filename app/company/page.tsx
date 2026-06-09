// =====================================================
// BeeTruck Recruit LP
// app/company/page.tsx
// Cursor / Claude Code で修正しやすいように、
// DATA と SECTION を分けています。
// =====================================================

// =====================================================
// DATA: IMAGES
// 画像を差し替える場合は、まずここだけ編集してください。
// =====================================================
const images = {
    hero:
      "https://www.bee-truck.com/wp/wp-content/themes/theme-bee-truck/assets/images/page/recruit/fv-bg-lt.webp",
    truckLine:
      "https://www.bee-truck.com/wp/wp-content/themes/theme-bee-truck/assets/images/page/recruit/system-cover-img_01.webp",
    staff01:
      "https://www.bee-truck.com/wp/wp-content/themes/theme-bee-truck/assets/images/page/recruit/interview-thumb_01.webp",
    staff02:
      "https://www.bee-truck.com/wp/wp-content/themes/theme-bee-truck/assets/images/page/recruit/interview-thumb_02.webp",
    staff03:
      "https://www.bee-truck.com/wp/wp-content/themes/theme-bee-truck/assets/images/page/recruit/interview-thumb_03.webp",
    food:
      "https://www.bee-truck.com/wp/wp-content/themes/theme-bee-truck/assets/images/page/recruit/system-img_06.webp",
    event:
      "https://www.bee-truck.com/wp/wp-content/themes/theme-bee-truck/assets/images/page/recruit/system-img_07.webp",
    hotel:
      "https://www.bee-truck.com/wp/wp-content/themes/theme-bee-truck/assets/images/page/recruit/system-img_02.webp",
  };
  
  // =====================================================
  // DATA: CONTENTS
  // 文言を差し替える場合は、基本ここを編集してください。
  // =====================================================
  const quickPoints = [
    ["未経験OK", "最初は補助から"],
    ["資格支援", "手に職がつく"],
    ["見学OK", "応募前に相談できる"],
    ["車好き歓迎", "トラック・重機に触れる"],
  ];
  
  const flow = [
    ["01", "買取", "大切に使われた車両を受け取る"],
    ["02", "点検", "状態を見て、必要な整備を確認"],
    ["03", "整備", "安心して使える一台へ仕上げる"],
    ["04", "販売", "必要としているお客様へ届ける"],
    ["05", "納車", "その一台で、お客様の仕事が動き出す"],
  ];
  
  const jobs = [
    {
      title: "整備・仕上げ",
      image: images.staff01,
      text: "点検、洗車、整備補助、納車前チェックなど。まずはできることから覚えていきます。",
    },
    {
      title: "買取・販売サポート",
      image: images.truckLine,
      text: "車両確認、査定補助、お客様対応など。必要としている人へ一台をつなぎます。",
    },
    {
      title: "SNS・採用広報",
      image: images.staff02,
      text: "現場の雰囲気や仕事の面白さを、写真や動画で伝える仕事です。",
    },
  ];
  
  const worries = [
    ["未経験でも大丈夫？", "まずは洗車・清掃・補助から。"],
    ["資格がない", "入社後の取得を会社がサポート。"],
    ["雰囲気が不安", "見学・相談からでもOK。"],
    ["長く働ける？", "賞与・報奨金・退職金制度あり。"],
  ];
  
  const benefits = [
    ["資格取得支援", "大型免許・整備士資格などをサポート"],
    ["一台ごとに違う", "毎日同じ作業だけじゃない面白さ"],
    ["頑張りを評価", "昇給・賞与・報奨金制度"],
    ["家族にも安心", "社食・医療相談・家族参加イベント"],
  ];
  
  const fitItems = [
    "車・トラック・重機が好き",
    "体を動かす仕事が好き",
    "手に職をつけたい",
    "地元で長く働きたい",
    "素直に聞ける",
    "チームで働ける",
  ];
  
  const requirements = [
    ["募集職種", "整備スタッフ / 買取・販売サポート / SNS採用広報サポート"],
    ["応募条件", "未経験歓迎。普通自動車免許をお持ちの方は歓迎。"],
    ["勤務地", "兵庫県たつの市周辺 ※詳細は面談時に案内"],
    ["給与", "経験・スキルを考慮。昇給・賞与・報奨金制度あり"],
    [
      "福利厚生",
      "社会保険、社食、医療相談、会員制ホテル利用、家族参加イベントなど",
    ],
    ["選考", "問い合わせ / 見学 → 面談 → 選考 → 内定"],
  ];
  
  // =====================================================
  // COMPONENT: Header
  // 修正指示例：Headerだけ修正してください。
  // =====================================================
  function Header() {
    return (
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/20 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 md:px-8">
          <a href="#" className="flex min-w-0 items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0068a8] text-sm font-black text-white">
              BT
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-black text-slate-950">
                BeeTruck 採用
              </p>
              <p className="hidden text-xs font-bold text-slate-500 sm:block">
                未経験から、トラックの仕事へ。
              </p>
            </div>
          </a>
  
          <nav className="hidden items-center gap-6 text-sm font-black text-slate-700 md:flex">
            <a href="#work" className="hover:text-[#0068a8]">
              仕事
            </a>
            <a href="#beginner" className="hover:text-[#0068a8]">
              安心
            </a>
            <a href="#requirements" className="hover:text-[#0068a8]">
              募集要項
            </a>
          </nav>
  
          <a
            href="#contact"
            className="shrink-0 rounded-full bg-[#f8c733] px-5 py-3 text-sm font-black text-slate-950 transition hover:bg-[#ffd84a]"
          >
            相談する
          </a>
        </div>
      </header>
    );
  }
  
  // =====================================================
  // COMPONENT: HeroSection
  // 修正指示例：HeroSectionだけ修正してください。
  // =====================================================
  function HeroSection() {
    return (
      <section className="relative flex min-h-screen items-center overflow-hidden px-5 py-24 text-white md:px-8">
        <img
          src={images.hero}
          alt="BeeTruckのトラック"
          className="hero-bg absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/75 to-[#0068a8]/55" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(248,199,51,.24),transparent_30%)]" />
  
        <div className="relative mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.35fr] lg:items-center">
          <div className="pop-card max-w-2xl">
            <div className="mb-5 inline-flex rounded-full bg-[#f8c733] px-4 py-2 text-sm font-black text-slate-950">
              未経験歓迎
            </div>

            <h1 className="text-5xl font-black leading-[1.08] tracking-tight sm:text-6xl md:text-7xl">
              トラックを仕上げる。
            </h1>

            <div className="mt-8">
              <a
                href="#contact"
                className="shine-button inline-block rounded-full bg-[#f8c733] px-8 py-4 text-center text-base font-black text-slate-950 transition hover:bg-[#ffd84a]"
              >
                まずは見学・相談する
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2.2rem] border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur-sm">
            <img
              src={images.truckLine}
              alt="BeeTruckの車両"
              className="h-[380px] w-full rounded-[1.7rem] object-cover object-center transition duration-700 hover:scale-105 sm:h-[460px] lg:h-[660px]"
            />
          </div>
        </div>
      </section>
    );
  }
  
  // =====================================================
  // COMPONENT: QuickPointsSection
  // 修正指示例：QuickPointsSectionだけ修正してください。
  // =====================================================
  function QuickPointsSection() {
    return (
      <section className="bg-white px-5 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {quickPoints.map(([title, text], index) => (
              <div
                key={title}
                className="pop-card flex min-h-[150px] flex-col items-center justify-center rounded-[1.7rem] border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <p className="text-3xl font-black leading-tight text-[#0068a8]">
                  {title}
                </p>
                <p className="mt-2 text-sm font-bold leading-6 text-slate-600">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  // =====================================================
  // COMPONENT: VisualStorySection
  // 修正指示例：VisualStorySectionだけ修正してください。
  // =====================================================
  function VisualStorySection() {
    return (
      <section className="bg-[#eef8fd] px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black tracking-[0.2em] text-[#0068a8]">
                VISUAL STORY
              </p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
                写真でわかる。BeeTruckの仕事。
              </h2>
            </div>
            <p className="max-w-md text-sm font-bold leading-7 text-slate-600">
              長い説明より、現場の空気を見せる。スマホでも横にスワイプして見やすい構成です。
            </p>
          </div>
  
          <div className="hide-scrollbar flex snap-x gap-5 overflow-x-auto pb-4">
            {[
              [images.truckLine, "大きな車両に触れる"],
              [images.staff01, "先輩と一緒に覚える"],
              [images.staff02, "現場の空気が見える"],
              [images.staff03, "一台ずつ仕上げる"],
              [images.event, "家族にも話しやすい職場"],
            ].map(([src, title]) => (
              <div
                key={title}
                className="min-w-[78%] snap-center overflow-hidden rounded-[2rem] bg-white shadow-sm sm:min-w-[45%] lg:min-w-[30%]"
              >
                <img
                  src={src}
                  alt={title}
                  className="h-80 w-full object-cover transition duration-500 hover:scale-105"
                  loading="lazy"
                />
                <div className="flex min-h-[96px] items-center justify-center p-6 text-center">
                  <p className="text-2xl font-black leading-snug">{title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  // =====================================================
  // COMPONENT: AboutSection
  // 修正指示例：AboutSectionだけ修正してください。
  // =====================================================
  function AboutSection() {
    return (
      <section id="about" className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-center">
            <div>
              <p className="text-sm font-black tracking-[0.2em] text-[#0068a8]">
                ABOUT
              </p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
                ただ売るだけじゃない。
              </h2>
              <p className="mt-5 text-lg font-bold leading-8 text-slate-700">
                買取から整備、販売、納車まで。一台が次の現場で動くまでを支えます。
              </p>
            </div>
  
            <div className="grid gap-4">
              {flow.map(([num, title, text]) => (
                <div
                  key={num}
                  className="group grid gap-4 rounded-[1.7rem] border border-slate-200 bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg md:grid-cols-[80px_120px_1fr] md:items-center md:text-left"
                >
                  <div className="text-4xl font-black text-[#0068a8]">{num}</div>
                  <div className="text-2xl font-black">{title}</div>
                  <div className="text-sm font-bold leading-7 text-slate-600">
                    {text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  // =====================================================
  // COMPONENT: WorkSection
  // 修正指示例：WorkSectionだけ修正してください。
  // =====================================================
  function WorkSection() {
    return (
      <section
        id="work"
        className="bg-slate-950 px-5 py-16 text-white md:px-8 md:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center md:text-left">
            <p className="text-sm font-black tracking-[0.2em] text-[#f8c733]">
              WORK
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
              仕事は、見ればわかる。
            </h2>
          </div>
  
          <div className="grid gap-6 lg:grid-cols-3">
            {jobs.map((job) => (
              <article
                key={job.title}
                className="overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 text-center transition hover:-translate-y-2 hover:bg-white/15"
              >
                <img
                  src={job.image}
                  alt={job.title}
                  className="h-72 w-full object-cover"
                  loading="lazy"
                />
                <div className="flex min-h-[210px] flex-col items-center justify-center p-7">
                  <h3 className="text-3xl font-black">{job.title}</h3>
                  <p className="mt-4 text-base font-bold leading-8 text-slate-300">
                    {job.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  // =====================================================
  // COMPONENT: BeginnerSection
  // 修正指示例：BeginnerSectionだけ修正してください。
  // =====================================================
  function BeginnerSection() {
    return (
      <section id="beginner" className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div>
              <p className="text-sm font-black tracking-[0.2em] text-[#0068a8]">
                BEGINNER
              </p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
                不安は、先に消す。
              </h2>
              <p className="mt-5 text-lg font-bold leading-8 text-slate-700">
                いきなり完璧じゃなくていい。最初はできることからで大丈夫です。
              </p>
              <img
                src={images.staff03}
                alt="BeeTruckスタッフ"
                className="mt-8 h-auto w-full rounded-[2rem] object-cover"
                loading="lazy"
              />
            </div>
  
            <div className="grid gap-4 sm:grid-cols-2">
              {worries.map(([title, text]) => (
                <div
                  key={title}
                  className="flex min-h-[160px] flex-col items-center justify-center rounded-[1.7rem] bg-[#eef8fd] p-6 text-center transition hover:-translate-y-1 hover:bg-[#dff3fb]"
                >
                  <p className="text-xl font-black">{title}</p>
                  <p className="mt-3 text-sm font-bold leading-7 text-slate-600">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  // =====================================================
  // COMPONENT: BenefitSection
  // 修正指示例：BenefitSectionだけ修正してください。
  // =====================================================
  function BenefitSection() {
    return (
      <section
        id="benefit"
        className="bg-[#0068a8] px-5 py-16 text-white md:px-8 md:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-black tracking-[0.2em] text-[#f8c733]">
              BENEFIT
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
              家族にも話しやすい会社へ。
            </h2>
          </div>
  
          <div className="grid gap-6 md:grid-cols-2">
            <img
              src={images.food}
              alt="BeeTruckの食事"
              className="h-full min-h-[320px] w-full rounded-[2rem] object-cover"
              loading="lazy"
            />
  
            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map(([title, text]) => (
                <div
                  key={title}
                  className="flex min-h-[190px] flex-col items-center justify-center rounded-[1.7rem] bg-white p-6 text-center text-slate-950"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#f8c733] text-xl font-black">
                    ✓
                  </div>
                  <p className="text-xl font-black">{title}</p>
                  <p className="mt-3 text-sm font-bold leading-7 text-slate-600">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
  
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <img
              src={images.event}
              alt="BeeTruckイベント"
              className="h-72 w-full rounded-[2rem] object-cover"
              loading="lazy"
            />
            <img
              src={images.hotel}
              alt="BeeTruck福利厚生"
              className="h-72 w-full rounded-[2rem] object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    );
  }
  
  // =====================================================
  // COMPONENT: FitSection
  // 修正指示例：FitSectionだけ修正してください。
  // =====================================================
  function FitSection() {
    return (
      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-start">
            <div className="text-center md:text-left">
              <p className="text-sm font-black tracking-[0.2em] text-[#0068a8]">
                FIT
              </p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
                こんな人に、来てほしい。
              </h2>
            </div>
  
            <div className="grid gap-3 sm:grid-cols-2">
              {fitItems.map((item) => (
                <div
                  key={item}
                  className="flex min-h-[82px] items-center justify-center rounded-[1.5rem] border border-slate-200 bg-white p-5 text-center text-lg font-black shadow-sm"
                >
                  <span className="mr-2 text-[#0068a8]">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  // =====================================================
  // COMPONENT: RequirementsSection
  // 修正指示例：RequirementsSectionだけ修正してください。
  // =====================================================
  function RequirementsSection() {
    return (
      <section
        id="requirements"
        className="bg-slate-50 px-5 py-16 md:px-8 md:py-24"
      >
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-sm font-black tracking-[0.2em] text-[#0068a8]">
              REQUIREMENTS
            </p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">募集要項</h2>
            <p className="mt-5 text-base font-bold leading-8 text-slate-600">
              まずは見学・相談からでも歓迎です。
            </p>
          </div>
  
          <div className="mt-10 overflow-hidden rounded-[2rem] border border-slate-200 bg-white">
            {requirements.map(([label, value], index) => (
              <div
                key={label}
                className={`grid gap-2 p-5 text-center md:grid-cols-[160px_1fr] md:p-6 md:text-left ${
                  index !== requirements.length - 1
                    ? "border-b border-slate-200"
                    : ""
                }`}
              >
                <div className="font-black text-slate-950">{label}</div>
                <div className="font-bold leading-7 text-slate-700">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  // =====================================================
  // COMPONENT: ContactSection
  // 修正指示例：ContactSectionだけ修正してください。
  // =====================================================
  function ContactSection() {
    return (
      <section
        id="contact"
        className="relative overflow-hidden bg-[#f8c733] px-5 py-16 md:px-8 md:py-24"
      >
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/30 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-white/30 blur-3xl" />
  
        <div className="relative mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
          <div className="text-center md:text-left">
            <p className="text-sm font-black tracking-[0.2em] text-slate-800">
              ENTRY
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-slate-950 md:text-6xl">
              まずは、見に来てください。
            </h2>
            <p className="mt-6 text-lg font-black leading-8 text-slate-800">
              履歴書の前に、職場見学でもOK。気になることから聞いてください。
            </p>
          </div>
  
          <div className="rounded-[2rem] bg-white p-7 text-center shadow-xl md:p-9">
            <h3 className="text-3xl font-black text-slate-950">
              応募・問い合わせ
            </h3>
            <p className="mt-4 text-sm font-bold leading-7 text-slate-600">
              ボタンは仮置きです。フォームURL、LINE、電話番号、採用媒体URLに差し替えてください。
            </p>
  
            <div className="mt-8 grid gap-3">
              <a
                href="mailto:info@example.com?subject=BeeTruck採用について問い合わせ"
                className="shine-button rounded-2xl bg-slate-950 px-6 py-5 text-center text-lg font-black text-white transition hover:bg-slate-800"
              >
                まずは相談する
              </a>
              <a
                href="#requirements"
                className="rounded-2xl border border-slate-300 px-6 py-5 text-center text-lg font-black text-slate-950 transition hover:bg-slate-50"
              >
                募集要項を見る
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  // =====================================================
  // COMPONENT: Footer
  // 修正指示例：Footerだけ修正してください。
  // =====================================================
  function Footer() {
    return (
      <footer className="bg-slate-950 px-5 py-10 text-white md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <div>
            <p className="text-lg font-black">BeeTruck Recruit</p>
            <p className="mt-1 text-sm text-slate-400">
              トラックを仕上げる。お客様の仕事を動かす。
            </p>
          </div>
          <p className="text-sm text-slate-500">
            © BeeTruck Recruit Landing Page
          </p>
        </div>
      </footer>
    );
  }
  
  // =====================================================
  // PAGE
  // セクションの並び替えはここで行います。
  // =====================================================
  export default function Home() {
    return (
      <main className="min-h-screen scroll-smooth bg-white text-slate-950">
        <style>{`
          @keyframes slowZoom {
            0% { transform: scale(1); }
            100% { transform: scale(1.08); }
          }
  
          @keyframes shine {
            0% { transform: translateX(-120%); }
            100% { transform: translateX(120%); }
          }
  
          @keyframes popIn {
            0% { opacity: 0; transform: translateY(24px) scale(0.96); }
            100% { opacity: 1; transform: translateY(0) scale(1); }
          }
  
          .hero-bg {
            animation: slowZoom 18s ease-in-out infinite alternate;
          }
  
          .pop-card {
            animation: popIn 0.75s ease-out both;
          }
  
          .shine-button {
            position: relative;
            overflow: hidden;
          }
  
          .shine-button::after {
            content: "";
            position: absolute;
            inset: 0;
            width: 50%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,.45), transparent);
            animation: shine 2.6s ease-in-out infinite;
          }
  
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
  
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
  
        <Header />
        <HeroSection />
        <QuickPointsSection />
        <VisualStorySection />
        <AboutSection />
        <WorkSection />
        <BeginnerSection />
        <BenefitSection />
        <FitSection />
        <RequirementsSection />
        <ContactSection />
        <Footer />
      </main>
    );
  }