import HeadElement from "@/components/Head";

import { Header } from "@/components/Header";
import { Top } from "@/components/Top";
import { Footer } from "@/components/Footer";
import Loading from "@/components/Loading";



export default function Home() {

  return (
    <>
      <HeadElement title="株式会社MIK" />
      <Loading/>
      <Header />
      <Top />
      <Footer />
    </>
  );
}
