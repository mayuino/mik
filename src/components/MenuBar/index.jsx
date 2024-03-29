import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import mobileStyles from '@/styles/mobile.module.css'

export const MenuBar = () => {
  return(
    <div className={`${styles.menu_bar} ${mobileStyles.menu_bar}`}>
    <ul>
      <li className={`${styles.menu_tab} ${mobileStyles.menu_tab}`}><Link href={"/start"}>MIKではじめよう</Link></li>
      <li className={`${styles.menu_tab} ${mobileStyles.menu_tab}`}><Link href={"/people"}>MIKの人々</Link></li>
      <li className={`${styles.menu_tab} ${mobileStyles.menu_tab}`}><Link href={"/charge_up"}>収入アップ実績</Link></li>
      <li className={`${styles.menu_tab} ${mobileStyles.menu_tab}`}><Link href={"/different"}>他の派遣会社との違い</Link></li>
      <li className={`${styles.menu_tab} ${mobileStyles.menu_tab}`}><Link href={"/constitution"}>MIKの構成</Link></li>
      <li className={`${styles.menu_tab} ${mobileStyles.menu_tab}`}><Link href={"/flow"}>採用までの流れ</Link></li>
      <li className={`${styles.menu_tab} ${mobileStyles.menu_tab}`}><Link href={"/internal_line"}>社内LINE</Link></li>
      <li className={`${styles.menu_tab} ${mobileStyles.menu_tab}`}><Link href={"/system"}>独自制度</Link></li>
      <li className={`${styles.menu_tab} ${mobileStyles.menu_tab}`}><Link href={"/sns"}>SNS</Link ></li>
      <li className={`${styles.menu_tab} ${mobileStyles.menu_tab}`}><Link href={"/blog"}>ブログ</Link ></li>
     </ul>

    </div>
  )
}
