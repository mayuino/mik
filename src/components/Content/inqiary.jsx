import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import { useState } from 'react';
import emailjs from "@emailjs/browser";



export const Content_Inquiry = () =>{

//環境変数の取得方法がわからないため、置いておく。
  // const serviceID = process.env.REACT_APP_SERVICE_ID;
  // const templateID = process.env.REACT_APP_TEMPLATE_ID;
  // const public_key = process.env.REACT_APP_PUBLIC_KEY;

  // console.log({serviceID});
  
  const [name, setName] = useState('');
  const [mail,setMail] = useState('');
  const [post_content,setPostContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.init("xrcF5cpdui-OQMKFc");
 
    const templateParams = {
      to_name: name,
      mail:mail,
      message: post_content,
    };

     emailjs.send("service_uiwu73k", "template_xenxnsl", templateParams, "xrcF5cpdui-OQMKFc")
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
      },(err) => {
        console.log('FAILED...',err);
      });
    }     

  return(
    <div className={styles.content_inquiry}>
      <div className={styles.inquiry_title}>
        <h1>お問合せ</h1>
        <p>弊社につきまして、確認されたいことがございましたら、本フォームにご記入いただき、送信ボタンをクリックしてください。追って担当者よりご連絡をさせていただきます。</p>
      </div>
      <form onSubmit={handleSubmit}>
      <div className={styles.inquiry_form}>
      <h2>問い合わせフォーム</h2>
      <div  className={styles.inquiry_input}>
      <div className={styles.inquiry_input_name}>
      <label htmlFor="nameInput">お名前</label>
      <input value={name} 
      onChange={(e) => setName(e.target.value)}
      type="text" id="nameInput"/>
     </div>
     <div className={styles.inquiry_input_mail}>
     <label htmlFor="mailInput">ご連絡先メールアドレス</label>
     <input value={mail} 
     onChange={(e) => setMail(e.target.value)}
     type="text" id="mailInput"/>
     </div>
     </div>
     
     <h4>お問合せ内容</h4>
     <textarea 
     className={styles.inquiry_textarea} 
     name="postContent"
     value={post_content}
     onChange={(e) => setPostContent(e.target.value)}
      rows={10}
       cols={100}
       placeholder="お問い合わせ内容を入力してください。"/>
     <button type="submit">送信</button>
     </div>
     </form>
    
    </div>

  )
}