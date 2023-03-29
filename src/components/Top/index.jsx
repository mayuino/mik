import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import { Header } from '../Header'
import { MenuBar } from '../MenuBar'
import mobileStyles from '@/styles/mobile.module.css'



export const Top = () => {
  return(
   
    <div className={`${styles.top_image_frame} ${mobileStyles.top_image_frame}`}>
      <Header/>
      <MenuBar />

      </div>
   
  

  )
}

