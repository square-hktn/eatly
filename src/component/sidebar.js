import React, { /*useEffect*/ useState } from "react";
import logo from "../assets/logo_eatly1.svg";
import logout from "../assets/exit.svg";
import home from "../assets/home.svg";
import notification from "../assets/notification.svg";
import cart from "../assets/cart.svg";
import profile from "../assets/profile.svg";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  const [activeIcon, setActiveIcon] = useState("home");

  return (
    <div className="sidebar_wrapper">
      <div className="sidebar_logo">
        <Link to="/" className="sidebar_logo_image">
          <img alt="eatlyLogo" src={logo} />
        </Link>
      </div>
      <div className="sidebar_icons">
        <div
          className={
            activeIcon === "home"
              ? "sidebar_logo_circle_active"
              : "sidebar_logo_circle"
          }
          onClick={() => setActiveIcon("home")}
        >
          <img className="sidebar_logo_image" alt="eatlyLogo" src={home} />
        </div>
        <div
          className={
            activeIcon === "notification"
              ? "sidebar_logo_circle_active"
              : "sidebar_logo_circle"
          }
          onClick={() => setActiveIcon("notification")}
        >
          <img
            className="sidebar_logo_image"
            alt="eatlyLogo"
            src={notification}
          />
        </div>
        <div
          className={
            activeIcon === "profile"
              ? "sidebar_logo_circle_active"
              : "sidebar_logo_circle"
          }
          onClick={() => setActiveIcon("profile")}
        >
          <img className="sidebar_logo_image" alt="eatlyLogo" src={profile} />
        </div>
        <div
          className={
            activeIcon === "cart"
              ? "sidebar_logo_circle_active"
              : "sidebar_logo_circle"
          }
          onClick={() => setActiveIcon("cart")}
        >
          <img className="sidebar_logo_image" alt="eatlyLogo" src={cart} />
        </div>
      </div>
      <img className="sidebar_logo_image_logout" alt="eatlyLogo" src={logout} />
    </div>
  );
};
export default Sidebar;
