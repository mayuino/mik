import styles from '@/styles/Home.module.css'
import Image from 'next/image'

export const Content_InternalLINE = () => {
  return(

<>
    <div className={styles.Internal_Line_frame}  >
    <div className={styles.Internal_Line_title}>
    <h1>社内公式LINE</h1>
    <p>弊社には、札幌、大阪、盛岡、福岡にエンジニアがおり、それぞれが働く現場も異なっています。<br/>社内の情報を全社員にくまなくお伝えし、社員みんなの声をしっかりと聞くために、MIKでは、「社内LINE」をコミュニケーションツールとして活用しています。</p>
    </div>
    <div className={styles.Internal_Line_merit}>
      <h4>社内公式LINEのメリット１</h4>
      <h2>伝わりやすい</h2>
      <div className={styles.merit_content}>
    <Image
              src="/LINE_Brand_icon.svg"
              alt="line icon"
              width={180}
              height={180}
              className={styles.line_icon}
            />
      <div className={styles.merit_discription}>
      <p>弊社のイベント「MIKがんばったMVP」や、セキュリティ研修やさまざまな周知を、画像付きでお知らせすることができます。メールやお電話でお伝えするよりも、瞬時に、みなさんにご連絡することができます。</p>
      </div>
      </div>
    </div>

    <div className={styles.Internal_Line_merit}>
      <h4>社内公式LINEのメリット2</h4>
      <h2>社員一人一人の声が届きやすい</h2>
      <div className={styles.merit_content}>
    <Image
              src="/LINE_Brand_icon.svg"
              alt="line icon"
              width={180}
              height={180}
              className={styles.line_icon}
            />
      <div className={styles.merit_discription}>
      <p>弊社は、経営陣との距離が近く、会社への意見を言いやすいのが特徴です。これは、公式LINE上で呟くことにより、それぞれの意見が、必ず経営陣に届くためです。また、営業社員には直接話づらいことも、LINEを通して、会社に訴えることができます。</p>
      </div>
      </div>
    </div>

    <div className={styles.Internal_Line_merit}>
      <h4>社内公式LINEのメリット3</h4>
      <h2>意思表示しやすい</h2>
      <div className={styles.merit_content}>
    <Image
              src="/LINE_Brand_icon.svg"
              alt="line icon"
              width={180}
              height={180}
              className={styles.line_icon}
            />
      <div className={styles.merit_discription}>
      <p>弊社では、LINEにて、社員の方にさまざまなアンケートを実施し、その結果をもとに方向性を決めていくことが多くあります。アンケートで全体の意見を聞き、個別の意見も拾い上げながら、よりより会社運営を目指しています。</p>
      </div>
      </div>
    </div>
      
    </div> 
      </>
  )
}
