import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { Header } from "@/components/Header";
import { Top } from "@/components/Top";
import { MenuBar } from "@/components/MenuBar";
import { Footer } from "@/components/Footer";
import HeadElement from "@/components/Head";
import { Content_BLOG } from "@/components/Content/blog";
import { SecondHeader } from "@/components/SecondHeader";

export default function BLOG() {
  return (
    <>
      <HeadElement title="MIKのSNS" />

      <SecondHeader />
      <Content_BLOG />
      <Footer />
    </>
  );
}
