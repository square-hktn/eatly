import { useState, useEffect } from "react";
import styles from "./Profile.module.scss";
import { axiosInstance } from "../../api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { baseUrl } from "../../config.js";

function PersonalInfoCard() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    city: "Lagos",
  });
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    axiosInstance
      .get(`${baseUrl}/user/${userId}`)
      .then((response) => {
        let userData = response.data.data;
        let name = userData.name.split(" ");
        let role = userData.role;
        // save data in LC
        localStorage.setItem("name", name);
        localStorage.setItem("role", role);
        const firstName = name[0];
        const lastName = name[1];
        userData.firstName = firstName;
        userData.lastName = lastName;
        setUser(userData);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  }, []);

  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSaving(true);
    
    const { phoneNumber, city } = user;
    const updatedUser = { phoneNumber, city };
    console.log(updatedUser);
    axiosInstance
      .patch(`${baseUrl}/user/`, updatedUser)
      .then((response) => {
        toast.success("user updated successfully");
        setIsSaving(false);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        console.log(err);
        setIsSaving(false);
      });
  };

  return (
    <>
      <ToastContainer />
      <div>
        <h1 className={styles.title}>Personal Information</h1>
        <p className={styles.subtitle}>Edit the information if required</p>
        <form onSubmit={handleSubmit}>


          {/* First name and last name input fields */}
          <div className={styles.group}>
            <div>
              <label className={styles.label_field}>First Name</label>
              <input
                type="text"
                name="firstName"
                onChange={handleInputChange}
                className={styles.input_field}
                defaultValue={user.firstName}
                readOnly
              />
            </div>
            <div>
              <label className={styles.label_field}>Last Name</label>
              <input
                type="text"
                name="lastName"
                className={styles.input_field}
                defaultValue={user.lastName}
                readOnly
              />
            </div>
          </div>
          {/* Email input field */}
          <div className={styles.box}>
            <label className={styles.label_field}>Email</label>
            <input
              type="email"
              className={styles.input_fieldLong}
              defaultValue={user.email}
              readOnly
            />
          </div>
          {/* Phone number input field */}
          <div className={styles.box}>
            <label className={styles.label_field}>Phone Number</label>
            <input
              type="number"
              name="phoneNumber"
              className={styles.input_fieldLong}
              defaultValue={user.phoneNumber}
              //   value={formValues.phoneNumber}
              onChange={handleInputChange}
            />
          </div>
          {/* Location input field */}
          <div className={styles.box}>
            <label className={styles.label_field}>Location</label>
            <input
              type="text"
              name="city"
              className={styles.input_fieldLong}
              //  value={formValues.city}
              defaultValue={user.city}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.btn_container}>
            <button
              type="submit"
              className={`${styles.btn} ${
                isSaving ? styles.btn : styles.disabled
              }`}
              disabled={isSaving}
            >
              {isSaving ? "Saving ..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default PersonalInfoCard;
