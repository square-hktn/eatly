import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Signup.scss";
import logo from "../../../assets/logo_eatly1.svg";
import login_image from "../../../assets/Group 34515.png";
import { Link, useHistory } from "react-router-dom";
const Signup = (props) => {
  const navigate = useHistory();

  const [formValues, setFormValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    password: "",
    city: "",
    role: "",
    restaurantName: "",
  });

  const [touched, setTouched] = useState({});
  //error
  const [formError, setFormError] = useState({});
  const [isButtonDisabled, setIsButtonDisabled] = useState(true); // Button disabled state
  const [isLoading, setIsLoading] = useState(false);

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

    if (!values.first_name) {
      errors.first_name = "First Name is required";
    }
    if (!values.last_name) {
      errors.last_name = "Last Name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email";
    }
    if (!values.phone_number) {
      errors.phone_number = "Phone Number is required";
    }

    if (!values.password) {
      errors.password = "Password is required";
    }
    if (!values.city) {
      errors.city = "Please enter your city";
    }

    if (!values.restaurantName && values.role === "Merchant") {
      errors.restaurantName = "Please enter your resturant Name";
    }

    if (!values.role) {
      errors.role = "Please select a role";
    }

    return errors;
  };

  useEffect(() => {
    const errors = validate(formValues);
    setFormError(errors);
    setIsButtonDisabled(Object.keys(errors).length > 0);
  }, [formValues]);

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(formValues);

    if (Object.keys(formError).length > 0) {
      setTouched({
        first_name: true,
        last_name: true,
        email: true,
        phone_number: true,
        password: true,
        city: true,
        role: true,
        restaurantName: true,
      });
    }

    if (Object.keys(formError).length === 0) {
      setTouched({
        first_name: false,
        last_name: false,
        email: false,
        phone_number: false,
        password: false,
        city: false,
        role: false,
        restaurantName: false,
      });
      setIsLoading(true);
      let userData = {
        name: `${formValues.first_name} ${formValues.last_name}`,
        email: formValues.email,
        password: formValues.password,
        phoneNumber: formValues.phone_number,
        role: formValues.role,

        //FIXME: Add city to user creation data
        //   city: formValues.city,
      };

      if (formValues.role === "merchant") {
        userData.restaurantName = formValues.restaurantName;
      }

      fetch("https://eatly-api.onrender.com/user", {
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
            toast.success("New user is created");
            setFormValues({});
            setFormError({});
            e.target.reset();
            setTimeout(() => {
              navigate.push("/dashboard");
            }, 2000);
          } else {
            toast.error(data.message || data.json.details[0].message);
          }
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <>
      <ToastContainer />
      <section className="signup_container">
        <div className="big_container">
          <div className="left_container">
            <div className="logo_container">
              <img src={logo} alt="logo" />
            </div>
            {formValues.role === "merchant" ? (
              <h1 className="title">Merchant Sign Up</h1>
            ) : (
              <h1 className="title">Sign Up</h1>
            )}
            <form className="form" onSubmit={handlesubmit}>
              <div className="form_group">
                <div>
                  <label className="label_field">Role</label>
                  <select
                    value={formValues.role}
                    onChange={handleChange}
                    name="role"
                    className="select_field"
                    style={{
                      width:
                        formValues.role === "merchant"
                          ? "250px"
                          : "@media (min-width: 360px) and (max-width: 1100px)"
                          ? "500px"
                          : "300px",
                    }}
                  >
                    <option value="">select an a role</option>

                    <option value="user">Customer</option>
                    <option value="merchant">Merchant</option>
                  </select>
                  <div className="errorMsg">
                    {touched.role && formError.role}
                  </div>
                </div>
                {formValues.role === "merchant" && (
                  <div>
                    <label className="label_field">Name of Restaurant</label>
                    <input
                      type="text"
                      className="input_field"
                      name="restaurantName"
                      value={formValues.restaurantName}
                      onChange={handleChange}
                    />
                    <div className="errorMsg">
                      {touched.restaurantName && formError.restaurantName}
                    </div>
                  </div>
                )}
              </div>

              <div className="form_group">
                <div>
                  <label className="label_field">First Name</label>
                  <input
                    type="text"
                    className="input_field"
                    name="first_name"
                    value={formValues.first_name}
                    onChange={handleChange}
                  />
                  <div className="errorMsg">
                    {touched.first_name && formError.first_name}
                  </div>
                </div>

                <div>
                  <label className="label_field">Last Name</label>
                  <input
                    type="text"
                    className="input_field"
                    name="last_name"
                    value={formValues.last_name}
                    onChange={handleChange}
                  />
                  <div className="errorMsg">
                    {touched.last_name && formError.last_name}
                  </div>
                </div>
              </div>

              <div className="form_group">
                <div>
                  <label className="label_field">Email</label>
                  <input
                    type="email"
                    className="input_field"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                  />
                  <div className="errorMsg">
                    {touched.email && formError.email}
                  </div>
                </div>

                <div>
                  <label className="label_field">Phone No.</label>
                  <input
                    type="number"
                    className="input_field"
                    name="phone_number"
                    value={formValues.phone_number}
                    onChange={handleChange}
                  />
                  <div className="errorMsg">
                    {touched.phone_number && formError.phone_number}
                  </div>
                </div>
              </div>

              <div className="form_group">
                <div>
                  <label className="label_field">Password</label>
                  <input
                    type="password"
                    className="input_field"
                    name="password"
                    value={formValues.password}
                    onChange={handleChange}
                  />

                  <div className="errorMsg">
                    {touched.password && formError.password}
                  </div>
                </div>
                <div>
                  <label className="label_field">City</label>
                  <input
                    type="text"
                    className="input_field"
                    name="city"
                    value={formValues.city}
                    onChange={handleChange}
                  />
                  <div className="errorMsg">
                    {touched.city && formError.city}
                  </div>
                </div>
              </div>

              <div className="bottom_container">
                <div>
                  <input type="checkbox" className="checkbox_field" />
                  <label
                    className="label_field"
                    style={{ marginLeft: "0.5rem" }}
                  >
                    I agree with the terms of use
                  </label>
                </div>
              </div>
              <div className="btn_container">
                <button className="btn" disabled={isButtonDisabled}>
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
                    "Sign Up"
                  )}
                </button>
              </div>
            </form>

            <h3 className="subtext">
              Already have an Account{" "}
              <Link to="/signin" className="link">
                Sign In
              </Link>
            </h3>
          </div>
          <div className="right_container">
            <img src={login_image} alt="login_image" className="image" />
          </div>
        </div>
      </section>
    </>
  );
};
export default Signup;
