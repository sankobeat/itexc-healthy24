import React from "react";
import SignUpCSS from "./SignUp.module.css";

interface SignUpProps {
  toggleSignIn: () => void;
}

const SignUp: React.FC<SignUpProps> = ({ toggleSignIn }) => {
  return (
    <div className={SignUpCSS.container}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          marginBottom: "16px",
        }}
      >
        <h1 className={SignUpCSS.form__header}>Sign Up your account</h1>
        <img
          src="/images/handsup.png"
          className={SignUpCSS.header__emoji}
          alt="handsup__emoji"
        />
      </div>
      <p style={{ opacity: 0.7, marginBottom: "25px" }}>
        Let’s Enter your data to continue use healthy 24 services
      </p>
      <div className={SignUpCSS.form__container}>
        <form>
          <div className={SignUpCSS.form__groupe}>
            <label>Fullname</label>
            <input type="text" required placeholder="Enter Your name here" />
          </div>
          <div className={SignUpCSS.form__groupe}>
            <label>Email</label>
            <input type="text" required placeholder="Enter Your email here" />
          </div>
          <div className={SignUpCSS.form__groupe}>
            <label>Passowrd</label>
            <input
              type="password"
              required
              placeholder="Enter Your Password here"
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              margin: "15px 0",
            }}
          >
            <input type="checkbox" required />
            <span style={{ fontSize: 12 }}>
              by sign up to healthy 24 you agree all term and condition
            </span>
          </div>

          <button className={SignUpCSS.btn} type="submit">
            Sign Up
          </button>
        </form>
      </div>
      <p
        style={{
          textAlign: "center",
          fontWeight: 600,
          fontSize: "18px",
          color: "#192252",
          margin: "25px 0",
        }}
      >
        or
      </p>
      <div className={SignUpCSS.socials__buttons}>
        <button className={SignUpCSS.social__btn}>
          <img
            src="images/Google.png"
            alt="google icon"
            style={{ marginRight: "10px" }}
          />
          Sign Up with Google
        </button>
        <button className={SignUpCSS.social__btn}>
          <img
            src="images/Facebook.png"
            alt="google icon"
            style={{ marginRight: "10px" }}
          />
          Sign Up with Facebook
        </button>
      </div>

      <p style={{ textAlign: "center" }}>
        You Already have account?{" "}
        <span onClick={toggleSignIn} style={{ cursor: "pointer" }}>
          Sign In
        </span>
      </p>
    </div>
  );
};

export default SignUp;
