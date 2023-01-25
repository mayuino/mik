import styles from '@/styles/Home.module.css'
import Image from 'next/image'

export const Footer = () => {
  return(
    <footer className={styles.footer}>
      <div className={styles.footer_menu}>
      <ul>
        <li>会社情報</li>
        <li>経営理念</li>
        <li>採用情報</li>
        <li>プライバシーポリシ</li>
      </ul>
      </div>

      <div className={styles.company_data}>
        <div className={styles.company_icon}>
        <Image
                src="/company_name.svg"
                alt="MIK icon"
                width={85}
                height={60}
          />
          </div>
          
          <div className={styles.syozaichi}>
          <p>〒001-0014</p>
          <p>北海道札幌市北区北14条西3丁目2-21<br/>
          小池ビル2F</p>
          <p>TEL 011-299-7361</p>
          </div>
        </div>
    </footer>
  )
}