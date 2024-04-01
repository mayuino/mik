import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { Header_MenuBar } from '../Header_Menu'
import mobileStyles from '@/styles/mobile.module.css'
import { useEffect, useState } from 'react'
import HamburgerMenu from '../hamburger_menu'

export const Header = () => {
  // const [isPhone, setIsPhone] = useState(false);

  // useEffect(() => {
  //   const handleResize = ( ) => {
  //     setIsPhone(window.innerWidth <= 600);
  //   };
  //   handleResize();
  //   window.addEventListener('resize',handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // },[])


  return(
    <header className={`${styles.header} ${mobileStyles.header}`}>
    <Link href={"/"}>
    <img className={`${styles.mik_logo} ${mobileStyles.mik_logo}`} src="/mik_logo_black.svg" alt="mik title Logo"/>
</Link>


      <Header_MenuBar/>
      {/* {isPhone ?( <div className={mobileStyles.header_menu}><HamburgerMenu/></div>): 
     <div></div>} */}
    </header>
  )
}
