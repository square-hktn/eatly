import React, { /*useEffect*/ useState } from "react";
import logo from "../assets/logo_eatly1.svg";
import logout from "../assets/exit.svg";
import home from "../assets/home.svg";
import notification from "../assets/notification.svg";
import cart from "../assets/cart.svg";
import profile from "../assets/profile.svg";
import { Link, useHistory } from "react-router-dom";
import { handleLogout } from "../api";
import homeInactive from '../assets/home-inactive.svg';
import cartInactive from '../assets/cart-inactive.svg';

const Sidebar = (props) => {
  const [activeIcon, setActiveIcon] = useState(props.active ?? "home");
  const navigate = useHistory();

  const handleProfile = () => {
    setActiveIcon("profile")
    navigate.push("/customer-profile");
  };

  const handleHome = () => {
    if(activeIcon !== "home") {
      setActiveIcon("home");
      navigate.push("/dashboard");
    }
  };

  const handleOrders = () => {
    if(activeIcon !== "cart") {
      setActiveIcon("cart");
      navigate.push("/orders");
    }
  };

  const handleUserLogout = () => {
    handleLogout();
    navigate.push("/");
  }

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
          onClick={handleHome}
        >
          <img className="sidebar_logo_image" alt="eatlyLogo" src={(activeIcon === "home") ? home : homeInactive} />
        </div>
        <div
          className={
            activeIcon === "profile"
              ? "sidebar_logo_circle_active"
              : "sidebar_logo_circle"
          }
          onClick={() => handleProfile()}
        >
          <img
            className="sidebar_logo_image"
            alt="eatlyLogo"
            src={profile}
          />
        </div>
        <div
          className={
            activeIcon === "cart"
              ? "sidebar_logo_circle_active"
              : "sidebar_logo_circle"
          }
          onClick={handleOrders}
        >
          <img className="sidebar_logo_image" alt="eatlyLogo" src={(activeIcon === "cart") ? cartInactive : cart} />
        </div>
      </div>
      <img className="sidebar_logo_image_logout" alt="eatlyLogo" onClick={handleUserLogout} src={logout} />
    </div>
  );
};
export default Sidebar;
