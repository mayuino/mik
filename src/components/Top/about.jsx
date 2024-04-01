import styles from "@/styles/Home.module.css";
import mobileStyles from "@/styles/mobile.module.css";

export const About = () => {

    return (
      <div className={`${styles.about} ${mobileStyles.about}`}>
        <div className={`${styles.about_top} ${mobileStyles.about_top}`} >
        <img className={`${styles.about_mik} ${mobileStyles.about_mik}`} src="/images/new2024/about_mik.png" alt="aboutMIK"/>
        <div className={`${styles.about_top_text} ${mobileStyles.about_top_text}`}><h3>私たちは、</h3>
        <p>北海道札幌市を拠点として<br/>「人材力」、「育成力」、「柔軟な対応力」を武器に、<br/>
あらゆる技術分野へ最適な人材リソースを提供する<br/>オールエンジニアリング型<br/>ヒューマンソリューションカンパニーです。</p>
        </div>

     　
        
        　<div className={`${styles.circle_wrapper} ${mobileStyles.circle_wrapper}`} >
     <img className={`${styles.about_circle} ${mobileStyles.about_circle}`} src="/images/new2024/circle3.png" alt="aboutMIK"/>
     </div>
     </div>
     <div　className={`${styles.about_description} ${mobileStyles.about_description}`}><p>エンジニアリングに関わる様々な分野で、</p><br/>
     <p>弊社のエンジニアが活躍しています。</p></div>

     <div className={`${styles.card_list_wrapper} ${mobileStyles.card_list_wrapper}`}><ul
      className={`${styles.job_card_list} ${mobileStyles.job_card_list}`}>
        
        <li>
        <div className={styles.job_card}>
        <a href={"/gyoumu#gyoumu_web"}>
        <img　className={styles.job_images_about} src="/images/new2024/job/webdev.png" alt="web"/></a>
        <div className={styles.job_names_about}><h3>WEB・ソフトウェア</h3>
        <img className={styles.job_name_web} src="/images/new2024/job_name/jobname_web.png" alt="aboutMIK"/>
        </div>
        </div>
        </li>

        <li>
        <div className={styles.job_card}>
        <img　className={styles.job_images_about} src="/images/new2024/job/server.png" alt="server"/>
        <div className={styles.job_names_about}><h3>サーバー管理</h3>
        <img className={styles.job_name_server} src="/images/new2024/job_name/name_server.png" alt="aboutMIK"/>
        </div>
        </div>
        </li>

        <li>
        <div className={styles.job_card}>
        <img　className={styles.job_images_about} src="/images/new2024/job/idoutai.png" alt="idoutai"/>
        <div className={styles.job_names_about}><h3>移動体通信</h3>
        <img className={styles.job_name_idoutai} src="/images/new2024/job_name/name_idoutai.png" alt="aboutMIK"/>
        </div>
        </div>
        </li>

        <li>
        <div className={styles.job_card}>
        <img　className={styles.job_images_about} src="/images/new2024/job/handoutai.png" alt="handoutai"/>
        <div className={styles.job_names_about}><h3>半導体</h3>
        <img className={styles.job_name_handoutai} src="/images/new2024/job_name/name_handoutai.png" alt="aboutMIK"/>
        </div>
        </div>
        </li>

        <li>
        <div className={styles.job_card}>
        <img　className={styles.job_images_about} src="/images/new2024/job/cloud.png" alt="idoutai"/>
        <div className={styles.job_names_about}><h3>クラウド</h3>
        <img className={styles.job_name_cloud} src="/images/new2024/job_name/name_cloud.png" alt="aboutMIK"/>
        </div>
        </div>
        </li>

        <li>
        <div className={styles.job_card}>
        <img　className={styles.job_images_about} src="/images/new2024/job/core.png" alt="idoutai"/>
        <div className={styles.job_names_about}><h3>基幹システム</h3>
        <img className={styles.job_name_kikan} src="/images/new2024/job_name/name_kikan.png" alt="aboutMIK"/>
        </div>
        </div>
        </li>

        <li>
        <div className={styles.job_card}>
        <img　className={styles.job_images_about} src="/images/new2024/job/network.png" alt="idoutai"/>
        <div className={styles.job_names_about}><h3>ネットワーク</h3>
        <img className={styles.job_name_network} src="/images/new2024/job_name/name_network.png" alt="aboutMIK"/>
        </div>
        </div>
        </li>

        <li>
        <div className={styles.job_card}>
        <img　className={styles.job_images_about} src="/images/new2024/job/security.png" alt="idoutai"/>
        <div className={styles.job_names_about}><h3>セキュリティ</h3>
        <img className={styles.job_name_security} src="/images/new2024/job_name/name_security.png" alt="aboutMIK"/>
        </div>
        </div>
        </li>

        <li>
        <div className={styles.job_card}>
        <img　className={styles.job_images_about} src="/images/new2024/job/medical.png" alt="idoutai"/>
        <div className={styles.job_names_about}><h3>医療</h3>
        <img className={styles.job_name_medical} src="/images/new2024/job_name/name_medical.png" alt="aboutMIK"/>
        </div>
        </div>
        </li>

        <li>
        <div className={styles.job_card}>
        <img　className={styles.job_images_about} src="/images/new2024/job/kensetsu.png" alt="idoutai"/>
        <div className={styles.job_names_about}><h3>建設</h3>
        <img className={styles.job_name_construct} src="/images/new2024/job_name/name_kensetsu.png" alt="aboutMIK"/>
        </div>
        </div>
        </li>

        <li>
        <div className={styles.job_card}>
        <img　className={styles.job_images_about} src="/images/new2024/job/logistics.png" alt="idoutai"/>
        <div className={styles.job_names_about}><h3>物流</h3>
        <img className={styles.job_name_logistics} src="/images/new2024/job_name/name_logistics.png" alt="aboutMIK"/>
        </div>
        </div>
        </li>

        <li>
        <div className={styles.job_card}>
        <img　className={styles.job_images_about} src="/images/new2024/job/civilconstruction.png" alt="idoutai"/>
        <div className={styles.job_names_about}><h3>土木</h3>
        <img className={styles.job_name_doboku} src="/images/new2024/job_name/name_doboku.png" alt="aboutMIK"/>
        </div>
        </div>
        </li>

        <li>
        <div className={styles.job_card}>
        <img　className={styles.job_images_about} src="/images/new2024/job/plunt.png" alt="idoutai"/>
        <div className={styles.job_names_about}><h3>プラント</h3>
        <img className={styles.job_name_plant} src="/images/new2024/job_name/name_plant.png" alt="aboutMIK"/>
        </div>
        </div>
        </li>

        <li>
        <div className={styles.job_card}>
        <img　className={styles.job_images_about} src="/images/new2024/job/building.png" alt="idoutai"/>
        <div className={styles.job_names_about}><h3>建物管理</h3>
        <img className={styles.job_name_bilmane} src="/images/new2024/job_name/name_tatemonokanri.png" alt="aboutMIK"/>
        </div>
        </div>
        </li>

        <li>
        <div className={styles.job_card}>
        <img　className={styles.job_images_about} src="/images/new2024/job/helpdesk.png" alt="idoutai"/>
        <div className={styles.job_names_about}><h3>ヘルプデスク</h3>
        <img className={styles.job_name_help} src="/images/new2024/job_name/name_helpdesk.png" alt="aboutMIK"/>
        </div>
        </div>
        </li>
        
        </ul></div>
       
      </div>

    )

    
}
