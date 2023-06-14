import React, { useState } from "react";
import ForgetPasswordCSS from "./ForgetPassword.module.css";
import OtpInput from "react-otp-input";

const ForgetPassword: React.FC = () => {
  const [otp, setOtp] = useState<string>("");
  return (
    <div className={ForgetPasswordCSS.container}>
      {/* <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          marginBottom: "16px",
        }}
      >
        <h1 className={ForgetPasswordCSS.form__header}>Forget Password</h1>
        <img
          src="/images/lock_emoji.png"
          className={ForgetPasswordCSS.header__emoji}
          alt="lock_emoji"
        />
      </div>
      <p style={{ opacity: 0.7, marginBottom: "25px" }}>
        Input your email to recover password to access Healthey 24
      </p>
      <div className={ForgetPasswordCSS.form__container}>
        <form>
          <div className={ForgetPasswordCSS.form__groupe}>
            <label>Email</label>
            <input type="text" required placeholder="Enter Your email here" />
          </div>
          <button className={ForgetPasswordCSS.btn} type="submit">
            Continue
          </button>
        </form>
      </div> */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          marginBottom: "16px",
        }}
      >
        <h1 className={ForgetPasswordCSS.form__header}>OTP Verification</h1>
        <img
          src="/images/mail_emoji.png"
          className={ForgetPasswordCSS.header__emoji}
          alt="mail_emoji"
        />
      </div>
      <p style={{ color: "#848FAC", marginBottom: "50px" }}>
        Our team already sent you an email in your inbox{" "}
        <span style={{ color: "#2A3563", fontWeight: 600 }}>
          seddikwalid@gamil.com{" "}
        </span>
        to Access back your account
      </p>
      <div className={ForgetPasswordCSS.opt__container}>
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          containerStyle={ForgetPasswordCSS.opt__container}
          inputStyle={{
            width: "50px",
            height: "50px",
            padding: "5px",
            borderRadius: "10px",
            border: " 0.5px solid rgba(2, 2, 2, 0.2)",
            fontSize: "18px",
          }}
          renderInput={(props) => <input {...props} />}
        />
      </div>
      <button className={ForgetPasswordCSS.btn} type="submit">
        Continue
      </button>
      <p
        style={{
          marginTop: "25px",
          textAlign: "center",
          fontSize: "12px",
        }}
      >
        *didn’t receive verificatin code ? Resend
      </p>
    </div>
  );
};

export default ForgetPassword;
