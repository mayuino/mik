import styles from '@/styles/Home.module.css'
import mobileStyles from "@/styles/mobile.module.css";
import Link from 'next/link'
import { useState } from 'react';

export const Header_MenuBar = () => {
  const [isHoveredTab1, setIsHoveredTab1] = useState(false);
  const [isHoveredTab2, setIsHoveredTab2] = useState(false);
  const [isHoveredTab3, setIsHoveredTab3] = useState(false);
  const [isHoveredTab4, setIsHoveredTab4] = useState(false);

  
  
  const handleHoverTab1 = () =>{
    setIsHoveredTab1(!isHoveredTab1);
  }
  const handleHoverTab2 = () =>{
    setIsHoveredTab2(!isHoveredTab2);
  }
  const handleHoverTab3 = () =>{
    setIsHoveredTab3(!isHoveredTab3);
  }
  const handleHoverTab4 = () =>{
    setIsHoveredTab4(!isHoveredTab4);
  }


  return(
    <nav className={`${styles.single_menu_bar} ${mobileStyles.single_menu_bar}`}>
      <div></div>
    <ul className={`${styles.single_menu_bar_items} ${mobileStyles.single_menu_bar_items}`}>
      <li onMouseEnter={handleHoverTab1} onMouseLeave={handleHoverTab1} className={styles.single_menu_tab}>
        <Link href={"/gaiyou"}>会社概要</Link>{isHoveredTab1 && (
          <ul className={`${styles.sub_menu} ${mobileStyles.sub_menu}`}>
                <li className={`${styles.sub_menu_item} ${mobileStyles.sub_menu_item}`}><Link href={"/rinen"}>経営理念</Link></li>
                <li className={`${styles.sub_menu_item} ${mobileStyles.sub_menu_item}`}><Link href={"/panflet"}>会社資料</Link></li>
                <li className={`${styles.sub_menu_item} ${mobileStyles.sub_menu_item}`}><Link href={"/range"}>事業領域</Link></li>
        </ul>
      )}</li>
      <li　onMouseEnter={handleHoverTab2} onMouseLeave={handleHoverTab2} className={styles.single_menu_tab}>
        MIKについて
      {isHoveredTab2 && (
        <ul className={`${styles.sub_menu} ${mobileStyles.sub_menu}`}>
      
        <li className={`${styles.sub_menu_item} ${mobileStyles.sub_menu_item}`}><Link href={"/system"}>社内制度</Link></li>
        <li className={`${styles.sub_menu_item} ${mobileStyles.sub_menu_item}`}><Link href={"/constitution"}>MIKの構成</Link></li>
        <li className={`${styles.sub_menu_item} ${mobileStyles.sub_menu_item}`}><Link href={"/people"}>MIKの人々</Link></li>
        <li className={`${styles.sub_menu_item} ${mobileStyles.sub_menu_item}`}><Link href={"/gyoumu"}>配属先と業務</Link></li>
        <li className={`${styles.sub_menu_item} ${mobileStyles.sub_menu_item}`}><Link href={"/charge_up"}>収入アップ実績</Link></li>
        {/* <li className={styles.sub_menu_item}><Link href={"/different"}>他の派遣会社との違い</Link></li> */}
       
        </ul>
        )}</li>
      {/* <li className={styles.single_menu_tab}><Link href={"/recruit"}>採用情報</Link></li> */}
  
      <li className={`${styles.single_menu_tab} ${mobileStyles.single_menu_tab}`}><Link href={"/blog"}>ブログ</Link></li>
      <li className={`${styles.single_menu_tab} ${mobileStyles.single_menu_tab}`}><Link href={"/contact"}>お問い合わせ</Link></li>
    </ul>

    </nav>
  )
}
