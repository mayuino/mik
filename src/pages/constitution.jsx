import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { Header } from "@/components/Header";
import { Top } from "@/components/Top";
import { MenuBar } from "@/components/MenuBar";
import { SNS } from "@/components/Content/sns";
import { Footer } from "@/components/Footer";
import { ContentClient } from "@/components/Content/gaiyou";
import { ContentConstitution } from "@/components/Content/constitution";
import HeadElement from "@/components/Head";

const inter = Inter({ subsets: ["latin"] });

export default function Client() {
  return (
    <>
     <HeadElement title="MIKの構成"/>

      <Header />
      <main className={styles.main}>
        <Top />
        <MenuBar />
        <ContentConstitution />
      </main>
      <Footer />
    </>
  );
}
