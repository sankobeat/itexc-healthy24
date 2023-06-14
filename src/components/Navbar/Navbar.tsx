import React from "react";
import NavbarCSS from "./Navbar.module.css";
import { useMediaQuery } from "react-responsive";

const Navbar: React.FC = () => {
  const isBigScreen: boolean = useMediaQuery({
    query: "(min-width: 900px)",
  });

  const isMobile: boolean = useMediaQuery({
    query: "(max-width: 900px)",
  });

  return (
    <>
      {isBigScreen && (
        <header>
          <div className={NavbarCSS.container}>
            <div className={NavbarCSS.logo}>
              <img src="/images/logo.png" alt="Healthy24" />
            </div>
            <div className={NavbarCSS.nav__right}>
              <div className={NavbarCSS.notification__bell}>
                <img src="/images/Notification.png" alt="notification-bell" />
                <span className={NavbarCSS.notification__bell__num}>5</span>
              </div>
              <div className={NavbarCSS.notification__setting}>
                <img src="/images/Setting.png" alt="setting" />
              </div>
              <div className={NavbarCSS.avatar}>
                <img src="/images/Avatar.png" alt="avatar" />
              </div>
            </div>
          </div>
        </header>
      )}
    </>
  );
};

export default Navbar;
