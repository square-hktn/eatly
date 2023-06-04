import { Fragment, useEffect, useState } from "react"
import styles from './order.module.scss';
import Sidebar from "../../component/sidebar";
import Header from "../../component/header/header.page";
import SingleOrder from "./order-section";
import { baseUrl } from "../../config";
import { axiosInstance } from "../../api";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if(orders && orders.length < 1) {
      axiosInstance.get(`${baseUrl}/order`)
        .then((res) => {
          const response = res.data.data;
          setOrders(response);
        })
        .catch((e) => {
          console.log(e, "ERROR")
        })
    }
  });

  return (
    <Fragment>
      <div className={styles.orderContainer}>
        <Sidebar 
          active={"cart"}
        />
        <div className={styles.orderSidebarHinge}></div>
        <div className={styles.orderDetailContent}>
          <Header
            page="Orders"
          />
          <div className={styles.orderList}>
          {orders.length === 0 ? (<h1>No order yet</h1> ) : ""}
            <SingleOrder
              orders={orders}
            />
          </div>
        </div>
      </div>
    </Fragment>
  )
}
export default Orders;