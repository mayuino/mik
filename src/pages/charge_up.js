import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { Header } from "@/components/Header";
import { Top } from "@/components/Top";
import { MenuBar } from "@/components/MenuBar";
import { SNS } from "@/components/Content/sns";
import { Footer } from "@/components/Footer";
import { ContentChargeUp } from "@/components/Content/charge_up";
import HeadElement from "@/components/Head";

const inter = Inter({ subsets: ["latin"] });

export default function ChargeUp() {
  return (
    <>
    <HeadElement title="エンジニア給与アップ実績"/>
        <Top />
        <ContentChargeUp />

      <Footer />
    </>
  );
}
