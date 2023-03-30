import { Footer } from "@/components/Footer";
import { Content_Recruit_Detail } from "@/components/Content/recruit_detail";
import HeadElement from "@/components/Head";
import { Router, useRouter } from "next/router";
import { SecondHeader } from "@/components/SecondHeader";

export default function Recruit() {
  const router = useRouter();
  console.log(router.query.id);

  return (
    <>
      <HeadElement title="採用情報" />
     <SecondHeader/>
      <Content_Recruit_Detail id = {router.query.id}/>
      <Footer />
    </>
  );
}
