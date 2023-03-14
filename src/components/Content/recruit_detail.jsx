import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export const Content_Recruit_Detail = () =>{


  return(  
  
    <div className={styles.content_recruit_detail}>

    <div className={styles.recruit_detail_title}>
      <h1>■急募■セキュリティソフト更新対応【京都府内】【未経験者大歓迎】</h1>
       <Link href={"/oubo"} className={styles.oubo_button}>応募する</Link>
     </div>
     <div className={styles.detail_content_wrapper}>
      <div className={styles.detail_content}>
      <div className={styles.detail_content_title}>
     <h3>仕事内容</h3>
      </div>
     <p>メーカー内でのヘルプデスクを担当頂きます。</p>

      <h5>【詳細】</h5>
      <p>
      対象端末の利用者と日程調整（電話orメール）
      調整できた日に、アンインストール、インストール
    
      　ウイルスソフトの全社切替があり端末管理のソフトから一斉に、
      　アンインストール・インストールを実施し、
      　そこから漏れた分を個別に対応していただきます。
      　
      また、上記以外も詳細は決まっておりませんが、
      インフラキッティング、ヘルプデスクのお手伝いも致します。

      興味ある方はお気軽にご応募ください！！</p>
      </div>

<div className={styles.detail_content}>
<div className={styles.detail_content_title}>
<h3>応募資格・条件</h3>
</div>
<p>高卒以上/未経験OK</p>
</div>

<div className={styles.detail_content}>
<div className={styles.detail_content_title}>

<h3>募集人数・募集背景</h3>
</div>
<p>２０１４年９月に設立した弊社は２０１９年９月に従来の経営体制を一新し、エンジニアリング事業を主とする会社としてスタートを切りました。
<br/>
・エンジニアとして技術力を向上したい<br/>
・年収をあげたい<br/>
・マネージメントをしたい<br/>
等いろいろな思いを持たれている方はまずはご相談ください！！</p>
</div>

<div className={styles.detail_content}>
      <div className={styles.detail_content_title}>
<h3>勤務地</h3>
</div>
<p>京都府京都市<br/>
◎勤務地ご相談可能です<br/>
※転勤ございません</p>
</div>

<div className={styles.detail_content}>
      <div className={styles.detail_content_title}>
<h3>勤務時間</h3>
</div>
<p>9:00 ～ 18:00<br/>
◎プロジェクトにより異なります</p>
</div>

<div className={styles.detail_content}>
      <div className={styles.detail_content_title}>
<h3>給与</h3>
</div>
<p>年俸　3,000,000円　～　6,000,000円<br/>
◎直近の給与や経験年数を考慮して検討致します</p>
</div>

<div className={styles.detail_content}>
      <div className={styles.detail_content_title}>
<h3>休日休暇</h3>
</div>
<p>完全週休2日制
◇ 年間休日120日以上
祝日・年末年始・GW・年次有給休暇・慶弔休暇あり
◇ 夏季休暇
◇ 年末年始休暇</p>
</div>

<div className={styles.detail_content}>
      <div className={styles.detail_content_title}>
<h3>福利厚生</h3>
</div>
<p>◇ 雇用保険
◇ 労災保険
◇ 厚生年金
◇ 健康保険
◇ 交通費支給あり
◇ 資格取得支援・手当てあり
※住宅手当・社宅については応相談</p>
 </div>
 </div>
 <div className={styles.oubo_button_wrapper}>
      <Link href={"/oubo"}
      className={styles.oubo_button}>応募する</Link>
 </div>
 </div>



  )
}