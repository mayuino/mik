import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import mobileStyles from "@/styles/mobile.module.css";
import { useRouter } from "next/router";

export const Content_Contact = () => {
  //環境変数の取得方法がわからないため、置いておく。
  // const serviceID = process.env.REACT_APP_SERVICE_ID;
  // const templateID = process.env.REACT_APP_TEMPLATE_ID;
  // const public_key = process.env.REACT_APP_PUBLIC_KEY;

  // console.log({serviceID});

  const [company, setCompany] = useState("");
  const [department, setDepartment] = useState("");
  const [name_sei, setNameSei] = useState("");
  const [name_mei, setNameMei] = useState("");
  const [name_sei_kana, setNameSeiKana] = useState("");
  const [name_mei_kana, setNameMeiKana] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [post_content, setPostContent] = useState("");

  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.init("xrcF5cpdui-OQMKFc");

    const templateParams = {
      company:company,
      department:department,
      name_sei: name_sei,
      name_mei: name_mei,
      name_sei_kana: name_sei_kana,
      name_mei_kana: name_mei_kana,
      mail: mail,
      phone: phone,
      message: post_content,
    };

    emailjs
      .send(
        "service_uiwu73k",
        "template_xenxnsl",
        templateParams,
        "xrcF5cpdui-OQMKFc"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("success");
        },
        (err) => {
          console.log("FAILED...", err);
          setStatus("failed");
        }
      );
  };

  const router = useRouter();
  const handleReturnTop = () => {
    router.push("/");
  };

  return (
    <>
      {status === "" && (
        <div
          className={`${styles.content_contact} ${mobileStyles.content_contact}`}
        >
          <div
            className={`${styles.contact_title} ${mobileStyles.contact_title}`}
          >
            <h1>お問合せ</h1>
            <p>
              弊社へのお問い合わせは、お電話または、下記フォームよりご連絡いただきますようお願いいたします。
            </p>
          </div>

          <div
            className={`${styles.inquiry_form} ${mobileStyles.inquiry_form}`}
          >
            <h2>電話</h2>
            <h3>011-299-7361</h3>
          </div>

          <form
            onSubmit={handleSubmit}
            className={`${styles.inquiry_form} ${mobileStyles.inquiry_form}`}
          >
            <h2>お問合せフォーム</h2>

            <div
              className={`${styles.inquiry_input} ${mobileStyles.inquiry_input}`}
            >
            <h4>会社名</h4>
            <input
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="ABC株式会社"
              className={`${styles.oubo_input_text} ${mobileStyles.oubo_input_text}`}
              type="text"
              name="company"
            />


            <h4>部署</h4>
            <input
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              placeholder="総務部"
              className={`${styles.oubo_input_text} ${mobileStyles.oubo_input_text}`}
              type="text"
              name="department"
            />

           
              <div className={`${styles.oubo_name} ${mobileStyles.oubo_name}`}>
                <h4>お名前</h4>
                <input
                  value={name_sei}
                  name="name_sei"
                  placeholder="山田"
                  className={`${styles.oubo_input_text} ${mobileStyles.oubo_input_text}`}
                  onChange={(e) => setNameSei(e.target.value)}
                  type="text"
                />
                <input
                  value={name_mei}
                  name="name_mei"
                  placeholder="太郎"
                  onChange={(e) => setNameMei(e.target.value)}
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
                    value={name_sei_kana}
                    onChange={(e) => setNameSeiKana(e.target.value)}
                    type="text"
                  />
                </div>
                <div>
                  <input
                    className={`${styles.oubo_input_text} ${mobileStyles.oubo_input_text}`}
                    value={name_mei_kana}
                    onChange={(e) => setNameMeiKana(e.target.value)}
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
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
                  placeholder="mik@mail.com"
                  className={`${styles.oubo_input_text} ${mobileStyles.oubo_input_text}`}
                  type="email"
                  name="mail"
                  required
                />
              </div>

              <h4>ご連絡先電話番号</h4>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="090-0000-0000"
                className={`${styles.oubo_input_text} ${mobileStyles.oubo_input_text}`}
                type="text"
                name="phone"
              />

              <h4>お問合せ内容</h4>
              <textarea
                className={`${styles.inquiry_textarea} ${mobileStyles.inquiry_textarea}`}
                name="postContent"
                value={post_content}
                onChange={(e) => setPostContent(e.target.value)}
                rows={10}
                cols={100}
                placeholder="お問合せ内容をこちらにご記入ください。"
              />

              <button
                className={`${styles.oubo_kakunin_button} ${mobileStyles.oubo_kakunin_button}`}
                type="submit"
              >
                送信
              </button>
            </div>
          </form>
        </div>
      )}
      {status === "success" && (
        <div
          className={`${styles.thanks_wrapper} ${mobileStyles.thanks_wrapper}`}
        >
          <div className={`${styles.thanks} ${mobileStyles.thanks}`}>
            <h1>お問合せ内容を送信しました。</h1>
            <p>
              弊社担当者よりご連絡をさせていただきますので、恐れ入れいますが、しばらくお待ちください。
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
};
