import { Header } from "@/components/Header";
import { Top } from "@/components/Top";
import { MenuBar } from "@/components/MenuBar";
import { Footer } from "@/components/Footer";
import { ContentPeople } from "@/components/Content/people";
import HeadElement from "@/components/Head";


export default function People() {
  return (
    <>
      <HeadElement title="MIKの人々"/>
           <Top />
        <ContentPeople />
      <Footer />
    </>
  );
}
