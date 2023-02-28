import styles from '@/styles/Home.module.css'
import Image from 'next/image'

export const Content_SNS = () => {
  return(

<>
     
    <div className={styles.twitter_frame}  >
    <div className={styles.twitter_title}>
    <h2>MIK公式twitterアカウント</h2>
    </div>
        <div className={styles.twitter}>
        <div className={styles.twitter_content}>
             <a class="twitter-timeline" href="https://twitter.com/MIK84267256?ref_src=twsrc%5Etfw"></a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          </div>   
      <div className={styles.twitter_tags}>
        <h5>＃株式会社MIK</h5>
        <h5>＃育てるキャリア</h5><br/>
        <p>MIKのキャンペーン情報や、エンジニアになりたい方、エンジニアのキャリアを再考したい方へのヒントをつぶやいています。</p>
        </div>
        </div>
        </div> 
   
      </>
  )
}
