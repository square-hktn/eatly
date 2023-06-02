import { useState, useEffect } from "react";
import styles from "./Profile_page.module.scss";

import cartIcon from "../../assets/cart-icon.svg";
import locationIcon from "../../assets/Location.svg";
import SquarePayment from "../../component/square_payment/SquarePayment";
import AddressModal from "../../component/addressModal/AddressModal";
import ConfirmationModal from "../../component/confirmationModal/ConfirmationModal";

//components of the profile
import MostOrderedCard from "../../component/customer-profile/MostOrderedCard";
import PersonalInfoCard from "../../component/customer-profile/PersonalInfoCard";
import ProfileHeader from "../../component/customer-profile/ProfileHeader";
import Sidebar from "../../component/sidebar";
const CustomerProfile = () => {
  const [show, setShow] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [itemTotal, setItemTotal] = useState(0);
  const [address, setAddress] = useState({
    street: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const [currentDate, setCurrentDate] = useState(new Date());
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const dateObj = new Date();
      setCurrentDate(dateObj);

      const day = dateObj.getDate();
      const month = dateObj.toLocaleString("default", { month: "long" }); // Get month in full alphabet format
      const year = dateObj.getFullYear();

      setDay(day);
      setMonth(month);
      setYear(year);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  let itemCount = 0;

  const userCart = localStorage.getItem("userCart");
  if (userCart) {
    const cartData = JSON.parse(userCart);
    const qty = cartData.reduce((prev, curr) => prev + curr.qty, 0);
    itemCount = qty;
  }

  const showModal = () => {
    setShow(!show);
  };

  const handleConfirmation = () => {
    setShowConfirmation(!showConfirmation);
  };

  return (
    <div className={styles.profile_Container}>
      <div className={styles.sidebar_container}>
        <Sidebar />
      </div>
      <div className={styles.profile_body}>
        <div className={styles.profile_header}>
          <div className={styles.profile_header_left}>
            <h1 className={styles.header_title}>profile</h1>
            <h2 className={styles.header_date}>
              {day} {month} {year}
            </h2>
          </div>

          <div className={styles.headerRight}>
            <input type="text" placeholder="Search for a dish, feature..." />
          </div>
        </div>
        <div className={styles.profile_innerBody}>
          <div className={styles.innerBodyLeft}>
            <PersonalInfoCard />
          </div>
          <div className={styles.innerBodyRight}>
            <div>
              <ProfileHeader />
            </div>
            <div>
              <MostOrderedCard />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.cartSection}>
        <div className={styles.cartIconAssets}>
          <div className={styles.cartCounterSection}>
            <div className={styles.cartCounter}>
              <h1 className={styles.totalCartItemCount}>{itemCount}</h1>
            </div>
            <img
              src={cartIcon}
              alt="cartIcon"
              className={styles.cartSectionImages}
              onClick={handleConfirmation}
            />
          </div>
          <img
            src={locationIcon}
            alt="locationIcon"
            className={styles.cartSectionImages}
            onClick={showModal}
          />
        </div>
      </div>

      {show && (
        <AddressModal
          setShow={setShow}
          setAddress={setAddress}
          setShowPaymentModal={setShowPaymentModal}
        />
      )}
      {showPaymentModal && (
        <SquarePayment
          address={address}
          setShowPaymentModal={setShowPaymentModal}
        />
      )}
      {showConfirmation && (
        <ConfirmationModal
          setShow={setShowConfirmation}
          setShowAddress={setShow}
        />
      )}
    </div>
  );
};

export default CustomerProfile;
