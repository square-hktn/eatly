import { useState, useEffect } from "react";
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
  const [messageType, setMessageType] = useState("");
  const [showToast, setShowToast] = useState(false);
  const { search } = useLocation();
  const role = search?.split("?")[1];
  let history = useHistory();

  useEffect(() => {
    validate(formValues);
    setFormError(validate(formValues));
    setIsButtonDisabled(Object.keys(formError).length > 0); // Disable button if there are form errors
  }, [formValues, touched, formError]);

  if (role !== "merchant" && role !== "customer") {
    setMessageType("invalid role");
    setShowToast(true);
    //window.alert("invalid role");
    return history.push(`/`);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

    setTouched((prevState) => ({
      ...prevState,
      [e.target.name]: true,
    }));
  };

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
          console.log(data);
          if (data.status === "success") {
            setMessageType("login is successful");
            setShowToast(true);
            setFormValues({});
            setFormError({});
            e.target.reset();
            history.push("/dashboard");
          } else {
            setMessageType(data.message || data.json.details[0].message);
            setShowToast(true);
          }
        })
        .catch((error) => console.log(error))
        .finally(() => {
          setIsLoading(false); // Stop loading state
        });
    }
  };

  return (
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
              <div className="errorMsg">{touched.email && formError.email}</div>
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
                  <div className="flex justify-center items-center">
                    <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-5 w-5" />
                  </div>
                ) : (
                  "Sign in"
                )}
              </button>
            </div>
          </form>
          {showToast && (
            <div className={styles.ToastContainer}>
              <div className={styles.centered}>
                <div
                  className={`${styles.toast} toast white py-2 px-4 rounded`}
                >
                  <div
                    className="flex justify-end text-lg font-bold cursor-pointer"
                    onClick={() => setShowToast(false)}
                  >
                    x
                  </div>
                  <h1 className={styles.toastTitle}>{messageType}</h1>
                </div>
              </div>
            </div>
          )}
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
  );
};
export default Login;
