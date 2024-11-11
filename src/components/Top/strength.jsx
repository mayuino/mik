import styles from "@/styles/Home.module.css";
import mobileStyles from "@/styles/mobile.module.css";

export const Strength = () => {
  return (
    <div className={`${styles.strength} ${mobileStyles.strength}`}>
      <div className={`${styles.strength_top} ${mobileStyles.strength_top}`}>
        <img
          className={`${styles.strength_mik} ${mobileStyles.strength_mik}`}
          src="/images/new2024/strength/strength_title.svg"
          alt="aboutMIK"
        />
      </div>
      <div
        className={`${styles.strength_content} ${mobileStyles.strength_content}`}
      >
        <div
          className={`${styles.strength_jinzairyoku} ${mobileStyles.strength_jinzairyoku}`}
        >
          <img
            className={`${styles.jinzairyoku_png} ${mobileStyles.jinzairyoku_png}`}
            src="/images/new2024/strength/jinzairyoku.png"
            alt="jinzairyoku"
          />
          <div>
            <h3>
              未来志向の人材確保と
              <br />
              人材の丁寧な把握
            </h3>
            <div
              className={`${styles.jinzairyoku_sentence} ${mobileStyles.jinzairyoku_sentence}`}
            >
              弊社は、社員の「未来」を重視し、
              今だけでなく「伸びしろ」を視野に入れた人材の確保を行なっています。
              また、弊社では、社員一人一人と、しっかり向き合い、将来に向けてどんな道を進んでいきたいのか、
              <br />
              どんなライフスタイルを送りたいのかなど、
              <br />
              それぞれの展望を把握した上でクライアント企業への
              <br />
              配属提案を行なっているため、社員のモチベーションが全体的に高く、生産性の向上にも繋がっています。
            </div>
          </div>
        </div>

        <div
          className={`${styles.strength_ikuseiryoku} ${mobileStyles.strength_ikuseiryoku}`}
        >
          <div>
            <img
              className={`${styles.strength_ikusei_png} ${mobileStyles.strength_ikusei_png}`}
              src="/images/new2024/strength/ikuseiryoku.png"
              alt="ikuseiryoku"
            />
            <h3>
              未経験に強いMIK。
              <br />
              入社後の社内教育により
              <br />
              柔軟性の高いエンジニアへ。
            </h3>
          </div>
          <div
            className={`${styles.ikuseiryoku_sentence} ${mobileStyles.ikuseiryoku_sentence}`}
          >
            弊社の未経験スタート率は約15％。経験者が優遇されるIT業界において、この数字は決して小さくありません。
            マンツーマンという教育体制を貫き、数ヶ月という短い期間の学びの中で、たくさんのエンジニアが成長し、羽ばたいています。
            <br />
            <br />
            配属後も、弊社内で結成されたチームへの配属が可能で、OJTとして生きた学びが得ながら、成長していくことができます。
          </div>
          <div></div>
        </div>

        <div
          className={`${styles.strength_taiouryoku} ${mobileStyles.strength_taiouryoku}`}
        >
          <div>
            <h3>
              価値観が多様化する今だからこそ、
              <br />
              柔軟に対応できる弊社の
              <br />
              「対応力」が活きています。
            </h3>
            <img
              className={`${styles.strength_taiou_png1} ${mobileStyles.strength_taiou_png1}`}
              src="/images/new2024/job/kensetsu.png"
              alt="kensetsu"
            />
          </div>
          <div>
            <img
              className={`${styles.strength_taiou_png2} ${mobileStyles.strength_taiou_png2}`}
              src="/images/new2024/strength/taiouryoku.png"
              alt="taiouryoku"
            />
            <div
              className={`${styles.taiou_sentence} ${mobileStyles.taiou_sentence}`}
            >
              業務のレベルや、難易度に合わせ、
              <br />
              エンジニアの再教育や、
              <br />
              教育機会を提供し、
              <br />
              現場で求められるエンジニアの育成に
              <br />
              取り組んでいます。
              <br />
              また、さまざまなクライアント企業からの要望にも
              <br />
              的確に応えられるよう、毎年クライアント企業への
              <br />
              アンケートを行い、現場の声を確認しています。
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
