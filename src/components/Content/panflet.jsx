import styles from "@/styles/Home.module.css";
import Image from "next/image";
import mobileStyles from "@/styles/mobile.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";

export const Content_Panflet = () => {
  return (
    <div
      className={`${styles.content_panflet} ${mobileStyles.content_panflet}`}
    >
      <div className={`${styles.panflet_title} ${mobileStyles.panflet_title}`}>
        <h1>会社資料</h1>
      </div>

      <div className={`${styles.panflet} ${mobileStyles.panflet}`}>
        <div
          className={`${styles.panflet_content_title} ${mobileStyles.panflet_content_title}`}
        >
          <h2>株式会社MIK会社紹介パンフレット</h2>
        </div>
        <div
          className={`${styles.panflet_content} ${mobileStyles.panflet_content}`}
        >
          <Image
            src="/panf_hyoushi.jpg"
            alt="engineer_first"
            width={300}
            height={400}
            className={`${styles.panflet_image} ${mobileStyles.panflet_image}`}
          />
          <div
            className={`${styles.panflet_content_discription} ${mobileStyles.panflet_content_discription}`}
          >
            <p>
              株式会社MIKの制度やサービスなどもっと詳しく知りたい方は、
              こちらのパンフレットをご覧ください。
            </p>
            <Link
              className={`${styles.download_button} ${mobileStyles.download_button}`}
              href="/pdfs/mik_panflet.pdf"
              download
            >
              ダウンロード
            </Link>
          </div>
        </div>
      </div>

      <div className={`${styles.panflet} ${mobileStyles.panflet}`}>
        <div
          className={`${styles.panflet_content_title} ${mobileStyles.panflet_content_title}`}
        >
          <h2>株式会社MIK会社概要</h2>
        </div>
        <div
          className={`${styles.panflet_content} ${mobileStyles.panflet_content}`}
        >
          <Image
            src="/annai.jpg"
            alt="engineer_first"
            width={300}
            height={400}
            className={`${styles.panflet_image} ${mobileStyles.panflet_image}`}
          />
          <div
            className={`${styles.panflet_content_discription} ${mobileStyles.panflet_content_discription}`}
          >
            <p>
              株式会社MIKの事業領域等は、 こちらのパンフレットをご覧ください。
            </p>
            <Link
              className={`${styles.download_button} ${mobileStyles.download_button}`}
              href="pdfs/mik_annai.pdf"
            >
              ダウンロード
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
