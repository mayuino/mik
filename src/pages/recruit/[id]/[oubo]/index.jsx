import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { Footer } from "@/components/Footer";
import { Content_Oubo } from "@/components/Content/oubo";
import HeadElement from "@/components/Head";
import { useRouter } from "next/router";
import { RecruitJobCard } from "@/components/Content/recruit_jobcard";
import { SecondHeader } from "@/components/SecondHeader";

const inter = Inter({ subsets: ["latin"] });

export default function Recruit_Application() {
  const router = useRouter();
  return (
<>
   
      <HeadElement title="応募フォーム" />
      <SecondHeader />
   
      <Content_Oubo id={router.query.id}/>
  
      <Footer />
      </>
  );
}
