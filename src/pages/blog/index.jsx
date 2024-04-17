
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import HeadElement from "@/components/Head";
import mobileStyles from "@/styles/mobile.module.css";

import { client } from "libs/client";
import Link from "next/link";

import styles from "@/styles/Home.module.css";




const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}年${month}月${day}日`;
};

export const getStaticProps = async() => {
 
  const response = await client.get({endpoint: "blogs"})

  return{
    props:{
      blogs:response.contents
    }
  };

};
export default function BLOG({blogs}) {
  return (
    <>
      <HeadElement title="MIKのブログ" />

      <Header />
      <div className={`${styles.blog} ${mobileStyles.blog}`}>
<div className={`${styles.blog_title} ${mobileStyles.blog_title}`}>
<h1>MIKブログ</h1>
<p>直近で入社いただいた方に、お話を聞いてみました。</p>
</div>
<div className={`${styles.blog_list} ${mobileStyles.blog_list}`}>
  {blogs.map((blog) => (
    <li key={blog.id}>
      <Link href={`blog/${blog.id}`}>
      <div className={styles.blog_item}>
      <img className={styles.blog_img} src={blog.eyecatch.url} />
      <div className={styles.blog_item_title}><h3>{blog.title}</h3>
      <div className={styles.blog_date}>{formatDate(blog.publishedAt)}</div>
      </div>
      </div>

      </Link>
    </li>
  ))}
</div>
</div>
      <Footer />
    </>
  );
}
