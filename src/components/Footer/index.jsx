import styles from '@/styles/Home.module.css'
import Image from 'next/image'

export const Footer = () => {
  return(
  
     
     <footer className={styles.footer}>
      <div className={styles.footer_top}>
      <p>Created by MIK /©︎MIK,inc 2023</p>
      </div>
     <div className={styles.footer_content}>
      <div>
      <ul  className={styles.footer_menu}>
        <li>会社情報</li>
        <li>経営理念</li>
        <li>採用情報</li>
        <li>プライバシーポリシー</li>
      </ul>
      </div>

      <div className={styles.company_data}>
        <div className={styles.mik_name}>
        <h4>株式会社</h4>
        <h1>MIK</h1>
          </div>
          
          <div className={styles.syozaichi}>
           <p>〒001-0014</p>
           <p>北海道札幌市北区北14条西3丁目2-21
          小池ビル2F</p>
          <p>TEL 011-299-7361</p>
          </div>
        </div>
        </div>
    </footer>
 
  )
}