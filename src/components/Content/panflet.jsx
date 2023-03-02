import styles from '@/styles/Home.module.css'
import Image from 'next/image'

export const Content_Panflet = () =>{
  return(
    <div className={styles.content_panflet}>
      <div className={styles.panflet_title}>
        <h1>会社資料</h1>
      </div>

      <div className={styles.panflet}>
        <div className={styles.panflet_content_title}>
          <h2>株式会社MIK会社紹介パンフレット</h2>
      
        </div>
        <div className={styles.panflet_content}>
        <Image
            src="/panf_hyoushi.jpg"
            alt="engineer_first"
            width={300}
            height={400}
            className={styles.panflet_image}
            />
        <div className={styles.panflet_content_discription}>
          <p>株式会社MIKの制度やサービスなどもっと詳しく知りたい方は、
            こちらのパンフレットをご覧ください。
          </p>
          <button className={styles.download_button}>ダウンロード</button>
         </div>
        
        </div>
      </div>

      <div className={styles.panflet}>
        <div className={styles.panflet_content_title}>
          <h2>株式会社MIK会社概要</h2>
      
        </div>
        <div className={styles.panflet_content}>
        <Image
            src="/annai.jpg"
            alt="engineer_first"
            width={300}
            height={400}
            className={styles.panflet_image}
            />
        <div className={styles.panflet_content_discription}>
          <p>株式会社MIKの事業領域等は、
            こちらのパンフレットをご覧ください。
          </p>
          <button className={styles.download_button}>ダウンロード</button>
         </div>
        
        </div>
      </div>
           
      </div>

  )
}