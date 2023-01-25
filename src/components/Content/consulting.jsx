import styles from '@/styles/Home.module.css'
import Image from 'next/image'

export const ContentConsulting = () =>{
  return(
    <div className={styles.content_main}>
      <div className={styles.content_main_top}>
        <h1>MIKのキャリアコンサルティング</h1>
      </div>

      <div className={styles.content_main_1}>
        <Image
            src="/engineer_first.svg"
            alt="main title window naritai"
            width={682}
            height={301}
            className={styles.content_item1}
          />
          <div className={styles.content_paragragh1}>
          <p>MIKのモットーは、「エンジニア第一主義」。<br/>
            あらゆる交渉面や、サポートにおいて、<br/>
            「エンジニア側」の視点に立って対応します。
          </p>
          </div>
      </div>

      <div className={styles.content_main_2}>
      
          <div className={styles.content_paragragh2}>
          <p>MIKは、あなたがなりたい理想の姿、<br/>
            望ましいワークライフバランス、<br/>
            将来設計など、あなたらしい人生を送ることを重視した<br/>
            「キャリア」の形成を支援します。
          </p>
          </div>
          <Image
            src="/career_image.svg"
            alt="imaging career"
            width={705}
            height={313}
            className={styles.content_item2}
          />
      </div>

      <div className={styles.content_main_3}>
        <Image
            src="/keireki_image.svg"
            alt="main title window naritai"
            width={682}
            height={301}
            className={styles.content_item3}
          />
          <div className={styles.content_paragragh3}>
          <p>MIKには、さまざまな国の方や、<br/>
            あらゆる経歴のエンジニアが多数所属しています。<br/>
            MIKには、従来の「エンジニアの当たり前」をくつがえす<br/>
            「視点」があります。
          </p>
          </div>
      </div>

      <div className={styles.content_main_4}>
      
          <div className={styles.content_paragragh4}>
          <p>MIKでも、多くのエンジニアがリモートワークの現場で活躍しています。<br/>
            リモートワークでも、孤独にならないために、<br/>
            心のケアを含め、<br/>
            さまざまなイベントを実施しています。
          </p>
          </div>
          <Image
            src="/remort_image.svg"
            alt="imaging career"
            width={705}
            height={313}
            className={styles.content_item4}
          />
      </div>
      <div className={styles.content_main_bottom}>
      </div>
  </div>

  )
}