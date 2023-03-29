import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import mobileStyles from "@/styles/mobile.module.css";

export function Content_Inputdata() {
  const [status, setStatus] = useState("");
  const Info = useSelector((state) => state.info);
  const newInfo = Info[Info.length - 1];
  console.log({ newInfo });
  const [qualifications, setQualification] = useState([]);
  const [languages, setLanguages] = useState([]);

  const router = useRouter();
  const { id, job_title } = router.query;
  const decodedTitle = decodeURI(job_title);

  useEffect(() => {
    if (newInfo.qualification.length !== 0) {
      const newQualification = [];
      if (newInfo.qualification.it_pass) {
        newQualification.push("ITパスポート");
      }
      if (newInfo.qualification.kihon) {
        newQualification.push("基本情報処理技術者");
      }
      if (newInfo.qualification.ouyou) {
        newQualification.push("応用情報処理技術者");
      }
      if (newInfo.qualification.network_specialist) {
        newQualification.push("ネットワークスペシャリスト");
      }
      if (newInfo.qualification.data_specialist) {
        newQualification.push("データスペシャリスト");
      }
      if (newInfo.qualification.anzenkakuho) {
        newQualification.push("安全確保支援士");
      }
      if (newInfo.qualification.ipa_other) {
        newQualification.push(
          `IPA認定その他資格( ${newInfo.qualification.ipa_other_qualification})`
        );
      }
      if (newInfo.qualification.cloud_practitioner) {
        newQualification.push("AWS認定 Cloud Practitioner");
      }
      if (newInfo.qualification.developer_associate) {
        newQualification.push("AWS認定 Developer Associate");
      }
      if (newInfo.qualification.SAA) {
        newQualification.push("AWS認定 Solutions Architect Associate");
      }
      if (newInfo.qualification.sysopes) {
        newQualification.push("AWS認定 SysOps Administrator Associate");
      }
      if (newInfo.qualification.devops) {
        newQualification.push("AWS認定 Developer Associate");
      }
      if (newInfo.qualification.SAP) {
        newQualification.push("AWS認定 Solution Architect Professional");
      }

      if (newInfo.qualification.advanced_networking) {
        newQualification.push("AWS認定 Advanced Networking specialty");
      }
      if (newInfo.qualification.data_analytics) {
        newQualification.push("AWS認定 Data Analytisc Specialty");
      }
      if (newInfo.qualification.database_specialty) {
        newQualification.push("AWS認定 Database Specialty");
      }
      if (newInfo.qualification.machine_learning) {
        newQualification.push("AWS認定 Machine Learning Specialty");
      }
      if (newInfo.qualification.security_specialty) {
        newQualification.push("AWS認定 Security Specialty");
      }
      if (newInfo.qualification.sap_on_aws) {
        newQualification.push("AWS認定 SAP on AWS");
      }
      if (newInfo.qualification.aws_other) {
        newQualification.push(
          `AWS認定 ${newInfo.qualification.aws_other_qualification}`
        );
      }
      if (newInfo.qualification.linuc_1) {
        newQualification.push("LinuC-1");
      }
      if (newInfo.qualification.linuc_2) {
        newQualification.push("LinuC-2");
      }
      if (newInfo.qualification.linuc_3) {
        newQualification.push("LinuC-3");
      }
      if (newInfo.qualification.lpic_1) {
        newQualification.push("LPIC-1");
      }
      if (newInfo.qualification.lpic_2) {
        newQualification.push("LPIC-2");
      }
      if (newInfo.qualification.lpic_3) {
        newQualification.push("LPIC-3");
      }
      if (newInfo.qualification.ccna) {
        newQualification.push("CCNA");
      }
      if (newInfo.qualification.ccnp) {
        newQualification.push("CCNP");
      }
      if (newInfo.qualification.cct) {
        newQualification.push("CCT");
      }
      if (newInfo.qualification.ccie) {
        newQualification.push("CCIE");
      }
      if (newInfo.qualification.oracle_bronze) {
        newQualification.push("Oracle Master Bronze");
      }
      if (newInfo.qualification.oracle_silver) {
        newQualification.push("Oracle Master Silver");
      }
      if (newInfo.qualification.oracle_gold) {
        newQualification.push("Oracle Master Gold");
      }
      if (newInfo.qualification.oracle_platinum) {
        newQualification.push("Oracle Master Platinum");
      }
      if (newInfo.qualification.azure_fundamentals) {
        newQualification.push("Microsoft認定 Azure fundamentals");
      }
      if (newInfo.qualification.azure_administrator) {
        newQualification.push("Microsoft認定 Azure administrator");
      }
      if (newInfo.qualification.ms_other) {
        newQualification.push(
          `Microsoft認定その他資格（${newInfo.qualification.ms_other_qualification})`
        );
      }
      if (newInfo.qualification.comptia_cloud) {
        newQualification.push("CompTIA Cloud+");
      }
      if (newInfo.qualification.comptia_network) {
        newQualification.push("CompTIA Network+");
      }
      if (newInfo.qualification.comptia_other) {
        newQualification.push(
          `CompTIAその他資格(${newInfo.qualification.comptia_other_qualification})`
        );
      }

      setQualification(newQualification);
    }

    if (newInfo.experienced_language.length !== 0) {
      const newLanguage = [];
      if (newInfo.experienced_language.ruby) {
        newLanguage.push("Ruby");
      }
      if (newInfo.experienced_language.swift) {
        newLanguage.push("Swift");
      }
      if (newInfo.experienced_language.php) {
        newLanguage.push("PHP");
      }
      if (newInfo.experienced_language.html_css) {
        newLanguage.push("HTML/CSS");
      }
      if (newInfo.experienced_language.go) {
        newLanguage.push("GO");
      }
      if (newInfo.experienced_language.sql) {
        newLanguage.push("SQL");
      }
      if (newInfo.experienced_language.perl) {
        newLanguage.push("Perl");
      }
      if (newInfo.experienced_language.kotolin) {
        newLanguage.push("Kotolin");
      }
      if (newInfo.experienced_language.cobol) {
        newLanguage.push("COBOL");
      }
      if (newInfo.experienced_language.c_prus) {
        newLanguage.push("C++");
      }
      if (newInfo.experienced_language.c_sharp) {
        newLanguage.push("C#");
      }
      if (newInfo.experienced_language.python) {
        newLanguage.push("Python");
      }
      if (newInfo.experienced_language.java) {
        newLanguage.push("JAVA");
      }
      if (newInfo.experienced_language.javascript) {
        newLanguage.push("JavaScript");
      }

      setLanguages(newLanguage);
    }
  }, [newInfo]);

  const handleMailSend = (e) => {
    e.preventDefault();

    emailjs.init("xrcF5cpdui-OQMKFc");

    const templateParams = {
      job_number: id,
      job_title: decodedTitle,
      name_sei: newInfo.name_sei,
      name_mei: newInfo.name_mei,
      name_sei_kana: newInfo.name_sei_kana,
      name_mei_kana: newInfo.name_mei_kana,
      mail: newInfo.mail,
      gender: newInfo.gender,
      birth_year: newInfo.birth_year,
      birth_month: newInfo.birth_month,
      birth_day: newInfo.birth_day,
      post_code: newInfo.post_code,
      address: newInfo.address,
      phone: newInfo.phone,
      work_experience: newInfo.work_experience,
      job_change_experience: newInfo.job_change_experience,
      it: newInfo.it,
      freelance: newInfo.freelance,
      experienced_skill: newInfo.experienced_skill,
      qualification: qualifications,
      experienced_language: languages,
    };

    emailjs
      .send(
        "service_uiwu73k",
        "template_v5b3sj5",
        templateParams,
        "xrcF5cpdui-OQMKFc"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("success");
        },
        (err) => {
          setStatus("failed");
          console.log("FAILED...", err);
        }
      );
  };

  const handleReturn = () => {
    router.back();
  };

  const handleReturnTop = () => {
    router.push("/");
  }

  return (
    <>
      {status === "" && (
        <div
          className={`${styles.content_confirm} ${mobileStyles.content_confirm}`}
        >
          <div
            className={`${styles.oubo_top_title} ${mobileStyles.oubo_top_title}`}
          >
            <h1>{decodedTitle}</h1>
          </div>
          <div
            className={`${styles.oubo_confirm_bar} ${mobileStyles.oubo_confirm_bar}`}
          >
            <h3>入力内容の確認</h3>
          </div>

          <div
            className={`${styles.oubo_data_wrapper} ${mobileStyles.oubo_data_wrapper}`}
          >
            <div className={`${styles.oubo_item} ${mobileStyles.oubo_item}`}>
              <h4>お名前</h4>
              <div className={`${styles.oubo_data} ${mobileStyles.oubo_data}`}>
                {newInfo.name_sei} {newInfo.name_mei}
              </div>
            </div>
            <div className={`${styles.oubo_item} ${mobileStyles.oubo_item}`}>
              <h4>お名前（ふりがな）</h4>
              <div className={`${styles.oubo_data} ${mobileStyles.oubo_data}`}>
                {newInfo.name_sei_kana} {newInfo.name_mei_kana}
              </div>
            </div>

            <div className={`${styles.oubo_item} ${mobileStyles.oubo_item}`}>
              <h4>ご連絡先メールアドレス</h4>
              <div className={`${styles.oubo_data} ${mobileStyles.oubo_data}`}>
                {newInfo.mail}
              </div>
            </div>
            <div className={`${styles.oubo_item} ${mobileStyles.oubo_item}`}>
              <h4>性別</h4>
              <div className={`${styles.oubo_data} ${mobileStyles.oubo_data}`}>
                {newInfo.gender}
              </div>
            </div>
            <div className={`${styles.oubo_item} ${mobileStyles.oubo_item}`}>
              <h4>生年月日</h4>
              <div className={`${styles.oubo_data} ${mobileStyles.oubo_data}`}>
                {newInfo.birth_year}年 {newInfo.birth_month}月{" "}
                {newInfo.birth_day}日
              </div>
            </div>
            <div className={`${styles.oubo_item} ${mobileStyles.oubo_item}`}>
              <h4>郵便番号</h4>
              <div className={`${styles.oubo_data} ${mobileStyles.oubo_data}`}>
                {newInfo.post_code}
              </div>
            </div>
            <div className={`${styles.oubo_item} ${mobileStyles.oubo_item}`}>
              <h4>現住所</h4>
              <div className={`${styles.oubo_data} ${mobileStyles.oubo_data}`}>
                {newInfo.address}
              </div>
            </div>
            <div className={`${styles.oubo_item} ${mobileStyles.oubo_item}`}>
              <h4>携帯電話番号</h4>
              <div className={`${styles.oubo_data} ${mobileStyles.oubo_data}`}>
                {newInfo.phone}
              </div>
            </div>
            <div className={`${styles.oubo_item} ${mobileStyles.oubo_item}`}>
              <h4>就業経験の有無</h4>
              <div className={`${styles.oubo_data} ${mobileStyles.oubo_data}`}>
                {newInfo.work_experience}
              </div>
            </div>
            <div className={`${styles.oubo_item} ${mobileStyles.oubo_item}`}>
              <h4>転職経験</h4>
              <div className={`${styles.oubo_data} ${mobileStyles.oubo_data}`}>
                {newInfo.job_change_experience}
              </div>
            </div>
            <div className={`${styles.oubo_item} ${mobileStyles.oubo_item}`}>
              <h4>IT業界経験</h4>
              <div className={`${styles.oubo_data} ${mobileStyles.oubo_data}`}>
                {newInfo.it}
              </div>
            </div>
            <div className={`${styles.oubo_item} ${mobileStyles.oubo_item}`}>
              <h4>フリーランス経験</h4>
              <div className={`${styles.oubo_data} ${mobileStyles.oubo_data}`}>
                {newInfo.freelance}
              </div>
            </div>
            <div className={`${styles.oubo_item} ${mobileStyles.oubo_item}`}>
              <h4>経験されたお仕事やスキル</h4>
              <div className={`${styles.oubo_data} ${mobileStyles.oubo_data}`}>
                {newInfo.experienced_skill}
              </div>
            </div>

            <div className={`${styles.oubo_item} ${mobileStyles.oubo_item}`}>
              <h4>保有資格</h4>
              <ul className={`${styles.oubo_data} ${mobileStyles.oubo_data}`}>
                {qualifications.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className={`${styles.oubo_item} ${mobileStyles.oubo_item}`}>
              <h4>経験言語</h4>
              <ul className={`${styles.oubo_data} ${mobileStyles.oubo_data}`}>
                {languages.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className={`${styles.button_area} ${mobileStyles.button_area}`}>
            <button
              onClick={handleReturn}
              className={`${styles.fix_button} ${mobileStyles.fix_button}`}
            >
              修正する
            </button>
            <button
              onClick={handleMailSend}
              className={`${styles.oubo_button} ${mobileStyles.oubo_button}`}
            >
              この内容で送信する
            </button>
          </div>
        </div>
      )}
      {status === "success" && (
        <div className={`${styles.thanks_wrapper} ${mobileStyles.thanks_wrapper}`}>
          <div className={`${styles.thanks} ${mobileStyles.thanks}`}>
            <h1>ご応募ありがとうございました。</h1>
            <p>
              一両日中には、弊社担当者よりご連絡をさせていただきますので、しばらくお待ちください。
            </p>
            <button
              className={`${styles.oubo_kakunin_button} ${mobileStyles.oubo_kakunin_button}`}
              onClick={handleReturnTop}
            >
              TOPにもどる
            </button>
          </div>
        </div>
      )}
      {status === "failed" && (
        <div className={`${styles.content_oubo} ${mobileStyles.content_oubo}`}>
          <div className={`${styles.thanks} ${mobileStyles.thanks}`}>
            <p>
              送信に失敗しました。申し訳ございませんが、求人の選択より再度やり直しをお願いいたします。
            </p>
          </div>
        </div>
      )}
    </>
  );
}
