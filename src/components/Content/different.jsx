import styles from "@/styles/Home.module.css";
import Image from "next/image";
import mobileStyles from "@/styles/mobile.module.css";

export const Content_Different = () => {
  return (
    <div className={`${styles.content_different_frame} ${mobileStyles.content_different_frame}`}>
      <div className={`${styles.content_different_title} ${mobileStyles.content_different_title}`}>
        <h1>従来型派遣会社との違い</h1>
        <p>MIKは、従来型の派遣会社と以下の点で大きく違います。</p>
      </div>

      <div className={`${styles.different} ${mobileStyles.different}`}>
        <div className={`${styles.different_top} ${mobileStyles.different_top}`}>
          <h4>相違点1</h4>
          <h1>コスト意識の違い</h1>
        </div>
        <div className={`${styles.different_discription} ${mobileStyles.different_discription}`}>
          <div className={`${styles.different_left} ${mobileStyles.different_left}`}>
            <div className={`${styles.different_mik} ${mobileStyles.different_mik}`}>
              <h3>MIKの派遣</h3>
              <p>
                コストに縛られず、社員のモチベーションや成長を重視。
                <br />
                スキルや経験に応じて、最大限社員に還元。
              </p>
            </div>
            <div className={`${styles.different_other} ${mobileStyles.different_other}`}>
              <h3>従来型派遣会社</h3>
              <p>コスト意識に縛られすぎて、社員の給与がなかなか上がらない。</p>
            </div>
          </div>
          <div className={`${styles.different_right} ${mobileStyles.different_right}`}>
            <Image src="/money.jpg" alt="line icon" width={250} height={250} />
          </div>
        </div>
      </div>

      <div className={`${styles.different} ${mobileStyles.different}`}>
        <div className={`${styles.different_top} ${mobileStyles.different_top}`}>
          <h4>相違点2</h4>
          <h1>昇給・キャリアアップの機会</h1>
        </div>
        <div className={`${styles.different_discription} ${mobileStyles.different_discription}`}>
          <div className={`${styles.different_left} ${mobileStyles.different_left}`}>
            <div className={`${styles.different_mik} ${mobileStyles.different_mik}`}>
              <h3>MIKの派遣</h3>
              <p>年齢や、キャリアを重視し、誰にでも適正な機会を提供。</p>
            </div>
            <div className={`${styles.different_other} ${mobileStyles.different_other}`}>
              <h3>従来型派遣会社</h3>
              <p>本人の努力や成長よりも、会社の営業力に左右される。</p>
            </div>
          </div>
          <div className={`${styles.different_right} ${mobileStyles.different_right}`}>
            <Image
              src="/skill_up.jpg"
              alt="line icon"
              width={280}
              height={260}
            />
          </div>
        </div>
      </div>

      <div className={`${styles.different} ${mobileStyles.different}`}>
        <div className={`${styles.different_top} ${mobileStyles.different_top}`}>
          <h4>相違点3</h4>
          <h1>社内状況や評価の透明性</h1>
        </div>
        <div className={`${styles.different_discription} ${mobileStyles.different_discription}`}>
          <div className={`${styles.different_left} ${mobileStyles.different_left}`}>
            <div className={`${styles.different_mik} ${mobileStyles.different_mik}`}>
              <h3>MIKの派遣</h3>
              <p>
                会社の状況や、社内の新しい試み、社員の評価基準をすべて可視化。
              </p>
            </div>
            <div className={`${styles.different_other} ${mobileStyles.different_other}`}>
              <h3>従来型派遣会社</h3>
              <p>
                会社の業績や、組織内の事業、査定の理由など、会社にいながら自分の会社の状況が見えてこない。
              </p>
            </div>
          </div>
          <div className={`${styles.different_right} ${mobileStyles.different_right}`}>
            <Image
              src="/toumeisei.jpg"
              alt="line icon"
              width={280}
              height={230}
            />
          </div>
        </div>
      </div>

      <div className={`${styles.different} ${mobileStyles.different}`}>
        <div className={`${styles.different_top} ${mobileStyles.different_top}`}>
          <h4>相違点4</h4>
          <h1>キャリアアップを重視した配属</h1>
        </div>
        <div className={`${styles.different_discription} ${mobileStyles.different_discription}`}>
          <div className={`${styles.different_left} ${mobileStyles.different_left}`}>
            <div className={`${styles.different_mik} ${mobileStyles.different_mik}`}>
              <h3>MIKの派遣</h3>
              <p>
                長期的なキャリアプランを形成し、社員それぞれのキャリアアップ、スキルアップを重視した配属。
              </p>
            </div>
            <div className={`${styles.different_other} ${mobileStyles.different_other}`}>
              <h3>従来型派遣会社</h3>
              <p>
                本人のキャリアアップや希望を無視した、会社の利益のための配属が行われることがある。
              </p>
            </div>
          </div>
          <div className={`${styles.different_right} ${mobileStyles.different_right}`}>
            <Image
              src="/haizoku.jpg"
              alt="line icon"
              width={280}
              height={230}
            />
          </div>
        </div>
      </div>

      <div className={`${styles.different} ${mobileStyles.different}`}>
        <div className={styles.different_top}>
          <h4>相違点5</h4>
          <h1>社員の声の反映</h1>
        </div>
        <div className={`${styles.different_discription} ${mobileStyles.different_discription}`}>
          <div className={`${styles.different_left} ${mobileStyles.different_left}`}>
            <div className={`${styles.different_mik} ${mobileStyles.different_mik}`}>
              <h3>MIKの派遣</h3>
              <p>
                社内公式LINEや営業担当を通して、経営陣に意思をすぐに伝えられる。経営側では、取り入れるべき意見は取り入れていくのが基本。
              </p>
            </div>
            <div className={`${styles.different_other} ${mobileStyles.different_other}`}>
              <h3>従来型派遣会社</h3>
              <p>
                営業担当以外とは、ほとんど接点がなく、社員の声が会社に反映されにくい。
              </p>
            </div>
          </div>
          <div className={`${styles.different_right} ${mobileStyles.different_right}`}>
            <Image
              src="/keieijin.jpg"
              alt="line icon"
              width={180}
              height={230}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
