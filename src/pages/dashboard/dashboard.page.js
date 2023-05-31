import { useState } from "react";
import Sidebar from "../../component/sidebar";
import Product from "../../component/product/product";
import styles from "./dashboard.module.scss";
import cartIcon from "../../assets/cart-icon.svg";
import locationIcon from "../../assets/Location.svg";
import SquarePayment from "../../component/square_payment/SquarePayment";
import AddressModal from "../../component/cart/AddressModal";
import ConfirmationModal from "../../component/confirmationModal/ConfirmationModal";

const Dashboard = (props) => {
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
  let itemCount = 0;
  const userCart = localStorage.getItem('userCart');
  if(userCart) {
    const cartData = JSON.parse(userCart);
    const qty = cartData.reduce((prev, curr) => prev + curr.qty, 0);
    itemCount = qty;
  }

  const showModal = () => {
    setShow(!show);
  };

  const handleConfirmation = () => {
    setShowConfirmation(!showConfirmation);
  }

  return (
    <div className={styles.dashboard_main}>
      <Sidebar />

      <div className={styles.sidebarHinge}></div>
      <div className={styles.content}>
        <Product
          setItemTotal={setItemTotal}
        />
      </div>
      <div className={styles.cartHinge}></div>
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
export default Dashboard;
