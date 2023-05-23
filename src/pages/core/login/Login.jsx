import React from "react";
import "./Login.scss";
import logo from "../../../assets/logo_eatly1.svg";
import login_image from "../../../assets/Group 34515.png";
import { Link } from "react-router-dom";

const Login = (props) => {
  return (
    <section className="login_container">
      <div className="big_container">
        <div className="left_Container">
          <div className="logo_container">
            <img src={logo} alt="logo" />
          </div>
          <h1 className="title">Sign In</h1>
          <form className="form">
            <div className="form_group">
              <label className="label_field">Resturant</label>
              <select className="select_field">
                <option>Select a Resturant</option>
              </select>
            </div>
            <div className="form_group">
              <label className="label_field">Email</label>
              <input type="email" className="input_field" />
            </div>
            <div className="form_group">
              <label className="label_field">Password</label>
              <input type="password" className="input_field" />
            </div>
            <div className="bottom_container">
              <div className="form_group">
                <input type="checkbox" className="checkbox_field" />
                <label className="label_field">Remember me?</label>
              </div>
              <div>
                <Link className="password_text">Forget Password</Link>
              </div>
            </div>
            <button className="btn">Sign in</button>
          </form>
          <h3 className="subtext">
            Don't have an account?{" "}
            <Link to="/signup" className="link">
              Click here to sign up
            </Link>
          </h3>
        </div>
        <div className="right_container">
          <img src={login_image} alt="login_image" className="image" />
        </div>
      </div>
    </section>
  );
};
export default Login;
