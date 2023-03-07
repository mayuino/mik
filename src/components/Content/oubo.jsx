import styles from '@/styles/Home.module.css'
import Image from 'next/image'

export const Content_Oubo= () =>{
  return(
    <div className={styles.content_oubo}>
       <h1>この求人に応募する</h1>
      <div className={styles.oubo_top_bar}>応募内容</div>
 
      <form className={styles.oubo_form}> 
     
    
      <div className={styles.oubo_input_wrapper}>
      <h4>お名前</h4>
      <div>
      <input className={styles.oubo_input_text} type="text" id="sei_kanji"/>
      <input className={styles.oubo_input_text} type="text" id="mei_kanji"/>
      </div>
      <div>
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
      </div>

      <h4>保有資格・スキル</h4>
<div className={styles.shikaku_wrapper}>
    
      <h5>IPA</h5>
      <ul>
      <li className={styles.search_items}>
        <input type="checkbox" id="female"></input>
        <label for="areas">ITパスポート</label>
        </li>
      <li className={styles.search_items}>
        <input type="checkbox" id="tsuukin"></input>
        <label for="areas">基本情報技術者</label>
        </li>
          <li className={styles.search_items}>
        <input type="checkbox" id="tsuukin"></input>
        <label for="areas">応用情報技術者</label>
        </li>
        <li className={styles.search_items}>
        <input type="checkbox" id="remote"></input>
        <label for="areas">ネットワークスペシャリスト</label>
        </li>
        <li className={styles.search_items}>
        <input type="checkbox" id="mikeiken"></input>
        <label for="areas">データベーススペシャリスト</label>
        </li>
        <li className={styles.search_items}>
        <input type="checkbox" id="mikeiken"></input>
        <label for="areas">情報処理安全確保支援士</label>
        </li>
        <li className={styles.search_items}>
        <input type="checkbox" id="mikeiken"></input>
        <label for="areas">その他</label>
        <input  className={styles.oubo_input_text} type="text" id="gakureki"/>
        </li>
        </ul>
        <h5>AWS認定</h5>
        <ul>
        <li className={styles.search_items}>
        <input type="checkbox" id="female"></input>
        <label for="areas">Cloud Practitioner Foundational</label>
        </li>
        <li className={styles.search_items}>
        <input type="checkbox" id="female"></input>
        <label for="areas">Developer Associate</label>
        </li>
        <li className={styles.search_items}>
        <input type="checkbox" id="female"></input>
        <label for="areas">Solution Architect Associate</label>
        </li>
        <li className={styles.search_items}>
        <input type="checkbox" id="female"></input>
        <label for="areas">SysOps Administrator Associate </label>
        </li>
        <li className={styles.search_items}>
        <input type="checkbox" id="female"></input>
        <label for="areas">DevOps Engineer Professional</label>
        </li>
        <li className={styles.search_items}>
        <input type="checkbox" id="female"></input>
        <label for="areas">Solutions Architect Professional</label>
        </li>
        <li className={styles.search_items}>
        <input type="checkbox" id="female"></input>
        <label for="areas">AdvancedNetworking Specialty</label>
        </li>
        <li className={styles.search_items}>
        <input type="checkbox" id="female"></input>
        <label for="areas">Data Analytics Specialty</label>
        </li>
        <li className={styles.search_items}>
        <input type="checkbox" id="female"></input>
        <label for="areas">Database Specialty</label>
        </li>
        <li className={styles.search_items}>
        <input type="checkbox" id="female"></input>
        <label for="areas">Machine Learning Specialty</label>
        </li>
        <li className={styles.search_items}>
        <input type="checkbox" id="female"></input>
        <label for="areas">Security Specialty</label>
        </li>
        <li className={styles.search_items}>
        <input type="checkbox" id="female"></input>
        <label for="areas">SAP on AWS Specialty</label>
        </li>
        <li className={styles.search_items}>
        <input type="checkbox" id="female"></input>
        <label for="areas">その他</label>
        <input  className={styles.oubo_input_text} type="text" id="gakureki"/>
        </li>
        </ul>
  

      <h5>LinuC</h5>
      <ul>
        <li className={styles.search_items}>
        <input type="checkbox" id="female"></input>
        <label for="areas">LinuC-1</label>
        </li>
        <li className={styles.search_items}>
        <input type="checkbox" id="female"></input>
        <label for="areas">LinuC-2</label>
        </li>
        <li className={styles.search_items}>
        <input type="checkbox" id="female"></input>
        <label for="areas">LinuC-3</label>
        </li>
        </ul>

        <h5>Linux Professional Institute</h5>
      <ul>
        <li className={styles.search_items}>
        <input type="checkbox" id="female"></input>
        <label for="areas">LPIC-1</label>
        </li>
        <li className={styles.search_items}>
        <input type="checkbox" id="female"></input>
        <label for="areas">LPIC-2</label>
        </li>
        <li className={styles.search_items}>
        <input type="checkbox" id="female"></input>
        <label for="areas">LPIC-3</label>
        </li>
        </ul>



        <h5>Cisco</h5>
      <ul>
        <li className={styles.search_items}>
        <input type="checkbox" id="female"></input>
        <label for="areas">CCNA</label>
        </li>
        <li className={styles.search_items}>
        <input type="checkbox" id="female"></input>
        <label for="areas">CCNP</label>
        </li>
        <li className={styles.search_items}>
        <input type="checkbox" id="female"></input>
        <label for="areas">CCT</label>
        </li>
        <li className={styles.search_items}>
        <input type="checkbox" id="female"></input>
        <label for="areas">CCIE</label>
        </li>
        </ul>

        <h5>Oracle</h5>
      <ul>
        <li className={styles.search_items}>
        <input type="checkbox" id="female"></input>
        <label for="areas">Oracle Master Bronze</label>
        </li>
        <li className={styles.search_items}>
        <input type="checkbox" id="female"></input>
        <label for="areas">Oracle Master Silver</label>
        </li>
        <li className={styles.search_items}>
        <input type="checkbox" id="female"></input>
        <label for="areas">Oracle Master Gold</label>
        </li>
        <li className={styles.search_items}>
        <input type="checkbox" id="female"></input>
        <label for="areas">Oracle Master Platinum</label>
        </li>
        </ul>

        <h5>Microsoft</h5>
      <ul>
      <li className={styles.search_items}>
        <input type="checkbox" id="female"></input>
        <label for="areas">Azure Fundamentals</label>
        </li>
        <li className={styles.search_items}>
        <input type="checkbox" id="female"></input>
        <label for="areas">Azure Administrator Associate</label>
        </li>
        <li className={styles.search_items}>
        <input type="checkbox" id="female"></input>
        <label for="areas">その他</label>
        <input  className={styles.oubo_input_text} type="text" id="gakureki"/>
        </li>
        </ul>

        <h5>CompTIA</h5>
      <ul>
      <li className={styles.search_items}>
        <input type="checkbox" id="female"></input>
        <label for="areas">CompTIA　Cloud+</label>
        </li>
        <li className={styles.search_items}>
        <input type="checkbox" id="female"></input>
        <label for="areas">CompTIA Network+</label>
        </li>
        <li className={styles.search_items}>
        <input type="checkbox" id="female"></input>
        <label for="areas">その他</label>
        <input  className={styles.oubo_input_text} type="text" id="gakureki"/>
        </li>
        </ul>

        </div>

      <h4>経験言語</h4>
      <ul className={styles.language_select}>
        <li className={styles.search_items}>
        <input type="checkbox" id="tsuukin"></input>
        <label for="areas">Ruby</label>
        </li>
        <li className={styles.search_items}>
        <input type="checkbox" id="tsuukin"></input>
        <label for="areas">Swift</label>
        </li>
        <li className={styles.search_items}>
        <input type="checkbox" id="tsuukin"></input>
        <label for="areas">PHP</label>
        </li>
        <li className={styles.search_items}>
        <input type="checkbox" id="tsuukin"></input>
        <label for="areas">HTML/CSS</label>
        </li>
        <li className={styles.search_items}>
        <input type="checkbox" id="tsuukin"></input>
        <label for="areas">Go</label>
        </li>
        <li className={styles.search_items}>
        <input type="checkbox" id="tsuukin"></input>
        <label for="areas">SQL</label>
        </li>
        <li className={styles.search_items}>
        <input type="checkbox" id="tsuukin"></input>
        <label for="areas">Perl</label>
        </li>
        <li className={styles.search_items}>
        <input type="checkbox" id="tsuukin"></input>
        <label for="areas">Kotolin</label>
        </li>
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