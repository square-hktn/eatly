import React from "react";
import Sidebar from "../../component/sidebar";
import Product from "../../component/product/product";
import styles from './dashboard.module.scss';
import cartIcon from '../../assets/cart-icon.svg';
import locationIcon from '../../assets/Location.svg';

//import ConfirmationModal from "../../component/ConfirmationModal";
//import AddressModal from '../../component/AddressModal'

const Dashboard = (props) => {
  return (
      <div className={styles.dashboard_main}>
        <Sidebar/>
        <div className={styles.sidebarHinge}></div>
        <div className={styles.content}>
          <Product/>
        </div>
        <div className={styles.cartHinge}></div>
        <div className={styles.cartSection}>
          <div className={styles.cartIconAssets}>
          <img src={cartIcon} alt="cartIcon" className={styles.cartSectionImages}/>
          <img src={locationIcon} alt="locationIcon" className={styles.cartSectionImages}/>
          </div>
        </div>
      </div>
  );
};
export default Dashboard;
