import styles from '@/styles/Home.module.css'
import Image from 'next/image'

export const Content_Rinen = () =>{
  return(
    <div className={styles.content_gaiyou}>
      <div className={styles.gaiyou_title}>
        <h1>経営理念</h1>
      </div>
      <p>株式会社MIKの『M』は「モチベーション」のM、『I』は、「イノベーション」のI、『K』は「鍵（KEY）」のK からなる造語です。<br/>MIKという社名には、「自身のキャリアにとって重要な鍵となる要素に向かって、やる気を持って臨み、革新的に取り組んでいく」という意味が込められています。<br/>会社の経営陣・社員一同がこの視点を持って社内外の課題解決に向けて取り組める組織を心がけています。</p> 
      </div>

  )
}