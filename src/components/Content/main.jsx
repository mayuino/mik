import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Content_Ex_LINE } from "./ex_LINE";
import mobileStyles from '@/styles/mobile.module.css'

export const ContentMain = () => {
  const router = useRouter();
  const handleJobClick = () =>{
    router.push("/recruit")
  }
  const handleContactClick = () =>{
    router.push("/inquiry")
  }

  return (
    <>
      <div className={`${styles.main1} ${mobileStyles.main1}`}>
        <div className={`${styles.main_right} ${mobileStyles.main_right}`}>
          <button onClick={handleJobClick} className={`${styles.job_page_button} ${mobileStyles.job_page_button}`}>シゴトを探す</button>
        </div>
        <div className={`${styles.main_left} ${mobileStyles.main_left}`}><p>MIKは、あなたのライフスタイルも含めたキャリアをサポート。<br/>仕事を見つけるだけが私たちの仕事ではありません。</p></div>
      </div>
      <div className={`${styles.main2} ${mobileStyles.main2}`}>
        <div className={`${styles.main_right} ${mobileStyles.main_right}`}>
          <button onClick={handleContactClick} className={`${styles.job_page_button} ${mobileStyles.job_page_button}`}>MIKに相談する</button>
        </div>
        <div className={`${styles.main_left} ${mobileStyles.main_left}`}><p>MIKなら未経験スタート率が44％。<br/>多くの方が未経験から始めています。<br/>あれこれ悩む前に、まずは相談してみましょう。</p></div>
      </div>
    </>
  );
};
