import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import { Link } from 'react-router-dom'

export const Content_Recruit = () =>{
  return(
    <div className={styles.content_recruit}>
      <div className={styles.recruit_title}>
        <h1>エンジニア採用情報</h1>
      </div>
      
      <div className={styles.recruit_frame}>

      <div className={styles.recruit_search_frame}>
      <div className={styles.search_1}>
         <h4>地域で探す</h4>
        <ul className={styles.search_area}>
          <li className={styles.search_items}>
        <input type="checkbox" id="area_sapporo"></input>
        <label for="areas">札幌</label>
        </li>
        <li className={styles.search_items}>
        <input type="checkbox" id="area_morioka"></input>
        <label for="areas">盛岡</label>
        </li>
        <li className={styles.search_items}>
        <input type="checkbox" id="area_oosaka"></input>
        <label for="areas">大阪</label>
        </li>
        <li className={styles.search_items}>
        <input type="checkbox" id="area_oosaka"></input>
        <label for="areas">京都</label>
        </li>
        <li className={styles.search_items}>
        <input type="checkbox" id="area_oosaka"></input>
        <label for="areas">神戸</label>
        </li>
        <li className={styles.search_items}>
        <input type="checkbox" id="area_fukuoka"></input>
        <label for="areas">福岡</label>
        </li>
        </ul>
        <h4>職種で探す</h4>
        <ul className={styles.search_condition}>
          <li className={styles.search_items}>
        <input type="checkbox" id="tsuukin"></input>
        <label for="areas">ソフトウェアエンジニア</label>
        </li>
        <li className={styles.search_items}>
        <input type="checkbox" id="tsuukin"></input>
        <label for="areas">サーバーエンジニア</label>
        </li>

        <li className={styles.search_items}>
        <input type="checkbox" id="tsuukin"></input>
        <label for="areas">ネットワークエンジニア</label>
        </li>

        <li className={styles.search_items}>
        <input type="checkbox" id="tsuukin"></input>
        <label for="areas">クラウドエンジニア</label>
        </li>

        <li className={styles.search_items}>
        <input type="checkbox" id="tsuukin"></input>
        <label for="areas">ヘルプデスク</label>
        </li>
        </ul>
        </div>

        <div className={styles.search_2}>
        <h4>言語で探す</h4>
        <ul className={styles.search_condition}>
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
        <h4>条件で探す</h4>
        <ul className={styles.search_condition}>
          <li className={styles.search_items}>
        <input type="checkbox" id="tsuukin"></input>
        <label for="areas">通勤あり</label>
        </li>
        <li className={styles.search_items}>
        <input type="checkbox" id="remote"></input>
        <label for="areas">リモートワーク</label>
        </li>
        <li className={styles.search_items}>
        <input type="checkbox" id="mikeiken"></input>
        <label for="areas">未経験者歓迎</label>
        </li>
        <li className={styles.search_items}>
        <input type="checkbox" id="female"></input>
        <label for="areas">女性活躍</label>
        </li>
        </ul>
        </div>
        <button className={styles.search_button}>検索する</button>
   
      </div>
      <div className={styles.recruit_title_mid}>
        <h2>
        中途採用
        </h2>
      </div>
  
        <ul className={styles.recruit_mid_content}>

     
          <li className={styles.recruit_mid_items}><a href='/recruit_detail'>
          <h3>■急募■セキュリティソフト更新対応【京都府内】【未経験者大歓迎】</h3>
          <hr/>
          <h4>年棒　3,000,000円〜6,000,000円</h4>
          <h4>勤務地　京都府</h4>
          <h4>勤務時間　9：00〜18：00</h4>
          <p>最終更新日：2023/2/27</p>
          </a>
          </li>

          <li className={styles.recruit_mid_items}>
          <h3>■急募■社内SE補助業務【京都府内】【未経験者大歓迎】</h3>
          <hr/>
          <h4>年棒　3,000,000円〜5,000,000円</h4>
          <h4>勤務地　京都府京都市</h4>
          <h4>勤務時間　9：30〜17：30</h4>
          <p>最終更新日：2023/2/27</p>
          </li>

          <li className={styles.recruit_mid_items}>
          <h3>ソフトウェア開発支援業務（WindowsServer/Azure）【未経験可】【経験者優遇】</h3>
          <hr/>
          <h4>年棒　3,000,000円〜7,500,000円</h4>
          <h4>勤務地　大阪府大阪市</h4>
          <h4>勤務時間　9：00〜18：00</h4>
          <p>最終更新日：2023/2/20</p>
          </li>

          <li className={styles.recruit_mid_items}>
          <h3>【C#/SE・PG】システムエンジニア（WEB・オープン系）【大阪府内】</h3>
          <hr/>
          <h4>年棒　4,500,000円〜8,000,000円</h4>
          <h4>勤務地　大阪府大阪市</h4>
          <h4>勤務時間　9：00〜18：00</h4>
          <p>最終更新日：2023/2/20</p>
          </li>

          <li className={styles.recruit_mid_items}>
          <h3>未経験OK!ヘルプデスクエンジニア【神戸市内】【経験者優遇】</h3>
          <hr/>
          <h4>年棒　3,000,000円〜7,500,000円</h4>
          <h4>勤務地　兵庫県神戸市</h4>
          <h4>勤務時間　9：00〜18：00</h4>
          <p>最終更新日：2023/2/20</p>
          </li>

          <li className={styles.recruit_mid_items}>
          <h3>未経験OK!ヘルプデスクエンジニア【大阪府内】</h3>
          <hr/>
          <h4>年棒　3,000,000円〜7,500,000円</h4>
          <h4>勤務地　大阪府大阪市</h4>
          <h4>勤務時間　9：00〜18：00</h4>
          <p>最終更新日：2023/2/20</p>
          </li>

          <li className={styles.recruit_mid_items}>
          <h3>DB構築運用管理【大阪】【フルリモート】</h3>
          <hr/>
          <h4>年棒　4,500,000円〜7,500,000円</h4>
          <h4>勤務地　大阪府門真市</h4>
          <h4>勤務時間　9：00〜17：45</h4>
          <p>最終更新日：2023/2/20</p>
          </li>

          <li className={styles.recruit_mid_items}>
          <h3>WEBシステムのテスト実施【経験者優遇】【正社員雇用】</h3>
          <hr/>
          <h4>年棒3,800,000円〜5,000,000円</h4>
          <h4>勤務地　大阪府大阪市</h4>
          <h4>勤務時間　9：00〜18：00</h4>
          <p>最終更新日：2023/2/20</p>
          </li>

          <li className={styles.recruit_mid_items}>
          <h3>WEBシステムのテスト設計【大阪市内】</h3>
          <hr/>
          <h4>年棒4,500,000円〜7,800,000円</h4>
          <h4>勤務地　大阪府大阪市</h4>
          <h4>勤務時間　9：00〜18：00</h4>
          <p>最終更新日：2023/2/20</p>
          </li>

          <li className={styles.recruit_mid_items}>
          <h3>IT事務/手順書に沿った動作チェック・結果レポート作成など【大阪市内】【英語活用】【女性活躍中】</h3>
          <hr/>
          <h4>年棒3,000,000円〜6,500,000円</h4>
          <h4>勤務地　大阪府大阪市</h4>
          <h4>勤務時間　8：30〜17：00</h4>
          <p>最終更新日：2023/2/15</p>
          </li>

          <li className={styles.recruit_mid_items}>
          <h3>RPA(uipath)システム開発業務【大阪市内】</h3>
          <hr/>
          <h4>年棒3,500,000円〜7,000,000円</h4>
          <h4>勤務地　大阪府大阪市</h4>
          <h4>勤務時間　9：30〜18：00</h4>
          <p>最終更新日：2023/2/15</p>
          </li>

          <li className={styles.recruit_mid_items}>
          <h3>Windows/Linuxサーバ構築運用【大阪市内】【正社員雇用】</h3>
          <hr/>
          <h4>年棒4,500,000円〜8,000,000円</h4>
          <h4>勤務地　大阪府門真市</h4>
          <h4>勤務時間　9：00〜18：00</h4>
          <p>最終更新日：2023/2/15</p>
          </li>

          <li className={styles.recruit_mid_items}>
          <h3>社内SE補助業務【京都市内】【未経験者大歓迎】</h3>
          <hr/>
          <h4>年棒3,000,000円〜5,000,000円</h4>
          <h4>勤務地　京都府京都市</h4>
          <h4>勤務時間　9：30〜17：30</h4>
          <p>最終更新日：2023/2/15</p>
          </li>

          <li className={styles.recruit_mid_items}>
          <h3>車載機器システムのテスト設計・テストプログラム開発（Python）【大阪市内】</h3>
          <hr/>
          <h4>年棒3,800,000円〜5,000,000円</h4>
          <h4>勤務地　大阪府大阪市</h4>
          <h4>勤務時間　9：00〜18：00</h4>
          <p>最終更新日：2023/2/15</p>
          </li>

          <li className={styles.recruit_mid_items}>
          <h3>Microsoft製品サポート業務(Microsoft365)【経験者優遇】【テレワーク有】</h3>
          <hr/>
          <h4>年棒3,000,000円〜7,500,000円</h4>
          <h4>勤務地　大阪府大阪市</h4>
          <h4>勤務時間　9：00〜18：00</h4>
          <p>最終更新日：2023/2/15</p>
          </li>




        </ul>
     
      </div>
      
      </div>

  )
}