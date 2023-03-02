import styles from '@/styles/Home.module.css'
import Image from 'next/image'

export const Content_Inquiry = () =>{
  return(
    <div className={styles.content_inquiry}>
      <div className={styles.inquiry_title}>
        <h1>お問合せ</h1>
        <p>弊社につきまして、確認されたいことがございましたら、本フォームにご記入いただき、送信ボタンをクリックしてください。追って担当者よりご連絡をさせていただきます。</p>
      </div>
      <div className={styles.inquiry_form}>
      <h2>問い合わせフォーム</h2>
      <h4>お名前</h4>
     <input type="text"/>
     <h4>連絡先メールアドレス</h4>
     <input type="text"/>
     <h4>お問い合わせの種類</h4>
     <label>
     <input type="radio" name="お問い合わせの種類"/>
     <span>弊社の事業について</span>
     <input type="radio" name="お問い合わせの種類"/>
     <span>弊社の制度について</span>
     <input type="radio" name="お問い合わせの種類"/>
     <span>採用について</span>
     <input type="radio" name="お問い合わせの種類"/>
     <span>その他</span>
     </label>
     <h4>お問合せ内容</h4>
     <textarea className={styles.inquiry_textarea} name="お問合せ内容"/>
     <button>送信</button>
     </div>
           </div>

  )
}