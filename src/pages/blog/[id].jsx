import styles from "@/styles/Home.module.css";
import mobileStyles from "@/styles/mobile.module.css";
import { Header } from "@/components/Header";

import { Footer } from "@/components/Footer";
import HeadElement from "@/components/Head";
import { client } from "libs/client";
import Link from "next/link";

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({
    endpoint: "blogs",
    contentId: id,
    queries: { ids: id },
  });
  console.log("BlogData:", data);

  return {
    props: {
      blog: data,
    },
  };
};

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blogs" });
  console.log("data", data);

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return {
    paths,
    fallback: true,
  };
};

const formatDateTime = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  return `${year}/${month}/${day} ${hour}:${minute}`;
};

export default function BlogId({ blog }) {
  if (!blog) {
    return <div>Loading...</div>; // ローディング中の表示
  }
  return (
    <>
      <HeadElement title="MIKのブログ" />

      <Header />
      <div className={`${styles.blog_detail} ${mobileStyles.blog_detail}`}>
        <div
          className={`${styles.blog_detail_title} ${mobileStyles.blog_detail_title}`}
        >
          <div className={styles.publish_date}>
            {formatDateTime(blog.publishedAt)}
          </div>
          <h1>{blog.title}</h1>
        </div>

        <img
          className={`${styles.blog_detail_img} ${mobileStyles.blog_detail_img}`}
          src={blog.eyecatch.url}
        />
        <div
          className={`${styles.blog_detail_content} ${mobileStyles.blog_detail_content}`}
          dangerouslySetInnerHTML={{ __html: `${blog.content}` }}
        ></div>
        <Link href={"/blog"}>
          <div className={styles.blog_detail_return}>戻る</div>
        </Link>
      </div>
      <Footer />
    </>
  );
}
