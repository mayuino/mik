import styles from "@/styles/Home.module.css";
import Image from "next/image";
import mobileStyles from "@/styles/mobile.module.css";
export const Content_gyoumu = () => {
  return (
   <div className={styles.gyoumu}>

    <div className={styles.gyoumu_title}>
      <h1>配属先と業務</h1>
      <p>弊社のエンジニアは、このような業務を行なっています。</p>
    </div>

    <div className={styles.gyoumu_box} id="gyoumu_web">
    <div className={styles.colorbar}></div>
    <div>
    <h2>WEB</h2>
    <img　className={styles.job_images_gyoumu} src="/images/new2024/job/webdev.png" alt="web"/>
    </div>

    <div className={styles.gyoumu_sentence}>
    <h4>配属先</h4>
      <p>某有名ショッピングサイトのWeb制作チーム</p>
      <h4>業務内容</h4>
      <p>WEBサイトの改修、運用、管理</p>
      <h4>勤務形態</h4>
      <p>配属先企業常駐</p>
      <h4>主に対応している仕事</h4>
      <p></p>
      <h4>この仕事における「やりがい」</h4>
      <p></p>
      <h4>この仕事で少し大変だと思うところ</h4>
      <p></p>
    </div>
    </div>

    <div className={styles.gyoumu_box}>
    <div className={styles.colorbar}></div>
    <div>
    <h2>移動体通信</h2>
    <img　className={styles.job_images_gyoumu} src="/images/new2024/job/idoutai.png" alt="idoutai"/>
    </div>

    <div className={styles.gyoumu_sentence}>
    <h4>配属先</h4>
      <p>某有名携帯電話会社の基地局設営・修繕業務チーム</p>
      <h4>業務内容</h4>
      <p>基地局設営・修繕、災害時の基地局整備</p>
      <h4>勤務形態</h4>
      <p>配属先企業常駐</p>
      <h4>主に対応している仕事</h4>
      <p></p>
      <h4>この仕事における「やりがい」</h4>
      <p></p>
      <h4>この仕事で少し大変だと思うところ</h4>
      <p></p>
    </div>
    </div>


   </div>
  );
};
