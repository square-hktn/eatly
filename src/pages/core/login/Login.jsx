import React from "react";
import styles from "./Login.module.scss";
import logo from "../../../assets/logo_eatly1.svg";
import login_image from "../../../assets/Group 34515.png";
import { Link, useLocation, useHistory } from "react-router-dom";

const Login = (props) => {
  const { search } = useLocation();
  const role = search?.split('?')[1];
  let history = useHistory();

  if(role !== 'merchant' && role !== 'customer') {
    window.alert('invalid role');
    return history.push(`/`);
  }

  return (
    <section className={styles.sigin_container}>
      <div className={styles.big_container}>
        <div className={styles.left_container}>
          <div className={styles.logo_container}>
            <img src={logo} alt="logo" />
          </div>
          <h1 className={styles.title}>Sign In</h1>
          <form className={styles.form}>
            <div className={styles.form_group}>
              <label className={styles.label_field}>Email</label>
              <input type="email" className={styles.input_field} />
            </div>
            <div className="form_group">
              <label className={styles.label_field}>Password</label>
              <input type="password" className={styles.input_field} />
            </div>
            <div className={styles.bottom_container}>
              <div className={styles.checkbox_container}>
                <input type="checkbox" className={styles.checkbox_field} />
                <label className={styles.label_field}>Remember me?</label>
              </div>
              <div>
                <Link to="/#" className={styles.password_text}>Forget Password</Link>
              </div>
            </div>
            <div className={styles.btn_container}>
              <button className={styles.btn}>Sign in</button>
            </div>
          </form>
          <h3 className={styles.subtext}>
            Don't have an account?{" "}
            <Link to="/signup" className={styles.link}>
              Click here to sign up
            </Link>
          </h3>
        </div>
        <div
          className={styles.right_container}
          
        >
          <img src={login_image} alt="login_image" className={styles.image} />
        </div>
      </div>
    </section>
  );
};
export default Login;
