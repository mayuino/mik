import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { Header } from "@/components/Header";
import { Top } from "@/components/Top";
import { MenuBar } from "@/components/MenuBar";
import { Content_SNS } from "@/components/Content/sns";
import { Footer } from "@/components/Footer";
import { ContentPeople } from "@/components/Content/people";
import { Content_Gaiyou } from "@/components/Content/gaiyou";
import { Content_Rinen } from "@/components/Content/rinen";
import { Content_Range } from "@/components/Content/range";
import { Content_Recruit, Content_Saiyou } from "@/components/Content/recruit";
import { Content_Recruit_Detail } from "@/components/Content/recruit_detail";
import { Content_Oubo } from "@/components/Content/oubo";
import HeadElement from "@/components/Head";

const inter = Inter({ subsets: ["latin"] });

export default function Recruit() {
  return (
    <>
      <HeadElement title="応募フォーム" />

      <Header />
      <Content_Oubo />
      <Footer />
    </>
  );
}
