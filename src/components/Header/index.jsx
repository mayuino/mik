import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { Header_MenuBar } from '../Header_Menu'
import mobileStyles from '@/styles/mobile.module.css'
import { useEffect, useState } from 'react'
import HamburgerMenu from '../hamburger_menu'

export const Header = () => {
  const [isPhone, setIsPhone] = useState(false);

  useEffect(() => {
    const handleResize = ( ) => {
      setIsPhone(window.innerWidth <= 600);
    };
    handleResize();
    window.addEventListener('resize',handleResize);
    return () => window.removeEventListener('resize', handleResize);
  },[])
  return(
    <header className={`${styles.header} ${mobileStyles.header}`}>
    <Link href={"/"}>
    <Image
              src="/mik_logo_black.svg"
              alt="mik title Logo"
              width={250}
              height={108}
      /></Link>
      {isPhone ?( <div className={mobileStyles.header_menu}><HamburgerMenu/></div>): 
      <Header_MenuBar/>}
    </header>
  )
}
