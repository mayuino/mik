import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import mobileStyles from "@/styles/mobile.module.css";
import { useRouter } from "next/router";

export const Content_Inquiry = () => {
  //環境変数の取得方法がわからないため、置いておく。
  // const serviceID = process.env.REACT_APP_SERVICE_ID;
  // const templateID = process.env.REACT_APP_TEMPLATE_ID;
  // const public_key = process.env.REACT_APP_PUBLIC_KEY;

  // console.log({serviceID});

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
      name_sei:name_sei,
      name_mei:name_mei,
      name_sei_kana:name_sei_kana,
      name_mei_kana:name_mei_kana,
      mail: mail,
      phone:phone,
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
  }

  return (
    <>
     {status === "" && (
    <div
      className={`${styles.content_inquiry} ${mobileStyles.content_inquiry}`}
    >
      <div className={`${styles.inquiry_title} ${mobileStyles.inquiry_title}`}>
        <h1>MIKに聞いてみよう</h1>
        </div>

      <div className={`${styles.inquiry_form} ${mobileStyles.inquiry_form}`}>
        <h2>電話で相談</h2>
        <h3>011-299-7361</h3>
      </div>

      <div className={`${styles.inquiry_form} ${mobileStyles.inquiry_form}`}>
        <h2>LINEで相談</h2>
        <Image
          src="/LINE_QR.svg"
          alt="line QR code"
          width={180}
          height={180}
          className={`${styles.line_QR} ${mobileStyles.line_QR}`}
        />
      </div>

      <form onSubmit={handleSubmit} className={`${styles.inquiry_form} ${mobileStyles.inquiry_form}`}>
   
          <h2>フォームで相談</h2>
          <div
            className={`${styles.inquiry_input} ${mobileStyles.inquiry_input}`}
          >
            <h4>MIKに聞きたいことを記載してください。</h4>
            <textarea
              className={`${styles.inquiry_textarea} ${mobileStyles.inquiry_textarea}`}
              name="postContent"
              value={post_content}
              onChange={(e) => setPostContent(e.target.value)}
              rows={10}
              cols={100}
              placeholder="例）これまでに、IT業界を経験したことがありません。
              私でもできる仕事はありますか？"
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
           
                <input
                  className={`${styles.oubo_input_text} ${mobileStyles.oubo_input_text}`}
                  placeholder="やまだ"
                  name="name_sei_kana"
                  value={name_sei_kana}
                  onChange={(e) => setNameSeiKana(e.target.value)}
                  type="text"
                />
          
         
                <input
                  className={`${styles.oubo_input_text} ${mobileStyles.oubo_input_text}`}
                  value={name_mei_kana}
                  onChange={(e) => setNameMeiKana(e.target.value)}
                  placeholder="たろう"
                  type="text"
                  name="name_mei_kana"
                />
      
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

            <h4>携帯電話番号</h4>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="090-0000-0000"
              className={`${styles.oubo_input_text} ${mobileStyles.oubo_input_text}`}
              type="text"
              name="phone"
            />

            <button
              className={`${styles.oubo_kakunin_button} ${mobileStyles.oubo_kakunin_button}`}
              type="submit"
            >
              送信
            </button>
          </div>
  
      </form>
    </div>)}
     {status === "success" && (
      <div className={`${styles.thanks_wrapper} ${mobileStyles.thanks_wrapper}`}>
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
