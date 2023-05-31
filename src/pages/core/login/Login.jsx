import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Login.module.scss";
import logo from "../../../assets/logo_eatly1.svg";
import login_image from "../../../assets/Group 34515.png";
import { Link, useLocation, useHistory } from "react-router-dom";

const Login = (props) => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [touched, setTouched] = useState({});
  //error
  const [formError, setFormError] = useState({});
  const [isButtonDisabled, setIsButtonDisabled] = useState(true); // Button disabled state
  const [isLoading, setIsLoading] = useState(false);

  const { search } = useLocation();
  const role = search?.split("?")[1];
  let history = useHistory();

  const validate = (values) => {
    const errors = {};
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email";
    }

    if (!values.password) {
      errors.password = "Password is required";
    }
    return errors;
  };

  useEffect(() => {
    const errors = validate(formValues); 
    setFormError(errors); 
    setIsButtonDisabled(Object.keys(errors).length > 0); 
  }, [formValues]); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    setTouched((prevState) => ({
      ...prevState,
      [name]: true,
    }));
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    // console.log(formValues);

    if (Object.keys(formError).length > 0) {
      setTouched({
        email: true,
        password: true,
      });
    }

    if (Object.keys(formError).length === 0) {
      setTouched({
        email: false,
        password: false,
      });
      setIsLoading(true);
      let userData = {
        email: formValues.email,
        password: formValues.password,
      };

      fetch("https://eatly-api.onrender.com/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(userData),
      })
        .then((response) => response.json())
        .then((data) => {
          const token = data.data.token;
          const userId = data.data.userId;

          // save data in LC
          localStorage.setItem("token", token);
          localStorage.setItem("userId", userId);

          if (data.status === "success") {
            toast.success("login is successful");
            setFormValues({});
            setFormError({});
            e.target.reset();
            setTimeout(() => {
              history.push("/dashboard");
            }, 2000);
          } else {
            toast.error(data.message || data.json.details[0].message);
          }
        })
        .catch((error) => console.log(error))
        .finally(() => {
          setIsLoading(false); // Stop loading state
        });
    }
  };

  if (role !== "merchant" && role !== "customer") {
    toast.warning("invalid role");
    setTimeout(() => {
      return history.push(`/`);
    }, 2000);
  }
  return (
    <>
      <ToastContainer />
      <section className={styles.sigin_container}>
        <div className={styles.big_container}>
          <div className={styles.left_container}>
            <div className={styles.logo_container}>
              <img src={logo} alt="logo" />
            </div>
            <h1 className={styles.title}>Sign In</h1>
            <form className={styles.form} onSubmit={handlesubmit}>
              <div className={styles.form_group}>
                <label className={styles.label_field}>Email</label>
                <input
                  type="email"
                  className={styles.input_field}
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                />
                <div className="errorMsg">
                  {touched.email && formError.email}
                </div>
              </div>
              <div className="form_group">
                <label className={styles.label_field}>Password</label>
                <input
                  type="password"
                  className={styles.input_field}
                  name="password"
                  value={formValues.password}
                  onChange={handleChange}
                />
                <div className="errorMsg">
                  {touched.password && formError.password}
                </div>
              </div>
              <div className={styles.bottom_container}>
                <div className={styles.checkbox_container}>
                  <input type="checkbox" className={styles.checkbox_field} />
                  <label className={styles.label_field}>Remember me?</label>
                </div>
                <div>
                  <Link to="/#" className={styles.password_text}>
                    Forget Password
                  </Link>
                </div>
              </div>
              <div className={styles.btn_container}>
                <button className={styles.btn} disabled={isButtonDisabled}>
                  {isLoading ? (
                    <div
                      aria-label="Loading..."
                      role="status"
                      className="h-8 w-8"
                    >
                      <svg
                        className=" animate-spin h-6 w-6"
                        viewBox="3 3 18 18"
                      >
                        <path
                          className="fill-slate-100"
                          d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
                        ></path>
                        <path
                          className="fill-slate-300"
                          d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"
                        ></path>
                      </svg>
                    </div>
                  ) : (
                    "Sign in"
                  )}
                </button>
              </div>
            </form>

            <h3 className={styles.subtext}>
              Don't have an account?{" "}
              <Link to="/signup" className={styles.link}>
                Click here to sign up
              </Link>
            </h3>
          </div>
          <div className={styles.right_container}>
            <img src={login_image} alt="login_image" className={styles.image} />
          </div>
        </div>
      </section>
    </>
  );
};
export default Login;
