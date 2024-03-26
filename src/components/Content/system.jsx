import styles from "@/styles/Home.module.css";
import Image from "next/image";
import mobileStyles from "@/styles/mobile.module.css";
export const Content_system = () => {
  return (
    <div className={`${styles.system_frame} ${mobileStyles.system_frame}`}>
      <div className={`${styles.system_title} ${mobileStyles.system_title}`}>
        <h1>MIKの社内制度</h1>
        <p>MIKは、エンジニアのための様々な制度を用意しています。</p>
      </div>
      {/* <div className={`${styles.system} ${mobileStyles.system}`}>
        <h2>社員評価システム</h2>
        <div
          className={`${styles.system_content} ${mobileStyles.system_content}`}
        >
          <Image
            src="/hyouka_icon.png"
            alt="line icon"
            width={240}
            height={240}
            className={`${styles.system_image} ${mobileStyles.system_image}`}
          />
          <div
            className={`${styles.system_discription} ${mobileStyles.system_discription}`}
          >
            <p>
              MIKの社員評価は、「毎日の業務」がそのまま「他の現場に移っても【使える】スキル」となる、客観的かつ汎用的な評価システムを採用しています。就業中の業務ごとに細かく評価を行いますので、現状の自分の到達度や、今後何を目指すべきかも把握しやすくなります。
            </p>
          </div>
        </div>
      </div> */}

<div className={`${styles.system} ${mobileStyles.system}`}>
        
        <div
          className={`${styles.system_content} ${mobileStyles.system_content}`}
        >
          <div>
          <h2>社内教育制度</h2>
       <img　className={styles.system_images} src="/images/new2024/system/kyouiku.png" alt="kyouiku_image"/>
       </div>
          <div
            className={`${styles.system_discription} ${mobileStyles.system_discription}`}
          >
           
            <p>
            未経験の方、開発経験が浅い方が入社する際には、教育担当がつき、マンツーマンでのオンライン講習を行います。
              講習の中では、オンライン講座で培った内容をもとに、WEBアプリなどの制作を行います。
              在籍社員の方にも、新しい分野に挑戦される方への研修や、オンライン講座の受講や、書籍の貸し出しも行なっています。<br/>
              <br/>
              
            </p>
          </div>
        </div>
      </div>


      <div className={`${styles.system} ${mobileStyles.system}`}>
        
        <div
          className={`${styles.system_content} ${mobileStyles.system_content}`}
        >
          <div>
          <h2>社内貢献ポイント制度</h2>
          <img　className={styles.system_images} src="/images/new2024/system/point.png" alt="point_image"/>
          </div>
          <div
            className={`${styles.system_discription} ${mobileStyles.system_discription}`}
          >
            <p>
              社内イベントの参加や、アンケートの投票、友人の紹介、派遣先の紹介など、さまざまな部分で会社に貢献してくれた方にポイントを贈呈する制度です。ポイントは、自分のタイミングでインセンティブとして受け取ることができます。
            </p>
          </div>
        </div>
      </div>


      <div className={`${styles.system} ${mobileStyles.system}`}>
       

        <div
          className={`${styles.system_content} ${mobileStyles.system_content}`}
        >
          <div>
        <h2>MIKがんばったMVP</h2>
        <img　className={styles.system_images} src="/images/new2024/system/mvp.png" alt="mvp_image"/>
          </div>
          <div
            className={`${styles.system_discription} ${mobileStyles.system_discription}`}
          >
            <p>
              弊社では、配属先常駐や、在宅勤務が多く、
              なかなかコミュニケーションをとることが少ない中、
              毎年１回、社員同士が、
              お互いの仕事や、日常生活で頑張ったことを公表し合い、
              MVPを決める制度があります。
              遠くにいる同じ会社の仲間がどんなことを頑張っているのかを知ることのできる良い機会になっています。
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};
