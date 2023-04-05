import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Content_Inquiry } from "@/components/Content/inqiary";
import HeadElement from "@/components/Head";
import { SecondHeader } from "@/components/SecondHeader";
import { Content_Contact } from "@/components/Content/contact";

export default function Inquiry() {
  return (
    <>
  <HeadElement title="お問い合わせ"/>

      <SecondHeader />
      <Content_Contact />
      <Footer />
    </>
  );
}
