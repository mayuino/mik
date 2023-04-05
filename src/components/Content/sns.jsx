import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { TwitterTweetEmbed } from "react-twitter-embed";
import mobileStyles from "@/styles/mobile.module.css";

export const Content_SNS = (props) => {
  console.log(props);

  return (
    <>
      <div className={`${styles.twitter_frame} ${mobileStyles.twitter_frame}`}>
        <div
          className={`${styles.twitter_title} ${mobileStyles.twitter_title}`}
        >
          <h1>MIK公式twitterアカウント</h1>
          
            <p>
              MIKのキャンペーン情報や、エンジニアになりたい方、エンジニアのキャリアを再考したい方へのヒントをつぶやいています。
            </p>
            
            
            <h5>＃株式会社MIK</h5>
            <h5>＃育てるキャリア</h5>
            
        </div>
        <div className={`${styles.twitter} ${mobileStyles.twitter}`}>
          <div
            className={`${styles.twitter_content} ${mobileStyles.twitter_content}`}
          >
            <TwitterTweetEmbed tweetId={"1633115952328876033"} />
            <TwitterTweetEmbed tweetId={"1617807023860781057"} />
          </div>
  
        </div>
      </div>
    </>
  );
};
