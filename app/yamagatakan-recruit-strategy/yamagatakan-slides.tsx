import type { ReactNode } from "react";

export type SlideDef = {
  id: string;
  navLabel?: string;
  variant?: "default" | "alt" | "dark" | "hero";
  content: ReactNode;
};

export const navItems = [
  { id: "summary", label: "概要" },
  { id: "essence", label: "本質" },
  { id: "channels", label: "導線設計" },
  { id: "pricing", label: "費用" },
  { id: "next", label: "次の一手" },
];

export const slides: SlideDef[] = [
  {
    id: "hero",
    variant: "hero",
    content: (
      <>
        <div
          className="yk-hero-bg"
          aria-hidden="true"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(31, 58, 45, 0.88) 0%, rgba(28, 28, 28, 0.75) 45%, rgba(122, 30, 30, 0.55) 100%), url('/tre-pro/images/yamagatakan-hero.svg')`,
          }}
        />
        <div className="yk-hero-inner">
          <p className="yk-hero-client">川浦温泉 山県館 御中</p>
          <h1 className="yk-hero-title yk-serif">
            五百年の湯を、
            <br />
            次の担い手へ。
          </h1>
          <p className="yk-hero-sub">
            山県館の歴史・温泉・おもてなしを、採用の力に変えるための
            <br className="hidden sm:block" />
            SNS採用戦略のご提案
          </p>
          <p className="yk-hero-meta">採用戦略提案資料</p>
        </div>
      </>
    ),
  },
  {
    id: "summary",
    navLabel: "概要",
    content: (
      <>
        <p className="yk-eyebrow">EXECUTIVE SUMMARY</p>
        <h2 className="yk-title yk-serif">
          採用は、募集ではなく「継承」である。
        </h2>
        <p className="yk-lead">
          五百年にわたり受け継がれてきた川浦の湯、武田信玄公ゆかりの歴史、山あいの旅館でお客様を迎える所作——これらは求人媒体だけでは伝わりにくい。SNSと採用LPで、山県館で働く意味や空気感を日常的に見える形にしていく。
        </p>
        <div className="yk-table-wrap">
          <table className="yk-table">
            <tbody>
              <tr>
                <th>短期目標</th>
                <td>4ヶ月集中フェーズで最低1名の採用につながる状態を作る</td>
              </tr>
              <tr>
                <th>中長期目標</th>
                <td>求人媒体に依存せず、自社SNS・採用LPから応募が生まれる導線を構築</td>
              </tr>
              <tr>
                <th>Instagram</th>
                <td>歴史・温泉・料理・文化を美しく発信し、ブランド価値を高める</td>
              </tr>
              <tr>
                <th>TikTok</th>
                <td>堀内さんを軸に、働く裏側・スタッフの雰囲気を親しみやすく発信</td>
              </tr>
              <tr>
                <th>11月まで</th>
                <td>求人媒体契約終了前に、SNSと採用LPの土台を構築</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    id: "premise",
    content: (
      <>
        <p className="yk-eyebrow">提案の前提</p>
        <h2 className="yk-title yk-serif">本資料の位置づけ</h2>
        <div className="yk-grid-2">
          <div>
            <p className="yk-lead">
              山県館様は、歴史・温泉・日本文化・接遇品質そのものが価値になっている旅館。採用は単なる人員補充ではなく、山県館らしいおもてなしを理解し継承できる人材との接点づくりが必要です。
            </p>
            <p className="yk-lead" style={{ marginTop: 16 }}>
              11月で既存求人媒体の契約終了が見えているため、12月以降に自社導線で採用活動を継続できる状態を、今から作る必要があります。
            </p>
          </div>
          <div className="yk-card">
            <p className="yk-card-title">採用対象の設計軸</p>
            <ul className="yk-list">
              <li>お客様への言葉遣いを場面に応じて使い分けられること</li>
              <li>マニュアルに書ききれない所作・気配り・空気感を汲み取れること</li>
              <li>歴史ある旅館で働く意味を前向きに受け止められること</li>
              <li>フロント・客室など、お客様接点の品質を担えること</li>
            </ul>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "essence",
    navLabel: "本質",
    variant: "alt",
    content: (
      <>
        <p className="yk-eyebrow">ESSENCE</p>
        <h2 className="yk-title yk-serif">
          山県館様は「条件」だけで選ばれる職場ではない
        </h2>
        <p className="yk-lead">
          給与・勤務時間だけで勝負すると、都市部のホテルや大手宿泊施設と比較されやすくなります。伝えるべきは、山県館ならではの独自性です。
        </p>
        <ul className="yk-list" style={{ marginTop: 20 }}>
          <li>武田信玄公ゆかりの歴史ある湯宿で働くこと</li>
          <li>旅館という日本文化の現場で、お客様を迎える仕事であること</li>
          <li>山梨・川浦という土地に根ざし、地域の魅力を伝える役割</li>
          <li>マニュアル通りではなく、お客様に合わせた気配りを学べること</li>
          <li>フロントや客室業務を通じて、所作・言葉遣い・対応力が磨かれること</li>
        </ul>
        <blockquote className="yk-quote">
          ただ働く場所ではなく、
          <br />
          日本のおもてなしを、日々の所作から学べる場所。
        </blockquote>
      </>
    ),
  },
  {
    id: "market",
    content: (
      <>
        <p className="yk-eyebrow">MARKET</p>
        <h2 className="yk-title yk-serif">宿泊業界の採用は難化している</h2>
        <div className="yk-grid-2">
          <div className="yk-card">
            <p className="yk-card-title">需要は回復・拡大</p>
            <p className="yk-lead" style={{ fontSize: "0.86rem" }}>
              2025年度の国内旅館・ホテル市場は事業者売上高ベースで6.5兆円に達し、過去最高を更新する見通し。需要が戻るほど現場の人手不足は顕在化しやすくなります。
            </p>
          </div>
          <div className="yk-card">
            <p className="yk-card-title">構造課題</p>
            <p className="yk-lead" style={{ fontSize: "0.86rem" }}>
              求人を出しても応募が来ない、採用してもすぐに辞める、育成担当者が不足——全国的な課題です。採用前に仕事内容や職場の空気感を十分に伝え、入社後のギャップを減らすことが重要です。
            </p>
          </div>
        </div>
        <div className="yk-card" style={{ marginTop: 16 }}>
          <p className="yk-card-title">山県館様への示唆</p>
          <p className="yk-lead" style={{ fontSize: "0.86rem" }}>
            応募数を増やすだけでは不十分。SNSと採用LPで「どんな人が働いているか」「どんな一日か」「どんな接遇が求められるか」「山県館で働く意味」を、定着する候補者に届ける設計が必要です。
          </p>
        </div>
      </>
    ),
  },
  {
    id: "issues",
    variant: "alt",
    content: (
      <>
        <p className="yk-eyebrow">CURRENT ISSUES</p>
        <h2 className="yk-title yk-serif">現状課題の整理</h2>
        <div className="yk-grid-2">
          <div>
            <p className="yk-card-title">採用コストの悪循環</p>
            <ol className="yk-steps">
              <li>求人媒体に月15万円規模の掲載費が発生</li>
              <li>応募が来ない、またはミスマッチが起きる</li>
              <li>採用できても早期離職（採用単価80万円の事例あり）</li>
              <li>再度、媒体費や紹介料が必要になる</li>
              <li>採用費だけが積み上がる</li>
            </ol>
          </div>
          <div>
            <p className="yk-card-title">自社の採用資産が残っていない</p>
            <p className="yk-lead" style={{ fontSize: "0.86rem" }}>
              求人媒体は掲載を止めると露出も止まります。SNSや採用LPは運用を続けることで投稿・動画・導線が蓄積し、自社の採用資産になります。
            </p>
            <p className="yk-card-title" style={{ marginTop: 20 }}>
              山県館様らしさが伝わりきっていない
            </p>
            <ul className="yk-list">
              <li>武田信玄公ゆかりの歴史、五百年の湯宿</li>
              <li>源泉かけ流し100％、純和風の世界観</li>
              <li>山梨の食材、お客様との距離が近い接遇</li>
            </ul>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "target",
    content: (
      <>
        <p className="yk-eyebrow">TARGET</p>
        <h2 className="yk-title yk-serif">採用ターゲット設計</h2>
        <div className="yk-table-wrap">
          <table className="yk-table">
            <thead>
              <tr>
                <th>候補者の関心</th>
                <th>打ち出す内容</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>接客経験を活かしたい</td>
                <td>フロント・客室業務で、お客様と丁寧に向き合える仕事</td>
              </tr>
              <tr>
                <td>落ち着いた場所で働きたい</td>
                <td>山あいの旅館で、自然と歴史に囲まれて働ける環境</td>
              </tr>
              <tr>
                <td>日本文化に関わりたい</td>
                <td>旅館のおもてなし、言葉遣い、所作を学べる職場</td>
              </tr>
              <tr>
                <td>長く働ける職場を探している</td>
                <td>仕事内容・人間関係・教育体制を事前に見える化</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="yk-lead" style={{ marginTop: 16, fontSize: "0.84rem" }}>
          短期は日本語接遇経験のある人材を主ターゲットに。中長期では宿泊業離脱層、地方移住希望者、接遇可能な外国籍人材など、母集団を広げる余地も残します。
        </p>
      </>
    ),
  },
  {
    id: "concept",
    variant: "dark",
    content: (
      <>
        <p className="yk-eyebrow">CONCEPT</p>
        <h2 className="yk-title yk-serif">五百年の湯を、次の担い手へ。</h2>
        <p className="yk-lead">
          山県館様の採用は、単なる求人ではない。お客様に選ばれてきた歴史を、次の時代へ受け継ぐ仲間を探す活動です。
        </p>
        <blockquote className="yk-quote">
          武田信玄公ゆかりの湯宿で、
          <br />
          日本のおもてなしを、日々の所作から学ぶ。
        </blockquote>
        <blockquote className="yk-quote">
          山県館で働くことは、
          <br />
          お客様の旅の記憶に、静かに寄り添うこと。
        </blockquote>
      </>
    ),
  },
  {
    id: "channels",
    navLabel: "導線設計",
    content: (
      <>
        <p className="yk-eyebrow">CHANNEL DESIGN</p>
        <h2 className="yk-title yk-serif">採用導線の全体設計</h2>
        <div className="yk-flow">
          <div className="yk-flow-item">
            <strong>Instagram 公式</strong>
            <span>歴史・温泉・料理・自然・旅館ブランドを美しく発信 → 憧れ・信頼形成</span>
          </div>
          <div className="yk-flow-item">
            <strong>TikTok / 堀内さん起点</strong>
            <span>働く裏側・スタッフの空気感を親しみやすく発信 → 働くイメージの具体化</span>
          </div>
          <div className="yk-flow-item">
            <strong>採用LP</strong>
            <span>仕事内容・人・条件・応募導線を整理 → 応募転換・ミスマッチ低減</span>
          </div>
          <div className="yk-flow-item">
            <strong>既存求人媒体</strong>
            <span>11月までは短期応募獲得チャネルとして併用</span>
          </div>
        </div>
        <a href="#contact" className="yk-cta yk-cta-primary">
          採用導線の設計を相談する
        </a>
      </>
    ),
  },
  {
    id: "instagram",
    variant: "alt",
    content: (
      <>
        <p className="yk-eyebrow">INSTAGRAM</p>
        <h2 className="yk-title yk-serif">旅館公式としてのブランド発信</h2>
        <p className="yk-lead">
          採用色を前面に出しすぎず、山県館様の世界観を丁寧に伝える。候補者が「ここで働くことに誇りを持てそう」と感じられる状態を作ります。
        </p>
        <div className="yk-table-wrap">
          <table className="yk-table">
            <tbody>
              <tr><th>歴史</th><td>武田信玄公ゆかりの湯、山県館の成り立ち</td></tr>
              <tr><th>温泉</th><td>源泉かけ流し、露天風呂、笛吹川を望む湯</td></tr>
              <tr><th>季節・料理</th><td>山あいの空気感、山梨食材の和食会席</td></tr>
              <tr><th>おもてなし</th><td>言葉遣い、細やかな気配り（月数回、自然に採用LPへ誘導）</td></tr>
            </tbody>
          </table>
        </div>
        <blockquote className="yk-quote" style={{ fontSize: "0.92rem" }}>
          朝の湯けむり。お客様を迎える前の静かな時間。
          <br />
          山県館の一日は、整えることから始まります。
        </blockquote>
      </>
    ),
  },
  {
    id: "tiktok",
    content: (
      <>
        <p className="yk-eyebrow">TIKTOK</p>
        <h2 className="yk-title yk-serif">採用の裏側を、親しみやすく伝える</h2>
        <p className="yk-lead">
          Instagramが旅館の美しい表側を担う一方、TikTokは働く裏側・人柄・日常を伝えます。堀内さんを軸にしつつ、個人依存を避け旅館全体の魅力も伝えます。
        </p>
        <div className="yk-table-wrap">
          <table className="yk-table">
            <thead>
              <tr><th>企画</th><th>狙い</th></tr>
            </thead>
            <tbody>
              <tr><td>フロントの1日</td><td>仕事内容の理解</td></tr>
              <tr><td>旅館スタッフの言葉遣い</td><td>接遇品質の可視化</td></tr>
              <tr><td>未経験で不安な方へ</td><td>応募ハードルの低減</td></tr>
              <tr><td>ここが大変、でも大切</td><td>ミスマッチ防止</td></tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    id: "recruit-lp",
    variant: "alt",
    content: (
      <>
        <p className="yk-eyebrow">RECRUIT LP</p>
        <h2 className="yk-title yk-serif">採用LP戦略</h2>
        <p className="yk-lead">
          SNSで興味を持った人が、仕事内容・職場の雰囲気・応募条件を確認できる受け皿。応募前の不安を減らし、応募フォーム・電話・LINE等へ導線をつなぎます。
        </p>
        <div className="yk-num-grid">
          {[
            "ファーストビュー（メインコピー・CTA）",
            "山県館で働く意味",
            "募集職種・仕事内容",
            "働く人・スタッフの声",
            "接遇で大切にしていること",
            "未経験の方へ・募集要項・FAQ",
            "応募導線",
          ].map((item, i) => (
            <div key={item} className="yk-num-item">
              <div className="num">{String(i + 1).padStart(2, "0")}</div>
              <div className="label">{item}</div>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    id: "schedule",
    content: (
      <>
        <p className="yk-eyebrow">SCHEDULE</p>
        <h2 className="yk-title yk-serif">スケジュール設計</h2>
        <div className="yk-table-wrap">
          <table className="yk-table">
            <thead>
              <tr><th>時期</th><th>フェーズ</th><th>実施内容</th></tr>
            </thead>
            <tbody>
              <tr><td>4月</td><td>準備</td><td>再撮影、堀内さんとの運用打合せ、SNS方針整理</td></tr>
              <tr><td>5〜7月</td><td>設計</td><td>採用LP構成、投稿方針、動画企画、素材整理</td></tr>
              <tr><td>8月</td><td>LP公開</td><td>採用LP制作・公開、募集要項整理、アカウント整備</td></tr>
              <tr><td>8〜9月</td><td>発信開始</td><td>Instagram/TikTok投稿開始、初期動画制作</td></tr>
              <tr><td>9〜11月</td><td>運用・検証</td><td>投稿改善、応募導線改善、半内製化準備</td></tr>
              <tr><td>12月以降</td><td>移行</td><td>SNS主体の採用導線へ、媒体継続は状況判断</td></tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    id: "kpi",
    variant: "alt",
    content: (
      <>
        <p className="yk-eyebrow">KPI</p>
        <h2 className="yk-title yk-serif">KPI設計</h2>
        <div className="yk-grid-2">
          <div className="yk-table-wrap">
            <table className="yk-table">
              <caption style={{ captionSide: "top", textAlign: "left", padding: "12px 14px", fontWeight: 800, fontSize: "0.78rem", letterSpacing: "0.1em", color: "var(--yk-enji)" }}>最終KPI</caption>
              <tbody>
                <tr><th>採用人数</th><td>4ヶ月集中フェーズで最低1名</td></tr>
                <tr><th>応募数</th><td>SNS・LP経由で応募または面談希望を創出</td></tr>
                <tr><th>採用単価</th><td>媒体・紹介依存より中長期的に低減</td></tr>
                <tr><th>定着可能性</th><td>事前理解を高め、早期離職リスクを下げる</td></tr>
              </tbody>
            </table>
          </div>
          <div className="yk-table-wrap">
            <table className="yk-table">
              <caption style={{ captionSide: "top", textAlign: "left", padding: "12px 14px", fontWeight: 800, fontSize: "0.78rem", letterSpacing: "0.1em", color: "var(--yk-enji)" }}>中間KPI</caption>
              <tbody>
                <tr><th>Instagram</th><td>保存数、プロフィールアクセス、LPクリック</td></tr>
                <tr><th>TikTok</th><td>視聴維持率、コメント、プロフィール遷移</td></tr>
                <tr><th>採用LP</th><td>PV、滞在時間、CTAクリック、フォーム到達</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "pricing",
    navLabel: "費用",
    content: (
      <>
        <p className="yk-eyebrow">PRICING</p>
        <h2 className="yk-title yk-serif">費用設計</h2>
        <div className="yk-table-wrap">
          <table className="yk-table">
            <thead>
              <tr>
                <th>項目</th>
                <th className="num">通常価格</th>
                <th className="num">特別提案価格</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>採用戦略設計・SNS運用・採用LP制作・運用伴走（4ヶ月）</td>
                <td className="num">200万円</td>
                <td className="num" style={{ color: "var(--yk-enji)", fontWeight: 800 }}>80万円</td>
              </tr>
              <tr>
                <td>月額換算</td>
                <td className="num">50万円/月</td>
                <td className="num" style={{ color: "var(--yk-enji)", fontWeight: 800 }}>20万円/月</td>
              </tr>
            </tbody>
          </table>
        </div>
        <blockquote className="yk-quote">
          80万円を1名採用の費用として見るのではなく、
          <br />
          今後の採用単価を下げるための「自社採用導線づくり」として捉える。
        </blockquote>
        <a href="#contact" className="yk-cta yk-cta-secondary">
          まずは4ヶ月で土台を作る
        </a>
      </>
    ),
  },
  {
    id: "scope",
    variant: "alt",
    content: (
      <>
        <p className="yk-eyebrow">SCOPE</p>
        <h2 className="yk-title yk-serif">支援範囲</h2>
        <div className="yk-grid-2">
          <div className="yk-card">
            <p className="yk-card-title">含まれる業務</p>
            <ul className="yk-list">
              <li>採用戦略・ターゲット・コンセプト設計</li>
              <li>Instagram / TikTok方針設計</li>
              <li>堀内さんを軸にした発信企画</li>
              <li>採用LP構成・制作ディレクション</li>
              <li>投稿・動画企画、撮影方針整理</li>
              <li>月次改善ミーティング、KPI確認</li>
              <li>半内製化に向けた運用整理</li>
            </ul>
          </div>
          <div className="yk-card">
            <p className="yk-card-title">別途相談事項</p>
            <ul className="yk-list">
              <li>追加撮影回数、広告配信費</li>
              <li>採用LPのサーバー・ドメイン費</li>
              <li>応募フォーム・LINE連携の実装範囲</li>
              <li>外国人採用支援パートナー連携</li>
              <li>12月以降の運用体制</li>
            </ul>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "risks",
    content: (
      <>
        <p className="yk-eyebrow">RISKS</p>
        <h2 className="yk-title yk-serif">リスクと対応方針</h2>
        <div className="yk-table-wrap">
          <table className="yk-table">
            <tbody>
              <tr>
                <th>SNSだけですぐ採用とは限らない</th>
                <td>短期成果だけで判断せず、LP・動画・投稿を資産として積み上げる</td>
              </tr>
              <tr>
                <th>接遇重視で母集団は狭くなる</th>
                <td>短期は接遇理解者を優先、中長期は教育体制で層を広げる余地を残す</td>
              </tr>
              <tr>
                <th>堀内さん個人への依存</th>
                <td>最初は軸にしつつ、徐々に旅館全体・他スタッフへ広げる</td>
              </tr>
              <tr>
                <th>外国人採用</th>
                <td>否定せず、日本語接遇・文化理解・定着意欲を条件として選択肢に</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    id: "after-dec",
    variant: "alt",
    content: (
      <>
        <p className="yk-eyebrow">AFTER NOVEMBER</p>
        <h2 className="yk-title yk-serif">12月以降の選択肢</h2>
        <div className="yk-table-wrap">
          <table className="yk-table">
            <thead>
              <tr><th>選択肢</th><th>判断基準</th></tr>
            </thead>
            <tbody>
              <tr><td>SNS採用を継続</td><td>応募・面談につながっている場合</td></tr>
              <tr><td>求人媒体を一部継続</td><td>応募単価・採用単価が許容範囲の場合</td></tr>
              <tr><td>広告配信を追加</td><td>SNSだけでは母数が足りない場合</td></tr>
              <tr><td>紹介・パートナー連携</td><td>急ぎで人員確保が必要な場合</td></tr>
              <tr><td>採用教育体制を強化</td><td>採用後の定着率を高めたい場合</td></tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    id: "next",
    navLabel: "次の一手",
    variant: "dark",
    content: (
      <>
        <p className="yk-eyebrow">NEXT ACTION</p>
        <h2 className="yk-title yk-serif">提案前に確認したいこと</h2>
        <ul className="yk-list" style={{ marginTop: 8 }}>
          <li>募集職種の正式名称、雇用条件、寮・通勤支援の有無</li>
          <li>堀内さんの出演可否・出演範囲</li>
          <li>応募導線：フォーム、電話、LINE、DMの主軸</li>
          <li>4ヶ月支援の正式な対象期間、80万円に含める制作範囲</li>
        </ul>
        <blockquote className="yk-quote">
          山県館様の採用は、ただ人を集める活動ではありません。
          <br />
          五百年続いてきた湯宿の価値を、次の時代へ受け継いでくれる人と出会う活動です。
        </blockquote>
        <blockquote className="yk-quote">
          求人媒体に依存する採用から、
          <br />
          山県館様自身の言葉と発信で人が集まる採用へ。
          <br />
          その土台を、まずは4ヶ月で作ります。
        </blockquote>
        <a id="contact" href="#contact" className="yk-cta yk-cta-primary">
          採用導線の設計を相談する
        </a>
      </>
    ),
  },
];
