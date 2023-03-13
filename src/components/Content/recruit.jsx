import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

export const Content_Recruit = () =>{

  const[info,setInfo] = useState([]);
//地域で探す
  const [checkedSapporo, setCheckedSapporo] = useState(false);
  const [checkedMorioka, setCheckedMorioka] = useState(false);
  const [checkedOsaka, setCheckedOsaka] = useState(false);
  const [checkedKyoto, setCheckedKyoto] = useState(false);
  const [checkedKobe, setCheckedKobe] = useState(false);
  const [checkedFukuoka, setCheckedFukuoka] = useState(false);

  //職種で探す
  const [checkedSoftware, setCheckedSoftware] = useState(false);
  const [checkedSystem, setCheckedSystem] = useState(false);
  const [checkedServer, setCheckedServer] = useState(false);
  const [checkedNetwork, setCheckedNetwork] = useState(false);
  const [checkedCloud, setCheckedCloud] = useState(false);
  const [checkedHelp, setCheckedHelp] = useState(false);
  const [checkedIdoutai, setCheckedIdoutai] = useState(false);

  //言語で探す
  const [checkedCprus, setCheckedCprus] = useState(false);
  const [checkedCsharp, setCheckedCsharp] = useState(false);
  const [checkedPython, setCheckedPython] = useState(false);
  const [checkedJava, setCheckedJava] = useState(false);
  const [checkedJavascript, setCheckedJavascript] = useState(false);

    //条件で探す
    const [checkedTsuukin, setCheckedTsuukin] = useState(false);
    const [checkedRemort, setCheckedRemort] = useState(false);
    const [checkedMikiken, setCheckedMikeiken] = useState(false);
    const [checkedFemale, setCheckedFemale] = useState(false);

    const checkedAreas = [checkedSapporo, checkedMorioka, checkedOsaka, checkedKyoto, checkedKobe, checkedFukuoka];
    const checkedTypes = [checkedSoftware, checkedSystem, checkedServer, checkedNetwork, checkedIdoutai, checkedCloud, checkedHelp];
    const checkedLanguages = [checkedCprus, checkedCsharp, checkedPython, checkedJava, checkedJavascript];
    const checkedOptions = [checkedTsuukin, checkedRemort, checkedMikiken, checkedFemale];

    const [filteredData, setFilteredData] = useState([]);

    const getInfo = useCallback(async() =>{
    const res = await fetch("/recruit.json");
    const json = await res.json();
    console.log(json);
    setInfo(json);
  },
  [] )

  useEffect(() => {
    getInfo();
  },[getInfo])

    const handleFilter = () => {
         
      const checkedAreasCount = checkedAreas.filter(Boolean).length;
      const checkedTypesCount = checkedTypes.filter(Boolean).length;
      const checkedLanguagesCount = checkedLanguages.filter(Boolean).length;
      const checkedOptionsCount = checkedOptions.filter(Boolean).length;
    
      const filtered = info.filter(item =>
        ((checkedAreasCount === 0) || (checkedSapporo && item.search_items.area === "sapporo") ||
        (checkedMorioka && item.search_items.area === "morioka") ||
        (checkedOsaka && item.search_items.area === "oosaka") ||
        (checkedKyoto && item.search_items.area === "kyouto") ||
        (checkedKobe && item.search_items.area === "koube") ||
        (checkedFukuoka && item.search_items.area === "fukuoka")) &&
        ((checkedTypesCount === 0) || (checkedSoftware && item.search_items.type === "software") ||
        (checkedSystem && item.search_items.type === "system") ||
        (checkedServer && item.search_items.type === "server") ||
        (checkedNetwork && item.search_items.type === "network") ||
        (checkedIdoutai && item.search_items.type === "idoutai") ||
        (checkedCloud && item.search_items.type === "cloud") ||
        (checkedHelp && item.search_items.type === "helpdesk")) &&
        ((checkedLanguagesCount === 0) || (checkedCprus && item.search_items.language === "C+") ||
        (checkedCsharp && item.search_items.language === "C#") ||
        (checkedPython && item.search_items.language === "Python") ||
        (checkedJava && item.search_items.language === "JAVA") ||
        (checkedJavascript && item.search_items.language === "JavaScript")) &&
        ((checkedOptionsCount === 0) || (checkedTsuukin && item.search_items.tsuukin === true) ||
        (checkedRemort && item.search_items.remote === true) ||
        (checkedMikiken && item.search_items.mikeiken === true) ||
        (checkedFemale && item.search_items.female === true))
      );
      setFilteredData(filtered);
    };
    

  return(
    <div className={styles.content_recruit}>
      <div className={styles.recruit_title}>
        <h1>エンジニア採用情報</h1>
      </div>
      <div><p>あなたが探しているお仕事の条件にチェックを入れ、「検索する」ボタンをクリックしてください。</p></div>
      
      <div className={styles.recruit_frame}>

      <div className={styles.recruit_search_frame}>
      <div className={styles.search_1}>
         <h4>地域で探す</h4>
        <ul className={styles.search_area}>
          <li className={styles.search_items}>
        <input type="checkbox" checked={checkedSapporo} 
        onChange = {() => setCheckedSapporo(!checkedSapporo)} id="area_sapporo"></input>
        <label for="areas">札幌</label>
        </li>
        <li className={styles.search_items}>
        <input type="checkbox" id="area_morioka" checked={checkedMorioka} 
        onChange = {() => setCheckedMorioka(!checkedMorioka)} ></input>
        <label for="areas">盛岡</label>
        </li>
        <li className={styles.search_items}>
        <input type="checkbox" id="area_oosaka" checked={checkedOsaka} 
        onChange = {() => setCheckedOsaka(!checkedOsaka)} ></input>
        <label for="areas">大阪</label>
        </li>
        <li className={styles.search_items}>
        <input type="checkbox" id="area_kyouto" checked={checkedKyoto} 
        onChange = {() => setCheckedKyoto(!checkedKyoto)} ></input>
        <label for="areas">京都</label>
        </li>
        <li className={styles.search_items}>
        <input type="checkbox" id="area_koube" checked={checkedKobe} 
        onChange = {() => setCheckedKobe(!checkedKobe)} ></input>
        <label for="areas">神戸</label>
        </li>
        <li className={styles.search_items}>
        <input type="checkbox" id="area_fukuoka" checked={checkedFukuoka} 
        onChange = {() => setCheckedFukuoka(!checkedFukuoka)} ></input>
        <label for="areas">福岡</label>
        </li>
        </ul>
        <h4>職種で探す</h4>
        <ul className={styles.search_condition}>
          <li className={styles.search_items}>
        <input type="checkbox" checked={checkedSoftware} 
        onChange = {() => setCheckedSoftware(!checkedSoftware)} ></input>
        <label for="areas">ソフトウェアエンジニア</label>
        </li>
        <li className={styles.search_items}>
        <input type="checkbox" checked={checkedSystem} 
        onChange = {() => setCheckedSystem(!checkedSystem)} ></input>
        <label for="areas">システムエンジニア</label>
        </li>
        <li className={styles.search_items}>
        <input type="checkbox" checked={checkedServer} 
        onChange = {() => setCheckedServer(!checkedServer)}></input>
        <label for="areas">サーバーエンジニア</label>
        </li>

        <li className={styles.search_items}>
        <input type="checkbox"checked={checkedNetwork} 
        onChange = {() => setCheckedNetwork(!checkedNetwork)}></input>
        <label for="areas">ネットワークエンジニア</label>
        </li>


        <li className={styles.search_items}>
        <input type="checkbox" checked={checkedIdoutai} 
        onChange = {() => setCheckedIdoutai(!checkedIdoutai)}></input>
        <label for="areas">移動体通信エンジニア</label>
        </li>

        <li className={styles.search_items}>
        <input type="checkbox"  checked={checkedCloud} 
        onChange = {() => setCheckedCloud(!checkedCloud)}></input>
        <label for="areas">クラウドエンジニア</label>
        </li>

        <li className={styles.search_items}>
        <input type="checkbox" checked={checkedHelp} 
        onChange = {() => setCheckedHelp(!checkedHelp)}></input>
        <label for="areas">ヘルプデスク</label>
        </li>
        </ul>
        </div>

        <div className={styles.search_2}>
        <h4>言語で探す</h4>
        <ul className={styles.search_condition}>
          <li className={styles.search_items}>
        <input type="checkbox" checked={checkedCprus} 
        onChange = {() => setCheckedCprus(!checkedCprus)}></input>
        <label for="areas">C++</label>
        </li>
        <li className={styles.search_items}>
        <input type="checkbox" checked={checkedCsharp} 
        onChange = {() => setCheckedCsharp(!checkedCsharp)}></input>
        <label for="areas">C#</label>
        </li>
        <li className={styles.search_items}>
        <input type="checkbox" checked={checkedPython} 
        onChange = {() => setCheckedPython(!checkedPython)}></input>
        <label for="areas">Python</label>
        </li>
        <li className={styles.search_items}>
        <input type="checkbox" checked={checkedJava} 
        onChange = {() => setCheckedJava(!checkedJava)}></input>
        <label for="areas">Java</label>
        </li>
        <li className={styles.search_items}>
        <input type="checkbox" checked={checkedJavascript} 
        onChange = {() => setCheckedJavascript(!checkedJavascript)}></input>
        <label for="areas">JavaScript</label>
        </li>
        </ul>
        <h4>条件で探す</h4>
        <ul className={styles.search_condition}>
          <li className={styles.search_items}>
        <input type="checkbox" checked={checkedTsuukin} 
        onChange = {() => setCheckedTsuukin(!checkedTsuukin)}></input>
        <label for="areas">通勤あり</label>
        </li>
        <li className={styles.search_items}>
        <input type="checkbox" checked={checkedRemort} 
        onChange = {() => setCheckedRemort(!checkedRemort)}></input>
        <label for="areas">リモートワーク</label>
        </li>
        <li className={styles.search_items}>
        <input type="checkbox" checked={checkedMikiken} 
        onChange = {() => setCheckedMikeiken(!checkedMikiken)}></input>
        <label for="areas">未経験者歓迎</label>
        </li>
        <li className={styles.search_items}>
        <input type="checkbox" checked={checkedFemale} 
        onChange = {() => setCheckedFemale(!checkedFemale)}></input>
        <label for="areas">女性活躍</label>
        </li>
        </ul>
        </div>
        <button className={styles.search_button} onClick = {handleFilter}>検索する</button>
   
      </div>

      {filteredData && filteredData.length > 0  && (
      <div className={styles.recruit_title_mid}>
        <h2>
        中途採用情報
        </h2>
      </div>)}
  
        <ul className={styles.recruit_mid_content}>
          {filteredData.map(item => {
            return(
              <li className={styles.recruit_mid_items} key={item.id}>
                <h3>{item.name}</h3>
                <hr/>
                <h4>年棒　{item.payment.payment_low}円〜{item.payment.payment_high}円</h4>
                <h4>勤務地　{item.area.job_area}</h4>
                <h4>勤務時間　{item.time.job_start_time}〜{item.time.job_end_time}</h4>
                <p>最終更新日：{item.koushin_bi}</p>
              </li>
            )
          }
            )}
        
</ul>
     
          {/* <li className={styles.recruit_mid_items}><a href='/recruit_detail'>
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
          </li> */}



{/* 
        </ul> */}
     
      </div>
      
      </div>

  )
}