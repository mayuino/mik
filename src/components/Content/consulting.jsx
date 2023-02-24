import styles from '@/styles/Home.module.css'
import Image from 'next/image'

export const ContentConsulting = () =>{
  return(
    <>
    <div className={styles.content_consulting}>
        <div className={styles.content_consulting_title}>
        <h3>MIKの3つのキャリアコンサルティング</h3>
        </div>

        
        <div className={styles.consulting_frame}>
    
        <div className={styles.consulting}>
          <div className={styles.consulting_top}>
            <h1>入社後コンサルティング</h1>
          </div>
          <div className={styles.consulting_description}>
            <div className={styles.consulting_left}>
            <Image
              src="/mendan1on1.jpg"
              alt="nyuusyago_mendan"
              width={316}
              height={235}
            />
            </div>

            <div className={styles.consulting_right}>
              <p>これからどのようなキャリアを進めていきたいのか、<br/>
              今、どんなことに興味があり、<br/>
              どういったエンジニアになりたいかを、<br/>弊社のキャリアコンサルタントと話し合います。</p> 
            </div>
          </div>
        </div>

        <div className={styles.consulting}>
          <div className={styles.consulting_top}>
            <h1>就業中コンサルティング</h1>
          </div>
          <div className={styles.consulting_description}>
            <div className={styles.consulting_left}>
            <Image
              src="/mendan2on2.jpg"
              alt="nyuusyago_mendan"
              width={316}
              height={235}
            />
            </div>

            <div className={styles.consulting_right}>
              <p>今の業務を継続しながらスキルアップをするには？
想像していたキャリアが自分には合わない気がする、
仕事自体は自分に合うが、今働いている現場ではスキルアップできる気がしない、
など、キャリアアップを目指すために、悩みや調整の必要が出てきたら、営業担当者や、キャリアコンサルタントと話し合いの場をもち、しっかりと調整を行います。</p> 
            </div>
          </div>
        </div>

        <div className={styles.consulting}>
          <div className={styles.consulting_top}>
            <h1>キャリア転換コンサルティング</h1>
          </div>
          <div className={styles.consulting_description}>
            <div className={styles.consulting_left}>
            <Image
              src="/mendan1on1.jpg"
              alt="nyuusyago_mendan"
              width={316}
              height={235}
            />
            </div>

            <div className={styles.consulting_right}>
              <p>やりたいことが出てきた、
今の業務とは違うキャリアを積みたい、
というときに、それがMIKで応じることのできる
範囲の業種であれば、次のキャリアに移るための
面談を行います。</p> 
            </div>
          </div>
        </div>

        </div>
        </div>

{/*評価制度*/}
      <div className={styles.content_consulting}>
        <div className={styles.content_consulting_title}>
        <h3>キャリアと評価</h3>
        </div>

        
        <div className={styles.consulting_hyouka_frame}>
    
        <div className={styles.consulting_hyouka}>
          <div className={styles.consulting_hyouka_top}>
            <h1>MIKの評価制度</h1>
          </div>
          <div className={styles.consulting_description}>
            <div className={styles.consulting_left}>
            <Image
              src="/hyouka_icon.png"
              alt="評価制度"
              width={287}
              height={286}
            />
            </div>

            <div className={styles.consulting_right}>
              <p>同種の職場で対応しうる汎用的な能力の到達度を評価指標とし、各エンジニアを14段階のPhase(フェーズ)で判定する制度です。毎日の業務で積み上げてきたキャリアが、「他のプロジェクトに移る」際や、「賃金アップ交渉」の場面でも活かせるよう、評価制度を使用したキャリア形成を進めています。</p> 
            </div>
          </div>
        </div>

      </div>
      </div>
      
      </>
       

  )
}