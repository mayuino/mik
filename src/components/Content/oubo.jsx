import { addInfo } from "@/state/recruite_info";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useSWR, { useSWRConfig } from "swr";
import mobileStyles from "@/styles/mobile.module.css";

export const Content_Oubo = () => {
  const router = useRouter();
  const { id, job_title } = router.query;
  const decodedTItle = decodeURI(job_title);
  //const Info = useSelector ((state) => state.info);
  // console.log(Info);
  const dispatch = useDispatch();
  const Info = useSelector((state) => state.info);
  const newInfo = Info[Info.length - 1];

  const [values, setValues] = useState(newInfo);

  const genders = ["男性", "女性", "その他"];

  function generateBirthYearOptions() {
    const currentYear = new Date().getFullYear();
    const finishYear = currentYear - 18;
    const startYear = currentYear - 65;
    const birth_years = [];

    for (let year = finishYear; year >= startYear; year--) {
      birth_years.push(year);
    }

    return birth_years.map((year) => (
      <option key={year} value={year}>
        {year}
      </option>
    ));
  }

  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const days = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const [postcode, setPostcode] = useState();
  const [address, setAddress] = useState();

  const handlePostCode = async (e) => {
    const newPostcode = e.target.value;
    //if (e.key === "Enter") {
    //  setValues({ ...values, post_code: newPostcode });
    //}

    if (newPostcode.length === 7) {
      try {
        const res = await fetch(
          `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${newPostcode}`
        );
        const data = await res.json();

        if (data.status === 200) {
          const { address1, address2, address3 } = data.results[0];
          const newAddress = `${address1}${address2}${address3}`;
          setValues({ ...values, address: newAddress });
        } else {
          setValues({ ...values, address: "" });
        }
      } catch (err) {
        console.error(err);
        setValues({ ...values, address: "" });
      }
    }
  };

  const handleCopy = (e) => {
    e.preventDefault();
    const selectedText = window.getSelection().toString();
    e.clipboardData.setData("text/plain", selectedText);
  };

  const handleCheck = (e) => {
    const { name, value, checked } = e.target;
    if (
      name === "it_pass" ||
      name === "kihon" ||
      name === "ouyou" ||
      name === "network_specialist" ||
      name === "data_specialist" ||
      name === "anzenkakuho" ||
      name === "cloud_practitioner" ||
      name === "developer_associate" ||
      name === "SAA" ||
      name === "sysopes" ||
      name === "devops" ||
      name === "SAP" ||
      name === "advanced_networking" ||
      name == "data_analytics" ||
      name === "database_specialty" ||
      name === "machine_learning" ||
      name === "security_specialty" ||
      name === "sap_on_aws" ||
      name === "linuc_1" ||
      name === "linuc_2" ||
      name === "linuc_3" ||
      name === "lpic_1" ||
      name === "lpic_2" ||
      name === "lpic_3" ||
      name === "ccna" ||
      name === "ccna" ||
      name === "ccnp" ||
      name === "cct" ||
      name === "ccie" ||
      name === "oracle_bronze" ||
      name === "oracle_silver" ||
      name === "oracle_gold" ||
      name === "oracle_platinum" ||
      name === "azure_fundamentals" ||
      name === "azure_administrator" ||
      name === "comptia_cloud" ||
      name === "comptia_network" ||
      name === "ipa_other" ||
      name === "aws_other" ||
      name === "ms_other" ||
      name === "comptia_other"
    ) {
      setValues({
        ...values,
        qualification: {
          ...values.qualification,
          [name]: !values.qualification[name],
        },
      });
    } else if (
      name === "ruby" ||
      name === "swift" ||
      name === "php" ||
      name === "html_css" ||
      name === "go" ||
      name === "sql" ||
      name === "perl" ||
      name === "kotolin" ||
      name === "cobol" ||
      name === "c_prus" ||
      name === "c_sharp" ||
      name === "python" ||
      name === "java" ||
      name === "javascript"
    ) {
      setValues({
        ...values,
        experienced_language: {
          ...values.experienced_language,
          [name]: !values.experienced_language[name],
        },
      });
    } else if (
      name === "ipa_other_qualification" ||
      name === "aws_other_qualification" ||
      name === "ms_other_qualification" ||
      name === "comptia_other_qualification"
    ) {
      setValues({
        ...values,
        qualification: { ...values.qualification, [name]: value },
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const [email, setEmail] = useState("");
  const [confirm_email, setConfirmEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addInfo(values));
    const reEncodedJobTitle = encodeURI(decodedTItle);
    router.push({
      pathname: `/recruit/${id}/oubo/confirm`,
      query: { job_title: reEncodedJobTitle },
    });
    console.log({ values });
  };

  useEffect(() => {
    setValues(newInfo);
  }, []);

  return (
    <div className={`${styles.content_oubo} ${mobileStyles.content_oubo}`}>
      <div
        className={`${styles.oubo_top_title} ${mobileStyles.oubo_top_title}`}
      >
        <h4>JOBNo.{id}</h4>
        <h1>{decodedTItle}</h1>
      </div>
      <div className={`${styles.oubo_top_bar} ${mobileStyles.oubo_top_bar}`}>
        応募内容
      </div>
    
      <form
        type="submit"
        onSubmit={handleSubmit}
        className={`${styles.oubo_form} ${mobileStyles.oubo_form}`}
      >



        <div
          className={`${styles.oubo_input_wrapper} ${mobileStyles.oubo_input_wrapper}`}
        >
          <div className={`${styles.oubo_name} ${mobileStyles.oubo_name}`}>
            <h4>お名前</h4>
            <input
              value={values.name_sei}
              name="name_sei"
              placeholder="山田"
              className={`${styles.oubo_input_text} ${mobileStyles.oubo_input_text}`}
              onChange={handleChange}
              type="text"
            />
            <input
              value={values.name_mei}
              name="name_mei"
              placeholder="太郎"
              onChange={handleChange}
              className={`${styles.oubo_input_text} ${mobileStyles.oubo_input_text}`}
              type="text"
            />
          </div>
          <div className={`${styles.oubo_name} ${mobileStyles.oubo_name}`}>
            <h4>お名前(ふりがな)</h4>
            <div>
              <input
                className={`${styles.oubo_input_text} ${mobileStyles.oubo_input_text}`}
                placeholder="やまだ"
                name="name_sei_kana"
                value={values.name_sei_kana}
                onChange={handleChange}
                type="text"
              />
            </div>
            <div>
              <input
                className={`${styles.oubo_input_text} ${mobileStyles.oubo_input_text}`}
                value={values.name_mei_kana}
                onChange={handleChange}
                placeholder="たろう"
                type="text"
                name="name_mei_kana"
              />
            </div>
          </div>

          <div
            className={`${styles.oubo_input_mail} ${mobileStyles.oubo_input_mail}`}
          >
            <h4>ご連絡先メールアドレス</h4>
            <input
              value={values.mail}
              onChange={handleChange}
              placeholder="mik@mail.com"
              className={`${styles.oubo_input_text} ${mobileStyles.oubo_input_text}`}
              type="email"
              name="mail"
              required
            />
          </div>
          <h4>性別</h4>
          <select
            className={`${styles.oubo_input_text} ${mobileStyles.oubo_input_text}`}
            value={values.gender}
            onChange={handleChange}
            type="text"
            name="gender"
          >
            <option value="">選択してください</option>
            {genders.map((gender) => (
              <option key={gender} value={gender}>
                {gender}
              </option>
            ))}
          </select>

          <h4>生年月日</h4>

          <select
            value={values.birth_year}
            onChange={handleChange}
            className={`${styles.oubo_input_text} ${mobileStyles.oubo_input_text}`}
            type="text"
            name="birth_year"
          >
            <option value="">選択してください</option>
            {generateBirthYearOptions()}
          </select>
          <label>年</label>

          <select
            className={`${styles.oubo_input_text} ${mobileStyles.oubo_input_text}`}
            value={values.birth_month}
            onChange={handleChange}
            type="text"
            name="birth_month"
          >
            <option value="">選択してください</option>
            {months.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
          <label>月</label>

          <select
            className={`${styles.oubo_input_text} ${mobileStyles.oubo_input_text}`}
            value={values.birth_day}
            onChange={handleChange}
            type="text"
            name="birth_day"
          >
            <option value="">選択してください</option>
            {days.map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>
          <label>日</label>
          <h4>郵便番号</h4>
          <input
            value={values.post_code}
            placeholder="0000000"
            onChange={handleChange}
            className={`${styles.oubo_input_text} ${mobileStyles.oubo_input_text}`}
            type="text"
            name="post_code"
          />
          <button
            type="button"
            value={values.post_code}
            onClick={handlePostCode}
          >
            検索
          </button>

          <h4>現住所</h4>
          <input
            value={values.address}
            onChange={handleChange}
            className={`${styles.oubo_input_long} ${mobileStyles.oubo_input_long}`}
            type="text"
            name="address"
          />

          <h4>携帯電話番号</h4>
          <input
            value={values.phone}
            onChange={handleChange}
            placeholder="090-0000-0000"
            className={`${styles.oubo_input_text} ${mobileStyles.oubo_input_text}`}
            type="text"
            name="phone"
          />

          <h4>就業経験の有無</h4>
          <select
            className={`${styles.oubo_input_text} ${mobileStyles.oubo_input_text}`}
            value={values.work_experience}
            type="text"
            onChange={handleChange}
            name="work_experience"
          >
            <option value="">選択してください</option>
            <option value="あり">あり</option>
            <option value="なし">なし</option>
          </select>

          <h4>転職経験</h4>
          <select
            className={`${styles.oubo_input_text} ${mobileStyles.oubo_input_text}`}
            value={values.job_change_experience}
            type="text"
            onChange={handleChange}
            name="job_change_experience"
          >
            <option value="">選択してください</option>
            <option value="なし">なし</option>
            <option value="1回">1回</option>
            <option value="2回以上">2回以上</option>
          </select>

          <h4>IT業界経験</h4>
          <select
            className={`${styles.oubo_input_text} ${mobileStyles.oubo_input_text}`}
            value={values.it}
            type="text"
            onChange={handleChange}
            name="it"
          >
            <option value="">選択してください</option>
            <option value="未経験">未経験</option>
            <option value="経験あり(2年未満)">経験あり(2年未満)</option>
            <option value="経験あり(2年〜5年)">経験あり(2年〜5年)</option>
            <option value="経験あり(5年〜10年)">経験あり(5年〜10年)</option>
            <option value="経験あり(10年以上)">経験あり(10年以上)</option>
          </select>

          <h4>フリーランス経験</h4>
          <p>
            これまでにIT関連のお仕事をフリーランスで行ったことはありますか。
          </p>
          <select
            className={`${styles.oubo_input_text} ${mobileStyles.oubo_input_text}`}
            type="text"
            value={values.freelance}
            onChange={handleChange}
            name="freelance"
          >
            <option value="">選択してください</option>
            <option value="なし">なし</option>
            <option value="あり">あり</option>
          </select>

          <h4>これまでに経験されたお仕事やスキル</h4>
          <textarea
            className={`${styles.oubo_input_area} ${mobileStyles.oubo_input_area}`}
            value={values.experienced_skill}
            placeholder="例）これまでは、〇〇の販売や営業などに携わり、○○の売り上げに貢献してきました。等"
            type="text"
            name="experienced_skill"
            onCopy={handleCopy}
            onChange={handleChange}
          />

          <h4>保有資格・スキル</h4>
          <p>お持ちの資格にチェックをつけてください。</p>
          <div
            className={`${styles.shikaku_wrapper} ${mobileStyles.shikaku_wrapper}`}
          >
            <h5>IPA</h5>
            <ul>
              <li className={styles.search_items}>
                <input
                  type="checkbox"
                  name="it_pass"
                  checked={values.qualification?.it_pass}
                  onChange={handleCheck}
                ></input>
                <label for="areas">ITパスポート</label>
              </li>
              <li className={styles.search_items}>
                <input
                  type="checkbox"
                  name="kihon"
                  checked={values.qualification?.kihon}
                  onChange={handleCheck}
                ></input>
                <label for="areas">基本情報技術者</label>
              </li>
              <li className={styles.search_items}>
                <input
                  type="checkbox"
                  name="ouyou"
                  checked={values.qualification?.ouyou}
                  onChange={handleCheck}
                ></input>
                <label for="areas">応用情報技術者</label>
              </li>
              <li className={styles.search_items}>
                <input
                  type="checkbox"
                  name="network_specialist"
                  checked={values.qualification?.network_specialist}
                  onChange={handleCheck}
                ></input>
                <label for="areas">ネットワークスペシャリスト</label>
              </li>
              <li className={styles.search_items}>
                <input
                  type="checkbox"
                  name="data_specialist"
                  checked={values.qualification?.data_specialist}
                  onChange={handleCheck}
                ></input>
                <label for="areas">データベーススペシャリスト</label>
              </li>
              <li className={styles.search_items}>
                <input
                  type="checkbox"
                  name="anzenkakuho"
                  checked={values.qualification?.anzenkakuho}
                  onChange={handleCheck}
                ></input>
                <label for="areas">情報処理安全確保支援士</label>
              </li>
              <li className={styles.search_items}>
                <input
                  type="checkbox"
                  name="ipa_other"
                  checked={values.qualification?.ipa_other}
                  onChange={handleCheck}
                ></input>
                <label for="areas">その他</label>
                <input
                  className={`${styles.oubo_input_text} ${mobileStyles.oubo_input_text}`}
                  type="text"
                  value={values.qualification?.ipa_other_qualification}
                  name="ipa_other_qualification"
                  onChange={handleCheck}
                />
              </li>
            </ul>
            <h5>AWS認定</h5>
            <ul>
              <li className={styles.search_items}>
                <input
                  type="checkbox"
                  name="cloud_practitioner"
                  checked={values.qualification.cloud_practitioner}
                  onChange={handleCheck}
                ></input>
                <label for="areas">Cloud Practitioner Foundational</label>
              </li>
              <li className={styles.search_items}>
                <input
                  type="checkbox"
                  name="developer_associate"
                  checked={values.qualification.developer_associate}
                  onChange={handleCheck}
                ></input>
                <label for="areas">Developer Associate</label>
              </li>
              <li className={styles.search_items}>
                <input
                  type="checkbox"
                  name="SAA"
                  checked={values.qualification.SAA}
                  onChange={handleCheck}
                ></input>
                <label for="areas">Solution Architect Associate</label>
              </li>
              <li className={styles.search_items}>
                <input
                  type="checkbox"
                  name="sysopes"
                  checked={values.qualification.sysopes}
                  onChange={handleCheck}
                ></input>
                <label for="areas">SysOps Administrator Associate </label>
              </li>
              <li className={styles.search_items}>
                <input
                  type="checkbox"
                  name="devops"
                  checked={values.qualification.devops}
                  onChange={handleCheck}
                ></input>
                <label for="areas">DevOps Engineer Professional</label>
              </li>
              <li className={styles.search_items}>
                <input
                  type="checkbox"
                  name="SAP"
                  checked={values.qualification.SAP}
                  onChange={handleCheck}
                ></input>
                <label for="areas">Solutions Architect Professional</label>
              </li>
              <li className={styles.search_items}>
                <input
                  type="checkbox"
                  name="advanced_networking"
                  checked={values.qualification?.advanced_networking}
                  onChange={handleCheck}
                ></input>
                <label for="areas">AdvancedNetworking Specialty</label>
              </li>
              <li className={styles.search_items}>
                <input
                  type="checkbox"
                  name="data_analytics"
                  checked={values.qualification?.data_analytics}
                  onChange={handleCheck}
                ></input>
                <label for="areas">Data Analytics Specialty</label>
              </li>
              <li className={styles.search_items}>
                <input
                  type="checkbox"
                  name="database_specialty"
                  checked={values.qualification?.database_specialty}
                  onChange={handleCheck}
                ></input>
                <label for="areas">Database Specialty</label>
              </li>
              <li className={styles.search_items}>
                <input
                  type="checkbox"
                  name="machine_learning"
                  checked={values.qualification?.machine_learning}
                  onChange={handleCheck}
                ></input>
                <label for="areas">Machine Learning Specialty</label>
              </li>
              <li className={styles.search_items}>
                <input
                  type="checkbox"
                  name="security_specialty"
                  checked={values.qualification?.security_specialty}
                  onChange={handleCheck}
                ></input>
                <label for="areas">Security Specialty</label>
              </li>
              <li className={styles.search_items}>
                <input
                  type="checkbox"
                  name="sap_on_aws"
                  checked={values.qualification?.sap_on_aws}
                  onChange={handleCheck}
                ></input>
                <label for="areas">SAP on AWS Specialty</label>
              </li>
              <li className={styles.search_items}>
                <input
                  type="checkbox"
                  name="aws_other"
                  checked={values.qualification.aws_other}
                  onChange={handleCheck}
                ></input>
                <label for="areas">その他</label>
                <input
                  className={styles.oubo_input_text}
                  type="text"
                  name="aws_other_qualification"
                  value={values.qualification.aws_other_qualification}
                  onChange={handleCheck}
                />
              </li>
            </ul>

            <h5>LinuC</h5>
            <ul>
              <li className={styles.search_items}>
                <input
                  type="checkbox"
                  name="linuc_1"
                  checked={values.qualification?.linuc_1}
                  onChange={handleCheck}
                ></input>
                <label for="areas">LinuC-1</label>
              </li>
              <li className={styles.search_items}>
                <input
                  type="checkbox"
                  name="linuc_2"
                  checked={values.qualification?.linuc_2}
                  onChange={handleCheck}
                ></input>
                <label for="areas">LinuC-2</label>
              </li>
              <li className={styles.search_items}>
                <input
                  type="checkbox"
                  name="linuc_3"
                  checked={values.qualification?.linuc_3}
                  onChange={handleCheck}
                ></input>
                <label for="areas">LinuC-3</label>
              </li>
            </ul>

            <h5>Linux Professional Institute</h5>
            <ul>
              <li className={styles.search_items}>
                <input
                  type="checkbox"
                  name="lpic_1"
                  checked={values.qualification?.lpic_1}
                  onChange={handleCheck}
                ></input>
                <label for="areas">LPIC-1</label>
              </li>
              <li className={styles.search_items}>
                <input
                  type="checkbox"
                  name="lpic_2"
                  checked={values.qualification?.lpic_2}
                  onChange={handleCheck}
                ></input>
                <label for="areas">LPIC-2</label>
              </li>
              <li className={styles.search_items}>
                <input
                  type="checkbox"
                  name="lpic_3"
                  checked={values.qualification?.lpic_3}
                  onChange={handleCheck}
                ></input>
                <label for="areas">LPIC-3</label>
              </li>
            </ul>

            <h5>Cisco</h5>
            <ul>
              <li className={styles.search_items}>
                <input
                  type="checkbox"
                  name="ccna"
                  checked={values.qualification?.ccna}
                  onChange={handleCheck}
                ></input>
                <label for="areas">CCNA</label>
              </li>
              <li className={styles.search_items}>
                <input
                  type="checkbox"
                  name="ccnp"
                  checked={values.qualification?.ccnp}
                  onChange={handleCheck}
                ></input>
                <label for="areas">CCNP</label>
              </li>
              <li className={styles.search_items}>
                <input
                  type="checkbox"
                  name="cct"
                  checked={values.qualification?.cct}
                  onChange={handleCheck}
                ></input>
                <label for="areas">CCT</label>
              </li>
              <li className={styles.search_items}>
                <input
                  type="checkbox"
                  name="ccie"
                  checked={values.qualification?.ccie}
                  onChange={handleCheck}
                ></input>
                <label for="areas">CCIE</label>
              </li>
            </ul>

            <h5>Oracle</h5>
            <ul>
              <li className={styles.search_items}>
                <input
                  type="checkbox"
                  name="oracle_bronze"
                  checked={values.qualification?.oracle_bronze}
                  onChange={handleCheck}
                ></input>
                <label for="areas">Oracle Master Bronze</label>
              </li>
              <li className={styles.search_items}>
                <input
                  type="checkbox"
                  name="oracle_silver"
                  checked={values.qualification?.oracle_silver}
                  onChange={handleCheck}
                ></input>
                <label for="areas">Oracle Master Silver</label>
              </li>
              <li className={styles.search_items}>
                <input
                  type="checkbox"
                  name="oracle_gold"
                  checked={values.qualification?.oracle_gold}
                  onChange={handleCheck}
                ></input>
                <label for="areas">Oracle Master Gold</label>
              </li>
              <li className={styles.search_items}>
                <input
                  type="checkbox"
                  name="oracle_platinum"
                  checked={values.qualification?.oracle_platinum}
                  onChange={handleCheck}
                ></input>
                <label for="areas">Oracle Master Platinum</label>
              </li>
            </ul>

            <h5>Microsoft</h5>
            <ul>
              <li className={styles.search_items}>
                <input
                  type="checkbox"
                  name="azure_fundamentals"
                  checked={values.qualification?.azure_fundamentals}
                  onChange={handleCheck}
                ></input>
                <label for="areas">Azure Fundamentals</label>
              </li>
              <li className={styles.search_items}>
                <input
                  type="checkbox"
                  name="azure_administrator"
                  checked={values.qualification.azure_administrator}
                  onChange={handleCheck}
                ></input>
                <label for="areas">Azure Administrator Associate</label>
              </li>
              <li className={styles.search_items}>
                <input
                  type="checkbox"
                  name="ms_other"
                  checked={values.qualification.ms_other}
                  onChange={handleCheck}
                ></input>
                <label for="areas">その他</label>
                <input
                  className={`${styles.oubo_input_text} ${mobileStyles.oubo_input_text}`}
                  type="text"
                  value={values.qualification.ms_other_qualification}
                  name="ms_other_qualification"
                  onChange={handleCheck}
                />
              </li>
            </ul>

            <h5>CompTIA</h5>
            <ul>
              <li className={styles.search_items}>
                <input
                  type="checkbox"
                  i
                  name="comptia_cloud"
                  checked={values.qualification?.comptia_cloud}
                  onChange={handleCheck}
                ></input>
                <label for="areas">CompTIA　Cloud+</label>
              </li>
              <li className={styles.search_items}>
                <input
                  type="checkbox"
                  name="comptia_network"
                  checked={values.qualification?.comptia_network}
                  onChange={handleCheck}
                ></input>
                <label for="areas">CompTIA Network+</label>
              </li>
              <li className={styles.search_items}>
                <input
                  type="checkbox"
                  name="comptia_other"
                  checked={values.qualification?.comptia_other}
                  onChange={handleCheck}
                ></input>
                <label for="areas">その他</label>
                <input
                  className={`${styles.oubo_input_text} ${mobileStyles.oubo_input_text}`}
                  type="text"
                  value={values.qualification.comptia_other_qualification}
                  name="comptia_other_qualification"
                  onChange={handleCheck}
                />
              </li>
            </ul>
          </div>

          <h4>経験言語</h4>
          <ul
            className={`${styles.language_select} ${mobileStyles.language_select}`}
          >
            <li className={styles.search_items}>
              <input
                type="checkbox"
                name="ruby"
                checked={values.experienced_language.ruby}
                onChange={handleCheck}
              ></input>
              <label for="areas">Ruby</label>
            </li>
            <li className={styles.search_items}>
              <input
                type="checkbox"
                name="swift"
                checked={values.experienced_language.swift}
                onChange={handleCheck}
              ></input>
              <label for="areas">Swift</label>
            </li>
            <li className={styles.search_items}>
              <input
                type="checkbox"
                name="php"
                checked={values.experienced_language.php}
                onChange={handleCheck}
              ></input>
              <label for="areas">PHP</label>
            </li>
            <li className={styles.search_items}>
              <input
                type="checkbox"
                name="html_css"
                checked={values.experienced_language.html_css}
                onChange={handleCheck}
              ></input>
              <label for="areas">HTML/CSS</label>
            </li>
            <li className={styles.search_items}>
              <input
                type="checkbox"
                name="go"
                checked={values.experienced_language.go}
                onChange={handleCheck}
              ></input>
              <label for="areas">Go</label>
            </li>
            <li className={styles.search_items}>
              <input
                type="checkbox"
                name="sql"
                checked={values.experienced_language.sql}
                onChange={handleCheck}
              ></input>
              <label for="areas">SQL</label>
            </li>
            <li className={styles.search_items}>
              <input
                type="checkbox"
                name="perl"
                checked={values.experienced_language.perl}
                onChange={handleCheck}
              ></input>
              <label for="areas">Perl</label>
            </li>
            <li className={styles.search_items}>
              <input
                type="checkbox"
                name="kotolin"
                checked={values.experienced_language.kotolin}
                onChange={handleCheck}
              ></input>
              <label for="areas">Kotolin</label>
            </li>
            <li className={styles.search_items}>
              <input
                type="checkbox"
                name="cobol"
                checked={values.experienced_language.cobol}
                onChange={handleCheck}
              ></input>
              <label for="areas">COBOL</label>
            </li>
            <li className={styles.search_items}>
              <input
                type="checkbox"
                name="c_prus"
                checked={values.experienced_language.c_prus}
                onChange={handleCheck}
              ></input>
              <label for="areas">C++</label>
            </li>
            <li className={styles.search_items}>
              <input
                type="checkbox"
                name="c_sharp"
                checked={values.experienced_language.c_sharp}
                onChange={handleCheck}
              ></input>
              <label for="areas">C#</label>
            </li>
            <li className={styles.search_items}>
              <input
                type="checkbox"
                name="python"
                checked={values.experienced_language.python}
                onChange={handleCheck}
              ></input>
              <label for="areas">Python</label>
            </li>
            <li className={styles.search_items}>
              <input
                type="checkbox"
                name="java"
                checked={values.experienced_language.java}
                onChange={handleCheck}
              ></input>
              <label for="areas">Java</label>
            </li>
            <li className={styles.search_items}>
              <input
                type="checkbox"
                name="javascript"
                checked={values.experienced_language.javascript}
                onChange={handleCheck}
              ></input>
              <label for="areas">JavaScript</label>
            </li>
          </ul>
        </div>
              <div className={`${styles.kakunin_button_wrapper} ${mobileStyles.kakunin_button_wrapper}`}>
        <button
          type="submit"
          className={`${styles.oubo_kakunin_button} ${mobileStyles.oubo_kakunin_button}`}
        >
          応募内容を確認する
        </button>
        </div>
      </form>
    </div>
  );
};
