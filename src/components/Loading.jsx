import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";

const Loading = () => {

const [load, setLoad] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => {
    setLoad(false);
  },6000);

  return () => clearTimeout(timer);
},[])

  return (
    <div>
      {load ? (<div className={styles.loading}>
  
<img className={styles.loading_logo} src="/images/new2024/logo/white.svg" alt="logo"/>
</div>) : null}


</div>
  )};

  export default Loading;