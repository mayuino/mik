import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { Header } from "../Header";
import { MenuBar } from "../MenuBar";
import mobileStyles from "@/styles/mobile.module.css";
import { useEffect, useState } from "react";

export const Top = () => {
  const [isNotPhone, setIsNotPhone] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsNotPhone(window.innerWidth <= 900);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div
      className={`${styles.top_image_frame} ${mobileStyles.top_image_frame}`}
    >
      <Header />
      {isNotPhone ? (
        <div>
          <Image
        src="/mewomiruhito.png"
        alt="eigyou"
        width={70}
        height={85}
        className={`${styles.female_image} ${mobileStyles.female_image}`}
      />
      </div>
      ) : (
        <Image
          src="/sitting_man.png"
          alt="eigyou"
          width={120}
          height={250}
          className={`${styles.sitting_image} ${mobileStyles.sitting_image}`}
        />
      )}
      <MenuBar />
    </div>
  );
};
