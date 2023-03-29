import { Header } from "@/components/Header";
import { Top } from "@/components/Top";
import { MenuBar } from "@/components/MenuBar";
import { Footer } from "@/components/Footer";
import {Content_Different } from "@/components/Content/different";
import HeadElement from "@/components/Head";

export default function Different() {
  return (
    <>
      <HeadElement title="従来の派遣会社との違い"/>

        <Top />

        <Content_Different/>
      <Footer />
    </>
  );
}
