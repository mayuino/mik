import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { Header_MenuBar } from '../Header_Menu'

export const Header = () => {
  return(
    <header className={styles.header}>
    <Link href={"/"}>
    <Image
              src="/mik_title.svg"
              alt="mik title Logo"
              width={250}
              height={108}
      /></Link>
      <Header_MenuBar/>
    </header>
  )
}
