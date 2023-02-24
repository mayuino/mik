import styles from '@/styles/Home.module.css'
import Image from 'next/image'

export const ContentConstitution = () =>{
  return(
    <div className={styles.content_constitution}>
      <div>
        <h1>MIKの構成</h1>
        <div className={styles.constitution_suii_frame}>
        <Image
              src="/engineer_suii.png"
              alt="エンジニアの推移"
              width={435}
              height={233}
            />
        <div className={styles.constition_suii_right}>
          <h2>在籍エンジニアは現在70名</h2>
          <p>MIKのエンジニアは現在約70名。コロナ禍中でも、毎年着実に在籍エンジニアを増やしてきました。</p>
        </div>
        </div>

        <div className={styles.constitution_sedai_frame}>
        <Image
              src="/graph_sedai.png"
              alt="エンジニアの推移"
              width={300}
              height={300}
            />
        <div className={styles.constition_sedai_right}>
          <h2>20代、30代が7割</h2>
          <p>MIKのエンジニア構成は、20代で約40％、30代で約30％となっており、20代、30代で7割を占めています。若いエンジニアが多いのがMIKの特徴の一つです。</p>
        </div>
        </div>

        <div className={styles.constitution_shokusyu_frame}>
        <Image
              src="/graph_shokusyu.png"
              alt="エンジニアの推移"
              width={300}
              height={300}
            />
        <div className={styles.constition_shokusyu_right}>
          <h2>約5割がソフトウェアエンジニア</h2>
          <p>MIKのエンジニアは、ソフトウェアエンジニアが半数を占めています。続いてテクニカルサポートやインフラ関連の仕事についている方もいらっしゃいます。</p>
        </div>
        </div>



      </div>
      <div/>


     
  </div>

  )
}