import styles from "./Homepage.module.scss";
import logo from "../../assets/logo_eatly1.svg";
import clientImage from "../../assets/client_image.png";
import merchantImage from "../../assets/merchant_image.png";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Homepage = (props) => {
  const [selectedRole, setSelectedRole] = useState("customer");
  let history = useHistory();

  const handleRedirect = () => {
    if (selectedRole === "customer" || selectedRole === "merchant") {
      history.push(`/signin?role=${selectedRole}`);
    } else {
      console.log("Invalid role");
    }
  };

  const isButtonDisabled = selectedRole === "";

  return (
    <div className={styles.Homepage_container}>
      <div className={styles.Big_container}>
        <div className={styles.logo_container}>
          <img src={logo} alt="eatly_logo" />
          <h1 className={styles.title}>Choose your login type</h1>
        </div>
        <div className={styles.container}>
          <div
            className={
              selectedRole === "customer"
                ? styles.role_wrapper_active
                : styles.role_wrapper
            }
            onClick={() => setSelectedRole("customer")}
          >
            <div
              className={
                selectedRole === "customer"
                  ? styles.selectedRoleActive
                  : styles.selectedRole
              }
            ></div>
            <div className={styles.innerContainer}>
              <img src={clientImage} alt="clientImage" />
              <h1 className={styles.subTitle}>For Customer</h1>
              <p className={styles.subtext}>Order food online now!</p>
            </div>
          </div>
          <div
            className={
              selectedRole === "merchant"
                ? styles.role_wrapper_active
                : styles.role_wrapper
            }
            onClick={() => setSelectedRole("merchant")}
          >
            <div
              className={
                selectedRole === "merchant"
                  ? styles.selectedRoleActive
                  : styles.selectedRole
              }
            ></div>
            <div className={styles.innerContainer}>
              <img src={merchantImage} alt="merchantImage" />
              <h1 className={styles.subTitle}>For Merchant</h1>
              <p className={styles.subtext}>Manage your restaurant!</p>
            </div>
          </div>
        </div>
        <div className={styles.btn_container}>
          <button
            className={styles.btn}
            onClick={handleRedirect}
            disabled={isButtonDisabled}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
