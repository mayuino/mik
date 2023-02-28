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
import { Content_Saiyou } from "@/components/Content/saiyou";

const inter = Inter({ subsets: ["latin"] });

export default function Saiyou() {
  return (
    <>
      <Head>
        <title>株式会社MIK</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
        <Content_Saiyou/>
      <Footer />
    </>
  );
}
