import styles from '@/styles/Home.module.css'
import { createContext, useCallback, useEffect, useState } from 'react';


export const RecruitSearchBox = () =>{
   
  const [filteredData, setFilteredData] = useState([]);
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
      console.log({filteredData});
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
        <JobDataContext.Provider value= {filteredData}>
        <button className={styles.search_button} onClick = {handleFilter}>検索する</button>
        </JobDataContext.Provider>
   
      </div>

      {filteredData && filteredData.length > 0  && (
      <div className={styles.recruit_title_mid}>
        <h2>
        中途採用情報
        </h2>
      </div>)}
   
      </div>
      
      </div>
     
  )
}