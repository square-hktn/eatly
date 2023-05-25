import styles from "./Homepage.module.scss";
import logo from "../../assets/logo_eatly1.svg";
import clientImage from "../../assets/client_image.png";
import merchantImage from "../../assets/merchant_image.png";

const Homepage = (props) => {
  return (
    <section className={styles.Homepage_container}>
      <div className={styles.Big_container}>
        <div className={styles.logo_container}>
          <img src={logo} alt="eatly_logo" />
          <h1 className={styles.title}>Choose your login type</h1>
        </div>
        <div className={styles.container}>
          <div className={styles.innerContainer}>
            <img src={clientImage} alt="clientImage" />
            <h1 className={styles.subTitle}>For Customer</h1>
            <p className={styles.subtext}>Order food online now!</p>
          </div>
          <div className={styles.innerContainer}>
            <img src={merchantImage} alt="merchantImage" />
            <h1 className={styles.subTitle}>For Merchant</h1>
            <p className={styles.subtext}>Manage your restaurant!</p>
          </div>
        </div>
        <div className={styles.btn_container}>
          <button className={styles.btn}>Continue</button>
        </div>
      </div>
    </section>
  );
};
export default Homepage;
