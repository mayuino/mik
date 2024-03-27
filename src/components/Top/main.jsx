import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { Header } from "../Header";
import { MenuBar } from "../MenuBar";
import mobileStyles from "@/styles/mobile.module.css";
import { useEffect, useState } from "react";
import { About } from "./about";
import { Strength } from "./strength";
import { Link } from "react-router-dom";

export const Main = () => {

  const [animationStarted, setAnimationStarted] = useState(false);

useEffect(() => {
  const timer = setTimeout(() => {
    setAnimationStarted(true);
  },3000);

  return () => clearTimeout(timer);
},[])

  return (
  
    <div
      className={`${styles.top} ${mobileStyles.top_image_frame}`}
    >
     <img　className={styles.top_sapporo} src="/images/new2024/sapporo-city2.png" alt="sapporo_city_photo"/>
     <img　className={styles.top_flexible} src="/images/new2024/moji-flexible.png" alt="flexiblesupport"/>
     <img　className={styles.top_resourcecompany} src="/images/new2024/moji-resourcecompany.png" alt="resource_company"/>
   <img　className={styles.top_efirst} src="/images/new2024/engineer-first-title.png" alt="engineer-first"/>;
     <img　className={styles.top_sakura} src="/images/new2024/sakura_eda.png" alt="engineer-first"/>
     
     <img　className={styles.top_hanabira} src="/images/new2024/hanabira.png" alt="messagebox"/>
     <img　className={styles.top_box_tunagu} src="/images/new2024/box_tunagu1.png" alt="messagebox"/>
    <div className={styles.joblist_wrapper}>
     <ul className={styles.joblist}>
      <li><div className={styles.job_box}>
     
        <img　className={styles.job_images} src="/images/new2024/job/webdev.png" alt="web"/>
     <div className={styles.job_name}><h6>WEB/ソフトウェア</h6></div>
       </div></li>

       <li><div className={styles.job_box}>
        <img　className={styles.job_images} src="/images/new2024/job/idoutai.png" alt="web"/>
     <div className={styles.job_name}><h6>移動体通信</h6></div>
       </div></li>

       <li><div className={styles.job_box}>
        <img　className={styles.job_images} src="/images/new2024/job/kensetsu.png" alt="web"/>
     <div className={styles.job_name}><h6>建築</h6></div>
       </div></li>

       <li><div className={styles.job_box}>
        <img　className={styles.job_images} src="/images/new2024/job/handoutai.png" alt="web"/>
     <div className={styles.job_name}><h6>半導体</h6></div>
       </div></li>

       <li><div className={styles.job_box}>
        <img　className={styles.job_images} src="/images/new2024/job/drone.png" alt="web"/>
     <div className={styles.job_name}><h6>ドローン</h6></div>
       </div></li>

       <li><div className={styles.job_box}>
        <img　className={styles.job_images} src="/images/new2024/job/server.png" alt="web"/>
     <div className={styles.job_name}><h6>サーバー管理</h6></div>
       </div></li>

       <li><div className={styles.job_box}>
        <img　className={styles.job_images} src="/images/new2024/job/helpdesk.png" alt="web"/>
     <div className={styles.job_name}><h6>ヘルプデスク</h6></div>
       </div></li>
</ul>
</div>
</div>

  );
};
