import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'

export const Header = () => {
  return(
    <header className={styles.header}>
    <Link href={"/"}>
    <Image
              src="/mik_title.svg"
              alt="mik title Logo"
              width={488}
              height={108}
      /></Link>
    </header>
  )
}
