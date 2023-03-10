import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Content_Recruit_Detail } from "@/components/Content/recruit_detail";
import HeadElement from "@/components/Head";

export default function Recruit() {
  return (
    <>
     <HeadElement title="採用情報"/>
      <Header />
      <Content_Recruit_Detail/>
      <Footer />
    </>
  );
}
