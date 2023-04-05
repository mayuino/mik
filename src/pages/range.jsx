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
import HeadElement from "@/components/Head";
import { SecondHeader } from "@/components/SecondHeader";

const inter = Inter({ subsets: ["latin"] });

export default function Range() {
  return (
    <>
      <HeadElement title="MIKの事業領域" />

      <SecondHeader />
      <Content_Range />
      <Footer />
    </>
  );
}
