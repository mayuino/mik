import styles from "@/styles/Home.module.css";
import Image from "next/image";
import mobileStyles from '@/styles/mobile.module.css'

export const ContentPeople = () => {
  return (
    <div>
    <div className={`${styles.people_title} ${mobileStyles.people_title}`}>
    <h1>MIKのエンジニア</h1>
    </div>
    <div className={`${styles.people_frame_wrapper} ${mobileStyles.people_frame_wrapper}`}>
      <div className={`${styles.people_frame} ${mobileStyles.people_frame}`}>
      <h2>ソフトウェア開発エンジニア部門</h2>
      <hr/>
      <div className={`${styles.people_frame_left} ${mobileStyles.people_frame_left}`}>
        <Image src="/A-san.png" alt="Asan" width={264} height={264} className={`${styles.people_image} ${mobileStyles.people_image}`} />
            <h4>株式会社MIK</h4>
            <h4>ソフトウェア開発エンジニア</h4>
            <h4>Aさん</h4>
            </div>    
          <div className={`${styles.people_frame_right} ${mobileStyles.people_frame_right}`}>
            <h2>
              テクニカルサポートで培った「調べる力」がエンジニア人生の糧に
            </h2>
            <hr/>
            <p>
              現在は、ソフトウェア開発エンジニアとして、指示をいただいた箇所のコーディングやテスト業務を主に行なっています。
              MIKに入るまで、IT業界は未経験でした。MIKでは、未経験からでもエンジニアになれる道があると知り、MIKに入社しました。
              MIKではさまざまな現場に派遣されますが、初めはテクニカルサポート業務からのスタートでした。お客様から本当に知りたい内容をヒアリングし、過去事例や公開情報から必要な情報を調べて回答する、といった中で、エンジニアとして「調べる力」が身についていきました。さらに別の現場では、テストやコーディングも経験し、はじめに「調べる力」をつけておいたことが、後の開発経験に非常に役に立ったと感じています。
              今後は、さらに開発知識を身につけ、一流のエンジニアを目標として努力していきたいです。
            </p>
          </div>
        </div>


        <div className={`${styles.people_frame} ${mobileStyles.people_frame}`}>
      <h2>サーバーエンジニア部門</h2>
      <hr/>
      <div className={`${styles.people_frame_left} ${mobileStyles.people_frame_left}`}>
      <Image src="/B-san.png" alt="Bsan" width={264} height={264} className={`${styles.people_image} ${mobileStyles.people_image}`} />
            <h4>株式会社MIK</h4>
            <h4>ソフトウェア開発エンジニア</h4>
            <h4>Bさん</h4>
            </div>    
          <div className={`${styles.people_frame_right} ${mobileStyles.people_frame_right}`}>
            <h2>
            未経験からクラウド対応の新業務システムを構築
            </h2>
            <hr/>
            <p>
          今年の春頃まで、私は外販系の業務システムの維持管理のみを担当していましたが、上司より、AWS上で動く新業務システムの維持管理をしてほしいとの依頼があり、
          そこから外販系の業務システムとAWSの新業務システムを並行して担当する事になりました。
          AWSの新業務システムを担当するようになった当初は、全く何もかも分からず、五里霧中な状態でした。作業手順が確立していない中で、不安な部分はプロパーの方々に何度も確認し、認識の相違がないか確認しながら、様々な作業をこなしていく内に、AWSシステムの仕組みが段々と理解出来ていきました。すると、他メンバーの方にAWSシステムの仕組みについて質問されるようにもなりました。
          現在は上司と連携をとりながらAWSの新業務システムがスムーズに運用されるよう、業務説明資料を作成しています。</p>
          </div>
        </div>

        <div className={`${styles.people_frame} ${mobileStyles.people_frame}`}>
      <h2>移動体通信部門</h2>
      <hr/>
      <div className={`${styles.people_frame_left} ${mobileStyles.people_frame_left}`}>
      <Image src="/C-san.png" alt="Csan"  width={264} height={264} className={`${styles.people_image} ${mobileStyles.people_image}`}/>
            <h4>株式会社MIK</h4>
            <h4>モバイル基地局設計エンジニア</h4>
            <h4>Cさん</h4>
            </div>    
          <div className={`${styles.people_frame_right} ${mobileStyles.people_frame_right}`}>
            <h2>
            積極的に。自発的に。
            </h2>
            <hr/>
            <p>2022年、災害応援対応の依頼が出向先に2度ありました。
          1度目は、台風14号による九州への災害対応の依頼でした。事務所内全員が集合し誰が行くのかという話をしている中で、率先して手をあげ、先行して被害が予想される地域に向かい、1班目として対応しました。
          2度目は、大雪による新潟への災害対応の依頼でした。プロパーの方には、「前回の九州災害で対応いただいたので、今回は辞退しても大丈夫」と仰っていただいたのですが、より濃い仕事経験を積みたかったので、「行かせてください」と2つ返事で参加させて頂きました。
          この経験から、自分から動けば、仕事も経験も、周囲の信頼も得られるという教訓を得ました。
          これからも引き続き、積極的に、自発的に動くことで、経験を積んでいきたいと思っています。</p>
          </div>
        </div>
        </div>

        <div className={`${styles.people_title} ${mobileStyles.people_title}`}>
    <h1>MIKのスタッフ</h1>
    </div>

    <div className={`${styles.people_frame_wrapper} ${mobileStyles.people_frame_wrapper}`}>
    <div className={`${styles.people_frame} ${mobileStyles.people_frame}`}>
      <h2>営業部門</h2>
      <hr/>
      <div className={`${styles.people_frame_left} ${mobileStyles.people_frame_left}`}>
      <Image src="/eigyo.png" alt="eigyou"  width={264} height={264} className={`${styles.people_image} ${mobileStyles.people_image}`}/>
            <h4>株式会社MIK</h4>
            <h4>営業部</h4>
            <h4>村上さん</h4>
            </div>    
          <div className={`${styles.people_frame_right} ${mobileStyles.people_frame_right}`}>
            <h2>
            エンジニアファーストを徹底的に。
            </h2>
            <hr/>
            <p>
                私は、エンジニアの未来の派遣先開拓のための新規訪問営業から、すでにエンジニアを派遣させていただいている企業様への定期訪問、在籍社員のフォローなどを全般的に行なっています。
                派遣先企業とともに弊社が掲げる「エンジニアファースト」をいつも念頭において、
                エンジニアが働きやすい環境づくりや、仕事内容がその人の適性やステップアップに適しているか、エンジニアのライフスタイルに問題はないか、など、常にエンジニアの目線で注意を払うようにしています。<br/>
                MIKには、自分のやりたいこと、挑戦したいことを否定せず、背中を押してもらえる風土があります。営業社員一人一人や、役員にもある程度自由な決裁権があり、ある程度自由に自分の思う「エンジニアファースト」を貫くことができます。おかげで、仕事も非常に充実し、自由でやりがいのある職場に出会えたことに感謝しています。
              </p>
          </div>
        </div>
   
        <div className={`${styles.people_frame} ${mobileStyles.people_frame}`}>
      <h2>経営企画部門</h2>
      <hr/>
      <div className={`${styles.people_frame_left} ${mobileStyles.people_frame_left}`}>
      <Image src="/kikaku.png" alt="kikaku"  width={264} height={264} className={`${styles.people_image} ${mobileStyles.people_image}`}/>
            <h4>株式会社MIK</h4>
            <h4>経営企画室</h4>
            <h4>井上さん</h4>
            </div>    
          <div className={`${styles.people_frame_right} ${mobileStyles.people_frame_right}`}>
            <h2>
            エンジニアを内側から支えています。
            </h2>
            <hr/>
            <p>
                私は、MIKの「経営企画室」という部署で働いています。
                <br />
                経営企画室では、社員の方々とのコミュニケーションツールである、「LINE」の運用や、
                    イントラサイトの運営、社内イベントの実施、お悩み相談、各種制度の構築などを行っています。
                    ここ最近では、みなさんが今、毎日の業務の中で積み上げているキャリアを、
        
                他の会社や、他の部署でも評価してもらえるように、
                 汎用的に使える「キャリア指標」を用いた評価制度を構築中で、
                 MIKの内部からエンジニアの皆様のキャリアを支援させていただこうと奮闘中しています。
                  たまに社内のエンジニアさんからいただく、「LINEやイベントが励みになった」というお声には、
                「頑張った甲斐があった!」と非常に嬉しく思います。
                <br />
                これからもMIKのエンジニアさんの縁の下の力持ちになれるよう、励んでいきたいと思います。
              </p>
          
          </div>
        </div>
        </div>
        </div>
   

 

      
    

 
      
  );
};
