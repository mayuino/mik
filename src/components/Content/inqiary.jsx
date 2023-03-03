import styles from '@/styles/Home.module.css'
import Image from 'next/image'

export const Content_Inquiry = () =>{
  return(
    <div className={styles.content_inquiry}>
      <div className={styles.inquiry_title}>
        <h1>お問合せ</h1>
        <p>弊社につきまして、確認されたいことがございましたら、本フォームにご記入いただき、送信ボタンをクリックしてください。追って担当者よりご連絡をさせていただきます。</p>
      </div>
      <form>
      <div className={styles.inquiry_form}>
      <h2>問い合わせフォーム</h2>
      <div  className={styles.inquiry_input}>
      <div className={styles.inquiry_input_name}>
      <h4>お名前</h4>
      <input type="text" id="name"/>
     </div>
     <div className={styles.inquiry_input_mail}>
     <h4>ご連絡先メールアドレス</h4>
     <input type="text" id="mail"/>
     </div>
     </div>
    
   
     
     <h4>お問合せ内容</h4>
     <textarea className={styles.inquiry_textarea} name="お問合せ内容"/>
     <button>送信</button>
     </div>
     </form>
           </div>

  )
}