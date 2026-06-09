const images = {
  hero:
    "https://www.bee-truck.com/wp/wp-content/themes/theme-bee-truck/assets/images/page/recruit/fv-bg-lt.webp",
  truck:
    "https://www.bee-truck.com/wp/wp-content/themes/theme-bee-truck/assets/images/page/recruit/system-cover-img_01.webp",
};

const points = [
  ["未経験OK", "補助からスタート"],
  ["資格支援", "手に職がつく"],
  ["見学OK", "応募前に相談できる"],
];

export default function Lp1Page() {
  return (
    <main className="min-h-screen scroll-smooth bg-white text-slate-950">
      <div className="bg-[#0068a8] px-4 py-2 text-center text-xs font-black tracking-wider text-white">
        LP1 テスト公開ページ — GitHub Pages 動作確認用
      </div>

      <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0068a8] text-sm font-black text-white">
              BT
            </div>
            <p className="text-sm font-black">BeeTruck 採用 LP1</p>
          </div>
          <a
            href="#contact"
            className="rounded-full bg-[#f8c733] px-5 py-2.5 text-sm font-black text-slate-950"
          >
            相談する
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden px-5 py-20 text-white md:px-8 md:py-28">
        <img
          src={images.hero}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950/75 to-[#0068a8]/60" />

        <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex rounded-full bg-[#f8c733] px-4 py-2 text-sm font-black text-slate-950">
              未経験歓迎
            </span>
            <h1 className="mt-6 text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
              トラックを仕上げる。
            </h1>
            <p className="mt-5 max-w-lg text-base font-bold leading-8 text-slate-200">
              テスト用 LP1 です。整備・買取・販売に関わる仕事を、未経験から始められます。
            </p>
            <a
              href="#contact"
              className="mt-8 inline-block rounded-full bg-[#f8c733] px-8 py-4 text-base font-black text-slate-950"
            >
              まずは見学・相談する
            </a>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/20 p-2 shadow-2xl">
            <img
              src={images.truck}
              alt="BeeTruckの車両"
              className="h-[320px] w-full rounded-[1.5rem] object-cover sm:h-[420px]"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#eef8fd] px-5 py-16 md:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-black">3つのポイント</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {points.map(([title, text]) => (
              <div
                key={title}
                className="rounded-[1.5rem] border border-slate-200 bg-white p-6 text-center shadow-sm"
              >
                <p className="text-2xl font-black text-[#0068a8]">{title}</p>
                <p className="mt-2 text-sm font-bold text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#f8c733] px-5 py-16 md:px-8">
        <div className="mx-auto max-w-3xl rounded-[2rem] bg-white p-8 text-center shadow-xl md:p-12">
          <p className="text-sm font-black tracking-widest text-[#0068a8]">CONTACT</p>
          <h2 className="mt-3 text-3xl font-black">まずは見学・相談から</h2>
          <p className="mt-4 text-sm font-bold leading-7 text-slate-600">
            このページは /tre-pro/lp1/ の公開テスト用です。
          </p>
          <a
            href="mailto:info@example.com?subject=LP1テスト問い合わせ"
            className="mt-8 inline-block rounded-2xl bg-slate-950 px-8 py-4 text-base font-black text-white"
          >
            問い合わせる（テスト）
          </a>
        </div>
      </section>

      <footer className="bg-slate-950 px-5 py-8 text-center text-sm text-slate-400">
        <p>© BeeTruck Recruit LP1 Test</p>
      </footer>
    </main>
  );
}
