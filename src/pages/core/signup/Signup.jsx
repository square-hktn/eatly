import { useState, useEffect } from "react";
import "./Signup.scss";
import logo from "../../../assets/logo_eatly1.svg";
import login_image from "../../../assets/Group 34515.png";
import { Link } from "react-router-dom";
const Signup = (props) => {
  const [formValues, setFormValues] = useState({
    
  });
  const [touched, setTouched] = useState({});
  //error
  const [formError, setFormError] = useState({});

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
    const passwordregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

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
    } else if (!passwordregex.test(values.password)) {
      errors.password =
        "incorrect password, it must contain letters, number and special characters";
    }
    if (!values.city) {
      errors.city = "Please enter your city";
    }

    if (!values.restaurantName) {
      errors.restaurantName = "Please enter your resturant Name";
    }

    if (!values.role) {
      errors.role = "Please select a role";
    }

    return errors;
  };

  useEffect(() => {
    validate(formValues);
    setFormError(validate(formValues));
  }, [formValues, touched]);

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

      const userData = {
        name: `${formValues.first_name} ${formValues.last_name}`,
        email: formValues.email,
        password: formValues.password,
        phoneNumber: formValues.phone_number,
        role: formValues.role,
        restaurantName:
          formValues.role === "merchant" ? formValues.restaurantName : "",
        //FIXME: Add city to user creation data
        //   city: formValues.city,
      };
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
          if (data?.success === "true") {
            alert("success");
            setFormValues({});
            setFormError({});
            e.target.reset();
          } else {
            alert("failure");
          }
        })
        .catch((error) => console.log(error));
    }
  };

  return (
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
                >
                                  <option value="">select an a role</option>
                  
                  <option value="user">Customer</option>
                  <option value="merchant">Merchant</option>
                </select>
                <div className="errorMsg">{touched.role && formError.role}</div>
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
                <div className="errorMsg">{touched.city && formError.city}</div>
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
