import styles from '@/styles/Home.module.css'
import Image from 'next/image'

export const Content_system = () => {
  return(


     
    <div className={styles.system_frame}  >
    <div className={styles.system_title}>
    <h1>MIKの独自制度</h1>
    <p>MIKは、エンジニアのための様々な制度を用意しています。</p>
    </div>
        <div className={styles.system}>
          <h2>社員評価システム</h2>
          <div className={styles.system_content}>
          <Image
              src="/hyouka_icon.png"
              alt="line icon"
              width={240}
              height={240}
            />
          <div className={styles.system_discription}>
          <p>MIKの社員評価は、「毎日の業務」がそのまま「他の現場に移っても【使える】スキル」となる、客観的かつ汎用的な評価システムを採用しています。就業中の業務ごとに細かく評価を行いますので、現状の自分の到達度や、今後何を目指すべきかも把握しやすくなります。</p>
          </div>
          </div>
        </div>


        <div className={styles.system}>
          <h2>社内貢献ポイント</h2>
          <div className={styles.system_content}>
          <Image
              src="/kouken_point.jpg"
              alt="line icon"
              width={240}
              height={240}
            />
          <div className={styles.system_discription}>
          <p>社内イベントの参加や、アンケートの投票、友人の紹介、派遣先の紹介など、さまざまな部分で会社に貢献してくれた方にポイントを贈呈する制度です。ポイントは、自分のタイミングでインセンティブとして受け取ることができます。</p>
          </div>
          </div>
        </div>
        <div className={styles.system}>
          <h4>社員応援イベント</h4>
          <h2>「MIKがんばったMVP」</h2>
        
          <div className={styles.system_content}>
          <Image
              src="/mvp.jpg"
              alt="line icon"
              width={240}
              height={240}
            />
          <div className={styles.system_discription}>
          <p>日頃から知り合うことのない派遣会社内で、お互いの仕事を知り、どんなことを頑張ったか、どんなふうに切り抜けたか、どんなことを学んだか、を発表し、社内の投票で、もっとも「がんばったMVP」を決める制度です。MVPにはインセンティブがあります。</p>
          </div>
          </div>
        </div>



        </div> 

  )
}
