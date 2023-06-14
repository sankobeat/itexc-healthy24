import React from "react";
import SignInCSS from "./SignIn.module.css";

interface SignInProps {
  toggleSignUp: () => void;
}

const SignIn: React.FC<SignInProps> = ({ toggleSignUp }) => {
  return (
    <div className={SignInCSS.container}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          marginBottom: "16px",
        }}
      >
        <h1 className={SignInCSS.form__header}>Welcome To Healthy 24</h1>
        <img
          src="/images/perfect_emoji.png"
          className={SignInCSS.header__emoji}
          alt="perfect_emoji"
        />
      </div>
      <p style={{ opacity: 0.7, marginBottom: "65px" }}>
        Enter your account to use healthy 24 service
      </p>
      <div className={SignInCSS.form__container}>
        <form>
          <div className={SignInCSS.form__groupe}>
            <label>Email</label>
            <input type="text" required placeholder="Enter Your email here" />
          </div>
          <div className={SignInCSS.form__groupe}>
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
              justifyContent: "space-between",
              margin: "15px 0",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <input type="checkbox" required style={{ marginRight: "10px" }} />
              <span style={{ fontSize: 12 }}>Remember me</span>
            </div>
            <div>
              <a style={{ fontSize: 12 }} href="#forgotpassword">
                Forget password
              </a>
            </div>
          </div>

          <button className={SignInCSS.btn} type="submit">
            Sign In
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

      <div className={SignInCSS.socials__buttons}>
        <button className={SignInCSS.social__btn}>
          <img
            src="images/Google.png"
            alt="google icon"
            style={{ marginRight: "10px" }}
          />
          Sign Up with Google
        </button>
        <button className={SignInCSS.social__btn}>
          <img
            src="images/Facebook.png"
            alt="google icon"
            style={{ marginRight: "10px" }}
          />
          Sign Up with Facebook
        </button>
      </div>

      <p style={{ textAlign: "center", marginTop: "25px" }}>
        You don’thave account ?{" "}
        <span onClick={toggleSignUp} style={{ cursor: "pointer" }}>
          Sign up
        </span>
      </p>
    </div>
  );
};

export default SignIn;
