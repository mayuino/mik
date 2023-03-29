import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import React from "react";
import useSWR, { useSWRConfig } from "swr";
import mobileStyles from "@/styles/mobile.module.css";

export const Content_Recruit_Detail = (props) => {
  const { id } = props;
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR("/recruit.json", fetcher);
  const { cache } = useSWRConfig();
  const [recruitObject, setRecruitObject] = useState();

  const updateRecruitObject = useCallback(() => {
    if (data) {
      const job_no = id - 1;
      const object = data[job_no];
      setRecruitObject(object);
      console.log(object);
    }
  }, [data, id]);

  useEffect(() => {
    updateRecruitObject();
  }, [updateRecruitObject, id, data]);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  console.log("data:", data);
  console.log("recroutObject", recruitObject);

  const job_title = recruitObject?.name;
  const encodedTitle = encodeURI(job_title);
  return (
    <>
      <div
        className={`${styles.content_recruit_detail} ${mobileStyles.content_recruit_detail}`}
      >
        <div
          className={`${styles.recruit_detail_title} ${mobileStyles.recruit_detail_title}`}
        >
          <h1>{recruitObject?.name}</h1>
          <Link
            href={{
              pathname: `/recruit/${id}/oubo`,
              query: { job_title: encodedTitle },
            }}
            className={`${styles.oubo_button} ${mobileStyles.oubo_button}`}
          >
            応募する
          </Link>
        </div>

        <div
          className={`${styles.detail_content} ${mobileStyles.detail_content}`}
        >
          <div
            className={`${styles.detail_content_title} ${mobileStyles.detail_content_title}`}
          >
            <h3>仕事内容</h3>
          </div>
          <p>{recruitObject?.job_detail?.gaiyou}</p>

          <h5>{recruitObject?.job_detail?.midashi}</h5>
          <ul>
            <li>
              <p>{recruitObject?.job_detail?.job1}</p>
            </li>
            <li>
              <p>{recruitObject?.job_detail?.job2}</p>
            </li>
            <li>
              <p>{recruitObject?.job_detail?.job3}</p>
            </li>
            <li>
              <p>{recruitObject?.job_detail?.job4}</p>
            </li>
          </ul>
          <p>{recruitObject?.job_detail?.hosoku}</p>
        </div>

        {recruitObject?.environment?.OS && (
          <div
            className={`${styles.detail_content} ${mobileStyles.detail_content}`}
          >
            <div
              className={`${styles.detail_content_title} ${mobileStyles.detail_content_title}`}
            >
              <h3>環境</h3>
            </div>
            <ul>
              <li>
                <p>OS:{recruitObject?.environment?.OS}</p>
              </li>
              <li>
                <p>言語：{recruitObject?.environment?.language}</p>
              </li>
              <li>
                <p>フレームワーク:{recruitObject?.environment?.framework}</p>
              </li>
              <li>
                <p>DB:{recruitObject?.environment?.DB}</p>
              </li>
            </ul>
          </div>
        )}

        <div
          className={`${styles.detail_content} ${mobileStyles.detail_content}`}
        >
          <div
            className={`${styles.detail_content_title} ${mobileStyles.detail_content_title}`}
          >
            <ul>
              <li>
                <h3>{recruitObject?.condition1}</h3>
              </li>
              <li>
                <h3>{recruitObject?.condition2}</h3>
              </li>
            </ul>
          </div>

          <div
            className={`${styles.detail_content} ${mobileStyles.detail_content}`}
          >
            <div
              className={`${styles.detail_content_title} ${mobileStyles.detail_content_title}`}
            >
              <h3>募集人数・募集背景</h3>
            </div>
            <p>{recruitObject?.bosyu_background}</p>
          </div>

          <div
            className={`${styles.detail_content} ${mobileStyles.detail_content}`}
          >
            <div
              className={`${styles.detail_content_title} ${mobileStyles.detail_content_title}`}
            >
              <h3>勤務地</h3>
            </div>
            <p>{recruitObject?.area?.job_area}</p>
            <p>◎{recruitObject?.area?.job_area_hosoku1}</p>
            <p>※{recruitObject?.area?.job_area_hosoku2}</p>
          </div>

          <div
            className={`${styles.detail_content} ${mobileStyles.detail_content}`}
          >
            <div
              className={`${styles.detail_content_title} ${mobileStyles.detail_content_title}`}
            >
              <h3>勤務時間</h3>
            </div>
            <p>
              {recruitObject?.time?.job_start_time} ～{" "}
              {recruitObject?.time?.job_end_time} <br />◎
              {recruitObject?.time?.job_time_hosoku}
            </p>
          </div>

          <div
            className={`${styles.detail_content} ${mobileStyles.detail_content}`}
          >
            <div
              className={`${styles.detail_content_title} ${mobileStyles.detail_content_title}`}
            >
              <h3>給与</h3>
            </div>
            <p>
              年俸　{recruitObject?.payment?.payment_low}　～　
              {recruitObject?.payment?.payment_high}
              <br />◎{recruitObject?.payment?.payment_hosoku}
            </p>
          </div>

          <div
            className={`${styles.detail_content} ${mobileStyles.detail_content}`}
          >
            <div
              className={`${styles.detail_content_title} ${mobileStyles.detail_content_title}`}
            >
              <h3>休日休暇</h3>
            </div>
            <ul>
              <li>
                <p>{recruitObject?.holiday?.jouken1}</p>
              </li>
              <li>
                <p>{recruitObject?.holiday?.jouken2}</p>
              </li>
              <li>
                <p>{recruitObject?.holiday?.jouken3}</p>
              </li>
              <li>
                <p>{recruitObject?.holiday?.jouken4}</p>
              </li>
            </ul>
          </div>

          <div
            className={`${styles.detail_content} ${mobileStyles.detail_content}`}
          >
            <div
              className={`${styles.detail_content_title} ${mobileStyles.detail_content_title}`}
            >
              <h3>福利厚生</h3>
            </div>

            <ul>
              <li>
                <p>{recruitObject?.fukuri?.fukuri1}</p>
              </li>
              <li>
                <p>{recruitObject?.fukuri?.fukuri2}</p>
              </li>
              <li>
                <p>{recruitObject?.fukuri?.fukuri3}</p>
              </li>
              <li>
                <p>{recruitObject?.fukuri?.fukuri4}</p>
              </li>
              <li>
                <p>{recruitObject?.fukuri?.fukuri5}</p>
              </li>
              <li>
                <p>{recruitObject?.fukuri?.fukuri6}</p>
              </li>
              <li>
                <p>{recruitObject?.fukuri?.soudan}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`${styles.oubo_button_wrapper} ${mobileStyles.oubo_button_wrapper}`}
      >
        <Link
          href={{
            pathname: `/recruit/${id}/oubo`,
            query: { job_title: encodedTitle },
          }}
          className={`${styles.oubo_button} ${mobileStyles.oubo_button}`}
        >
          応募する
        </Link>
      </div>
    </>
  );
};
