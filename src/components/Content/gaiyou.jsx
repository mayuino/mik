import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import mobileStyles from '@/styles/mobile.module.css'
import Link from 'next/link'

export const Content_Gaiyou = () =>{
  return(
    <div className={`${styles.content_gaiyou} ${mobileStyles.content_gaiyou}`}>
      <div className={`${styles.gaiyou_title} ${mobileStyles.gaiyou_title}`}>
        <h1>会社概要</h1>
      </div>
      <div className={`${styles.gaiyou_table} ${mobileStyles.gaiyou_table}`}>
      <table >
      <tbody>
        <tr>
          <th>会社名</th>
          <td>株式会社MIK</td>
        </tr>

        <tr>
        <th>設立</th>
        <td>2014年9月1日</td>
        </tr>
       
       <tr> <th>代表者</th>
        <td>代表取締役　大沼　貴明</td></tr>
    

        <tr>
        <th>資本金
        </th>
        <td>2700万円</td>
        </tr>
      

        <tr>
        <th>本社所在地</th>
        <td>〒001-0014 北海道札幌市北区北十四条西3丁目2-21</td>
        </tr>

       

        <tr>
        <th>TEL/FAX</th>
        <td>(TEL)011-299-7361/(FAX)011-299-7362</td>
        </tr>

        

        <tr><th>取引銀行</th>
        <td>三菱UFJ銀行　三井住友銀行　稚内信用金庫</td></tr>

        

        <tr>    <th>事業内容</th>
        <td>エンジニアソリューション事業
            （ソフト・ハードウェア開発、アプリケーション開発、機械・電気設計、AD設計、解析・評価）
            労働者派遣許可番号　派01-301345
            エンジニア育成事業
            有料職業紹介事業 01-ユ-300554</td></tr>

    

            <tr>     <th>その他</th>
        <td><Link href={"/pdfs/hakenhou.pdf"} target="_blank">労働者派遣法第２３条第５項に基づく情報提供</Link></td>
       
       </tr>

       </tbody>

        </table>

      </div>

     
  </div>

  )
}