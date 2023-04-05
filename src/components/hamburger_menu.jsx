import Gaiyou from '@/pages/gaiyou';
import Link from 'next/link';
import React, { useState } from 'react';
import { fallDown as Menu } from 'react-burger-menu';
import { AiOutlineMenu } from 'react-icons/ai';
import mobileStyles from "@/styles/mobile.module.css";
import "@/styles/mobile.module.css";


const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsOpen(!isOpen);
  };

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
      borderRadius:'3%',
      border:'3px solid #ddd'
      

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
       <ul>
      <li className={mobileStyles.ham_menu_item}><Link href={"/gaiyou"}>会社概要</Link></li>
      <li className={mobileStyles.ham_menu_item}><Link href={"/rinen"}>経営理念</Link></li>
      <li className={mobileStyles.ham_menu_item}><Link href={"/panflet"}>会社資料</Link></li>
      <li className={mobileStyles.ham_menu_item}><Link href={"/range"}>事業領域</Link></li>
      <li className={mobileStyles.ham_menu_item}><Link href={"/recruit"}>採用情報</Link></li>
      <li className={mobileStyles.ham_menu_item}><Link href={"/contact"}>お問い合わせ</Link></li>
    </ul>
      </Menu>
    </>
  );
};

export default HamburgerMenu;
