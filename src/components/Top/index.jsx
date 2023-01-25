import styles from '@/styles/Home.module.css'
import Image from 'next/image'


export const Top = () => {
  return(
    <>
      <div className={styles.main_window_back}>
        <Image
            src="/main_window1.svg"
            alt="main title window naritai"
            width={1330}
            height={570}
            className={styles.slider_item}
                    
        />
        <Image
            src="/main_window2.svg"
            alt="main title window naritai"
            width={1330}
            height={570}
            className={styles.slider_item}
        />
        <Image
            src="/main_window3.svg"
            alt="main title window naritai"
            width={1330}
            height={570}
            className={styles.slider_item}
        />
        <Image
            src="/main_window4.svg"
            alt="main title window naritai"
            width={1330}
            height={570}
            className={styles.slider_item}
          />
      </div>

      <div className={styles.main_notice_bottun_back}>
        <div className={styles.notice}>
          <h4>MIKからのお知らせ</h4>
          <ul>
            <li>2023年3月8日　新卒採用説明会開催決定。</li>
            <li>2023年2月16日　新卒採用情報（札幌）をアップしました。</li>
          </ul>
        </div>
      <div className={styles.buttons}>
        <div className={styles.notice_button}>
          <h3>会社資料ダウンロード</h3>
        </div>
        <div className={styles.saiyou_button}>
          <h2>エンジニア採用情報</h2>
        </div>
      </div>
     </div>
</>
  )
}

