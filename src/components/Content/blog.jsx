import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import { TwitterTweetEmbed } from 'react-twitter-embed'

export const Content_BLOG = (props) => {
  console.log(props)
  
  return(

<>
     
    <div className={styles.twitter_frame}>
    <div className={styles.twitter_title}>
    <h2>MIK公式ブログ</h2>
    </div>
        <div className={styles.twitter}>
        <div className={styles.twitter_content}>
          <TwitterTweetEmbed tweetId={"1633115952328876033"}
         />
          <TwitterTweetEmbed tweetId={"1617807023860781057"}
        />
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
