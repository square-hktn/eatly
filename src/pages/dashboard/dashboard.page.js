import { useState } from "react";
import Sidebar from "../../component/sidebar";
import Product from "../../component/product/product";
import styles from "./dashboard.module.scss";
import cartIcon from "../../assets/cart-icon.svg";
import locationIcon from "../../assets/Location.svg";
import SquarePayment from "../../component/square_payment/SquarePayment";
import AddressModal from "../../component/cart/AddressModal";
import PaymentModal from "../../component/cart/PaymentModal";
import ConfirmationModal from "../../component/cart/ConfirmationModal";


const Dashboard = (props) => {
  const [show, setShow] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [address, setAddress] = useState({
    street: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const showModal = () => {
    setShow(!show);
  };
  return (
    <div className={styles.dashboard_main}>
      <Sidebar />
      <PaymentModal/>
     
      <div className={styles.sidebarHinge}></div>
      <div className={styles.content}>
        <Product />
      </div>
      <div className={styles.cartHinge}></div>
      <div className={styles.cartSection}>
        <div className={styles.cartIconAssets}>
          <img
            src={cartIcon}
            alt="cartIcon"
            className={styles.cartSectionImages}
          />

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
      {showPaymentModal && <SquarePayment address={address}/>}
    </div>
  );
};
export default Dashboard;
