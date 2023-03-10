import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { Header } from "@/components/Header";
import { Top } from "@/components/Top";
import { MenuBar } from "@/components/MenuBar";
import { ContentMain } from "@/components/Content/main";
import { SNS } from "@/components/Content/sns";
import { Footer } from "@/components/Footer";
import { ContentPeople } from "@/components/Content/people";
import Link from "next/link";
import { useState } from "react";
import { Content_Ex_LINE } from "@/components/Content/ex_LINE";
import HeadElement from "@/components/Head";

const inter = Inter({ subsets: ["latin"] });

export default function MainPage() {
  

  return (
      <>
    <HeadElement title="株式会社MIK"/>
      <Header />
        <Top />
        <MenuBar />
        <ContentMain/>
        <Content_Ex_LINE/>
      <Footer />
      </>
  );
}
