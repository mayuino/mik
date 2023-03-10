
import { Header } from "@/components/Header";
import { Top } from "@/components/Top";
import { MenuBar } from "@/components/MenuBar";
import { Footer } from "@/components/Footer";
import { ContentFlow } from "@/components/Content/flow";
import HeadElement from "@/components/Head";

export default function Flow() {
  return (
    <>
    <HeadElement title="採用までの流れ"/>

      <Header />
        <Top />
        <MenuBar />
        <ContentFlow />
      <Footer />
    </>
  );
}
