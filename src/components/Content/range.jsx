import styles from "@/styles/Home.module.css";
import Image from "next/image";
import mobileStyles from "@/styles/mobile.module.css";

export const Content_Range = () => {
  return (
    <div className={`${styles.content_range} ${mobileStyles.content_range}`}>
      <div className={`${styles.range_title} ${mobileStyles.range_title}`}>
        <h1>事業領域</h1>
      </div>

      <div className={`${styles.range} ${mobileStyles.range}`}>
        <h1>ソフトウェア開発</h1>
        <div
          className={`${styles.range_discription} ${mobileStyles.range_discription}`}
        >
          <h3>WEBシステム開発</h3>
          <p>設計書の修正・Java、VB.NETでの実装・単体テスト、結合テスト等</p>
          <h3>RPA導入時の設計開発</h3>
          <h3>システムテスト用の自動化ツール作成・システムテスト実施</h3>
          <h3>基幹システムの保守運用</h3>
          <p>
            既存システムの変更・各種プログラムのバグ修正対応、バグ発生時の原因調査
          </p>
          <h3>intra-martを用いた基幹システム開発</h3>
          <p>
            スクリプト画面開発、UI部品の開発、officeバージョンアップでの動作検証確認
          </p>
          <h3>WEBサイトの修正・更改</h3>
          <p>
            ニュースページ・グループニュースページ・セミナー情報・製品紹介ページ等の作成更新
          </p>
          <h3>車載システムの評価検証</h3>
          <p>テスト実施・資料作成</p>
        </div>
      </div>

      <div className={`${styles.range} ${mobileStyles.range}`}>
        <h1>インフラ環境構築</h1>
        <div
          className={`${styles.range_discription} ${mobileStyles.range_discription}`}
        >
          <h3>JP1（統合管理ツール）導入支援・保守運用</h3>
          <p>
            ユーザーへのJP1導入、ユーザーマッピング作成、統計情報出力のためのバッチ作成
          </p>
          <h3>Linuxサーバ構築</h3>
          <p>OSのインストール、基本設定・運用手順書の作成・運用ツールの導入</p>
          <h3>DB（Oracle）サーバ構築</h3>
          <p>クライアント構築、IIS設定、運用手順書修正、ジョブ作成</p>
          <h3>DB（SQLServer）サーバ構築</h3>
          <p>
            共通基盤の再構築、DB移行作業、ActiveDirectory同期構築、手順書の作成・修正
          </p>
          <h3>Microsoft365導入支援</h3>
          <p>
            Microsoft365導入、設定・認証アプリケーションの導入、設定・ドキュメント作成
          </p>
          <h3>サーバ設計構築・更改</h3>
          <p>設計書修正・サーバリプレイス・監視ツールの導入、テスト</p>
        </div>
      </div>

      <div className={`${styles.range} ${mobileStyles.range}`}>
      <h1>通信</h1>
        <div
          className={`${styles.range_discription} ${mobileStyles.range_discription}`}
        >
         
          <h3>大手通信会社向け基地局の保守運用</h3>
          <p>機器の交換、設置ビルのオーナー要望対応</p>
          <h3>大手通信会社向け基地局設計</h3>
          <p>AutoCADでの図面作成・現地調査・書類作成</p>
          <h3>大手通信会社向け基地局対向業務</h3>
          <p>電波測定結果確認・データ入力修正・検収作業等</p>
        </div>
      </div>

      <div className={`${styles.range} ${mobileStyles.range}`}>
      <h1>建築・施工管理</h1>
        <div
          className={`${styles.range_discription} ${mobileStyles.range_discription}`}
        >
          

          <h3>建築分野</h3>
          <p>
          共同住宅・オフィスビル・公共・医療福祉・商業施設
          </p>
          <h3>土木分野</h3>
          <p>
          道路・上下水道・ダム・河川・造園
          </p>

          <h3>設備・電気分野</h3>
          <p>
          一般電気電線・自動制御設備・防災消化設備・給排水衛生設備
          </p>

          <h3>プラント分野</h3>
          <p>石油化学・各種発電・食品・医療品・非破壊検査</p>

          <h3>建物管理分野</h3>
          <p>物流倉庫・商業施設・オフィスビル・マンション</p>
        </div>
      </div>



      <div className={`${styles.range} ${mobileStyles.range}`}>
        <h1>セキュリティ</h1>
        <div
          className={`${styles.range_discription} ${mobileStyles.range_discription}`}
        >
          <h3>セキュリティツールの保守運用</h3>
          <p>
            CWAT（クライアント情報漏洩防止システム）、i-Filter(WEBデータアップロード規制サービス)、LogStrage(ログ統合管理サービス)等
          </p>
        </div>
      </div>

      <div className={`${styles.range} ${mobileStyles.range}`}>
        <h1>ネットワーク</h1>
        <div
          className={`${styles.range_discription} ${mobileStyles.range_discription}`}
        >
          <h3>ネットワーク機器保守運用</h3>
          <p>修理・交換・点検</p>
          <h3>サーバネットワーク機器保守運用</h3>
          <p>
            クライアント端末の管理、権限の付与・削除、ネットワーク不具合対応
          </p>
        </div>
      </div>

     
      <div className={`${styles.range} ${mobileStyles.range}`}>
      <h1>ヘルプデスク</h1>
        <div
          className={`${styles.range_discription} ${mobileStyles.range_discription}`}
        >
         
          <h3>アプリ操作説明</h3>
          <h3>ネットワークトラブル対応</h3>
          <h3>PCキッティング（Mac/Windows）</h3>
          <h3>アプリケーション導入</h3>
        </div>
      </div>

    
      <div className={`${styles.range} ${mobileStyles.range}`}>
      <h1>その他</h1>
        <div
          className={`${styles.range_discription} ${mobileStyles.range_discription}`}
        >
        
          <h3>ERPパッケージ導入PM補佐</h3>
          <p>議事録作成、進捗管理、資料作成</p>
          <h3>社内情報システム管理</h3>
          <p>
            貸し出し端末の管理、アプリ使用方法の説明、故障端末の交換手配、配布資料作成
          </p>
        </div>
      </div>
    </div>
  );
};
