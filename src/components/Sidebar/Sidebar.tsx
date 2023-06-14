import React, { useState } from "react";
import SidebarCSS from "./Sidebar.module.css";
import { useMediaQuery } from "react-responsive";
import { SidebarData } from "../../mock/sidebar";

const Sidebar: React.FC = () => {
  const isBigScreen: boolean = useMediaQuery({
    query: "(min-width: 900px)",
  });

  const [active, setActive] = useState("Dashboard");
  return (
    <>
      {isBigScreen && (
        <div className={SidebarCSS.container}>
          <ul>
            {SidebarData.map((x) => (
              <li className={active === x.label ? SidebarCSS.active__li : ""}>
                <img src={x.icon} alt={x.label} /> {x.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Sidebar;
