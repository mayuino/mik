import Gaiyou from '@/pages/gaiyou';
import Link from 'next/link';
import React, { useState } from 'react';
import { fallDown as Menu } from 'react-burger-menu';
import { AiOutlineMenu } from 'react-icons/ai';
import mobileStyles from "@/styles/mobile.module.css";


const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsOpen(!isOpen);
  };

  const [isHoveredTab1, setIsHoveredTab1] = useState(false);
  const [isHoveredTab2, setIsHoveredTab2] = useState(false);

  const handleHoverTab1 = () =>{
    setIsHoveredTab1(!isHoveredTab1);
  }
  const handleHoverTab2 = () =>{
    setIsHoveredTab2(!isHoveredTab2);
  }

  const  styles  =  { 
    bmBurgerButton : { 
      position : 'fixed' , 
      width : '36px' , 
      height : '50px' , 
      left : '36px' , 
      top : '36px' ,
      display:'none',
     
    } , 
    bmBurgerBars : { 
      background : '#FFF' 
    } , 
    bmBurgerBarsHover : {
      background: '#FFF' 
    } , 
    bmCrossButton : {
      height:'24px' , 
      width : '24px' 
    } , 
    bmCross : { 
      background : '#bdc3c7' 
    } , 
    bmMenuWrap : { 
      position : 'fixed' , 
      height : '100%' 
    } , 
    bmMenu : { 
   
      background : 'rgba(255, 255, 255, 0.9)' ,
      padding: '8px' , 
      fontSize : '1.15em' ,
      height: 'auto',
      borderRadius:'5px',
      border:'1px solid #576066',
      overflow:'visible',
      

    } , 
    bmMorphShape : {
      fill: 'rgba(0, 0, 0, 0.3)'
    }, 
    bmItemList : { 
      color : '#b8b7ad' , 
      padding : '10px', 
      } , 
    bmItem : { 
      display : 'inline-block', 
       } , 
    bmOverlay : { 
      background : 'rgba(0, 0, 0, 0.0)' 
    } 
  }

  return (
    <>
      <AiOutlineMenu size={40} onClick={handleMenuOpen} />
      <Menu isOpen={isOpen} right width={"34%"} styles={styles}>
      <ul className={mobileStyles.ham_menu_list} >
      <li onMouseEnter={handleHoverTab1} onMouseLeave={handleHoverTab1} className={mobileStyles.ham_menu_item}>
        <Link href={"/gaiyou"}>会社概要</Link>{isHoveredTab1 && (
          <ul className={mobileStyles.sub_menu}>
                <li className={`${styles.sub_menu_item} ${mobileStyles.sub_menu_item}`}><Link href={"/rinen"}>経営理念</Link></li>
                <li className={`${styles.sub_menu_item} ${mobileStyles.sub_menu_item}`}><Link href={"/panflet"}>会社資料</Link></li>
                <li className={`${styles.sub_menu_item} ${mobileStyles.sub_menu_item}`}><Link href={"/range"}>事業領域</Link></li>
        </ul>
      )}</li>
      <li　onMouseEnter={handleHoverTab2} onMouseLeave={handleHoverTab2} className={mobileStyles.ham_menu_item}>
        MIKについて
      {isHoveredTab2 && (
        <ul className={`${styles.sub_menu} ${mobileStyles.sub_menu}`}>
      
        <li className={`${styles.sub_menu_item} ${mobileStyles.sub_menu_item}`}><Link href={"/system"}>社内制度</Link></li>
        {/* <li className={`${styles.sub_menu_item} ${mobileStyles.sub_menu_item}`}><Link href={"/constitution"}>MIKの構成</Link></li> */}
        <li className={`${styles.sub_menu_item} ${mobileStyles.sub_menu_item}`}><Link href={"/people"}>MIKの人々</Link></li>
        {/* <li className={`${styles.sub_menu_item} ${mobileStyles.sub_menu_item}`}><Link href={"/gyoumu"}>配属先と業務</Link></li> */}
        <li className={`${styles.sub_menu_item} ${mobileStyles.sub_menu_item}`}><Link href={"/charge_up"}>収入アップ実績</Link></li>
        {/* <li className={styles.sub_menu_item}><Link href={"/different"}>他の派遣会社との違い</Link></li> */}
       
        </ul>
        )}</li>
      {/* <li className={styles.single_menu_tab}><Link href={"/recruit"}>採用情報</Link></li> */}
  
      <li className={mobileStyles.ham_menu_item}><Link href={"/blog"}>ブログ</Link></li>
      <li className={mobileStyles.ham_menu_item}><Link href={"/contact"}>お問い合わせ</Link></li>
    </ul>
      </Menu>
    </>
  );
};

export default HamburgerMenu;
