import React from "react";
import logo from '../assets/logo_eatly1.svg'
import logout from '../assets/exit.svg';
import home from '../assets/home.svg';
import notification from '../assets/notification.svg';
import cart from '../assets/cart.svg';
import profile from '../assets/profile.svg';

const Sidebar = (props) => {
  return (
      <div className="sidebar_wrapper">
        <div className="sidebar_logo">
          <img className="sidebar_logo_image" alt="eatlyLogo" src={logo} />
        </div>
        <div className="sidebar_icons">
          <div className="sidebar_logo_circle_active">
            <img className="sidebar_logo_image" alt="eatlyLogo" src={home} />
          </div>
          <div className="sidebar_logo_circle">
            <img className="sidebar_logo_image" alt="eatlyLogo" src={notification} />
          </div>
          <div className="sidebar_logo_circle">
            <img className="sidebar_logo_image" alt="eatlyLogo" src={profile} />
          </div>
          <div className="sidebar_logo_circle">
            <img className="sidebar_logo_image" alt="eatlyLogo" src={cart} />
          </div>
        </div>
        <img className="sidebar_logo_image_logout" alt="eatlyLogo" src={logout} />
      </div>
  );
};
export default Sidebar;
