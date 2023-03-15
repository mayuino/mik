import { Inter } from "@next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Content_Recruit } from "@/components/Content/recruit";
import HeadElement from "@/components/Head";

const inter = Inter({ subsets: ["latin"] });

export default function Recruit() {
  return (
    <>
      <HeadElement title="採用情報" />

      <Header />
      <Content_Recruit />
      <Footer />
    </>
  );
}
