import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link';
import { useCallback, useContext, useEffect, useState } from 'react';
import useSWR , { useSWRConfig } from 'swr';
import { JobDataContext } from './recruit_searchbox';


export const RecruitJobCard = (props) =>{
   
  const {id} = props;
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR("/recruit.json", fetcher);
  const { cache } = useSWRConfig();
  const [recruitObject, setRecruitObject] = useState();

  const updateRecruitObject = useCallback(() => {
      if(data){
            const job_no = id -1;
            const object = data[job_no];
            setRecruitObject( object);
            console.log(object)
            }
  },[data, id]);

  useEffect(() => {
      updateRecruitObject();
    }, [updateRecruitObject,id,data]);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  console.log("data:",data);
  console.log("recroutObject",recruitObject);

  return(
   <div>
        <ul className={styles.recruit_mid_content}>
    
               <li className={styles.recruit_mid_items}> 
                <h3>{recruitObject?.name}</h3>
                
                <hr/>
                <h4>年棒　{recruitObject?.payment.payment_low}円〜{recruitObject?.payment.payment_high}円</h4>
                <h4>勤務地　{recruitObject?.area.job_area}</h4>
                <h4>勤務時間　{recruitObject?.time.job_start_time}〜{recruitObject?.time.job_end_time}</h4>
                <p>最終更新日：{recruitObject?.koushin_bi}</p>
               </li>

          </ul>
        </div>
  )
}