import styles from '@/styles/Home.module.css'
import Link from 'next/link'

export const MenuBar = () => {
  return(
    <div className={styles.menu_bar}>
    <ul>
      <li className={styles.menu_tab}><Link href={"/people"}>MIKの人々</Link></li>
      <li className={styles.menu_tab}><Link href={"/charge_up"}>収入アップ実績</Link></li>
      <li className={styles.menu_tab}><Link href={"/consulting"}>3つの約束</Link></li>
      <li className={styles.menu_tab}><Link href={"/constitution"}>MIKの構成</Link></li>
      <li className={styles.menu_tab}><Link href={"/flow"}>採用までの流れ</Link></li>
      <li className={styles.menu_tab}><Link href={"/flow"}>SNSの活用</Link></li>
      <li className={styles.menu_tab}><Link href={"/flow"}>社内貢献ポイント</Link></li>
     </ul>

    </div>
  )
}
