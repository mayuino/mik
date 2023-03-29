import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import { TwitterTweetEmbed } from 'react-twitter-embed'
import mobileStyles from "@/styles/mobile.module.css";

export const Content_BLOG = (props) => {
  console.log(props)
  
  return(


     
    <div className={`${styles.twitter_frame} ${mobileStyles.twitter_frame}`}>
    <div className={`${styles.twitter_title} ${mobileStyles.twitter_title}`}>
    <h2>coming soon</h2>
 
        </div>
      
        </div>

   
  
  )
}
