import styles from '@/styles/Home.module.css'
import Image from 'next/image'

export const Content_Oubo= () =>{
  return(
    <div className={styles.content_oubo}>
       <h1>この求人に応募する</h1>
      <div className={styles.oubo_top_bar}>応募内容</div>
 
      <form className={styles.oubo_form}> 
     
    
      <div className={styles.oubo_input_name}>
      <h4>お名前</h4>
      <input className={styles.oubo_input_text} type="text" id="sei_kanji"/>
      <input className={styles.oubo_input_text} type="text" id="mei_kanji"/>
      <input  className={styles.oubo_input_text}  type="text" id="sei_kana"/>
      <input className={styles.oubo_input_text} type="text" id="mei_kana"/>
     </div>
     <div className={styles.oubo_input_mail}>
     <h4>ご連絡先メールアドレス</h4>
     <input className={styles.oubo_input_text} type="text" id="mail"/>
     <input className={styles.oubo_input_text} type="text" id="mail_kakunin"/>

     <h4>性別</h4>
     <select className={styles.oubo_input_text} type="text" id="gender"/>

     <h4>生年月日</h4>
     <select className={styles.oubo_input_text} type="text" id="seinengappi"/>

     <h4>郵便番号</h4>
      <input className={styles.oubo_input_text} type="text" id="phone"/>

     <h4>現住所</h4>
      <input className={styles.oubo_input_long} type="text" id="adress"/>

      <h4>携帯電話番号</h4>
      <input className={styles.oubo_input_text} type="text" id="phone"/>

      <h4>最終学歴</h4>
      <input className={styles.oubo_input_text} type="text" id="gakureki"/>

      <h4>学校名</h4>
      <input className={styles.oubo_input_text}  type="text" id="gakureki"/>

      <h4>学部・学科</h4>
      <input  className={styles.oubo_input_text} type="text" id="gakureki"/>    

      <h4>卒業年</h4>
      <input  className={styles.oubo_input_text} type="text" id="gakureki"/>

      <h4>就業経験の有無</h4>
      <input className={styles.oubo_input_text} type="text" id="gakureki"/>

      <h4>転職経験</h4>
      <input className={styles.oubo_input_text} type="text" id="gakureki"/>

      <h4>直近の経験職種</h4>
      <input className={styles.oubo_input_text} type="text" id="gakureki"/>

      <h4>直近の企業名</h4>
      <input  className={styles.oubo_input_text} type="text" id="gakureki"/>

      <h4>経験されたお仕事やスキル</h4>
      <input  className={styles.oubo_input_area}type="text" id="gakureki"/>

      <h4>保有資格・スキル</h4>
      <ul className={styles.search_condition}>
      <li className={styles.search_items}>
        <input type="checkbox" id="tsuukin"></input>
        <label for="areas">COBOL</label>
        </li>
          <li className={styles.search_items}>
        <input type="checkbox" id="tsuukin"></input>
        <label for="areas">C++</label>
        </li>
        <li className={styles.search_items}>
        <input type="checkbox" id="remote"></input>
        <label for="areas">C#</label>
        </li>
        <li className={styles.search_items}>
        <input type="checkbox" id="mikeiken"></input>
        <label for="areas">Python</label>
        </li>
        <li className={styles.search_items}>
        <input type="checkbox" id="female"></input>
        <label for="areas">Java</label>
        </li>
        <li className={styles.search_items}>
        <input type="checkbox" id="female"></input>
        <label for="areas">JavaScript</label>
        </li>
        </ul>

      <h4>経験言語</h4>
      <ul className={styles.search_condition}>
      <li className={styles.search_items}>
        <input type="checkbox" id="tsuukin"></input>
        <label for="areas">COBOL</label>
        </li>
          <li className={styles.search_items}>
        <input type="checkbox" id="tsuukin"></input>
        <label for="areas">C++</label>
        </li>
        <li className={styles.search_items}>
        <input type="checkbox" id="remote"></input>
        <label for="areas">C#</label>
        </li>
        <li className={styles.search_items}>
        <input type="checkbox" id="mikeiken"></input>
        <label for="areas">Python</label>
        </li>
        <li className={styles.search_items}>
        <input type="checkbox" id="female"></input>
        <label for="areas">Java</label>
        </li>
        <li className={styles.search_items}>
        <input type="checkbox" id="female"></input>
        <label for="areas">JavaScript</label>
        </li>
        </ul>

      </div>

    
   
    
   
     </form>
     <button className={styles.oubo_kakunin_button}>応募内容を確認する</button>
           </div>

  )
}