import styles from '@/styles/Home.module.css'
import Image from 'next/image'

export const Content_Consulting = () =>{
  return(

    <div className={styles.content_consul_frame}>
      <div className={styles.content_consul_title}>
      <h2>MIKのコンサルティング</h2>
      <p>MIKは、あなたが岐路に立つたびに、コンサルティングを行います。</p>
      </div>

      <div className={styles.consulting}>
            <div className={styles.consulting_top}>
              <h1>入社後コンサルティング</h1>
            </div>
           <div className={styles.consulting_description}>
            <div className={styles.consulting_left}>
            <Image
              src="/mendan1on1.jpg"
              alt="nyuusyago_mendan"
              width={306}
              height={205}
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
              仕事自体は自分に合うが、今働いている現場ではスキルアップできる気がしない、など、キャリアアップを目指すために、悩みや調整の必要が出てきたら、営業担当者や、キャリアコンサルタントと話し合いの場をもち、しっかりと調整を行います。</p> 
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




  )
}