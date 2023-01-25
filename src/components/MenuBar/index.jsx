import styles from '@/styles/Home.module.css'
import Link from 'next/link'

export const MenuBar = () => {
  return(
    <div className={styles.menu_bar}>
    <ul>
      <li className={styles.menu_tab}><Link href={"/people"}>MIKの人々</Link></li>
      <li className={styles.menu_tab}><Link href={"/charge_up"}>収入アップ実績</Link></li>
      <li className={styles.menu_tab}><Link href={"/consulting"}>キャリアコンサル</Link></li>
      <li className={styles.menu_tab}><Link href={"/client"}>派遣先企業</Link></li>
      <li className={styles.menu_tab}><Link href={"/flow"}>採用までの流れ</Link></li>
    </ul>

    </div>
  )
}
