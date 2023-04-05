import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { TwitterTweetEmbed } from "react-twitter-embed";
import mobileStyles from "@/styles/mobile.module.css";

export const Content_BLOG = (props) => {
  console.log(props);

  return (
    <div className={`${styles.blog_frame} ${mobileStyles.blog_frame}`}>
      <h2>coming soon</h2>
    </div>
  );
};
