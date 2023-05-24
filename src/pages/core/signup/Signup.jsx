import React from "react";
import "./Signup.scss";
import logo from "../../../assets/logo_eatly1.svg";
import login_image from "../../../assets/Group 34515.png";
import { Link } from "react-router-dom";
const Signup = (props) => {
  return (
    <section className="signup_container">
      <div className="big_container">
        <div className="left_container">
          <div className="logo_container">
            <img src={logo} alt="logo" />
          </div>
          <h1 className="title">Sign Up</h1>
          <form className="form">
            <div className="form_group">
              <div>
                <label className="label_field">First Name</label>
                <input type="text" className="input_field" />
              </div>
              <div>
                <label className="label_field">Last Name</label>
                <input type="text" className="input_field" />
              </div>
            </div>
            <div className="form_group">
              <div>
                <label className="label_field">Email</label>
                <input type="email" className="input_field" />
              </div>
              <div>
                <label className="label_field">Phone No.</label>
                <input type="number" className="input_field" />
              </div>
            </div>

            <div className="form_group">
              <div>
                <label className="label_field">Password</label>
                <input type="password" className="input_field" />
              </div>
              <div>
                <label className="label_field">City</label>
                <input type="text" className="input_field" />
              </div>
            </div>

            <div className="bottom_container">
              <div>
                <input type="checkbox" className="checkbox_field" />
                <label className="label_field">
                  I agree with the terms of use
                </label>
              </div>
            </div>
            <div className="btn_container">
              <button className="btn">Sign in</button>
            </div>
          </form>
          <h3 className="subtext">
            Already have an Account{" "}
            <Link to="/signin" className="link">
              Sign in
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
export default Signup;
