import styles from '@/styles/Home.module.css'
import Link from 'next/link'

export const Header_MenuBar = () => {
  return(
    <div className={styles.single_menu_bar}>
    <ul>
      <li className={styles.single_menu_tab}><Link href={"/gaiyou"}>会社概要</Link></li>
      <li className={styles.single_menu_tab}><Link href={"/rinen"}>経営理念</Link></li>
      <li className={styles.single_menu_tab}><Link href={"/panflet"}>会社資料</Link></li>
      <li className={styles.single_menu_tab}><Link href={"/range"}>事業範囲</Link></li>
      <li className={styles.single_menu_tab}><Link href={"/saiyou"}>採用情報</Link></li>
      <li className={styles.single_menu_tab}><Link href={"/qa"}>お問い合わせ</Link></li>
    </ul>

    </div>
  )
}
