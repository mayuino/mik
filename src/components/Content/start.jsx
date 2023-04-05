import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import { Content_Ex_LINE } from './ex_LINE'
import mobileStyles from '@/styles/mobile.module.css'
import { useEffect, useState } from 'react'

export const ContentStart = () =>{

  const [isPhone, setIsPhone] = useState(false);

  useEffect(() => {
    const handleResize = ( ) => {
      setIsPhone(window.innerWidth <= 600);
    };
    handleResize();
    window.addEventListener('resize',handleResize);
    return () => window.removeEventListener('resize', handleResize);
  },[])
  return(
    <div className={`${styles.content_main_frame} ${mobileStyles.content_main_frame}`}>
      <div className={`${styles.content_main_title} ${mobileStyles.content_main_title}`}>
        <h1>ITエンジニアへの第一歩は、MIKからはじめよう。</h1>
       
      </div>
      <div className={`${styles.hajime_content} ${mobileStyles.hajime_content}`}>
        {isPhone ? null :
      <Image
            src="/LIFE.jpg"
            alt="engineer_first"
            width={500}
            height={1600}
            className={styles.panflet_image}
            />}
      <div className={`${styles.main_message} ${mobileStyles.main_message}`}>
    <h2>人材派遣会社からキャリアを<br/>スタートして、本当に大丈夫？</h2>
    <p >ひと昔前なら、派遣会社からスタートなんて、<br/>ありえなかったかもしれません。<br/><br/><br/>
        雇い止めや、派遣切り、といったネガティブなイメージが巷を賑わせていたのも、もう15年も前のこと。<br/>
        <br/>気づけばコロナ禍が終わりに近づき、<br/>どうやら時代も世界も変わってきたようです。 <br/>
        <br/>大企業も、副業を許容し始め、早期定年退職制度が始まっています。<br/><br/><br/>どんな企業も、新卒から定年まで面倒を見る余裕がなくなってきたのです。<br/><br/><br/>
        大企業が終身雇用の前提のもとで採用してきた長期的な社員育成は、今や貴重な若い時期の学びの時間を奪っている弊害にすらなっています。
        </p>
        <h2>派遣会社からのスタートで、経験速度をスピードアップ</h2>
        <p>
        その点、派遣会社からスタートすれば、半年、1年、2年といった短いスパンで、複数のプロジェクトに携わることが可能です。<br/><br/><br/>もちろん、「できるところから」始めることができます。<br/><br/>
        <br/>
        「働き盛り」のいい時期を、単調で不毛な作業で終わらせず、もっとアクティブに、「やりがいのある仕事」を追求することができます。<br/><br/><br/>
        そんな中で、MIKは、あなたに「自分で人生を選び取れる人になってほしい」と思っています。<br/><br/><br/>
        自分で責任を持って、人生を選び、その楽しさ、生きがい、やりがいを感じ取ってほしいのです。<br/><br/><br/>
        これからの時代は、自分の価値観にしたがって、自分の求めるライフスタイルが実現するように、自ら人生を設計していかなければなりません。<br/><br/><br/>
        ひと昔前のように、企業の命令に従って、流されていくだけでは、行き止まりにたどり着くだけです。<br/><br/><br/>
        主体的に人生を選ぶことは、従来型の企業の中では、
        なかなか難しいかもしれません。<br/></p>
      
        <h2>広い視野は、これからの「武器」</h2>
        <p>そこであえて、「人材派遣会社」から、
        様々な企業にエンジニアとして、経験を積みにいくことで、
        あなたのなかには、「エンジニアとしてのスキル」だけでなく「様々な仕事のやりかた」、「いろいろな考えの人がいること」を経験として知ることになります。
        <br/><br/><br/>
        つまり、一つの企業にずっとしがみついているより、ずっと広い視野が得られ、エンジニアとして「どこでも通用する力」を手に入れることができるのです。
        <br/><br/><br/>
        これからの時代、「広い視野」は武器です。
        <br/>一つの考えに縛られず、さまざまな角度からものを見て、考えることができれば、進む道は増えるばかりです。<br/></p>
        <h2>独立も視野に</h2>
        <p>
        MIKは、「どこでも通用する、広い視野のIT人材」を育てることを目標としています。<br/><br/><br/>
        MIKは、あなたが「広い視野をもつIT人材」になることができれば、MIKで継続的に働くことも、どこかの企業内の主メンバーとして働いても、独立しても良いと思っています。
        MIKから素晴らしいエンジニアになって、巣立っていってください。<br/><br/><br/>
        MIKの精神を引き継ぎ、自分なりの幸せをみつけたエンジニアが日本中、世界中で活躍することを願っています。
      
      </p>
      </div>
      </div>
  
       </div>

  )
}