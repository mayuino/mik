import styles from '@/styles/Home.module.css'
import Image from 'next/image'



export const Top = () => {
  return(
        <>
        <div className={styles.top_image}>
        <Image
            src="/top_image_naritai.svg"
            alt="main title window naritai"
            width={1343}
            height={567}
          />
        </div>
  
</>
  )
}

