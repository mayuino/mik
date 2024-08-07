import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import mobileStyles from "@/styles/mobile.module.css";

export const Content_Rinen = () =>{
  return(
    <div className={`${styles.content_rinen} ${mobileStyles.content_rinen}`}>
      <div className={`${styles.rinen_title} ${mobileStyles.rinen_title}`}>
        <h1>経営理念</h1>
      </div>
      <div className={`${styles.rinen} ${mobileStyles.rinen}`}>
        <div className={`${styles.rinen_content_title} ${mobileStyles.rinen_content_title}`}>
          <h1>エンジニアファースト</h1>
          <h3>MIKは、人材が命。</h3>
        </div>
        <div className={`${styles.rinen_content} ${mobileStyles.rinen_content}`}>
        <Image
            src="/mensetsu.jpg"
            alt="engineer_first"
            width={250}
            height={250}
            className={`${styles.rinen_image} ${mobileStyles.rinen_image}`}
            />
        <div className={`${styles.rinen_content_discription} ${mobileStyles.rinen_content_discription}`}>
      
         <p>弊社では、社員の自主性や功績を最大限に認め、<br/>社員一人ひとりの希望に合った働き方、能力の育成、<br/>ライフスタイルの実現に貢献したいと考えています。</p>
        </div>
        </div>
      </div>

      <div className={`${styles.rinen} ${mobileStyles.rinen}`}>
        <div className={`${styles.rinen_content_title} ${mobileStyles.rinen_content_title}`}>
          <h1>エンジニアサクセスプロジェクト</h1>
          <h3>エンジニアそれぞれが抱く『理想』を実現する。</h3>
        </div>
        <div className={`${styles.rinen_content} ${mobileStyles.rinen_content}`}>
        <Image
            src="/engineer_success.jpg"
            alt="engineer_first"
            width={250}
            height={250}
            className={`${styles.rinen_image} ${mobileStyles.rinen_image}`}
            />
        <div className={`${styles.rinen_content_discription} ${mobileStyles.rinen_content_discription}`}>
         <p>弊社のエンジニアたちが抱く理想は、みな違います。<br/>MIKでは、それぞれの「なりたいエンジニア」になることを「エンジニアとしての成功」と考えます。<br/>あなたが「なりたいエンジニア」になるために、MIKは全力で応援します。</p>
        </div>
        </div>
      </div>

      <div className={`${styles.rinen} ${mobileStyles.rinen}`}>
        <div className={`${styles.rinen_content_title} ${mobileStyles.rinen_content_title}`}>
          <h1>フレキシブルサポート</h1>
          <h3>クライアントが求めるスキルを柔軟に育てる。</h3>
        </div>
        <div className={`${styles.rinen_content} ${mobileStyles.rinen_content}`}>
        <Image
            src="/client_building.jpg"
            alt="engineer_first"
            width={250}
            height={250}
            className={`${styles.rinen_image} ${mobileStyles.rinen_image}`}
            />
        <div className={`${styles.rinen_content_discription} ${mobileStyles.rinen_content_discription}`}>
         <p>派遣先ごとに、求められるスキルや能力は異なります。<br/>MIKでは、クライアントが求めるスキルや能力をしっかりヒアリングし、最も適した人材を育て、派遣します。<br/>
          また、クライアントの現場で求めるスキルに特化したチームを編成し、チーム単位でクライアントに貢献することも、MIKのフレキシブルサポートの一環です。
         </p>
        </div>
        </div>
      </div>


      </div>

  )
}