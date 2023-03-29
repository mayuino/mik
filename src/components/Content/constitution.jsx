import styles from "@/styles/Home.module.css";
import Image from "next/image";
import mobileStyles from "@/styles/mobile.module.css";

export const ContentConstitution = () => {
  return (
    <div
      className={`${styles.content_constitution} ${mobileStyles.content_constitution}`}
    >
      <div
        className={`${styles.content_constitution_title} ${mobileStyles.content_constitution_title}`}
      >
        <h1>MIKの構成</h1>
        <p>MIKは、以下のような構成で成り立っています。</p>
      </div>
      <div
        className={`${styles.constitution_suii_frame} ${mobileStyles.constitution_suii_frame}`}
      >
        <Image
          src="/engineer_suii.png"
          alt="エンジニアの推移"
          width={435}
          height={233}
          className={`${styles.constitution_graph} ${mobileStyles.constitution_graph}`}
        />
        <div
          className={`${styles.constitution_suii_right} ${mobileStyles.constitution_suii_right}`}
        >
          <h1>在籍エンジニアは現在70名</h1>
          <p>
            MIKのエンジニアは現在約70名。コロナ禍中でも、毎年着実に在籍エンジニアを増やしてきました。
          </p>
        </div>
      </div>

      <div
        className={`${styles.constitution_suii_frame} ${mobileStyles.constitution_suii_frame}`}
      >
        <Image
          src="/kousei_mikeiken.jpg"
          alt="未経験率"
          width={350}
          height={350}
          className={`${styles.constitution_graph} ${mobileStyles.constitution_graph}`}
        />
        <div
          className={`${styles.constitution_suii_right} ${mobileStyles.constitution_suii_right}`}
        >
          <h1>
            未経験<br/>スタート率は
            <br />
            44％
          </h1>
          <p>
            44%の方が、未経験からスタートしています。
            <br />
            社内の先輩や同僚、派遣先の方々のご協力を得て、皆様エンジニアとしてたくましく成長しています。
          </p>
        </div>
      </div>

      <div
        className={`${styles.constitution_suii_frame} ${mobileStyles.constitution_suii_frame}`}
      >
        <Image
          src="/graph_sedai.png"
          alt="エンジニアの推移"
          width={350}
          height={350}
          className={`${styles.constitution_graph} ${mobileStyles.constitution_graph}`}
        />
        <div
          className={`${styles.constitution_suii_right} ${mobileStyles.constitution_suii_right}`}
        >
          <h1>
            20代、30代が
            <br />
            7割
          </h1>
          <p>
            MIKのエンジニア構成は、20代で約40％、30代で約30％となっており、20代、30代で7割を占めています。若いエンジニアが多いのがMIKの特徴の一つです。
          </p>
        </div>
      </div>

      <div
        className={`${styles.constitution_suii_frame} ${mobileStyles.constitution_suii_frame}`}
      >
        <Image
          src="/graph_shokusyu.png"
          alt="職種構成"
          width={350}
          height={350}
          className={`${styles.constitution_graph} ${mobileStyles.constitution_graph}`}
        />
        <div
          className={`${styles.constitution_suii_right} ${mobileStyles.constitution_suii_right}`}
        >
          <h1>
            ソフトウェア
            <br />
            エンジニアが
            <br />
            約5割
          </h1>
          <p>
            MIKのエンジニアは、ソフトウェアエンジニアが半数を占めています。続いてテクニカルサポートやインフラ関連の仕事についている方もいらっしゃいます。
          </p>
        </div>
      </div>
    </div>
  );
};
