import styles from '@/styles/Home.module.css'
import Image from 'next/image'

export const Content_Ex_LINE = () => {
  return(

<>
     <div  className={styles.line_frame}>
      <div  className={styles.line}>
        
      <div  className={styles.line_title}>
        <h2>MIK公式エンジニア採用LINEアカウント</h2>
        </div>
        <div className={styles.line_content}>
          <Image
              src="/LINE_Brand_icon.svg"
              alt="line icon"
              width={180}
              height={180}
              className={styles.line_icon}
            />
            <div className={styles.line_paragrah}>
              <h4>MIKのキャンペーンや、採用情報も<br/>
              お友達限定で公開しています！</h4>
              <p>※社内LINEとは異なる別のアカウントです。
                MIK社員の方はご注意ください。
              </p>
            </div>
        
            <Image
              src="/LINE_QR.svg"
              alt="line QR code"
              width={180}
              height={180}
              className={styles.line_QR}
            />
          </div>
          </div>
      </div> 
   
      </>
  )
}
