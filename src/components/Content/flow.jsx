import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import mobileStyles from "@/styles/mobile.module.css";

export const ContentFlow = () =>{
  return(
    <div className={`${styles.content_flow} ${mobileStyles.content_flow}`}>

      <div className={`${styles.flow_title} ${mobileStyles.flow_title}`}><h1>採用までの流れ</h1><p>弊社では、仕事探しから、就業まで以下のような流れで進みます。</p></div>
       <div className={`${styles.step_frame} ${mobileStyles.step_frame}`}>
        <h1>STEP1 気になる仕事を見つける</h1>
        <div className={`${styles.step_content} ${mobileStyles.step_content}`}>
        <Image
              src="/toumeisei.jpg"
              alt="line icon"
              width={180}
              height={160}
              className={`${styles.step_image} ${mobileStyles.step_image}`}
          />
          <div className={`${styles.step_discription} ${mobileStyles.step_discription}`}>
            <p>弊社で募集している業務をご確認いただき、気になるお仕事を見つけてください。</p>
          </div>
        </div>
      </div>
     
      <div className={`${styles.flow_down} ${mobileStyles.flow_down}`}>
      <Image src="/triangle_down.svg" alt="Asan" width={200} height={111} ></Image>
      </div>

        <div className={`${styles.step_frame} ${mobileStyles.step_frame}`}>
        <h1>STEP2 応募する</h1>
        <div className={`${styles.step_content} ${mobileStyles.step_content}`}>
        <Image
              src="/mail.jpg"
              alt="line icon"
              width={120}
              height={160}
              className={`${styles.step_image} ${mobileStyles.step_image}`}
          />
          <div className={`${styles.step_discription} ${mobileStyles.step_discription}`}><p>気になるお仕事がございましたら、応募するボタンよりご応募ください。
            ご応募を確認いたしましたら、弊社担当よりご連絡を差し上げますので、面談の日時を設定してください。

            ※面談は、オンライン、もしくは対面で行います。
          </p>
          </div>
        </div>
        </div>

        <div className={`${styles.flow_down} ${mobileStyles.flow_down}`}>
      <Image src="/triangle_down.svg" alt="Asan" width={200} height={111} />
      </div>

        <div className={`${styles.step_frame} ${mobileStyles.step_frame}`}>
        <h1>STEP3 面接</h1>
        <div className={`${styles.step_content} ${mobileStyles.step_content}`}>
        <Image
              src="/mendan1on1.jpg"
              alt="line icon"
              width={180}
              height={140}
              className={`${styles.step_image} ${mobileStyles.step_image}`}
          />
          <div className={`${styles.step_discription} ${mobileStyles.step_discription}`}><p>面談の日時の5分前には、指定の場所に来所いただくか、もしくは指定のURLに接続してお待ちください。
          時間となりましたら、面接担当との面接を行います。
          ご自身の希望や、これまでにやってきたことなどを自信を持ってお話しください。

          ※面接時間は約30分〜1時間程度となります。
          </p>
          </div>
        </div>
        </div>

        <div className={`${styles.flow_down} ${mobileStyles.flow_down}`}>
      <Image src="/triangle_down.svg" alt="Asan" width={200} height={111} />
      </div>

        <div className={`${styles.step_frame} ${mobileStyles.step_frame}`}>
        <h1>STEP4 入社</h1>
        <div className={`${styles.step_content} ${mobileStyles.step_content}`}>
        <Image
              src="/keieijin.jpg"
              alt="line icon"
              width={120}
              height={160}
              className={`${styles.step_image} ${mobileStyles.step_image}`}
          />
          <div className={`${styles.step_discription} ${mobileStyles.step_discription}`}><p>面接の結果、合格となった方は、入社手続きを行い、同時に派遣先の選定も行なっていきます。
          </p>
          </div>
        </div>
        </div>

        <div className={`${styles.flow_down} ${mobileStyles.flow_down}`}>
      <Image src="/triangle_down.svg" alt="sankaku" width={200} height={111}  />
      </div>

        <div className={`${styles.step_frame} ${mobileStyles.step_frame}`}>
        <h1>STEP5 入社研修</h1>
        <div className={`${styles.step_content} ${mobileStyles.step_content}`}>
        <Image
              src="/syain.jpg"
              alt="line icon"
              width={120}
              height={120}
              className={`${styles.step_image} ${mobileStyles.step_image}`}
          />
          <div className={`${styles.step_discription} ${mobileStyles.step_discription}`}><p>派遣先が決定し、業務開始日が決まりましたら、業務開始日の数日前、または業務開始日当日に、1時間程度の入社研修を行い、派遣先でのマナーや、必要事項をお伝えします。
          </p>
          </div>
        </div>
        </div>

        <div className={`${styles.flow_down} ${mobileStyles.flow_down}`}>
      <Image src="/triangle_down.svg" alt="Asan" width={200} height={111} />
      </div>

        <div className={`${styles.step_frame} ${mobileStyles.step_frame}`}>
        <h1>STEP6 配属</h1>
        <div className={`${styles.step_content} ${mobileStyles.step_content}`}>
        <Image
              src="/tukue.jpg"
              alt="line icon"
              width={120}
              height={150}
              className={`${styles.step_image} ${mobileStyles.step_image}`}
          />
          <div className={`${styles.step_discription} ${mobileStyles.step_discription}`}><p>派遣先のクライアント企業でのお仕事を開始します。クライアント先での指示に従い、業務を行います。
          </p>
          </div>
        </div>
        </div>

        <div className={`${styles.flow_down} ${mobileStyles.flow_down}`}>
      <Image src="/triangle_down.svg" alt="Asan" width={200} height={111} />
      </div>

        <div className={`${styles.step_frame} ${mobileStyles.step_frame}`}>
        <h1>STEP7 フォロー</h1>
        <div className={`${styles.step_content} ${mobileStyles.step_content}`}>
        <Image
              src="/follow_image.jpg"
              alt="line icon"
              width={150}
              height={150}
              className={`${styles.step_image} ${mobileStyles.step_image}`}
          />
          <div className={`${styles.step_discription} ${mobileStyles.step_discription}`}><p>配属後は、MIKの営業社員が就業状況の確認や、困っていることがないか、など定期的にフォローします。
            社内LINEでも、会社に逐一連絡を取ることができます。
          </p>
          </div>
        </div>
        </div>
        </div>

  )
}