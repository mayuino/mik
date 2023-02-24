import styles from '@/styles/Home.module.css'
import Image from 'next/image'



export const Top = () => {
  return(
        <>
        <div className={styles.top_image_frame}>
          <Image className={styles.top_image} src="/top_job_image.jpg" 
             alt="charge up Y san"
             width={1500}
             height={580}/>
             <div className={styles.top_title_frame}>
             <div className={styles.top_title}>エンジニアの<br/>『なりたい』<br/>を育てる会社</div>
             </div>
             <div className={styles.top_discription_frame}>
          <div className={styles.top_discription}>
            <p>株式会社MIKは、<br/>エンジニアの人生を第一に考える<br/>人材派遣会社です。<br/><br/>
          MIKは、あなたが最も輝ける場所で<br/>幸せに働くために、<br/><br/>あなたが「働きやすい」と感じる<br/>職場との「縁」を結んだり、<br/><br/>
          あなたが「やりがい」を感じられる<br/>待遇の交渉を行ったり、<br/><br/>
          あなたが行きたい方向へ<br/>進むお手伝いをしながら、<br/><br/>
          あなたがなりたいエンジニア<br/>になれるようサポートいたします。</p>
          </div>
          </div>
        </div>
  
</>
  )
}

