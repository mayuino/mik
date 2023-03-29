import { Inter } from "@next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Content_Recruit } from "@/components/Content/recruit";
import HeadElement from "@/components/Head";
import { filteredData ,JobDataContext,RecruitSearchBox } from "@/components/Content/recruit_searchbox";
import { RecruitJobCard } from "@/components/Content/recruit_jobcard";
import { useContext } from "react";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Recruit_dummy() {

  const router = useRouter();

  return (
    <>
      <HeadElement title="採用情報" />
      <Header />
      <RecruitSearchBox/>
    
       <RecruitJobCard id={router.query.router}/>
    
      <Footer />
    </>
  );
}
