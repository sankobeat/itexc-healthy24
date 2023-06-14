import { useState } from "react";
import ForgetPassword from "../../components/ForgetPassword/ForgetPassword";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";
import HomeCSS from "./Home.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";

const Home: React.FC = () => {
  const [toggle, setToggle] = useState<string>("SignUp");

  const toggleSignUp = (): void => {
    setToggle("SignUp");
  };
  const toggleSignIn = (): void => {
    setToggle("SignIn");
  };

  return (
    <>
      {/* <div className={HomeCSS.container}>
        <div className={HomeCSS.left}>
          {toggle === "SignUp" && <SignUp toggleSignIn={toggleSignIn} />}
          {toggle === "SignIn" && <SignIn toggleSignUp={toggleSignUp} />}
          <ForgetPassword />

        </div>
        <div className={HomeCSS.right}>
          <div className={HomeCSS.right__header}>
            <h1>We give the best experience</h1>
            <p
              style={{
                fontSize: "20px",
              }}
            >
              Dedicated virtual consulting platform for docotrs and <br />{" "}
              patients to help them consult across vatious channels
            </p>
          </div>
          <img
            src="/images/national-doctors-day-1-920x518-removebg-preview 2.png"
            alt="national-doctors-day-1-920x518-removebg-preview 2.png"
            style={{
              position: "absolute",
              left: 0,
              bottom: 0,
              width: "33%",
            }}
          />
          <img
            src="/images/austin-distel-7bMdiIqz_J4-unsplash-removebg-preview 2.png"
            alt="austin-distel-7bMdiIqz_J4-unsplash-removebg-preview 2.png"
            style={{
              position: "absolute",
              left: "55%",
              transform: "translateX(-55%)",
              bottom: 0,
              width: "60%",
              zIndex: 9,
            }}
          />
          <img
            src="/images/national-cancer-institute-kooSjlL8LnQ-unsplash-removebg-preview 1.png"
            alt="national-cancer-institute-kooSjlL8LnQ-unsplash-removebg-preview 1.png"
            style={{
              position: "absolute",
              right: 0,
              bottom: 0,
              width: "35%",
            }}
          />
          <img
            src="/images/review__card.png"
            alt="review__card"
            className={HomeCSS.review__card_left}
          />
          <img
            src="/images/review__card.png"
            alt="review__card"
            className={HomeCSS.review__card_right}
          />
        </div>
      </div> */}
      <Navbar />
      <div className="container" style={{ borderTop: "0.2px solid black" }}>
        <div className={HomeCSS.sidebar__container}>
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default Home;
