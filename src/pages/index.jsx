import HeadElement from "@/components/Head";

import { Header } from "@/components/Header";
import { Top } from "@/components/Top";
import { Footer } from "@/components/Footer";



export default function Home() {

  return (
    <>
      <HeadElement title="株式会社MIK" />
      <Header />
      <Top />
      <Footer />
    </>
  );
}
