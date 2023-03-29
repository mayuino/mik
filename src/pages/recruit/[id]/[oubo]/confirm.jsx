import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { Footer } from "@/components/Footer";
import HeadElement from "@/components/Head";
import { useRouter } from "next/router";
import { Content_Inputdata } from "@/components/Content/input_data";
import { SecondHeader } from "@/components/SecondHeader";

const inter = Inter({ subsets: ["latin"] });

export default function Recruit_Application() {
  const router = useRouter();
  return (
<>
   
      <HeadElement title="送信内容確認" />
      <SecondHeader />
       <Content_Inputdata />
      <Footer />
      </>
  );
}
