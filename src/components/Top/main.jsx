import styles from "@/styles/Home.module.css";

import mobileStyles from "@/styles/mobile.module.css";
import { useEffect, useState } from "react";

import Link from "next/link";

export const Main = () => {
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationStarted(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${styles.top} ${mobileStyles.top}`}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet"
      ></link>
      <img
        className={`${styles.top_sapporo} ${mobileStyles.top_sapporo}`}
        src="/images/new2024/sapporo-city2.png"
        alt="sapporo_city_photo"
      />
      <img
        className={`${styles.top_flexible} ${mobileStyles.top_flexible}`}
        src="/images/new2024/moji-flexible.png"
        alt="flexiblesupport"
      />
      <img
        className={`${styles.top_resourcecompany} ${mobileStyles.top_resourcecompany}`}
        src="/images/new2024/moji-resourcecompany.png"
        alt="resource_company"
      />
      {/* // engineer_firsg green
   <img　className={`${styles.top_efirst} ${mobileStyles.top_efirst}`} src="/images/new2024/engineer-first-title.png" alt="engineer-first"/>; */}
      <img
        className={`${styles.top_efirst} ${mobileStyles.top_efirst}`}
        src="/images/new2024/May/engineer_first.png"
        alt="engineer-first"
      />
      ;
      {/* 
     //4月デコ
     <img　className={`${styles.top_sakura} ${mobileStyles.top_sakura}`} src="/images/new2024/sakura_eda.png" alt="sakura_eda"/>    
     <img　className={ `${styles.top_hanabira} ${mobileStyles.top_hanabira}`} src="/images/new2024/hanabira.png" alt="messagebox"/> */}
      <img
        className={`${styles.top_box_tunagu} ${mobileStyles.top_box_tunagu}`}
        src="/images/new2024/box_tunagu1.png"
        alt="messagebox"
      />
      <Link href={"/blog/sk5nhbq10i6"}>
        <div className={`${styles.top_button} ${mobileStyles.top_button}`}>
          <span className={styles.top_button_span}>
            {" "}
            {/* 
            //5月デコ
            <img
              className={`${styles.top_koinobori} ${mobileStyles.top_koinobori}`}
              src="/images/new2024/May/koinobori.png"
              alt="koinobori"
            />{" "} */}
          </span>
          <h5>
            6/22 社員向け資産形成セミナーを
            <br />
            行いました
          </h5>

          <div
            className={`${styles.top_button_icon} ${mobileStyles.top_button_icon}`}
          >
            {" "}
            <div class="material-symbols-outlined">chevron_right</div>
          </div>
        </div>
      </Link>
      <Link href={"/blog"}>
        <div className={`${styles.top_button2} ${mobileStyles.top_button2}`}>
          <span className={styles.top_button_span}>
            {/* 
            //5月デコ
            <img
              className={`${styles.top_koinobori} ${mobileStyles.top_koinobori}`}
              src="/images/new2024/May/koinobori.png"
              alt="koinobori"
            />{" "} */}
          </span>
          <h5>新入社員インタビュー掲載中！</h5>
          <div
            className={`${styles.top_button_icon} ${mobileStyles.top_button_icon}`}
          >
            {" "}
            <div class="material-symbols-outlined">chevron_right</div>
          </div>
        </div>
      </Link>
      <div
        className={`${styles.joblist_wrapper} ${mobileStyles.joblist_wrapper}`}
      >
        <ul className={`${styles.joblist} ${mobileStyles.joblist}`}>
          <li>
            <div className={`${styles.job_box} ${mobileStyles.job_box}`}>
              <img
                className={`${styles.job_images} ${mobileStyles.job_images}`}
                src="/images/new2024/job/webdev.png"
                alt="web"
              />
              <div className={styles.job_name}>
                <h6>WEB/ソフトウェア</h6>
              </div>
            </div>
          </li>

          <li>
            <div className={`${styles.job_box} ${mobileStyles.job_box}`}>
              <img
                className={`${styles.job_images} ${mobileStyles.job_images}`}
                src="/images/new2024/job/idoutai.png"
                alt="web"
              />
              <div className={styles.job_name}>
                <h6>移動体通信</h6>
              </div>
            </div>
          </li>

          <li>
            <div className={`${styles.job_box} ${mobileStyles.job_box}`}>
              <img
                className={`${styles.job_images} ${mobileStyles.job_images}`}
                src="/images/new2024/job/kensetsu.png"
                alt="web"
              />
              <div className={styles.job_name}>
                <h6>建築</h6>
              </div>
            </div>
          </li>

          <li>
            <div
              className={`${styles.job_box} ${mobileStyles.job_box_disable}`}
            >
              <img
                className={`${styles.job_images} ${mobileStyles.job_images}`}
                src="/images/new2024/job/handoutai.png"
                alt="web"
              />
              <div className={styles.job_name}>
                <h6>半導体</h6>
              </div>
            </div>
          </li>

          <li>
            <div
              className={`${styles.job_box} ${mobileStyles.job_box_disable}`}
            >
              <img
                className={`${styles.job_images} ${mobileStyles.job_images}`}
                src="/images/new2024/job/drone.png"
                alt="web"
              />
              <div className={styles.job_name}>
                <h6>ドローン</h6>
              </div>
            </div>
          </li>

          <li>
            <div
              className={`${styles.job_box} ${mobileStyles.job_box_disable}`}
            >
              <img
                className={`${styles.job_images} ${mobileStyles.job_images}`}
                src="/images/new2024/job/server.png"
                alt="web"
              />
              <div className={styles.job_name}>
                <h6>サーバー管理</h6>
              </div>
            </div>
          </li>

          <li>
            <div
              className={`${styles.job_box} ${mobileStyles.job_box_disable}`}
            >
              <img
                className={`${styles.job_images} ${mobileStyles.job_images}`}
                src="/images/new2024/job/helpdesk.png"
                alt="web"
              />
              <div className={styles.job_name}>
                <h6>ヘルプデスク</h6>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
