import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Content_Recruit_Detail } from "@/components/Content/recruit_detail";
import HeadElement from "@/components/Head";
import { Router, useRouter } from "next/router";

export default function Recruit() {
  const router = useRouter();
  console.log(router.query.id);

  return (
    <>
      <HeadElement title="採用情報" />
      <Header />
      <Content_Recruit_Detail id = {router.query.id}/>
      <Footer />
    </>
  );
}
